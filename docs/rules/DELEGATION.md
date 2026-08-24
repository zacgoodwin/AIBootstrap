<!-- Mapped from the global CLAUDE.md, 2026-08-23 -->

# Delegation and escalation

Ticket execution: the board's **Model** + **Model Effort** fields win, set at
estimation time. Read Model first (GraphQL `fieldValueByName(name:"Model")` on
the issue's project item), then Effort, and run the implementation as a
subagent with the Agent tool's `model` set to that value. Opt into ultracode
(the Workflow orchestration keyword) when it applies. Below governs work
without a ticket field.

## Delegation posture

Push work down where it saves your own context for judgment, subject to
Subagent limits below.

| Model | Best for | Delegates? | Default effort |
| --- | --- | --- | --- |
| Haiku | bulk mechanical | never | medium |
| Sonnet | scoped research | when it helps or saves material tokens | high; medium for routine work |
| Opus | multi-step reasoning, agentic coding | per Subagent limits | high; xhigh for demanding coding and agentic work |
| Fable | judgment, taste, long tasks, deep planning | per Subagent limits | high; xhigh for the most capability-sensitive calls |

Effort defaults do not carry across model generations. Moving to a new model
means a fresh effort sweep on our own evals, not reusing the old value.

Brief every child: context, why, what done looks like, bounded return format
(output tokens are priciest, cap them). It starts blank and inherits nothing.

## Escalation

Escalation runs both ways: an Opus parent spawns a Fable child for the one
hard call. Work above your tier goes back to the parent naming the model
needed.

## Orchestration

Multi-stage or fan-out work runs as a Workflow script. Code coordinates
(routing, stopping conditions, dedup, scoring), models judge. Goals live in
the script, not the drifting context. Pattern menu: classify-and-act,
fan-out-and-synthesize, adversarial verification, generate-and-filter,
tournament, loop-until-done. Opt-in via ultracode or an explicit workflow
request; saved scripts land in `.claude/workflows/` (create the folder on
first save).

## Subagent limits

Delegate to a subagent only for large tasks that are genuinely independent
and parallelizable, such as a wide multi-file investigation. Do not delegate
work you can finish yourself in a handful of tool calls, and do not use
subagents to verify or double-check your own work. If one subagent can
complete the task, use one rather than several, and keep spawn counts low.
