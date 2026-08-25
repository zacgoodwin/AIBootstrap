#!/usr/bin/env node
// Docs watchdog, deterministic half. Counts and links are facts, not opinions,
// so no model asserts one here: every number this reports was measured off the
// filesystem or off the document's own tables. The latent half (contradictory
// guidance) is the /docs-watchdog fan-out; it writes SEMANTIC findings into the
// same baseline this produces.
//
// Checks: link (refs resolve), anchor (#target exists), roster (a roster
// header's counts vs its own table), measured (a count claim vs the directory
// it names), agreement (one fact, two files, two numbers).
//
// Run: node tools/docs-check.mjs [--json] [--fix]  |  self-test: --self-test
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, dirname, join, relative, resolve, sep } from "node:path";
import { extractPaths } from "./gate.mjs";

const ROOT = resolve(dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1")), "..");
const rel = (p) => relative(ROOT, p).replace(/\\/g, "/");

// Docs a newcomer hits first; a dead link here is worse than one deep in a catalog.
const ENTRY_POINTS = new Set(["README.md", "CLAUDE.md", "docs/SETUP.md"]);
// These describe OTHER repos' layouts, so a bare `skills/foo` in them is not
// ours to resolve. Explicit markdown links still must.
const FOREIGN_LAYOUT = /^(docs\/frameworks|docs\/plans|\.claude\/agent-library)\//;

const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
const QUALIFIED = /\b(install\w*|parked|ships? here|shipped here|active|live in|promote|reachable|of the|of these)\b/i;
const UNITS = ["skills", "agents", "plugins", "commands", "hooks", "packs", "categories", "rules", "files"];
// "33 more agents" states the same fact as "33 agents". Only a closed list may
// sit between: allowing any word reads "5 that ship inside skills" as five skills.
const FILLERS = ["more", "unique", "total", "distinct", "additional", "new", "other", "further", "extra"];

const toNum = (t) => (/^\d+$/.test(t) ? Number(t) : WORDS.indexOf(t.toLowerCase()));

/** Render n the way the doc wrote it: prose spells small numbers out. */
function like(n, sample) {
  if (/^\d+$/.test(sample) || n > 20) return String(n);
  const w = WORDS[n];
  return /^[A-Z]/.test(sample) ? w[0].toUpperCase() + w.slice(1) : w;
}

// ---------------------------------------------------------------- inventory

/** Tracked files only: an untracked file is not in a clone, so it cannot be evidence. */
function trackedFiles() {
  const out = spawnSync("git", ["ls-files"], { cwd: ROOT, encoding: "utf8" });
  if (out.status !== 0) throw new Error("git ls-files failed; docs-check needs a git checkout");
  return out.stdout.split("\n").filter(Boolean);
}

/** Directories whose size is a fact this repo can measure. */
function countable(tracked) {
  const under = (d) => tracked.filter((f) => f.startsWith(d + "/"));
  const childDirs = (d) => new Set(under(d).map((f) => f.slice(d.length + 1).split("/")[0]));
  return [
    { path: ".claude/agents", aliases: [".claude/agents"], units: ["agents"], n: under(".claude/agents").length },
    { path: ".claude/agent-library", aliases: [".claude/agent-library", "agent-library"], units: ["agents"], n: under(".claude/agent-library").length },
    { path: ".claude/skills", aliases: [".claude/skills"], units: ["skills"], n: childDirs(".claude/skills").size },
    { path: "docs/frameworks", aliases: ["docs/frameworks"], units: ["files"], n: under("docs/frameworks").length },
    // Z-TOP-SKILLS.md is the cross-pack index, not a pack; README.md and
    // IN-REPO-AGENTS.md are the index and the machine roster, not packs.
    { path: "docs/frameworks (packs)", aliases: ["docs/frameworks"], units: ["packs"], n: under("docs/frameworks").filter((f) => !f.endsWith("Z-TOP-SKILLS.md")).length },
    { path: "docs/agents", aliases: ["docs/agents"], units: ["files"], n: under("docs/agents").length },
    { path: "docs/agents (packs)", aliases: ["docs/agents"], units: ["packs"], n: under("docs/agents").filter((f) => !/(README|IN-REPO-AGENTS)\.md$/.test(f)).length },
    { path: "docs/rules", aliases: ["docs/rules"], units: ["rules", "files"], n: under("docs/rules").filter((f) => f.endsWith(".md")).length },
    { path: "docs/process", aliases: ["docs/process"], units: ["files"], n: under("docs/process").length },
  ];
}

const mdFiles = (tracked) => tracked.filter((f) => /\.md$/i.test(f) && (["CLAUDE.md", "README.md", "CHANGELOG.md"].includes(f) || f.startsWith("docs/") || f.startsWith(".claude/agents/")));

// ------------------------------------------------------------------ finding

const lineAt = (text, i) => text.slice(0, i).split("\n").length;

/** A table row is its own context; prose wraps, so its context is the paragraph. */
function contextAt(text, i) {
  const ls = text.lastIndexOf("\n", i) + 1;
  if (text[ls] === "|") {
    const end = text.indexOf("\n", i);
    return { text: text.slice(ls, end === -1 ? undefined : end), start: ls };
  }
  let a = text.lastIndexOf("\n\n", i);
  a = a === -1 ? 0 : a + 2;
  let b = text.indexOf("\n\n", i);
  b = b === -1 ? text.length : b;
  return { text: text.slice(a, b), start: a };
}

/**
 * The sentence around an offset. A count binds to the path in ITS sentence,
 * never to one further down the paragraph: "73 agents ... parked in
 * .claude/agent-library/" are two separate facts that a paragraph-wide window
 * silently welds into one wrong finding.
 */
function sentenceAt(ctx, at) {
  const bounds = [0];
  for (const m of ctx.matchAll(/(?<=[.:;!?])\s+/g)) bounds.push(m.index + m[0].length);
  bounds.push(ctx.length);
  for (let i = 0; i < bounds.length - 1; i++) {
    if (at >= bounds[i] && at < bounds[i + 1]) return ctx.slice(bounds[i], bounds[i + 1]);
  }
  return ctx;
}

/** Stable across edits: keyed on what the finding is ABOUT, never on a line number. */
const idFor = (check, subject) => `${check}-${createHash("sha1").update(`${check}|${subject}`).digest("hex").slice(0, 10)}`;

function finding({ check, file, line, severity, cls, message, evidence, fix = null }) {
  return {
    id: idFor(check, `${file}|${evidence?.subject ?? message}`),
    check,
    class: cls ?? (fix ? "MECHANICAL" : "SEMANTIC"),
    severity,
    file,
    line,
    message,
    evidence,
    fix,
  };
}

// ------------------------------------------------------------------- checks

/**
 * A dead path is auto-fixable only when the answer is unambiguous: exactly one
 * tracked file carries that basename, so the file moved and the link did not.
 * Zero matches (deleted) or several (ambiguous) are a judgement call, so they
 * are reported with no fix attached.
 */
function relink(tracked, raw, fromDir) {
  const base = basename(raw);
  const hits = tracked.filter((t) => basename(t) === base);
  if (hits.length !== 1) return null;
  const to = relative(fromDir, join(ROOT, hits[0])).split(sep).join("/");
  return to === raw ? null : to;
}

function checkLinks(files, tracked, findings) {
  for (const f of files) {
    const text = readFileSync(join(ROOT, f), "utf8");
    const foreign = FOREIGN_LAYOUT.test(f);
    for (const ref of extractPaths(text, dirname(join(ROOT, f)))) {
      if (foreign && ref.kind === "bare") continue;
      const target = ref.abs.replace(/[.,;:]+$/, "");
      if (!existsSync(target)) {
        const i = text.indexOf(ref.raw);
        const moved = i === -1 ? null : relink(tracked, ref.raw, dirname(join(ROOT, f)));
        findings.push(finding({
          check: "link",
          file: f,
          line: i === -1 ? 1 : lineAt(text, i),
          severity: ENTRY_POINTS.has(f) ? "P1" : "P2",
          message: moved ? `dead reference: ${ref.raw} (moved to ${moved})` : `dead reference: ${ref.raw}`,
          evidence: { subject: `ref:${ref.raw}`, target: rel(target), exists: false, movedTo: moved },
          fix: moved ? { offset: i, length: ref.raw.length, from: ref.raw, to: moved } : null,
        }));
        continue;
      }
      if (ref.anchor && target.endsWith(".md")) {
        const heads = readFileSync(target, "utf8").split("\n").filter((l) => l.startsWith("#"))
          .map((l) => l.replace(/^#+\s*/, "").toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-"));
        if (!heads.includes(ref.anchor.toLowerCase())) {
          const i = text.indexOf(`${ref.raw}#${ref.anchor}`);
          findings.push(finding({
            check: "anchor",
            file: f,
            line: i === -1 ? 1 : lineAt(text, i),
            severity: "P3",
            message: `link to a heading that no longer exists: ${ref.raw}#${ref.anchor}`,
            evidence: { subject: `anchor:${ref.raw}#${ref.anchor}`, target: rel(target) },
          }));
        }
      }
    }
  }
}

/** Every "<n> <unit>" in a document, with where it sits and what it qualifies. */
function claims(text) {
  const out = [];
  const re = new RegExp(`\\b(${WORDS.join("|")}|\\d{1,4})\\s+(?:(?:${FILLERS.join("|")})\\s+)?(${UNITS.join("|")})\\b`, "gi");
  for (const m of text.matchAll(re)) {
    const n = toNum(m[1]);
    if (n < 0) continue;
    const ctx = contextAt(text, m.index);
    const sentence = sentenceAt(ctx.text, m.index - ctx.start);
    out.push({
      n,
      unit: m[2].toLowerCase(),
      raw: m[1],
      index: m.index,
      line: lineAt(text, m.index),
      sentence,
      qualifier: QUALIFIED.test(sentence) ? "installed" : "total",
    });
  }
  // "34 of the 73 are installed" states an installed count whose unit lives on
  // the total it refers back to. Without this the flagship drift, a header
  // count that no longer matches the roster under it, stays invisible.
  for (const m of text.matchAll(/\b(\d{1,4})\s+of\s+(?:the\s+|these\s+)?(\d{1,4})\b/g)) {
    const parent = out.find((c) => c.n === Number(m[2]) && c.qualifier === "total");
    if (!parent) continue;
    const ctx = contextAt(text, m.index);
    out.push({
      n: Number(m[1]),
      unit: parent.unit,
      raw: m[1],
      index: m.index,
      line: lineAt(text, m.index),
      sentence: sentenceAt(ctx.text, m.index - ctx.start),
      qualifier: "installed",
      inherited: true,
    });
  }
  return out;
}

function checkMeasured(files, dirs, findings) {
  for (const f of files) {
    if (f.startsWith("docs/plans/")) continue; // an archive states what was true then
    const text = readFileSync(join(ROOT, f), "utf8");
    for (const c of claims(text)) {
      // Whichever countable directory the claim sits closest to.
      let best = null;
      for (const d of dirs) {
        if (!d.units.includes(c.unit)) continue;
        for (const a of d.aliases) {
          const at = c.sentence.indexOf(a);
          if (at === -1) continue;
          const dist = Math.abs(at - c.sentence.indexOf(c.raw));
          if (!best || dist < best.dist) best = { d, dist };
        }
      }
      if (!best || best.d.n === c.n) continue;
      findings.push(finding({
        check: "measured",
        file: f,
        line: c.line,
        severity: "P1",
        message: `claims ${c.raw} ${c.unit} for ${best.d.path}, which holds ${best.d.n}`,
        evidence: { subject: `${best.d.path}:${c.unit}:${c.qualifier}`, claimed: c.n, measured: best.d.n, source: `git ls-files ${best.d.path}` },
        fix: { offset: c.index, length: c.raw.length, from: c.raw, to: like(best.d.n, c.raw) },
      }));
    }
  }
}

/** A roster's header count vs the table underneath it. The table is the truth. */
function checkRosters(findings) {
  const dir = join(ROOT, "docs/agents");
  for (const f of readdirSync(dir).filter((x) => /\.md$/i.test(x) && x !== "README.md")) {
    const file = `docs/agents/${f}`;
    const text = readFileSync(join(dir, f), "utf8");
    if (!/\|\s*On disk\s*\|/i.test(text)) continue; // no installed column, nothing to tally
    const rows = text.split("\n").filter((l) => /^\|/.test(l) && !/^\|\s*-+/.test(l) && !/\|\s*(Execution|Agent|Name|Pack)\s*\|/i.test(l));
    if (rows.length < 5) continue;
    const onDisk = rows.map((l) => (l.split("|")[2] ?? "").trim());
    const installed = onDisk.filter((v) => v === "library" || v === "active").length;
    const tableStart = text.search(/^\|/m); // everything above the table is the header
    for (const c of claims(text.slice(0, tableStart === -1 ? text.length : tableStart))) {
      if (c.unit !== "agents") continue;
      const expect = c.qualifier === "installed" ? installed : rows.length;
      if (c.n === expect) continue;
      findings.push(finding({
        check: "roster",
        file,
        line: c.line,
        severity: "P1",
        message: `header says ${c.raw} ${c.qualifier === "installed" ? "installed " : ""}agents; the table has ${expect}`,
        evidence: { subject: `roster:${f}:${c.qualifier}`, claimed: c.n, measured: expect, source: `${rows.length} table rows, ${installed} marked library/active` },
        fix: { offset: c.index, length: c.raw.length, from: c.raw, to: like(expect, c.raw) },
      }));
    }
  }
}

/** One pack, one unit, one qualifier: every file that states it must state the same number. */
function packAliases() {
  const src = JSON.parse(readFileSync(join(ROOT, "tools/sources.json"), "utf8"));
  const extra = {
    "rsc-harness": ["rsc-harness", "ericrisco"],
    zcaceres: ["zcaceres"],
    "claude-mpm": ["claude mpm", "claude-mpm"],
    trailofbits: ["trail of bits"],
    matt: ["matt pocock", "mattpocock"],
    "codex-skills-alternative": ["codex skills alternative"],
    "pm-claude-brief": ["pm claude brief"],
    "taste-skill": ["taste-skill"],
    gsd: ["gsd-core"],
    ecc: ["ecc"],
    han: ["/han"],
  };
  return src.entries.filter((e) => e.kind === "pack").map((e) => {
    const slug = (e.upstream?.repo ?? "").replace(/^https?:\/\/github\.com\//, "").toLowerCase();
    const aliases = [basename(e.doc).replace(/\.md$/i, "").toLowerCase(), slug, ...(extra[e.id] ?? [])].filter(Boolean);
    // Word-boundary, never substring: "han" inside "berwinsingh/oldhand" is not
    // the Han pack, and a bare .includes() reported exactly that.
    const escaped = [...new Set(aliases)].map((a) => a.replace(/[.*+?^${}()|[\]\\]/g, (ch) => `\\${ch}`));
    const re = new RegExp(`(^|[^a-z0-9-])(${escaped.join("|")})([^a-z0-9-]|$)`, "i");
    return { id: e.id, doc: e.doc, aliases: [...new Set(aliases)], re };
  });
}

function checkAgreement(findings) {
  const packs = packAliases();
  const scope = [...new Set([
    "README.md", "CLAUDE.md", "docs/SETUP.md",
    ...packs.map((p) => p.doc),
    ...readdirSync(join(ROOT, "docs/agents")).filter((f) => /\.md$/i.test(f)).map((f) => `docs/agents/${f}`),
  ])];
  const table = new Map(); // pack|unit|qualifier -> claims
  for (const f of scope) {
    if (!existsSync(join(ROOT, f))) continue;
    const text = readFileSync(join(ROOT, f), "utf8");
    const seenHere = new Set(); // first statement of a fact in a file is the headline
    for (const c of claims(text)) {
      const hay = c.sentence.toLowerCase();
      // A pack's own catalog is about that pack even when the row does not name it.
      const hit = packs.find((p) => p.doc === f) ?? packs.find((p) => p.re.test(hay));
      if (!hit) continue;
      const key = `${hit.id}|${c.unit}|${c.qualifier}`;
      if (seenHere.has(key)) continue;
      seenHere.add(key);
      if (!table.has(key)) table.set(key, []);
      table.get(key).push({ file: f, line: c.line, n: c.n, raw: c.raw, index: c.index, pack: hit });
    }
  }
  for (const [key, rows] of table) {
    const values = [...new Set(rows.map((r) => r.n))];
    if (values.length < 2) continue;
    if (new Set(rows.map((r) => r.file)).size < 2) continue; // one file disagreeing with itself is prose, not drift
    const [id, unit, qualifier] = key.split("|");
    const own = rows.find((r) => r.file === r.pack.doc); // the pack catalog is canonical
    const canonical = own?.n ?? [...values].sort((a, b) => rows.filter((r) => r.n === b).length - rows.filter((r) => r.n === a).length)[0];
    for (const r of rows.filter((x) => x.n !== canonical)) {
      findings.push(finding({
        check: "agreement",
        file: r.file,
        line: r.line,
        severity: "P2",
        message: `says ${id} has ${r.raw} ${unit}${qualifier === "installed" ? " installed" : ""}; ${own ? own.file : "the other docs"} say ${canonical}`,
        evidence: { subject: `${id}:${unit}:${qualifier}`, claimed: r.n, canonical, agrees: rows.filter((x) => x.n === canonical).map((x) => `${x.file}:${x.line}`) },
        fix: own ? { offset: r.index, length: r.raw.length, from: r.raw, to: like(canonical, r.raw) } : null,
      }));
    }
  }
}

// -------------------------------------------------------------------- driver

export function scan() {
  const tracked = trackedFiles();
  const files = mdFiles(tracked);
  const dirs = countable(tracked);
  const findings = [];
  checkLinks(files, tracked, findings);
  checkMeasured(files, dirs, findings);
  checkRosters(findings);
  checkAgreement(findings);
  const seen = new Set();
  const deduped = findings.filter((f) => (seen.has(f.id) ? false : seen.add(f.id)));
  deduped.sort((a, b) => a.severity.localeCompare(b.severity) || a.file.localeCompare(b.file) || a.line - b.line);
  return { scanned: files.length, measured: dirs.map(({ path, n }) => ({ path, n })), findings: deduped };
}

/**
 * Reference integrity alone: the half that is cheap enough to run on every
 * commit. The count and agreement checks shell out to git ls-files repeatedly
 * and belong in the gate, not in a pre-commit hook a human is waiting on.
 */
/**
 * Links only, for a pre-commit hook. Separate from report() because the full
 * report exits nonzero only on P1 and most dead links are P2, so calling that
 * from a hook would wave them through.
 */
export function refsOnly() {
  const tracked = trackedFiles();
  const files = mdFiles(tracked);
  const findings = [];
  checkLinks(files, tracked, findings);
  // One dead target named twice in a file (a [link](x) and a bare x) is one
  // problem, not two; ids are keyed on the subject, so dedup collapses it.
  const seen = new Set();
  return { scanned: files.length, findings: findings.filter((f) => (seen.has(f.id) ? false : seen.add(f.id))) };
}

/** Rewrite the numbers we measured. Detection re-runs here so offsets are fresh. */
function applyFixes() {
  const { findings } = scan();
  const byFile = new Map();
  for (const f of findings.filter((x) => x.fix)) {
    if (!byFile.has(f.file)) byFile.set(f.file, []);
    byFile.get(f.file).push(f);
  }
  let n = 0;
  for (const [file, fs] of byFile) {
    const p = join(ROOT, file);
    let text = readFileSync(p, "utf8");
    // Descending offset: an earlier edit must not shift a later one.
    for (const f of fs.sort((a, b) => b.fix.offset - a.fix.offset)) {
      const { offset, length, from, to } = f.fix;
      if (text.slice(offset, offset + length) !== from) {
        console.error(`  skip ${f.id}: text moved under the fix`);
        continue;
      }
      text = text.slice(0, offset) + to + text.slice(offset + length);
      console.log(`  ${file}:${f.line}  ${from} -> ${to}   (${f.check}, ${f.id})`);
      n++;
    }
    writeFileSync(p, text);
  }
  console.log(`docs-check --fix: rewrote ${n} count(s) across ${byFile.size} file(s)`);
  return n;
}

function report(json) {
  const r = scan();
  if (json) {
    console.log(JSON.stringify(r, null, 2));
    return 0;
  }
  for (const f of r.findings) console.error(`  ${f.severity} ${f.check.padEnd(9)} ${f.file}:${f.line}  ${f.message}`);
  const p1 = r.findings.filter((f) => f.severity === "P1").length;
  console.log(`docs-check: ${r.findings.length} finding(s) across ${r.scanned} files (${p1} P1)`);
  return p1 ? 1 : 0;
}

function selfTest() {
  const assert = (c, m) => { if (!c) { console.error(`docs-check --self-test FAIL: ${m}`); process.exit(1); } };
  assert(toNum("Fourteen") === 14 && toNum("33") === 33 && toNum("banana") === -1, "number parsing");
  assert(like(14, "Fourteen") === "Fourteen" && like(14, "9") === "14" && like(33, "Six") === "33", "renders like the sample it replaces");

  // A claim survives the line wrap prose puts between the number and the unit.
  const wrapped = "Intro text here.\n\nFourteen\nagents ship in .claude/agents/ today.\n";
  const c = claims(wrapped);
  assert(c.length === 1 && c[0].n === 14 && c[0].unit === "agents", "wrapped claim must still parse");
  assert(c[0].sentence.includes(".claude/agents"), "the sentence is the context for prose");

  // A table row is its own context, so a neighbouring row cannot supply the path.
  const tbl = "| a | .claude/agents/ dir | 1 agents |\n| b | docs/rules/ dir | 99 agents |\n";
  const rows = claims(tbl);
  assert(rows.length === 2 && !rows[1].sentence.includes(".claude/agents"), "table rows must not bleed into each other");

  // Regression: a paragraph-wide window welded "73 agents" (upstream) onto the
  // .claude/agent-library/ path two sentences later and reported it as drift.
  const para = "73 agents: 68 top-level plus 5 inside skills. Parked in .claude/agent-library/ here.";
  const far = claims(para).find((x) => x.n === 73);
  assert(!far.sentence.includes("agent-library"), "a later sentence must not supply the path");

  // Regression: alias matching by substring read "berwinsingh/oldhand" as the
  // Han pack, inventing a cross-file disagreement out of nothing.
  const han = packAliases().find((x) => x.id === "han");
  assert(han.re.test("thebushidocollective/han ships 72"), "the real slug still matches");
  assert(!han.re.test("berwinsingh/oldhand: 1 skill"), "an alias inside another word is not a match");

  // "N of the M" inherits its unit from the total it refers back to.
  const pair = claims("73 agents ship upstream. 34 of the 73 are installed here.");
  const inh = pair.find((x) => x.inherited);
  assert(inh && inh.n === 34 && inh.unit === "agents" && inh.qualifier === "installed", "the pair form must inherit its unit");

  assert(claims("34 of the 73 are installed").length === 0, "a bare numeral pair states no unit");
  assert(claims("Of the 73 agents, 34 are installed")[0].qualifier === "installed", "qualifier detection");
  assert(claims("73 agents ship upstream")[0].qualifier === "total", "default qualifier");

  // Stable ids: keyed on subject, so a finding that moves down the file keeps its id.
  const mk = (file, line) => finding({ check: "measured", file, line, severity: "P1", message: "m", evidence: { subject: "x" } });
  assert(mk("README.md", 5).id === mk("README.md", 900).id, "ids must not move with line numbers");
  assert(mk("README.md", 5).id !== mk("CLAUDE.md", 5).id, "ids must separate by file");

  // A fix must rewrite exactly the span it measured.
  const src = "There are 9 agents in .claude/agents/ here.";
  const f = claims(src)[0];
  assert(src.slice(f.index, f.index + f.raw.length) === "9", "fix offsets address the number itself");

  // A dead link is retargeted only when exactly one file answers to that name.
  const tr = trackedFiles();
  assert(relink(tr, "docs/SETUP-GONE.md", ROOT) === null, "a basename nothing carries has no fix");
  assert(relink(tr, "docs/rules/README.md", ROOT) === null, "an ambiguous basename has no fix");
  assert(relink(tr, "docs/SAFETY.md", ROOT) === "docs/rules/SAFETY.md", "a moved file is retargeted");

  // A reviewer finding is keyed on its quote, so a reflow must not reissue it.
  const one = normalizeSemantic([{ file: "CLAUDE.md", line: 10, quote: "the  gate\nruns   here", problem: "p", class: "SEMANTIC", severity: "P1" }]);
  const same = normalizeSemantic([{ file: "CLAUDE.md", line: 400, quote: "the gate runs here", problem: "p", class: "SEMANTIC", severity: "P1" }]);
  assert(one[0].id === same[0].id, "whitespace and line moves must not change a reviewer id");
  assert(one[0].fix === null, "a prose finding is never auto-applied");
  assert(normalizeSemantic([{ file: "a", quote: "q", severity: "nonsense" }])[0].severity === "P3", "a bad severity degrades, it does not throw");

  // The inventory measures; it never guesses.
  const dirs = countable(trackedFiles());
  assert(dirs.every((d) => Number.isInteger(d.n) && d.n > 0), "every countable dir measured a real number");
  assert(dirs.find((d) => d.path === ".claude/agents").n === readdirSync(join(ROOT, ".claude/agents")).length, "tracked count matches the working tree");
  console.log("docs-check --self-test: OK");
}

// ------------------------------------------------------------------ baseline

const BASELINE = "docs/ai/baseline-contradictions.json";

const readBaseline = () => (existsSync(join(ROOT, BASELINE)) ? JSON.parse(readFileSync(join(ROOT, BASELINE), "utf8")) : { findings: [] });

/**
 * A reviewer's finding, keyed on the text it quotes rather than on where that
 * text sits. Prose moves constantly; the id has to survive a reflow or the
 * baseline reports every rewrap as a brand-new problem.
 */
export function normalizeSemantic(raw) {
  return raw.map((r) => {
    const quote = String(r.quote ?? "").replace(/\s+/g, " ").trim().slice(0, 120);
    return {
      id: idFor("review", `${r.file}|${quote.toLowerCase()}`),
      check: "review",
      class: r.class === "MECHANICAL" ? "MECHANICAL" : "SEMANTIC",
      severity: /^P[123]$/.test(r.severity) ? r.severity : "P3",
      file: r.file,
      line: r.line ?? 1,
      message: r.problem,
      evidence: { subject: `review:${quote}`, quote, conflicts_with: r.conflicts_with ?? null },
      fix: null, // prose fixes are proposals for a human, never applied by --fix
      suggested_fix: r.suggested_fix ?? null,
    };
  });
}

/** Merge a fresh scan and any reviewer findings into the tracked baseline. */
function writeBaseline(semanticPath, today) {
  const prior = new Map(readBaseline().findings.map((f) => [f.id, f]));
  const scanned = scan();
  const incoming = [...scanned.findings];
  if (semanticPath) incoming.push(...normalizeSemantic(JSON.parse(readFileSync(resolve(semanticPath), "utf8"))));
  // Reviewer findings already in the baseline are kept even when this run had
  // no reviewer pass: CI runs the deterministic half only, and must not read
  // that absence as "resolved".
  for (const f of prior.values()) if (f.check === "review" && !semanticPath) incoming.push(f);

  const merged = new Map();
  for (const f of incoming) {
    const was = prior.get(f.id);
    merged.set(f.id, { ...f, first_seen: was?.first_seen ?? today, status: was?.status ?? "open", ...(was?.note ? { note: was.note } : {}) });
  }
  const findings = [...merged.values()].sort((a, b) => a.severity.localeCompare(b.severity) || a.file.localeCompare(b.file) || a.line - b.line);
  const out = {
    "//": "Known documentation contradictions. Ids are stable across runs: they key on the file and the claim, never on a line number, so a finding survives a reflow. Regenerate with `node tools/docs-check.mjs --baseline`. CI compares against this and fails only on a NEW P1 SEMANTIC finding.",
    "//status": "open = still true. accepted = true but deliberately left (say why in note). fixed = repaired; kept so the id is not reissued.",
    measured: Object.fromEntries(scanned.measured.map((m) => [m.path, m.n])),
    counts: {
      total: findings.length,
      mechanical: findings.filter((f) => f.class === "MECHANICAL").length,
      semantic: findings.filter((f) => f.class === "SEMANTIC").length,
      p1: findings.filter((f) => f.severity === "P1").length,
    },
    findings,
  };
  writeFileSync(join(ROOT, BASELINE), `${JSON.stringify(out, null, 2)}\n`);
  console.log(`baseline: ${findings.length} finding(s) -> ${BASELINE} (${out.counts.p1} P1, ${out.counts.semantic} semantic)`);
  return out;
}

/** What this tree has that the baseline does not, and what it has stopped having. */
function against() {
  const base = readBaseline();
  const known = new Map(base.findings.map((f) => [f.id, f]));
  const current = scan().findings;
  const live = new Set(current.map((f) => f.id));
  return {
    fresh: current.filter((f) => !known.has(f.id)),
    // Reviewer findings cannot be re-derived without a reviewer pass, so they
    // are never counted as resolved by a deterministic run.
    resolved: base.findings.filter((f) => f.check !== "review" && f.status === "open" && !live.has(f.id)),
  };
}

function ciCheck() {
  const { fresh, resolved } = against();
  for (const f of fresh) console.error(`  NEW ${f.severity} ${f.class} ${f.file}:${f.line}  ${f.message}`);
  for (const f of resolved) console.log(`  RESOLVED ${f.file}  ${f.message}`);
  // Mechanical drift is repaired automatically by --fix, so it does not block.
  // A semantic contradiction needs a person, which is what a red build buys.
  const blocking = fresh.filter((f) => f.severity === "P1" && f.class === "SEMANTIC");
  if (blocking.length) {
    console.error(`\ndocs-watchdog: ${blocking.length} new P1 SEMANTIC finding(s). These need a human decision.`);
    return 1;
  }
  console.log(`docs-watchdog: ${fresh.length} new, ${resolved.length} resolved, 0 new P1 semantic. OK`);
  return 0;
}

/** Markdown for a PR comment. */
function diffMarkdown() {
  const { fresh, resolved } = against();
  const rows = (fs) => fs.map((f) => `| ${f.severity} | ${f.class} | \`${f.file}:${f.line}\` | ${f.message.replace(/\|/g, "\\|")} |`).join("\n");
  const out = ["## Docs watchdog", ""];
  if (!fresh.length && !resolved.length) out.push("No change against `docs/ai/baseline-contradictions.json`.");
  if (fresh.length) out.push(`### ${fresh.length} new`, "", "| Sev | Class | Where | What |", "|---|---|---|---|", rows(fresh), "");
  if (resolved.length) out.push(`### ${resolved.length} resolved`, "", "| Sev | Class | Where | What |", "|---|---|---|---|", rows(resolved), "");
  const blocking = fresh.filter((f) => f.severity === "P1" && f.class === "SEMANTIC").length;
  out.push("", blocking ? `**Build failed:** ${blocking} new P1 SEMANTIC finding(s) need a human decision.` : "_Mechanical findings are auto-fixable with `node tools/docs-check.mjs --fix`._");
  console.log(out.join("\n"));
  return 0;
}

const invokedDirectly = resolve(process.argv[1] ?? "") === resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
if (invokedDirectly) {
  const argv = process.argv.slice(2);
  const flag = (name) => { const i = argv.indexOf(name); return i === -1 ? null : argv[i + 1]; };
  if (argv.includes("--self-test")) selfTest();
  else if (argv.includes("--fix")) applyFixes();
  else if (argv.includes("--baseline")) writeBaseline(flag("--semantic"), flag("--today") ?? new Date().toISOString().slice(0, 10));
  else if (argv.includes("--check")) process.exit(ciCheck());
  else if (argv.includes("--diff")) process.exit(diffMarkdown());
  else if (argv.includes("--refs")) {
    const r = refsOnly();
    for (const f of r.findings) console.error(`  ${f.severity} ${f.check.padEnd(6)} ${f.file}:${f.line}  ${f.message}`);
    console.log(`check-references: ${r.findings.length} broken reference(s) across ${r.scanned} markdown file(s)`);
    process.exit(r.findings.length ? 1 : 0);
  } else process.exit(report(argv.includes("--json")));
}
