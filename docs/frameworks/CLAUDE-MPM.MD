# Claude MPM skills

All [bobmatnyc/claude-mpm-skills](https://github.com/bobmatnyc/claude-mpm-skills) skills, sorted by the same sections as Z-TOP-SKILLS.md. Upstream manifest v1.0.9, commit 718070a (2026-07-18) checked 2026-08-23. 176 skills (no hooks, agents, or commands); skills for the Claude MPM multi-agent orchestration framework, usable standalone in Claude Code.

# Product Process

## Starting Direction / Human Helper

| Execution | What it does |
|---|---|
| `/brainstorming` | Interactive idea refinement using the Socratic method to develop fully-formed designs |

## Research

| Execution | What it does |
|---|---|
| `/sec-edgar-pipeline` | SEC EDGAR extraction pipeline: setup, filing discovery by CIK, recipe-driven extraction, report generation |

## Business

| Execution | What it does |
|---|---|
| `/internal-comms` | Framework for writing concise 3P (Progress, Plans, Problems) team updates for executives and stakeholders |

# Development Process

## Loop

| Execution | What it does |
|---|---|
| `/code-production-process` | Six-stage quality-gate pipeline for any code implementation task |

## Designer Implementation

| Execution | What it does |
|---|---|
| `/artifacts-builder` | Suite of tools for creating elaborate multi-component claude.ai HTML artifacts using React, Tailwind CSS, and shadcn/ui |

## Technical Stack Specific

| Execution | What it does |
|---|---|
| `/dspy` | DSPy declarative framework for automatic prompt optimization, treating prompts as code with systematic evaluation and compilers |
| `/langchain` | LangChain LLM application framework: chains, agents, RAG, and memory |
| `/langgraph` | LangGraph for stateful multi-agent AI apps with cyclical workflows, human-in-the-loop, and persistent checkpointing |
| `/local-llm-ops` | Local LLM operations with Ollama on Apple Silicon: setup, model pulls, chat launchers, benchmarks, diagnostics |
| `/model-context` | MCP (Model Context Protocol): build AI-native servers with tools, resources, and prompts (TypeScript/Python SDKs) |
| `/anthropic` | Official Anthropic SDK for Claude: chat, streaming, function calling, vision |
| `/linkedin` | LinkedIn automation via the Linked API CLI: profiles, search, messages, connections, posts, Sales Navigator workflows |
| `/openrouter` | OpenRouter unified AI API: 200+ LLMs through one interface with routing, streaming, cost optimization, fallbacks |
| `/xquik` | Xquik X data automation API: tweet search, user lookup, follower exports, monitors, webhooks, confirmation-gated X actions |
| `/mongodb` | MongoDB NoSQL document database: schema design, aggregation pipelines, indexing, Spring Data integration |
| `/ecto-patterns` | Ecto patterns for Phoenix/Elixir: schemas, changesets, migrations, queries, Ecto.Multi, associations, tenant partitioning |
| `/phoenix-api-channels` | Phoenix controllers, JSON APIs, Channels, and Presence on the BEAM |
| `/phoenix-liveview` | Phoenix Framework with LiveView on the BEAM |
| `/phoenix-ops` | Phoenix operations and deployment: releases, runtime config, clustering, telemetry, secrets, background jobs |
| `/golang-cli-cobra-viper` | Production-quality Go CLI tools with Cobra command framework and Viper configuration |
| `/golang-concurrency-patterns` | Go concurrency for production services: context cancellation, errgroup, worker pools, fan-in/fan-out, race/deadlock pitfalls |
| `/golang-database-patterns` | Go database integration with sqlx, pgx, and golang-migrate |
| `/golang-grpc` | Production gRPC in Go: protobuf layout, codegen, interceptors, deadlines, streaming, TLS, bufconn testing |
| `/golang-http-frameworks` | Go HTTP API development with net/http, Chi, Gin, Echo, and Fiber |
| `/golang-observability-opentelemetry` | Instrumenting Go with OpenTelemetry tracing, Prometheus metrics, and slog structured logging |
| `/spring-boot` | Spring Boot 3.x: dependency injection, REST APIs, data access, security, actuator monitoring |
| `/vite` | Vite build tool: instant HMR, ESM-first architecture, zero-config setup |
| `/express-production` | Production Express.js: middleware architecture, error handling, security hardening, testing, deployment |
| `/flexlayout-react` | FlexLayout for React: docking layout manager with drag-and-drop, tabs, splitters, window management |
| `/hono-core` | Hono web framework fundamentals: routing, context, handlers, response patterns for multi-runtime deployment |
| `/hono-cloudflare` | Hono on Cloudflare Workers: bindings, KV, D1, R2, Durable Objects, edge deployment |
| `/hono-jsx` | Hono JSX: server-side rendering, streaming, async components, HTML generation |
| `/hono-middleware` | Hono middleware: creation, composition, built-ins, execution order |
| `/hono-rpc` | Hono RPC: end-to-end type-safe API client generation with hc client and TypeScript inference |
| `/hono-testing` | Hono testing: app.request(), test client, environment mocking, integration testing |
| `/hono-validation` | Hono request validation with Zod, TypeBox, Valibot for JSON, forms, query params, headers |
| `/nextjs` | Next.js environment variable management: file precedence, variable types, deployment configurations |
| `/react-core` | React fundamentals: components/JSX, props/state, core hooks, composition, controlled inputs |
| `/react-advanced` | React 19 platform features: React Compiler auto-memoization, concurrent rendering, use() hook, Actions |
| `/react-hooks-composition` | Advanced hooks composition: SWR, debounced search, memoized contexts, state machines, performance |
| `/react-state-machine` | Reusable React state machine skills with XState v5 and the actor model |
| `/svelte` | Svelte 5: Runes API, SvelteKit full-stack framework, SSR/SSG, minimal JavaScript |
| `/svelte5-runes-static` | Svelte 5 runes + SvelteKit adapter-static (SSG/SSR): hydration-safe state and reactivity that survives prerendering |
| `/sveltekit` | SvelteKit full-stack framework: file-based routing, SSR/SSG, form actions, deployment adapters |
| `/vue` | Vue 3: Composition API, reactivity system, single-file components, Vite integration, TypeScript |
| `/biome` | Biome fast all-in-one toolchain for web projects: Rust linter + formatter, 100x faster than ESLint |
| `/validated-handler` | Type-safe Next.js App Router API route handler with automatic Zod validation |
| `/nextjs-core` | Core Next.js App Router patterns: Server Components, Server Actions, route handlers, data fetching, caching |
| `/nextjs-v16` | Next.js 16 migration guide: async request APIs, "use cache", Turbopack |
| `/espocrm` | Developing on EspoCRM: metadata-driven CRM with service layer architecture |
| `/wordpress-plugin-fundamentals` | Modern WordPress plugin development with PHP 8.3+, OOP architecture, hooks, database, Settings API |
| `/wordpress-block-editor-fse` | WordPress block development and Full Site Editing with theme.json, block themes, custom blocks (WP 6.7+) |
| `/wordpress-advanced-architecture` | Advanced WordPress: REST API endpoints, WP-CLI commands, performance optimization, caching |
| `/better-auth-core` | Better Auth core setup for TypeScript: instance config, server handlers, client instances, sessions |
| `/better-auth-authentication` | Better Auth flows: email/password, social providers, sign-up/sign-in/verification |
| `/better-auth-integrations` | Better Auth framework integrations: Next.js, SvelteKit, Remix, Express, Hono route handlers |
| `/better-auth-plugins` | Better Auth plugin system: 2FA, magic link, passkey, JWT, organizations |
| `/supabase` | Supabase open-source Firebase alternative: Postgres, auth, storage, realtime with Next.js/React/Vue |
| `/neon` | Neon serverless Postgres: autoscaling, instant database branching, zero-downtime deployments |
| `/asyncio` | Python asyncio: async/await, event loops, tasks, coroutines, aiohttp, FastAPI async patterns |
| `/celery` | Distributed Python task queue for background jobs, scheduled tasks, and workflows with Django/Flask/FastAPI |
| `/sqlalchemy` | SQLAlchemy SQL toolkit and ORM: query builder, relationship mapping, Alembic migrations |
| `/django` | Django full-featured Python web framework with batteries included (ORM, admin, auth) |
| `/fastapi-local-dev` | FastAPI dev/prod runbook (Uvicorn reload, Gunicorn) |
| `/flask` | Flask lightweight Python framework for microservices, REST APIs, and flexible web apps |
| `/mypy` | mypy static type checker for Python: gradual typing, strict mode, Protocol support |
| `/pyright` | Pyright fast Python type checker from Microsoft: VS Code integration, strict modes |
| `/pydantic` | Python data validation via type hints with Pydantic v2's Rust-powered core |
| `/clap` | Production Rust CLIs with Clap: subcommands, config layering, validation, exit codes, completions |
| `/desktop-applications` | Cross-platform desktop apps in Rust with Tauri and native GUI alternatives |
| `/axum` | Axum web framework patterns: routers/extractors, state, middleware, error handling, tracing, testing |
| `/tauri` | Advanced Tauri event patterns: bidirectional communication, streaming, window-to-window messaging |
| `/ort` | ONNX Runtime in Rust via the ort crate: sessions, CPU/CoreML/CUDA providers, tensor I/O with ndarray |
| `/trpc` | tRPC end-to-end type-safe APIs for TypeScript with React Query integration |
| `/turborepo` | High-performance monorepo build system: intelligent caching, task orchestration, parallel execution |
| `/drizzle` | Drizzle type-safe SQL ORM for TypeScript with zero runtime overhead |
| `/drizzle-migrations` | Migration-first database development workflow using Drizzle ORM |
| `/kysely` | Kysely type-safe SQL query builder: end-to-end type safety, migrations, transactions, plugins |
| `/prisma` | Prisma ORM for TypeScript: schema-first development, auto-generated client, migrations, Prisma Studio |
| `/fastify` | Production Fastify (TypeScript): schema validation, plugins, typed routes, security hardening, inject testing |
| `/nodejs-backend` | Node.js backend with TypeScript: Express/Fastify servers, routing, middleware, database integration |
| `/tanstack-query` | TanStack Query (React Query) server-state management: caching, background refetching, optimistic updates |
| `/zustand` | Minimal React state management: hook-based API, no providers, global state without Redux complexity |
| `/typescript-core` | Advanced TypeScript patterns and best practices for 2025 |
| `/zod` | TypeScript-first schema validation with static type inference for forms, APIs, runtime checking |
| `/daisyui` | Tailwind CSS component library: semantic class names for 50+ components, themes, dark mode |
| `/headlessui` | Headless UI: unstyled, fully accessible components for React and Vue with built-in ARIA |
| `/shadcn` | shadcn/ui for React with Tailwind: copy-paste accessible components with full code ownership |
| `/tailwind` | Tailwind CSS utility-first framework: responsive design, dark mode |
| `/graphql` | GraphQL query language and runtime: strongly-typed schemas, single endpoint architecture |
| `/vb-core` | Core VB.NET patterns, type safety, modern language features |
| `/vb-database` | ADO.NET patterns, Entity Framework, database best practices for VB |
| `/vb-winforms` | Windows Forms development: UI threading, data binding |
| `/vb6-legacy` | Classic VB6 patterns, COM interop, migration strategies |
| `/exploratory-data-analysis` | Systematic EDA workflow: understanding datasets through statistical analysis and visualization before modeling |
| `/feature-engineering` | Feature engineering techniques: create or transform features to improve model performance |
| `/ml-pipeline-development` | Reproducible, maintainable ML pipelines using scikit-learn Pipeline and model development best practices |

# Code Architecture

| Execution | What it does |
|---|---|
| `/software-patterns` | Compares trade-offs and recommends architectural patterns: DI, SOA, repository, domain events, circuit breaker, anti-corruption layer |
| `/api-design-patterns` | API design patterns covering REST, GraphQL, gRPC, versioning, authentication, and modern best practices |

# Dev Tooling

| Execution | What it does |
|---|---|
| `/gh-cli` | Reliably drives the GitHub gh CLI for issue, PR, and label operations with pre-flight verification against fabricated results |
| `/git-workflow` | Essential Git patterns for effective version control |
| `/git-worktrees` | Git worktrees for parallel development on multiple branches simultaneously |
| `/stacked-prs` | Create and manage stacked (dependent) pull requests for complex features |
| `/env-manager` | Environment variable validation, security scanning, and management for Next.js, Vite, React, Node.js |
| `/media-transcoding` | FFmpeg-based media transcoding: preset-driven conversions, batch processing, safe backups |

## Requirements

| Execution | What it does |
|---|---|
| `/writing-plans` | Detailed implementation plans with bite-sized tasks for engineers with zero codebase context |

## Developing

| Execution | What it does |
|---|---|
| `/database-migration` | Safe patterns for evolving database schemas in production, with decision trees and troubleshooting |
| `/json-data-handling` | Working effectively with JSON data structures |
| `/reporting-pipelines` | Reporting pipelines for CSV/JSON/Markdown exports with timestamped outputs and summaries |
| `/xlsx` | Working with Excel files programmatically |
| `/root-cause-tracing` | Systematically trace bugs backward through the call stack to find the original trigger |
| `/systematic-debugging` | Step-by-step debugging workflow: reproduce, isolate, trace to root cause, targeted fix, verify |

## Testing

| Execution | What it does |
|---|---|
| `/cypress` | Cypress E2E and component testing: reliable selectors, stable waits, network stubbing, CI parallelization |
| `/playwright` | Playwright E2E testing: cross-browser automation, auto-wait, built-in test runner |
| `/pytest` | pytest: fixtures, parametrization, plugins, FastAPI/Django/Flask integration |
| `/jest` | Jest with TypeScript: mature ecosystem, React Testing Library integration |
| `/vitest` | Vitest: Vite-native performance, ESM support, TypeScript-first design |
| `/golang-testing-strategies` | Go testing: table-driven tests, testify, gomock, benchmarks, CI/CD integration |
| `/wordpress-testing-qa` | WordPress plugin/theme testing: PHPUnit integration tests, WP_Mock, PHPCS, CI/CD |
| `/condition-based-waiting` | Replace arbitrary timeouts with condition polling for reliable async tests |
| `/test-driven-development` | TDD patterns and practices for all languages |
| `/test-quality-inspector` | Test quality inspection: review coverage, identify gaps, ensure validation |
| `/testing-anti-patterns` | Never test mock behavior, never add test-only methods to production classes; language-agnostic principles |
| `/webapp-testing` | Web application testing patterns with Playwright selectors and wait strategies |
| `/bug-fix` | Systematic workflow for verifying bug fixes to prevent regressions |
| `/screenshot` | Visual verification workflow for UI changes to accelerate review |

## Code Review

| Execution | What it does |
|---|---|
| `/code-quality` | Python code-quality anti-patterns and review checks: exception hierarchies, narrow handling, magic numbers, dead locals |
| `/rust-quality-gate` | Protocol for running and interpreting Rust quality gates: fmt, clippy, and test in strict sequence before merge |
| `/pr-quality-checklist` | PR quality checklist for comprehensive, well-documented pull requests |
| `/requesting-code-review` | Dispatch a code-reviewer subagent to review implementation against plan/requirements before proceeding |
| `/code-review-standards` | Severity-tagged code review checklist (CRITICAL/HIGH/MEDIUM/LOW) used by the code-critic agent |
| `/pre-merge` | Comprehensive verification workflow before merging changes to production |

## Deploying

| Execution | What it does |
|---|---|
| `/docker` | Docker containerization: package applications into isolated, portable units across environments |
| `/github-actions` | GitHub Actions CI/CD workflows for automating build, test, and deployment |
| `/homebrew-formula-maintenance` | Homebrew formula maintenance for Python CLIs and taps: version bumps, SHA updates, audits, releases |
| `/emergency-release-workflow` | Emergency release workflow for critical bug fixes and security patches |
| `/kubernetes` | Kubernetes operations playbook: core objects, probes, resource sizing, safe rollouts, kubectl debugging |
| `/terraform` | Terraform IaC workflows: state and environments, module design, safe plan/apply, drift control, CI guardrails |
| `/cargo-release` | Protocol for Cargo publish/release operations: semver rules, release sequence, codesign safety, dependency ordering |
| `/netlify` | Netlify JAMstack deployment: serverless functions, forms, identity |
| `/aws-ec2` | Common EC2 operations and patterns for managing AWS instances |
| `/digitalocean-overview` | DigitalOcean platform overview: account setup, projects, tooling, service selection |
| `/digitalocean-compute` | DigitalOcean compute: Droplets, App Platform, Functions, DOKS, GPU Droplets, Bare Metal |
| `/digitalocean-containers-images` | DigitalOcean Container Registry, preconfigured and custom images |
| `/digitalocean-managed-databases` | DigitalOcean Managed Databases: PostgreSQL, MySQL, Redis, MongoDB, Kafka, OpenSearch, Valkey |
| `/digitalocean-networking` | DigitalOcean networking: VPC, firewalls, load balancers, DNS, IPv6, NAT gateway |
| `/digitalocean-storage` | DigitalOcean storage: Spaces object storage, Volumes, NFS, Snapshots, Backups |
| `/digitalocean-management` | DigitalOcean monitoring, uptime checks, and resource organization with Projects |
| `/digitalocean-teams` | DigitalOcean Teams and Organizations: billing, access control, roles, membership |
| `/digitalocean-agentic-cloud` | DigitalOcean Gradient AI: building, training, and deploying AI agents on GPU infrastructure |
| `/vercel-overview` | Vercel platform overview: onboarding, projects, CLI, Git integration, env vars, REST API |
| `/vercel-deployments-builds` | Vercel deployment lifecycle: builds, previews, release phases, rollback |
| `/vercel-functions-runtime` | Vercel Functions and Edge Runtime: cron jobs, routing middleware |
| `/vercel-networking-domains` | Vercel networking: domains, DNS, redirects, rewrites, headers, CDN, edge cache |
| `/vercel-observability` | Vercel observability: Web Analytics, Speed Insights, logs, tracing, alerts |
| `/vercel-security-access` | Vercel security: RBAC, SSO, deployment protection, firewall, bot defense, audit logs |
| `/vercel-storage-data` | Vercel data and storage: Postgres, Redis, Blob, Edge Config, data cache |
| `/vercel-teams-billing` | Vercel account, team, and billing management: plans, spend controls |
| `/vercel-ai` | Vercel AI platform: AI SDK, AI Gateway, Vercel Agent, MCP for agentic workloads |

## Codebase Health

| Execution | What it does |
|---|---|
| `/dependency-audit` | Dependency audit and cleanup workflow: maintenance, security updates, removing unused packages |
| `/code-quality-scoring` | Vendor-neutral framework for scoring software health, estimating tech debt, and communicating quality to stakeholders |

## Documentation

| Execution | What it does |
|---|---|
| `/api-documentation` | Best practices for documenting APIs and code interfaces |

## Security

| Execution | What it does |
|---|---|
| `/api-review` | API security checklist for reviewing endpoints before deployment: auth, authorization, input validation |
| `/security-scanning` | CI security scanning: secrets, deps, SAST, triage, expiring exceptions |
| `/threat-modeling` | Threat modeling workflow: scope, data flow diagrams, STRIDE, risk scoring, mitigations into backlog and tests |
| `/wordpress-security-validation` | Security-first WordPress development: nonces, sanitization, validation, escaping against XSS/CSRF/SQLi |

## Product Health

| Execution | What it does |
|---|---|
| `/datadog` | Full-stack observability with Datadog: APM, logs, metrics, synthetics, RUM, alerting, cost optimization |
| `/opentelemetry` | OpenTelemetry patterns: traces, metrics, logs, context propagation, OTLP export, Collector pipelines |
| `/web-performance-optimization` | Web performance via Core Web Vitals, View Transitions, Speculation Rules, framework-specific techniques |

# Scaffolding and Harness

## Harness Development

| Execution | What it does |
|---|---|
| `/dispatching-parallel-agents` | Use multiple Claude agents to investigate and fix independent problems concurrently |
| `/model-context-builder` | MCP server build and evaluation guide: tool surfaces, config, testing conventions |
| `/skill-creator` | Guide for creating effective skills |
| `/mpm-orchestration-demo` | Reference implementation of the Command -> Agent -> Skill orchestration pattern in Claude MPM |

## Token Savings

| Execution | What it does |
|---|---|
| `/session-compression` | AI session compression for multi-turn conversations: summarization, embedding-based retrieval, context management |

## Anti Drift / Anti Hallucinations

| Execution | What it does |
|---|---|
| `/verification-before-completion` | Run verification commands and confirm output before claiming success |

## Knowledge Base

| Execution | What it does |
|---|---|
| `/vector-search-workflows` | Vector search indexing and querying with MCP Vector Search: setup, reindexing, auto-index strategies |

# Other offerings

| Name | What it does |
|---|---|
| manifest.json | Machine-readable skill catalog (v1.0.9) powering toolchain detection and selective skill deployment |
| Maintenance scripts | `scripts/`: init_skill.py, package_skill.py, generate_manifest.py, token_report.py, check_voice_consistency.py, fix_metadata.py, fix_progressive_disclosure.py, flatten_skills.sh |
| Authoring docs | `docs/`: SKILL_CREATION_GUIDE, SELF_CONTAINMENT_STANDARD, VERSIONING, USER_GUIDE, TROUBLESHOOTING |
