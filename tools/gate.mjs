#!/usr/bin/env node
// Gate: every repo path referenced in CLAUDE.md, README.md, CHANGELOG.md,
// docs/, and .claude/ must exist, .gitignore must keep .claude/credentials.md
// ignored, tools/sources.json must agree with what is actually on disk, and
// the shipped hooks and tools must pass their self-checks. Free,
// deterministic, <2s. The path check exists because the docs rotted against
// deleted files once (docs/ai/*, rules/*, tools/*); it makes that path
// unreachable everywhere it scans. The provenance check exists for the same
// reason one step out: a vendored skill with no recorded source, or a header
// that disagrees with the manifest, makes "what moved upstream" unanswerable.
// Nothing here touches the network — that is skills-update's `check`.
// Run: node tools/gate.mjs  |  self-test: --self-test
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { entryPaths, loadSources, parseProvenance, validateSources } from "./skills-update.mjs";

const ROOT = resolve(dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1")), "..");

// Dirs the template tells ADOPTERS to create; absent in the kit itself.
const TEMPLATE_DIRS = /^(services|contracts|schemas)\//;
const SKIP = [
  /^\.claude\/workflows\/?$/, // "created on first save" (DELEGATION.md)
  /^\.claude\/credentials\.md$/, // this gate REQUIRES it gitignored; docs may name it
];

function mdFiles() {
  const files = [join(ROOT, "CLAUDE.md"), join(ROOT, "README.md"), join(ROOT, "CHANGELOG.md")];
  const walk = (dir) => {
    for (const e of readdirSync(dir)) {
      const p = join(dir, e);
      if (statSync(p).isDirectory()) {
        // plans/ archives history; frameworks/ and agent-library/ document
        // EXTERNAL repos' layouts, so their paths are not ours to resolve
        if (e !== "plans" && e !== "frameworks" && e !== "agent-library") walk(p);
      } else if (e.toLowerCase().endsWith(".md")) files.push(p);
    }
  };
  walk(join(ROOT, "docs"));
  // .claude/agents/ is ours and rots against our own docs (it did: 13 refs to
  // the pre-restructure layout). skills/ and agent-library/ are vendored or
  // generic and their prose trips the bare-path regex ("tools/products").
  walk(join(ROOT, ".claude/agents"));
  return files;
}

export function extractPaths(text, fileDir) {
  const out = [];
  // Markdown links: [text](relative/target)
  for (const m of text.matchAll(/\]\(([^)#\s]+?)(?:#[^)]*)?\)/g)) {
    const t = m[1];
    if (/^(https?:|mailto:)/.test(t)) continue;
    out.push({ raw: t, abs: resolve(fileDir, t), kind: "link", anchor: m[0].match(/#([^)]*)\)/)?.[1] ?? null });
  }
  // Bare path mentions rooted at known repo dirs (not preceded by ~ or /).
  // URLs are stripped first: "costbench.com/software/developer-tools/linear/"
  // must not read as a repo ref to tools/linear/.
  const noUrls = text.replace(/https?:\/\/[^\s)]+/g, " ");
  // `rules` and `architecture` are here bare: pre-restructure refs (rules/VOICE.md)
  // must fail rather than read as prose.
  for (const m of noUrls.matchAll(/(?<![\w~/.])((?:docs|tools|services|contracts|schemas|rules|architecture|\.claude|\.github)\/[\w][\w./-]*)/g)) {
    const raw = m[1].replace(/[.,;:]+$/, "");
    out.push({ raw, abs: join(ROOT, raw), kind: "bare", anchor: null });
  }
  return out.filter(({ raw }) => {
    if (/[<>*]|TODO/.test(raw)) return false; // placeholders
    if (TEMPLATE_DIRS.test(raw)) return false;
    return !SKIP.some((re) => re.test(raw));
  });
}

/**
 * The manifest and a pack's prose header both state the same pin, so they can
 * drift. Returns null when they agree, else the disagreement.
 */
export function headerMismatch(entry, text) {
  const p = parseProvenance(text);
  if (!p) return "no Upstream provenance sentence in the header paragraph";
  if (entry.pinned == null) {
    return p.unpinned ? null : `header claims a pin (${p.commit ?? p.version}); manifest has none`;
  }
  if (p.unpinned) return `header says unpinned; manifest pins ${entry.pinned.commit?.slice(0, 7) ?? entry.pinned.version}`;
  if (entry.pinned.commit) {
    const short = entry.pinned.commit.slice(0, 7);
    if (!p.commit || !entry.pinned.commit.startsWith(p.commit)) {
      return `header commit ${p.commit ?? "(none)"} != manifest ${short}`;
    }
  } else if (p.version !== entry.pinned.version) {
    return `header version ${p.version ?? "(none)"} != manifest ${entry.pinned.version}`;
  }
  if ((p.checked ?? null) !== (entry.checked ?? null)) {
    return `header checked ${p.checked ?? "(none)"} != manifest ${entry.checked ?? "(none)"}`;
  }
  return null;
}

/** tools/sources.json vs the filesystem and the headers it describes. */
function checkSources(problems) {
  const data = loadSources();
  for (const e of validateSources(data)) problems.push(e);

  const claimed = new Map(); // repo-relative path -> entry id
  for (const entry of data.entries) {
    for (const p of entryPaths(entry)) {
      if (!existsSync(join(ROOT, p))) problems.push(`sources.json[${entry.id}] -> ${p} (does not exist)`);
      if (claimed.has(p)) problems.push(`sources.json: ${p} claimed by both ${claimed.get(p)} and ${entry.id}`);
      claimed.set(p, entry.id);
    }
    if (entry.kind === "pack" && existsSync(join(ROOT, entry.doc))) {
      const bad = headerMismatch(entry, readFileSync(join(ROOT, entry.doc), "utf8"));
      if (bad) problems.push(`${entry.doc} -> ${bad}`);
    }
  }
  // Nothing vendored or catalogued may go untracked: an unrecorded source
  // cannot be checked for updates, and silently reads as up to date.
  for (const d of readdirSync(join(ROOT, ".claude/skills"))) {
    const p = `.claude/skills/${d}`;
    if (statSync(join(ROOT, p)).isDirectory() && !claimed.has(p)) {
      problems.push(`${p} -> no tools/sources.json entry (where did it come from?)`);
    }
  }
  for (const f of readdirSync(join(ROOT, "docs/frameworks"))) {
    const p = `docs/frameworks/${f}`;
    // Aggregates skills from many upstreams, so no single source to track.
    if (f === "NON-PACK-SKILLS.md") continue;
    if (f.toLowerCase().endsWith(".md") && !claimed.has(p)) problems.push(`${p} -> no tools/sources.json entry`);
  }
}

function run() {
  const missing = [];
  let checked = 0;
  for (const f of mdFiles()) {
    const text = readFileSync(f, "utf8");
    for (const { raw, abs } of extractPaths(text, dirname(f))) {
      checked++;
      const target = abs.replace(/[.,;:]+$/, "");
      if (!existsSync(target)) { missing.push(`${f.slice(ROOT.length + 1)} -> ${raw}`); continue; }
      // An empty directory cannot survive a clone (git tracks files, not dirs),
      // so it resolves locally and 404s in CI. Treat it as dead here instead.
      if (statSync(target).isDirectory() && readdirSync(target).length === 0) {
        missing.push(`${f.slice(ROOT.length + 1)} -> ${raw} (empty dir; won't exist in a clone)`);
      }
    }
  }
  // .claude/credentials.md must stay ignored (credentials.example.md relies on this)
  if (!readFileSync(join(ROOT, ".gitignore"), "utf8").includes(".claude/credentials.md")) {
    missing.push(".gitignore -> missing '.claude/credentials.md' ignore line");
  }
  if (missing.length) {
    console.error(`gate: ${missing.length} dead path reference(s):`);
    for (const m of missing) console.error(`  ${m}`);
    process.exit(1);
  }
  const provenance = [];
  checkSources(provenance);
  if (provenance.length) {
    console.error(`gate: ${provenance.length} provenance problem(s):`);
    for (const m of provenance) console.error(`  ${m}`);
    process.exit(1);
  }
  const hook = spawnSync(process.execPath, [join(ROOT, ".claude/hooks/filter-test-output.mjs"), "--check"], { stdio: "inherit" });
  if (hook.status !== 0) {
    console.error("gate: hook self-check failed");
    process.exit(1);
  }
  const updater = spawnSync(process.execPath, [join(ROOT, "tools/skills-update.mjs"), "--self-test"], { stdio: "inherit" });
  if (updater.status !== 0) {
    console.error("gate: skills-update self-test failed");
    process.exit(1);
  }
  const docs = spawnSync(process.execPath, [join(ROOT, "tools/docs-check.mjs"), "--self-test"], { stdio: "inherit" });
  if (docs.status !== 0) {
    console.error("gate: docs-check self-test failed");
    process.exit(1);
  }
  console.log(`gate: OK (${checked} path references resolve, credentials ignored, provenance recorded, hooks self-check)`);
}

function selfTest() {
  const fixture = "See [plan](docs/plans) and docs/rules/SAFETY.md, plus docs/nope-missing.md and services/<name>/CLAUDE.md and .claude/workflows/ and rules/VOICE.md and [Linear](https://costbench.com/software/developer-tools/linear/).";
  const got = extractPaths(fixture, ROOT).map((p) => p.raw);
  const assertUrl = got.some((r) => r.includes("tools/linear"));
  if (assertUrl) { console.error("gate --self-test FAIL: URL innards must not read as repo paths"); process.exit(1); }
  const assert = (cond, msg) => { if (!cond) { console.error(`gate --self-test FAIL: ${msg}`); process.exit(1); } };
  assert(got.includes("docs/rules/SAFETY.md"), "should extract bare docs path");
  assert(got.includes("rules/VOICE.md"), "pre-restructure rules/ refs must be caught");
  assert(!got.includes("rules/SAFETY.md"), "docs/rules/... must not also match as bare rules/...");
  assert(got.includes("docs/nope-missing.md"), "should extract the bad path");
  assert(!got.some((r) => r.includes("<name>")), "placeholders must be skipped");
  assert(!got.some((r) => r.startsWith(".claude/workflows")), "SKIP list must apply");
  assert(!existsSync(join(ROOT, "docs/nope-missing.md")), "fixture bad path must not exist");

  // headerMismatch: the manifest and the pack's prose must not drift apart.
  const doc = (line) => `# P\n\nAll [x](https://e/r) skills. ${line}\n`;
  const pin = { pinned: { commit: "05a71303f0" }, checked: "2026-08-23" };
  assert(headerMismatch(pin, doc("Upstream commit 05a7130 checked 2026-08-23.")) === null, "short header sha matches a long manifest pin");
  assert(headerMismatch(pin, doc("Upstream commit 9999999 checked 2026-08-23.")), "a different sha must fail");
  assert(headerMismatch(pin, doc("Upstream commit 05a7130 checked 2026-08-01.")), "a stale checked date must fail");
  assert(headerMismatch(pin, doc("Upstream not pinned in tools/sources.json; ok.")), "unpinned header under a pinned entry must fail");
  assert(headerMismatch(pin, "# P\n\nNo provenance sentence.\n"), "a header with no provenance must fail");
  const unpinned = { pinned: null, checked: null };
  assert(headerMismatch(unpinned, doc("Upstream not pinned in tools/sources.json; ok.")) === null, "sentinel satisfies an unpinned entry");
  assert(headerMismatch(unpinned, doc("Upstream commit 05a7130 checked 2026-08-23.")), "a header pin under an unpinned entry must fail");
  const versioned = { pinned: { version: "1.68.3.0" }, checked: "2026-08-23" };
  assert(headerMismatch(versioned, doc("Upstream 1.68.3.0 checked 2026-08-23.")) === null, "version-only pins compare by version");
  assert(headerMismatch(versioned, doc("Upstream 1.69.0.0 checked 2026-08-23.")), "a moved version must fail");
  console.log("gate --self-test: OK");
}

// Importing this module (tools/docs-check.mjs does) must not run a command.
const invokedDirectly = resolve(process.argv[1] ?? "") === resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
if (invokedDirectly) process.argv[2] === "--self-test" ? selfTest() : run();
