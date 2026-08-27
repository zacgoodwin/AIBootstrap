#!/usr/bin/env node
// PreToolUse guard: block bash heredocs, which are mangled by hook rewriting
// and unicode/regex escaping on Windows (docs/rules/WINDOWS.md). Use the Write
// tool instead.
//
// Reads the hook payload as JSON on stdin. Exit 2 blocks the call; exit 0
// allows it.
//
// DENY BY DEFAULT. This guard does not try to recognise what a heredoc looks
// like. Six earlier versions did, and all six shipped a live bypass under a
// green test suite:
//
//   1. A PowerShell one-liner reading $env:CLAUDE_TOOL_INPUT. Hook commands
//      run through Git Bash here, so bash ate the $-variables and PowerShell
//      got a bare `=`. It errored on every call and matched nothing.
//   2. A grep over the raw stdin JSON anchored with (^|[[:space:]]). The
//      command sits mid-string, so ^ never matched: `tee f<<EOF` wrote a file.
//   3. A class listing what a delimiter may START with (['"A-Za-z_]), which
//      missed `cat <<\EOF` and `cat <<1EOF`.
//   4. `=` excluded to allow `x <<= 2`, which let `cat <<=EOF` through.
//   5. JS `\s` used for the blanks, a wider set than bash's, which let
//      VT/FF/CR/NBSP/BOM-led delimiters through, plus line continuations.
//   6. Lookarounds for `<<<` skipping `tee o f\<<EOF`, because the escaped `<`
//      makes three adjacent `<`; and `cat << <(echo hi)` as a delimiter.
//   7. Deleting escapes rather than replacing them, which FUSED a `<` redirect
//      onto a `<<` heredoc into a fake `<<<` that the here-string step then
//      removed: `tee o <\q<<EOF` wrote a file (given a file `q`) and read as
//      a here-string.
//
//   8. Deleting QUOTES, the same mistake one step over: `cat <<'<EOF'` writes
//      a file, and quote deletion fused its `<` onto the operator into a fake
//      `<<<`. Plus a line-continuation regex that did not count the backslash
//      run, so `echo a\\` + newline was eaten as a continuation.
//
// The first six were narrower guesses at the same wrong question. Seven and
// eight were a different and smaller class: the invariant held, the
// normalisation feeding it did not, and all three of those bypasses came from
// the SAME mistake (deleting a span fuses its neighbours) applied in three
// different steps. Hence the one rule below: never delete.
//
// The invariant: a heredoc operator IS two adjacent `<`. So normalise the
// command the way bash does before it recognises operators, collapse the one
// benign construct that legitimately contains `<<`, and deny whatever still
// holds `<<`.
//
// Bounded honestly. Quoting, `eval` and backslash runs can all fuse two `<`
// into an operator, which is why each is normalised rather than trusted; an
// earlier version of this comment claimed quote stripping "can only ever deny
// more", and that claim was itself a bypass. This is a backstop against
// accident, not a sandbox against a determined caller: a command that
// assembles `<<` at runtime out of variables is beyond any static check, and
// the standing rule to use the Write tool is the actual control.
//
// heredoc-guard-sweep.mjs proves what is provable against real bash, across
// delimiter, prefix, escaping, quoting and backslash-run length.

import { realpathSync } from "node:fs";
import { fileURLToPath } from "node:url";

// NORMALISATION. One rule governs all of it: NEVER DELETE. Deleting a span
// fuses whatever sat on either side of it, and a fused pair can forge a
// `<<<` that the here-string step then removes together with a real heredoc
// operator. That single mistake shipped three separate bypasses, in three
// different steps (escapes in version 7, quotes and backslash runs in version
// 8), each time under a green suite. Everything therefore collapses to a
// sentinel that cannot be `<`, so no step can ever create adjacency.
//
// Built from a char code, not written literally: a stray literal control
// character in this file once made git classify the whole file as binary.
const SENTINEL = String.fromCharCode(1);

// The ONE place something may vanish, because bash genuinely fuses there: a
// backslash run ending a line. Only an ODD run ends with a backslash that
// escapes the newline; in an even run every backslash is an escaped literal
// and the newline really terminates the line. Not counting the run treated
// `echo a\\\\` + newline as a continuation and swallowed the line break, which
// let the next line's `<<EOF` fuse into the previous command.
//
// Note the tempting /((?:\\\\)*)\\\r?\n/g form does NOT work: a global scan can
// start mid-run and still match the final backslash. Count the whole run.
const TRAILING_BACKSLASHES = /\\+\r?\n/g;

function dropLineContinuations(command) {
  return command.replace(TRAILING_BACKSLASHES, (match) => {
    const newline = match.endsWith("\r\n") ? "\r\n" : "\n";
    const run = match.length - newline.length;
    return run % 2 === 1
      ? "\\".repeat(run - 1) // odd: last backslash + newline vanish, neighbours fuse
      : "\\".repeat(run) + newline; // even: all literals, the newline is real
  });
}

// An escaped character is a LITERAL character, not an absence. `\q` is a `q`,
// and it still separates what sits either side of it.
const ESCAPE = /\\[\s\S]/g;

// `<<<` is a here-string: single-line, no delimiter, none of the mangling this
// guard exists to prevent. The only exception. It collapses to a sentinel, and
// crucially it collapses EARLY, while a `<<<` can only be a genuine one.
const HERE_STRING = /<<</g;

// Quotes are deleted, and this step must run AFTER the here-string collapse.
//
// Quotes pull in two directions, which is what made version 8 wrong whichever
// single answer it picked:
//   deleting them catches a re-parse fusing `<` '' `<` into an operator
//     (`eval 'cat <'\''<EOF'`), but on its own it FORGES a `<<<` out of
//     `cat <<'<EOF'`, a real heredoc, which a later here-string step then
//     removes together with the operator;
//   sentinelling them stops the forging but misses the fusion.
// Neither is the fix. The error was running the here-string step after
// something that can forge a here-string. Collapse `<<<` first, then delete
// quotes: a `<<<` forged afterwards still contains `<<` and denies.
const QUOTES = /['"]/g;

// ponytail: `grep "a<<b"`, `echo $((1 << 3))` and `x <<= 2` are denied too. A
// string containing `<<` is indistinguishable from an operator without a real
// bash parser, and this guard errs toward denying. Rewrite the command or move
// the arithmetic into a script. Do NOT add an exception: every exception this
// guard has ever carried (versions 3, 4 and 6) became a bypass.
export function isHeredoc(command) {
  if (typeof command !== "string") return false;
  return dropLineContinuations(command)
    .replace(ESCAPE, SENTINEL)
    .replace(HERE_STRING, SENTINEL) // while a `<<<` can only be genuine
    .replace(QUOTES, "") // after, so a forged `<<<` still reads as `<<`
    .includes("<<");
}


// Run the guard only when invoked directly, so the check can import isHeredoc
// without this reading stdin and calling process.exit. realpathSync throws
// when argv[1] is not a real path (`node -`), which would make importing this
// module crash rather than return a function.
function invokedDirectly() {
  try {
    return (
      process.argv[1] &&
      realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url))
    );
  } catch {
    return false;
  }
}

if (invokedDirectly()) {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");

  let command;
  try {
    command = JSON.parse(raw)?.tool_input?.command;
  } catch {
    // Unparseable payload: scan the raw text rather than waving the call
    // through. A backstop that fails open is not a backstop.
    command = raw;
  }

  if (isHeredoc(command)) {
    console.error("Heredoc blocked - use the Write tool");
    process.exit(2);
  }
  process.exit(0);
}
