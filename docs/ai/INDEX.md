# Knowledge index

The router. One line per knowledge file: what it holds, when to read it.
tools/gate.mjs fails if a knowledge file exists that isn't listed here.

## Always loaded

- CLAUDE.md — identity, stack, commands, routing, estimation. 80 lines maximum (gate-enforced).

## Rules (read when the situation matches)

- rules/PRINCIPLES.md — precedence, how to work, latent-vs-deterministic, measurable outcomes, lazy-dev ladder. Read on any scope or architecture decision.
- rules/CODING.md — services-first layout, tech-choice ladder, local-Claude-only LLM rule, SOLID/DRY. Read when writing or reviewing code.
- rules/TESTING.md — two test lanes, tests+evals every change, skeletons. Read when writing tests or evals.
- rules/WORKFLOW.md — tickets, deferred-work-as-issue, completion statuses, confusion protocol, background jobs. Read when working a ticket or finishing a task.
- rules/DELEGATION.md — model tiers, effort defaults, briefing rule, escalation, orchestration patterns. Read before spawning subagents.
- rules/AUTONOMY.md — act vs ask, park-don't-stall. Read when unsure whether to proceed.
- rules/SAFETY.md — secrets, destructive ops, production gates. Read before destructive ops or commits.
- rules/VOICE.md — documentation tone. Read when writing anything a user reads.
- rules/TOKEN-ECONOMY.md — session hygiene, cache stability, retrieval, bounded outputs. Read when context grows.

## Project knowledge

- AGENTS.md (root) — pointer for non-Claude tools (never auto-loaded).
- DESIGN.md (root) — design system. Read before any visual decision.
- docs/STRATEGY.md — vision, users, beachhead, 90-day outcomes, kill criteria. Read before strategy or prioritization calls.
- architecture/ — one map per subsystem, file:line citations. Read for codebase questions (after /graphify).
- services/README.md — service layout contract.
- tools/README.md — deterministic-script contract; gate.mjs lives here.
- docs/user-guide/ — end-user docs, updated in the same PR as UX changes.

## AI process (docs/ai/)

- docs/ai/SETUP.md — machine setup: prerequisites, bootstrap scripts, env notes.
- docs/ai/BOOTSTRAP.md — first-session interview (exists only until initialized).
- docs/ai/SKILLS.md — full catalog of skills, plugins, agents by phase.
- docs/ai/BUSINESS-RULES.md — non-obvious product rules (pricing, permissions, compliance). Read before touching billing, auth, or data-handling code.
- docs/ai/TICKET-TEMPLATE.md — the six lint-enforced ticket sections + example.
- docs/ai/HEALTH-METRICS.md — metrics with sources, thresholds, actions.
- docs/ai/LEARNINGS.md — curated /learn export.
- docs/ai/plans/ — accumulated plan files, reviews append.
- .claude/credentials.md — test logins for /qa and /browse (gitignored; copy .claude/credentials.example.md). Test/dev accounts only.
