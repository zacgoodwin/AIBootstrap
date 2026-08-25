#!/usr/bin/env node
// Answers "what moved upstream" for everything in tools/sources.json: the
// skills vendored under .claude/skills/ and the pack catalogs under
// docs/frameworks/. Deterministic half of /skills-update — it compares shas
// and copies files; deciding whether an upstream change is WANTED is the
// skill's job (.claude/skills/skills-update/SKILL.md).
//
// Transport is git, not the GitHub API: `git ls-remote` needs no auth, has no
// rate limit, and works anywhere a clone works.
//
//   node tools/skills-update.mjs check [--json] [--offline]
//     --strict  exit 1 unless every entry is current, local, or manual
//   node tools/skills-update.mjs diff <id> [--full]
//   node tools/skills-update.mjs pull <id> [--force]
//   node tools/skills-update.mjs stamp <id> --commit <sha|HEAD> [--date YYYY-MM-DD]
//   node tools/skills-update.mjs --self-test
import { execFile, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve } from "node:path";

export const ROOT = resolve(dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1")), "..");
const SOURCES = join(ROOT, "tools/sources.json");
const UNPINNED = "Upstream not pinned";
const CACHE = process.env.SKILLS_UPDATE_CACHE || join(tmpdir(), "aibootstrap-skills-cache");

// ---------------------------------------------------------------- manifest

export function loadSources(file = SOURCES) {
  return JSON.parse(readFileSync(file, "utf8"));
}

/** Structural problems only — filesystem agreement is the gate's job. */
export function validateSources(data) {
  const errs = [];
  if (!data || !Array.isArray(data.entries)) return ["sources.json: missing entries[]"];
  const seen = new Set();
  for (const e of data.entries) {
    const at = `sources.json[${e?.id ?? "?"}]`;
    if (!e.id) { errs.push(`${at}: missing id`); continue; }
    if (seen.has(e.id)) errs.push(`${at}: duplicate id`);
    seen.add(e.id);
    if (!["skill", "skill-group", "pack"].includes(e.kind)) errs.push(`${at}: bad kind '${e.kind}'`);
    if (e.kind === "skill" && !e.path) errs.push(`${at}: skill needs path`);
    if (e.kind === "skill-group" && !Array.isArray(e.paths)) errs.push(`${at}: skill-group needs paths[]`);
    if (e.kind === "pack" && !e.doc) errs.push(`${at}: pack needs doc`);
    const u = e.upstream;
    if (!u || !["git", "manual", "local"].includes(u.type)) errs.push(`${at}: upstream.type must be git|manual|local`);
    else if (u.type === "git" && !/^https:\/\/\S+$/.test(u.repo || "")) errs.push(`${at}: git upstream needs an https repo url`);
    if (e.pinned !== null && e.pinned !== undefined) {
      if (!e.pinned.commit && !e.pinned.version) errs.push(`${at}: pinned needs a commit or a version`);
      if (e.pinned.commit && !/^[0-9a-f]{7,40}$/.test(e.pinned.commit)) errs.push(`${at}: pinned.commit is not a sha`);
      if (e.pinned.date && !isDate(e.pinned.date)) errs.push(`${at}: pinned.date must be YYYY-MM-DD`);
    }
    if (e.checked != null && !isDate(e.checked)) errs.push(`${at}: checked must be YYYY-MM-DD or null`);
    if (e.upstream?.type === "git" && e.pinned == null && e.checked != null) {
      errs.push(`${at}: unpinned entries cannot carry a checked date`);
    }
  }
  return errs;
}

const isDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s);
export const entryPaths = (e) => (e.kind === "skill-group" ? e.paths : e.kind === "pack" ? [e.doc] : [e.path]);
export const findEntry = (data, id) => data.entries.find((e) => e.id === id);

// ------------------------------------------------------------- header prose

/**
 * Reads the provenance sentence out of a docs/frameworks/ file. The prose is
 * hand-written and comes in several shapes ("Upstream commit X (date) checked
 * Y", "Upstream v6.3.0 (b36e082) checked Y", "Upstream 1.68.3.0 checked Y"),
 * so this is deliberately loose about everything except the tokens it returns.
 */
export function parseProvenance(text) {
  const para = provenanceParagraph(text);
  if (para === null) return null;
  if (para.includes(UNPINNED)) return { unpinned: true };
  const upto = para.split(/\bchecked\b/)[0];
  const checked = para.match(/\bchecked (\d{4}-\d{2}-\d{2})/)?.[1] ?? null;
  let commit = upto.match(/\bcommit ([0-9a-f]{7,40})\b/)?.[1] ?? null;
  if (!commit) {
    // Bare sha, as in "Upstream 2b6a897 (…)" or "Upstream v6.3.0 (b36e082)".
    // Requiring a digit keeps hex-shaped English words out.
    for (const tok of upto.replace(/[(),.]/g, " ").split(/\s+/)) {
      if (/^[0-9a-f]{7,40}$/.test(tok) && /\d/.test(tok)) { commit = tok; break; }
    }
  }
  const version = upto.match(/\bv?\d+(?:\.\d+){1,3}\b/)?.[0] ?? null;
  return { unpinned: false, commit, version, checked };
}

function provenanceParagraph(text) {
  for (const para of text.split("\n\n").slice(0, 4)) {
    if (/\bUpstream\b/.test(para)) return para;
  }
  return null;
}

/** Rewrites the provenance sentence in place, keeping the surrounding prose. */
export function stampHeader(text, { commit, date, checked }) {
  const para = provenanceParagraph(text);
  if (para === null) throw new Error("no provenance paragraph to stamp");
  const short = commit.slice(0, 7);
  let next;
  if (para.includes(UNPINNED)) {
    const dated = date ? ` (${date})` : "";
    next = para.replace(/Upstream not pinned[^.]*\.\s*/, `Upstream commit ${short}${dated} checked ${checked}.`).trimEnd();
  } else {
    const prev = parseProvenance(text);
    next = para;
    if (prev.commit) next = next.replace(prev.commit, short);
    if (date && prev.commit) next = next.replace(/\((\d{4}-\d{2}-\d{2})/, `(${date}`);
    next = prev.checked ? next.replace(/\bchecked \d{4}-\d{2}-\d{2}/, `checked ${checked}`) : next;
  }
  return text.replace(para, next);
}

// ------------------------------------------------------------------ status

/** Pure: what `check` reports for one entry given what the remote says. */
export function statusFor(entry, remote) {
  const u = entry.upstream ?? {};
  if (u.type === "local") return { state: "local", note: u.note ?? "written here" };
  if (u.type === "manual") return { state: "manual", note: `${u.name ?? "manual source"} — verify by hand` };
  if (entry.pinned == null) return { state: "unpinned", note: "no pin recorded; needs a full pass" };
  if (!remote) return { state: "unknown", note: "not checked" };
  if (remote.error) return { state: "unreachable", note: remote.error };
  if (entry.pinned.version && remote.tag) {
    return entry.pinned.version.replace(/^v/, "") === remote.tag.replace(/^v/, "")
      ? { state: "current", note: `at ${remote.tag}` }
      : { state: "moved", note: `${entry.pinned.version} -> ${remote.tag}` };
  }
  const pinned = entry.pinned.commit ?? "";
  const head = remote.sha ?? "";
  const n = Math.min(pinned.length, head.length);
  if (n >= 7 && pinned.slice(0, n) === head.slice(0, n)) return { state: "current", note: `at ${head.slice(0, 7)}` };
  // ls-remote sees the repo head, not this entry's subpath: the subpath may
  // well be untouched. `diff` is what settles it.
  return { state: "moved", note: `${pinned.slice(0, 7)} -> ${head.slice(0, 7)}` };
}

// --------------------------------------------------------------------- git

function git(args, opts = {}) {
  const r = spawnSync("git", args, { encoding: opts.buffer ? "buffer" : "utf8", maxBuffer: 64 * 1024 * 1024, ...opts });
  if (r.error) throw new Error(`git ${args[0]}: ${r.error.message}`);
  if (r.status !== 0) throw new Error(`git ${args.join(" ")}: ${(r.stderr || "").toString().trim() || `exit ${r.status}`}`);
  return opts.buffer ? r.stdout : r.stdout.trim();
}

const gitAsync = (args) =>
  new Promise((done) => {
    execFile("git", args, { encoding: "utf8", maxBuffer: 16 * 1024 * 1024 }, (err, stdout, stderr) =>
      done(err ? { error: ((stderr || err.message) + "").replace(/\s+/g, " ").trim().slice(0, 90) } : { out: stdout.trim() }));
  });

async function remoteState(entry) {
  const { repo, ref } = entry.upstream;
  if (ref === "tags") {
    const r = await gitAsync(["ls-remote", "--tags", "--refs", "--sort=-v:refname", repo]);
    if (r.error) return r;
    const line = r.out.split("\n").filter(Boolean)[0];
    if (!line) return { error: "no tags on remote" };
    const [sha, name] = line.split(/\s+/);
    return { sha, tag: name.replace("refs/tags/", "") };
  }
  const r = await gitAsync(["ls-remote", repo, "HEAD"]);
  return r.error ? r : { sha: r.out.split(/\s+/)[0] };
}

/** Runs jobs at a bounded concurrency, preserving input order. */
async function pooled(items, limit, job) {
  const out = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const i = next++;
      out[i] = await job(items[i]);
    }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return out;
}

const cacheDir = (repo) => join(CACHE, repo.replace(/^https:\/\//, "").replace(/[^\w.-]/g, "_"));

function ensureClone(repo) {
  const dir = cacheDir(repo);
  if (existsSync(join(dir, "HEAD")) || existsSync(join(dir, ".git"))) {
    git(["-C", dir, "fetch", "--filter=blob:none", "--quiet", "origin", "+refs/heads/*:refs/remotes/origin/*", "+refs/tags/*:refs/tags/*"]);
  } else {
    mkdirSync(dirname(dir), { recursive: true });
    git(["clone", "--filter=blob:none", "--no-checkout", "--quiet", repo, dir]);
  }
  return dir;
}

const headSha = (dir) => git(["-C", dir, "rev-parse", "origin/HEAD"]).trim();
const commitDate = (dir, sha) => git(["-C", dir, "log", "-1", "--format=%cs", sha]);

/** path -> blob sha for one tree, relative to subpath. */
function treeBlobs(dir, sha, subpath) {
  const out = git(["-C", dir, "ls-tree", "-r", sha, "--", subpath]);
  const map = new Map();
  for (const line of out.split("\n").filter(Boolean)) {
    const [meta, file] = line.split("\t");
    map.set(relative(subpath, file).split("\\").join("/"), meta.split(/\s+/)[2]);
  }
  return map;
}

/** path -> blob sha for a working-tree directory. */
function localBlobs(absDir) {
  const map = new Map();
  const walk = (d) => {
    for (const e of readdirSync(d)) {
      const p = join(d, e);
      if (statSync(p).isDirectory()) walk(p);
      else map.set(relative(absDir, p).split("\\").join("/"), git(["hash-object", p]));
    }
  };
  walk(absDir);
  return map;
}

const sameBlobs = (a, b) => a.size === b.size && [...a].every(([k, v]) => b.get(k) === v);

// ---------------------------------------------------------------- commands

async function cmdCheck(argv) {
  const data = loadSources();
  const errs = validateSources(data);
  if (errs.length) { errs.forEach((e) => console.error(`  ${e}`)); process.exit(2); }
  const offline = argv.includes("--offline");
  if (offline && argv.includes("--strict")) {
    console.error("  --offline never reaches a remote, so --strict has nothing to judge");
    process.exit(2);
  }
  const rows = await pooled(data.entries, 8, async (e) => {
    const remote = !offline && e.upstream.type === "git" && e.pinned != null ? await remoteState(e) : null;
    return { id: e.id, kind: e.kind, ...statusFor(e, remote) };
  });
  if (argv.includes("--json")) {
    console.log(JSON.stringify({ checkedAt: today(), offline, rows }, null, 2));
  } else {
    const w = Math.max(...rows.map((r) => r.id.length));
    for (const r of rows) console.log(`  ${r.id.padEnd(w)}  ${r.state.padEnd(11)}  ${r.note}`);
    const tally = rows.reduce((a, r) => ({ ...a, [r.state]: (a[r.state] ?? 0) + 1 }), {});
    console.log(`\n  ${Object.entries(tally).map(([k, v]) => `${v} ${k}`).join(", ")}`);
    const moved = rows.filter((r) => r.state === "moved").map((r) => r.id);
    if (moved.length) console.log(`  next: node tools/skills-update.mjs diff ${moved[0]}   (the repo head moved; diff says whether OUR files did)`);
    if (rows.some((r) => r.state === "manual")) console.log("  manual entries have no sha to compare — a human checks the source");
  }
  const bad = rows.filter((r) => !["current", "local", "manual"].includes(r.state));
  process.exit(argv.includes("--strict") && bad.length ? 1 : 0);
}

function cmdDiff(argv) {
  const { data, entry } = requireEntry(argv[1]);
  if (entry.upstream.type !== "git") return fail(`${entry.id}: ${entry.upstream.type} source, nothing to diff`);
  if (entry.pinned == null) return fail(`${entry.id}: unpinned — re-catalog it, then: stamp ${entry.id} --commit HEAD`);
  const dir = ensureClone(entry.upstream.repo);
  const head = headSha(dir);
  const sub = entry.upstream.subpath;
  const scope = sub ? ["--", sub] : [];
  let log;
  try {
    log = git(["-C", dir, "log", "--oneline", "--no-decorate", `${entry.pinned.commit}..${head}`, ...scope]);
  } catch {
    return fail(`${entry.id}: pinned commit ${entry.pinned.commit.slice(0, 7)} is not in ${entry.upstream.repo} (history rewritten?). Re-establish the pin by hand.`);
  }
  console.log(`  ${entry.id}: ${entry.pinned.commit.slice(0, 7)} -> ${head.slice(0, 7)}${sub ? `  (scoped to ${sub})` : ""}`);
  if (!log) {
    console.log(`\n  ${sub ? "This subpath is" : "Nothing is"} unchanged since the pin — the repo moved elsewhere.`);
    console.log(`  Clear the flag with: node tools/skills-update.mjs stamp ${entry.id} --commit HEAD`);
    return;
  }
  console.log(`\n${log}\n`);
  console.log(git(["-C", dir, "diff", "--stat", entry.pinned.commit, head, ...scope]));
  if (sub) {
    const body = git(["-C", dir, "diff", entry.pinned.commit, head, ...scope]).split("\n");
    const cap = argv.includes("--full") ? body.length : 400;
    console.log("\n" + body.slice(0, cap).join("\n"));
    if (body.length > cap) console.log(`\n  … ${body.length - cap} more lines; re-run with --full`);
  }
  console.log(`\n  wanted? node tools/skills-update.mjs pull ${entry.id}`);
}

function cmdPull(argv) {
  const { data, entry } = requireEntry(argv[1]);
  if (entry.kind !== "skill") return fail(`${entry.id}: only vendored skills are pulled. A pack catalog is rewritten by /skills-update, then stamped.`);
  if (entry.upstream.type !== "git" || !entry.upstream.subpath) return fail(`${entry.id}: needs a git upstream with a subpath`);
  if (entry.pinned == null) return fail(`${entry.id}: unpinned — establish the pin by hand first`);
  const abs = join(ROOT, entry.path);
  const dir = ensureClone(entry.upstream.repo);
  const head = headSha(dir);
  const sub = entry.upstream.subpath;

  // Refuse to clobber local edits: the working copy must still match its pin.
  if (!sameBlobs(localBlobs(abs), treeBlobs(dir, entry.pinned.commit, sub))) {
    if (!argv.includes("--force")) {
      return fail(`${entry.path} no longer matches its pin ${entry.pinned.commit.slice(0, 7)} — it was edited locally.\n  Review with: node tools/skills-update.mjs diff ${entry.id}\n  Overwrite anyway with --force (local edits are lost).`);
    }
    console.log(`  --force: overwriting local edits in ${entry.path}`);
  }

  const want = treeBlobs(dir, head, sub);
  if (!want.size) return fail(`${sub} does not exist at ${head.slice(0, 7)} — upstream moved or renamed it`);
  const had = localBlobs(abs);
  for (const [rel] of want) {
    const target = join(abs, rel);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, git(["-C", dir, "show", `${head}:${join(sub, rel).split("\\").join("/")}`], { buffer: true }));
  }
  for (const [rel] of had) if (!want.has(rel)) rmSync(join(abs, rel));

  entry.pinned = { commit: head, date: commitDate(dir, head) };
  entry.checked = today();
  writeSources(data);
  const changed = [...want].filter(([k, v]) => had.get(k) !== v).map(([k]) => k);
  const gone = [...had].filter(([k]) => !want.has(k)).map(([k]) => k);
  console.log(`  ${entry.id}: pulled ${head.slice(0, 7)} (${entry.pinned.date})`);
  console.log(`  ${changed.length} file(s) written${gone.length ? `, ${gone.length} removed` : ""}${changed.length ? `: ${changed.join(", ")}` : ""}`);
  console.log("  nothing committed — review the diff, then commit");
}

function cmdStamp(argv) {
  const { data, entry } = requireEntry(argv[1]);
  const flag = (name) => { const i = argv.indexOf(name); return i === -1 ? null : argv[i + 1]; };
  let commit = flag("--commit");
  if (!commit) return fail("stamp needs --commit <sha|HEAD>");
  let date = flag("--date");
  if (entry.upstream.type !== "git") return fail(`${entry.id}: ${entry.upstream.type} source cannot be stamped with a commit`);
  if (commit === "HEAD") {
    const dir = ensureClone(entry.upstream.repo);
    commit = headSha(dir);
    date ??= commitDate(dir, commit);
  }
  if (!/^[0-9a-f]{7,40}$/.test(commit)) return fail(`not a sha: ${commit}`);
  const checked = today();
  entry.pinned = { ...(entry.pinned ?? {}), commit, ...(date ? { date } : {}) };
  entry.checked = checked;
  writeSources(data);
  if (entry.kind === "pack") {
    const doc = join(ROOT, entry.doc);
    writeFileSync(doc, stampHeader(readFileSync(doc, "utf8"), { commit, date, checked }));
    console.log(`  ${entry.doc}: header restamped`);
  }
  console.log(`  ${entry.id}: pinned ${commit.slice(0, 7)}${date ? ` (${date})` : ""}, checked ${checked}`);
}

const today = () => new Date().toISOString().slice(0, 10);
const fail = (msg) => { console.error(`  ${msg}`); process.exitCode = 1; };
function requireEntry(id) {
  const data = loadSources();
  const entry = id && findEntry(data, id);
  if (!entry) { console.error(`  unknown id '${id ?? ""}'. Ids: ${data.entries.map((e) => e.id).join(", ")}`); process.exit(1); }
  return { data, entry };
}
function writeSources(data) {
  writeFileSync(SOURCES, JSON.stringify(data, null, 2) + "\n");
}

// --------------------------------------------------------------- self-test

function selfTest() {
  const eq = (got, want, msg) => {
    const a = JSON.stringify(got), b = JSON.stringify(want);
    if (a !== b) { console.error(`skills-update --self-test FAIL: ${msg}\n  got  ${a}\n  want ${b}`); process.exit(1); }
  };
  // Every header shape in docs/frameworks/ today.
  const shapes = [
    ["Upstream commit d1a7489 (2026-08-09, post-v4.4.0) checked 2026-08-23.", "d1a7489", "2026-08-23"],
    ["Upstream manifest v1.0.9, commit 718070a (2026-07-18) checked 2026-08-23.", "718070a", "2026-08-23"],
    ["Upstream 2b6a897 (2026-08-21) checked 2026-08-24.", "2b6a897", "2026-08-24"],
    ["Upstream 1.68.3.0 checked 2026-08-23: no skills added since 1.62.0.0.", null, "2026-08-23"],
    ["Upstream v6.3.0 (b36e082) checked 2026-08-23.", "b36e082", "2026-08-23"],
    ["Upstream commit 05a7130 checked 2026-08-23.", "05a7130", null],
    ["Upstream v2 experimental, commit 72e2995 checked 2026-08-23.", "72e2995", "2026-08-23"],
  ];
  for (const [line, commit, checked] of shapes) {
    const got = parseProvenance(`# T\n\n${line}\n`);
    eq(got.commit, commit, `commit from: ${line}`);
    if (checked) eq(got.checked, checked, `checked from: ${line}`);
  }
  eq(parseProvenance("# T\n\nUpstream 1.68.3.0 checked 2026-08-23.").version, "1.68.3.0", "version token");
  eq(parseProvenance("# T\n\nNo provenance here."), null, "no Upstream paragraph -> null");
  eq(parseProvenance(`# T\n\nAll x. ${UNPINNED} in tools/sources.json; ok.`).unpinned, true, "unpinned sentinel");
  // A sha-shaped word must not out-rank the real sha, and prose must not become one.
  eq(parseProvenance("# T\n\nUpstream deadb33f checked 2026-08-23.").commit, "deadb33f", "hex-with-digits is a sha");
  eq(parseProvenance("# T\n\nUpstream facaded checked 2026-08-23.").commit, null, "hex-shaped word is not a sha");

  // statusFor
  const git1 = { id: "x", kind: "skill", upstream: { type: "git", repo: "https://e/r" }, pinned: { commit: "abc1234def" } };
  eq(statusFor(git1, { sha: "abc1234defffff" }).state, "current", "prefix match is current");
  eq(statusFor(git1, { sha: "9999999999" }).state, "moved", "different sha is moved");
  eq(statusFor(git1, { error: "no route" }).state, "unreachable", "remote error surfaces");
  eq(statusFor({ ...git1, pinned: null }, null).state, "unpinned", "null pin is unpinned");
  eq(statusFor({ ...git1, upstream: { type: "manual" } }, null).state, "manual", "manual never reads as current");
  eq(statusFor({ ...git1, upstream: { type: "local" } }, null).state, "local", "local source");
  const tagged = { ...git1, upstream: { type: "git", repo: "https://e/r", ref: "tags" }, pinned: { version: "1.68.3.0" } };
  eq(statusFor(tagged, { tag: "1.68.3.0" }).state, "current", "same tag is current");
  eq(statusFor(tagged, { tag: "v1.69.0.0" }).state, "moved", "newer tag is moved");

  // stampHeader keeps the prose and moves only the tokens
  const pinned = "# T\n\nAll [x](https://e/r) skills. Upstream commit 05a7130 (2026-01-01) checked 2026-08-23. 12 plugins.\n";
  const s1 = stampHeader(pinned, { commit: "beefcafe1111", date: "2026-09-01", checked: "2026-09-02" });
  eq(/commit beefcaf \(2026-09-01\) checked 2026-09-02\./.test(s1), true, "restamp pinned header");
  eq(s1.includes("12 plugins."), true, "surrounding prose survives");
  const un = `# T\n\nAll [x](https://e/r) skills. ${UNPINNED} in tools/sources.json; \`/skills-update\` records the commit on its first full catalog pass.\n`;
  const s2 = stampHeader(un, { commit: "beefcafe1111", date: "2026-09-01", checked: "2026-09-02" });
  eq(s2.includes(UNPINNED), false, "sentinel is replaced");
  eq(/Upstream commit beefcaf \(2026-09-01\) checked 2026-09-02\./.test(s2), true, "unpinned -> pinned phrasing");
  eq(parseProvenance(s2).commit, "beefcaf", "stamped header parses back");

  // validateSources catches the mistakes that make a check silently wrong
  eq(validateSources({ entries: [] }), [], "empty manifest is structurally fine");
  const bad = validateSources({ entries: [
    { id: "a", kind: "skill", upstream: { type: "git", repo: "https://e/r" }, pinned: { commit: "nope" }, checked: "2026-08-25" },
    { id: "a", kind: "pack", upstream: { type: "git", repo: "https://e/r" }, pinned: null, checked: "2026-08-25" },
  ] });
  eq(bad.some((e) => e.includes("duplicate id")), true, "duplicate ids rejected");
  eq(bad.some((e) => e.includes("not a sha")), true, "bad sha rejected");
  eq(bad.some((e) => e.includes("skill needs path")), true, "skill without path rejected");
  eq(bad.some((e) => e.includes("pack needs doc")), true, "pack without doc rejected");
  eq(bad.some((e) => e.includes("unpinned entries cannot carry a checked date")), true, "unpinned + checked rejected");
  eq(validateSources(loadSources()), [], "the real manifest validates");
  console.log("skills-update --self-test: OK");
}

// ------------------------------------------------------------------ router

// Importing this module (tools/gate.mjs does) must not run a command.
const invokedDirectly = resolve(process.argv[1] ?? "") === resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const argv = process.argv.slice(2);
const cmd = argv[0] ?? "check";
try {
  if (!invokedDirectly) { /* imported for its exports */ }
  else if (cmd === "--self-test") selfTest();
  else if (cmd === "check" || cmd.startsWith("--")) await cmdCheck(argv);
  else if (cmd === "diff") cmdDiff(argv);
  else if (cmd === "pull") cmdPull(argv);
  else if (cmd === "stamp") cmdStamp(argv);
  else { console.error(`unknown command '${cmd}'. Try: check | diff <id> | pull <id> | stamp <id> --commit <sha>`); process.exit(1); }
} catch (e) {
  console.error(`  ${e.message}`);
  process.exit(1);
}
