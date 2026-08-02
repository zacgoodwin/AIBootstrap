# Skill catalog

Packs (gstack, zstack) are host-installed by bootstrap; plugins install on
repo trust; project agents and skills live in .claude/. CLAUDE.md `## Routing`
covers the common paths.

## Pack skills (gstack, zstack)

The live skill listing injected into every session is the source of truth for
pack skills and their descriptions; it is always current. Don't duplicate it
here: a hand-maintained copy drifts on every pack update.

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

Review panel (the 7 voices /prd-review-panel spawns in parallel):

- engineer-reviewer — feasibility, dependencies, failure modes, estimate realism
- designer-reviewer — UX, DESIGN.md fit, accessibility, the forgotten states
- executive-reviewer — strategic fit, impact math, opportunity cost
- legal-advisor — privacy, compliance, IP, ToS exposure
- uxr-analyst — evidence behind the plan, validation gaps
- skeptic — devil's advocate: problem, solution, assumptions, scope creep
- customer-voice — plain-language customer read of the feature

## Project skills (.claude/skills/)

Auto-discovered from this repo, no install step. Product-thinking skills; the
engineering loop lives in the packs.

- write-prod-strategy — strategy doc on a 7-component frame
- define-north-star — pick and pressure-test the North Star metric
- feature-metrics — success metrics via STEDII
- activation-analysis — Setup → Aha → Habit, find the drop
- retention-analysis — cohorts, churn drivers
- expansion-strategy — upsell, cross-sell, account growth
- competitor-analysis — deep competitive read + ongoing monitoring
- user-research-synthesis — interviews into decisions
- prd-review-panel — 7 reviewer agents on one PRD, in parallel
- decision-doc — log a decision with its alternatives and trade-offs
- launch-checklist — launch planning
- graphify — knowledge-graph queries over the codebase (vendored; see
  .claude/skills/README.md for why)
