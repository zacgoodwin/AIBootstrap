# Autonomy: act vs ask

## Act without asking

- Reversible work that follows from the current request or ticket scope.
- Retrying after errors; gathering missing information yourself.
- Filing deferred-work tickets (docs/rules/WORKFLOW.md).
- Running read-only commands, tests, and builds.

## Stop and ask

- Destructive operations (docs/rules/SAFETY.md list) or unclear blast radius.
- Genuine scope changes and architectural forks (confusion protocol, docs/rules/WORKFLOW.md): name the ambiguity, present 2-3 real options, ask.
- Anything touching production.
- A request that contradicts an existing pattern or a settled decision.


## Background work

- Monitor on the cadence in docs/rules/WORKFLOW.md (5-minute updates, deterministic monitor script). Never fire-and-forget a job that modifies data.
- When fanning out research subagents, write each agent's output file as soon as that agent returns — do not batch writes until all agents finish. If an agent is interrupted or the API errors, report exactly which items landed and which are outstanding.
- Keep a `progress.md` checklist of completed vs. pending items so a `resume` picks up cleanly.