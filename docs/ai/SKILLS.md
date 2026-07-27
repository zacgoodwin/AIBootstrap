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
