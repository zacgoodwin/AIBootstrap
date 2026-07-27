# TODO(bootstrap): Project Name

TODO(bootstrap): one-line description of what this product does and for whom.

**If `docs/ai/BOOTSTRAP.md` exists, this project is uninitialized: read it and
run the interview with the user before any other work.**

## Stack

TODO(bootstrap): language, framework, package manager, run command — with
exact versions (e.g. "Next.js 15 App Router", not "Next.js").

## Map

services/ code · architecture/ maps · tools/ scripts
rules/ behavior · docs/ strategy+user-guide+ai · .claude/ agents+skills+hooks

## Commands

- Gate tests (free, deterministic, <2s, CI + pre-commit once wired): `TODO(bootstrap)`
- Evals (paid, periodic, before ship + nightly): `TODO(bootstrap)`

## Non-negotiables

- Every change ships with gate tests, plus evals when latent behavior changed.
- Never merge to main with the gate red.
- End every task with a status: DONE / DONE_WITH_CONCERNS / BLOCKED / NEEDS_CONTEXT.

## Routing

| Need | Use |
|---|---|
| Spec / plan work | /spec, /autoplan, /z-plan |
| Build loop | /z-loop |
| Design decision | Read DESIGN.md first; /design-consultation, /design-review |
| Strategy question | Read docs/STRATEGY.md; /office-hours, /plan-ceo-review |
| Eng review | /plan-eng-review, /review |
| Bugs / errors | /investigate |
| QA site behavior | /qa, /qa-only |
| Ship / deploy | /ship, /land-and-deploy |
| Security | /cso |
| Codebase questions | /graphify, then architecture/ |
| Learnings | /learn (export to docs/ai/LEARNINGS.md) |
| Plans archive | docs/ai/plans/ |
| Marketing / launch / sales / support / product / data | matching agent in .claude/agents/ |
| Full skill catalog | docs/ai/SKILLS.md |

## Rules (read on demand)

Full knowledge index: docs/ai/INDEX.md. Load the file when the situation matches:

- Writing or reviewing code -> rules/CODING.md
- Writing tests or evals -> rules/TESTING.md
- Working a ticket, finishing a task, deferring work -> rules/WORKFLOW.md
- Any scope or architecture decision -> rules/PRINCIPLES.md
- Spawning subagents or picking models -> rules/DELEGATION.md
- Context growing, session long -> rules/TOKEN-ECONOMY.md
- Destructive ops, commits, secrets -> rules/SAFETY.md
- Writing documentation -> rules/VOICE.md
- Unsure whether to act or ask -> rules/AUTONOMY.md

## Estimation

TODO(bootstrap): per-ticket Model + Model Effort defaults for this project.
Until then, the rules/DELEGATION.md table governs.

## Landmines

Cross-cutting gotchas only, one line each. A mistake that belongs to a rules/
domain goes in that file instead. None yet.

# Compact instructions

When compacting, preserve test output, code changes, and any open
TODO(bootstrap) markers.
