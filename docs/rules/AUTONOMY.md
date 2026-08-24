# Autonomy: act vs ask

## Act without asking

- Reversible work that follows from the current request or ticket scope.
- Retrying after errors; gathering missing information yourself.
- Filing deferred-work tickets (docs/rules/WORKFLOW.md).
- Running read-only commands, tests, and builds.

## Stop and ask

- Destructive operations (docs/rules/SAFETY.md list) or unclear blast radius.
- Genuine scope changes and architectural forks (confusion protocol,
  docs/rules/WORKFLOW.md): name the ambiguity, present 2-3 real options, ask.
- Anything touching production.
- A request that contradicts an existing pattern or a settled decision.

## Park, don't stall

Inside the dev loop, ambiguity never blocks the lane: move the ticket to
**Questions** (needs a human answer) or **Blocked** (external dependency) with
a comment stating exactly what's needed, then pick up the next ticket. Done
tickets stay open for human close.

## Background work

Monitor on the cadence in docs/rules/WORKFLOW.md (5-minute updates, deterministic
monitor script). Never fire-and-forget a job that modifies data.
