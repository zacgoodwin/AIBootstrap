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
- docs/DESIGN.md — visual decisions · docs/STRATEGY.md — product strategy
- tools/ — repo scripts · .claude/ — agents, skills, hooks, settings
- README.md — skill catalog by workflow stage; per-source install files in
  docs/frameworks/ · docs/agents/ — per-pack agent rosters +
  docs/agents/IN-REPO-AGENTS.md (machine-wide subagent inventory)

## Commands

- Gate tests (free, deterministic, <2s, CI + pre-commit once wired): `node tools/gate.mjs` (doc paths + hook self-checks) + `TODO(bootstrap)` (project tests)
- Ship a branch: `/stack-ship` (roborev gate -> squash-submit PR -> adversarial review; see docs/rules/WORKFLOW.md Shipping)
- Evals (paid, periodic, before ship + nightly): `TODO(bootstrap)`

## Non-negotiables

- Every change ships with gate tests, plus evals when latent behavior changed.
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
| Ship / deploy | /ship, /land-and-deploy |
| Security | /cso |
| Codebase questions | /graphify, then docs/architecture/ |
| Learnings | /learn (export to docs/LEARNINGS.md) |
| Plans archive | docs/plans/ |
| Marketing / launch / sales / support / product / data | matching agent in .claude/agents/ |
| Full skill catalog | README.md |

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
- rtk meta commands, output filtering -> docs/rules/RTK.md

## Estimation

TODO(bootstrap): per-ticket Model + Model Effort defaults for this project.
Until then, the docs/rules/DELEGATION.md table governs.

## Landmines

Cross-cutting gotchas only, one line each. A mistake that belongs to a
docs/rules/ domain goes in that file instead. None yet.

# Compact instructions

When compacting, preserve test output, code changes, and any open
TODO(bootstrap) markers.

<!-- rtk-instructions v2 -->
Always prefix shell commands with `rtk`, even inside `&&` chains: it filters
output when it has a filter, passes through when it doesn't. Ref: docs/rules/RTK.md.
<!-- /rtk-instructions -->
