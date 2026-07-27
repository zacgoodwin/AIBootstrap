# Tests and evals: every time, no exceptions

Every feature ships with a test suite, plus an eval suite when latent behavior
is involved, in the same commit. Every bug fix ships a test that would have
caught the bug (plus an eval when the bug was in latent behavior), unless the
change is a trivial one-liner. If they aren't in the diff, the work isn't
done. "Later" is banned.

A test written by the pass that wrote the code inherits its blind spots; the
plan's `### Acceptance Criteria` section is the independent yardstick the
review checks against. Weakening, deleting, or skipping a planned case is a
spec question to raise, never a silent edit.

Every failure gets codified same day: a gate test, a script, or a skill that
makes that failure path unreachable.

## Two lanes, different budgets

| Lane | Cost | When | Rules |
|---|---|---|---|
| Gate tests | free, deterministic, <2s | CI on every push/PR; every commit once bootstrap wires the pre-commit hook | never flaky, always green on main |
| Periodic evals | paid (LLM calls) | before ship + nightly | may be non-deterministic, must have a pass threshold |

Gate command and eval command live in CLAUDE.md `## Commands`. Each service
carries its own suites (services/README.md).

Non-trivial logic leaves ONE runnable check behind (an assert-based self-check
or one small test file); trivial one-liners need no test. The one-check rule
is the floor under the feature-suite rule above, not a replacement for it: a
feature ships its suite, and every non-trivial helper keeps at least its check.
