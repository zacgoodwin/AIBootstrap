#!/usr/bin/env node
// Claim verifier: the mechanical half of /audit. A subagent reading docs
// produces OPINIONS; this file is what turns an opinion into a finding. Every
// claim arrives with evidence, every piece of evidence is re-derived off the
// filesystem here, and a claim whose evidence does not reproduce is discarded
// before any human reads it. That is the point: the audit report is a build
// artifact, not prose to fact-check.
//
// This does NOT re-implement the link walk or the count checks that
// tools/docs-check.mjs already owns; cross_reference resolves through
// gate.mjs's extractPaths so the repo keeps exactly one reference resolver.
//
// Evidence types: file_exists | line_content | count | cross_reference
// Run: node tools/verify-claims.mjs <claims.json> [--json]
// Self-test: node tools/verify-claims.mjs --self-test
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { extractPaths } from "./gate.mjs";

const ROOT = resolve(dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1")), "..");

// CRLF is the default checkout on this machine; a checker that splits on "\n"
// alone reports phantom mismatches on every file git wrote.
const lines = (text) => text.replace(/\r\n/g, "\n").split("\n");
const readIf = (p) => (existsSync(p) && statSync(p).isFile() ? readFileSync(p, "utf8") : null);

let _tracked = null;
/** Tracked files only: an untracked file is not in a clone, so it is not evidence. */
function tracked() {
  if (_tracked) return _tracked;
  const out = spawnSync("git", ["ls-files"], { cwd: ROOT, encoding: "utf8" });
  if (out.status !== 0) throw new Error("git ls-files failed; verify-claims needs a git checkout");
  return (_tracked = out.stdout.split("\n").filter(Boolean));
}

/** Agent-authored JSON never becomes a shell command. Counting is declarative. */
function measure(ev) {
  const path = (ev.path ?? "").replace(/\/+$/, "");
  const re = ev.pattern ? new RegExp(ev.pattern) : null;
  switch (ev.kind) {
    case "files": {
      const under = tracked().filter((f) => f === path || f.startsWith(path + "/"));
      const hits = re ? under.filter((f) => re.test(f)) : under;
      return { n: hits.length, how: `git ls-files ${path || "."}${re ? ` filtered by /${ev.pattern}/` : ""}` };
    }
    case "dirs": {
      const kids = new Set(
        tracked()
          .filter((f) => f.startsWith(path + "/"))
          .map((f) => f.slice(path.length + 1).split("/")[0])
          .filter((d) => d && (!re || re.test(d))),
      );
      return { n: kids.size, how: `child dirs of ${path} in git ls-files` };
    }
    case "lines": {
      const text = readIf(join(ROOT, path));
      if (text == null) return { n: null, how: `${path} does not exist` };
      const ls = lines(text).filter((l) => (re ? re.test(l) : l.trim() !== ""));
      return { n: ls.length, how: `${re ? "matching" : "non-blank"} lines in ${path}` };
    }
    case "matches": {
      if (!re) return { n: null, how: "count kind 'matches' requires a pattern" };
      const asFile = path && existsSync(join(ROOT, path)) && statSync(join(ROOT, path)).isFile();
      const files = asFile
        ? [path]
        : tracked().filter((f) => (!path || f.startsWith(path + "/")) && /\.md$/i.test(f));
      let n = 0;
      for (const f of files) n += (readIf(join(ROOT, f)) ?? "").match(new RegExp(ev.pattern, "g"))?.length ?? 0;
      return { n, how: `/${ev.pattern}/g across ${files.length} file(s)` };
    }
    default:
      return { n: null, how: `unknown count kind: ${ev.kind}` };
  }
}

const OPS = { eq: (a, b) => a === b, gte: (a, b) => a >= b, lte: (a, b) => a <= b };

/** One evidence item -> { ok, detail }. Never throws on bad agent input. */
function checkEvidence(ev) {
  try {
    switch (ev.type) {
      case "file_exists": {
        if (!ev.path) return { ok: false, detail: "file_exists needs a path" };
        const there = existsSync(join(ROOT, ev.path));
        const want = ev.absent !== true;
        return {
          ok: there === want,
          detail: `${ev.path} ${there ? "exists" : "does not exist"}; claim wanted it ${want ? "present" : "absent"}`,
        };
      }
      case "line_content": {
        const text = readIf(join(ROOT, ev.file ?? ""));
        if (text == null) return { ok: false, detail: `${ev.file} does not exist` };
        if (ev.contains == null && ev.matches == null) return { ok: false, detail: "line_content needs contains or matches" };
        // A prose quote is not a line. Markdown reflows, so a reviewer quoting
        // a sentence will span line breaks and collapse runs of spaces. With
        // normalize the file is flattened and the quote checked against that,
        // which is the only fair test of "did you actually read this".
        if (ev.normalize) {
          const flat = lines(text).join(" ").replace(/\s+/g, " ").trim();
          const needle = String(ev.contains ?? "").replace(/\s+/g, " ").trim();
          if (!needle) return { ok: false, detail: "normalize needs a non-empty contains" };
          return flat.includes(needle)
            ? { ok: true, detail: `quote reproduces in ${ev.file}` }
            : { ok: false, detail: `quote does not appear in ${ev.file}` };
        }
        const ls = lines(text);
        const hit = (l) => (ev.matches ? new RegExp(ev.matches).test(l) : String(l).includes(ev.contains));
        if (ev.line == null) {
          const at = ls.findIndex(hit);
          return at === -1
            ? { ok: false, detail: `no line in ${ev.file} matches` }
            : { ok: true, detail: `${ev.file}:${at + 1} matches` };
        }
        const actual = ls[ev.line - 1];
        if (actual !== undefined && hit(actual)) return { ok: true, detail: `${ev.file}:${ev.line} matches` };
        // A cited line number that drifted is still a wrong citation: the agent
        // asserted a location it did not read. Report where the content really is.
        const at = ls.findIndex(hit);
        return {
          ok: false,
          detail: at === -1
            ? `${ev.file}:${ev.line} does not match, and no other line does`
            : `${ev.file}:${ev.line} does not match; that content is at line ${at + 1}`,
        };
      }
      case "count": {
        const { n, how } = measure(ev);
        if (n == null) return { ok: false, detail: how };
        const op = OPS[ev.op ?? "eq"];
        if (!op) return { ok: false, detail: `unknown op: ${ev.op}` };
        return { ok: op(n, ev.expected), detail: `measured ${n} (${how}); claim said ${ev.op ?? "eq"} ${ev.expected}` };
      }
      case "cross_reference": {
        const from = ev.from ?? "";
        const text = readIf(join(ROOT, from));
        if (text == null) return { ok: false, detail: `${from} does not exist` };
        const refs = extractPaths(text, dirname(join(ROOT, from)));
        const want = ev.to ?? "";
        const match = refs.find((r) => r.raw === want || resolve(r.abs) === resolve(join(ROOT, want)));
        if (!match) return { ok: false, detail: `${from} contains no reference to ${want}` };
        const target = match.abs.replace(/[.,;:]+$/, "");
        if (!existsSync(target)) return { ok: false, detail: `${from} -> ${want} is a dead reference` };
        if (ev.anchor) {
          const heads = lines(readFileSync(target, "utf8"))
            .filter((l) => l.startsWith("#"))
            .map((l) => l.replace(/^#+\s*/, "").toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-"));
          if (!heads.includes(ev.anchor.toLowerCase())) return { ok: false, detail: `${want} has no heading #${ev.anchor}` };
        }
        return { ok: true, detail: `${from} -> ${want} resolves` };
      }
      default:
        return { ok: false, detail: `unknown evidence type: ${ev.type}` };
    }
  } catch (e) {
    return { ok: false, detail: `evidence threw: ${e.message}` };
  }
}

/** A claim survives only if it carries evidence AND every piece reproduces. */
export function verify(doc) {
  const claims = Array.isArray(doc) ? doc : (doc.claims ?? []);
  const verified = [];
  const discarded = [];
  claims.forEach((c, i) => {
    const id = c.id ?? `claim-${i + 1}`;
    const evidence = Array.isArray(c.evidence) ? c.evidence : [];
    if (evidence.length === 0) {
      discarded.push({ ...c, id, reason: "no evidence supplied", checks: [] });
      return;
    }
    const checks = evidence.map((ev) => ({ type: ev.type, ...checkEvidence(ev) }));
    const bad = checks.filter((r) => !r.ok);
    if (bad.length) discarded.push({ ...c, id, reason: bad.map((b) => b.detail).join("; "), checks });
    else verified.push({ ...c, id, checks });
  });
  return { verified, discarded, total: claims.length };
}

function report(r, json) {
  if (json) {
    console.log(JSON.stringify(r, null, 2));
    return r.discarded.length ? 1 : 0;
  }
  console.log(`verify-claims: ${r.verified.length}/${r.total} claim(s) verified, ${r.discarded.length} discarded\n`);
  if (r.verified.length) {
    console.log("VERIFIED");
    for (const c of r.verified) {
      console.log(`  PASS ${c.id}  ${c.file ?? ""}${c.line ? `:${c.line}` : ""}  ${c.finding ?? ""}`);
      for (const k of c.checks) console.log(`       ${k.type}: ${k.detail}`);
    }
    console.log("");
  }
  if (r.discarded.length) {
    console.log("DISCARDED (failed verification; must not appear in the report)");
    for (const c of r.discarded) {
      console.log(`  FAIL ${c.id}  ${c.file ?? ""}${c.line ? `:${c.line}` : ""}  ${c.finding ?? ""}`);
      console.log(`       why: ${c.reason}`);
    }
  }
  return r.discarded.length ? 1 : 0;
}

function selfTest() {
  const assert = (c, m) => { if (!c) { console.error(`verify-claims --self-test FAIL: ${m}`); process.exit(1); } };
  const one = (ev) => checkEvidence(ev);

  assert(one({ type: "file_exists", path: "tools/gate.mjs" }).ok, "existing file passes");
  assert(!one({ type: "file_exists", path: "tools/nope.mjs" }).ok, "missing file fails");
  assert(one({ type: "file_exists", path: "tools/nope.mjs", absent: true }).ok, "absence can be asserted");

  assert(one({ type: "line_content", file: "tools/gate.mjs", line: 1, contains: "#!/usr/bin/env node" }).ok, "correct line passes");
  const drift = one({ type: "line_content", file: "tools/gate.mjs", line: 999, contains: "#!/usr/bin/env node" });
  assert(!drift.ok && /at line 1\b/.test(drift.detail), "a drifted line number fails and names the real line");
  assert(one({ type: "line_content", file: "tools/gate.mjs", contains: "extractPaths" }).ok, "line may be omitted");
  assert(!one({ type: "line_content", file: "tools/gate.mjs", contains: "zzz-not-here" }).ok, "absent content fails");
  assert(!one({ type: "line_content", file: "tools/gate.mjs" }).ok, "line_content with no matcher fails closed");

  // CRLF: the same assertion must hold however git checked the file out.
  assert(lines("a\r\nb\r\n").length === lines("a\nb\n").length, "CRLF and LF split identically");

  // normalize: a reviewer quote that spans a line break still has to be real.
  const wrapped = { type: "line_content", file: "tools/gate.mjs", contains: "Importing this module (tools/docs-check.mjs does) must not run a command.", normalize: true };
  assert(one(wrapped).ok, "a quote reproduces against the flattened file");
  assert(!one({ ...wrapped, contains: "a sentence nobody ever wrote here" }).ok, "an invented quote still fails under normalize");
  assert(!one({ ...wrapped, contains: "   " }).ok, "an empty quote fails closed under normalize");

  const dirs = one({ type: "count", kind: "dirs", path: ".claude/skills", expected: 1, op: "gte" });
  assert(dirs.ok && /measured \d+/.test(dirs.detail), "dir count measures and reports how");
  assert(!one({ type: "count", kind: "files", path: "tools", expected: 99999 }).ok, "a wrong count fails");
  assert(!one({ type: "count", kind: "files", path: "tools", expected: 1, op: "bogus" }).ok, "unknown op fails closed");
  assert(!one({ type: "count", kind: "sudo rm -rf /", path: ".", expected: 1 }).ok, "an unknown kind is refused, never executed");
  assert(!one({ type: "count", kind: "matches", path: "docs", expected: 1 }).ok, "matches without a pattern fails closed");

  assert(one({ type: "cross_reference", from: "CLAUDE.md", to: "docs/rules/SAFETY.md" }).ok, "a live cross-reference resolves");
  assert(!one({ type: "cross_reference", from: "CLAUDE.md", to: "docs/nope-missing.md" }).ok, "an absent cross-reference fails");
  assert(!one({ type: "unknown_type" }).ok, "an unknown evidence type fails closed");

  // A claim with no evidence is an opinion, and opinions are discarded.
  const r = verify({ claims: [
    { id: "a", finding: "real", evidence: [{ type: "file_exists", path: "tools/gate.mjs" }] },
    { id: "b", finding: "opinion", evidence: [] },
    { id: "c", finding: "half-true", evidence: [{ type: "file_exists", path: "tools/gate.mjs" }, { type: "file_exists", path: "tools/nope.mjs" }] },
  ] });
  assert(r.verified.length === 1 && r.verified[0].id === "a", "only fully-evidenced claims survive");
  assert(r.discarded.length === 2, "unevidenced and partly-false claims are both discarded");
  assert(r.discarded.some((d) => d.id === "c"), "one bad evidence item sinks the whole claim");
  console.log("verify-claims --self-test: OK");
}

const invokedDirectly = resolve(process.argv[1] ?? "") === resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
if (invokedDirectly) {
  const argv = process.argv.slice(2);
  if (argv.includes("--self-test")) selfTest();
  else {
    const file = argv.find((a) => !a.startsWith("--"));
    if (!file) { console.error("usage: node tools/verify-claims.mjs <claims.json> [--json]"); process.exit(2); }
    if (!existsSync(file)) { console.error(`verify-claims: no such claims file: ${file}`); process.exit(2); }
    process.exit(report(verify(JSON.parse(readFileSync(file, "utf8"))), argv.includes("--json")));
  }
}
