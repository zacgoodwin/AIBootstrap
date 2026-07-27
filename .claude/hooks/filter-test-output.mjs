// PreToolUse hook (official token-cost pattern, node instead of jq so it runs
// on Windows Git Bash without extra installs): when the Bash command is a test
// runner, rewrite it to surface only failures. Full output stays available by
// rerunning; context gets the decisive lines.
//
// TODO(bootstrap): the interview replaces TEST_RUNNERS with this project's
// actual gate command.
const TEST_RUNNERS = /^(npm test|npx? vitest|pnpm test|bun test|pytest|go test|cargo test|rspec)/;

// Self-check: `node filter-test-output.mjs --check`
if (process.argv[2] === "--check") {
  const { strict: assert } = await import("node:assert");
  assert.ok(TEST_RUNNERS.test("npm test"));
  assert.ok(TEST_RUNNERS.test("bun test --watch"));
  assert.ok(!TEST_RUNNERS.test("git status"));
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
    if (TEST_RUNNERS.test(cmd)) {
      out = {
        hookSpecificOutput: {
          hookEventName: "PreToolUse",
          permissionDecision: "allow",
          updatedInput: {
            command: `${cmd} 2>&1 | grep -A 5 -E '(FAIL|ERROR|error:)' | head -100`,
          },
        },
      };
    }
  } catch {
    // Malformed input: pass through untouched rather than block the tool call.
  }
  process.stdout.write(JSON.stringify(out));
});
