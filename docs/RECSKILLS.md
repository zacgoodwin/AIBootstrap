
# Product Process
## Pack Setup 
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/codemyspec:init` | Code-My-Spec/plugins | Runs the local CodeMySpec server's init endpoint against the project dir: setup prereq checklist and project state sync. No login. |
| `/codemyspec:init auth` | Code-My-Spec/plugins | Same endpoint but triggers the OAuth flow: checks auth status, opens the auth_url in the OS browser, then re-checks. Logs you in rather than checking project readiness. |
| `/inherit-legacy-style` | affaan-m/ECC | Legacy-project style inheritance skill. Use when the user types /inherit-legacy-style, or when onboarding an AI coding agent onto a hand-written legacy project and you need to prev |
| `/setup-deploy` | garrytan/gstack | Configure deployment settings for /land-and-deploy. |
| `/setup-browser-cookies` | garrytan/gstack | Import cookies from your real Chromium browser into the headless browse session. |
| `/setup-gbrain` | garrytan/gstack | One-time gbrain install on this machine: detects current state, picks PGLite or Supabase, registers the MCP server, and records per-remote trust policy. |
| `/setup-gbrain --cleanup-orphans` | garrytan/gstack | Skips setup and instead lists and deletes in-flight Supabase projects left behind by failed or abandoned provisioning runs. |
| `/setup-gbrain --repo` | garrytan/gstack | Skips the install flow and only flips the per-remote brain policy for the repo you are in. |
| `/setup-gbrain --resume-provision <ref>` | garrytan/gstack | Re-enters an interrupted Supabase auto-provision at its polling step using the given reference, instead of starting a fresh provision. |
| `/setup-gbrain --switch` | garrytan/gstack | Only migrates the brain engine between PGLite and Supabase, leaving the original brain untouched. |
| `/agent-sort` | affaan-m/ECC | Build an evidence-backed ECC install plan for a specific repo by sorting skills, commands, rules, hooks, and extras into DAILY vs LIBRARY buckets using parallel repo-aware review p |
| `/config-gc` | affaan-m/ECC | Garbage collection for your Claude Code configuration. Periodically scans ~/.claude (skills, memory, hooks, permissions, MCP servers, caches) for redundant, stale, orphaned, or low |
| `/configure-ecc` | affaan-m/ECC | Guide ECC installation, update, or reconfiguration from inside Claude Code, Codex, or Kimi while respecting each harness's real plugin, scope, and hook capabilities. |
| `/connect-mcps` | Aakash Gupta PM OS | Connect MCPs for real-time tool integration |
| `/ecc-guide` | affaan-m/ECC | Guide users through ECC's current agents, skills, commands, hooks, rules, install profiles, and project onboarding by reading the live repository surface before answering. |
| `/deployment-patterns` | affaan-m/ECC | Deployment workflows, CI/CD pipeline patterns, Docker containerization, health checks, rollback strategies, and production readiness checklists for web applications. |
| `/coding-standards` | affaan-m/ECC | Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review. |
| `/ponytail:ponytail-help` | DietrichGebert/ponytail | Quick-reference card for all ponytail modes, skills, and commands. One-shot display, not a persistent mode. |
| `/setup-matt-pocock-skills` | mattpocock/skills | Configure this repo for the engineering skills — set up its issue tracker, triage label vocabulary, and domain doc layout. |
| `/gstack-upgrade` | garrytan/gstack | Upgrade gstack to the latest version. |

## Starting Direction / Human Helper 

Designed to ask questions and help focus the start of an idea into something complete.

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/grill-me` | mattpocock/skills | A relentless interview to sharpen a plan or design. |
| `/grill-with-docs` | mattpocock/skills | A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go. |
| `/office-hours` | garrytan/gstack | YC Office Hours — two modes. |
| `/codemyspec:product interview` | Code-My-Spec/plugins | Guided story interview that defines new stories and acceptance criteria, with writes proxied to the remote codemyspec server. |
| `/loop-me` | mattpocock/skills | Grill me about specs for the workflows I want to build, within this workspace. |
| `/plan-canvas` | affaan-m/ECC | Open plans and HTML artifacts in a local browser canvas where the human annotates elements, chats, and approves or requests changes without leaving the page. |
| `/napkin-sketch` | Aakash Gupta PM OS | ASCII wireframes + browser capture for design matching |
| `/wait-what` | mattpocock/skills | Stop. That last message did not land — re-pitch it. |
| `/ask-matt` | mattpocock/skills | Ask which skill or flow fits your situation. A router over the skills in this repo. |


## PRD

You have the idea now you need to firm up what the product will look like 

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/codemyspec:product` | Code-My-Spec/plugins | With no args it lists the product subcommands. Router only. |
| `/product-capability` | affaan-m/ECC | Translate PRD intent, roadmap asks, or product discussions into an implementation-ready capability plan that exposes constraints, invariants, interfaces, and unresolved decisions b |
| `/plan-devex-review` | garrytan/gstack | Interactive developer experience plan review. |
| `/plan-eng-review` | garrytan/gstack | Eng manager-mode plan review. |
| `/plan-design-review` | garrytan/gstack | Designer's eye plan review — interactive, like CEO and Eng review. |
| `/to-spec` | mattpocock/skills | Turn the current conversation into a spec and publish it to the project issue tracker — no interview, just synthesis of what you've already discussed. |
| `/spec` | garrytan/gstack | Turn vague intent into a precise, executable spec in five phases. |
| `/product-lens` | affaan-m/ECC | Use this skill to validate the "why" before building, run product diagnostics, and pressure-test product direction before the request becomes an implementation contract. |
| `/autoplan` | garrytan/gstack | Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk and runs them sequentially with auto-decisions using 6 decision principles. |
| `/accessibility` | affaan-m/ECC | Design, implement, and audit inclusive digital products using WCAG 2.2 Level AA |
| `/context-engineering:project-development` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for project-level decisions about LLM-powered systems: whether an LLM is the right primitive for the task at hand, the shape of a multi-stage batch or agent pipeline, token and |
| `/ralph-wiggum` | Aakash Gupta PM OS | Devil's advocate PRD/document reviewer with humor and sharp critique |
| `/regex-vs-llm-structured-text` | affaan-m/ECC | Decision framework for choosing between regex and LLM when parsing structured text — start with regex, add LLM only for low-confidence edge cases. |
| `/decision-doc` | Aakash Gupta PM OS | Document important product decisions. Creates decision logs with rationale, alternatives, and trade-offs. |
| `/journey-map` | Aakash Gupta PM OS | Create user journey maps and customer journey maps (dual mode) |
| `/prd-draft` | Aakash Gupta PM OS | Create a modern, AI-era PRD for features and initiatives. Guides through clarifying questions, generates draft, and offers multi-agent review. |
| `/prd-draft --ai` | Aakash Gupta PM OS | Create a modern, AI-era PRD for features and initiatives. Guides through clarifying questions, generates draft, and offers multi-agent review. |
| `/prd-draft --stage` | Aakash Gupta PM OS | Create a modern, AI-era PRD for features and initiatives. Guides through clarifying questions, generates draft, and offers multi-agent review. |
| `/prd-review-panel` | Aakash Gupta PM OS | Fans a PRD out to seven reviewer subagents in parallel (engineer, designer, executive, legal, UX research, skeptic, customer voice) and reports gaps, challenged assumptions and conflicts. |
| `/prd-review-panel --perspectives "eng,design,exec"` | Aakash Gupta PM OS | Runs only the named subset of the seven reviewers, cutting cost and time when you need specific angles. |
| `/write-prod-strategy` | Aakash Gupta PM OS | Product strategy docs using 7-component framework |



## Success Measurement
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/experiment-decision` | Aakash Gupta PM OS | Decide when to A/B test vs just ship. Framework for experiment planning and prioritization. |
| `/experiment-metrics` | Aakash Gupta PM OS | STEDII framework for selecting trustworthy experiment metrics. Ensures metric validity and reliability. |
| `/feature-metrics` | Aakash Gupta PM OS | Define success metrics using the STEDII framework for trustworthy experiment metrics. |
| `/feature-results` | Aakash Gupta PM OS | Post-launch analysis and results documentation. Document what shipped and what we learned. |
| `/impact-sizing` | Aakash Gupta PM OS | Quantify feature value with driver trees, confidence levels, and the 4-step sizing framework. |
| `/metrics-framework` | Aakash Gupta PM OS | Set up leading vs lagging indicators for product decisions. Framework for metric selection and tracking. |

## Research

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/codemyspec:product review` | Code-My-Spec/plugins | Same interview machinery in review mode: critiques existing stories for quality and completeness instead of authoring new ones. |
| `/domain-modeling` | mattpocock/skills | Build and sharpen a project's domain model. Use when the user wants to pin down domain terminology or a ubiquitous language, record an architectural decision, or when another skill |
| `/deep-research` | affaan-m/ECC | Multi-source deep research using firecrawl and exa MCPs. Searches the web, synthesizes findings, and delivers cited reports with source attribution. |
| `/find-docs` | zcaceres/skills | Retrieve authoritative, up-to-date documentation, API references, configuration details, and code examples for any developer technology (libraries, frameworks, languages, SDKs, API |
| `/research` | mattpocock/skills | Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. |
| `/research-ops` | affaan-m/ECC | Evidence-first current-state research workflow for ECC. Use when the user wants fresh facts, comparisons, enrichment, or a recommendation built from current public evidence and any |
| `/activation-analysis` | Aakash Gupta PM OS | Analyze user activation using Setup → Aha → Habit framework. Identifies activation bottlenecks. |
| `/benchmark-methodology` | affaan-m/ECC | Use after competitive-platform-analysis has produced a tiered competitor set. Scores each competitor across nine weighted dimensions (positioning, voice, visual craft, offer packag |
| `/competitive-platform-analysis` | affaan-m/ECC | Use when scoping a competitive landscape — identifying, categorising, and score-filtering a competitor set before any benchmarking begins. |
| `/competitive-report-structure` | affaan-m/ECC | Use after benchmark-methodology has produced scored competitor profile cards. Assembles findings into a decision-grade report: landscape map, competitor profiles, benchmarking matr |
| `/competitor-analysis` | Aakash Gupta PM OS | Deep competitive analysis + ongoing monitoring. Checks user research for competitor mentions, sales notes, existing analysis. |
| `/interview-guide` | Aakash Gupta PM OS | Create JTBD-based interview guides for user research. Structured questions for discovery interviews. |
| `/prototype-feedback` | Aakash Gupta PM OS | Build → review → iterate prototype workflow. Structured feedback collection and iteration. |
| `/user-interview` | Aakash Gupta PM OS | Systematically process user interviews to extract actionable insights. Batch processes interviews and generates research reports. |
| `/user-research-synthesis` | Aakash Gupta PM OS | Turn user interviews into actionable insights. Advanced synthesis techniques and frameworks. |

## Marketing
| Execution | Source (origin) | What it does |
|---|---|---|
| `/article-writing` | affaan-m/ECC | Write articles, guides, blog posts, tutorials, newsletter issues, and other long-form content in a distinctive voice derived from supplied examples or brand guidance. |
| `/brand-voice` | affaan-m/ECC | Build a source-derived writing style profile from real posts, essays, launch notes, docs, or site copy, then reuse that profile across content, outreach, and social workflows. |
| `/connections-optimizer` | affaan-m/ECC | Reorganize the user's X and LinkedIn network with review-first pruning, add/follow recommendations, and channel-specific warm outreach drafted in the user's real voice. |
| `/content-engine` | affaan-m/ECC | Create platform-native content systems for X, LinkedIn, TikTok, YouTube, newsletters, and repurposed multi-platform campaigns. |
| `/crosspost` | affaan-m/ECC | Multi-platform content distribution across X, LinkedIn, Threads, and Bluesky. Adapts content per platform using content-engine patterns. |
| `/lead-intelligence` | affaan-m/ECC | AI-native lead intelligence and outreach pipeline. Replaces Apollo, Clay, and ZoomInfo with agent-powered signal scoring, mutual ranking, warm path discovery, source-derived voice |
| `/social-graph-ranker` | affaan-m/ECC | Weighted social-graph ranking for warm intro discovery, bridge scoring, and network gap analysis across X and LinkedIn. |
| `/social-publisher` | affaan-m/ECC | Agent-driven scheduling and publishing of social media posts across 13 platforms via SocialClaw. |


## Initial Design

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/design-shotgun` | garrytan/gstack | Design shotgun: generate multiple AI design variants, open a comparison board, collect structured feedback, and iterate. |
| `/diagram` | garrytan/gstack | Turn an English description (or mermaid source) into a diagram triplet: the source, an editable .excalidraw file you can open |
| `/figma-use-slides` | anthropics/claude-plugins-official | This skill helps agents use Figma's use_figma MCP tool in the Slides context. Can be used alongside figma-use which has foundational context for using the use_figma tool. |
| `/frontend-slides` | affaan-m/ECC | Create stunning, animation-rich HTML presentations from scratch or by converting PowerPoint files. |
| `/acid-trip` | zcaceres/skills | Rolls a random Wikipedia article as subject plus random document_type and lineage, derives palette, typography, layout and mood, presents a brief, pauses, then realizes it. Default output is HTML. |
| `/acid-trip --paper` | zcaceres/skills | Same rolled trip, but realization goes through the Paper MCP tools directly into the active Paper canvas, with a provenance stamp and a spec-sheet artboard for the design system. |
| `/acid-trip --react` | zcaceres/skills | Same rolled trip, but writes acid-trip-<trip_id>.tsx to the cwd instead of HTML, assuming Tailwind and the motion library are available. |
| `/ui-design` | uizze.com | Design or refine intentional web and iOS interfaces, using compact UIZZE evidence only when it answers a concrete unresolved question. |
| `/ui-radar` | uizze.com | Find and compare real UI examples from UIZZE’s 800,000+ web and iOS screens. Use for UI inspiration, UI research, design references, comparable apps, user flows, layouts, navigatio |

## Business

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/plan-ceo-review` | garrytan/gstack | CEO/founder-mode plan review. |
| `/retro` | garrytan/gstack | Weekly engineering retrospective. |
| `/daily-plan` | Aakash Gupta PM OS | Generate PM daily plan with context |
| `/define-north-star` | Aakash Gupta PM OS | Identify and validate your North Star Metric. Aligns product strategy with key business metric. |
| `/expansion-strategy` | Aakash Gupta PM OS | Upsell, cross-sell, and account growth tactics. Framework for revenue expansion. |
| `/meeting-agenda` | Aakash Gupta PM OS | Create structured meeting agendas for effective collaboration |
| `/meeting-cleanup` | Aakash Gupta PM OS | Batch process multiple meetings from a single day. Consolidates action items and insights across meetings. |
| `/meeting-feedback` | Aakash Gupta PM OS | Post-meeting effectiveness feedback and continuous improvement |
| `/meeting-notes` | Aakash Gupta PM OS | Transform meeting transcripts into structured action items, decisions, and key insights. |
| `/retention-analysis` | Aakash Gupta PM OS | Cohort analysis and retention optimization framework. Identifies retention drivers and churn factors. |
| `/slack-message` | Aakash Gupta PM OS | Draft team communications for Slack. Creates clear, actionable messages for different contexts. |
| `/status-update` | Aakash Gupta PM OS | Generate stakeholder status updates. Creates clear, concise progress reports for different audiences. |
| `/strategy-sprint` | Aakash Gupta PM OS | Create product strategy in 1 day, 1 week, or 1 month timeframes. Progressive strategy development framework. |
| `/weekly-plan` | Aakash Gupta PM OS | Set next week's priorities |
| `/weekly-review` | Aakash Gupta PM OS | Review week's progress, meetings, learnings |

# Development Process
## Loop
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/context-engineering:long-horizon-prompting` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when writing, enhancing, or evaluating the launch prompt for a long-running autonomous agent or a parallel multi-agent orchestration attacking a hard problem: pseudo-formal tas |
| `/continuous-agent-loop` | affaan-m/ECC | Patterns for continuous autonomous agent loops with quality gates, evals, and recovery controls. |
| `/ralphinho-rfc-pipeline` | affaan-m/ECC | RFC-driven multi-agent DAG execution pattern with quality gates, merge queues, and work unit orchestration. |
| `/loop-design-check` | affaan-m/ECC | Design a goal-oriented agent loop, and review it for the ways loops go wrong — spinning and burning tokens, Goodhart-gaming the verifier, or running a wrong answer to completion. |
| `/team-agent-orchestration` | affaan-m/ECC | Run team-based orchestration for agent squads using work items, ownership, agent Kanban, merge gates, and control pane handoffs. |
| `/ecc-recipes <workflow description>` | affaan-m/ECC | Map a described workflow to the right ECC command-GROUP with run-order and stop condition, and browse all command-group recipe families. |



## Designer Implmentation

Take that PRD and turn it into a demo so you can continue to iterate

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/codemyspec:design` | Code-My-Spec/plugins | With no args it lists the available design subcommands. Router only, not a design pass. |
| `/codemyspec:design ui` | Code-My-Spec/plugins | DaisyUI design system interview that establishes the visual system. |
| `/anti-ui-slop` | uizze.com | With no argument it reads the routing reference and presents a context-aware menu, never auto-running a command. Pure router. |
| `/anti-ui-slop adapt [target]` | uizze.com | Fix: adapts a target for different devices and screen sizes, loading the native variant reference on iOS or Android. |
| `/anti-ui-slop animate [target]` | uizze.com | Enhance: adds purposeful animation and motion to a target. |
| `/anti-ui-slop audit [target]` | uizze.com | Evaluate: technical quality checks for accessibility, performance and responsiveness. Reports only; optimize fixes. |
| `/anti-ui-slop bolder [target]` | uizze.com | Refine: amplifies designs that read as safe or bland. Opposite of quieter. |
| `/anti-ui-slop clarify [target]` | uizze.com | Fix: improves UX copy, labels and error messages rather than visual styling. |
| `/anti-ui-slop colorize [target]` | uizze.com | Enhance: adds strategic color to a monochromatic or washed-out UI. |
| `/anti-ui-slop critique [target]` | uizze.com | Evaluate: UX design review with heuristic scoring, the subjective counterpart to audit. |
| `/anti-ui-slop delight [target]` | uizze.com | Enhance: adds personality and memorable touches beyond baseline correctness. |
| `/anti-ui-slop distill [target]` | uizze.com | Refine: strips a design to its essence and removes accumulated complexity. |
| `/anti-ui-slop document` | uizze.com | Build: generates a DESIGN.md from the existing project code, reading rather than writing UI. |
| `/anti-ui-slop extract [target]` | uizze.com | Build: pulls reusable tokens and components out of a target into the design system. |
| `/anti-ui-slop harden [target]` | uizze.com | Refine: makes a surface production ready by covering error states, i18n and edge cases. |
| `/anti-ui-slop init` | uizze.com | Build: captures durable product context into PRODUCT.md and records the platform. Most other subcommands assume it has run. |
| `/anti-ui-slop layout [target]` | uizze.com | Enhance: fixes spacing, rhythm and visual hierarchy specifically. Narrower than polish. |
| `/anti-ui-slop live` | uizze.com | Iterate: pick elements in the browser and it generates visual variants. The only interactive browser-driven subcommand. |
| `/anti-ui-slop onboard [target]` | uizze.com | Refine: designs first-run flows, empty states and activation paths. |
| `/anti-ui-slop optimize [target]` | uizze.com | Fix: diagnoses and fixes UI performance problems, where audit only reports them. |
| `/anti-ui-slop overdrive [target]` | uizze.com | Enhance: pushes a design past conventional limits. More extreme than bolder. |
| `/anti-ui-slop polish [target]` | uizze.com | Refine: final broad quality pass before shipping, covering what the narrower refine commands touch individually. |
| `/anti-ui-slop quieter [target]` | uizze.com | Refine: tones down aggressive or overstimulating designs. Inverse of bolder and overdrive. |
| `/anti-ui-slop shape [feature]` | uizze.com | Build: plans the UX and UI for a named feature before any code is written and owns task discovery before routing into new work. |
| `/anti-ui-slop typeset [target]` | uizze.com | Enhance: improves typographic hierarchy and font choices only. |
| `/design-consultation` | garrytan/gstack | Design consultation: understands your product, researches the landscape, proposes a complete design system (aesthetic, typography, color, layout, spacing, motion), and generates fo |
| `/design-html` | garrytan/gstack | Design finalization: generates production-quality Pretext-native HTML/CSS. |
| `/design-review` | garrytan/gstack | Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems, AI slop patterns, and slow interactions — then fixes them. |
| `/design-system` | affaan-m/ECC | Use this skill to generate or audit design systems, check visual consistency, and review PRs that touch styling. |
| `/figma-code-connect` | anthropics/claude-plugins-official | Creates and maintains Figma Code Connect template files that map Figma components to code snippets. |
| `/figma-create-new-file` | anthropics/claude-plugins-official | you MUST invoke this skill BEFORE every `create_new_file` tool call. NEVER call `create_new_file` directly without loading this skill first. |
| `/figma-design-to-code` | anthropics/claude-plugins-official | you MUST invoke this skill BEFORE calling the `get_design_context` Figma MCP tool. |
| `/figma-generate-design` | anthropics/claude-plugins-official | Use this skill alongside figma-use when the task involves translating an application page, view, or multi-section layout into Figma. |
| `/figma-generate-library` | anthropics/claude-plugins-official | Build or update a professional-grade design system in Figma from a codebase. Use when the user wants to create variables/tokens, build component libraries, create individual compon |
| `/figma-implement-motion` | anthropics/claude-plugins-official | Translates Figma motion and animations into production-ready application code. Use when implementing animation/motion from a Figma design — user mentions "implement this motion", " |
| `/figma-swiftui` | anthropics/claude-plugins-official | SwiftUI ↔ Figma translation. Use whenever the user mentions Swift, SwiftUI, iOS, iPhone, or iPad — in EITHER direction — translating a Figma design into SwiftUI (design → code), or |
| `/figma-use-figjam` | anthropics/claude-plugins-official | This skill helps agents use Figma's use_figma MCP tool in the FigJam context. Can be used alongside figma-use which has foundational context for using the use_figma tool. |
| `/figma-use-motion` | anthropics/claude-plugins-official | Motion / animation context for the `use_figma` MCP tool — animating Figma nodes via manual keyframes, animation styles, easing, and timeline duration. |
| `/frontend-a11y` | affaan-m/ECC | Accessibility patterns for React and Next.js — semantic HTML, ARIA attributes, form labeling, keyboard navigation, focus management, and screen reader support. |
| `/frontend-design-direction` | affaan-m/ECC | Set an ECC-specific frontend design direction for production UI work. Use when building or improving websites, dashboards, applications, components, landing pages, visual tools, or |
| `/make-interfaces-feel-better` | affaan-m/ECC | Apply concrete design-engineering details that make interfaces feel polished. Use when reviewing or improving UI spacing, typography, borders, shadows, motion, hit areas, icons, te |
| `/ui-ux-pro-max` | nextlevelbuilder/ui-ux-pro-max-skill | Design intelligence and automated design-system generation for professional UI/UX across platforms. https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | 


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
| `/supabase` | anthropics/claude-plugins-official | Use when doing ANY task involving Supabase. Triggers: Supabase products (Database, Auth, Edge Functions, Realtime, Storage, Vectors, Cron, Queues); client libraries and SSR integra |
| `/supabase-postgres-best-practices` | anthropics/claude-plugins-official | Postgres best practices maintained by Supabase, for Postgres running anywhere. Load this skill BEFORE writing or changing anything that lives in a Postgres database: creating or al |

# Code Architecture
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/architecture-decision-records` | affaan-m/ECC | Capture architectural decisions made during Claude Code sessions as structured ADRs. |
| `/codebase-design` | mattpocock/skills | Shared vocabulary for designing deep modules. Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code m |
| `/codemyspec:design architecture` | Code-My-Spec/plugins | Guided bounded-context session that lays out contexts and their dependency graph. Module boundaries, not visuals. |
| `/codemyspec:design strategy` | Code-My-Spec/plugins | Identifies open technical decisions and produces ADRs for them. Outputs decision records rather than a design. |

# Dev Tooling
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/mailtrap-email-integration` | affaan-m/ECC | Guides agents through integrating transactional email sending via Mailtrap's Email API, including sandbox testing, domain verification, and API authentication. |




## Requirements

The product is defined; turn it into developable chunks

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/codemyspec:product three-amigos <story_id>` | Code-My-Spec/plugins | Runs an Example Mapping / Three Amigos session on one story, pulling business, dev and test perspectives into concrete examples. Requires a story ID. |
| `/decompose [focus]` | zcaceres/skills | Break a problem into smaller pieces — subsystems that are easier to think about — and show how they relate. |
| `/intent-driven-development` | affaan-m/ECC | Turn ambiguous or high-impact product and engineering changes into scoped, verifiable acceptance criteria before or alongside implementation. |
| `/plan-orchestrate` | affaan-m/ECC | Read a plan document, decompose it into steps, design a per-step agent chain from the ECC catalogue, and emit ready-to-paste /orchestrate custom prompts. |
| `/wayfinder` | mattpocock/skills | Plan a huge chunk of work — more than one agent session can hold — as a shared map of decision tickets on your issue tracker, and resolve them one at a time until the way to the de |
| `/to-tickets` | mattpocock/skills | Break a plan, spec, or the current conversation into a set of tracer-bullet tickets, each declaring its blocking edges, published to the configured tracker — edges as text in one f |
| `/contract-first` | affaan-m/ECC | Use when multiple consumers and providers must evolve an API or event schema without field drift, integration surprises, or one side silently redefining the interface. |
| `/orch-add-feature` | affaan-m/ECC | Orchestrate building a brand-new feature end to end — research, plan, TDD implementation, review, and gated commit — by delegating each phase to the matching ECC agent. |
| `/orch-build-mvp` | affaan-m/ECC | Orchestrate bootstrapping a working MVP from a design or spec document — ingest the doc, plan thin vertical slices, scaffold the first end-to-end slice, then TDD-implement, review, |
| `/orch-change-feature` | affaan-m/ECC | Orchestrate altering an existing, working feature to new desired behavior — update its tests to the new spec, change the implementation to match, review, and gated commit. |
| `/orch-fix-defect` | affaan-m/ECC | Orchestrate fixing a bug — reproduce it as a failing regression test, fix to green, review, and gated commit — by delegating each phase to the matching ECC agent. |
| `/orch-pipeline` | affaan-m/ECC | Shared orchestration engine for the orch-* skill family. Defines the gated Research-Plan-TDD-Review-Commit pipeline, the size classifier, the agent map, and the two human gates tha |
| `/orch-refine-code` | affaan-m/ECC | Orchestrate a behavior-preserving refactor — confirm tests are green, restructure without changing behavior, keep tests green, review, and gated commit. |
| `/triage` | mattpocock/skills | Move issues and external PRs through a state machine of triage roles — categorise, verify, grill if needed, and write agent-ready briefs. |
| `/create-tickets` | Aakash Gupta PM OS | Create tickets via Linear/Jira MCP or generate formatted ticket text |
| `/prioritize` | Aakash Gupta PM OS | Classify PM tasks using LNO Framework (Leverage/Neutral/Overhead) to focus on high-impact work. |

## Developing

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/api-connector-builder` | affaan-m/ECC | Build a new API connector or provider by matching the target repo's existing integration pattern exactly. |
| `/code-first-draft` | Aakash Gupta PM OS | Initial feature implementation |
| `/code-first-draft --explore-only` | Aakash Gupta PM OS | Initial feature implementation |
| `/codemyspec:develop` | Code-My-Spec/plugins | With no args it lists the develop subcommands. Router only. |
| `/codemyspec:develop context` | Code-My-Spec/plugins | Drives one Elixir context module through the spec, test, then code lifecycle, spawning subagents per step. |
| `/codemyspec:develop liveview` | Code-My-Spec/plugins | Same full lifecycle specialized for a Phoenix LiveView module; differs from context only in target layer and templates. |
| `/codemyspec:implement [start\|stop]` | Code-My-Spec/plugins | Implement the next requirement task from the codemyspec plan; start or stop the loop. |
| `/codemyspec:next` | Code-My-Spec/plugins | Find and start the next requirement task in one gesture. Use after each completed task as your single onboarding instruction. |
| `/codemyspec:sync` | Code-My-Spec/plugins | Sync project components and regenerate architecture views. Use after git pulls, before design sessions, or when views feel stale. |
| `/dev-as-ai` | zacgoodwin/zg-skills | Switch this repo's git commit identity and the gh CLI account to the AI dev bot (tordek-ai). |
| `/dev-as-human` | zacgoodwin/zg-skills | Switch this repo's git commit identity and the gh CLI account back to Zac Goodwin. |
| `/generate-ai-prototype` | Aakash Gupta PM OS | Generate v0.dev, Lovable, or Bolt.new prompts for AI-powered prototyping |
| `/git-workflow` | affaan-m/ECC | Git workflow patterns including branching strategies, commit conventions, merge vs rebase, conflict resolution, and collaborative development best practices for teams of all sizes. |
| `/github-ops` | affaan-m/ECC | GitHub repository operations, automation, and management. Issue triage, PR management, CI/CD operations, release management, and security monitoring using the gh CLI. |
| `/implement` | mattpocock/skills | Implement a piece of work based on a spec or set of tickets. |
| `/pair-agent` | garrytan/gstack | Pair a remote AI agent with your browser. |
| `/prototype` | mattpocock/skills | Build a throwaway prototype to answer a design question. Use when the user wants to sanity-check whether a state model or logic feels right, or explore what a UI should look like. |
| `/search-first` | affaan-m/ECC | Research-before-coding workflow. Search for existing tools, libraries, and patterns before writing custom code. |
| `/tdd` | mattpocock/skills | Test-driven development. Use when the user wants to build features or fix bugs test-first, mentions "red-green-refactor", or wants integration tests. |
| `/tdd-workflow <path/to/*.plan.md>` | affaan-m/ECC | Use this skill when writing new features, fixing bugs, or refactoring code. Enforces test-driven development with 80%+ coverage including unit, integration, and E2E tests. |
| `/terminal-ops` | affaan-m/ECC | Evidence-first repo execution workflow for ECC. Use when the user wants a command run, a repo checked, a CI failure debugged, or a narrow fix pushed with exact proof of what was ex |
| `/stack-ship` | zacgoodwin/zg-skills | Ship the current stax branch through the quality pipeline: gate on roborev per-commit reviews (bounded auto-fix loop on failure), squash-submit one clean commit upstream as a PR vi |
| `/error-handling` | affaan-m/ECC | Patterns for robust error handling across TypeScript, Python, and Go. Covers typed errors, error boundaries, retries, circuit breakers, and user-facing error messages. |

## Testing
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/verification-loop` | affaan-m/ECC | A comprehensive verification system for Claude Code sessions. |
| `/ai-regression-testing` | affaan-m/ECC | Regression testing strategies for AI-assisted development. Sandbox-mode API testing without database dependencies, automated bug-check workflows, and patterns to catch AI blind spo |
| `/browser-qa` | affaan-m/ECC | Use this skill to automate visual testing and UI interaction verification using browser automation after deploying features. |
| `/codemyspec:qa fix [severity]` | Code-My-Spec/plugins | Writes actual code fixes for issues already accepted in triage, optionally filtered to a minimum severity. Does not test the app. |
| `/codemyspec:qa integrations` | Code-My-Spec/plugins | Produces a plan for testing third-party integrations rather than running a QA pass. |
| `/codemyspec:qa story <id>` | Code-My-Spec/plugins | QA tests one specific story by ID against its acceptance criteria. Narrower and cheaper than full-app QA. |
| `/codemyspec:qa triage [severity]` | Code-My-Spec/plugins | Walks the open issue list accepting or dismissing each one, optionally filtered to a minimum severity. Sits between finding issues and qa fix. |
| `/e2e-testing` | affaan-m/ECC | Playwright E2E testing patterns, Page Object Model, configuration, CI/CD integration, artifact management, and flaky test strategies. |
| `/qa` | garrytan/gstack | Systematically QA test a web application and fix bugs found. |
| `/qa-only` | garrytan/gstack | Report-only QA testing. |
| `/diagnosing-bugs` | mattpocock/skills | Diagnosis loop for hard bugs and performance regressions. Use when the user says "diagnose"/"debug this", or reports something broken/throwing/failing/slow. |
| `/investigate` | garrytan/gstack | Systematic debugging with root cause investigation. |




## Code Review
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/codex` | garrytan/gstack | Codex CLI wrapper with review, challenge and consult modes. With no args it auto-detects: offers to review or challenge a branch diff, else the newest plan file, else asks what to send. |
| `/codex review --xhigh` | garrytan/gstack | Normal pass/fail diff review but raises model_reasoning_effort from high to xhigh, roughly 23x more tokens and can run 50+ minutes. Opt in only when you want maximum reasoning and will wait. |
| `/santa-method` | affaan-m/ECC | Multi-agent adversarial verification with convergence loop. Two independent review agents must both pass before output ships. |
| `/code-review` | mattpocock/skills | Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes — Standards (does the code follow this repo's documented coding standards?) and Spec (doe |
| `/review` | garrytan/gstack | Pre-landing PR review. |
| `/z-adversarial-review` | zacgoodwin/zg-skills | Blinded adversarial review for any GitHub PR. Assembles a blinded four-key input (spec, acceptance criteria, diff, throwaway worktree), spawns one fresh reviewer agent holding noth |

RoboRev is it's own specific thing that automates PRs
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/roborev-fix` | roborev-dev/roborev | Use only for a current operative request that explicitly invokes /roborev-fix, or a direct Agent Hook instruction; do not invoke from literal syntax in quoted, pasted, or historica |
| `/roborev-lookahead-review` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-lookahead-review |
| `/roborev-lookahead-review-branch` | roborev-dev/roborev | Runs roborev review --branch --wait --type lookahead over every commit on the current branch, not a single commit, hunting temporal leakage. |
| `/roborev-lookahead-review-branch --base <branch>` | roborev-dev/roborev | Validates the ref, then computes the branch's commit range against that base instead of the default base branch. An invalid ref aborts the run. |
| `/roborev-refine` | roborev-dev/roborev | Closes the review-fix loop: review, fix findings, commit, re-review, repeat until all pass or the cap is hit. Unlike /roborev-fix, which is single-pass with no re-review. |
| `/roborev-refine --since <sha> --max-iterations <n>` | roborev-dev/roborev | --since restricts refine to commits after that sha and is required on the default branch; --max-iterations caps the fix-review cycles, default 10. |
| `/roborev-respond` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-respond |
| `/roborev-review` | roborev-dev/roborev | Validates the target commit, launches roborev review --wait as a background task, and presents the findings. Explicit invocation only; "review this commit" in prose must not trigger it. |
| `/roborev-review --type design` | roborev-dev/roborev | Passes --type design through so the review runs the design panel instead of the default general review. /roborev-design-review is the shorthand. |
| `/roborev-review --type lookahead` | roborev-dev/roborev | Runs a time-series look-ahead review checking whether the change uses information not yet available at the point in time it represents. /roborev-lookahead-review is the equivalent. |
| `/roborev-snooze` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-snooze |

## Deploying

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/resolving-merge-conflicts` | mattpocock/skills | Use when you need to resolve an in-progress git merge/rebase conflict. |
| `/canary` | garrytan/gstack | Post-deploy visual monitor via the browse daemon. The normal shape is /canary <url>. |
| `/canary <url>` | garrytan/gstack | Monitors the URL for 10 minutes after a deploy, screenshotting pages, counting console errors and checking load times against the captured baseline. |
| `/canary <url> --baseline` | garrytan/gstack | Captures pre-deploy screenshots, console error counts and load times into .gstack/canary-reports/baselines. Run BEFORE deploying, not after. |
| `/canary <url> --duration 5m` | garrytan/gstack | Replaces the default 10 minute watch window with a custom duration, anywhere from 1m to 30m. |
| `/canary <url> --pages <paths>` | garrytan/gstack | Overrides navigation auto-discovery with an explicit comma separated path list for both baseline capture and monitoring. |
| `/canary <url> --quick` | garrytan/gstack | Does one health check pass and exits instead of monitoring for the full duration. |
| `/canary-watch` | affaan-m/ECC | Single-pass post-deploy smoke check of a URL: HTTP status, console errors, network failures, LCP/CLS/INP, key content, API SLAs, static assets and SSE streams, reported against critical/warning/info thresholds. |
| `/canary-watch --compare` | affaan-m/ECC | Diff mode taking two URLs, typically staging and production, and comparing their check results against each other instead of one URL against a stored baseline. |
| `/land-and-deploy` | garrytan/gstack | Land and deploy workflow. |
| `/landing-report` | garrytan/gstack | Read-only queue dashboard for workspace-aware ship. |
| `/ship` | garrytan/gstack | Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION, update CHANGELOG, commit, push, create PR. |
| `/launch-checklist` | Aakash Gupta PM OS | Generates a prioritized launch checklist with owners, dependencies, due dates and a flagged critical path, saved to outputs/launches/. Asks which of three launch types applies. |
| `/launch-checklist --template major` | Aakash Gupta PM OS | Skips the launch-type question and uses the major template, adding press and media, investor and board comms, partner enablement and expanded marketing. |
| `/launch-checklist --template regulatory` | Aakash Gupta PM OS | Uses the regulatory template: expanded legal and compliance, audit trail, certification process and regulatory submission items. |
| `/launch-checklist --template small` | Aakash Gupta PM OS | Uses the small-feature template for builds under two weeks: no beta section, simplified compliance, lighter comms plan. |
| `/opensource-pipeline` | affaan-m/ECC | Open-source pipeline: fork, sanitize, and package private projects for safe public release. |



## Codebase Health

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/improve-codebase-architecture` | mattpocock/skills | Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick. |
| `/codemyspec:develop refactor [ModuleName]` | Code-My-Spec/plugins | Interactive refactoring session on existing code for the named module, reworking rather than generating. |
| `/clean-ai-slop` | zcaceres/skills | Find AI-generated noise on the current branch — tombstone comments, restating-the-code comments, callsite-reference comments, unused imports, dead internal symbols — propose each f |
| `/health` | garrytan/gstack | Code quality dashboard. |
| `/ponytail:ponytail-audit` | DietrichGebert/ponytail | Whole-repo audit for over-engineering. Like ponytail-review, but scans the entire codebase instead of a diff: a ranked list of what to delete, simplify, or replace with stdlib/nati |
| `/ponytail:ponytail-review` | DietrichGebert/ponytail | Code review focused exclusively on over-engineering. Finds what to delete: reinvented standard library, unneeded dependencies, speculative abstractions, dead flexibility. |
| `/production-audit` | affaan-m/ECC | Local-evidence production readiness audit for shipped apps, pre-launch reviews, post-merge checks, and "what breaks in prod?" questions without sending repo data to an external aud |
| `/quality-dead-code-analyzer` | zcaceres/skills | Analyze a codebase for dead code, duplicates, and circular dependencies using knip, jscpd, and madge, then validate findings to filter false positives. |
| `/investigate-repo <repo-url-or-path>` | zcaceres/skills | Audit an unfamiliar code repo (GitHub URL) for malicious patterns — clone shallow, grep, emit a verdict with file:line evidence. |
| `/repo-scan` | affaan-m/ECC | Cross-stack source code asset audit — classifies every file, detects embedded third-party libraries, and delivers actionable four-level verdicts per module with interactive HTML re |
| `/ui-slop-score` | uizze.com | Review a rendered web or mobile interface and score how generic it looks. Use for UI critique, design review, visual polish, screenshot review, pre-merge checks, and requests to fi |
| `/ponytail:ponytail-debt` | DietrichGebert/ponytail | Harvest every `ponytail:` comment in the codebase into a debt ledger, so the deliberate shortcuts and deferrals ponytail leaves behind get tracked instead of rotting into "later me |
| `/devex-review` | garrytan/gstack | Live developer experience audit. |
| `/plankton-code-quality` | affaan-m/ECC | Write-time code quality enforcement using Plankton — auto-formatting, linting, and Claude-powered fixes on every file edit via hooks. |



## Mobile App Specific
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/ios-clean` | garrytan/gstack | Remove the DebugBridge SPM package and all #if DEBUG wiring from an iOS app. |
| `/ios-design-review` | garrytan/gstack | Visual design audit for iOS apps on real hardware. |
| `/ios-fix` | garrytan/gstack | Autonomous iOS bug fixer. |
| `/ios-qa` | garrytan/gstack | Live-device iOS QA for SwiftUI apps. |
| `/ios-sync` | garrytan/gstack | Regenerate the iOS debug bridge against the latest upstream gstack templates. |


## Documentation
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/document-release` | garrytan/gstack | Post-ship documentation update. |
| `/code-tour [path-to-tour]` | affaan-m/ECC | Walk an unfamiliar codebase and write a concise CODE_TOUR.md onboarding guide — the key components, a Mermaid diagram of how they connect, and the areas worth a closer look to unde |
| `/codebase-onboarding` | affaan-m/ECC | Analyze an unfamiliar codebase and generate a structured onboarding guide with architecture map, key entry points, conventions, and a starter CLAUDE.md. |
| `/make-pdf` | garrytan/gstack | Turn any markdown file into a publication-quality PDF. |
| `/ui-demo` | affaan-m/ECC | Record polished UI demo videos using Playwright. Use when the user asks to create a demo, walkthrough, screen recording, or tutorial video of a web application. |
| `/document-generate` | garrytan/gstack | Generate missing documentation from scratch for a feature, module, or entire project. |
| `/quality-docs-update` | zcaceres/skills | Audit project documentation against the current state of the codebase and produce a revision plan. |
| `/writing-for-agents` | mattpocock/skills | Writing documents for agents. Use when creating or editing skills, or modifying AGENTS.md or CLAUDE.md. |
| `/book_to_skill` |  virgiliojr94/book-to-skill | Turn PDF and docs folder into a reference skill |

Graphify is it's own specific thing
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/graphify` | safishamsi/graphify | Builds a knowledge graph of the current directory: detect files, extract nodes and edges, cluster communities, write graphify-out/ with graph.json, GRAPH_REPORT.md and an HTML viz. If graph.json already exists and the input is a question, it answers from the graph instead. |
| `/graphify --help` | safishamsi/graphify | Prints the SKILL.md Usage block verbatim and stops. Runs no commands and does no file detection. |
| `/graphify <path>` | safishamsi/graphify | Same pipeline but scans the given directory or GitHub URL instead of the cwd. A URL is cloned first, optionally at a branch via --branch. |
| `/graphify <path> --cluster-only` | safishamsi/graphify | Skips detection and extraction and re-runs community detection on the existing graph, regenerating the report, graph.json and graph.html. Self-contained; do not follow with the normal build steps. |
| `/graphify <path> --directed` | safishamsi/graphify | Builds a DiGraph preserving edge direction instead of the default undirected graph. Must be repeated on later --update runs or the rebuild silently reverts to undirected. |
| `/graphify <path> --falkordb` | safishamsi/graphify | Writes graphify-out/cypher.txt as OpenCypher statements for FalkorDB without loading anything. Use --falkordb-push to actually load a graph. |
| `/graphify <path> --falkordb-push` | safishamsi/graphify | Pushes the graph into a running FalkorDB over the given URI (default falkordb://localhost:6379, graph name graphify). Uses MERGE so re-runs do not duplicate nodes. |
| `/graphify <path> --graphml` | safishamsi/graphify | Adds a graph.graphml export for desktop tools like Gephi and yEd, on top of the default outputs. |
| `/graphify <path> --html` | safishamsi/graphify | Explicit no-op, since HTML is generated on every default run. Exists only so the flag does not error. |
| `/graphify <path> --mcp` | safishamsi/graphify | Starts a graphify MCP stdio server after the build so other agents can query the graph as a tool, instead of ending at the report. |
| `/graphify <path> --mode <mode>` | safishamsi/graphify | Only deep is documented: extraction becomes more aggressive about INFERRED edges such as indirect dependencies and sets DEEP_MODE=true on every extraction subagent. |
| `/graphify <path> --neo` | safishamsi/graphify | Spelled --neo4j on disk: exports graphify-out/cypher.txt for manual Neo4j import. Sibling --neo4j-push <uri> loads directly into a live instance (default bolt://localhost:7687) using MERGE. |
| `/graphify <path> --no-viz` | safishamsi/graphify | Suppresses HTML visualization, leaving just the report and graph.json. The one flag that removes a default output. |
| `/graphify <path> --obsidian` | safishamsi/graphify | Additionally exports an Obsidian vault, one markdown file per node. --obsidian-dir <path> redirects it into an existing vault. |
| `/graphify <path> --svg` | safishamsi/graphify | Adds a graph.svg export for embedding in Notion or GitHub, on top of the default HTML. |
| `/graphify <path> --update` | safishamsi/graphify | Incremental rebuild that re-extracts only files new or changed since the last manifest, handles deletions, and rewrites the manifest for the next diff. |
| `/graphify <path> --watch` | safishamsi/graphify | Background watcher with a 3 second debounce. Code changes trigger an immediate AST re-extract and re-cluster with no LLM; doc, paper or image changes only set a needs_update flag. |
| `/graphify <path> --whisper-model <m>` | safishamsi/graphify | Overrides the default base Whisper model via GRAPHIFY_WHISPER_MODEL for video and audio transcription, trading speed for accuracy. Affects only the transcription step. |
| `/graphify <path> --wiki` | safishamsi/graphify | Builds an agent-crawlable wiki with index.md plus one article per detected community. Must run before cleanup while .graphify_labels.json still exists. |

## Security
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/cso` | garrytan/gstack | Full security audit, all phases 0-14, with an 8/10 confidence gate so only high-confidence findings reach the report. Reports only, never edits code. |
| `/cso --code` | garrytan/gstack | Narrows the audit to application code: LLM/AI security, OWASP, STRIDE and data classification phases. Skips secrets, CI/CD, infra and webhook phases. |
| `/cso --comprehensive` | garrytan/gstack | Same all-phase sweep but drops the confidence gate from 8/10 to 2/10, surfacing many more findings marked TENTATIVE. Meant as a monthly deep scan. |
| `/cso --diff` | garrytan/gstack | Constrains every phase to files and commits changed on the current branch versus base instead of the whole repo. The one flag combinable with any scope flag. |
| `/cso --infra` | garrytan/gstack | Limits the audit to infrastructure: stack detection, attack surface, secrets archaeology, dependency supply chain, CI/CD, shadow infra and webhooks. Also blocks auto-discarding CI/CD findings. |
| `/cso --owasp` | garrytan/gstack | Runs only the OWASP Top 10 phase plus the mandatory setup and reporting phases. Skips secrets, supply chain, CI/CD, STRIDE and data classification. |
| `/cso --scope <area>` | garrytan/gstack | Focuses the audit on one named domain such as auth rather than a phase group. Mutually exclusive with the other scope flags. |
| `/cso --skills` | garrytan/gstack | Runs only the skill supply chain scan of installed agent skills plus setup and reporting phases. Ignores application code and infra entirely. |
| `/cso --supply-chain` | garrytan/gstack | Runs only the dependency supply chain phase plus setup and reporting. Answers "are my packages safe" without the rest of the audit. |
| `/defi-amm-security` | affaan-m/ECC | Security checklist for Solidity AMM contracts, liquidity pools, and swap flows. Covers reentrancy, CEI ordering, donation or inflation attacks, oracle manipulation, slippage, admin |
| `/security-gitleaks` | zcaceres/skills | Set up gitleaks secret-scanning on a repo. Scans history for existing leaks first — stops if dirty, because installing CI on top of a polluted history makes CI permanently red. |
| `/security-openssf` | zcaceres/skills | Same as the install subcommand, which is the default. Hard-refuses on private or internal repos. |
| `/security-openssf fix` | zcaceres/skills | Turns an existing Scorecard run's findings into a bucketed remediation plan, applies the file-based fixes and offers the settings-based ones. Remediates an installed Scorecard rather than scaffolding one. |
| `/security-openssf install` | zcaceres/skills | Phase 1 only: installs the workflow with publish_results false so SARIF findings stay private in the Security tab. Will not flip to publish_results true or add the README badge in the same session unless asked. |
| `/security-review` | affaan-m/ECC | Use this skill when adding authentication, handling user input, working with secrets, creating API endpoints, or implementing payment/sensitive features. |
| `/security-scan` | affaan-m/ECC | Scan your Claude Code configuration (.claude/ directory) for security vulnerabilities, misconfigurations, and injection risks using AgentShield. |



## Product Health
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/benchmark` | garrytan/gstack | Performance audit driven by the browse daemon. Without a URL it needs --diff or --trend; the normal shape is /benchmark <url>. |
| `/benchmark --diff` | garrytan/gstack | Restricts the benchmark to pages affected by files changed on the current branch versus base, rather than the full discovered page list. |
| `/benchmark --trend` | garrytan/gstack | Skips measurement and prints a table of FCP, LCP, bundle size, request count and grade across the last several stored runs. |
| `/benchmark <url>` | garrytan/gstack | Navigates the URL with the browse daemon, collects TTFB, FCP, LCP, DOM timings, resource waterfall and bundle sizes, and compares against the saved baseline. |
| `/benchmark <url> --baseline` | garrytan/gstack | Captures current numbers as the reference point in .gstack/benchmark-reports/baselines instead of comparing. Run before the changes you want to measure. |
| `/benchmark <url> --pages <paths>` | garrytan/gstack | Overrides page auto-discovery with an explicit comma separated path list such as /,/dashboard,/api/health. |
| `/benchmark <url> --quick` | garrytan/gstack | Single-pass timing check with no stored baseline and no comparison, for a fast "how slow is it right now" answer. |
| `/quality-project-health [focus]` | zcaceres/skills | Assess the current project's repo and work-tracker status, then rate overall project health from 0-10. |

## Agent Safety
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/careful` | garrytan/gstack | Safety guardrails for destructive commands. |
| `/freeze` | garrytan/gstack | Restrict file edits to a specific directory for the session. |
| `/guard` | garrytan/gstack | Full safety mode: destructive command warnings + directory-scoped edits. |
| `/unfreeze` | garrytan/gstack | Clear the freeze boundary set by /freeze, allowing edits to all directories again. |
| `/delivery-gate` | affaan-m/ECC | Stop hook that blocks Claude from finishing until quality checks pass. Detects rationalization patterns (surface text heuristics), stale learning logs (filesystem mtime), and low d |
| `/quality-cli-agent-friendly-audit` | zcaceres/skills | Audit a CLI tool against the agent-friendliness checklist from Zbigniew Sobiecki's "Building Agent-Friendly CLIs". |


## Agent Only Assist

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/council` | affaan-m/ECC | Convene a four-voice council for ambiguous decisions, tradeoffs, and go/no-go calls. |
| `/browse` | garrytan/gstack | Fast headless browser for QA testing and site dogfooding. |
| `/open-gstack-browser` | garrytan/gstack | Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in. |
| `/scrape` | garrytan/gstack | Pull data from a web page. |
| `/skillify` | garrytan/gstack | Codify the most recent successful /scrape flow into a permanent browser-skill on disk. |
| `/figma-generate-diagram` | anthropics/claude-plugins-official | MANDATORY prerequisite — load this skill BEFORE every `generate_diagram` tool call. |
| `/figma-use` | anthropics/claude-plugins-official | you MUST invoke this skill BEFORE every `use_figma` tool call. NEVER call `use_figma` directly without loading this skill first. |
| `/context-engineering:filesystem-context` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when agent work needs file-backed context: durable scratchpads, tool-output offloading, just-in-time discovery, cross-agent handoff files, filesystem memory, or cleanup policie |
| `/context-engineering:latent-briefing` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when the user asks to "share memory between agents", "KV cache compaction for multi-agent", "orchestrator worker context", "latent briefing", "reduce worker tokens", "cross-age |
| `/parallel-execution-optimizer` | affaan-m/ECC | Use when the user wants a task done much faster through parallel work, concurrent agents, batched tool calls, isolated worktrees, or many independent verification lanes without los |
| `/gstack` | garrytan/gstack | Router for the gstack skill suite. |
| `/hookify-rules` | affaan-m/ECC | Use when the user asks to create a hookify rule, write a hook rule, configure hookify, add a hookify rule, or needs guidance on hookify rule syntax and patterns. |
| `/plan-tune` | garrytan/gstack | Self-tuning question sensitivity + developer psychographic for gstack (v1: observational). |
| `/grilling` | mattpocock/skills | Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases. |
| `/wizard` | mattpocock/skills | Generate an interactive bash wizard that walks a human through steps only they can perform. |

# Scaffolding and Harness

## Agents and Personas 

See Agents Readme

## Harness Development 

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/agent-architecture-audit` | affaan-m/ECC | Full-stack diagnostic for agent and LLM applications. Audits the 12-layer agent stack for wrapper regression, memory pollution, tool discipline failures, hidden repair loops, and r |
| `/agent-harness-construction` | affaan-m/ECC | Design and optimize AI agent action spaces, tool definitions, and observation formatting for higher completion rates. |
| `/agent-introspection-debugging` | affaan-m/ECC | Structured self-debugging workflow for AI agent failures using capture, diagnosis, contained recovery, and introspection reports. |
| `/agent-self-evaluation` | affaan-m/ECC | Use after completing any non-trivial task. The agent self-rates its output on 5 axes — accuracy, completeness, clarity, actionability, conciseness — with concrete evidence per crit |
| `/agentic-engineering` | affaan-m/ECC | Operate as an agentic engineer using eval-first execution, decomposition, and cost-aware model routing. |
| `/autonomous-loops` | affaan-m/ECC | Patterns and architectures for autonomous Claude Code loops — from simple sequential pipelines to RFC-driven multi-agent DAG systems. |
| `/context-engineering:advanced-evaluation` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for advanced LLM evaluation: LLM-as-judge systems, direct scoring, pairwise comparison, rubric calibration, evaluator bias mitigation, confidence scoring, and automated quality |
| `/context-engineering:bdi-mental-states` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when modeling agent mental states with BDI concepts: beliefs, desires, intentions, RDF-to-belief transformations, rational agency traces, cognitive agents, BDI ontologies, and |
| `/context-engineering:evaluation` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when building agent evaluation systems: deterministic checks, regression suites, multi-dimensional rubrics, quality gates, production monitoring, baseline comparison, and outco |
| `/context-engineering:harness-engineering` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when designing autonomous agent harnesses: research loops, evaluation scaffolds, locked and editable surfaces, durable logs, novelty gates, pruning, rollback, PR preparation, a |
| `/context-engineering:hosted-agents` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when designing hosted or background agent infrastructure: sandboxed execution, remote coding environments, warm pools, session persistence, multiplayer collaboration, self-spaw |
| `/context-engineering:self-improvement-loops` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when the harness, scaffold, workflow, or optimizer itself is the optimization target: recursive self-improvement (RSI) loops, meta-harnesses, self-improving harnesses that mine |
| `/context-engineering:tool-design` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for the tool-interface layer of an agent system specifically: writing tool descriptions agents can route on, designing tool schemas and response formats, naming conventions, ac |
| `/dynamic-workflow-mode` | affaan-m/ECC | Design task-local harnesses, eval gates, and reusable skill extraction for Claude dynamic workflow mode and other adaptive agent harnesses. |
| `/gan-style-harness` | affaan-m/ECC | GAN-inspired Generator-Evaluator agent harness for building high-quality applications autonomously. |
| `/claude-md-improver` | anthropics/claude-plugins-official | Audit and improve CLAUDE.md files in repositories. Use when user asks to check, audit, update, improve, or fix CLAUDE.md files. |

## Harness Setup
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/optimize-permissions` | zcaceres/skills | Scan recent conversation transcripts for safe commands that could be auto-allowed by your CLI agent (Claude Code, Codex, Cursor, …), preview the proposed allowlist changes, then wr |
| `/optimize-skill-activation` | zcaceres/skills | Audit installed skills and right-size each one's activation mode — slash-only, model-invocable (name+description in context), or eager-loaded (full body up front). |
| `/skill-library` | affaan-m/ECC | Router into the parked skill/agent library (.claude/skill-library/, .claude/agent-library/). |
| `/skill-scout` | affaan-m/ECC | Search existing local, marketplace, GitHub, and web skill sources before creating a new skill. |
| `/skill-stocktake` | affaan-m/ECC | Use when auditing Claude skills and commands for quality. Supports Quick Scan (changed skills only) and Full Stocktake modes with sequential subagent batch evaluation. |

## Token Savings
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/context-budget` | affaan-m/ECC | Inventories agents, skills, rules, MCP servers and the CLAUDE.md chain, estimates tokens for each, classifies as always/sometimes/rarely needed, and reports prioritized savings. |
| `/context-budget --verbose` | affaan-m/ECC | Adds per-file token counts, a line-by-line breakdown of the heaviest files, the exact duplicated lines between overlapping components, and per-tool MCP schema sizes. For pinpointing offenders, not routine audits. |
| `/cost-tracking` | affaan-m/ECC | Track and report Claude Code token usage, spending, and budgets from the local ECC cost-tracker metrics log. |
| `/ecc-tools-cost-audit` | affaan-m/ECC | Evidence-first ECC Tools burn and billing audit workflow. Use when investigating runaway PR creation, quota bypass, premium-model leakage, duplicate jobs, or GitHub App cost spikes |
| `/ponytail:ponytail-gain` | DietrichGebert/ponytail | Show ponytail's measured impact as a compact scoreboard: less code, less cost, more speed, from the benchmark medians. |
| `/ponytail:ponytail` | DietrichGebert/ponytail | Switches the session into persistent lazy-senior-dev mode at level full: YAGNI, then stdlib, then native, then existing dependency, then one line, before any new code. |
| `/ponytail:ponytail full` | DietrichGebert/ponytail | The default intensity. Enforces the full ladder, stdlib and native first, shortest working diff and shortest explanation. |
| `/ponytail:ponytail lite` | DietrichGebert/ponytail | The gentlest level. Builds exactly what was asked, then names the lazier alternative in one line and lets you choose rather than imposing it. |
| `/ponytail:ponytail ultra` | DietrichGebert/ponytail | YAGNI extremist. Deletion before addition; ships the one-liner and challenges whether the rest of the requirement should exist at all. |
| `/token-budget-advisor` | affaan-m/ECC | Offers the user an informed choice about how much response depth to consume before answering. |
| `/workspace-surface-audit` | affaan-m/ECC | Audit the active repo, MCP servers, plugins, connectors, env surfaces, and harness setup, then recommend the highest-value ECC-native skills, hooks, agents, and operator workflows. |


## Anti Drift / Anti Hallucinations

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/growth-log` | affaan-m/ECC | Use after a complex task, failure, or when reviewing what was learned. Teaches how to write growth logs that extract reusable patterns — not diary entries. |
| `/benchmark-models` | garrytan/gstack | Cross-model benchmark for gstack skills. |
| `/eval-harness` | affaan-m/ECC | Formal evaluation framework for Claude Code sessions implementing eval-driven development (EDD) principles |


## Context Setting / Memory

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/claude-handoff` | mattpocock/skills | Hand the current conversation off to a fresh background agent that picks up the work immediately. |
| `/context-restore` | garrytan/gstack | Restore working context saved earlier by /context-save. |
| `/context-save` | garrytan/gstack | Captures branch, git status, diff stat, recent log, decisions and remaining work into a timestamped checkpoint for /context-restore. Optional title names it; never touches code. |
| `/context-save list --all` | garrytan/gstack | Lists saved checkpoints from every branch instead of the default current-branch view, adding a Branch column. |
| `/learn` | garrytan/gstack | Manage project learnings. |
| `/handoff` | mattpocock/skills | Compact the current conversation into a handoff document for another agent to pick up. |
| `/strategic-compact` | affaan-m/ECC | Suggests manual context compaction at logical intervals to preserve context through task phases rather than arbitrary auto-compaction. |
| `/sync-gbrain` | garrytan/gstack | Incremental sync of the gbrain index with this repo's code via an mtime fast path (about 50ms steady state), then refreshes the AGENTS.md guidance on when to prefer gbrain search over Grep. |
| `/sync-gbrain --audit` | garrytan/gstack | Read-only: lists gstack-owned brain pages per project, summarizes by page type, and flags cached salience entries outside the allowlist. No sync stages run. |
| `/sync-gbrain --code-only` | garrytan/gstack | Runs only the code indexing stage, skipping the memory and brain-sync stages the default run includes. |
| `/sync-gbrain --dream` | garrytan/gstack | Forces a rebuild of the call graph behind code-callers and code-callees, even if one already exists. --full only auto-dreams when the graph was never built. |
| `/sync-gbrain --dry-run` | garrytan/gstack | Previews exactly what the sync would do without writing to the brain, cache or repo. |
| `/sync-gbrain --full` | garrytan/gstack | Replaces the incremental fast path with a complete reindex-code pass (25-35 minutes on a large repo) and builds the call graph if it never existed. Also pins an unpinned worktree. |
| `/sync-gbrain --no-dream` | garrytan/gstack | Suppresses the call graph build that --full would otherwise trigger, keeping the reindex to the code stage only. |
| `/sync-gbrain --no-memory` | garrytan/gstack | Skips the memory stage while still running the code and brain-sync stages. |
| `/sync-gbrain --quiet` | garrytan/gstack | Suppresses per-stage progress output, leaving just the final verdict block. |
| `/sync-gbrain --refresh-cache` | garrytan/gstack | Forces a rebuild of the brain-aware planning cache for the current project slug plus the user-profile page, skipping code and memory stages. Replaced the old /brain-refresh-context. |
| `/unified-memory` | affaan-m/ECC | Share durable, inspectable context and handoffs between Claude, Codex, Hermes, Cursor, OpenCode, and other agents through the local ECC Memory Vault. |
| `/context-engineering:context-compression` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when long-running agent sessions need context compression, structured summarization, compaction, token-per-task optimization, or durable handoff summaries that preserve decisio |
| `/context-engineering:context-degradation` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for diagnosing and mitigating context degradation: lost-in-middle failures, context poisoning, context clash, context confusion, attention-pattern issues, and agent performance |
| `/context-engineering:context-fundamentals` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use to explain or reason about the foundational concepts of context engineering: what context is, the anatomy of a context window, how attention mechanics work, the U-shaped attent |
| `/context-engineering:context-optimization` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for improving context efficiency: context budgeting, observation masking, prefix or KV-cache strategy, partitioning, token-cost reduction, retrieval scoping, and extending effe |
| `/context-engineering:memory-systems` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for persistent semantic memory in agent systems: cross-session knowledge retention, entity tracking, temporal validity, graph or vector retrieval, memory consolidation, and mem |
| `/context-engineering:multi-agent-patterns` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when designing multi-agent systems that need context isolation, supervisor or swarm coordination, explicit handoffs, parallel execution, or a decision on whether multiple agent |
| `/iterative-retrieval` | affaan-m/ECC | Pattern for progressively refining context retrieval to solve the subagent context problem |
| `/prompt-optimizer` | affaan-m/ECC | Analyze raw prompts, identify intent and gaps, match ECC components (skills/commands/agents/hooks), and output a ready-to-paste optimized prompt. |

## Knowledge Base

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/knowledge-ops` | affaan-m/ECC | Knowledge base management, ingestion, sync, and retrieval across multiple storage layers (local files, MCP memory, vector stores, Git repos). |
| `/living-docs-governance` | affaan-m/ECC | Keep a long-lived project's documentation from rotting by assigning existing project docs clear constitution, map, status, and history roles, then wiring the active agent harness t |
| `/teach` | mattpocock/skills | Teach the user a new skill or concept, within this workspace. |
| `/skill-comply` | affaan-m/ECC | Visualize whether skills, rules, and agent definitions are actually followed — auto-generates scenarios at 3 prompt strictness levels, runs agents, classifies behavioral sequences, |
| `/team-builder` | affaan-m/ECC | Interactive agent picker for composing and dispatching parallel teams |
| `/continuous-learning-v2` | affaan-m/ECC | Instinct-based learning system that observes sessions via hooks, creates atomic instincts with confidence scoring, and evolves them into skills/commands/agents. |
| `/everything-claude-code` | affaan-m/ECC (auto-generated) | Development conventions and patterns for everything-claude-code. JavaScript project with conventional commits. |
| `/everything-claude-code-conventions` | affaan-m/ECC (auto-generated) | Auto-generated conventions skill for the everything-claude-code repo (JavaScript, hybrid module organization, separate test location) with conventional-commit rules distilled from 500 commits. No separate /everything-claude-code command exists on disk. |
| `/find-skills` | vercel-labs/skills | Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending c |
| `/rules-distill` | affaan-m/ECC | Scan skills to extract cross-cutting principles and distill them into rules — append, revise, or create new rule files |





# Built-in Claude Code

Ships with the harness, no pack install needed. These power the same process
stages as the packs above and were missing from the catalog.

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/code-review [low\|medium\|high\|xhigh\|max]` | Claude Code built-in | Reviews the current diff, a PR number, branch, or path for correctness bugs and reuse/simplification/efficiency cleanups at the given effort level. `--comment` posts inline PR comments, `--fix` applies the findings. |
| `/code-review ultra` | Claude Code built-in | Multi-agent cloud review of the current branch, or a GitHub PR via `/code-review ultra <PR#>`. User-triggered and billed; `/ultrareview` is the deprecated alias. |
| `/simplify` | Claude Code built-in | Reviews changed code for reuse, simplification, efficiency, and altitude cleanups, then applies the fixes. Quality only, no bug hunting. |
| `/security-review` | Claude Code built-in | Security review of the pending changes on the current branch. |
| `/loop` | Claude Code built-in | Run a prompt or slash command on a recurring interval, or let the model self-pace. |
| `/schedule` | Claude Code built-in | Create, update, list, or run scheduled cloud agents (routines) on a cron schedule, including one-time runs. |
| `/design` | Claude Code built-in | Design canvas: multi-artboard visual design published as an Artifact with click-to-select visual editing. |
| `/dataviz` | Claude Code built-in | Chart and dashboard design system loaded before writing any chart code: form heuristics, color formula, mark specs, interaction rules. |
| `/claude-api` | Claude Code built-in | Claude API reference: model ids, pricing, params, streaming, tool use, MCP, caching. Loads before any Anthropic-API work. |
| `/init` | Claude Code built-in | Initialize a CLAUDE.md with codebase documentation. |
| `/run` | Claude Code built-in | Launch and drive the project's app to confirm a change works in the real app, not just tests. |
| `/fewer-permission-prompts` | Claude Code built-in | Scans transcripts for common read-only calls and adds a prioritized allowlist to project settings. |
| `/update-config` | Claude Code built-in | Configures the harness via settings.json: hooks, permissions, env vars. |

# Tools
## CLI Apps

| Name | Purpose | URL |
| --- | --- | --- |
|  OpenCode   |   Mainstream Code Agent Alternative  |   https://github.com/anomalyco/opencode  |
|  Context Builder   |  Local Context holder   |   https://github.com/igorls/context-builder  |
|  Worktrunk   |  AI Worktree Management   |   https://github.com/max-sixty/worktrunk  |
|  CodeGraph   |   Auto Code catalog and analysis  |   https://github.com/colbymchenry/codegraph  |
|  Karpathy LLM Wiki   |   Local KB for LLM  |  https://github.com/Astro-Han/karpathy-llm-wiki   |
|  FirstMate   |  Orca Teams Helper   |   https://github.com/kunchenguid/firstmate  |
|  git-stack   |  Stacked PR helper   |   https://github.com/benwyrosdick/git-stack  |
|  RoboRev   |   Auto Code Review (pair with stacked PR)  |   https://github.com/kenn-io/roborev  |
|  Stax   |  Stacked PRs   |   https://github.com/cesarferreira/stax  |
|  SST   |  Quick full stack development  |   https://github.com/anomalyco/sst  |
|  Kata   |  Local-first issue tracking for AI coding agents with CLI and TUI   |    https://github.com/kenn-io/kata |
|  Git Credential Manager   |  Secure cross-platform Git credential storage and authentication   |   https://github.com/git-ecosystem/git-credential-manager  |
|  Context   |  Local-first MCP documentation server for AI agents, instant and offline   |   https://github.com/neuledge/context  |
|  AgentField   |  Build, run, and scale AI agents like APIs and microservices   |   https://github.com/Agent-Field/agentfield  |
|  Token Saver   |  Content-aware CLI output compression cutting AI assistant tokens 60-99%   |  https://github.com/ppgranger/token-saver   |
|  RTK   |  Rust CLI proxy cutting LLM token usage 60-90% on dev commands   |   https://github.com/rtk-ai/rtk  |
|  Graphify   |  Turns any codebase and docs into a queryable knowledge graph   |   https://github.com/Graphify-Labs/graphify  |
|  Dify Docs   |  Official multilingual documentation source for Dify   |   https://github.com/langgenius/dify-docs  |
|  LangChain   |  Agent engineering platform for building LLM apps   |    https://github.com/langchain-ai/langchain |
|  Rivet Actors   |  Stateful compute primitive for AI agents and durable execution   |   https://github.com/rivet-dev/actors  |
|  i-have-adhd   |  Skill preventing coding agents from burying the answer   |   https://github.com/ayghri/i-have-adhd  |
|  Temporal   |  Durable execution platform for reliable, scalable applications   |   https://github.com/temporalio/temporal  |
|  Create Context Graph   |  CLI scaffolding AI agent apps with graph-based reasoning memory   |  https://github.com/render-examples/create-context-graph   |
|  oh-my-claudecode   |  Teams-first multi-agent orchestration layer for Claude Code   |  https://github.com/Yeachan-Heo/oh-my-claudecode   |
|  brain.md   |  File-based persistent memory layer for coding agents   |  https://github.com/mindmuxai/brain.md   |
|  Wyolet Relay   |  Self-hostable high-throughput LLM router with key pooling   |   https://github.com/wyolet/relay  |
|  ccusage   |  Analyzes coding agent CLI token usage and costs locally   |   https://github.com/ccusage/ccusage  |
|  memU   |  Shared personal memory system across agents and sessions   |   https://github.com/NevaMind-AI/memU  |
|  Vault   |  Centralized secrets management, encryption, and access control   |  https://github.com/hashicorp/vault   |
|  LEANN   |  Smallest vector index for RAG with 97% storage savings   |  https://github.com/StarTrail-org/LEANN   |
|  Codex CLI   |  OpenAI coding agent CLI; cross-vendor second opinions via /codex and adversarial skeptic seats   |  https://github.com/openai/codex   |
|  Gemini CLI   |  Google coding agent CLI; another cross-vendor review seat   |  https://github.com/google-gemini/gemini-cli   |
|  Antigravity (agy)   |  Google Antigravity agent CLI; cross-vendor skeptic seat for /z-adversarial-review   |  https://antigravity.google   |


## GUI / Web Apps 

| Name | Purpose | URL |
| --- | --- | --- |
|  Unsloth   |  Train LLM   |  https://github.com/unslothai/unsloth   |
|  OpenDesign   |  Figma + Claude Code on your desktop   |   https://github.com/nexu-io/open-design  |
|  Multica   |  Open-source workspace assigning coding tasks to multiple AI coding agents   |   https://github.com/multica-ai/multica  |
|  Agent Teams AI   |  Desktop app orchestrating teams of AI coding agents across platforms   |   https://github.com/777genius/agent-teams-ai  |
|  Docbank   |  Self-sovereign local-first document system of record for you and agents   |  https://github.com/kenn-io/docbank   |
|  AgentsView   |  Local-first session search, analytics, and token-use stats for coding agents   |  https://github.com/kenn-io/agentsview  |
|  Camofox Browser   |  Anti-detection headless browser server for AI agents, powered by Camoufox   |   https://github.com/jo-inc/camofox-browser  |
|  ScrapeGraphAI   |  Python web scraper using LLMs and graph logic to extract data   |   https://github.com/ScrapeGraphAI/Scrapegraph-ai  |
|  serve-sim   |  The npx serve of Apple Simulators, streamed to a browser   |  https://github.com/EvanBacon/serve-sim   |
|  ErrorTracker   |  Elixir built-in error reporting and tracking with dashboard   |  https://github.com/elixir-error-tracker/error-tracker  |
|  Phoenix   |  Open-source AI observability platform for tracing, evaluation, and troubleshooting   |   https://github.com/Arize-ai/phoenix  |
|  Conductor   |  Local-first remote access platform to operate your trusted laptop anywhere   |  https://app.conductross.com/sign-in   |
|  Ideon   |  Self-hosted infinite-canvas workspace mapping notes, files, and to-dos spatially   |   https://github.com/3xpyth0n/ideon  |
|  Tela   |  Self-hostable markdown team wiki with built-in MCP server for AI agents   |   https://github.com/zcag/tela  |
|  SystemPrompt Template   |  Self-hosted Rust governance layer authenticating, authorizing, and logging AI interactions   |   https://github.com/systempromptio/systemprompt-template  |
|  Sim   |  Collaborative workspace for building, deploying, and monitoring AI agents and workflows   |   https://github.com/simstudioai/sim  |
|  Paperclip   |  Open-source app orchestrating a team of AI agents to run a business   |   https://github.com/paperclipai/paperclip  |
|  TanStack Query   |  Async state management and data-fetching library for React, Solid, Svelte, Vue   |   https://github.com/TanStack/query  |
|  Sanity   |  Open-source CMS platform for structured content workspaces   |  https://github.com/sanity-io/sanity   |
|  LobeHub   |  Chief Agent Operator organizing AI agents into 24/7 team operations   |  https://github.com/lobehub/lobehub   |
|  Outline   |  Fast, collaborative, realtime knowledge base / wiki for teams   |  https://github.com/outline/outline   |
|  Replane   |  Dynamic config management for feature flags and rate limits without redeploying   |   https://github.com/replane-dev/replane  |
|  Maxun   |  Open-source no-code platform turning websites into structured data / APIs   |   https://github.com/getmaxun/maxun  |
|  tirreno   |  Open-source event tracking, threat detection, and risk scoring framework   |   https://github.com/tirrenotechnologies/tirreno  |
|  Storybook | Frontend workshop for building UI components and pages in isolation   |  https://storybook.js.org/  |




## Components 

| Name | Purpose | URL |
| --- | --- | --- |
|  Scalekit Developer Docs   |  Docs site for Scalekit's enterprise auth platform (SSO, SCIM, MCP)   |   https://github.com/scalekit-inc/developer-docs  |



## MCP 

| Name | Purpose | URL |
| --- | --- | --- |
|  docs-mcp-server   |  Open-source grounded documentation MCP server, alternative to Context7   |  https://github.com/arabold/docs-mcp-server   |
|  markdownify-mcp   |  MCP server for converting almost anything to Markdown   |   https://github.com/zcaceres/markdownify-mcp  |
|  GitMCP   |  Free remote MCP server exposing any GitHub project to stop code hallucinations   |   https://github.com/idosal/git-mcp  |



## Frameworks

| Name | Purpose | URL |
| --- | --- | --- |
|  Oldhand   |  Ticket Based Development Workflow   |  https://berwinsingh.github.io/oldhand/#top   |
|   CodeMySpec  |   Phoenix / Elixir workflow  |  https://codemyspec.com/   |
|   gStack  |   Y Combinator CEO's workflow to develop product businesses  |   https://github.com/garrytan/gstack  |
| rcs-harness    |   Wizard builds a harness based on project  |  https://github.com/ericrisco/rsc-harness   |
|   zcarceres  |  Developer's personal skills   |  https://github.com/zcaceres/skills   |
|   ECC  |  Everything (and the kitchen sink) skills   |  https://github.com/affaan-m/ECC   |
|   Matt Pocock's Skills  |  Low overhead ticket based workflow   |  https://github.com/mattpocock/skills   |
|  Ruflo   |   agent meta-harness  |  https://github.com/ruvnet/ruflo   |
|   Superpowers  |   An agentic skills framework & software development methodology  |  https://github.com/obra/superpowers   |
|  GSD   |  Git, Ship, Done development framework   |   https://github.com/open-gsd/gsd-core  |
|   Han  |   A curated marketplace of Claude Code plugins that embody the principles of ethical and professional software development.  |   https://github.com/TheBushidoCollective/han  |
|  Beagle   |  Language Specific Coding Skills  |  https://github.com/existential-birds/beagle   |
|  Claude MPM Skills   |  skills designed for the Claude Multi-Agent Project Manager (MPM) ecosystem   |   https://github.com/bobmatnyc/claude-mpm-skills  |
|  Unlazy   |  Anti-laziness skill decomposing agent tasks into layers via a Depth Tree method   |  https://github.com/Leonxlnx/unlazy   |
|  Taste Skill   |  Gives AI good taste, stops it generating boring, generic slop   |   https://github.com/Leonxlnx/taste-skill  |
|  Trail of Bits Skills   |  Claude Code skills for security research and audit workflows   |  https://github.com/trailofbits/skills   |
|  Mindrally Skills   |  240+ Claude Code skills converted from Cursor rules for major frameworks   |   https://github.com/Mindrally/skills  |
|  Codex Skills Alternative   |  Vendor-neutral Agent Skills reimplementing Codex creative/product design workflows   |   https://github.com/DKeken/codex-skills-alternative  |
|  PM Claude Brief   |  CLAUDE.md templates and brief-writing discipline for product managers   |   https://github.com/MariaVimer/pm-claude-brief  |
|  Ponytail   |  Lazy-senior-dev mode: YAGNI ladder, over-engineering review/audit, debt ledger   |  https://github.com/DietrichGebert/ponytail  |
|  Caveman   |  Ultra-compressed output mode, ~65% fewer output tokens with full technical accuracy; pairs with Ponytail   |  https://github.com/JuliusBrussee/caveman  |
|  cco (claude-context-optimizer)   |  Cache-aware context optimization: session overhead audit (/cco-overhead), auto .contextignore, delegation advisor   |  https://github.com/egorfedorov/claude-context-optimizer  |



## Bootstrap

| Name | Purpose | URL |
| --- | --- | --- |
|  init-project   |  Documentation-driven project initialization skill generating CLAUDE.md and specs   |   https://github.com/sajiner90/init-project  |
|  repo-onboard   |  Claude Code plugin guiding spec interviews into requirements, design, tasks   |   https://github.com/dannyavrs/repo-onboard  |
|  AI Code Standards   |  Plugin generating tailored CLAUDE.md standards from stack and team fragments   |   https://github.com/brandonm/ai-code-standards  |
|  Claude Project Mgmt Playbook   |  Claude Code patterns and prompts for project managers and delivery leads   |   https://github.com/Lwhieldon/claude-project-mgmt-playbook  |
|  SmythOS SRE   |  Open-source cloud-native runtime for building and running agentic AI   |   https://github.com/SmythOS/sre  |
|  Claude Code Showcase   |  Example Claude Code project config with hooks, skills, agents, CI workflows   |   https://github.com/ChrisWiles/claude-code-showcase  |
|  PM Claude Code Setup   |  Ready-to-use CLAUDE.md and starter skill for product managers   |  https://github.com/aakashg/pm-claude-code-setup   |



## Lang Specific

| Name | Purpose | URL |
| --- | --- | --- |
|  Claude Elixir   |  Elixir specific development helper   |   https://github.com/oliver-kriska/claude-elixir-phoenix  |
|  React Doctor   |  Deterministic scanner catching bad React code your agent writes   |   https://github.com/millionco/react-doctor  |

## Interesting 

| Name | Purpose | URL |
| --- | --- | --- |
|  Apohara Context Forge   |  Shared context compiler for multi-agent LLM systems, cuts VRAM 68%   |   https://github.com/SuarezPM/Apohara_Context_Forge  |
|  Crush   |  Glamourous agentic coding tool for the terminal   |   https://github.com/charmbracelet/crush  |
|  Claude Code for PMM   |  AI task manager for product marketing managers, organizes backlog dumps   |   https://github.com/chriscooning/claude-code-for-pmm  |
|  Plasmic   |  Visual builder for React apps, websites, and content   |   https://github.com/plasmicapp/plasmic  |

