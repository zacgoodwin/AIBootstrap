# Token economy

The context window is the only control surface over the model. Load the spec,
the contract, the relevant files, concrete examples; leave the noise out. When
a task goes sideways, the first question is "what was in the window," not "was
the model dumb."

## Session hygiene

- `/clear` between unrelated tasks (`/rename` first so `/resume` can find it).
  Stale context taxes every subsequent message.
- `/context` and `/usage` to audit what's eating space; statusline can show
  context usage continuously.
- Match `/effort` to the task; thinking tokens are output tokens.
- Plan mode before complex work; course-correct early; give verification
  targets in prompts.
- Specific prompts over vague: "add validation to auth.ts:login", not
  "improve the codebase".

## Cache stability

Always-loaded files (CLAUDE.md, .claude/settings.json) stay stable: every edit
busts the prompt-cache prefix for all later calls. Volatile state (status,
active work, running notes) lives in on-demand files only. CLAUDE.md stays
under 80 lines; any addition evicts something.

## Tools and retrieval

- Prefer CLI (`gh`, `aws`, cloud CLIs) over MCP servers; disable unused MCP
  servers via `/mcp`.
- Paste the slice, not the file: reference file:line, read targeted ranges.
- /graphify for codebase questions and gbrain semantic search over raw Grep
  sweeps on large repos.
- Code-intelligence plugin for the project language: one go-to-definition
  replaces a grep plus multiple candidate reads.

## Delegation and output

- Delegate verbose ops (test runs, log processing, doc fetches) to subagents;
  cavecrew agents return compressed results.
- Bounded outputs: briefs and prompts state the return shape and cap ("5
  bullets max", "table only"). Output tokens cost multiples of input.
- Compact serialization for row-heavy data between agents/stages: schema line
  once + value rows, never repeated JSON keys per row (30-60% on tabular
  payloads).

## Memory maintenance

- caveman-compress memory files (CLAUDE.md excluded) when they grow.
- /context-save before breaks; /recap on return.
