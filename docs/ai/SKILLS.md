# Skill catalog

Everything invocable, grouped by phase. Packs (gstack, zstack) are
host-installed by bootstrap; plugins install on repo trust; project agents and
skills live in .claude/. CLAUDE.md `## Routing` covers the common paths; this
is the full menu.

## Shape the work

- /office-hours — product brainstorming, YC-style
- /spec — vague intent into a precise, executable spec
- /plan-ceo-review — founder-mode plan review (strategy, scope)
- /plan-eng-review — eng-manager plan review (architecture)
- /plan-design-review — designer plan review
- /plan-devex-review — developer-experience plan review
- /autoplan — full review pipeline (CEO + design + eng + DX, auto-decisions)
- /z-plan — plan/spec file into board-ready GitHub tickets
- /z-setup — one-time board creation (statuses, Model/Effort/Estimate fields)

## Build

- /z-loop — drain the Ready queue: builder, QA, reviewer, merge lanes
- /z-status — read-only board dashboard
- /investigate — systematic debugging, root cause first
- /graphify — knowledge graph of the codebase (vendored in .claude/skills/)
- /codex — OpenAI Codex CLI wrapper (second opinion)
- ultracode / Workflow scripts — deterministic multi-agent orchestration (rules/DELEGATION.md)

## Verify

- /qa — QA test the app and fix what's found
- /qa-only — report-only QA
- /review — pre-landing PR review
- /design-review — visual polish QA against DESIGN.md
- /benchmark — performance regression detection
- /cso — security review
- /health — code quality dashboard

## Ship

- /ship — tests, review, VERSION bump, CHANGELOG, PR
- /land-and-deploy — land and deploy workflow
- /setup-deploy — one-time deploy configuration (writes CLAUDE.md section)
- /canary — post-deploy monitoring
- /document-release — post-ship user-guide updates
- /document-generate — generate missing docs from scratch

## Design

- /design-consultation — full design-system proposal (fills DESIGN.md)
- /design-shotgun — multiple design variants, comparison board
- /design-html — production-quality HTML/CSS finalization
- /diagram — English description into diagram triplet

## Session and knowledge

- /context-save, /context-restore — save/resume working context
- /learn — project learnings (export to docs/ai/LEARNINGS.md)
- /skillify — codify a repeated flow into a permanent skill
- /retro — weekly engineering retrospective
- /browse, /scrape — headless browser for QA and data pulls
- /freeze, /unfreeze, /guard, /careful — edit-scope and safety guards

## Plugins (install on repo trust)

- ponytail — lazy-senior-dev mode: smallest correct diff (+ review/audit/debt)
- caveman — terse output mode (+ caveman-compress for memory files, cavecrew compressed subagents)
- claude-context-optimizer — token usage tracking, wasted-context reports

## Project agents (.claude/agents/)

- marketing — positioning, copy, channels
- launch — go/no-go checklists, GTM sequencing
- product — fuzzy idea into lint-clean tickets
- sales — pipeline, pricing experiments, capacity math
- support — help docs, incident comms, feedback triage into Backlog
- data — metric design, experiment analysis, owns HEALTH-METRICS.md
