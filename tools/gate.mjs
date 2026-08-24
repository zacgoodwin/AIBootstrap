#!/usr/bin/env node
// Gate: every repo path referenced in CLAUDE.md, README.md, and docs/ must
// exist. Free, deterministic, <2s. This gate exists because the docs rotted
// against deleted files once (docs/ai/*, rules/*, tools/*); it makes that
// path unreachable. Run: node tools/gate.mjs  |  self-test: --self-test
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const ROOT = resolve(dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1")), "..");

// Dirs the template tells ADOPTERS to create; absent in the kit itself.
const TEMPLATE_DIRS = /^(services|contracts|schemas)\//;
const SKIP = [/^\.claude\/workflows\/?$/]; // "created on first save" (DELEGATION.md)

function mdFiles() {
  const files = [join(ROOT, "CLAUDE.md"), join(ROOT, "README.md")];
  const walk = (dir) => {
    for (const e of readdirSync(dir)) {
      const p = join(dir, e);
      if (statSync(p).isDirectory()) {
        // plans/ archives history; frameworks/ documents EXTERNAL repos' layouts
        if (e !== "plans" && e !== "frameworks") walk(p);
      } else if (e.toLowerCase().endsWith(".md")) files.push(p);
    }
  };
  walk(join(ROOT, "docs"));
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
  // Bare path mentions rooted at known repo dirs (not preceded by ~ or /)
  for (const m of text.matchAll(/(?<![\w~/.])((?:docs|tools|services|contracts|schemas|\.claude|\.github)\/[\w][\w./-]*)/g)) {
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
      if (!existsSync(abs.replace(/[.,;:]+$/, ""))) missing.push(`${f.slice(ROOT.length + 1)} -> ${raw}`);
    }
  }
  if (missing.length) {
    console.error(`gate: ${missing.length} dead path reference(s):`);
    for (const m of missing) console.error(`  ${m}`);
    process.exit(1);
  }
  console.log(`gate: OK (${checked} path references resolve)`);
}

function selfTest() {
  const fixture = "See [plan](docs/plans) and docs/rules/SAFETY.md, plus docs/nope-missing.md and services/<name>/CLAUDE.md and .claude/workflows/.";
  const got = extractPaths(fixture, ROOT).map((p) => p.raw);
  const assert = (cond, msg) => { if (!cond) { console.error(`gate --self-test FAIL: ${msg}`); process.exit(1); } };
  assert(got.includes("docs/rules/SAFETY.md"), "should extract bare docs path");
  assert(got.includes("docs/nope-missing.md"), "should extract the bad path");
  assert(!got.some((r) => r.includes("<name>")), "placeholders must be skipped");
  assert(!got.some((r) => r.startsWith(".claude/workflows")), "SKIP list must apply");
  assert(!existsSync(join(ROOT, "docs/nope-missing.md")), "fixture bad path must not exist");
  console.log("gate --self-test: OK");
}

process.argv[2] === "--self-test" ? selfTest() : run();
