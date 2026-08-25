<!-- Mapped from the global CLAUDE.md, 2026-08-23 -->

# Delegation and escalation

## Ticket execution

TODO(bootstrap): confirm for the chosen tracker (docs/SETUP.md step 7).
The default below assumes a GitHub Projects board; rewrite the field
lookup for another tracker, or delete this section when there is no
tracker — the table below then governs everything.

The board's **Model** + **Model Effort** fields win, set at estimation
time. Read Model first (GraphQL `fieldValueByName(name:"Model")` on the
issue's project item), then Effort, and run the implementation as a
subagent with the Agent tool's `model` set to that value. Opt into
ultracode (the Workflow orchestration keyword) when it applies. Below
governs work without a ticket field.

## Delegation posture

Push work down where it saves your own context for judgment, subject to
Subagent limits below.

Before spawning a generic subagent, check .claude/agents/ and
docs/agents/IN-REPO-AGENTS.md for a specialized agent that fits. If none
fits, check the other pack rosters in docs/agents/ — a fitting agent
there gets installed from its skill pack (the matching docs/frameworks/
file names the upstream repo; not every pack publishes a one-line
installer, so some need a clone-and-copy).

TODO(bootstrap): tune the defaults below to the chosen stack tier and
subscription (docs/SETUP.md step 7). Cheapest tiers bias Haiku/Sonnet;
cost-no-object runs Fable freely; strike models the plan lacks.

| Model | Best for | Delegates? | Default effort |
| --- | --- | --- | --- |
| Haiku | bulk mechanical | never | medium |
| Sonnet | scoped research | when it helps or saves material tokens | high; medium for routine work |
| Opus | multi-step reasoning, agentic coding | per Subagent limits | high; xhigh for demanding coding and agentic work |
| Fable | judgment, taste, long tasks, deep planning | per Subagent limits | high; xhigh for the most capability-sensitive calls |

Effort defaults do not carry across model generations. Moving to a new
model means a fresh effort sweep on our own evals, not reusing the old
value.

Brief every child: context, why, what done looks like, bounded return
format (output tokens are priciest, cap them). It starts blank and
inherits nothing.

## Escalation

Escalation runs both ways: an Opus parent spawns a Fable child for the
one hard call. Work above your tier goes back to the parent naming the
model needed.

## Orchestration

Multi-stage or fan-out work runs as a Workflow script. Code coordinates
(routing, stopping conditions, dedup, scoring), models judge. Goals live
in the script, not the drifting context. Pattern menu: classify-and-act,
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
