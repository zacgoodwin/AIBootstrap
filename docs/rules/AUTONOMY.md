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

## Plans before edits

Present a plan first and wait for approval when a change is large on any
axis: more than ~5 files, more than ~200 lines changed, or high impact
regardless of size (a contract or schema, a shared config or hook, a rule
file agents load, anything hard to reverse). State explicitly what will be
copied verbatim vs. rewritten vs. deleted, since "genericizing" or
"deduplicating" content the user asked to be preserved is a recurring
wrong turn.

## Background work

- Monitor on the cadence in docs/rules/WORKFLOW.md (5-minute updates, deterministic monitor script). Never fire-and-forget a job that modifies data.
- When fanning out research subagents, write each agent's output file as soon as that agent returns — do not batch writes until all agents finish. If an agent is interrupted or the API errors, report exactly which items landed and which are outstanding.
- Keep a `progress.md` checklist of completed vs. pending items so a `resume` picks up cleanly.