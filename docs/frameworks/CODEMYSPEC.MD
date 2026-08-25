# CodeMySpec skills

All [Code-My-Spec/plugins](https://github.com/Code-My-Spec/plugins) skills (https://codemyspec.com/), sorted by the same sections as Z-TOP-SKILLS.md. Upstream 2b6a897 (2026-08-21) checked 2026-08-24.

Spec-driven development for Phoenix/Elixir: the marketplace ships two Claude Code plugins — `codemyspec` (8 skills spanning 12 command modes, 5 agents, 7 hook events, 3 MCP servers) and `market-my-spec` (4 marketing skills) — plus Codex and Google Antigravity ports of codemyspec. The runtime is a remote-server model: a local `cms` background service (localhost:4003) is the single MCP gateway and hooks endpoint, with story/PM writes proxied upstream to the codemyspec.com REST API (local DB is a synced read cache) and a cloud MCP at codemyspec.com/mcp/harness; auth is OAuth via `cms login` / `/codemyspec:init auth`. The workflow turns user stories into working Phoenix code: design architecture, write specs, generate tests, then implement, with a requirement graph auto-sequencing spec -> test -> code -> review -> BDD.

# Product Process

## Pack Setup

| Execution | What it does |
| --- | --- |
| `/codemyspec:init` | Project setup, authentication, and sync — verify Phoenix prerequisites, initialize the `.code_my_spec/` docs structure, log in (`auth`), or refresh stale state |

## Starting Direction / Human Helper

| Execution | What it does |
| --- | --- |
| `/codemyspec:product interview` | Guided story interview — define what to build by interviewing the user into well-formed user stories |

## PRD

| Execution | What it does |
| --- | --- |
| `/codemyspec:product review` | Review story quality and refine requirements before they enter the development pipeline |

## Marketing

| Execution | What it does |
| --- | --- |
| `/market-my-spec:marketing-strategy` | Guided 9-step strategy flow (steps 0-8): brand foundations, user interview, persona and competitive research agents, positioning, messaging, channels, 90-day plan |
| `/market-my-spec:daily-plan` | Pick today's 1-3 marketing activities from the strategy; runs weekly review, manages the activity roster, scaffolds new activities as project-local skills |
| `/market-my-spec:marketing-stack` | Install marketing infrastructure per channel — MCPs, API credentials, recipes (Reddit, Discord, Slack, Wix, Ghost, WordPress, Stripe, HubSpot, Postiz, Meta Ads, socials, Resend) |
| `/market-my-spec:marketing-library` | Curate playbook plugins (marketingskills, claude-seo, anthropic-marketing, digital-marketing-pro); install, audit usage, and align the library with strategy |

# Development Process

## Designer Implementation

| Execution | What it does |
| --- | --- |
| `/codemyspec:design ui` | Interactive design system builder with DaisyUI, theme switcher, and live preview; output lands in `.code_my_spec/design/design_system.html` |

# Code Architecture

| Execution | What it does |
| --- | --- |
| `/codemyspec:design architecture` | Guided session mapping user stories to bounded contexts and components; validates the dependency graph before code is written |
| `/codemyspec:design strategy` | Technology strategy session — record technology decisions and rationale into `.code_my_spec/architecture/decisions/` |

# Dev Tooling

## Requirements

| Execution | What it does |
| --- | --- |
| `/codemyspec:product three-amigos <story_id>` | Run a Three Amigos / Example Mapping session on a story to pin down rules, examples, and questions before implementation |

## Developing

| Execution | What it does |
| --- | --- |
| `/codemyspec:develop context` | Full lifecycle for a context: spec -> test -> code with dependency ordering (schema -> repo -> service -> context), orchestrated via subagents |
| `/codemyspec:develop liveview` | Full lifecycle for a LiveView: spec -> test -> code, orchestrated via subagents |
| `/codemyspec:develop refactor <ModuleName>` | Interactive refactoring: review code, discuss changes, then update spec -> tests -> implementation in order |
| `/codemyspec:implement start` | Autonomous implementation loop — the agent walks the requirement graph (spec -> test -> code -> review -> BDD) until all stories pass |
| `/codemyspec:implement stop` | Disable the autonomous implementation loop |
| `/codemyspec:next` | Find and start the next requirement task in one gesture; the single onboarding instruction after each completed task |
| `/codemyspec:sync` | Sync project components and regenerate architecture views after git pulls, before design sessions, or when views feel stale |

## Testing

| Execution | What it does |
| --- | --- |
| `/codemyspec:qa` | Full-app QA sweep using the vibium browser MCP, with evidence-backed results written to `.code_my_spec/qa/` |
| `/codemyspec:qa story <id>` | QA a single user story: write a brief, execute tests, submit results with evidence |
| `/codemyspec:qa integrations` | Integration test planning across component boundaries |
| `/codemyspec:qa triage [severity]` | Triage known issues in `.code_my_spec/issues/` by severity |
| `/codemyspec:qa fix [severity]` | Fix triaged issues, optionally filtered by severity |

# Agents

| Name | What it does |
| --- | --- |
| `spec-writer` | Creates component and context specifications from prompt files (Sonnet) |
| `test-writer` | Writes tests for components following spec file test assertions (Sonnet) |
| `code-writer` | Implements components following spec files and passing tests; has vibium browser tools and issue-management MCP tools (Sonnet) |
| `bdd-spec-writer` | Writes BDD specification files (Spex, Given/When/Then via `mix spex`) for user stories (Sonnet) |
| `qa` | Tests a single user story: writes a brief, executes browser tests via vibium, submits results with evidence (Sonnet) |

# Hooks

| Name | What it does |
| --- | --- |
| `SessionStart` | POSTs session payload to the local cms server (`/api/hooks/session-start`) for harness tracking |
| `PreToolUse` | POSTs every tool call to `/api/hooks/pre-tool-use`; a second matcher forwards `AskUserQuestion` events to `/api/hooks/ask-user-question` |
| `PostToolUse` | POSTs tool results to `/api/hooks/post-tool-use` — real-time feedback on file writes and test runs |
| `Stop` | POSTs to `/api/hooks/stop` when the main agent finishes |
| `SubagentStart` / `SubagentStop` | POSTs subagent lifecycle events for per-agent task tracking |
| `PermissionRequest` | Runs the bundled `.claude-plugin/bin/approve` script to auto-approve permitted actions |

# Other offerings

| Name | What it does |
| --- | --- |
| `cms` server | Local background OS service (Homebrew tap on macOS, MSI/Shawl service on Windows) on localhost:4003 hosting the MCP tools, architecture graph, Agent Task API, and hooks API; `cms-mcp-relay` on PATH |
| MCP servers | `local` (http://localhost:4003/mcp, single gateway, `X-Harness-Id` header), `cms_cloud` (https://codemyspec.com/mcp/harness), `vibium` (stdio browser automation for QA) |
| `.code_my_spec/` structure | Managed project dirs: spec/, rules/, architecture/, status/, knowledge/, plugin_knowledge/ (symlinked framework guides for LiveView, HEEx, Tailwind/DaisyUI, BDD), design/, issues/, qa/ |
| Knowledge base | Framework guides agents read during generation: Phoenix conventions, LiveView patterns/forms/testing, HEEx syntax, Tailwind/DaisyUI, Spex BDD |
| Spex | CodeMySpec's BDD test framework for Elixir (`mix spex`), used by bdd-spec-writer and QA agents (separate repo: Code-My-Spec/spex) |
| Codex port | `codex/codemyspec/` — same 8 skills for OpenAI Codex; repo doubles as a Codex plugin marketplace (`codex plugin marketplace add Code-My-Spec/plugins`) |
| Antigravity port | `antigravity/codemyspec/` — same skills plus agents, rules, and MCP config for Google Antigravity (`install-antigravity.sh`) |
| Hosted platform | codemyspec.com tiers: Build free (BYO AI API keys, no markup), Operate & Grow $100/mo per user (shared inbox, content engine, ads, conversion tracking), Built with you from $500 |
