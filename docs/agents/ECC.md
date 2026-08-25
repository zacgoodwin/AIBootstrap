# ECC agents

All [affaan-m/ECC](https://github.com/affaan-m/ECC) agents, sorted by the same
sections as [IN-REPO-AGENTS.md](IN-REPO-AGENTS.md). 73 agents: 68 top-level plus 5 that
ship inside skills. Upstream d8409a4 (2026-08-19) checked 2026-08-24. Skills
for the same pack: docs/frameworks/ECC.md.

**On disk** says whether the agent is already installed here: `library` means
parked in .claude/agent-library/ (promote by copying the file into
.claude/agents/), `active` means
live in .claude/agents/, `—` means upstream only. 34 of the 73 are installed;
the missing 39 are mostly the per-language reviewer and build-resolver fleet.

Execution: `subagent_type=<name>` via the Agent tool, or ask Claude to "use the
`<name>` agent".

## Plan & Architecture

| Execution | On disk | What it does |
|---|---|---|
| Agent subagent_type=`architect` | library | Software architecture specialist for system design, scalability, and technical decision-making. Use PROACTIVELY when planning new features or refactoring large systems. |
| Agent subagent_type=`code-architect` | library | Designs feature architectures by analyzing existing codebase patterns and conventions, then providing implementation blueprints with concrete files, interfaces, data flow, and build order. |
| Agent subagent_type=`code-explorer` | library | Deeply analyzes existing codebase features by tracing execution paths, mapping architecture layers, and documenting dependencies to inform new development. |
| Agent subagent_type=`planner` | library | Expert planning specialist for complex features and refactoring. Use PROACTIVELY when users request feature implementation, architectural changes, or complex refactoring. |
| Agent subagent_type=`spec-miner` | library | Extracts behavioral specs from existing codebases for OpenSpec. Produces flat Requirement and Invariant blocks with structured metadata (entities, enforced, id, test anchors). |
| Agent subagent_type=`type-design-analyzer` | library | Analyze type design for encapsulation, invariant expression, usefulness, and enforcement. |

## Code Review

General reviewers, language-agnostic.

| Execution | On disk | What it does |
|---|---|---|
| Agent subagent_type=`code-reviewer` | library | Expert code review specialist. Proactively reviews code for quality, security, and maintainability. MUST BE USED for all code changes. |
| Agent subagent_type=`code-simplifier` | library | Simplifies and refines code for clarity, consistency, and maintainability while preserving behavior. Focuses on recently modified code unless instructed otherwise. |
| Agent subagent_type=`comment-analyzer` | library | Analyze code comments for accuracy, completeness, maintainability, and comment rot risk. |
| Agent subagent_type=`database-reviewer` | library | PostgreSQL database specialist for query optimization, schema design, security, and performance. Use PROACTIVELY when writing SQL, creating migrations, or designing schemas. |
| Agent subagent_type=`performance-optimizer` | library | Performance analysis and optimization specialist. Use PROACTIVELY for identifying bottlenecks, optimizing slow code, reducing bundle sizes, and improving runtime performance. |
| Agent subagent_type=`pr-test-analyzer` | — | Reviews pull request test coverage quality and completeness, with emphasis on behavioral coverage and real bug prevention. |
| Agent subagent_type=`rag-pipeline-reviewer` | library | Reviews RAG (Retrieval-Augmented Generation) pipelines for retrieval quality, chunking strategy, embedding choices, and evaluation coverage. |
| Agent subagent_type=`refactor-cleaner` | library | Dead code cleanup and consolidation specialist. Runs knip, depcheck, and ts-prune to identify dead code. Use PROACTIVELY for removing unused code and duplicates. |
| Agent subagent_type=`security-reviewer` | library | Security vulnerability detection and remediation specialist. Use PROACTIVELY after writing code that handles user input, authentication, API endpoints, or sensitive data. |
| Agent subagent_type=`silent-failure-hunter` | library | Review code for silent failures, swallowed errors, bad fallbacks, and missing error propagation. |

### Language and framework reviewers

Seventeen reviewers, one per stack. Only `react-reviewer`, `rust-reviewer`,
and `typescript-reviewer` are installed here; pull the rest per project.

| Execution | On disk | What it does |
|---|---|---|
| Agent subagent_type=`cpp-reviewer` | — | Expert C++ code reviewer specializing in memory safety, modern C++ idioms, concurrency, and performance. MUST BE USED for C++ projects. |
| Agent subagent_type=`csharp-reviewer` | — | Expert C# code reviewer specializing in .NET conventions, async patterns, security, nullable reference types, and performance. |
| Agent subagent_type=`django-reviewer` | — | Expert Django code reviewer specializing in ORM correctness, DRF patterns, migration safety, and security misconfigurations. |
| Agent subagent_type=`fastapi-reviewer` | — | Reviews FastAPI applications for async correctness, dependency injection, Pydantic schemas, security, OpenAPI quality, testing, and production readiness. |
| Agent subagent_type=`flutter-reviewer` | — | Flutter and Dart code reviewer covering widget best practices, state management patterns, Dart idioms, performance pitfalls, accessibility, and clean architecture violations. |
| Agent subagent_type=`fsharp-reviewer` | — | Expert F# code reviewer specializing in functional idioms, type safety, pattern matching, computation expressions, and performance. |
| Agent subagent_type=`go-reviewer` | — | Expert Go code reviewer specializing in idiomatic Go, concurrency patterns, error handling, and performance. |
| Agent subagent_type=`java-reviewer` | — | Expert Java code reviewer for Spring Boot and Quarkus. Detects the framework and applies the matching rules, covering layered architecture and JPA/Panache. |
| Agent subagent_type=`kotlin-reviewer` | — | Kotlin and Android/KMP code reviewer covering idiomatic patterns, coroutine safety, Compose best practices, clean architecture violations, and common Android pitfalls. |
| Agent subagent_type=`mle-reviewer` | — | Production machine-learning reviewer for data contracts, feature pipelines, training reproducibility, offline and online evaluation, model serving, monitoring, and rollback. |
| Agent subagent_type=`php-reviewer` | — | Expert PHP code reviewer specializing in PSR-12 compliance, the PHP type system, Eloquent ORM patterns, security, and performance. |
| Agent subagent_type=`python-reviewer` | — | Expert Python code reviewer specializing in PEP 8 compliance, Pythonic idioms, type hints, security, and performance. |
| Agent subagent_type=`react-reviewer` | library | Expert React/JSX code reviewer specializing in hook correctness, render performance, server/client component boundaries, accessibility, and React-specific security. |
| Agent subagent_type=`rust-reviewer` | library | Expert Rust code reviewer specializing in ownership, lifetimes, error handling, unsafe usage, and idiomatic patterns. MUST BE USED for Rust projects. |
| Agent subagent_type=`swift-reviewer` | — | Expert Swift code reviewer specializing in protocol-oriented design, value semantics, ARC memory management, Swift Concurrency, and idiomatic patterns. |
| Agent subagent_type=`typescript-reviewer` | active | Expert TypeScript/JavaScript code reviewer specializing in type safety, async correctness, Node/web security, and idiomatic patterns. |
| Agent subagent_type=`vue-reviewer` | — | Expert Vue.js code reviewer specializing in Composition API correctness, reactivity pitfalls, component architecture, template security, and Vue-specific performance. |

## Build, Test & QA

| Execution | On disk | What it does |
|---|---|---|
| Agent subagent_type=`tdd-guide` | library | Test-Driven Development specialist enforcing write-tests-first methodology. Ensures 80%+ test coverage. |
| Agent subagent_type=`e2e-runner` | library | End-to-end testing specialist using Vercel Agent Browser (preferred) with Playwright fallback. Manages test journeys. |

### Build resolvers

Eleven error-resolution specialists. All fix build breakage with minimal
diffs and no architectural edits.

| Execution | On disk | What it does |
|---|---|---|
| Agent subagent_type=`build-error-resolver` | — | Build and TypeScript error resolution specialist. Fixes build and type errors only, with minimal diffs and no architectural edits. |
| Agent subagent_type=`cpp-build-resolver` | — | C++ build, CMake, and compilation error resolution. Fixes build errors, linker issues, and template errors. |
| Agent subagent_type=`dart-build-resolver` | — | Dart/Flutter build, analysis, and dependency resolution. Fixes `dart analyze` errors, compilation failures, pub conflicts, and build_runner issues. |
| Agent subagent_type=`django-build-resolver` | — | Django/Python build, migration, and dependency resolution. Fixes pip/Poetry errors, migration conflicts, import errors, and configuration issues. |
| Agent subagent_type=`go-build-resolver` | — | Go build, vet, and compilation error resolution. Fixes build errors, go vet issues, and linter warnings. |
| Agent subagent_type=`java-build-resolver` | — | Java/Maven/Gradle build, compilation, and dependency resolution. Detects Spring Boot or Quarkus and applies framework-specific fixes. |
| Agent subagent_type=`kotlin-build-resolver` | — | Kotlin/Gradle build, compilation, and dependency resolution. Fixes Kotlin compiler errors and Gradle issues. |
| Agent subagent_type=`pytorch-build-resolver` | — | PyTorch runtime, CUDA, and training error resolution. Fixes tensor shape mismatches, device errors, gradient issues, DataLoader problems, and mixed precision failures. |
| Agent subagent_type=`react-build-resolver` | library | Diagnose and fix React build failures across Vite, webpack, Next.js, CRA, Parcel, esbuild, and Bun. Handles JSX/TSX compile errors, hydration mismatches, and server/client boundary failures. |
| Agent subagent_type=`rust-build-resolver` | library | Rust build, compilation, and dependency error resolution. Fixes cargo build errors, borrow checker issues, and Cargo.toml problems. |
| Agent subagent_type=`swift-build-resolver` | — | Swift/Xcode build, compilation, and dependency resolution. Fixes swift build errors, Xcode build failures, SPM dependency issues, and code signing problems. |

## Docs & Research

| Execution | On disk | What it does |
|---|---|---|
| Agent subagent_type=`conversation-analyzer` | library | Analyzes conversation transcripts to find behaviors worth preventing with hooks. Triggered by /hookify without arguments. |
| Agent subagent_type=`doc-updater` | library | Documentation and codemap specialist. Generates codemaps and updates READMEs and guides. Use PROACTIVELY. |
| Agent subagent_type=`docs-lookup` | library | When the user asks how to use a library, framework, or API, or needs up-to-date code examples, uses Context7 MCP to fetch current documentation and return answers with examples. |

## Agent Harness

| Execution | On disk | What it does |
|---|---|---|
| Agent subagent_type=`agent-evaluator` | library | Evaluates agent output against a 5-axis quality rubric (accuracy, completeness, clarity, actionability, conciseness). Use after any non-trivial task. |
| Agent subagent_type=`gan-planner` | library | GAN Harness Planner. Expands a one-line prompt into a full product specification with features, sprints, evaluation criteria, and design direction. |
| Agent subagent_type=`gan-generator` | library | GAN Harness Generator. Implements features according to the spec, reads evaluator feedback, and iterates until the quality threshold is met. |
| Agent subagent_type=`gan-evaluator` | library | GAN Harness Evaluator. Tests the live running application via Playwright, scores against the rubric, and provides actionable feedback to the Generator. |
| Agent subagent_type=`harness-optimizer` | library | Analyze and improve the local agent harness configuration for reliability, cost, and throughput. |
| Agent subagent_type=`loop-operator` | — | Operate autonomous agent loops, monitor progress, and intervene safely when loops stall. |
| Agent subagent_type=`observer` | — | Background agent analyzing session observations to detect patterns and create instincts. Uses Haiku for cost efficiency. Ships inside the continuous-learning-v2 skill. |

## Open-source Pipeline

Run in order: forker, then packager, then sanitizer as the release gate.

| Execution | On disk | What it does |
|---|---|---|
| Agent subagent_type=`opensource-forker` | library | Fork any project for open-sourcing. Copies files, strips secrets and credentials (20+ patterns), replaces internal references with placeholders, generates .env.example, and cleans git history. |
| Agent subagent_type=`opensource-packager` | library | Generate complete open-source packaging for a sanitized project: CLAUDE.md, setup.sh, README.md, LICENSE, CONTRIBUTING.md, and GitHub issue templates. |
| Agent subagent_type=`opensource-sanitizer` | library | Verify an open-source fork is fully sanitized before release. Scans for leaked secrets, PII, internal references, and dangerous files using 20+ regex patterns, then returns a pass/fail verdict. |

## Business Personas

| Execution | On disk | What it does |
|---|---|---|
| Agent subagent_type=`marketing-agent` | library | Marketing strategist and copywriter for campaign planning, audience research, positioning, copy creation, and content review. Covers landing pages, email sequences, social posts, and ad copy. |
| Agent subagent_type=`seo-specialist` | — | SEO specialist for technical SEO audits, on-page optimization, structured data, Core Web Vitals, and content and keyword mapping. |
| Agent subagent_type=`chief-of-staff` | — | Personal communication chief of staff triaging email, Slack, LINE, and Messenger. Classifies messages into four tiers (skip, info only, meeting info, action required) and drafts replies. |
| Agent subagent_type=`signal-scorer` | — | Searches and ranks prospects by relevance signals across X, Exa, and LinkedIn, scoring on role, industry, activity, influence, and location. Ships inside the lead-intelligence skill. |
| Agent subagent_type=`enrichment-agent` | — | Pulls detailed profile, company, and activity data for qualified leads: recent news, funding, content interests, mutual overlap. Ships inside the lead-intelligence skill. |
| Agent subagent_type=`mutual-mapper` | — | Maps the user's social graph against scored prospects to find mutual connections and rank them by introduction potential. Ships inside the lead-intelligence skill. |
| Agent subagent_type=`outreach-drafter` | — | Generates personalized outreach for qualified leads: warm intro requests, cold emails, X DMs, and follow-up sequences. Ships inside the lead-intelligence skill. |

## Domain Specialists

| Execution | On disk | What it does |
|---|---|---|
| Agent subagent_type=`a11y-architect` | — | Accessibility architect specializing in WCAG 2.2 compliance for web and native platforms. Use PROACTIVELY when designing UI components or establishing design systems. |
| Agent subagent_type=`healthcare-reviewer` | — | Reviews healthcare application code for clinical safety, CDSS accuracy, PHI compliance, and medical data integrity. Specialized for EMR/EHR and clinical decision support. |
| Agent subagent_type=`harmonyos-app-resolver` | — | HarmonyOS development expert for ArkTS and ArkUI. Reviews V2 state management compliance, Navigation routing patterns, API usage, and performance. |
| Agent subagent_type=`homelab-architect` | — | Designs home and small-lab network plans from hardware inventory, goals, and operator experience level, with safe staged changes and rollback guidance. |
| Agent subagent_type=`network-architect` | — | Designs enterprise or multi-site network architecture from requirements, using the network skills for routing, validation, automation, and troubleshooting detail. |
| Agent subagent_type=`network-config-reviewer` | — | Reviews router and switch configurations for security, correctness, stale references, risky change-window commands, and missing operational guardrails. |
| Agent subagent_type=`network-troubleshooter` | — | Diagnoses connectivity, routing, DNS, interface, and policy symptoms with a read-only OSI-layer workflow and an evidence-backed root cause summary. |
