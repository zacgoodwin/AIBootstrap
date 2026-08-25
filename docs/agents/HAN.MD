# Han agents

All [TheBushidoCollective/han](https://github.com/TheBushidoCollective/han)
agents, sorted by the same sections as [IN-REPO-AGENTS.md](IN-REPO-AGENTS.md). 72 agents.
Upstream 29a19d3 (2026-08-19) checked 2026-08-24, unchanged. Skills for the
same pack: docs/frameworks/HAN.MD.

Han's roster is discipline personas rather than pipeline stages: one to six
named specialists per engineering domain, installed with the plugin that owns
them. Each row names its owning plugin first, because names repeat across
plugins.

**Name collision:** `api-designer` ships in both the `api-engineering` and
`backend-development` plugins with different briefs. Install only one, or
disambiguate before dispatching.

## Plan & Architecture

| Execution | What it does |
|---|---|
| Agent subagent_type=`system-architect` | system-architecture: system architecture design and evaluation. |
| Agent subagent_type=`solution-architect` | system-architecture: solving specific technical problems with architectural guidance. |
| Agent subagent_type=`backend-architect` | backend-development: design data models and architect backend systems. |
| Agent subagent_type=`api-designer` | backend-development: design API contracts and analyze breaking changes. |
| Agent subagent_type=`api-designer` | api-engineering: API architecture, contract design, and API evolution strategies. Use when designing APIs or planning API versioning. |
| Agent subagent_type=`api-contract-engineer` | api-engineering: OpenAPI, GraphQL schema design, and contract testing. Use when defining API contracts or implementing schema validation. |
| Agent subagent_type=`api-gateway-engineer` | api-engineering: rate limiting, authentication, request/response transformation, and routing. Use when implementing API gateway patterns. |

## Code Review

| Execution | What it does |
|---|---|
| Agent subagent_type=`security-engineer` | security-engineering: perform security assessments and fix findings. |

## Build, Test & QA

| Execution | What it does |
|---|---|
| Agent subagent_type=`ci-watcher` | core: background agent that monitors CI/CD pipelines for open PRs and MRs, then triages and fixes failures via isolated fixer agents in worktrees. |
| Agent subagent_type=`quality-strategist` | quality-engineering: develop comprehensive testing strategies and define quality bars. |
| Agent subagent_type=`test-architect` | quality-engineering: design test organization patterns and implement them. |
| Agent subagent_type=`test-generator` | playwright-mcp: generates Playwright test cases from requirements and user flows. |
| Agent subagent_type=`ui-debugger` | playwright-mcp: debugs UI issues using Playwright inspection tools. |

## Docs & Research

| Execution | What it does |
|---|---|
| Agent subagent_type=`documentation-engineer` | documentation-engineering: create or update technical documentation and API docs. |
| Agent subagent_type=`technical-writer` | content-creation: API documentation, user guides, tutorials, and developer documentation. Transforms complex technical concepts into accessible docs. |

## Agent Harness

| Execution | What it does |
|---|---|
| Agent subagent_type=`plugin-developer` | claude-plugin-development: develops, maintains, and improves Claude Code plugins. |
| Agent subagent_type=`prompt-engineer` | prompt-engineering: crafting prompts, managing AI workflows, coordinating agents, and optimizing Claude Code interactions. Use PROACTIVELY. |

## Product & Review Panel

| Execution | What it does |
|---|---|
| Agent subagent_type=`the-visionary` | product-management: transforms vague requests into clear product direction. |
| Agent subagent_type=`technical-coordinator` | project-management: technical planning and implementation coordination. |
| Agent subagent_type=`flow-coordinator` | project-management: coordination patterns, workflow orchestration, and team collaboration strategies. |

## Business Personas

| Execution | What it does |
|---|---|
| Agent subagent_type=`copywriter` | content-creation: marketing copy, landing pages, ad copy, email campaigns, and sales materials. Persuasive writing that converts. |
| Agent subagent_type=`blog-writer` | content-creation: blog posts, articles, and long-form content, with SEO optimization and audience-focused narratives. |
| Agent subagent_type=`newsletter-writer` | content-creation: email newsletters and subscriber communications that build relationships and drive reader action. |
| Agent subagent_type=`social-media-writer` | content-creation: social media posts and platform-specific content optimized for engagement. |

## Domain Specialists

Forty-eight discipline personas. Install the plugin for the domain you work
in; installing all of them loads a great deal of context for little gain.

### Accessibility

| Execution | What it does |
|---|---|
| Agent subagent_type=`accessibility-engineer` | accessibility-engineering: WCAG, ARIA, screen readers, and keyboard navigation. Use when implementing accessibility features. |
| Agent subagent_type=`assistive-tech-specialist` | accessibility-engineering: screen readers, voice control, and alternative input methods. Use when optimizing for assistive technologies. |
| Agent subagent_type=`inclusive-design-engineer` | accessibility-engineering: universal design, internationalization, and localization. Use when implementing multi-language support. |

### Frontend and mobile

| Execution | What it does |
|---|---|
| Agent subagent_type=`presentation-engineer` | frontend-development: UI layouts, responsive interfaces, design systems, and visual user experience. Use PROACTIVELY for interface work. |
| Agent subagent_type=`mobile-developer` | mobile-development: mobile app development, cross-platform frameworks, and mobile UX patterns. |
| Agent subagent_type=`ios-developer` | mobile-development: iOS development, Swift/SwiftUI, and Apple platform integration. |

### Data and databases

| Execution | What it does |
|---|---|
| Agent subagent_type=`data-pipeline-engineer` | data-engineering: ETL/ELT, data orchestration, and data quality. Use when building data pipelines or transformations. |
| Agent subagent_type=`data-warehouse-engineer` | data-engineering: schema design, OLAP, and query optimization for analytics solutions. |
| Agent subagent_type=`streaming-engineer` | data-engineering: Kafka, real-time data processing, and event-driven systems. |
| Agent subagent_type=`database-designer` | database-engineering: schema design, normalization, and data modeling. |
| Agent subagent_type=`database-reliability-engineer` | database-engineering: database operations, backup and recovery, and high availability. |
| Agent subagent_type=`query-optimizer` | database-engineering: query performance, indexing strategies, and execution plans. |

### Machine learning

| Execution | What it does |
|---|---|
| Agent subagent_type=`ml-pipeline-engineer` | machine-learning: data preparation, feature engineering, and training pipelines. |
| Agent subagent_type=`ml-inference-engineer` | machine-learning: model serving, optimization, edge deployment, and quantization. |
| Agent subagent_type=`mlops-engineer` | machine-learning: model deployment, monitoring, versioning, and A/B testing. |

### Infrastructure and platform

| Execution | What it does |
|---|---|
| Agent subagent_type=`devops-engineer` | infrastructure-engineering: CI/CD pipelines and deployment automation. |
| Agent subagent_type=`infrastructure-engineer` | platform-engineering: cloud infrastructure, infrastructure as code, and system reliability. |
| Agent subagent_type=`platform-engineer` | platform-engineering: platform architecture, internal tooling, and developer productivity. |
| Agent subagent_type=`developer-experience-engineer` | platform-engineering: developer tooling, onboarding, and productivity optimization. |
| Agent subagent_type=`site-reliability-engineer` | site-reliability-engineering: SRE practice, reliability targets, and incident response. |

### Observability and performance

| Execution | What it does |
|---|---|
| Agent subagent_type=`observability-engineer` | observability-engineering: monitoring, logging, tracing, and alerting infrastructure. |
| Agent subagent_type=`monitoring-engineer` | observability-engineering: metrics collection, dashboards, and alerting systems. |
| Agent subagent_type=`logging-engineer` | observability-engineering: log aggregation, log analysis, and structured logging. |
| Agent subagent_type=`performance-engineer` | performance-engineering: performance profiling, optimization techniques, and load testing. |
| Agent subagent_type=`optimization-engineer` | performance-engineering: code optimization, algorithmic improvements, and resource efficiency. |
| Agent subagent_type=`scalability-engineer` | performance-engineering: horizontal scaling, distributed systems, and capacity planning. |

### Networking

| Execution | What it does |
|---|---|
| Agent subagent_type=`distributed-systems-engineer` | network-engineering: distributed algorithms, consensus protocols, and fault tolerance. |
| Agent subagent_type=`network-protocol-engineer` | network-engineering: protocol design, network programming, and communication patterns. |
| Agent subagent_type=`service-mesh-engineer` | network-engineering: service mesh architecture, traffic management, and service discovery. |
| Agent subagent_type=`voip-engineer` | voip-engineering: VoIP systems, SIP protocol, telecommunications, and real-time communications. |

### Systems and compilers

| Execution | What it does |
|---|---|
| Agent subagent_type=`compiler-engineer` | compiler-engineering: lexing, parsing, semantic analysis, and code generation. |
| Agent subagent_type=`language-designer` | compiler-engineering: type systems, syntax design, and language ergonomics. |
| Agent subagent_type=`vm-engineer` | compiler-engineering: bytecode, virtual machines, JIT compilation, and garbage collection. |

### Embedded and IoT

| Execution | What it does |
|---|---|
| Agent subagent_type=`embedded-engineer` | embedded-development: embedded systems, real-time operating systems, and hardware interfaces. |
| Agent subagent_type=`firmware-engineer` | embedded-development: firmware development, bootloaders, and low-level system programming. |
| Agent subagent_type=`iot-engineer` | embedded-development: IoT protocols, device connectivity, and edge computing. |

### Graphics

| Execution | What it does |
|---|---|
| Agent subagent_type=`graphics-engineer` | graphics-engineering: graphics APIs, rendering pipelines, and GPU programming. |
| Agent subagent_type=`shader-engineer` | graphics-engineering: shader programming, GPU computation, and graphics optimization. |
| Agent subagent_type=`visualization-engineer` | graphics-engineering: data visualization, charting libraries, and interactive graphics. |

### Game development

| Execution | What it does |
|---|---|
| Agent subagent_type=`game-developer` | game-development: interactive entertainment experiences and gameplay mechanics. |
| Agent subagent_type=`gameplay-engineer` | game-development: game mechanics, player interaction, and game systems balancing. |
| Agent subagent_type=`game-engine-architect` | game-development: engine architecture, rendering systems, and game physics. |
| Agent subagent_type=`game-performance-engineer` | game-development: game optimization, frame rate analysis, and resource management. |
| Agent subagent_type=`game-tools-engineer` | game-development: game development tools, editors, asset pipelines, and build systems. |
| Agent subagent_type=`technical-game-designer` | game-development: bridges creative game design and engineering implementation; prototyping. |

### Blockchain

| Execution | What it does |
|---|---|
| Agent subagent_type=`blockchain-engineer` | blockchain-development: blockchain architecture and consensus algorithms. |
| Agent subagent_type=`smart-contract-engineer` | blockchain-development: Solidity, contract security, and gas optimization. |
| Agent subagent_type=`web3-engineer` | blockchain-development: dApps, wallets, and Web3 integration. |
