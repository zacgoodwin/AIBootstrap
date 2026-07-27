# Tests and evals: every time, no exceptions

Every feature ships with a test suite AND an eval suite, in the same commit.
Every bug fix ships a test AND an eval that would have caught the bug, unless
the change is a trivial one-liner. If they aren't in the diff, the work isn't
done. "Later" is banned.

A test written by the pass that wrote the code inherits its blind spots; the
plan's `### Acceptance Criteria` section is the independent yardstick the
review checks against. Weakening, deleting, or skipping a planned case is a
spec question to raise, never a silent edit.

Every failure gets skillified via /skillify, same day, same session when
possible.

## Two lanes, different budgets

| Lane | Cost | When | Rules |
|---|---|---|---|
| Gate tests | free, deterministic, <2s | every commit (pre-commit hook) | never flaky, always green on main |
| Periodic evals | paid (LLM calls) | before ship + nightly | may be non-deterministic, must have a pass threshold |

Gate command and eval command live in CLAUDE.md `## Commands`. Each service
carries its own suites (services/README.md).

## Skeletons

Gate test (any stack, adapt):

```
test("does the one thing", () => {
  assert.equal(run(knownInput), knownOutput);
});
```

Eval (latent behavior, adapt):

```
// evals/summarize.eval
for (const case of goldenCases) {
  const out = await service.run(case.input);
  score += judge(out, case.expected);   // rubric or exact-match
}
assert(score / goldenCases.length >= 0.85);  // pass threshold
```

Non-trivial logic leaves ONE runnable check behind (an assert-based self-check
or one small test file); trivial one-liners need no test.
