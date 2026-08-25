# Agents

Every subagent definition reachable from this machine, deduplicated by `name`. 53 agents. Generated 2026-08-22 from `~/.claude/agents`, every repo's `.claude/agents` under `~/GitHub`, `AIBootstrap/.claude/agent-library` (parked ECC library), `PMOS/sub-agents`, `JobSearchOS/sub-agents`, `CostFlow.Finance/docs/agents`, and installed plugin caches (latest version only).
> Inventory generated from the author's machine across all repos and plugin caches — an example of a mature agent roster, not a description of this repo. 14 of these 53 ship here in `.claude/agents/`: 6 sourced `zacgoodwin/AIBootstrap`, the 7 Aakash Gupta PM OS review-panel agents, and `typescript-reviewer` from affaan-m/ECC.

Execution: agents run as subagents, via the Agent tool with `subagent_type=<name>` or by asking Claude to "use the <name> agent". Source = where the agent was originally installed from. Blank = origin could not be determined.

## Contents

- [Plan & Architecture](#plan--architecture) (6)
- [Code Review](#code-review) (12)
- [Build, Test & QA](#build-test--qa) (9)
- [Docs & Research](#docs--research) (3)
- [Agent Harness](#agent-harness) (5)
- [Open-source Pipeline](#open-source-pipeline) (3)
- [Product & Review Panel](#product--review-panel) (8)
- [Business Personas](#business-personas) (6)
- [Domain Specialists](#domain-specialists) (1)

## Plan & Architecture

| Execution | Source (origin) | What it does |
|---|---|---|
| Agent subagent_type=`architect` | affaan-m/ECC | Software architecture specialist for system design, scalability, and technical decision-making. |
| Agent subagent_type=`code-architect` | affaan-m/ECC | Designs feature architectures by analyzing existing codebase patterns and conventions, then providing implementation blueprints with concrete files, interfaces, data flow, and buil |
| Agent subagent_type=`code-explorer` | affaan-m/ECC | Deeply analyzes existing codebase features by tracing execution paths, mapping architecture layers, and documenting dependencies to inform new development. |
| Agent subagent_type=`planner` | affaan-m/ECC | Expert planning specialist for complex features and refactoring. Use PROACTIVELY when users request feature implementation, architectural changes, or complex refactoring. |
| Agent subagent_type=`spec-miner` | affaan-m/ECC | Extracts behavioral specs from existing codebases for OpenSpec. Produces flat Requirement and Invariant blocks with structured metadata (entities, enforced, id, test anchors). |
| Agent subagent_type=`type-design-analyzer` | affaan-m/ECC | Analyze type design for encapsulation, invariant expression, usefulness, and enforcement. |

## Code Review

| Execution | Source (origin) | What it does |
|---|---|---|
| Agent subagent_type=`code-reviewer` | affaan-m/ECC | Expert code review specialist. Proactively reviews code for quality, security, and maintainability. |
| Agent subagent_type=`code-simplifier` | affaan-m/ECC | Simplifies and refines code for clarity, consistency, and maintainability while preserving behavior. |
| Agent subagent_type=`comment-analyzer` | affaan-m/ECC | Analyze code comments for accuracy, completeness, maintainability, and comment rot risk. |
| Agent subagent_type=`database-reviewer` | affaan-m/ECC | PostgreSQL database specialist for query optimization, schema design, security, and performance. |
| Agent subagent_type=`performance-optimizer` | affaan-m/ECC | Performance analysis and optimization specialist. Use PROACTIVELY for identifying bottlenecks, optimizing slow code, reducing bundle sizes, and improving runtime performance. |
| Agent subagent_type=`rag-pipeline-reviewer` | affaan-m/ECC | Reviews RAG (Retrieval-Augmented Generation) pipelines for retrieval quality, chunking strategy, embedding choices, and evaluation coverage. |
| Agent subagent_type=`react-reviewer` | affaan-m/ECC | Expert React/JSX code reviewer specializing in hook correctness, render performance, server/client component boundaries, accessibility, and React-specific security. |
| Agent subagent_type=`refactor-cleaner` | affaan-m/ECC | Dead code cleanup and consolidation specialist. Use PROACTIVELY for removing unused code, duplicates, and refactoring. |
| Agent subagent_type=`rust-reviewer` | affaan-m/ECC | Expert Rust code reviewer specializing in ownership, lifetimes, error handling, unsafe usage, and idiomatic patterns. |
| Agent subagent_type=`security-reviewer` | affaan-m/ECC | Security vulnerability detection and remediation specialist. Use PROACTIVELY after writing code that handles user input, authentication, API endpoints, or sensitive data. |
| Agent subagent_type=`silent-failure-hunter` | affaan-m/ECC | Review code for silent failures, swallowed errors, bad fallbacks, and missing error propagation. |
| Agent subagent_type=`typescript-reviewer` | affaan-m/ECC | Expert TypeScript/JavaScript code reviewer specializing in type safety, async correctness, Node/web security, and idiomatic patterns. |

## Build, Test & QA

| Execution | Source (origin) | What it does |
|---|---|---|
| Agent subagent_type=`bdd-spec-writer` | Code-My-Spec/plugins | Writes BDD specification files (Spex) for user stories |
| Agent subagent_type=`code-writer` | Code-My-Spec/plugins | Implements components following spec files and passing tests |
| Agent subagent_type=`e2e-runner` | affaan-m/ECC | End-to-end testing specialist using Vercel Agent Browser (preferred) with Playwright fallback. |
| Agent subagent_type=`qa` | Code-My-Spec/plugins | Tests a single user story by following a QA prompt, writing a brief, executing tests, and writing results with evidence |
| Agent subagent_type=`react-build-resolver` | affaan-m/ECC | Diagnose and fix React build failures across Vite, webpack, Next.js, CRA, Parcel, esbuild, and Bun. |
| Agent subagent_type=`rust-build-resolver` | affaan-m/ECC | Rust build, compilation, and dependency error resolution specialist. Fixes cargo build errors, borrow checker issues, and Cargo.toml problems with minimal changes. |
| Agent subagent_type=`spec-writer` | Code-My-Spec/plugins | Creates component and context specifications from prompt files |
| Agent subagent_type=`tdd-guide` | affaan-m/ECC | Test-Driven Development specialist enforcing write-tests-first methodology. Use PROACTIVELY when writing new features, fixing bugs, or refactoring code. |
| Agent subagent_type=`test-writer` | Code-My-Spec/plugins | Writes tests for components following spec file test assertions |

## Docs & Research

| Execution | Source (origin) | What it does |
|---|---|---|
| Agent subagent_type=`conversation-analyzer` | affaan-m/ECC | Use this agent when analyzing conversation transcripts to find behaviors worth preventing with hooks. |
| Agent subagent_type=`doc-updater` | affaan-m/ECC | Documentation and codemap specialist. Use PROACTIVELY for updating codemaps and documentation. |
| Agent subagent_type=`docs-lookup` | affaan-m/ECC | When the user asks how to use a library, framework, or API or needs up-to-date code examples, use Context7 MCP to fetch current documentation and return answers with examples. |

## Agent Harness

| Execution | Source (origin) | What it does |
|---|---|---|
| Agent subagent_type=`agent-evaluator` | affaan-m/ECC | Evaluates agent output against 5-axis quality rubric (accuracy, completeness, clarity, actionability, conciseness). |
| Agent subagent_type=`gan-evaluator` | affaan-m/ECC | GAN Harness — Evaluator agent. Tests the live running application via Playwright, scores against rubric, and provides actionable feedback to the Generator. |
| Agent subagent_type=`gan-generator` | affaan-m/ECC | GAN Harness — Generator agent. Implements features according to the spec, reads evaluator feedback, and iterates until quality threshold is met. |
| Agent subagent_type=`gan-planner` | affaan-m/ECC | GAN Harness — Planner agent. Expands a one-line prompt into a full product specification with features, sprints, evaluation criteria, and design direction. |
| Agent subagent_type=`harness-optimizer` | affaan-m/ECC | Analyze and improve the local agent harness configuration for reliability, cost, and throughput. |

## Open-source Pipeline

| Execution | Source (origin) | What it does |
|---|---|---|
| Agent subagent_type=`opensource-forker` | affaan-m/ECC | Fork any project for open-sourcing. Copies files, strips secrets and credentials (20+ patterns), replaces internal references with placeholders, generates .env.example, and cleans |
| Agent subagent_type=`opensource-packager` | affaan-m/ECC | Generate complete open-source packaging for a sanitized project. Produces CLAUDE.md, setup.sh, README.md, LICENSE, CONTRIBUTING.md, and GitHub issue templates. |
| Agent subagent_type=`opensource-sanitizer` | affaan-m/ECC | Verify an open-source fork is fully sanitized before release. Scans for leaked secrets, PII, internal references, and dangerous files using 20+ regex patterns. |

## Product & Review Panel

| Execution | Source (origin) | What it does |
|---|---|---|
| Agent subagent_type=`customer-voice` | Aakash Gupta PM OS | Judge a feature or PRD as the customer would, in plain language. Use for "would a user get this", "is this worth learning", "customer perspective", "review as a user". |
| Agent subagent_type=`designer-reviewer` | Aakash Gupta PM OS | Review a PRD or plan for UX quality, design-system fit, accessibility, and missing states. |
| Agent subagent_type=`engineer-reviewer` | Aakash Gupta PM OS | Review a PRD or plan for technical feasibility, dependencies, scale, edge cases, and estimate realism. |
| Agent subagent_type=`executive-reviewer` | Aakash Gupta PM OS | Review a PRD or plan for strategic fit, business impact, prioritization, and opportunity cost. |
| Agent subagent_type=`legal-advisor` | Aakash Gupta PM OS | Flag privacy, compliance, IP, and regulatory risk in a plan before it ships. Use for "legal risk", "GDPR", "compliance check", "do we need consent", "ToS impact". |
| Agent subagent_type=`product` | zacgoodwin/AIBootstrap | Turn fuzzy ideas into scoped user stories with acceptance criteria; prioritization; scope cuts. |
| Agent subagent_type=`skeptic` | Aakash Gupta PM OS | Devil's advocate on a proposal: problem validity, alternatives, failure modes, opportunity cost, scope creep. |
| Agent subagent_type=`uxr-analyst` | Aakash Gupta PM OS | Audit the research behind a feature: evidence, segmentation, validation gaps, what to test before build. |

## Business Personas

| Execution | Source (origin) | What it does |
|---|---|---|
| Agent subagent_type=`data` | zacgoodwin/AIBootstrap | Metric design, experiment analysis, health-metric ownership. Use for "what should we measure", "analyze this experiment", "is this metric moving", "define success metrics". |
| Agent subagent_type=`launch` | zacgoodwin/AIBootstrap | Launch readiness, GTM sequencing, go/no-go calls, release announcements. Use for "are we ready to launch", "launch plan", "release checklist", "rollout sequence". |
| Agent subagent_type=`marketing-agent` | affaan-m/ECC | Marketing strategist and copywriter for campaign planning, audience research, positioning, copy creation, and content review. |
| Agent subagent_type=`marketing` | zacgoodwin/AIBootstrap | Positioning, messaging, landing copy, channel selection. Use for "write copy", "how do we position", "which channels", "landing page text", "announcement post". |
| Agent subagent_type=`sales` | zacgoodwin/AIBootstrap | Sales pipeline, pricing experiments, outreach copy, rep capacity planning. Use for "pricing", "outreach", "sales process", "pipeline", "close rate", "quota". |
| Agent subagent_type=`support` | zacgoodwin/AIBootstrap | Help-doc voice, incident communications, user-feedback triage into Backlog tickets. |

## Domain Specialists

| Execution | Source (origin) | What it does |
|---|---|---|
| Agent subagent_type=`cost-allocation-analyst` | zacgoodwin/CostFlow.Finance | IT / FinOps / TBM finance analyst who explains a person's cost allocation in plain language. |

