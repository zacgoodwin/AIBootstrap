#!/usr/bin/env node
// Self-check for the PreToolUse heredoc guard.
//
//   node .claude/hooks/heredoc-guard-check.mjs --check [path-to-json]
//
// Two levels, because this guard has failed in both:
//
//   Unit        - cases run against isHeredoc() imported from
//                 heredoc-guard.mjs, the same function the hook calls.
//   Integration - the registered hook command is pulled out of a
//                 settings-shaped JSON file and fed real payloads on stdin,
//                 so a guard that is mis-registered, mis-quoted or pointed at
//                 a missing file fails here too.
//
// The path argument defaults to ~/.claude/settings.json (checking the
// machine); the gate passes docs/rules/windows-hook.json (checking the
// template this kit ships).
//
// These cases do NOT define the guard's behaviour and must not be read as its
// specification. Six versions were specified by their fixture list, and all
// six shipped a bypass the fixtures could not see, because a fixture list
// written by the same pass that wrote the matcher inherits its blind spots.
// The specification is the invariant in heredoc-guard.mjs; the proof is
// heredoc-guard-sweep.mjs, which enumerates both axes against real bash.
// What follows is a fast regression net over the bypasses that actually
// shipped, so the gate catches a reintroduction without paying sweep prices.

import { readFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { homedir } from "node:os";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { isHeredoc } from "./heredoc-guard.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, "..", "..");
const args = process.argv.slice(2).filter((a) => a !== "--check");
const SOURCE = args[0] ?? join(homedir(), ".claude", "settings.json");

// Built from char codes so this file holds no literal heredoc token: the
// guard inspects the command of every Bash call, and `node <this file>` must
// not trip it.
const LT = String.fromCharCode(60);
const HD = LT + LT;
const BS = String.fromCharCode(92);

// [name, command a user would run, should it be denied]
//
// Each "deny" entry below was confirmed to write a real file under bash
// before being asserted, so no case asserts a form bash would reject anyway.
const CASES = [
  // --- one bypass per shipped version, newest first ---
  // v8: the v7 mistake one step over. Deleting quotes fused a quoted `<` onto
  // the operator into a fake `<<<`; and the continuation regex did not count
  // the backslash run, so an even run (all escaped literals, newline real) was
  // swallowed as a continuation.
  ["v8 quoted < in the delimiter", `cat ${HD}'${LT}EOF' > o\nPAYLOAD\n${LT}EOF`, true],
  ["v8 quoted < before the operator", `tee o '${LT}'${HD}EOF\nPAYLOAD\nEOF`, true],
  ["v8 even backslash run before newline", `echo a${BS}${BS}\n${HD}EOF cat > o\nPAYLOAD\nEOF`, true],
  ["v8 odd run really is a continuation", `tee f ${LT}${BS}\n${LT}EOF\nx\nEOF`, true],
  ["v8 even run leaves the newline real", `echo a${BS}${BS}\necho b`, false],
  // v7: deleting an escape FUSED a `<` redirect onto the `<<` operator into a
  // fake `<<<`, which the here-string step then removed along with the real
  // heredoc. (Honoured by bash when the redirect source exists, so the sweep
  // creates a file `q`; without it bash fails on the missing source instead.)
  ["v7 escape deletion forges a here-string", `tee o ${LT}${BS}q${HD}EOF\nPAYLOAD\nEOF`, true],
  ["v7 same with an fd prefix", `tee o 3${LT}${BS}q${HD}EOF\nPAYLOAD\nEOF`, true],
  ["v7 quote adjacency under eval", `eval 'cat ${LT}'''${LT}EOF > o'`, true],
  ["v6 escaped-< before operator", `tee o f${BS}${LT}${HD}EOF\nPAYLOAD\nEOF`, true],
  ["v6 escaped-< tab-stripping", `tee o f${BS}${LT}${HD}-EOF\nPAYLOAD\nEOF`, true],
  ["v6 process substitution delimiter", `cat ${HD} ${LT}(echo hi) > o\nPAYLOAD\nEOF`, true],
  ["v5 line continuation splits the operator", `tee f ${LT}${BS}\n${LT}EOF\nx\nEOF`, true],
  ["v5 VT-leading delimiter", `cat ${HD}EOF\nx`, true],
  ["v5 NBSP-leading delimiter", `cat ${HD} EOF\nx`, true],
  ["v5 BOM-leading delimiter", `cat ${HD}﻿EOF\nx`, true],
  ["v4 equals-leading delimiter", `cat ${HD}=EOF\nx\n=EOF`, true],
  ["v3 backslash-quoted delimiter", `cat ${HD}${BS}EOF\nx\nEOF`, true],
  ["v3 digit-leading delimiter", `cat ${HD}1EOF\nx\n1EOF`, true],
  ["v2 no space before operator", `cat${HD}EOF\nx\nEOF`, true],
  ["v2 fd-prefixed", `cat 0${HD}EOF\nx\nEOF`, true],
  ["v2 filename-prefixed", `tee f${HD}EOF\nx\nEOF`, true],

  // --- ordinary spellings, so the common path is covered too ---
  ["bare delimiter", `cat ${HD}EOF\nx\nEOF`, true],
  ["tab-stripping", `cat ${HD}-EOF\nx`, true],
  ["single-quoted delimiter", `cat ${HD}'EOF'\nx`, true],
  ["double-quoted delimiter", `cat ${HD}"EOF"\nx`, true],
  ["space before delimiter", `cat ${HD} EOF\nx`, true],
  ["inside a longer command", `mkdir -p d && cat ${HD}EOF > d/f\nx\nEOF`, true],

  // --- must allow: the here-string exception, and commands with no operator
  ["here-string", `cat ${HD}${LT} "abc"`, false],
  ["here-string, tight", `cat ${HD}${LT}WORD`, false],
  ["here-string, no space before", `cat${HD}${LT} "abc"`, false],
  ["input redirect", `sort ${LT} f`, false],
  ["append redirect", `echo x >> f`, false],
  ["plain command", `ls -la`, false],
  ["pipe", `cat a | grep b`, false],
  ["and-list", `mkdir -p d && cd d`, false],
  ["escaped backslash, no operator", `echo "a${BS}${BS}b"`, false],

  // --- accepted false positives (documented in heredoc-guard.mjs) ---
  ["bit shift (ponytail)", `echo $((1 ${HD} 3))`, true],
  ["left-shift assignment (ponytail)", `echo $((x ${HD}= 2))`, true],
  ["literal in quotes (ponytail)", `grep -c "a${HD}b" f`, true],
];

let failed = 0;

// --- unit: the function the hook actually calls ---
for (const [name, command, denied] of CASES) {
  if (isHeredoc(command) !== denied) {
    failed++;
    console.error(`heredoc-guard: FAIL unit ${name} (expected ${denied ? "deny" : "allow"})`);
  }
}

// --- integration: the command as registered, over stdin ---
let json;
try {
  json = JSON.parse(readFileSync(SOURCE, "utf8"));
} catch (err) {
  console.error(`heredoc-guard: cannot read ${SOURCE}: ${err.message}`);
  process.exit(1);
}

const registered = (json.hooks?.PreToolUse ?? [])
  .flatMap((entry) => entry.hooks ?? [])
  .map((hook) => hook.command)
  .find((c) => typeof c === "string" && c.includes("heredoc-guard.mjs"));

if (!registered) {
  console.error(`heredoc-guard: no guard registered in PreToolUse hooks of ${SOURCE}`);
  process.exit(1);
}

if (spawnSync("bash", ["-c", "exit 0"]).status !== 0) {
  console.error("heredoc-guard: no bash on PATH, cannot run integration checks");
  process.exit(1);
}

// $CLAUDE_PROJECT_DIR is set by the harness inside a project and does NOT
// exist outside one, so the shipped template's `$CLAUDE_PROJECT_DIR/...` path
// is correct for a repo settings.json and broken for a global one. Supplying
// it unconditionally is how an earlier check reported OK over a guard that
// could not load: node exits 1 on MODULE_NOT_FOUND, only exit 2 blocks, so
// the heredoc ran. Inject it ONLY for the template this repo ships; anything
// else uses the real environment, so a path that will not resolve at runtime
// fails here instead of silently failing open in production.
const isShippedTemplate = resolve(SOURCE) === resolve(join(REPO, "docs/rules/windows-hook.json"));
const env = { ...process.env };
if (isShippedTemplate) env.CLAUDE_PROJECT_DIR = REPO;

const UNSET = "__CLAUDE_PROJECT_DIR_UNSET__";
const quoted = registered.match(/"([^"]*heredoc-guard\.mjs)"/);
const bare = registered.match(/(\S*heredoc-guard\.mjs)/);
const scriptPath = (quoted?.[1] ?? bare?.[1] ?? "").replace(
  /\$\{?CLAUDE_PROJECT_DIR\}?/g,
  env.CLAUDE_PROJECT_DIR ?? UNSET
);

if (!scriptPath || scriptPath.includes(UNSET) || !existsSync(scriptPath)) {
  console.error(`heredoc-guard: registered command cannot resolve its script: ${registered}`);
  if (scriptPath.includes(UNSET)) {
    console.error("heredoc-guard: it references $CLAUDE_PROJECT_DIR, which does not exist outside a project.");
    console.error("heredoc-guard: on the Global path, register an absolute path to heredoc-guard.mjs instead.");
  } else {
    console.error(`heredoc-guard: no file at ${scriptPath}`);
  }
  console.error("heredoc-guard: until this resolves the hook exits 1, which does NOT block, and heredocs run.");
  process.exit(1);
}

// The unit layer already ran every case against the same matcher, so the
// wired layer only proves the registration works end to end. Running all of
// CASES here cost 2.3s of the gate's <2s budget for no extra coverage.
const WIRED = [
  ["denies a heredoc", `cat ${HD}EOF\nx\nEOF`, 2],
  ["denies an escaped-< heredoc", `tee o f${BS}${LT}${HD}EOF\nx\nEOF`, 2],
  ["allows a plain command", `ls -la`, 0],
  ["allows a here-string", `cat ${HD}${LT} "abc"`, 0],
];

for (const [name, command, want] of WIRED) {
  const payload = JSON.stringify({ tool_name: "Bash", tool_input: { command } });
  const run = spawnSync("bash", ["-c", registered], { input: payload, encoding: "utf8", env });
  if (run.status !== want) {
    failed++;
    console.error(`heredoc-guard: FAIL wired ${name} (exit ${run.status}, want ${want}) ${run.stderr?.trim() ?? ""}`);
  }
}

// The guard must read tool_input.command and nothing else: an earlier version
// grepped the whole payload and blocked clean commands whose description
// merely mentioned the token.
const noisy = JSON.stringify({
  tool_name: "Bash",
  tool_input: { command: "ls -la", description: `explain what ${HD} means` },
  cwd: `/tmp/${HD}dir`,
});
const noisyRun = spawnSync("bash", ["-c", registered], { input: noisy, encoding: "utf8", env });
if (noisyRun.status !== 0) {
  failed++;
  console.error(`heredoc-guard: FAIL wired token only in description/cwd (exit ${noisyRun.status}, want 0)`);
}

if (failed) {
  console.error(`heredoc-guard: ${failed} check(s) failed`);
  process.exit(1);
}

console.log(`heredoc-guard: self-check OK (${CASES.length} unit, ${WIRED.length + 1} wired)`);
process.exit(0);
