#!/usr/bin/env node
// Empirical proof for the heredoc guard, on both axes.
//
//   node .claude/hooks/heredoc-guard-sweep.mjs
//
// This is the guard's specification check. heredoc-guard-check.mjs is a fast
// regression net the gate can afford; THIS is the thing that decides whether
// the invariant in heredoc-guard.mjs actually holds.
//
// Method, per probe: build a command, run it under real bash, and see whether
// it wrote its file. If bash treated it as a heredoc, isHeredoc() must deny
// it. Any (bash says heredoc, guard says allow) is a bypass and fails the run.
// Probes bash does not honour are skipped rather than asserted, so no case
// passes by testing a form bash would have rejected anyway.
//
// Two axes, because using one is how six versions shipped green:
//
//   1. DELIMITER  - what follows the operator. The only axis earlier versions
//      ever varied, which is why `<<\EOF`, `<<1EOF` and `<<=EOF` all shipped.
//   2. PREFIX     - what precedes the operator, plain and backslash-escaped.
//      Never swept before, which is why `tee o f\<<EOF` shipped: the escaped
//      `<` makes three adjacent `<` and the old lookarounds read it as a
//      here-string.
//
// Domain is a floor, not a proof of totality: an earlier sweep covered only
// printable ASCII and reported "no bypasses" while VT, FF, CR, NBSP and
// U+FEFF all led working delimiters. Widen the domain rather than trusting a
// green run, and add an axis whenever a bypass turns up on one not listed
// here.
//
// NOT in the gate: hundreds of bash spawns, far past the gate's <2s budget.
// Run it whenever heredoc-guard.mjs changes.

import { spawnSync } from "node:child_process";
import { writeFileSync, existsSync, readFileSync, rmSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { isHeredoc } from "./heredoc-guard.mjs";

const LT = String.fromCharCode(60);
const HD = LT + LT;
const DIR = join(tmpdir(), "heredoc-guard-sweep");
rmSync(DIR, { recursive: true, force: true });
mkdirSync(DIR, { recursive: true });

if (spawnSync("bash", ["-c", "exit 0"]).status !== 0) {
  console.error("heredoc-sweep: no bash on PATH, cannot sweep");
  process.exit(1);
}

const CODES = [];
for (let code = 1; code <= 0xff; code++) CODES.push(code);
for (const cp of [0x1680, 0x2000, 0x2002, 0x2003, 0x2028, 0x2029, 0x202f, 0x205f, 0x3000, 0xfeff]) {
  CODES.push(cp);
}

const hex = (c) => "U+" + c.toString(16).toUpperCase().padStart(4, "0");
const bypasses = [];
let honoured = 0;
let probed = 0;

// Runs `script` under bash, returns whether it wrote PAYLOAD into `out`.
//
// Two containment measures, both learned by wrecking a working tree. The
// probes deliberately feed bash hostile characters in argument position, so:
//
//   cwd    - bash runs in the throwaway directory, never the caller's. The
//            probe shapes pass the swept character to `tee` as an argument,
//            so bash creates files named after it; those must land somewhere
//            disposable. Run from a repo root, this wrote ~380 junk files
//            into it.
//   set -f - disables globbing. The `*` probe expanded to every file in the
//            working directory and `tee` truncated all of them, destroying
//            five tracked files. Globbing has no bearing on whether `<<` is
//            parsed as a heredoc operator, so switching it off costs the
//            sweep nothing and removes the blast radius entirely.
function bashHonours(script, out) {
  const path = join(DIR, "s.sh");
  writeFileSync(path, "set -f\n" + script);
  const ran = spawnSync("bash", [path], { encoding: "utf8", timeout: 10000, cwd: DIR });
  return ran.status === 0 && existsSync(out) && readFileSync(out, "utf8").includes("PAYLOAD");
}

function probe(label, build) {
  const out = join(DIR, `o${probed++}.txt`).replace(/\\/g, "/");
  const { script, command } = build(out);
  if (!bashHonours(script, out)) return; // not a heredoc; nothing to enforce
  honoured++;
  if (!isHeredoc(command)) bypasses.push(label);
}

// --- axis 1: the delimiter ---
for (const code of CODES) {
  const d = String.fromCodePoint(code) + "ZED";
  probe(`delimiter ${hex(code)}`, (out) => ({
    script: `cat ${HD}${d} > ${out}\nPAYLOAD\n${d}\n`,
    command: `cat ${HD}${d}\nPAYLOAD\n${d}`,
  }));
}

// --- axis 2: the character immediately before the operator ---
for (const code of CODES) {
  const p = String.fromCodePoint(code);
  probe(`prefix ${hex(code)}`, (out) => ({
    script: `tee ${out} ${p}${HD}EOF\nPAYLOAD\nEOF\n`,
    command: `tee ${out} ${p}${HD}EOF\nPAYLOAD\nEOF`,
  }));
}

// --- axis 2b: that character backslash-escaped (the version-6 family) ---
//
// LEAD is what sits before the escape. It was hardcoded to `f` once, so the
// one composite that matters was never probed: with a `<` there, deleting the
// escaped character fuses it onto the operator and forges a `<<<`. That was
// version 7, and this sweep reported OK over it. Vary the lead as well.
//
// `q` exists in the sandbox because `<\q` is an input redirect: without the
// file the command fails on a missing source and bash never reaches the
// heredoc, so the probe would silently prove nothing.
writeFileSync(join(DIR, "q"), "PREREQ\n");

for (const lead of ["f", LT, `3${LT}`, ""]) {
  for (const code of CODES) {
    const p = String.fromCodePoint(code);
    probe(`escaped prefix ${hex(code)} lead ${JSON.stringify(lead)}`, (out) => ({
      script: `tee ${out} ${lead}\\${p}${HD}EOF\nPAYLOAD\nEOF\n`,
      command: `tee ${out} ${lead}\\${p}${HD}EOF\nPAYLOAD\nEOF`,
    }));
  }
}

// --- axis 3: QUOTING around and inside the delimiter ---
//
// Never swept before version 8, which is why `cat <<'<EOF'` shipped green:
// quote removal fused the quoted `<` onto the operator into a fake `<<<`.
const SQ = String.fromCharCode(39);
const DQ = String.fromCharCode(34);
for (const [label, delim] of [
  ["single-quoted", `${SQ}EOF${SQ}`],
  ["double-quoted", `${DQ}EOF${DQ}`],
  ["quoted, leading <", `${SQ}${LT}EOF${SQ}`],
  ["quoted, leading << ", `${SQ}${HD}EOF${SQ}`],
  ["double-quoted, leading <", `${DQ}${LT}EOF${DQ}`],
  ["empty quotes then word", `${SQ}${SQ}EOF`],
]) {
  probe(`quoted delimiter ${label}`, (out) => {
    const close = delim.replace(/['"]/g, "");
    return {
      script: `cat ${HD}${delim} > ${out}\nPAYLOAD\n${close}\n`,
      command: `cat ${HD}${delim} > ${out}\nPAYLOAD\n${close}`,
    };
  });
}

// A quoted `<` sitting before the operator, the other half of the same class.
for (const [label, pre] of [
  ["single-quoted <", `${SQ}${LT}${SQ}`],
  ["double-quoted <", `${DQ}${LT}${DQ}`],
  ["empty quotes", `${SQ}${SQ}`],
]) {
  probe(`quoted prefix ${label}`, (out) => ({
    script: `tee ${out} ${pre}${HD}EOF\nPAYLOAD\nEOF\n`,
    command: `tee ${out} ${pre}${HD}EOF\nPAYLOAD\nEOF`,
  }));
}

// --- axis 4: BACKSLASH-RUN LENGTH before a newline ---
//
// Only an ODD run escapes the newline. Version 8 did not count, so an even
// run was eaten as a continuation and the following line's `<<EOF` fused onto
// the previous command.
for (let run = 1; run <= 6; run++) {
  const bs = String.fromCharCode(92).repeat(run);
  probe(`backslash run ${run} before newline`, (out) => ({
    script: `echo a${bs}\n${HD}EOF cat > ${out}\nPAYLOAD\nEOF\n`,
    command: `echo a${bs}\n${HD}EOF cat > ${out}\nPAYLOAD\nEOF`,
  }));
}

// --- line continuation splitting the operator across lines ---
probe("line continuation", (out) => ({
  script: `tee ${out} ${LT}\\\n${LT}EOF\nPAYLOAD\nEOF\n`,
  command: `tee ${out} ${LT}\\\n${LT}EOF\nPAYLOAD\nEOF`,
}));

// --- process substitution as the delimiter ---
probe("process substitution delimiter", (out) => ({
  script: `cat ${HD} ${LT}(echo hi) > ${out}\nPAYLOAD\nEOF\n`,
  command: `cat ${HD} ${LT}(echo hi) > ${out}\nPAYLOAD\nEOF`,
}));

rmSync(DIR, { recursive: true, force: true });

console.log(
  `heredoc-sweep: ${probed} probes, ${honoured} honoured by bash as heredocs`
);

if (bypasses.length) {
  console.error(`heredoc-sweep: ${bypasses.length} BYPASS(ES): ${bypasses.slice(0, 25).join(", ")}`);
  console.error("heredoc-sweep: each is a heredoc bash honours and the guard allows.");
  console.error("heredoc-sweep: do NOT add an exception for them; the invariant in heredoc-guard.mjs is wrong.");
  process.exit(1);
}

console.log("heredoc-sweep: OK, no probe bash honours escapes the guard");
process.exit(0);
