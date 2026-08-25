<!-- Mapped from the global CLAUDE.md, 2026-08-23 -->

# Tests and evals: every time, no exceptions

- Every feature ships a test suite in the same commit, plus evals when latent
  behavior is involved. Every bug fix ships a test that would have caught it
  (plus an eval when the bug was latent). Trivial one-liners and doc-only
  changes need no new test; every commit still passes the standing gate. Not
  in the diff means not done. "Later" is banned.
- Tests written by the pass that wrote the code inherit its blind spots. The
  plan's `### Acceptance Criteria` is the independent yardstick review checks
  against. Weakening, deleting, or skipping a planned case is a spec question
  to raise, never a silent edit.
- Every failure gets codified same day: gate test, script, or skill that makes
  that path unreachable.

## Two lanes, different budgets

| Lane | Cost | When | Rules |
|---|---|---|---|
| Gate tests | free, deterministic, <2s | CI on every push/PR; every commit via pre-commit hook once wired | never flaky, always green on main |
| Periodic evals | paid (LLM calls) | before ship + nightly | may be non-deterministic, must have a pass threshold |

Gate command and eval command live in CLAUDE.md `## Commands`. Each service
carries its own suites (docs/rules/SERVICES.md).

Non-trivial logic leaves ONE runnable check behind (an assert-based self-check
or one small test file); trivial one-liners need no test. The one-check rule
is the floor under the feature-suite rule above, not a replacement for it: a
feature ships its suite, and every non-trivial helper keeps at least its check.
