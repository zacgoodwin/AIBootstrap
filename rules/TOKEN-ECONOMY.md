# Token economy

The context window is the only control surface over the model. Load the spec,
the contract, the relevant files, concrete examples; leave the noise out. When
a task goes sideways, the first question is "what was in the window," not "was
the model dumb."

## Cache stability

Always-loaded files (CLAUDE.md, .claude/settings.json) stay stable: every edit
busts the prompt-cache prefix for all later calls. Volatile state (status,
active work, running notes) lives in on-demand files only. CLAUDE.md never
exceeds 80 lines (the gate enforces it); any addition evicts something.

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

## Memory maintenance

- caveman-compress memory files (CLAUDE.md excluded) when they grow.
- /context-save before breaks; /context-restore to resume.
