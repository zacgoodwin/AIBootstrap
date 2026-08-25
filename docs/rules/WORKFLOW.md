<!-- Mapped from the global CLAUDE.md, 2026-08-23 -->

# Workflow

## Tickets

TODO(bootstrap): What ticketing system will be used based on input and what ticket template the user would like. If none provided then default to rules/TICKET_TEMPLATE.md

## Shipping

Branch work rides the stax + roborev + adversarial-review pipeline. Review is
the bottleneck, not code generation — so review happens at three layers:

1. **Branch:** `st create <name>` (stacked on trunk). Parallel agent work uses
   worktree lanes: `st wt c <name>` or `st lane <name> --agent claude`
   (`--no-tmux` on Windows).
2. **Iterate:** small incremental commits. The roborev post-commit hook
   reviews each one in the background (haiku, config in `.roborev.toml`).
   Check verdicts with `roborev show HEAD` / `roborev tui`; fix findings as
   they land, or run `roborev refine` to loop fix + re-review until clean.
3. **Ship:** `/stack-ship` — gates on roborev (branch-level re-review, no
   failing verdicts among completed reviews), then `st stack submit --squash`
   pushes ONE clean commit
   per branch and opens the PR (2+ PR stacks register as GitHub native
   stacks), then `/z-adversarial-review` runs a blinded reviewer + skeptics
   on codex/agy/claude against the PR.
4. **Merge:** after review, `st merge` from the stack, then `st sync` to pull
   trunk and delete merged branches.

Troubleshooting:

- Daemon down: self-heals — any roborev CLI call auto-starts it. Commits made
  while it was down are the real gap; `roborev review --branch` (the
  /stack-ship gate) covers them.
- Orphaned or stale findings after restacks: `roborev compact`.
- Stack health: `st doctor` (use `--fix` for gh-stack extension issues).

## Completion status protocol

End every task with exactly one of:

- **DONE**: all steps completed, evidence for every claim, tests + evals in
  the diff, ready to merge.
- **DONE_WITH_CONCERNS**: completed, but with issues the user should know.
  List each with severity and a proposed follow-up.
- **BLOCKED**: cannot proceed. State what's blocking and what was tried.
- **NEEDS_CONTEXT**: missing required information. State exactly what's
  needed.

"Partially done" is not a status. Honesty about incompleteness beats
pretending.

## Confusion protocol

On high-stakes ambiguity (two plausible architectures, a request contradicting
an existing pattern, a destructive operation with unclear scope, missing
context that would change the approach): STOP. Name the ambiguity in one
sentence. Present 2-3 options with real trade-offs, not a fake spread. Ask
the user. Never guess on architectural decisions. Does not apply to routine
coding, small features, or obvious changes.

## Background jobs and backfills

Any job that modifies data triggers the full protocol. Read-only jobs
(scrape, analysis) get monitoring only.

**Monitor, don't fire-and-forget.** Update at least every 5 minutes, faster
near completion or when errors spike. Two places: live in the session, and
appended timestamped to `$env:TEMP\<job-name>\progress.log` (Windows;
`/tmp/<job-name>/progress.log` elsewhere). Print the follow command on file
creation (`Get-Content -Wait <path>` or `tail -f <path>`). Update order:
event title, percent done and ETA, rows processed, rate, error count,
anomalies. Percent, rate, and ETA come from a monitor script reading the
job's real state, never from you. You read it and flag what looks wrong.

**Snapshot first.** Every row the job will modify goes to the temp dir before
it runs: proof of reversibility and the diff baseline. Over 100k rows or
100MB, stop and ask the user before snapshotting; don't start until they
answer.

**Report on completion:** verdict with evidence; whether it needs to be better
plus the specific gap and fix (no vague "could be improved"); a table of
concrete before/after examples per category; a full before/after CSV with its
exact path printed. All of it under the job's temp dir.


