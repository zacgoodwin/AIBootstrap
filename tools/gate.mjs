#!/usr/bin/env node
// Gate: every repo path referenced in CLAUDE.md, README.md, CHANGELOG.md,
// docs/, and .claude/ must exist, .gitignore must keep .claude/credentials.md
// ignored, and the shipped hooks must pass their self-checks. Free,
// deterministic, <2s. The path check exists because the docs rotted against
// deleted files once (docs/ai/*, rules/*, tools/*); it makes that path
// unreachable everywhere it scans.
// Run: node tools/gate.mjs  |  self-test: --self-test
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

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
    out.push({ raw: t, abs: resolve(fileDir, t) });
  }
  // Bare path mentions rooted at known repo dirs (not preceded by ~ or /).
  // URLs are stripped first: "costbench.com/software/developer-tools/linear/"
  // must not read as a repo ref to tools/linear/.
  const noUrls = text.replace(/https?:\/\/[^\s)]+/g, " ");
  // `rules` and `architecture` are here bare: pre-restructure refs (rules/VOICE.md)
  // must fail rather than read as prose.
  for (const m of noUrls.matchAll(/(?<![\w~/.])((?:docs|tools|services|contracts|schemas|rules|architecture|\.claude|\.github)\/[\w][\w./-]*)/g)) {
    const raw = m[1].replace(/[.,;:]+$/, "");
    out.push({ raw, abs: join(ROOT, raw) });
  }
  return out.filter(({ raw }) => {
    if (/[<>*]|TODO/.test(raw)) return false; // placeholders
    if (TEMPLATE_DIRS.test(raw)) return false;
    return !SKIP.some((re) => re.test(raw));
  });
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
  const hook = spawnSync(process.execPath, [join(ROOT, ".claude/hooks/filter-test-output.mjs"), "--check"], { stdio: "inherit" });
  if (hook.status !== 0) {
    console.error("gate: hook self-check failed");
    process.exit(1);
  }
  console.log(`gate: OK (${checked} path references resolve, credentials ignored, hooks self-check)`);
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
  console.log("gate --self-test: OK");
}

process.argv[2] === "--self-test" ? selfTest() : run();
