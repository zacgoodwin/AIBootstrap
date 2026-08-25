# Beagle skills

All [existential-birds/beagle](https://github.com/existential-birds/beagle) skills, sorted by the same sections as Z-TOP-SKILLS.md. Upstream commit d1a7489 (2026-08-09, post-v4.4.0) checked 2026-08-23. 11 plugins, 139 unique skills (145 shipped; `review-verification-protocol` is bundled into 7 plugins). No hooks, agents, commands, or MCP servers.

# Product Process

## Starting Direction / Human Helper

| Execution | What it does |
|---|---|
| `/brainstorm-beagle` | Shapes a fuzzy idea into a concrete project spec before planning or building |

## PRD

| Execution | What it does |
|---|---|
| `/prfaq-beagle` | Pressure-tests a product, internal-tool, or OSS concept against Amazon's Working Backwards PRFAQ gauntlet before committing to a spec |

## Research

| Execution | What it does |
|---|---|
| `/web-research` | Gathers cited, multi-angle web evidence on a specific question |

## Business

| Execution | What it does |
|---|---|
| `/strategy-interview` | Builds a strategy via guided conversation for a company, product, team, career, or initiative |
| `/strategy-review` | Reviews and stress-tests an existing strategy document across seven dimensions (diagnosis, guiding policy, coherence, falsifiability) |

# Development Process

## Technical Stack Specific

| Execution | What it does |
|---|---|
| `/deepagents-architecture` | Architectural decisions for Deep Agents apps: Deep Agents vs alternatives, backend strategies, subagent systems, middleware |
| `/deepagents-implementation` | Implements agents with create_deep_agent: backends, subagents, middleware, human-in-the-loop |
| `/deepagents-code-review` | Reviews Deep Agents code for bugs, anti-patterns, and configuration mistakes |
| `/langgraph-architecture` | Architectural decisions for LangGraph: state management, multi-agent design, persistence and streaming |
| `/langgraph-implementation` | Implements stateful agent graphs: nodes/edges, state schemas, checkpointing, interrupts, multi-agent |
| `/langgraph-code-review` | Reviews LangGraph code: StateGraph, nodes, edges, checkpointing mistakes |
| `/pydantic-ai-agent-creation` | Creates PydanticAI agents with type-safe dependencies, structured outputs, proper configuration |
| `/pydantic-ai-dependency-injection` | Dependency injection in PydanticAI via RunContext and deps_type |
| `/pydantic-ai-model-integration` | Configures LLM providers, fallback models, streaming, and model settings in PydanticAI |
| `/pydantic-ai-tool-system` | Registers PydanticAI tools with proper context handling, type annotations, docstrings |
| `/pydantic-ai-testing` | Tests PydanticAI agents with TestModel, FunctionModel, VCR cassettes, inline snapshots |
| `/pydantic-ai-common-pitfalls` | Avoids common mistakes and debugs issues in PydanticAI agents |
| `/vercel-ai-sdk` | Vercel AI SDK chat interfaces with streaming: useChat, tool calls, streaming responses |
| `/elixir-code-review` | Reviews Elixir code for idiomatic patterns, OTP basics, and documentation |
| `/elixir-docs-review` | Reviews Elixir documentation: @moduledoc/@doc/@spec coverage, doctests, cross-references |
| `/elixir-performance-review` | Reviews Elixir for performance: GenServer bottlenecks, memory, concurrency patterns |
| `/elixir-writing-docs` | Guides writing Elixir documentation with @moduledoc, @doc, doctests, metadata |
| `/exdoc-config` | Configures ExDoc: mix.exs setup, extras, groups, cheatsheets, livebooks |
| `/exunit-code-review` | Reviews ExUnit tests: patterns, boundary mocking with Mox, test adapters |
| `/liveview-code-review` | Reviews Phoenix LiveView: lifecycle, assigns/streams, components, security |
| `/phoenix-code-review` | Reviews Phoenix: controller patterns, context boundaries, routing, plugs |
| `/review-elixir` | Comprehensive Elixir/Phoenix code review with optional parallel agents |
| `/go-architect` | Go application architecture: net/http 1.22+ routing, project structure, graceful shutdown, DI |
| `/go-web-expert` | Go web development persona: zero global state, explicit errors, validation, testability |
| `/go-middleware` | Idiomatic Go HTTP middleware: context propagation, slog logging, error handling, panic recovery |
| `/go-concurrency-web` | Go concurrency for high-throughput web apps: worker pools, rate limiting, race detection |
| `/go-data-persistence` | Go data persistence: sqlx/pgx, Ent, GORM, connection pooling, migrations, transactions |
| `/go-code-review` | Reviews Go code: idioms, error handling, concurrency safety, generics, errors.Join, slog |
| `/go-testing-code-review` | Reviews Go test code: table-driven tests, assertions, coverage patterns |
| `/bubbletea-code-review` | Reviews BubbleTea TUI code: Elm architecture, model/update/view, Lipgloss styling |
| `/wish-ssh-code-review` | Reviews Wish SSH server code: middleware, session handling, security |
| `/prometheus-go-code-review` | Reviews Prometheus instrumentation in Go: metric types, labels, patterns |
| `/review-go` | Comprehensive Go backend review; detects BubbleTea, Wish SSH, Prometheus and loads matching skills |
| `/review-tui` | Comprehensive BubbleTea TUI review: bubbletea, lipgloss, bubbles, Wish SSH |
| `/swift-code-review` | Reviews Swift: concurrency safety, async/await, actor isolation, Sendable, memory management |
| `/swiftui-code-review` | Reviews SwiftUI: view composition, state management, performance, accessibility |
| `/swiftdata-code-review` | Reviews SwiftData: model design, queries, concurrency, migrations |
| `/swift-testing-code-review` | Reviews Swift Testing: #expect/#require, parameterized tests, async testing |
| `/combine-code-review` | Reviews Combine: memory leaks, operator misuse, error handling |
| `/urlsession-code-review` | Reviews URLSession networking: async/await, request building, caching, background sessions |
| `/cloudkit-code-review` | Reviews CloudKit: container setup, records, subscriptions, sharing |
| `/healthkit-code-review` | Reviews HealthKit: authorization, queries, background delivery, data types |
| `/app-intents-code-review` | Reviews App Intents: intent structure, entities, shortcuts, parameters |
| `/widgetkit-code-review` | Reviews WidgetKit: timelines, view composition, configurable intents, performance |
| `/watchos-code-review` | Reviews watchOS: app lifecycle, complications, WatchConnectivity, performance constraints |
| `/ios-animation-design` | Designs and plans iOS animations with structured specs: transitions, micro-interactions, gestures |
| `/ios-animation-implementation` | Writes Swift animation code with SwiftUI animations, Core Animation, UIKit; first-party APIs preferred |
| `/ios-animation-code-review` | Reviews iOS animation code for correctness, performance, accessibility, Apple API best practices |
| `/review-ios` | Comprehensive iOS/SwiftUI code review with optional parallel agents |
| `/python-code-review` | Reviews Python: type safety, async patterns, error handling |
| `/fastapi-code-review` | Reviews FastAPI: routing, dependency injection, validation, async handlers |
| `/pytest-code-review` | Reviews pytest: async patterns, fixtures, parametrize, mocking |
| `/sqlalchemy-code-review` | Reviews SQLAlchemy 2.0: session lifecycle, relationships, N+1 queries, Alembic migrations |
| `/postgres-code-review` | Reviews PostgreSQL: indexing, JSONB, connection pooling, transaction safety |
| `/review-python` | Comprehensive Python/FastAPI backend review with optional parallel agents |
| `/ai-elements` | Vercel AI Elements workflow UI: chat interfaces, tool execution display, reasoning, job queues |
| `/react-flow` | React Flow (@xyflow/react) workflow visualization: custom nodes, edges, viewport control |
| `/react-flow-architecture` | Architectural guidance for node-based UIs with React Flow: state, integration, fit evaluation |
| `/react-flow-implementation` | Implements React Flow node-based UIs: nodes, edges, handles, custom components, state |
| `/react-flow-advanced` | Advanced React Flow: sub-flows, custom connection lines, drag-and-drop, undo/redo |
| `/react-flow-code-review` | Reviews React Flow code for anti-patterns and performance issues |
| `/dagre-react-flow` | Automatic graph layout with dagre and React Flow: hierarchical layouts, trees |
| `/react-router-v7` | React Router v7 data-driven routing: loaders, actions, Form, fetchers, protected routes |
| `/react-router-code-review` | Reviews React Router v6.4+: data loading, mutations, error handling, navigation |
| `/remix-v2-routing` | Remix v2 routing: flat-routes conventions, nested layouts, resource routes, root.tsx |
| `/remix-v2-routing-review` | Reviews Remix v2 route files: naming violations, missing layouts, v1 holdovers |
| `/remix-v2-data-flow` | Remix v2 data loading and mutations: loaders, actions, deferred data, revalidation |
| `/remix-v2-data-flow-review` | Reviews Remix v2 loaders/actions: mutations-in-loader, leaked server fields, revalidation traps |
| `/remix-v2-forms` | Remix v2 forms and mutations: optimistic UI, file uploads, multi-action routes |
| `/remix-v2-forms-review` | Reviews Remix v2 forms: manual fetch() mutations, wrong hook choice, missing pending state |
| `/remix-v2-meta-sessions` | Remix v2 meta/SEO, cookie sessions, auth gates, CSRF protection |
| `/remix-v2-meta-sessions-review` | Reviews Remix v2 meta/session code: v1-shape meta exports, cookie security gaps, missing CSRF |
| `/remix-v2-perf-ssr` | Remix v2 performance: streaming, HTTP caching, server/client boundaries, hydration safety |
| `/remix-v2-perf-ssr-review` | Reviews Remix v2 perf: caching header misuse, hydration mismatches, prefetch hygiene |
| `/remix-v2-error-boundaries-review` | Reviews Remix v2 error handling: unified ErrorBoundary, isRouteErrorResponse narrowing, throw-vs-return, v1 holdovers (CatchBoundary, useCatch) |
| `/review-remix-v2` | Comprehensive Remix v2 review; detects Remix v2 and loads per-area review skills |
| `/review-frontend` | Comprehensive React/TypeScript frontend review with per-area skills, parallel where supported |
| `/shadcn-ui` | shadcn/ui component patterns: Radix primitives, CVA variants, compound components |
| `/shadcn-code-review` | Reviews shadcn/ui components: CVA patterns, asChild composition, accessibility states |
| `/tailwind-v4` | Tailwind CSS v4: CSS-first configuration, design tokens, OKLCH colors, dark mode |
| `/zustand-state` | Zustand state management: stores, selectors, persistence, devtools |
| `/vitest-testing` | Vitest patterns: vitest.config, mocking with vi.mock and vi.fn, snapshots, coverage setup |
| `/rust-best-practices` | Development guidance for writing idiomatic Rust |
| `/rust-project-setup` | Guidance for scaffolding new Rust projects |
| `/rust-code-review` | Reviews Rust: ownership, borrowing, lifetimes, error handling, trait design, unsafe usage |
| `/rust-testing-code-review` | Reviews Rust tests: unit/integration structure, async testing, mocking, property-based testing |
| `/axum-code-review` | Reviews axum: routing, extractors, middleware, state management, error handling |
| `/tokio-async-code-review` | Reviews tokio async usage: task management, sync primitives, channels, runtime config |
| `/serde-code-review` | Reviews serde: derive patterns, enum representations, custom implementations, serialization bugs |
| `/sqlx-code-review` | Reviews sqlx: compile-time query checking, connection pools, migrations, PostgreSQL usage |
| `/ffi-code-review` | Reviews Rust FFI: type safety, memory layout, string handling, unsafe boundary correctness |
| `/macros-code-review` | Reviews Rust macros: hygiene, fragment misuse, compile-time impact, proc macros |
| `/review-rust` | Comprehensive Rust review fanning out across detected technology areas |

## Requirements

| Execution | What it does |
|---|---|
| `/quick-plan` | Bite-sized TDD-driven implementation plan reconstructed from the current conversation, with domain-expert exploration subagents |
| `/write-plan` | Turns a finalized brainstorm-beagle spec into a bite-sized TDD-driven implementation plan |
| `/resolve-beagle` | Closes a spec's Open Questions (and latent gaps) before planning or implementation begins |
| `/review-plan` | Reviews implementation plans for parallelization, TDD, types, libraries, and security before execution |

# Dev Tooling

| Execution | What it does |
|---|---|
| `/commit-push` | Commits and pushes all local changes to the remote repo |
| `/create-pr` | Creates a pull request with a standardized description template |

## Testing

| Execution | What it does |
|---|---|
| `/gen-test-plan` | Analyzes the repo, detects the stack, traces changes to user-facing entry points, generates an E2E YAML test plan |
| `/run-test-plan` | Executes a YAML test plan, stops on first failure, outputs a rich debug prompt |

## Code Review

| Execution | What it does |
|---|---|
| `/fetch-pr-feedback` | Fetches unresolved review comments from a PR and evaluates them with the receive-feedback skill |
| `/receive-feedback` | Processes external review feedback with technical rigor: verifies claims before implementing, tracks disposition |
| `/respond-pr-feedback` | Responds to PR review comments after evaluation and fixes |
| `/review-feedback-schema` | Schema for tracking code review outcomes to enable feedback-driven skill improvement |
| `/llm-judge` | Compares two or more code implementations against a spec and ranks them |

## Deploying

| Execution | What it does |
|---|---|
| `/gen-release-notes` | Generates release notes for changes since a given tag |

## Codebase Health

| Execution | What it does |
|---|---|
| `/llm-artifacts-detection` | Detects LLM coding-agent artifacts: test quality issues, dead code, over-abstraction, verbose style |
| `/review-llm-artifacts` | Reviews the project or changed files for LLM artifacts across four categories, in parallel where supported |
| `/verify-llm-artifacts` | Confirms or rejects review-llm-artifacts findings before deletes or risky refactors |
| `/fix-llm-artifacts` | Applies fixes from a prior review-llm-artifacts run with safe/risky classification |
| `/review-structure` | Repo-wide structural-maintainability review: 1k-line file guard, anti-spaghetti branching, layer enforcement |

## Documentation

| Execution | What it does |
|---|---|
| `/docs-style` | Core technical documentation writing principles: voice, tone, structure, LLM-friendly patterns |
| `/draft-docs` | Generates first-draft technical documentation from code analysis |
| `/ensure-docs` | Verifies documentation coverage and generates missing docs interactively |
| `/improve-doc` | Analyzes and improves existing documentation using Diataxis principles |
| `/tutorial-docs` | Tutorial patterns: learning-oriented guides that teach through guided doing |
| `/howto-docs` | How-To guide patterns: task-oriented guides for users with specific goals |
| `/reference-docs` | Reference documentation patterns: API docs, parameter tables, technical specifications |
| `/explanation-docs` | Explanation documentation patterns: conceptual guides and design rationale |
| `/review-ai-writing` | Detects AI-generated writing patterns in docs, docstrings, commits, PR descriptions, comments |
| `/humanize-beagle` | Rewrites AI-generated developer text to sound human: fixes inflated language, filler, robotic tone |
| `/adr-decision-extraction` | Mines a conversation or design discussion for architectural decisions before writing ADRs |
| `/adr-writing` | Writes and formats ADR documents using the MADR template with Definition of Done criteria |
| `/write-adr` | Generates Architecture Decision Records from the current session |

## Security

| Execution | What it does |
|---|---|
| `/elixir-security-review` | Reviews Elixir for security vulnerabilities: code injection, atom exhaustion, secret handling |

# Scaffolding and Harness

## Harness Development

| Execution | What it does |
|---|---|
| `/skill-builder` | Creates Agent Skills with best practices, structure, validation, and testing |
| `/review-skill` | Reviews PRs that add or modify Agent Skills: structural validity, design quality, marketplace consistency |
| `/review-skill-improver` | Analyzes feedback logs to identify patterns and improve review-skill accuracy |
| `/agent-architecture-analysis` | Audits an agent codebase against the 12-Factor Agents methodology |

## Anti Drift / Anti Hallucinations

| Execution | What it does |
|---|---|
| `/review-verification-protocol` | Mandatory verification steps before reporting ANY code review findings, to reduce false positives (bundled into beagle-core and each language plugin) |

## Context Setting / Memory

| Execution | What it does |
|---|---|
| `/prompt-improver` | Optimizes prompts for code-related tasks per prompt-engineering best practices |
| `/subagent-prompt` | Produces a handoff prompt that transfers the current session's work to a fresh session for subagent-orchestrated execution |

## Knowledge Base

| Execution | What it does |
|---|---|
| `/artifact-analysis` | Cited, structured read of local documents and project knowledge (docs folders, .beagle/concepts/) |

# Other offerings

| Name | What it does |
|---|---|
| Plugin marketplace | `.claude-plugin/marketplace.json`: 11 installable plugins (beagle-core, -analysis, -docs, -testing, -ai, -elixir, -go, -ios, -python, -react, -rust) |
| check-portability.sh | Script validating skills stay portable across agents (Claude Code, Codex) |
| SKILLS.md / llms.txt | Human- and LLM-readable catalogs of every skill in the marketplace |
