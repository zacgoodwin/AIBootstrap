# CodeMySpec agents

All [Code-My-Spec/plugins](https://github.com/Code-My-Spec/plugins) agents,
sorted by the same sections as [IN-REPO-AGENTS.md](IN-REPO-AGENTS.md). 5 agents. Upstream
2b6a897 (2026-08-21) checked 2026-08-24, unchanged. Skills for the same pack:
docs/frameworks/CODEMYSPEC.MD.

The Antigravity port mirrors the same five under `antigravity/codemyspec/`, so
upstream carries ten agent files for five distinct agents.

The full Phoenix/Elixir lifecycle as five agents. They are spawned by
`/codemyspec:develop context`, `/codemyspec:develop liveview`, and
`/codemyspec:implement start`, which walk the requirement graph
spec -> test -> code -> review -> BDD. All five are pinned to Sonnet upstream.

## Build, Test & QA

Listed in pipeline order.

| Execution | What it does |
|---|---|
| Agent subagent_type=`spec-writer` | Creates component and context specifications from prompt files. (Sonnet) |
| Agent subagent_type=`test-writer` | Writes tests for components following the spec file's test assertions. (Sonnet) |
| Agent subagent_type=`code-writer` | Implements components following spec files and passing tests; carries vibium browser tools and issue-management MCP tools. (Sonnet) |
| Agent subagent_type=`bdd-spec-writer` | Writes BDD specification files (Spex, Given/When/Then via `mix spex`) for user stories. (Sonnet) |
| Agent subagent_type=`qa` | Tests a single user story: writes a brief, executes browser tests via vibium, submits results with evidence. (Sonnet) |
