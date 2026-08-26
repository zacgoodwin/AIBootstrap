// PreToolUse hook (official token-cost pattern, node instead of jq so it runs
// on Windows Git Bash without extra installs): when the Bash command is a
// plain test-runner invocation, rewrite it to surface only failures. Full
// output stays available by chaining anything past the bare runner (e.g.
// `npm test 2>&1 | cat`): chained commands pass through untouched.
//
// TODO(bootstrap): on the REPO path the interview replaces TEST_RUNNERS with
// this project's actual gate command, and SELF_CHECK with a command the new
// regex matches. The GLOBAL path (docs/SETUP.md step 3) copies this file to
// ~/.claude/hooks/ and keeps the list broad on purpose: one hook, every repo.
//
// The trailing group is a COMMAND BOUNDARY, and it is load-bearing at a trust
// boundary: this hook auto-approves whatever it matches. Without a boundary
// the alternation matched any binary sharing a prefix, so `cargo testbed`,
// `pytest_evil` and `mix testify --oops` were rewritten and auto-approved as
// if they were the runner.
//
// Space and tab ONLY, deliberately NOT `\s`: JS `\s` is a superset of bash's IFS,
// also matching U+00A0, U+000B, U+000C, U+2028 and U+FEFF. bash treats those
// as ordinary characters, so `pytest<U+00A0>evil` is ONE word naming a
// DIFFERENT binary. `\s` would have auto-approved it on pytest's reputation,
// and U+00A0 renders as a plain space, so the impostor is invisible to a human
// reading the transcript.
const TEST_RUNNERS = /^(npm test|npx vitest|pnpm test|bun test|pytest|go test|cargo test|mix test|rspec)([ \t]|$)/;
const SELF_CHECK = "npm test"; // must match TEST_RUNNERS; --check asserts it

// What counts as a line worth surfacing. ONE source of truth: the grep below
// is built from this string, so the self-check can assert against the same
// pattern the shell will actually run.
//
// Case-insensitive `fail|error` rather than `FAIL|ERROR|error:`, because the
// uppercase form silently swallowed whole runners: ExUnit prints "1 test, 1
// failure" and "Assertion with == failed", RSpec prints "Failures:" and "1
// example, 1 failure". Neither contains FAIL, ERROR, or error:, so a red suite
// surfaced ZERO lines and exited 0 -- a failing run rendered as a silent clean
// one, which is strictly worse than never matching.
const FAILURE_PATTERN = "(fail|error)";
const FAILURE_MARKER = new RegExp(FAILURE_PATTERN, "i");
// Derived, not hardcoded: with `-i` written literally into the grep below,
// dropping it left --check green, because FAILURE_MARKER kept its own `i`
// and the two could disagree. Deriving it makes the flag part of the single
// source, so the marker assertions above cover the shell's behavior too.
const GREP_FLAGS = FAILURE_MARKER.flags.includes("i") ? "-i " : "";

// Security guard: never rewrite (and thereby auto-approve) a command that
// chains beyond the test run. `npm test && git push --force` must hit the
// normal permission flow, not this hook's "allow".
const CHAINED = /[;&|<>`$(){}\n]/;

// Cap on surfaced lines. `awk 'NR<=N'`, NOT `head -N`: head exits at the cap
// and closes the pipe, which SIGPIPEs the runner and turns PIPESTATUS[0] into
// 141. That made a PASSING suite report red as soon as its output passed the
// cap, and masked a failing suite's real status. awk reads the whole stream.
const MAX_LINES = 100;

// `exit ${PIPESTATUS[0]}` propagates the RUNNER's exit status instead of the
// sink's, which is always 0: without it every filtered run reported success.
const SINK = `awk 'NR<=${MAX_LINES}'`;

const rewrite = (cmd) =>
  `${cmd} 2>&1 | grep ${GREP_FLAGS}-A 5 -E '${FAILURE_PATTERN}' | ${SINK}; exit \${PIPESTATUS[0]}`;

// Self-check: `node filter-test-output.mjs --check`
if (process.argv[2] === "--check") {
  const { strict: assert } = await import("node:assert");
  const { spawnSync } = await import("node:child_process");

  assert.ok(TEST_RUNNERS.test(SELF_CHECK), "SELF_CHECK must match TEST_RUNNERS");
  assert.ok(!TEST_RUNNERS.test("git status"));
  // Every runner the global copy is expected to cover. A narrowed repo-path
  // regex drops these deliberately, and then this block is narrowed with it.
  for (const cmd of ["npm test", "npx vitest", "pnpm test", "bun test", "pytest",
                     "go test ./...", "cargo test", "mix test", "rspec"]) {
    assert.ok(TEST_RUNNERS.test(cmd), `TEST_RUNNERS must match ${cmd}`);
  }
  // The command boundary. Each of these is a DIFFERENT binary that must not be
  // rewritten, and must not be auto-approved on a test runner's reputation.
  for (const cmd of ["pytest_evil", "cargo testbed", "mix testify --oops",
                     "npm testevil", "rspecialist", "go tester",
                     // `npx?` used to match a bare "np ", auto-approving
                     // sindresorhus/np, a real publish tool, on vitest's name.
                     "np vitest --run", "np publish",
                     // Non-IFS whitespace: bash reads each of these as a single
                     // word, so they name other binaries, not the runner.
                     "pytest\u00A0evil", "pytest\u000Bevil", "pytest\u000Cevil",
                     "pytest\u2028evil", "pytest\uFEFFevil"]) {
    assert.ok(!TEST_RUNNERS.test(cmd), `must NOT match a prefix-sharing binary: ${cmd}`);
  }

  // The contrast, spelled out because U+00A0 renders as a space and a reader
  // (human or machine) cannot tell those two lines apart by eye: a REAL space
  // is a legitimate argument separator and MUST match.
  assert.ok(TEST_RUNNERS.test("pytest evil"), "a real space separates pytest from its args");
  assert.ok(TEST_RUNNERS.test("pytest\tevil"), "so does a tab");
  // Matching the runner is only half the job: the rewrite has to SURFACE that
  // runner's failures. One real failure line per runner, verbatim from its
  // output. This is the assertion whose absence let `mix test` ship broken.
  for (const [runner, line] of [
    ["jest/npm",  "FAIL src/app.test.ts"],
    ["vitest",    " FAIL  src/math.test.ts > adds"],
    ["bun test",  "(fail) adds two numbers [0.42ms]"],
    ["pytest",    "FAILED test_math.py::test_add - assert 1 == 2"],
    ["go test",   "--- FAIL: TestAdd (0.00s)"],
    ["cargo",     "test result: FAILED. 1 passed; 1 failed; 0 ignored"],
    ["exunit",    "  1 test, 1 failure"],
    ["exunit",    "     Assertion with == failed"],
    ["rspec",     "Failures:"],
    ["rspec",     "1 example, 1 failure"],
  ]) {
    assert.ok(FAILURE_MARKER.test(line), `${runner} failure line must survive the filter: ${line}`);
  }
  assert.ok(!FAILURE_MARKER.test("Tests:       3 passed, 3 total"), "clean summaries stay filtered out");
  // The accepted cost, pinned so it stays a CHOICE. Runners that count their
  // failures in the pass summary do match. That is the price of never
  // swallowing a red one, and narrowing the pattern to dodge it is how the
  // ExUnit bug happened.
  for (const clean of ["5 tests, 0 failures", "3 examples, 0 failures"]) {
    assert.ok(FAILURE_MARKER.test(clean), `known trade-off: clean summary still matches: ${clean}`);
  }

  // Behavioral tests: RUN the rewrite. String assertions about the pipeline
  // are what let the SIGPIPE regression through -- they passed while the
  // pipeline they described reported a green suite as exit 141.
  const bash = spawnSync("bash", ["-c", "exit 0"]);
  if (bash.error) {
    console.error("filter-test-output: no bash on PATH, cannot run behavioral checks");
    process.exit(1);
  }
  // A fake runner: emits `lines` matching lines, then exits `code`.
  const fakeRunner = (lines, code) =>
    `bash -c "i=0; while [ \\$i -lt ${lines} ]; do echo '1 test, 0 failures'; i=\\$((i+1)); done; exit ${code}"`;
  const run = (lines, code) => {
    const r = spawnSync("bash", ["-c", rewrite(fakeRunner(lines, code))], { encoding: "utf8" });
    return { status: r.status, lines: r.stdout.split("\n").filter(Boolean).length };
  };
  // The sink property, tested directly on SINK rather than through grep:
  // the sink must CONSUME its whole input. A sink that exits at the cap
  // (`head -N`) closes the pipe, SIGPIPEs the runner, and turns
  // PIPESTATUS[0] into 141, so a PASSING suite reports red. Driving this
  // through the full pipeline did not discriminate -- grep's buffering made
  // the SIGPIPE race unreliable at test sizes, and a head-for-awk revert
  // still passed. A fast producer straight into the sink is deterministic:
  // head gives 141 here, awk gives 0.
  const sinkProbe = spawnSync(
    "bash", ["-c", `seq 1 500000 | ${SINK} >/dev/null; exit \${PIPESTATUS[0]}`], { encoding: "utf8" });
  assert.equal(sinkProbe.status, 0,
    "SINK must consume its whole input; an early-exit sink SIGPIPEs the runner into 141");

  // Small output, both directions.
  assert.equal(run(5, 0).status, 0, "small passing run must exit 0");
  assert.equal(run(5, 1).status, 1, "small failing run must exit 1");
  // Past the cap: the exact case `head -100` got wrong.
  const bigPass = run(5000, 0);
  assert.equal(bigPass.status, 0, "a PASSING run past the line cap must still exit 0, not 141");
  assert.equal(bigPass.lines, MAX_LINES, `output must be capped at ${MAX_LINES} lines`);
  assert.equal(run(5000, 1).status, 1, "a failing run past the line cap must exit 1, not 141");

  assert.ok(CHAINED.test("npm test && git push --force"), "chained commands must be guarded");
  assert.ok(CHAINED.test("mix test && git push --force"), "the guard is runner-independent");
  assert.ok(CHAINED.test("npm test; rm -rf /"));
  assert.ok(CHAINED.test("npm test > out.txt"));
  assert.ok(!CHAINED.test("npm test --run"));

  console.log("filter-test-output: self-check OK");
  process.exit(0);
}

let raw = "";
process.stdin.on("data", (c) => (raw += c));
process.stdin.on("end", () => {
  let out = {};
  try {
    const input = JSON.parse(raw);
    const cmd = input?.tool_input?.command ?? "";
    if (TEST_RUNNERS.test(cmd) && !CHAINED.test(cmd)) {
      out = {
        hookSpecificOutput: {
          hookEventName: "PreToolUse",
          permissionDecision: "allow",
          updatedInput: { command: rewrite(cmd) },
        },
      };
    }
  } catch {
    // Malformed input: pass through untouched rather than block the tool call.
  }
  process.stdout.write(JSON.stringify(out));
});
