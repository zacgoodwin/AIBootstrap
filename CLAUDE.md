# TODO(bootstrap): Project Name

TODO(bootstrap): one-line description of what this product does and for whom.

Precedence when rules conflict: Safety first (docs/rules/SAFETY.md), then How
to work (scope: finish everything asked, with tests and docs), then the lazy
ladder (style: the smallest correct diff that covers that scope). The ladder
limits code volume, never scope. Details: docs/rules/PRINCIPLES.md.

**First run: if TODO(bootstrap) markers remain in this file, read
docs/SETUP.md and complete it with the user before any other work.**

## Map

- services/ — product code, one service per directory (docs/rules/SERVICES.md)
- docs/rules/ — how to work here; load per the table below
- docs/plans/ — plans archive · docs/architecture/ — subsystem maps + docs/architecture/STACK.MD (stack, exact versions)
- docs/process/ — lifecycle + tool-stack reports (PROCESS*.md, STACK-*.md), the basis for setup's recommendations
- docs/DESIGN.md — visual decisions · docs/STRATEGY.md — product strategy · docs/HEALTH-METRICS.md — metric definitions and thresholds
- docs/user-guide/ — end-user docs
- tools/ — repo scripts · .claude/ — agents, skills, hooks, settings
- docs/ai/ — machine-written records; baseline-contradictions.json is the known-drift baseline the docs watchdog tracks against
- README.md — front door: quickstart, repo map, pack index
- docs/frameworks/ — skill catalog; docs/frameworks/Z-TOP-SKILLS.md is the
  cross-pack pick list by workflow stage, the rest are per-pack inventories
- docs/agents/ — per-pack agent rosters + docs/agents/IN-REPO-AGENTS.md
  (machine-wide roster; 14 of its rows ship here)

## Commands

- Gate tests (free, deterministic, <2s, CI + pre-commit once wired): `node tools/gate.mjs` (kit checks: doc paths, credentials ignore line, upstream provenance, hook and tool self-checks; the runner is kit infrastructure, not a stack choice) + `TODO(bootstrap)` (project tests, any language, chained with `&&`)
- What moved upstream (network, so not in the gate): `node tools/skills-update.mjs check`; act on it with `/skills-update`
- Docs drift (free, deterministic): `node tools/docs-check.mjs` finds dead links, wrong counts and cross-file disagreement; `--fix` repairs the mechanical ones; `--check` is the CI gate and fails only on a new P1 SEMANTIC finding. Regenerate the baseline with `--baseline`.
- Ship a branch: `/stack-ship` (roborev gate -> squash-submit PR -> adversarial review; see docs/rules/WORKFLOW.md Shipping)
- Evals (paid, periodic, before ship + nightly): `TODO(bootstrap)`

## Non-negotiables

- Every change ships with gate tests, plus evals when latent behavior changed.
  Trivial one-liners and doc-only changes need no new test; every commit still
  passes the standing gate.
- Never merge to main with the gate red.
- End every task with a status: DONE / DONE_WITH_CONCERNS / BLOCKED / NEEDS_CONTEXT.
- Read the file before making claims about it. Never speculate about code you
  have not opened.

## Routing

| Need | Use |
|---|---|
| Design decision | Read docs/DESIGN.md first; /design-consultation, /design-review |
| Strategy question | Read docs/STRATEGY.md; /office-hours, /plan-ceo-review |
| Eng review | /plan-eng-review, /review |
| Bugs / errors | /investigate |
| QA site behavior | /qa, /qa-only |
| Ship a branch | /stack-ship (see Commands); /land-and-deploy for the deploy step |
| Security | /cso |
| Codebase questions | /graphify, then docs/architecture/ |
| Learnings | /learn (export to docs/LEARNINGS.md) |
| Plans archive | docs/plans/ |
| Marketing / launch / sales / support / product / data | matching agent in .claude/agents/ |
| Cataloging from a source | docs/rules/WORKFLOW.md Catalog and doc generation |
| Skills or catalogs behind upstream | /skills-update (provenance: tools/sources.json) |
| Full skill catalog | docs/frameworks/Z-TOP-SKILLS.md |

Skills above come from the packs docs/SETUP.md installs; until a pack is
installed, its rows are inert.

## Rules (read on demand)

Load the file when the situation matches:

- Any scope or architecture decision -> docs/rules/PRINCIPLES.md
- Writing or reviewing code -> docs/rules/CODING.md
- Writing tests or evals -> docs/rules/TESTING.md
- Working a ticket, finishing a task, deferring work -> docs/rules/WORKFLOW.md
- Service layout and contracts -> docs/rules/SERVICES.md
- Spawning subagents or picking models -> docs/rules/DELEGATION.md
- Unsure whether to act or ask -> docs/rules/AUTONOMY.md
- Destructive ops, commits, secrets -> docs/rules/SAFETY.md
- Writing prose, docs, or talking to the user -> docs/rules/VOICE.md

## Estimation

TODO(bootstrap): set at docs/SETUP.md step 7. Tracker board with Model +
Model Effort fields -> per-ticket fields win (docs/rules/DELEGATION.md
Ticket execution). No board -> the docs/rules/DELEGATION.md table governs.

## Landmines

Cross-cutting gotchas only, one line each. A mistake that belongs to a
docs/rules/ domain goes in that file instead. None yet.

# Compact instructions

When compacting, preserve test output, code changes, and any open
TODO(bootstrap) markers.
