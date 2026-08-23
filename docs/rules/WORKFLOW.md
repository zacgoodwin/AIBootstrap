# Workflow

## Tickets

Tickets live on the GitHub ProjectV2 board (/z-setup creates it; /z-plan fills
it; /z-loop drains it). Every ticket body follows docs/ai/TICKET-TEMPLATE.md —
the zstack lint enforces it.

**Deferred work is a ticket, never a TODO file or code comment.** When work is
consciously deferred, file it immediately:

```
gh issue create --title "<short imperative>" --body-file <ticket-body.md>
```

into Backlog. z-plan's backlog gate schema-checks it later. Include origin in
the Context section ("Deferred from <ticket/PR> on <date>").

UX-changing tickets update docs/user-guide/ pages in the same PR.

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

- Daemon down: self-heals — any roborev CLI call (including the one inside
  `tools/check-pipeline.sh`) auto-starts it. Commits made while it was down
  are the real gap; `roborev review --branch` (the /stack-ship gate) covers
  them.
- Orphaned or stale findings after restacks: `roborev compact`.
- Stack health: `st doctor` (use `--fix` for gh-stack extension issues).

## Completion status protocol

End every task with exactly one of:

- **DONE**: all steps completed, evidence for every claim, tests + evals in the
  diff, ready to merge.
- **DONE_WITH_CONCERNS**: completed, but with issues to know about. List each
  with severity and a proposed follow-up.
- **BLOCKED**: cannot proceed. State what's blocking and what was tried.
- **NEEDS_CONTEXT**: missing required information. State exactly what's needed.

"Partially done" is not a status.

## Confusion protocol

On high-stakes ambiguity (two plausible architectures, a request contradicting
an existing pattern, a destructive operation with unclear scope, missing
context that would change the approach): STOP. Name the ambiguity in one
sentence. Present 2-3 options with real trade-offs. Ask. Never guess on
architectural decisions. Does not apply to routine coding or obvious changes.

## Background jobs and backfills

Any background job that modifies data triggers the full protocol; read-only
jobs get the monitoring part only.

- **Monitor, don't fire-and-forget.** Progress update at least every 5 minutes:
  print it live AND append timestamped to the job's temp dir progress.log.
  Print the exact follow command when creating the file. Percent, rate, and
  ETA come from a deterministic monitor script reading the job's real state.
- **Snapshot before touching anything.** Save every row the job will modify to
  the temp dir first. Over 100k rows or 100MB: stop and ask before
  snapshotting.
- **On completion:** verdict with evidence; specific gap + fix if it needs to
  be better; before/after examples per category; full before/after CSV with
  the exact path. Tie the result to a measurable outcome.
