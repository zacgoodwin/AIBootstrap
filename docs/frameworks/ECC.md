# ECC skill pack

All skills from [affaan-m/ECC](https://github.com/affaan-m/ECC), sorted under the README headings.

# Product Process

## Pack Setup

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/inherit-legacy-style` | affaan-m/ECC | Legacy-project style inheritance skill. Use when the user types /inherit-legacy-style, or when onboarding an AI coding agent onto a hand-written legacy project and you need to prev |
| `/agent-sort` | affaan-m/ECC | Build an evidence-backed ECC install plan for a specific repo by sorting skills, commands, rules, hooks, and extras into DAILY vs LIBRARY buckets using parallel repo-aware review p |
| `/config-gc` | affaan-m/ECC | Garbage collection for your Claude Code configuration. Periodically scans ~/.claude (skills, memory, hooks, permissions, MCP servers, caches) for redundant, stale, orphaned, or low |
| `/configure-ecc` | affaan-m/ECC | Guide ECC installation, update, or reconfiguration from inside Claude Code, Codex, or Kimi while respecting each harness's real plugin, scope, and hook capabilities. |
| `/ecc-guide` | affaan-m/ECC | Guide users through ECC's current agents, skills, commands, hooks, rules, install profiles, and project onboarding by reading the live repository surface before answering. |
| `/deployment-patterns` | affaan-m/ECC | Deployment workflows, CI/CD pipeline patterns, Docker containerization, health checks, rollback strategies, and production readiness checklists for web applications. |
| `/coding-standards` | affaan-m/ECC | Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review. |
| `/ck` | affaan-m/ECC | Persistent per-project memory for Claude Code. Auto-loads project context on session start, tracks sessions with git activity, and writes to native memory. Commands run d |
| `/claude-devfleet` | affaan-m/ECC | Orchestrate multi-agent coding tasks via Claude DevFleet — plan projects, dispatch parallel agents in isolated worktrees, monitor progress, and read structured reports. |
| `/dev-team` | affaan-m/ECC | Simulate a collaborative dev team session where multiple role-based personas (PM, Architect, Developer, QA) respond to the same problem together in one session. Use when |
| `/hermes-imports` | affaan-m/ECC | Convert local Hermes operator workflows into sanitized ECC skills and release-pack artifacts. Use when preparing a Hermes workflow for public ECC reuse without leaking pr |
| `/nasiko-control-plane` | affaan-m/ECC | Install, detect, and operate the optional Nasiko agent control plane through ECC with pinned artifacts, explicit consent, and telemetry and secrets boundaries. |
| `/nanoclaw-repl` | affaan-m/ECC | Operate and extend NanoClaw v2, ECC's zero-dependency session-aware REPL built on claude -p. Use when operating or extending the NanoClaw REPL. |
| `/openclaw-persona-forge` | affaan-m/ECC | 为 OpenClaw AI Agent 锻造完整的龙虾灵魂方案。根据用户偏好或随机抽卡， 输出身份定位、灵魂描述(SOUL.md)、角色化底线规则、名字 |
| `/terminal-opener` | affaan-m/ECC | Open an executable and its argument array in a visible terminal window through a reusable, shell-free launch plan with dry-run, JSON, capability detection, detached fallb |
| `/uncloud` | affaan-m/ECC | Use when managing an Uncloud cluster — deploying services, configuring Caddy ingress, adding static proxy routes for non-cluster devices, publishing ports, scaling, ins |

## Starting Direction / Human Helper

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/plan-canvas` | affaan-m/ECC | Open plans and HTML artifacts in a local browser canvas where the human annotates elements, chats, and approves or requests changes without leaving the page. |
| `/council-multi-model` | affaan-m/ECC | Add one optional external Codex critique after the existing council has produced a decision draft. Use when an ambiguous, high-consequence decision would benefit from a s |
| `/recursive-decision-ledger` | affaan-m/ECC | Use when the user asks for repeated rollouts, marked decision processes, high-dimensional search, stochastic optimization, local-optima exploration, ensemble comparison, |
| `/taste` | affaan-m/ECC | A creative-direction (taste) layer for music videos and short-form edits in the angelcore / cloud-trance / hyperpop visual family. Distills a named-genre aesthetic vocabu |

## PRD

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/product-capability` | affaan-m/ECC | Translate PRD intent, roadmap asks, or product discussions into an implementation-ready capability plan that exposes constraints, invariants, interfaces, and unresolved decisions b |
| `/product-lens` | affaan-m/ECC | Use this skill to validate the "why" before building, run product diagnostics, and pressure-test product direction before the request becomes an implementation contract. |
| `/accessibility` | affaan-m/ECC | Design, implement, and audit inclusive digital products using WCAG 2.2 Level AA |
| `/regex-vs-llm-structured-text` | affaan-m/ECC | Decision framework for choosing between regex and LLM when parsing structured text — start with regex, add LLM only for low-confidence edge cases. |
| `/blueprint` | affaan-m/ECC | Turn a one-line objective into a step-by-step construction plan for multi-session, multi-agent engineering projects. Each step has a self-contained context brief so a fre |
| `/ml-adoption-playbook` | affaan-m/ECC | End-to-end methodology for AI agents and software engineers to add machine learning algorithms to existing non-ML codebases. Covers problem framing, data readiness, archi |

## Success Measurement

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/agent-eval` | affaan-m/ECC | Head-to-head comparison of coding agents (Claude Code, Aider, Codex, etc.) on custom tasks with pass rate, cost, time, and consistency metrics. Use when choosing between |
| `/healthcare-eval-harness` | affaan-m/ECC | Patient safety evaluation harness for healthcare application deployments. Automated test suites for CDSS accuracy, PHI exposure, clinical workflow integrity, and integrat |

## Research

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/deep-research` | affaan-m/ECC | Multi-source deep research using firecrawl and exa MCPs. Searches the web, synthesizes findings, and delivers cited reports with source attribution. |
| `/research-ops` | affaan-m/ECC | Evidence-first current-state research workflow for ECC. Use when the user wants fresh facts, comparisons, enrichment, or a recommendation built from current public evidence and any |
| `/benchmark-methodology` | affaan-m/ECC | Use after competitive-platform-analysis has produced a tiered competitor set. Scores each competitor across nine weighted dimensions (positioning, voice, visual craft, offer packag |
| `/competitive-platform-analysis` | affaan-m/ECC | Use when scoping a competitive landscape — identifying, categorising, and score-filtering a competitor set before any benchmarking begins. |
| `/competitive-report-structure` | affaan-m/ECC | Use after benchmark-methodology has produced scored competitor profile cards. Assembles findings into a decision-grade report: landscape map, competitor profiles, benchmarking matr |
| `/documentation-lookup` | affaan-m/ECC | Use up-to-date library and framework docs via Context7 MCP instead of training data. Activates for setup questions, API references, code examples, or when the user names |
| `/exa-search` | affaan-m/ECC | Neural search via Exa MCP for web, code, and company research. Use when the user needs web search, code examples, company intel, people lookup, or AI-powered deep researc |
| `/market-research` | affaan-m/ECC | Conduct market research, competitive analysis, investor due diligence, and industry intelligence with source attribution and decision-oriented summaries. Use when the use |
| `/prediction-market-oracle-research` | affaan-m/ECC | Research prediction markets as data sources or oracle signals for products, agents, dashboards, and corporate decision intelligence. Use for source-grounded analysis of m |
| `/scientific-db-pubmed-database` | affaan-m/ECC | Direct PubMed and NCBI E-utilities search workflows for biomedical literature, MeSH queries, PMID lookup, citation retrieval, and API-backed literature monitoring. Use wh |
| `/scientific-db-uspto-database` | affaan-m/ECC | USPTO patent and trademark data workflow for official record lookup, PatentSearch queries, TSDR checks, assignment data, and reproducible IP research logs. Use when a tas |
| `/scientific-pkg-gget` | affaan-m/ECC | gget CLI and Python workflow for quick genomic database queries, sequence lookup, BLAST-style searches, enrichment checks, and reproducible bioinformatics evidence logs. |
| `/scientific-thinking-literature-review` | affaan-m/ECC | Systematic literature-review workflow for academic, biomedical, technical, and scientific topics, including search planning, source screening, synthesis, citation checks, |
| `/scientific-thinking-scholar-evaluation` | affaan-m/ECC | Structured scholarly-work evaluation for papers, proposals, literature reviews, methods sections, evidence quality, citation support, and research-writing feedback. Use w |

## Marketing

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/article-writing` | affaan-m/ECC | Write articles, guides, blog posts, tutorials, newsletter issues, and other long-form content in a distinctive voice derived from supplied examples or brand guidance. |
| `/brand-voice` | affaan-m/ECC | Build a source-derived writing style profile from real posts, essays, launch notes, docs, or site copy, then reuse that profile across content, outreach, and social workflows. |
| `/connections-optimizer` | affaan-m/ECC | Reorganize the user's X and LinkedIn network with review-first pruning, add/follow recommendations, and channel-specific warm outreach drafted in the user's real voice. |
| `/content-engine` | affaan-m/ECC | Create platform-native content systems for X, LinkedIn, TikTok, YouTube, newsletters, and repurposed multi-platform campaigns. |
| `/crosspost` | affaan-m/ECC | Multi-platform content distribution across X, LinkedIn, Threads, and Bluesky. Adapts content per platform using content-engine patterns. |
| `/lead-intelligence` | affaan-m/ECC | AI-native lead intelligence and outreach pipeline. Replaces Apollo, Clay, and ZoomInfo with agent-powered signal scoring, mutual ranking, warm path discovery, source-derived voice |
| `/social-graph-ranker` | affaan-m/ECC | Weighted social-graph ranking for warm intro discovery, bridge scoring, and network gap analysis across X and LinkedIn. |
| `/social-publisher` | affaan-m/ECC | Agent-driven scheduling and publishing of social media posts across 13 platforms via SocialClaw. |
| `/brand-discovery` | affaan-m/ECC | Use when a brand needs to discover or articulate its identity through structured multi-session interviews. Covers purpose, positioning, audience, personality, voice, narr |
| `/marketing-campaign` | affaan-m/ECC | End-to-end marketing campaign planning and execution. Covers audience research, positioning, campaign angle definition, landing page copy, email sequences, social posts, |
| `/seo` | affaan-m/ECC | Audit, plan, and implement SEO improvements across technical SEO, on-page optimization, structured data, Core Web Vitals, and content strategy. Use when the user wants be |
| `/x-api` | affaan-m/ECC | X/Twitter API integration for posting tweets, threads, reading timelines, search, and analytics. Covers OAuth auth patterns, rate limits, and platform-native content post |

## Initial Design

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/frontend-slides` | affaan-m/ECC | Create stunning, animation-rich HTML presentations from scratch or by converting PowerPoint files. |
| `/liquid-glass-design` | affaan-m/ECC | iOS 26 Liquid Glass design system — dynamic glass material with blur, reflection, and interactive morphing for SwiftUI, UIKit, and WidgetKit. Use when building iOS 26 L |
| `/motion-foundations` | affaan-m/ECC | Motion tokens, spring presets, performance rules, device adaptation, accessibility enforcement, and SSR safety for React / Next.js using motion/react. Foundation layer � |
| `/motion-patterns` | affaan-m/ECC | Production-ready animation patterns for React / Next.js — button, modal, toast, stagger, page transitions, exit animations, scroll, and layout — built on motion-found |
| `/motion-advanced` | affaan-m/ECC | Advanced motion patterns for React / Next.js — drag & drop, gestures, text animations, SVG path drawing, custom hooks, imperative sequences (useAnimate), loaders, and t |
| `/motion-ui` | affaan-m/ECC | Production-ready UI motion system for React/Next.js. Use when implementing animations, transitions, or motion patterns. |

## Business

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/carrier-relationship-management` | affaan-m/ECC | Codified expertise for managing carrier portfolios, negotiating freight rates, tracking carrier performance, allocating freight, and maintaining strategic carrier relatio |
| `/customer-billing-ops` | affaan-m/ECC | Operate customer billing workflows such as subscriptions, refunds, churn triage, billing-portal recovery, and plan analysis using connected billing tools like Stripe. Use |
| `/customs-trade-compliance` | affaan-m/ECC | Codified expertise for customs documentation, tariff classification, duty optimization, restricted party screening, and regulatory compliance across multiple jurisdiction |
| `/energy-procurement` | affaan-m/ECC | Codified expertise for electricity and gas procurement, tariff optimization, demand charge management, renewable PPA evaluation, and multi-facility energy cost management |
| `/finance-billing-ops` | affaan-m/ECC | Evidence-first revenue, pricing, refunds, team-billing, and billing-model truth workflow for ECC. Use when the user wants a sales snapshot, pricing comparison, duplicate- |
| `/inventory-demand-planning` | affaan-m/ECC | Codified expertise for demand forecasting, safety stock optimization, replenishment planning, and promotional lift estimation at multi-location retailers. Informed by dem |
| `/investor-materials` | affaan-m/ECC | Create and update pitch decks, one-pagers, investor memos, accelerator applications, financial models, and fundraising materials. Use when the user needs investor-facing |
| `/investor-outreach` | affaan-m/ECC | Draft cold emails, warm intro blurbs, follow-ups, update emails, and investor communications for fundraising. Use when the user wants outreach to angels, VCs, strategic i |
| `/logistics-exception-management` | affaan-m/ECC | Codified expertise for handling freight exceptions, shipment delays, damages, losses, and carrier disputes. Informed by logistics professionals with 15+ years operational |
| `/production-scheduling` | affaan-m/ECC | Codified expertise for production scheduling, job sequencing, line balancing, changeover optimization, and bottleneck resolution in discrete and batch manufacturing. Info |
| `/quality-nonconformance` | affaan-m/ECC | Codified expertise for quality control, non-conformance investigation, root cause analysis, corrective action, and supplier quality management in regulated manufacturing. |
| `/returns-reverse-logistics` | affaan-m/ECC | Codified expertise for returns authorization, receipt and inspection, disposition decisions, refund processing, fraud detection, and warranty claims management. Informed |

# Development Process

## Loop

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/continuous-agent-loop` | affaan-m/ECC | Patterns for continuous autonomous agent loops with quality gates, evals, and recovery controls. |
| `/ralphinho-rfc-pipeline` | affaan-m/ECC | RFC-driven multi-agent DAG execution pattern with quality gates, merge queues, and work unit orchestration. |
| `/loop-design-check` | affaan-m/ECC | Design a goal-oriented agent loop, and review it for the ways loops go wrong — spinning and burning tokens, Goodhart-gaming the verifier, or running a wrong answer to completion. |
| `/team-agent-orchestration` | affaan-m/ECC | Run team-based orchestration for agent squads using work items, ownership, agent Kanban, merge gates, and control pane handoffs. |
| `/ecc-recipes <workflow description>` | affaan-m/ECC | Map a described workflow to the right ECC command-GROUP with run-order and stop condition, and browse all command-group recipe families. |
| `/benchmark-optimization-loop` | affaan-m/ECC | Use when the user asks to make something faster, try many variants, run recursive optimization, benchmark latency/throughput/cost, or choose the best implementation by re |
| `/continuous-learning` | affaan-m/ECC | [DEPRECATED - use continuous-learning-v2] Legacy v1 stop-hook skill extractor. v2 is a strict superset with instinct-based, project-scoped, hook-reliable learning. Do not |
| `/mle-workflow` | affaan-m/ECC | Production machine-learning engineering workflow for data contracts, reproducible training, model evaluation, deployment, monitoring, and rollback. Use when building, rev |

## Designer Implmentation

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/design-system` | affaan-m/ECC | Use this skill to generate or audit design systems, check visual consistency, and review PRs that touch styling. |
| `/frontend-a11y` | affaan-m/ECC | Accessibility patterns for React and Next.js — semantic HTML, ARIA attributes, form labeling, keyboard navigation, focus management, and screen reader support. |
| `/frontend-design-direction` | affaan-m/ECC | Set an ECC-specific frontend design direction for production UI work. Use when building or improving websites, dashboards, applications, components, landing pages, visual tools, or |
| `/make-interfaces-feel-better` | affaan-m/ECC | Apply concrete design-engineering details that make interfaces feel polished. Use when reviewing or improving UI spacing, typography, borders, shadows, motion, hit areas, icons, te |
| `/click-path-audit` | affaan-m/ECC | Trace every user-facing button/touchpoint through its full state change sequence to find bugs where functions individually work but cancel each other out, produce wrong f |
| `/dashboard-builder` | affaan-m/ECC | Build monitoring dashboards that answer real operator questions for Grafana, SigNoz, and similar platforms. Use when turning metrics into a working dashboard instead of a |
| `/ui-to-vue` | affaan-m/ECC | Use when the user has UI screenshots or design exports that need batch conversion into Vue 3 components, especially with Vant, Element Plus, or Ant Design Vue. |

## Technical Stack Specific

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/react-testing` | affaan-m/ECC | React component testing with React Testing Library, Vitest/Jest, MSW for network mocking, accessibility assertions with axe, and the decision boundary between component tests and P |
| `/rust-testing` | affaan-m/ECC | Rust testing patterns including unit tests, integration tests, async testing, property-based testing, mocking, and coverage. |
| `/angular-developer` | affaan-m/ECC | Generates Angular code and provides architectural guidance. Trigger when creating projects, components, or services, or for best practices on reactivity (signals, linkedSignal, res |
| `/api-design` | affaan-m/ECC | REST API design patterns including resource naming, status codes, pagination, filtering, error responses, versioning, and rate limiting for production APIs. |
| `/backend-patterns` | affaan-m/ECC | Backend architecture patterns, API design, database optimization, and server-side best practices for Node.js, Express, and Next.js API routes. |
| `/bun-runtime` | affaan-m/ECC | Bun as runtime, package manager, bundler, and test runner. When to choose Bun vs Node, migration notes, and Vercel support. |
| `/database-migrations` | affaan-m/ECC | Database migration best practices for schema changes, data migrations, rollbacks, and zero-downtime deployments across PostgreSQL, MySQL, and common ORMs (Prisma, Drizzle, Kysely, |
| `/docker-patterns` | affaan-m/ECC | Docker and Docker Compose patterns for local development, hardened CLI installer harnesses, container security, networking, volumes, and multi-service orchestration. |
| `/frontend-patterns` | affaan-m/ECC | Frontend development patterns for React, Next.js, state management, performance optimization, and UI best practices. |
| `/java-coding-standards` | affaan-m/ECC | Java coding standards for Spring Boot and Quarkus services: naming, immutability, Optional usage, streams, exceptions, generics, CDI, reactive patterns, and project layout. |
| `/mysql-patterns` | affaan-m/ECC | MySQL and MariaDB schema, query, indexing, transaction, replication, and connection-pool patterns for production backends. |
| `/postgres-patterns` | affaan-m/ECC | PostgreSQL database patterns for query optimization, schema design, indexing, and security. |
| `/react-native-patterns` | affaan-m/ECC | React Native and Expo app patterns — Expo Router navigation, state separation (server/client/route/form), TanStack Query data fetching with Zod, performant lists, NativeWind/StyleS |
| `/react-patterns` | affaan-m/ECC | React 18/19 patterns including hooks discipline, server/client component boundaries, Suspense + error boundaries, form actions, data fetching, state management decision trees, and |
| `/react-performance` | affaan-m/ECC | React and Next.js performance optimization patterns adapted from Vercel Engineering's React Best Practices (https://github.com/vercel-labs/agent-skills). |
| `/redis-patterns` | affaan-m/ECC | Redis data structure patterns, caching strategies, distributed locks, rate limiting, pub/sub, and connection management for production applications. |
| `/rust-patterns` | affaan-m/ECC | Idiomatic Rust patterns, ownership, error handling, traits, concurrency, and best practices for building safe, performant applications. |
| `/android-clean-architecture` | affaan-m/ECC | Clean Architecture patterns for Android and Kotlin Multiplatform projects — module structure, dependency rules, UseCases, Repositories, and data layer patterns. Use whe |
| `/clickhouse-io` | affaan-m/ECC | ClickHouse database patterns, query optimization, analytics, and data engineering best practices for high-performance analytical workloads. Use when writing ClickHouse sc |
| `/compose-multiplatform-patterns` | affaan-m/ECC | Compose Multiplatform and Jetpack Compose patterns for KMP projects — state management, navigation, theming, performance, and platform-specific UI. Use when building Co |
| `/cpp-coding-standards` | affaan-m/ECC | C++ coding standards based on the C++ Core Guidelines (isocpp.github.io). Use when writing, reviewing, or refactoring C++ code to enforce modern, safe, and idiomatic prac |
| `/dart-flutter-patterns` | affaan-m/ECC | Production-ready Dart and Flutter patterns covering null safety, immutable state, async composition, widget architecture, popular state management frameworks (BLoC, River |
| `/django-celery` | affaan-m/ECC | Django + Celery async task patterns — configuration, task design, beat scheduling, retries, canvas workflows, monitoring, and testing. Use when adding background jobs, |
| `/django-patterns` | affaan-m/ECC | Django architecture patterns, REST API design with DRF, ORM best practices, caching, signals, middleware, and production-grade Django apps. Use when building or reviewing |
| `/dotnet-patterns` | affaan-m/ECC | Idiomatic C# and .NET patterns, conventions, dependency injection, async/await, and best practices for building robust, maintainable .NET applications. Use when writing o |
| `/fastapi-patterns` | affaan-m/ECC | FastAPI best practices covering project structure, Pydantic v2 schemas, dependency injection, async handlers, authentication, authorization, transactional service layers, |
| `/foundation-models-on-device` | affaan-m/ECC | Apple FoundationModels framework for on-device LLM — text generation, guided generation with @Generable, tool calling, and snapshot streaming in iOS 26+. Use when addin |
| `/golang-patterns` | affaan-m/ECC | Idiomatic Go patterns, best practices, and conventions for building robust, efficient, and maintainable Go applications. Use when writing or reviewing Go code and idiomat |
| `/jpa-patterns` | affaan-m/ECC | JPA/Hibernate patterns for entity design, relationships, query optimization, transactions, auditing, indexing, pagination, and pooling in Spring Boot. Use when designing |
| `/kotlin-coroutines-flows` | affaan-m/ECC | Kotlin Coroutines and Flow patterns for Android and KMP — structured concurrency, Flow operators, StateFlow, error handling, and testing. Use when writing coroutines or |
| `/kotlin-exposed-patterns` | affaan-m/ECC | JetBrains Exposed ORM patterns including DSL queries, DAO pattern, transactions, HikariCP connection pooling, Flyway migrations, and repository pattern. Use when working |
| `/kotlin-ktor-patterns` | affaan-m/ECC | Ktor server patterns including routing DSL, plugins, authentication, Koin DI, kotlinx.serialization, WebSockets, and testApplication testing. Use when building a Ktor ser |
| `/kotlin-patterns` | affaan-m/ECC | Idiomatic Kotlin patterns, best practices, and conventions for building robust, efficient, and maintainable Kotlin applications with coroutines, null safety, and DSL buil |
| `/kubernetes-patterns` | affaan-m/ECC | Kubernetes workload patterns, resource management, RBAC, probes, autoscaling, ConfigMap/Secret handling, and kubectl debugging for production-grade deployments. Use when |
| `/laravel-patterns` | affaan-m/ECC | Laravel architecture patterns, routing/controllers, Eloquent ORM, service layers, queues, events, caching, and API resources for production apps. Use when building or rev |
| `/laravel-plugin-discovery` | affaan-m/ECC | Discover and evaluate Laravel packages via LaraPlugins.io MCP. Use when the user wants to find plugins, check package health, or assess Laravel/PHP compatibility. |
| `/nestjs-patterns` | affaan-m/ECC | NestJS architecture patterns for modules, controllers, providers, DTO validation, guards, interceptors, config, and production-grade TypeScript backends. Use when buildin |
| `/nextjs-turbopack` | affaan-m/ECC | Next.js 16+ and Turbopack — incremental bundling, FS caching, dev speed, and when to use Turbopack vs webpack. |
| `/nuxt4-patterns` | affaan-m/ECC | Nuxt 4 app patterns for hydration safety, performance, route rules, lazy loading, and SSR-safe data fetching with useFetch and useAsyncData. Use when building or reviewin |
| `/perl-patterns` | affaan-m/ECC | Modern Perl 5.36+ idioms, best practices, and conventions for building robust, maintainable Perl applications. Use when writing or reviewing modern Perl 5.36+ code. |
| `/prisma-patterns` | affaan-m/ECC | Prisma ORM patterns for TypeScript backends — schema design, query optimization, transactions, pagination, and critical traps like updateMany returning count not record |
| `/python-patterns` | affaan-m/ECC | Pythonic idioms, PEP 8 standards, type hints, and best practices for building robust, efficient, and maintainable Python applications. Use when writing or reviewing Pytho |
| `/pytorch-patterns` | affaan-m/ECC | PyTorch deep learning patterns and best practices for building robust, efficient, and reproducible training pipelines, model architectures, and data loading. Use when wri |
| `/quarkus-patterns` | affaan-m/ECC | Quarkus 3.x LTS architecture patterns with Camel for messaging, RESTful API design, CDI services, data access with Panache, and async processing. Use for Java Quarkus bac |
| `/springboot-patterns` | affaan-m/ECC | Spring Boot architecture patterns, REST API design, layered services, data access, caching, async processing, and logging. Use for Java Spring Boot backend work. Use when |
| `/swift-actor-persistence` | affaan-m/ECC | Thread-safe data persistence in Swift using actors — in-memory cache with file-backed storage, eliminating data races by design. Use when persisting data in Swift and a |
| `/swift-concurrency-6-2` | affaan-m/ECC | Swift 6.2 Approachable Concurrency — single-threaded by default, @concurrent for explicit background offloading, isolated conformances for main actor types. Use when ad |
| `/swiftui-patterns` | affaan-m/ECC | SwiftUI architecture patterns, state management with @Observable, view composition, navigation, performance optimization, and modern iOS/macOS UI best practices. Use when |
| `/tinystruct-patterns` | affaan-m/ECC | Expert guidance for developing with the tinystruct Java framework. Use when working on the tinystruct codebase or any project built on tinystruct — including creating A |
| `/vite-patterns` | affaan-m/ECC | Vite build tool patterns including config, plugins, HMR, env variables, proxy setup, SSR, library mode, dependency pre-bundling, and build optimization. Activate when wor |
| `/vue-patterns` | affaan-m/ECC | Vue.js 3 Composition API patterns, component architecture, reactivity best practices, Pinia state management, Vue Router navigation, and Nuxt SSR patterns. Activates for |

# Code Architecture

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/architecture-decision-records` | affaan-m/ECC | Capture architectural decisions made during Claude Code sessions as structured ADRs. |
| `/content-hash-cache-pattern` | affaan-m/ECC | Cache expensive file processing results using SHA-256 content hashes — path-independent, auto-invalidating, with service layer separation. Use when repeated file proces |
| `/cost-aware-llm-pipeline` | affaan-m/ECC | Cost optimization patterns for LLM API usage — model routing by task complexity, budget tracking, retry logic, and prompt caching. Use when LLM spend needs to come down |
| `/data-throughput-accelerator` | affaan-m/ECC | Use when large data ingestion, backfill, export, ETL, warehouse loading, manifest catch-up, or table synchronization needs to become much faster while preserving data cor |
| `/hexagonal-architecture` | affaan-m/ECC | Design, implement, and refactor Ports & Adapters systems with clear domain boundaries, dependency inversion, and testable use-case orchestration across TypeScript, Java, |
| `/latency-critical-systems` | affaan-m/ECC | Use for latency-sensitive systems such as realtime dashboards, market data, streaming agents, execution gateways, queues, caches, or HFT-like infrastructure where freshne |
| `/mcp-server-patterns` | affaan-m/ECC | Build MCP servers with Node/TypeScript SDK — tools, resources, prompts, Zod validation, stdio vs Streamable HTTP. Use Context7 or official MCP docs for latest API. Use |
| `/recsys-pipeline-architect` | affaan-m/ECC | Design composable recommendation, ranking, and feed pipelines using the six-stage Source→Hydrator→Filter→Scorer→Selector→SideEffect framework popularized by xAI |

# Dev Tooling

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/mailtrap-email-integration` | affaan-m/ECC | Guides agents through integrating transactional email sending via Mailtrap's Email API, including sandbox testing, domain verification, and API authentication. |

## Requirements

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/intent-driven-development` | affaan-m/ECC | Turn ambiguous or high-impact product and engineering changes into scoped, verifiable acceptance criteria before or alongside implementation. |
| `/plan-orchestrate` | affaan-m/ECC | Read a plan document, decompose it into steps, design a per-step agent chain from the ECC catalogue, and emit ready-to-paste /orchestrate custom prompts. |
| `/contract-first` | affaan-m/ECC | Use when multiple consumers and providers must evolve an API or event schema without field drift, integration surprises, or one side silently redefining the interface. |
| `/orch-add-feature` | affaan-m/ECC | Orchestrate building a brand-new feature end to end — research, plan, TDD implementation, review, and gated commit — by delegating each phase to the matching ECC agent. |
| `/orch-build-mvp` | affaan-m/ECC | Orchestrate bootstrapping a working MVP from a design or spec document — ingest the doc, plan thin vertical slices, scaffold the first end-to-end slice, then TDD-implement, review, |
| `/orch-change-feature` | affaan-m/ECC | Orchestrate altering an existing, working feature to new desired behavior — update its tests to the new spec, change the implementation to match, review, and gated commit. |
| `/orch-fix-defect` | affaan-m/ECC | Orchestrate fixing a bug — reproduce it as a failing regression test, fix to green, review, and gated commit — by delegating each phase to the matching ECC agent. |
| `/orch-pipeline` | affaan-m/ECC | Shared orchestration engine for the orch-* skill family. Defines the gated Research-Plan-TDD-Review-Commit pipeline, the size classifier, the agent map, and the two human gates tha |
| `/orch-refine-code` | affaan-m/ECC | Orchestrate a behavior-preserving refactor — confirm tests are green, restructure without changing behavior, keep tests green, review, and gated commit. |
| `/jira-integration` | affaan-m/ECC | Use this skill when retrieving Jira tickets, analyzing requirements, updating ticket status, adding comments, or transitioning issues. Provides Jira API patterns via MCP |
| `/project-flow-ops` | affaan-m/ECC | Operate execution flow across GitHub and Linear by triaging issues and pull requests, linking active work, and keeping GitHub public-facing while Linear remains the inter |

## Developing

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/api-connector-builder` | affaan-m/ECC | Build a new API connector or provider by matching the target repo's existing integration pattern exactly. |
| `/git-workflow` | affaan-m/ECC | Git workflow patterns including branching strategies, commit conventions, merge vs rebase, conflict resolution, and collaborative development best practices for teams of all sizes. |
| `/github-ops` | affaan-m/ECC | GitHub repository operations, automation, and management. Issue triage, PR management, CI/CD operations, release management, and security monitoring using the gh CLI. |
| `/search-first` | affaan-m/ECC | Research-before-coding workflow. Search for existing tools, libraries, and patterns before writing custom code. |
| `/tdd-workflow <path/to/*.plan.md>` | affaan-m/ECC | Use this skill when writing new features, fixing bugs, or refactoring code. Enforces test-driven development with 80%+ coverage including unit, integration, and E2E tests. |
| `/terminal-ops` | affaan-m/ECC | Evidence-first repo execution workflow for ECC. Use when the user wants a command run, a repo checked, a CI failure debugged, or a narrow fix pushed with exact proof of what was ex |
| `/error-handling` | affaan-m/ECC | Patterns for robust error handling across TypeScript, Python, and Go. Covers typed errors, error boundaries, retries, circuit breakers, and user-facing error messages. |
| `/ai-first-engineering` | affaan-m/ECC | Engineering operating model for teams where AI agents generate a large share of implementation output. Use when setting team process, review gates, or ownership rules for |
| `/django-tdd` | affaan-m/ECC | Django testing strategies with pytest-django, TDD methodology, factory_boy, mocking, coverage, and testing Django REST Framework APIs. Use when writing Django or DRF test |
| `/laravel-tdd` | affaan-m/ECC | Laravel testing strategies with PHPUnit, Pest, model factories, HTTP tests, Sanctum authentication testing, mocking, and coverage. Use when writing Laravel tests with PHP |
| `/quarkus-tdd` | affaan-m/ECC | Test-driven development for Quarkus 3.x LTS using JUnit 5, Mockito, REST Assured, Camel testing, and JaCoCo. Use when adding features, fixing bugs, or refactoring event-d |
| `/springboot-tdd` | affaan-m/ECC | Test-driven development for Spring Boot using JUnit 5, Mockito, MockMvc, Testcontainers, and JaCoCo. Use when adding features, fixing bugs, or refactoring. |
| `/generating-python-installer` | affaan-m/ECC | Commercial-grade Python installer expert for Windows: Nuitka extreme compilation, dist slimming, DLL footprint analysis, and Inno Setup packaging to ship the smallest, fa |
| `/nodejs-keccak256` | affaan-m/ECC | Prevent Ethereum hashing bugs in JavaScript and TypeScript. Node's sha3-256 is NIST SHA3, not Ethereum Keccak-256, and silently breaks selectors, signatures, storage slot |
| `/evm-token-decimals` | affaan-m/ECC | Prevent silent decimal mismatch bugs across EVM chains. Covers runtime decimal lookup, chain-aware caching, bridged-token precision drift, and safe normalization for bots |

## Testing

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/verification-loop` | affaan-m/ECC | A comprehensive verification system for Claude Code sessions. |
| `/ai-regression-testing` | affaan-m/ECC | Regression testing strategies for AI-assisted development. Sandbox-mode API testing without database dependencies, automated bug-check workflows, and patterns to catch AI blind spo |
| `/browser-qa` | affaan-m/ECC | Use this skill to automate visual testing and UI interaction verification using browser automation after deploying features. |
| `/e2e-testing` | affaan-m/ECC | Playwright E2E testing patterns, Page Object Model, configuration, CI/CD integration, artifact management, and flaky test strategies. |
| `/benchmark` | affaan-m/ECC | Use this skill to measure performance baselines, detect regressions before/after PRs, and compare stack alternatives. |
| `/cpp-testing` | affaan-m/ECC | Use only when writing/updating/fixing C++ tests, configuring GoogleTest/CTest, diagnosing failing or flaky tests, or adding coverage/sanitizers. |
| `/csharp-testing` | affaan-m/ECC | C# and .NET testing patterns with xUnit, FluentAssertions, mocking, integration tests, and test organization best practices. Use when writing or reviewing xUnit tests, mo |
| `/fsharp-testing` | affaan-m/ECC | F# testing patterns with xUnit, FsUnit, Unquote, FsCheck property-based testing, integration tests, and test organization best practices. Use when writing F# tests with x |
| `/golang-testing` | affaan-m/ECC | Go testing patterns including table-driven tests, subtests, benchmarks, fuzzing, and test coverage. Follows TDD methodology with idiomatic Go practices. Use when writing |
| `/kotlin-testing` | affaan-m/ECC | Kotlin testing patterns with Kotest, MockK, coroutine testing, property-based testing, and Kover coverage. Follows TDD methodology with idiomatic Kotlin practices. Use wh |
| `/perl-testing` | affaan-m/ECC | Perl testing patterns using Test2::V0, Test::More, prove runner, mocking, coverage with Devel::Cover, and TDD methodology. Use when writing Perl tests with Test2::V0 or T |
| `/python-testing` | affaan-m/ECC | Python testing strategies using pytest, TDD methodology, fixtures, mocking, parametrization, and coverage requirements. Use when writing pytest tests — fixtures, mocks, |
| `/swift-protocol-di-testing` | affaan-m/ECC | Protocol-based dependency injection for testable Swift code — mock file system, network, and external APIs using focused protocols and Swift Testing. Use when Swift cod |
| `/windows-desktop-e2e` | affaan-m/ECC | E2E testing for Windows native desktop apps (WPF, WinForms, Win32/MFC, Qt) using pywinauto and Windows UI Automation. Use when writing E2E tests for a Windows native desk |
| `/django-verification` | affaan-m/ECC | Verification loop for Django projects: migrations, linting, tests with coverage, security scans, and deployment readiness checks before release or PR. |
| `/laravel-verification` | affaan-m/ECC | Verification loop for Laravel projects: env checks, linting, static analysis, tests with coverage, security scans, and deployment readiness. Use when verifying a Laravel |
| `/quarkus-verification` | affaan-m/ECC | Verification loop for Quarkus projects: build, static analysis, tests with coverage, security scans, native compilation, and diff review before release or PR. |
| `/springboot-verification` | affaan-m/ECC | Verification loop for Spring Boot projects: build, static analysis, tests with coverage, security scans, and diff review before release or PR. |

## Code Review

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/santa-method` | affaan-m/ECC | Multi-agent adversarial verification with convergence loop. Two independent review agents must both pass before output ships. |
| `/flutter-dart-code-review` | affaan-m/ECC | Library-agnostic Flutter/Dart code review checklist covering widget best practices, state management patterns (BLoC, Riverpod, Provider, GetX, MobX, Signals), Dart idioms |

## Deploying

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/canary-watch` | affaan-m/ECC | Single-pass post-deploy smoke check of a URL: HTTP status, console errors, network failures, LCP/CLS/INP, key content, API SLAs, static assets and SSE streams, reported against critical/warning/info thresholds. |
| `/canary-watch --compare` | affaan-m/ECC | Diff mode taking two URLs, typically staging and production, and comparing their check results against each other instead of one URL against a stored baseline. |
| `/opensource-pipeline` | affaan-m/ECC | Open-source pipeline: fork, sanitize, and package private projects for safe public release. |
| `/flox-environments` | affaan-m/ECC | Create reproducible, cross-platform (macOS/Linux) development environments with Flox, a declarative Nix-based environment manager. Use when setting up project toolchains |

## Codebase Health

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/production-audit` | affaan-m/ECC | Local-evidence production readiness audit for shipped apps, pre-launch reviews, post-merge checks, and "what breaks in prod?" questions without sending repo data to an external aud |
| `/repo-scan` | affaan-m/ECC | Cross-stack source code asset audit — classifies every file, detects embedded third-party libraries, and delivers actionable four-level verdicts per module with interactive HTML re |
| `/plankton-code-quality` | affaan-m/ECC | Write-time code quality enforcement using Plankton — auto-formatting, linting, and Claude-powered fixes on every file edit via hooks. |
| `/codehealth-mcp` | affaan-m/ECC | Real-time structural Code Health via CodeScene MCP — review before edits, verify score deltas after changes, gate commits and PRs. Use when reviewing code quality, refa |
| `/automation-audit-ops` | affaan-m/ECC | Evidence-first automation inventory and overlap audit workflow for ECC. Use when the user wants to know which jobs, hooks, connectors, MCP servers, or wrappers are live, |

## Mobile App Specific

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/ios-icon-gen` | affaan-m/ECC | Generate iOS app icons as PNG imagesets for Xcode asset catalogs from SF Symbols (5000+ Apple-native) or Iconify API (275k+ open source icons from 200+ collections). Use |

## Documentation

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/code-tour [path-to-tour]` | affaan-m/ECC | Walk an unfamiliar codebase and write a concise CODE_TOUR.md onboarding guide — the key components, a Mermaid diagram of how they connect, and the areas worth a closer look to unde |
| `/codebase-onboarding` | affaan-m/ECC | Analyze an unfamiliar codebase and generate a structured onboarding guide with architecture map, key entry points, conventions, and a starter CLAUDE.md. |
| `/ui-demo` | affaan-m/ECC | Record polished UI demo videos using Playwright. Use when the user asks to create a demo, walkthrough, screen recording, or tutorial video of a web application. |

## Security

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/defi-amm-security` | affaan-m/ECC | Security checklist for Solidity AMM contracts, liquidity pools, and swap flows. Covers reentrancy, CEI ordering, donation or inflation attacks, oracle manipulation, slippage, admin |
| `/security-review` | affaan-m/ECC | Use this skill when adding authentication, handling user input, working with secrets, creating API endpoints, or implementing payment/sensitive features. |
| `/security-scan` | affaan-m/ECC | Scan your Claude Code configuration (.claude/ directory) for security vulnerabilities, misconfigurations, and injection risks using AgentShield. |
| `/django-security` | affaan-m/ECC | Django security best practices, authentication, authorization, CSRF protection, SQL injection prevention, XSS prevention, and secure deployment configurations. Use when r |
| `/laravel-security` | affaan-m/ECC | Laravel security best practices — authentication, authorization, Eloquent safety, CSRF, XSS prevention, API security, and secure deployment configurations. Use when rev |
| `/perl-security` | affaan-m/ECC | Comprehensive Perl security covering taint mode, input validation, safe process execution, DBI parameterized queries, web security (XSS/SQLi/CSRF), and perlcritic securit |
| `/quarkus-security` | affaan-m/ECC | Quarkus Security best practices for authentication, authorization, JWT/OIDC, RBAC, input validation, CSRF, secrets management, and dependency security. Use when reviewing |
| `/springboot-security` | affaan-m/ECC | Spring Security best practices for authn/authz, validation, CSRF, secrets, headers, rate limiting, and dependency security in Java Spring Boot services. Use when reviewin |
| `/security-bounty-hunter` | affaan-m/ECC | Hunt for exploitable, bounty-worthy security issues in repositories. Focuses on remotely reachable vulnerabilities that qualify for real reports instead of noisy local-on |
| `/llm-trading-agent-security` | affaan-m/ECC | Security patterns for autonomous trading agents with wallet or transaction authority. Covers prompt injection, spend limits, pre-send simulation, circuit breakers, MEV pr |
| `/prediction-market-risk-review` | affaan-m/ECC | Review prediction-market, basket, oracle, and trading-agent workflows for compliance, safety, data-quality, privacy, and execution risk. Use before any workflow handles v |
| `/hipaa-compliance` | affaan-m/ECC | HIPAA-specific entrypoint for healthcare privacy and security work. Use when a task is explicitly framed around HIPAA, PHI handling, covered entities, BAAs, breach postur |
| `/healthcare-phi-compliance` | affaan-m/ECC | Protected Health Information (PHI) and Personally Identifiable Information (PII) compliance patterns for healthcare applications. Covers data classification, access contr |

## Agent Safety

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/delivery-gate` | affaan-m/ECC | Stop hook that blocks Claude from finishing until quality checks pass. Detects rationalization patterns (surface text heuristics), stale learning logs (filesystem mtime), and low d |
| `/gateguard` | affaan-m/ECC | Fact-forcing gate that blocks Edit/Write/Bash (including MultiEdit) and demands concrete investigation (importers, data schemas, user instruction) before allowing the act |
| `/safety-guard` | affaan-m/ECC | Use this skill to prevent destructive operations when working on production systems or running agents autonomously. |

## Agent Only Assist

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/council` | affaan-m/ECC | Convene a four-voice council for ambiguous decisions, tradeoffs, and go/no-go calls. |
| `/parallel-execution-optimizer` | affaan-m/ECC | Use when the user wants a task done much faster through parallel work, concurrent agents, batched tool calls, isolated worktrees, or many independent verification lanes without los |
| `/hookify-rules` | affaan-m/ECC | Use when the user asks to create a hookify rule, write a hook rule, configure hookify, add a hookify rule, or needs guidance on hookify rule syntax and patterns. |
| `/data-scraper-agent` | affaan-m/ECC | Build a fully automated AI-powered data collection agent for any public source — job boards, prices, news, GitHub, sports, anything. Runs on a schedule, enriches data w |
| `/dmux-workflows` | affaan-m/ECC | Multi-agent orchestration using dmux (tmux pane manager for AI agents). Patterns for parallel agent workflows across Claude Code, Codex, OpenCode, and other harnesses. Us |

# Scaffolding and Harness

## Agents and Personas

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/agent-payment-x402` | affaan-m/ECC | Add x402 payment execution to AI agents with per-task budgets, spending controls, and non-custodial wallets. Supports Base through agentwallet-sdk and X Layer through OKX |
| `/enterprise-agent-ops` | affaan-m/ECC | Operate long-lived agent workloads with observability, security boundaries, and lifecycle management. Use when running long-lived agent workloads that need observability, |

## Harness Development

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/agent-architecture-audit` | affaan-m/ECC | Full-stack diagnostic for agent and LLM applications. Audits the 12-layer agent stack for wrapper regression, memory pollution, tool discipline failures, hidden repair loops, and r |
| `/agent-harness-construction` | affaan-m/ECC | Design and optimize AI agent action spaces, tool definitions, and observation formatting for higher completion rates. |
| `/agent-introspection-debugging` | affaan-m/ECC | Structured self-debugging workflow for AI agent failures using capture, diagnosis, contained recovery, and introspection reports. |
| `/agent-self-evaluation` | affaan-m/ECC | Use after completing any non-trivial task. The agent self-rates its output on 5 axes — accuracy, completeness, clarity, actionability, conciseness — with concrete evidence per crit |
| `/agentic-engineering` | affaan-m/ECC | Operate as an agentic engineer using eval-first execution, decomposition, and cost-aware model routing. |
| `/autonomous-loops` | affaan-m/ECC | Patterns and architectures for autonomous Claude Code loops — from simple sequential pipelines to RFC-driven multi-agent DAG systems. |
| `/dynamic-workflow-mode` | affaan-m/ECC | Design task-local harnesses, eval gates, and reusable skill extraction for Claude dynamic workflow mode and other adaptive agent harnesses. |
| `/gan-style-harness` | affaan-m/ECC | GAN-inspired Generator-Evaluator agent harness for building high-quality applications autonomously. |
| `/agentic-os` | affaan-m/ECC | Build persistent multi-agent operating systems on Claude Code. Covers kernel architecture, specialist agents, slash commands, file-based memory, scheduled automation, and |
| `/autonomous-agent-harness` | affaan-m/ECC | Transform Claude Code into a fully autonomous agent system with persistent memory, scheduled operations, computer use, and task queuing. Replaces standalone agent framewo |

## Harness Setup

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/skill-scout` | affaan-m/ECC | Search existing local, marketplace, GitHub, and web skill sources before creating a new skill. |
| `/skill-stocktake` | affaan-m/ECC | Use when auditing Claude skills and commands for quality. Supports Quick Scan (changed skills only) and Full Stocktake modes with sequential subagent batch evaluation. |

## Token Savings

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/context-budget` | affaan-m/ECC | Inventories agents, skills, rules, MCP servers and the CLAUDE.md chain, estimates tokens for each, classifies as always/sometimes/rarely needed, and reports prioritized savings. |
| `/context-budget --verbose` | affaan-m/ECC | Adds per-file token counts, a line-by-line breakdown of the heaviest files, the exact duplicated lines between overlapping components, and per-tool MCP schema sizes. For pinpointing offenders, not routine audits. |
| `/cost-tracking` | affaan-m/ECC | Track and report Claude Code token usage, spending, and budgets from the local ECC cost-tracker metrics log. |
| `/ecc-tools-cost-audit` | affaan-m/ECC | Evidence-first ECC Tools burn and billing audit workflow. Use when investigating runaway PR creation, quota bypass, premium-model leakage, duplicate jobs, or GitHub App cost spikes |
| `/token-budget-advisor` | affaan-m/ECC | Offers the user an informed choice about how much response depth to consume before answering. |
| `/workspace-surface-audit` | affaan-m/ECC | Audit the active repo, MCP servers, plugins, connectors, env surfaces, and harness setup, then recommend the highest-value ECC-native skills, hooks, agents, and operator workflows. |

## Anti Drift / Anti Hallucinations

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/growth-log` | affaan-m/ECC | Use after a complex task, failure, or when reviewing what was learned. Teaches how to write growth logs that extract reusable patterns — not diary entries. |
| `/eval-harness` | affaan-m/ECC | Formal evaluation framework for Claude Code sessions implementing eval-driven development (EDD) principles |

## Context Setting / Memory

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/strategic-compact` | affaan-m/ECC | Suggests manual context compaction at logical intervals to preserve context through task phases rather than arbitrary auto-compaction. |
| `/unified-memory` | affaan-m/ECC | Share durable, inspectable context and handoffs between Claude, Codex, Hermes, Cursor, OpenCode, and other agents through the local ECC Memory Vault. |
| `/iterative-retrieval` | affaan-m/ECC | Pattern for progressively refining context retrieval to solve the subagent context problem |
| `/prompt-optimizer` | affaan-m/ECC | Analyze raw prompts, identify intent and gaps, match ECC components (skills/commands/agents/hooks), and output a ready-to-paste optimized prompt. |

## Knowledge Base

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/knowledge-ops` | affaan-m/ECC | Knowledge base management, ingestion, sync, and retrieval across multiple storage layers (local files, MCP memory, vector stores, Git repos). |
| `/living-docs-governance` | affaan-m/ECC | Keep a long-lived project's documentation from rotting by assigning existing project docs clear constitution, map, status, and history roles, then wiring the active agent harness t |
| `/skill-comply` | affaan-m/ECC | Visualize whether skills, rules, and agent definitions are actually followed — auto-generates scenarios at 3 prompt strictness levels, runs agents, classifies behavioral sequences, |
| `/team-builder` | affaan-m/ECC | Interactive agent picker for composing and dispatching parallel teams |
| `/continuous-learning-v2` | affaan-m/ECC | Instinct-based learning system that observes sessions via hooks, creates atomic instincts with confidence scoring, and evolves them into skills/commands/agents. |
| `/rules-distill` | affaan-m/ECC | Scan skills to extract cross-cutting principles and distill them into rules — append, revise, or create new rule files |
| `/healthcare-cdss-patterns` | affaan-m/ECC | Clinical Decision Support System (CDSS) development patterns. Drug interaction checking, dose validation, clinical scoring (NEWS2, qSOFA), alert severity classification, |
| `/healthcare-emr-patterns` | affaan-m/ECC | EMR/EHR development patterns for healthcare applications. Clinical safety, encounter workflows, prescription generation, clinical decision support integration, and access |

# Frameworks

## Applications

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/blender-motion-state-inspection` | affaan-m/ECC | Use this skill when inspecting Blender characters, rigs, poses, animation retargeting, ground contact, facing direction, or model-vs-motion alignment where screenshots al |
| `/fal-ai-media` | affaan-m/ECC | Unified media generation via fal.ai MCP — image, video, and audio. Covers text-to-image (Nano Banana), text/image-to-video (Seedance, Kling, Veo 3), text-to-speech (CSM |
| `/manim-video` | affaan-m/ECC | Build reusable Manim explainers for technical concepts, graphs, system diagrams, and product walkthroughs, then hand off to the wider ECC video stack if needed. Use when |
| `/nutrient-document-processing` | affaan-m/ECC | Process, convert, OCR, extract, redact, sign, and fill documents using the Nutrient DWS API. Works with PDFs, DOCX, XLSX, PPTX, HTML, and images. Use when converting, OCR |
| `/remotion-video-creation` | affaan-m/ECC | Best practices for Remotion - Video creation in React. 29 domain-specific rules covering 3D, animations, audio, captions, charts, transitions, and more. Use when building |
| `/tasteforge-video` | affaan-m/ECC | Use for file-driven multimodal image, video, and 3D-asset discovery; taste interviews; distill or apply workflows; style-pack validation; editable EDL/FCPXML export; prov |
| `/video-editing` | affaan-m/ECC | AI-assisted video editing workflows for cutting, structuring, and augmenting real footage. Covers the full pipeline from raw capture through FFmpeg, Remotion, ElevenLabs, |
| `/videodb` | affaan-m/ECC | See, Understand, Act on video and audio. See- ingest from local files, URLs, RTSP/live feeds, or live record desktop; return realtime context and playable stream links. U |
| `/visa-doc-translate` | affaan-m/ECC | Translate visa application documents (images) to English and create a bilingual PDF with original and translation. Use when visa application document images must be trans |

## MCP

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/email-ops` | affaan-m/ECC | Evidence-first mailbox triage, drafting, send verification, and sent-mail-safe follow-up workflow for ECC. Use when the user wants to organize email, draft or send throug |
| `/google-workspace-ops` | affaan-m/ECC | Operate across Google Drive, Docs, Sheets, and Slides as one workflow surface for plans, trackers, decks, and shared documents. Use when the user needs to find, summarize |
| `/messages-ops` | affaan-m/ECC | Evidence-first live messaging workflow for ECC. Use when the user wants to read texts or DMs, recover a recent one-time code, inspect a thread before replying, or prove w |
| `/unified-notifications-ops` | affaan-m/ECC | Operate notifications as one ECC-native workflow across GitHub, Linear, desktop alerts, hooks, and connected communication surfaces. Use when the real problem is alert ro |

## Skill Packs (ish)

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/ito-baskets` | affaan-m/ECC | Read-only Itô basket and prediction-market data skill. Index the live basket catalog, compare a basket against user-supplied research or a watchlist, build a source-grou |
| `/ito-compute` | affaan-m/ECC | Query live GPU inventory, submit an authenticated Itô fixed-rate RFQ, inspect RFQ or procurement status, revoke device credentials, and run explicitly gated node qualifi |
| `/ito-inference` | affaan-m/ECC | Inspect the availability of model serving on a completed Itô compute booking and, when the canonical backend becomes available, hand off an explicitly confirmed serving |
| `/ito-training` | affaan-m/ECC | Inspect the availability of ML training on a completed Itô compute booking and, when the canonical backend becomes available, hand off an explicitly confirmed training m |
| `/cisco-ios-patterns` | affaan-m/ECC | Cisco IOS and IOS-XE review patterns for show commands, config hierarchy, wildcard masks, ACL placement, interface hygiene, and safe change-window verification. Use when |
| `/netmiko-ssh-automation` | affaan-m/ECC | Safe Python Netmiko patterns for read-only collection, bounded batch SSH, TextFSM parsing, guarded config changes, timeouts, and network automation error handling. Use wh |
| `/network-bgp-diagnostics` | affaan-m/ECC | Diagnostics-only BGP troubleshooting patterns for neighbor state, route exchange, prefix policy, AS path inspection, and safe evidence collection. Use when a BGP neighbor |
| `/network-config-validation` | affaan-m/ECC | Pre-deployment checks for router and switch configuration, including dangerous commands, duplicate addresses, subnet overlaps, stale references, management-plane risk, an |
| `/network-interface-health` | affaan-m/ECC | Diagnose interface errors, drops, CRCs, duplex mismatches, flapping, speed negotiation issues, and counter trends on routers, switches, and Linux hosts. Use when an inter |
| `/homelab-network-readiness` | affaan-m/ECC | Readiness checklist for homelab VLAN segmentation, local DNS filtering, and WireGuard-style remote access before changing router, firewall, DHCP, or VPN configuration. |
| `/homelab-network-setup` | affaan-m/ECC | Practical home and homelab network planning for gateways, switches, access points, IP ranges, DHCP reservations, DNS, cabling, and common beginner mistakes. Use when plan |
| `/homelab-pihole-dns` | affaan-m/ECC | Pi-hole installation, blocklist management, DNS-over-HTTPS setup, DHCP integration, local DNS records, and troubleshooting broken DNS resolution on a home network. Use wh |
| `/homelab-vlan-segmentation` | affaan-m/ECC | Segmenting home networks into VLANs for IoT, guest, trusted, and server traffic using UniFi, pfSense/OPNsense, and MikroTik — including switch trunk config, firewall ru |
| `/homelab-wireguard-vpn` | affaan-m/ECC | WireGuard VPN server setup, peer configuration, key generation, split tunneling vs full tunnel routing, and remote access to a home network from mobile and laptop clients |
