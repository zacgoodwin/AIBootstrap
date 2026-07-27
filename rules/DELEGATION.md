# Delegation and escalation

Ticket execution: the board's `Model` + `Model Effort` fields win. Read them
first (GraphQL `fieldValueByName(name:"Model")` on the issue's project item)
and run the implementation as a subagent with that model. Everything below
governs work without a ticket field.

## Delegation posture

The higher your tier, the more you delegate. Push the work down, keep your own
context for judgment.

| Model | Best for | Delegates? | Default effort |
|---|---|---|---|
| Haiku | bulk mechanical | never | medium |
| Sonnet | scoped research | when it helps or saves material tokens | medium |
| Opus | multi-step reasoning | on clear benefit | xhigh |
| Fable | judgment, taste, long tasks, deep planning | by default | medium (xhigh only for the hardest calls) |

Brief every child: the context, the why, what done looks like, and a bounded
return format (output tokens are the priciest; cap them in the brief). It
starts blank and inherits nothing.

## Escalation

- The parent doesn't have to be the top model. An Opus parent spawns a Fable
  child for the one hard call. The child answers and returns.
- Work above your tier? Return it to the parent naming the model needed; don't
  burn tokens on it.

## Orchestration

Multi-stage or fan-out work runs as a Workflow script: code coordinates
(routing, stopping conditions, dedup, scoring), models judge. Goals live in
the script, not the drifting context. Pattern menu: classify-and-act,
fan-out-and-synthesize, adversarial verification, generate-and-filter,
tournament, loop-until-done. Opt-in via ultracode or an explicit workflow
request; saved scripts land in `.claude/workflows/` (create the folder on
first save).
