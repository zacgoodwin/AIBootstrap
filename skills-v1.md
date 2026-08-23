# Skills



## Contents

- [Plan & Spec](#plan-spec) (34)
- [Build & Implement](#build-implement) (41)
- [Review, QA & Ship](#review-qa-ship) (62)
- [Debug & Investigate](#debug-investigate) (34)
- [Design & UI](#design-ui) (56)
- [Docs, Memory & Handoff](#docs-memory-handoff) (32)
- [Security](#security) (16)
- [Agent & Context Engineering](#agent-context-engineering) (38)
- [Claude Code Config & Skills](#claude-code-config-skills) (37)
- [Stack Patterns](#stack-patterns) (21)
- [Product Management](#product-management) (43)
- [Job Search](#job-search) (19)
- [Content & Social](#content-social) (8)

## Plan & Spec

| Execution | Source (origin) | What it does |
|---|---|---|
| `/architecture-decision-records` | affaan-m/ECC | Capture architectural decisions made during Claude Code sessions as structured ADRs. |
| `/autoplan` | garrytan/gstack | Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk and runs them sequentially with auto-decisions using 6 decision principles. |
| `/codebase-design` | mattpocock/skills | Shared vocabulary for designing deep modules. Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code m |
| `/codemyspec:design` | Code-My-Spec/plugins | Architecture design, UI design system, and technology strategy. Use before writing code to plan how to build it. |
| `/codemyspec:design architecture` | Code-My-Spec/plugins | Architecture design, UI design system, and technology strategy. Use before writing code to plan how to build it. |
| `/codemyspec:design strategy` | Code-My-Spec/plugins | Architecture design, UI design system, and technology strategy. Use before writing code to plan how to build it. |
| `/codemyspec:design ui` | Code-My-Spec/plugins | Architecture design, UI design system, and technology strategy. Use before writing code to plan how to build it. |
| `/codemyspec:product` | Code-My-Spec/plugins | Product management — guided story interview, review, and Three Amigos sessions. Use when defining what to build, refining requirements, reviewing story quality, or running an Examp |
| `/codemyspec:product interview` | Code-My-Spec/plugins | Product management — guided story interview, review, and Three Amigos sessions. Use when defining what to build, refining requirements, reviewing story quality, or running an Examp |
| `/codemyspec:product review` | Code-My-Spec/plugins | Product management — guided story interview, review, and Three Amigos sessions. Use when defining what to build, refining requirements, reviewing story quality, or running an Examp |
| `/codemyspec:product three-amigos <story_id>` | Code-My-Spec/plugins | Product management — guided story interview, review, and Three Amigos sessions. Use when defining what to build, refining requirements, reviewing story quality, or running an Examp |
| `/council` | affaan-m/ECC | Convene a four-voice council for ambiguous decisions, tradeoffs, and go/no-go calls. |
| `/decompose [focus]` | zcaceres/skills | Break a problem into smaller pieces — subsystems that are easier to think about — and show how they relate. |
| `/domain-modeling` | mattpocock/skills | Build and sharpen a project's domain model. Use when the user wants to pin down domain terminology or a ubiquitous language, record an architectural decision, or when another skill |
| `/grill-me` | mattpocock/skills | A relentless interview to sharpen a plan or design. |
| `/grill-with-docs` | mattpocock/skills | A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go. |
| `/grilling` | mattpocock/skills | Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases. |
| `/improve-codebase-architecture` | mattpocock/skills | Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick. |
| `/intent-driven-development` | affaan-m/ECC | Turn ambiguous or high-impact product and engineering changes into scoped, verifiable acceptance criteria before or alongside implementation. |
| `/loop-me` | mattpocock/skills | Grill me about specs for the workflows I want to build, within this workspace. |
| `/office-hours` | garrytan/gstack | YC Office Hours — two modes. |
| `/plan-canvas` | affaan-m/ECC | Open plans and HTML artifacts in a local browser canvas where the human annotates elements, chats, and approves or requests changes without leaving the page. |
| `/plan-ceo-review` | garrytan/gstack | CEO/founder-mode plan review. |
| `/plan-design-review` | garrytan/gstack | Designer's eye plan review — interactive, like CEO and Eng review. |
| `/plan-devex-review` | garrytan/gstack | Interactive developer experience plan review. |
| `/plan-eng-review` | garrytan/gstack | Eng manager-mode plan review. |
| `/plan-orchestrate` | affaan-m/ECC | Read a plan document, decompose it into steps, design a per-step agent chain from the ECC catalogue, and emit ready-to-paste /orchestrate custom prompts. |
| `/product-capability` | affaan-m/ECC | Translate PRD intent, roadmap asks, or product discussions into an implementation-ready capability plan that exposes constraints, invariants, interfaces, and unresolved decisions b |
| `/product-lens` | affaan-m/ECC | Use this skill to validate the "why" before building, run product diagnostics, and pressure-test product direction before the request becomes an implementation contract. |
| `/spec` | garrytan/gstack | Turn vague intent into a precise, executable spec in five phases. |
| `/to-spec` | mattpocock/skills | Turn the current conversation into a spec and publish it to the project issue tracker — no interview, just synthesis of what you've already discussed. |
| `/to-tickets` | mattpocock/skills | Break a plan, spec, or the current conversation into a set of tracer-bullet tickets, each declaring its blocking edges, published to the configured tracker — edges as text in one f |
| `/wayfinder` | mattpocock/skills | Plan a huge chunk of work — more than one agent session can hold — as a shared map of decision tickets on your issue tracker, and resolve them one at a time until the way to the de |
| `/wizard` | mattpocock/skills | Generate an interactive bash wizard that walks a human through steps only they can perform. |

## Build & Implement

| Execution | Source (origin) | What it does |
|---|---|---|
| `/api-connector-builder` | affaan-m/ECC | Build a new API connector or provider by matching the target repo's existing integration pattern exactly. |
| `/careful` | garrytan/gstack | Safety guardrails for destructive commands. |
| `/code-first-draft` | Aakash Gupta PM OS | Initial feature implementation |
| `/code-first-draft --explore-only` | Aakash Gupta PM OS | Initial feature implementation |
| `/codemyspec:develop` | Code-My-Spec/plugins | Full-lifecycle development — context orchestration, LiveView orchestration, and interactive refactoring. |
| `/codemyspec:develop context` | Code-My-Spec/plugins | Full-lifecycle development — context orchestration, LiveView orchestration, and interactive refactoring. |
| `/codemyspec:develop liveview` | Code-My-Spec/plugins | Full-lifecycle development — context orchestration, LiveView orchestration, and interactive refactoring. |
| `/codemyspec:develop refactor [ModuleName]` | Code-My-Spec/plugins | Full-lifecycle development — context orchestration, LiveView orchestration, and interactive refactoring. |
| `/codemyspec:implement [start\|stop]` | Code-My-Spec/plugins | Implement the next requirement task from the codemyspec plan; start or stop the loop. |
| `/codemyspec:init` | Code-My-Spec/plugins | Project setup, authentication, and sync. Use when starting a new project, logging in, or refreshing stale state. |
| `/codemyspec:init auth` | Code-My-Spec/plugins | Project setup, authentication, and sync. Use when starting a new project, logging in, or refreshing stale state. |
| `/codemyspec:next` | Code-My-Spec/plugins | Find and start the next requirement task in one gesture. Use after each completed task as your single onboarding instruction. |
| `/codemyspec:sync` | Code-My-Spec/plugins | Sync project components and regenerate architecture views. Use after git pulls, before design sessions, or when views feel stale. |
| `/codex` | garrytan/gstack | OpenAI Codex CLI wrapper — three modes. |
| `/codex review --xhigh` | garrytan/gstack | OpenAI Codex CLI wrapper — three modes. |
| `/contract-first` | affaan-m/ECC | Use when multiple consumers and providers must evolve an API or event schema without field drift, integration surprises, or one side silently redefining the interface. |
| `/dev-as-ai` | zacgoodwin/zg-skills | Switch this repo's git commit identity and the gh CLI account to the AI dev bot (tordek-ai). |
| `/dev-as-human` | zacgoodwin/zg-skills | Switch this repo's git commit identity and the gh CLI account back to Zac Goodwin. |
| `/freeze` | garrytan/gstack | Restrict file edits to a specific directory for the session. |
| `/generate-ai-prototype` | Aakash Gupta PM OS | Generate v0.dev, Lovable, or Bolt.new prompts for AI-powered prototyping |
| `/git-workflow` | affaan-m/ECC | Git workflow patterns including branching strategies, commit conventions, merge vs rebase, conflict resolution, and collaborative development best practices for teams of all sizes. |
| `/github-ops` | affaan-m/ECC | GitHub repository operations, automation, and management. Issue triage, PR management, CI/CD operations, release management, and security monitoring using the gh CLI. |
| `/guard` | garrytan/gstack | Full safety mode: destructive command warnings + directory-scoped edits. |
| `/implement` | mattpocock/skills | Implement a piece of work based on a spec or set of tickets. |
| `/inherit-legacy-style` | affaan-m/ECC | Legacy-project style inheritance skill. Use when the user types /inherit-legacy-style, or when onboarding an AI coding agent onto a hand-written legacy project and you need to prev |
| `/orch-add-feature` | affaan-m/ECC | Orchestrate building a brand-new feature end to end — research, plan, TDD implementation, review, and gated commit — by delegating each phase to the matching ECC agent. |
| `/orch-build-mvp` | affaan-m/ECC | Orchestrate bootstrapping a working MVP from a design or spec document — ingest the doc, plan thin vertical slices, scaffold the first end-to-end slice, then TDD-implement, review, |
| `/orch-change-feature` | affaan-m/ECC | Orchestrate altering an existing, working feature to new desired behavior — update its tests to the new spec, change the implementation to match, review, and gated commit. |
| `/orch-fix-defect` | affaan-m/ECC | Orchestrate fixing a bug — reproduce it as a failing regression test, fix to green, review, and gated commit — by delegating each phase to the matching ECC agent. |
| `/orch-pipeline` | affaan-m/ECC | Shared orchestration engine for the orch-* skill family. Defines the gated Research-Plan-TDD-Review-Commit pipeline, the size classifier, the agent map, and the two human gates tha |
| `/orch-refine-code` | affaan-m/ECC | Orchestrate a behavior-preserving refactor — confirm tests are green, restructure without changing behavior, keep tests green, review, and gated commit. |
| `/pair-agent` | garrytan/gstack | Pair a remote AI agent with your browser. |
| `/prototype` | mattpocock/skills | Build a throwaway prototype to answer a design question. Use when the user wants to sanity-check whether a state model or logic feels right, or explore what a UI should look like. |
| `/resolving-merge-conflicts` | mattpocock/skills | Use when you need to resolve an in-progress git merge/rebase conflict. |
| `/santa-method` | affaan-m/ECC | Multi-agent adversarial verification with convergence loop. Two independent review agents must both pass before output ships. |
| `/search-first` | affaan-m/ECC | Research-before-coding workflow. Search for existing tools, libraries, and patterns before writing custom code. |
| `/tdd` | mattpocock/skills | Test-driven development. Use when the user wants to build features or fix bugs test-first, mentions "red-green-refactor", or wants integration tests. |
| `/tdd-workflow <path/to/*.plan.md>` | affaan-m/ECC | Use this skill when writing new features, fixing bugs, or refactoring code. Enforces test-driven development with 80%+ coverage including unit, integration, and E2E tests. |
| `/terminal-ops` | affaan-m/ECC | Evidence-first repo execution workflow for ECC. Use when the user wants a command run, a repo checked, a CI failure debugged, or a narrow fix pushed with exact proof of what was ex |
| `/unfreeze` | garrytan/gstack | Clear the freeze boundary set by /freeze, allowing edits to all directories again. |
| `/verification-loop` | affaan-m/ECC | A comprehensive verification system for Claude Code sessions. |

## Review, QA & Ship

| Execution | Source (origin) | What it does |
|---|---|---|
| `/ai-regression-testing` | affaan-m/ECC | Regression testing strategies for AI-assisted development. Sandbox-mode API testing without database dependencies, automated bug-check workflows, and patterns to catch AI blind spo |
| `/benchmark` | garrytan/gstack | Performance regression detection using the browse daemon. |
| `/benchmark --diff` | garrytan/gstack | Performance regression detection using the browse daemon. |
| `/benchmark --trend` | garrytan/gstack | Performance regression detection using the browse daemon. |
| `/benchmark <url>` | garrytan/gstack | Performance regression detection using the browse daemon. |
| `/benchmark <url> --baseline` | garrytan/gstack | Performance regression detection using the browse daemon. |
| `/benchmark <url> --pages <paths>` | garrytan/gstack | Performance regression detection using the browse daemon. |
| `/benchmark <url> --quick` | garrytan/gstack | Performance regression detection using the browse daemon. |
| `/browser-qa` | affaan-m/ECC | Use this skill to automate visual testing and UI interaction verification using browser automation after deploying features. |
| `/canary` | garrytan/gstack | Post-deploy canary monitoring. |
| `/canary <url>` | garrytan/gstack | Post-deploy canary monitoring. |
| `/canary <url> --baseline` | garrytan/gstack | Post-deploy canary monitoring. |
| `/canary <url> --duration 5m` | garrytan/gstack | Post-deploy canary monitoring. |
| `/canary <url> --pages <paths>` | garrytan/gstack | Post-deploy canary monitoring. |
| `/canary <url> --quick` | garrytan/gstack | Post-deploy canary monitoring. |
| `/canary-watch` | affaan-m/ECC | Use this skill to monitor and verify a deployed URL after releases — checks HTTP endpoints, SSE streams, static assets, console errors, and performance regressions after deploys, m |
| `/canary-watch --compare` | affaan-m/ECC | Use this skill to monitor and verify a deployed URL after releases — checks HTTP endpoints, SSE streams, static assets, console errors, and performance regressions after deploys, m |
| `/clean-ai-slop` | zcaceres/skills | Find AI-generated noise on the current branch — tombstone comments, restating-the-code comments, callsite-reference comments, unused imports, dead internal symbols — propose each f |
| `/code-review` |  | Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes — Standards (does the code follow this repo's documented coding standards?) and Spec (doe |
| `/codemyspec:qa fix [severity]` | Code-My-Spec/plugins | codemyspec QA: test a story, run integrations, or triage/fix findings by severity. |
| `/codemyspec:qa integrations` | Code-My-Spec/plugins | codemyspec QA: test a story, run integrations, or triage/fix findings by severity. |
| `/codemyspec:qa story <id>` | Code-My-Spec/plugins | codemyspec QA: test a story, run integrations, or triage/fix findings by severity. |
| `/codemyspec:qa triage [severity]` | Code-My-Spec/plugins | codemyspec QA: test a story, run integrations, or triage/fix findings by severity. |
| `/delivery-gate` | affaan-m/ECC | Stop hook that blocks Claude from finishing until quality checks pass. Detects rationalization patterns (surface text heuristics), stale learning logs (filesystem mtime), and low d |
| `/document-release` | garrytan/gstack | Post-ship documentation update. |
| `/e2e-testing` | affaan-m/ECC | Playwright E2E testing patterns, Page Object Model, configuration, CI/CD integration, artifact management, and flaky test strategies. |
| `/health` | garrytan/gstack | Code quality dashboard. |
| `/ios-clean` | garrytan/gstack | Remove the DebugBridge SPM package and all #if DEBUG wiring from an iOS app. |
| `/ios-design-review` | garrytan/gstack | Visual design audit for iOS apps on real hardware. |
| `/ios-fix` | garrytan/gstack | Autonomous iOS bug fixer. |
| `/ios-qa` | garrytan/gstack | Live-device iOS QA for SwiftUI apps. |
| `/ios-sync` | garrytan/gstack | Regenerate the iOS debug bridge against the latest upstream gstack templates. |
| `/land-and-deploy` | garrytan/gstack | Land and deploy workflow. |
| `/landing-report` | garrytan/gstack | Read-only queue dashboard for workspace-aware ship. |
| `/ponytail:ponytail-audit` | DietrichGebert/ponytail | Whole-repo audit for over-engineering. Like ponytail-review, but scans the entire codebase instead of a diff: a ranked list of what to delete, simplify, or replace with stdlib/nati |
| `/ponytail:ponytail-review` | DietrichGebert/ponytail | Code review focused exclusively on over-engineering. Finds what to delete: reinvented standard library, unneeded dependencies, speculative abstractions, dead flexibility. |
| `/production-audit` | affaan-m/ECC | Local-evidence production readiness audit for shipped apps, pre-launch reviews, post-merge checks, and "what breaks in prod?" questions without sending repo data to an external aud |
| `/qa` | garrytan/gstack | Systematically QA test a web application and fix bugs found. |
| `/qa-only` | garrytan/gstack | Report-only QA testing. |
| `/quality-cli-agent-friendly-audit` | zcaceres/skills | Audit a CLI tool against the agent-friendliness checklist from Zbigniew Sobiecki's "Building Agent-Friendly CLIs". |
| `/quality-dead-code-analyzer` | zcaceres/skills | Analyze a codebase for dead code, duplicates, and circular dependencies using knip, jscpd, and madge, then validate findings to filter false positives. |
| `/quality-project-health [focus]` | zcaceres/skills | Assess the current project's repo and work-tracker status, then rate overall project health from 0-10. |
| `/react-testing` | affaan-m/ECC | React component testing with React Testing Library, Vitest/Jest, MSW for network mocking, accessibility assertions with axe, and the decision boundary between component tests and P |
| `/retro` | garrytan/gstack | Weekly engineering retrospective. |
| `/review` | garrytan/gstack | Pre-landing PR review. |
| `/roborev-fix` | roborev-dev/roborev | Use only for a current operative request that explicitly invokes /roborev-fix, or a direct Agent Hook instruction; do not invoke from literal syntax in quoted, pasted, or historica |
| `/roborev-lookahead-review` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-lookahead-review |
| `/roborev-lookahead-review-branch` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-lookahead-review-branch |
| `/roborev-lookahead-review-branch --base <branch>` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-lookahead-review-branch |
| `/roborev-refine` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-refine |
| `/roborev-refine --since <sha> --max-iterations <n>` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-refine |
| `/roborev-respond` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-respond |
| `/roborev-review` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-review |
| `/roborev-review --type design` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-review |
| `/roborev-review --type lookahead` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-review |
| `/roborev-snooze` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-snooze |
| `/rust-testing` | affaan-m/ECC | Rust testing patterns including unit tests, integration tests, async testing, property-based testing, mocking, and coverage. |
| `/setup-deploy` | garrytan/gstack | Configure deployment settings for /land-and-deploy. |
| `/ship` | garrytan/gstack | Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION, update CHANGELOG, commit, push, create PR. |
| `/stack-ship` | zacgoodwin/zg-skills | Ship the current stax branch through the quality pipeline: gate on roborev per-commit reviews (bounded auto-fix loop on failure), squash-submit one clean commit upstream as a PR vi |
| `/triage` | mattpocock/skills | Move issues and external PRs through a state machine of triage roles — categorise, verify, grill if needed, and write agent-ready briefs. |
| `/z-adversarial-review` | zacgoodwin/zg-skills | Blinded adversarial review for any GitHub PR. Assembles a blinded four-key input (spec, acceptance criteria, diff, throwaway worktree), spawns one fresh reviewer agent holding noth |

## Debug & Investigate

| Execution | Source (origin) | What it does |
|---|---|---|
| `/browse` | garrytan/gstack | Fast headless browser for QA testing and site dogfooding. |
| `/code-tour [path-to-tour]` | affaan-m/ECC | Walk an unfamiliar codebase and write a concise CODE_TOUR.md onboarding guide — the key components, a Mermaid diagram of how they connect, and the areas worth a closer look to unde |
| `/codebase-onboarding` | affaan-m/ECC | Analyze an unfamiliar codebase and generate a structured onboarding guide with architecture map, key entry points, conventions, and a starter CLAUDE.md. |
| `/deep-research` | affaan-m/ECC | Multi-source deep research using firecrawl and exa MCPs. Searches the web, synthesizes findings, and delivers cited reports with source attribution. |
| `/diagnosing-bugs` | mattpocock/skills | Diagnosis loop for hard bugs and performance regressions. Use when the user says "diagnose"/"debug this", or reports something broken/throwing/failing/slow. |
| `/find-docs` | zcaceres/skills | Retrieve authoritative, up-to-date documentation, API references, configuration details, and code examples for any developer technology (libraries, frameworks, languages, SDKs, API |
| `/graphify` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify --help` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path>` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --cluster-only` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --directed` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --falkordb` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --falkordb-push` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --graphml` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --html` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --mcp` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --mode <mode>` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --neo` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --no-viz` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --obsidian` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --svg` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --update` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --watch` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --whisper-model <m>` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/graphify <path> --wiki` | safishamsi/graphify | Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a gr |
| `/investigate` | garrytan/gstack | Systematic debugging with root cause investigation. |
| `/investigate-repo <repo-url-or-path>` | zcaceres/skills | Audit an unfamiliar code repo (GitHub URL) for malicious patterns — clone shallow, grep, emit a verdict with file:line evidence. |
| `/open-gstack-browser` | garrytan/gstack | Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in. |
| `/repo-scan` | affaan-m/ECC | Cross-stack source code asset audit — classifies every file, detects embedded third-party libraries, and delivers actionable four-level verdicts per module with interactive HTML re |
| `/research` | mattpocock/skills | Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. |
| `/research-ops` | affaan-m/ECC | Evidence-first current-state research workflow for ECC. Use when the user wants fresh facts, comparisons, enrichment, or a recommendation built from current public evidence and any |
| `/scrape` | garrytan/gstack | Pull data from a web page. |
| `/setup-browser-cookies` | garrytan/gstack | Import cookies from your real Chromium browser into the headless browse session. |
| `/skillify` | garrytan/gstack | Codify the most recent successful /scrape flow into a permanent browser-skill on disk. |

## Design & UI

| Execution | Source (origin) | What it does |
|---|---|---|
| `/accessibility` | affaan-m/ECC | Design, implement, and audit inclusive digital products using WCAG 2.2 Level AA |
| `/acid-trip` | zcaceres/skills | Generate frontend designs from random rolls — a Wikipedia article (subject), a document_type, and a lineage. |
| `/acid-trip --paper` | zcaceres/skills | Generate frontend designs from random rolls — a Wikipedia article (subject), a document_type, and a lineage. |
| `/acid-trip --react` | zcaceres/skills | Generate frontend designs from random rolls — a Wikipedia article (subject), a document_type, and a lineage. |
| `/anti-ui-slop` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop adapt [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop animate [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop audit [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop bolder [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop clarify [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop colorize [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop critique [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop delight [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop distill [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop document` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop extract [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop harden [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop init` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop layout [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop live` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop onboard [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop optimize [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop overdrive [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop polish [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop quieter [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop shape [feature]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/anti-ui-slop typeset [target]` | uizze.com | Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, an |
| `/design-consultation` | garrytan/gstack | Design consultation: understands your product, researches the landscape, proposes a complete design system (aesthetic, typography, color, layout, spacing, motion), and generates fo |
| `/design-html` | garrytan/gstack | Design finalization: generates production-quality Pretext-native HTML/CSS. |
| `/design-review` | garrytan/gstack | Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems, AI slop patterns, and slow interactions — then fixes them. |
| `/design-shotgun` | garrytan/gstack | Design shotgun: generate multiple AI design variants, open a comparison board, collect structured feedback, and iterate. |
| `/design-system` | affaan-m/ECC | Use this skill to generate or audit design systems, check visual consistency, and review PRs that touch styling. |
| `/diagram` | garrytan/gstack | Turn an English description (or mermaid source) into a diagram triplet: the source, an editable .excalidraw file you can open |
| `/figma-code-connect` | anthropics/claude-plugins-official | Creates and maintains Figma Code Connect template files that map Figma components to code snippets. |
| `/figma-create-new-file` | anthropics/claude-plugins-official | you MUST invoke this skill BEFORE every `create_new_file` tool call. NEVER call `create_new_file` directly without loading this skill first. |
| `/figma-design-to-code` | anthropics/claude-plugins-official | you MUST invoke this skill BEFORE calling the `get_design_context` Figma MCP tool. |
| `/figma-generate-design` | anthropics/claude-plugins-official | Use this skill alongside figma-use when the task involves translating an application page, view, or multi-section layout into Figma. |
| `/figma-generate-diagram` | anthropics/claude-plugins-official | MANDATORY prerequisite — load this skill BEFORE every `generate_diagram` tool call. |
| `/figma-generate-library` | anthropics/claude-plugins-official | Build or update a professional-grade design system in Figma from a codebase. Use when the user wants to create variables/tokens, build component libraries, create individual compon |
| `/figma-implement-motion` | anthropics/claude-plugins-official | Translates Figma motion and animations into production-ready application code. Use when implementing animation/motion from a Figma design — user mentions "implement this motion", " |
| `/figma-swiftui` | anthropics/claude-plugins-official | SwiftUI ↔ Figma translation. Use whenever the user mentions Swift, SwiftUI, iOS, iPhone, or iPad — in EITHER direction — translating a Figma design into SwiftUI (design → code), or |
| `/figma-use` | anthropics/claude-plugins-official | you MUST invoke this skill BEFORE every `use_figma` tool call. NEVER call `use_figma` directly without loading this skill first. |
| `/figma-use-figjam` | anthropics/claude-plugins-official | This skill helps agents use Figma's use_figma MCP tool in the FigJam context. Can be used alongside figma-use which has foundational context for using the use_figma tool. |
| `/figma-use-motion` | anthropics/claude-plugins-official | Motion / animation context for the `use_figma` MCP tool — animating Figma nodes via manual keyframes, animation styles, easing, and timeline duration. |
| `/figma-use-slides` | anthropics/claude-plugins-official | This skill helps agents use Figma's use_figma MCP tool in the Slides context. Can be used alongside figma-use which has foundational context for using the use_figma tool. |
| `/frontend-a11y` | affaan-m/ECC | Accessibility patterns for React and Next.js — semantic HTML, ARIA attributes, form labeling, keyboard navigation, focus management, and screen reader support. |
| `/frontend-design-direction` | affaan-m/ECC | Set an ECC-specific frontend design direction for production UI work. Use when building or improving websites, dashboards, applications, components, landing pages, visual tools, or |
| `/frontend-slides` | affaan-m/ECC | Create stunning, animation-rich HTML presentations from scratch or by converting PowerPoint files. |
| `/make-interfaces-feel-better` | affaan-m/ECC | Apply concrete design-engineering details that make interfaces feel polished. Use when reviewing or improving UI spacing, typography, borders, shadows, motion, hit areas, icons, te |
| `/make-pdf` | garrytan/gstack | Turn any markdown file into a publication-quality PDF. |
| `/napkin-sketch` | Aakash Gupta PM OS | ASCII wireframes + browser capture for design matching |
| `/taste` | affaan-m/ECC | A creative-direction (taste) layer for music videos and short-form edits in the angelcore / cloud-trance / hyperpop visual family. |
| `/ui-demo` | affaan-m/ECC | Record polished UI demo videos using Playwright. Use when the user asks to create a demo, walkthrough, screen recording, or tutorial video of a web application. |
| `/ui-design` | uizze.com | Design or refine intentional web and iOS interfaces, using compact UIZZE evidence only when it answers a concrete unresolved question. |
| `/ui-radar` | uizze.com | Find and compare real UI examples from UIZZE’s 800,000+ web and iOS screens. Use for UI inspiration, UI research, design references, comparable apps, user flows, layouts, navigatio |
| `/ui-slop-score` | uizze.com | Review a rendered web or mobile interface and score how generic it looks. Use for UI critique, design review, visual polish, screenshot review, pre-merge checks, and requests to fi |

## Docs, Memory & Handoff

| Execution | Source (origin) | What it does |
|---|---|---|
| `/claude-handoff` | mattpocock/skills | Hand the current conversation off to a fresh background agent that picks up the work immediately. |
| `/claude-md-improver` | anthropics/claude-plugins-official | Audit and improve CLAUDE.md files in repositories. Use when user asks to check, audit, update, improve, or fix CLAUDE.md files. |
| `/context-restore` | garrytan/gstack | Restore working context saved earlier by /context-save. |
| `/context-save` | garrytan/gstack | Save working context. |
| `/context-save list --all` | garrytan/gstack | Save working context. |
| `/document-generate` | garrytan/gstack | Generate missing documentation from scratch for a feature, module, or entire project. |
| `/growth-log` | affaan-m/ECC | Use after a complex task, failure, or when reviewing what was learned. Teaches how to write growth logs that extract reusable patterns — not diary entries. |
| `/handoff` | mattpocock/skills | Compact the current conversation into a handoff document for another agent to pick up. |
| `/knowledge-ops` | affaan-m/ECC | Knowledge base management, ingestion, sync, and retrieval across multiple storage layers (local files, MCP memory, vector stores, Git repos). |
| `/learn` |  | Manage project learnings. |
| `/living-docs-governance` | affaan-m/ECC | Keep a long-lived project's documentation from rotting by assigning existing project docs clear constitution, map, status, and history roles, then wiring the active agent harness t |
| `/quality-docs-update` | zcaceres/skills | Audit project documentation against the current state of the codebase and produce a revision plan. |
| `/setup-gbrain` | garrytan/gstack | Set up gbrain for this coding agent: install the CLI, initialize a local PGLite or Supabase brain, register MCP, capture per-remote trust policy. |
| `/setup-gbrain --cleanup-orphans` | garrytan/gstack | Set up gbrain for this coding agent: install the CLI, initialize a local PGLite or Supabase brain, register MCP, capture per-remote trust policy. |
| `/setup-gbrain --repo` | garrytan/gstack | Set up gbrain for this coding agent: install the CLI, initialize a local PGLite or Supabase brain, register MCP, capture per-remote trust policy. |
| `/setup-gbrain --resume-provision <ref>` | garrytan/gstack | Set up gbrain for this coding agent: install the CLI, initialize a local PGLite or Supabase brain, register MCP, capture per-remote trust policy. |
| `/setup-gbrain --switch` | garrytan/gstack | Set up gbrain for this coding agent: install the CLI, initialize a local PGLite or Supabase brain, register MCP, capture per-remote trust policy. |
| `/strategic-compact` | affaan-m/ECC | Suggests manual context compaction at logical intervals to preserve context through task phases rather than arbitrary auto-compaction. |
| `/sync-gbrain` | garrytan/gstack | Keep gbrain current with this repo's code and refresh agent search guidance in AGENTS.md. |
| `/sync-gbrain --audit` | garrytan/gstack | Keep gbrain current with this repo's code and refresh agent search guidance in AGENTS.md. |
| `/sync-gbrain --code-only` | garrytan/gstack | Keep gbrain current with this repo's code and refresh agent search guidance in AGENTS.md. |
| `/sync-gbrain --dream` | garrytan/gstack | Keep gbrain current with this repo's code and refresh agent search guidance in AGENTS.md. |
| `/sync-gbrain --dry-run` | garrytan/gstack | Keep gbrain current with this repo's code and refresh agent search guidance in AGENTS.md. |
| `/sync-gbrain --full` | garrytan/gstack | Keep gbrain current with this repo's code and refresh agent search guidance in AGENTS.md. |
| `/sync-gbrain --no-dream` | garrytan/gstack | Keep gbrain current with this repo's code and refresh agent search guidance in AGENTS.md. |
| `/sync-gbrain --no-memory` | garrytan/gstack | Keep gbrain current with this repo's code and refresh agent search guidance in AGENTS.md. |
| `/sync-gbrain --quiet` | garrytan/gstack | Keep gbrain current with this repo's code and refresh agent search guidance in AGENTS.md. |
| `/sync-gbrain --refresh-cache` | garrytan/gstack | Keep gbrain current with this repo's code and refresh agent search guidance in AGENTS.md. |
| `/teach` | mattpocock/skills | Teach the user a new skill or concept, within this workspace. |
| `/unified-memory` | affaan-m/ECC | Share durable, inspectable context and handoffs between Claude, Codex, Hermes, Cursor, OpenCode, and other agents through the local ECC Memory Vault. |
| `/wait-what` | mattpocock/skills | Stop. That last message did not land — re-pitch it. |
| `/writing-for-agents` | mattpocock/skills | Writing documents for agents. Use when creating or editing skills, or modifying AGENTS.md or CLAUDE.md. |

## Security

| Execution | Source (origin) | What it does |
|---|---|---|
| `/cso` | garrytan/gstack | Chief Security Officer mode. |
| `/cso --code` | garrytan/gstack | Chief Security Officer mode. |
| `/cso --comprehensive` | garrytan/gstack | Chief Security Officer mode. |
| `/cso --diff` | garrytan/gstack | Chief Security Officer mode. |
| `/cso --infra` | garrytan/gstack | Chief Security Officer mode. |
| `/cso --owasp` | garrytan/gstack | Chief Security Officer mode. |
| `/cso --scope <area>` | garrytan/gstack | Chief Security Officer mode. |
| `/cso --skills` | garrytan/gstack | Chief Security Officer mode. |
| `/cso --supply-chain` | garrytan/gstack | Chief Security Officer mode. |
| `/defi-amm-security` | affaan-m/ECC | Security checklist for Solidity AMM contracts, liquidity pools, and swap flows. Covers reentrancy, CEI ordering, donation or inflation attacks, oracle manipulation, slippage, admin |
| `/security-gitleaks` | zcaceres/skills | Set up gitleaks secret-scanning on a repo. Scans history for existing leaks first — stops if dirty, because installing CI on top of a polluted history makes CI permanently red. |
| `/security-openssf` | zcaceres/skills | Scaffold OpenSSF Scorecard GitHub Action on a public repo with a safe two-phase rollout — first run with publish_results false so SARIF findings can be triaged before any score rea |
| `/security-openssf fix` | zcaceres/skills | Scaffold OpenSSF Scorecard GitHub Action on a public repo with a safe two-phase rollout — first run with publish_results false so SARIF findings can be triaged before any score rea |
| `/security-openssf install` | zcaceres/skills | Scaffold OpenSSF Scorecard GitHub Action on a public repo with a safe two-phase rollout — first run with publish_results false so SARIF findings can be triaged before any score rea |
| `/security-review` | affaan-m/ECC | Use this skill when adding authentication, handling user input, working with secrets, creating API endpoints, or implementing payment/sensitive features. |
| `/security-scan` | affaan-m/ECC | Scan your Claude Code configuration (.claude/ directory) for security vulnerabilities, misconfigurations, and injection risks using AgentShield. |

## Agent & Context Engineering

| Execution | Source (origin) | What it does |
|---|---|---|
| `/agent-architecture-audit` | affaan-m/ECC | Full-stack diagnostic for agent and LLM applications. Audits the 12-layer agent stack for wrapper regression, memory pollution, tool discipline failures, hidden repair loops, and r |
| `/agent-harness-construction` | affaan-m/ECC | Design and optimize AI agent action spaces, tool definitions, and observation formatting for higher completion rates. |
| `/agent-introspection-debugging` | affaan-m/ECC | Structured self-debugging workflow for AI agent failures using capture, diagnosis, contained recovery, and introspection reports. |
| `/agent-self-evaluation` | affaan-m/ECC | Use after completing any non-trivial task. The agent self-rates its output on 5 axes — accuracy, completeness, clarity, actionability, conciseness — with concrete evidence per crit |
| `/agentic-engineering` | affaan-m/ECC | Operate as an agentic engineer using eval-first execution, decomposition, and cost-aware model routing. |
| `/autonomous-loops` | affaan-m/ECC | Patterns and architectures for autonomous Claude Code loops — from simple sequential pipelines to RFC-driven multi-agent DAG systems. |
| `/benchmark-models` | garrytan/gstack | Cross-model benchmark for gstack skills. |
| `/context-engineering:advanced-evaluation` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for advanced LLM evaluation: LLM-as-judge systems, direct scoring, pairwise comparison, rubric calibration, evaluator bias mitigation, confidence scoring, and automated quality |
| `/context-engineering:bdi-mental-states` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when modeling agent mental states with BDI concepts: beliefs, desires, intentions, RDF-to-belief transformations, rational agency traces, cognitive agents, BDI ontologies, and |
| `/context-engineering:context-compression` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when long-running agent sessions need context compression, structured summarization, compaction, token-per-task optimization, or durable handoff summaries that preserve decisio |
| `/context-engineering:context-degradation` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for diagnosing and mitigating context degradation: lost-in-middle failures, context poisoning, context clash, context confusion, attention-pattern issues, and agent performance |
| `/context-engineering:context-fundamentals` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use to explain or reason about the foundational concepts of context engineering: what context is, the anatomy of a context window, how attention mechanics work, the U-shaped attent |
| `/context-engineering:context-optimization` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for improving context efficiency: context budgeting, observation masking, prefix or KV-cache strategy, partitioning, token-cost reduction, retrieval scoping, and extending effe |
| `/context-engineering:evaluation` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when building agent evaluation systems: deterministic checks, regression suites, multi-dimensional rubrics, quality gates, production monitoring, baseline comparison, and outco |
| `/context-engineering:filesystem-context` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when agent work needs file-backed context: durable scratchpads, tool-output offloading, just-in-time discovery, cross-agent handoff files, filesystem memory, or cleanup policie |
| `/context-engineering:harness-engineering` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when designing autonomous agent harnesses: research loops, evaluation scaffolds, locked and editable surfaces, durable logs, novelty gates, pruning, rollback, PR preparation, a |
| `/context-engineering:hosted-agents` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when designing hosted or background agent infrastructure: sandboxed execution, remote coding environments, warm pools, session persistence, multiplayer collaboration, self-spaw |
| `/context-engineering:latent-briefing` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when the user asks to "share memory between agents", "KV cache compaction for multi-agent", "orchestrator worker context", "latent briefing", "reduce worker tokens", "cross-age |
| `/context-engineering:long-horizon-prompting` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when writing, enhancing, or evaluating the launch prompt for a long-running autonomous agent or a parallel multi-agent orchestration attacking a hard problem: pseudo-formal tas |
| `/context-engineering:memory-systems` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for persistent semantic memory in agent systems: cross-session knowledge retention, entity tracking, temporal validity, graph or vector retrieval, memory consolidation, and mem |
| `/context-engineering:multi-agent-patterns` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when designing multi-agent systems that need context isolation, supervisor or swarm coordination, explicit handoffs, parallel execution, or a decision on whether multiple agent |
| `/context-engineering:project-development` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for project-level decisions about LLM-powered systems: whether an LLM is the right primitive for the task at hand, the shape of a multi-stage batch or agent pipeline, token and |
| `/context-engineering:self-improvement-loops` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when the harness, scaffold, workflow, or optimizer itself is the optimization target: recursive self-improvement (RSI) loops, meta-harnesses, self-improving harnesses that mine |
| `/context-engineering:tool-design` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for the tool-interface layer of an agent system specifically: writing tool descriptions agents can route on, designing tool schemas and response formats, naming conventions, ac |
| `/continuous-agent-loop` | affaan-m/ECC | Patterns for continuous autonomous agent loops with quality gates, evals, and recovery controls. |
| `/dynamic-workflow-mode` | affaan-m/ECC | Design task-local harnesses, eval gates, and reusable skill extraction for Claude dynamic workflow mode and other adaptive agent harnesses. |
| `/eval-harness` | affaan-m/ECC | Formal evaluation framework for Claude Code sessions implementing eval-driven development (EDD) principles |
| `/gan-style-harness` | affaan-m/ECC | GAN-inspired Generator-Evaluator agent harness for building high-quality applications autonomously. |
| `/iterative-retrieval` | affaan-m/ECC | Pattern for progressively refining context retrieval to solve the subagent context problem |
| `/loop-design-check` | affaan-m/ECC | Design a goal-oriented agent loop, and review it for the ways loops go wrong — spinning and burning tokens, Goodhart-gaming the verifier, or running a wrong answer to completion. |
| `/parallel-execution-optimizer` | affaan-m/ECC | Use when the user wants a task done much faster through parallel work, concurrent agents, batched tool calls, isolated worktrees, or many independent verification lanes without los |
| `/prompt-optimizer` | affaan-m/ECC | Analyze raw prompts, identify intent and gaps, match ECC components (skills/commands/agents/hooks), and output a ready-to-paste optimized prompt. |
| `/ralph-wiggum` | Aakash Gupta PM OS | Devil's advocate PRD/document reviewer with humor and sharp critique |
| `/ralphinho-rfc-pipeline` | affaan-m/ECC | RFC-driven multi-agent DAG execution pattern with quality gates, merge queues, and work unit orchestration. |
| `/regex-vs-llm-structured-text` | affaan-m/ECC | Decision framework for choosing between regex and LLM when parsing structured text — start with regex, add LLM only for low-confidence edge cases. |
| `/skill-comply` | affaan-m/ECC | Visualize whether skills, rules, and agent definitions are actually followed — auto-generates scenarios at 3 prompt strictness levels, runs agents, classifies behavioral sequences, |
| `/team-agent-orchestration` | affaan-m/ECC | Run team-based orchestration for agent squads using work items, ownership, agent Kanban, merge gates, and control pane handoffs. |
| `/team-builder` | affaan-m/ECC | Interactive agent picker for composing and dispatching parallel teams |

## Claude Code Config & Skills

| Execution | Source (origin) | What it does |
|---|---|---|
| `/agent-sort` | affaan-m/ECC | Build an evidence-backed ECC install plan for a specific repo by sorting skills, commands, rules, hooks, and extras into DAILY vs LIBRARY buckets using parallel repo-aware review p |
| `/ask-matt` | mattpocock/skills | Ask which skill or flow fits your situation. A router over the skills in this repo. |
| `/config-gc` | affaan-m/ECC | Garbage collection for your Claude Code configuration. Periodically scans ~/.claude (skills, memory, hooks, permissions, MCP servers, caches) for redundant, stale, orphaned, or low |
| `/configure-ecc` | affaan-m/ECC | Guide ECC installation, update, or reconfiguration from inside Claude Code, Codex, or Kimi while respecting each harness's real plugin, scope, and hook capabilities. |
| `/connect-mcps` | Aakash Gupta PM OS | Connect MCPs for real-time tool integration |
| `/context-budget` | affaan-m/ECC | Audits Claude Code context window consumption across agents, skills, MCP servers, and rules. |
| `/context-budget --verbose` | affaan-m/ECC | Audits Claude Code context window consumption across agents, skills, MCP servers, and rules. |
| `/continuous-learning-v2` | affaan-m/ECC | Instinct-based learning system that observes sessions via hooks, creates atomic instincts with confidence scoring, and evolves them into skills/commands/agents. |
| `/cost-tracking` | affaan-m/ECC | Track and report Claude Code token usage, spending, and budgets from the local ECC cost-tracker metrics log. |
| `/devex-review` | garrytan/gstack | Live developer experience audit. |
| `/ecc-guide` | affaan-m/ECC | Guide users through ECC's current agents, skills, commands, hooks, rules, install profiles, and project onboarding by reading the live repository surface before answering. |
| `/ecc-recipes <workflow description>` | affaan-m/ECC | Map a described workflow to the right ECC command-GROUP with run-order and stop condition, and browse all command-group recipe families. |
| `/ecc-tools-cost-audit` | affaan-m/ECC | Evidence-first ECC Tools burn and billing audit workflow. Use when investigating runaway PR creation, quota bypass, premium-model leakage, duplicate jobs, or GitHub App cost spikes |
| `/everything-claude-code` |  | Development conventions and patterns for everything-claude-code. JavaScript project with conventional commits. |
| `/everything-claude-code-conventions` |  | Development conventions and patterns for everything-claude-code. JavaScript project with conventional commits. |
| `/find-skills` | vercel-labs/skills | Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending c |
| `/gstack` | garrytan/gstack | Router for the gstack skill suite. |
| `/gstack-upgrade` | garrytan/gstack | Upgrade gstack to the latest version. |
| `/hookify-rules` | affaan-m/ECC | Use when the user asks to create a hookify rule, write a hook rule, configure hookify, add a hookify rule, or needs guidance on hookify rule syntax and patterns. |
| `/optimize-permissions` | zcaceres/skills | Scan recent conversation transcripts for safe commands that could be auto-allowed by your CLI agent (Claude Code, Codex, Cursor, …), preview the proposed allowlist changes, then wr |
| `/optimize-skill-activation` | zcaceres/skills | Audit installed skills and right-size each one's activation mode — slash-only, model-invocable (name+description in context), or eager-loaded (full body up front). |
| `/plan-tune` | garrytan/gstack | Self-tuning question sensitivity + developer psychographic for gstack (v1: observational). |
| `/plankton-code-quality` | affaan-m/ECC | Write-time code quality enforcement using Plankton — auto-formatting, linting, and Claude-powered fixes on every file edit via hooks. |
| `/ponytail:ponytail` | DietrichGebert/ponytail | Forces the laziest solution that actually works, simplest, shortest, most minimal. |
| `/ponytail:ponytail full` | DietrichGebert/ponytail | Forces the laziest solution that actually works, simplest, shortest, most minimal. |
| `/ponytail:ponytail lite` | DietrichGebert/ponytail | Forces the laziest solution that actually works, simplest, shortest, most minimal. |
| `/ponytail:ponytail ultra` | DietrichGebert/ponytail | Forces the laziest solution that actually works, simplest, shortest, most minimal. |
| `/ponytail:ponytail-debt` | DietrichGebert/ponytail | Harvest every `ponytail:` comment in the codebase into a debt ledger, so the deliberate shortcuts and deferrals ponytail leaves behind get tracked instead of rotting into "later me |
| `/ponytail:ponytail-gain` | DietrichGebert/ponytail | Show ponytail's measured impact as a compact scoreboard: less code, less cost, more speed, from the benchmark medians. |
| `/ponytail:ponytail-help` | DietrichGebert/ponytail | Quick-reference card for all ponytail modes, skills, and commands. One-shot display, not a persistent mode. |
| `/rules-distill` | affaan-m/ECC | Scan skills to extract cross-cutting principles and distill them into rules — append, revise, or create new rule files |
| `/setup-matt-pocock-skills` | mattpocock/skills | Configure this repo for the engineering skills — set up its issue tracker, triage label vocabulary, and domain doc layout. |
| `/skill-library` |  | Router into the parked skill/agent library (.claude/skill-library/, .claude/agent-library/). |
| `/skill-scout` | affaan-m/ECC | Search existing local, marketplace, GitHub, and web skill sources before creating a new skill. |
| `/skill-stocktake` | affaan-m/ECC | Use when auditing Claude skills and commands for quality. Supports Quick Scan (changed skills only) and Full Stocktake modes with sequential subagent batch evaluation. |
| `/token-budget-advisor` | affaan-m/ECC | Offers the user an informed choice about how much response depth to consume before answering. |
| `/workspace-surface-audit` | affaan-m/ECC | Audit the active repo, MCP servers, plugins, connectors, env surfaces, and harness setup, then recommend the highest-value ECC-native skills, hooks, agents, and operator workflows. |

## Stack Patterns

| Execution | Source (origin) | What it does |
|---|---|---|
| `/angular-developer` | affaan-m/ECC | Generates Angular code and provides architectural guidance. Trigger when creating projects, components, or services, or for best practices on reactivity (signals, linkedSignal, res |
| `/api-design` | affaan-m/ECC | REST API design patterns including resource naming, status codes, pagination, filtering, error responses, versioning, and rate limiting for production APIs. |
| `/backend-patterns` | affaan-m/ECC | Backend architecture patterns, API design, database optimization, and server-side best practices for Node.js, Express, and Next.js API routes. |
| `/bun-runtime` | affaan-m/ECC | Bun as runtime, package manager, bundler, and test runner. When to choose Bun vs Node, migration notes, and Vercel support. |
| `/coding-standards` | affaan-m/ECC | Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review. |
| `/database-migrations` | affaan-m/ECC | Database migration best practices for schema changes, data migrations, rollbacks, and zero-downtime deployments across PostgreSQL, MySQL, and common ORMs (Prisma, Drizzle, Kysely, |
| `/deployment-patterns` | affaan-m/ECC | Deployment workflows, CI/CD pipeline patterns, Docker containerization, health checks, rollback strategies, and production readiness checklists for web applications. |
| `/docker-patterns` | affaan-m/ECC | Docker and Docker Compose patterns for local development, hardened CLI installer harnesses, container security, networking, volumes, and multi-service orchestration. |
| `/error-handling` | affaan-m/ECC | Patterns for robust error handling across TypeScript, Python, and Go. Covers typed errors, error boundaries, retries, circuit breakers, and user-facing error messages. |
| `/frontend-patterns` | affaan-m/ECC | Frontend development patterns for React, Next.js, state management, performance optimization, and UI best practices. |
| `/java-coding-standards` | affaan-m/ECC | Java coding standards for Spring Boot and Quarkus services: naming, immutability, Optional usage, streams, exceptions, generics, CDI, reactive patterns, and project layout. |
| `/mailtrap-email-integration` | affaan-m/ECC | Guides agents through integrating transactional email sending via Mailtrap's Email API, including sandbox testing, domain verification, and API authentication. |
| `/mysql-patterns` | affaan-m/ECC | MySQL and MariaDB schema, query, indexing, transaction, replication, and connection-pool patterns for production backends. |
| `/postgres-patterns` | affaan-m/ECC | PostgreSQL database patterns for query optimization, schema design, indexing, and security. |
| `/react-native-patterns` | affaan-m/ECC | React Native and Expo app patterns — Expo Router navigation, state separation (server/client/route/form), TanStack Query data fetching with Zod, performant lists, NativeWind/StyleS |
| `/react-patterns` | affaan-m/ECC | React 18/19 patterns including hooks discipline, server/client component boundaries, Suspense + error boundaries, form actions, data fetching, state management decision trees, and |
| `/react-performance` | affaan-m/ECC | React and Next.js performance optimization patterns adapted from Vercel Engineering's React Best Practices (https://github.com/vercel-labs/agent-skills). |
| `/redis-patterns` | affaan-m/ECC | Redis data structure patterns, caching strategies, distributed locks, rate limiting, pub/sub, and connection management for production applications. |
| `/rust-patterns` | affaan-m/ECC | Idiomatic Rust patterns, ownership, error handling, traits, concurrency, and best practices for building safe, performant applications. |
| `/supabase` | anthropics/claude-plugins-official | Use when doing ANY task involving Supabase. Triggers: Supabase products (Database, Auth, Edge Functions, Realtime, Storage, Vectors, Cron, Queues); client libraries and SSR integra |
| `/supabase-postgres-best-practices` | anthropics/claude-plugins-official | Postgres best practices maintained by Supabase, for Postgres running anywhere. Load this skill BEFORE writing or changing anything that lives in a Postgres database: creating or al |

## Product Management

| Execution | Source (origin) | What it does |
|---|---|---|
| `/activation-analysis` | Aakash Gupta PM OS | Analyze user activation using Setup → Aha → Habit framework. Identifies activation bottlenecks. |
| `/benchmark-methodology` | affaan-m/ECC | Use after competitive-platform-analysis has produced a tiered competitor set. Scores each competitor across nine weighted dimensions (positioning, voice, visual craft, offer packag |
| `/competitive-platform-analysis` | affaan-m/ECC | Use when scoping a competitive landscape — identifying, categorising, and score-filtering a competitor set before any benchmarking begins. |
| `/competitive-report-structure` | affaan-m/ECC | Use after benchmark-methodology has produced scored competitor profile cards. Assembles findings into a decision-grade report: landscape map, competitor profiles, benchmarking matr |
| `/competitor-analysis` | Aakash Gupta PM OS | Deep competitive analysis + ongoing monitoring. Checks user research for competitor mentions, sales notes, existing analysis. |
| `/create-tickets` | Aakash Gupta PM OS | Create tickets via Linear/Jira MCP or generate formatted ticket text |
| `/daily-plan` | Aakash Gupta PM OS | Generate PM daily plan with context |
| `/decision-doc` | Aakash Gupta PM OS | Document important product decisions. Creates decision logs with rationale, alternatives, and trade-offs. |
| `/define-north-star` | Aakash Gupta PM OS | Identify and validate your North Star Metric. Aligns product strategy with key business metric. |
| `/expansion-strategy` | Aakash Gupta PM OS | Upsell, cross-sell, and account growth tactics. Framework for revenue expansion. |
| `/experiment-decision` | Aakash Gupta PM OS | Decide when to A/B test vs just ship. Framework for experiment planning and prioritization. |
| `/experiment-metrics` | Aakash Gupta PM OS | STEDII framework for selecting trustworthy experiment metrics. Ensures metric validity and reliability. |
| `/feature-metrics` | Aakash Gupta PM OS | Define success metrics using the STEDII framework for trustworthy experiment metrics. |
| `/feature-results` | Aakash Gupta PM OS | Post-launch analysis and results documentation. Document what shipped and what we learned. |
| `/impact-sizing` | Aakash Gupta PM OS | Quantify feature value with driver trees, confidence levels, and the 4-step sizing framework. |
| `/interview-guide` | Aakash Gupta PM OS | Create JTBD-based interview guides for user research. Structured questions for discovery interviews. |
| `/journey-map` | Aakash Gupta PM OS | Create user journey maps and customer journey maps (dual mode) |
| `/launch-checklist` | Aakash Gupta PM OS | Comprehensive product launch planning |
| `/launch-checklist --template major` | Aakash Gupta PM OS | Comprehensive product launch planning |
| `/launch-checklist --template regulatory` | Aakash Gupta PM OS | Comprehensive product launch planning |
| `/launch-checklist --template small` | Aakash Gupta PM OS | Comprehensive product launch planning |
| `/meeting-agenda` | Aakash Gupta PM OS | Create structured meeting agendas for effective collaboration |
| `/meeting-cleanup` | Aakash Gupta PM OS | Batch process multiple meetings from a single day. Consolidates action items and insights across meetings. |
| `/meeting-feedback` | Aakash Gupta PM OS | Post-meeting effectiveness feedback and continuous improvement |
| `/meeting-notes` | Aakash Gupta PM OS | Transform meeting transcripts into structured action items, decisions, and key insights. |
| `/metrics-framework` | Aakash Gupta PM OS | Set up leading vs lagging indicators for product decisions. Framework for metric selection and tracking. |
| `/opensource-pipeline` | affaan-m/ECC | Open-source pipeline: fork, sanitize, and package private projects for safe public release. |
| `/prd-draft` | Aakash Gupta PM OS | Create a modern, AI-era PRD for features and initiatives. Guides through clarifying questions, generates draft, and offers multi-agent review. |
| `/prd-draft --ai` | Aakash Gupta PM OS | Create a modern, AI-era PRD for features and initiatives. Guides through clarifying questions, generates draft, and offers multi-agent review. |
| `/prd-draft --stage` | Aakash Gupta PM OS | Create a modern, AI-era PRD for features and initiatives. Guides through clarifying questions, generates draft, and offers multi-agent review. |
| `/prd-review-panel` | Aakash Gupta PM OS | Multi-agent PRD review (7 perspectives) |
| `/prd-review-panel --perspectives "eng,design,exec"` | Aakash Gupta PM OS | Multi-agent PRD review (7 perspectives) |
| `/prioritize` | Aakash Gupta PM OS | Classify PM tasks using LNO Framework (Leverage/Neutral/Overhead) to focus on high-impact work. |
| `/prototype-feedback` | Aakash Gupta PM OS | Build → review → iterate prototype workflow. Structured feedback collection and iteration. |
| `/retention-analysis` | Aakash Gupta PM OS | Cohort analysis and retention optimization framework. Identifies retention drivers and churn factors. |
| `/slack-message` | Aakash Gupta PM OS | Draft team communications for Slack. Creates clear, actionable messages for different contexts. |
| `/status-update` | Aakash Gupta PM OS | Generate stakeholder status updates. Creates clear, concise progress reports for different audiences. |
| `/strategy-sprint` | Aakash Gupta PM OS | Create product strategy in 1 day, 1 week, or 1 month timeframes. Progressive strategy development framework. |
| `/user-interview` | Aakash Gupta PM OS | Systematically process user interviews to extract actionable insights. Batch processes interviews and generates research reports. |
| `/user-research-synthesis` | Aakash Gupta PM OS | Turn user interviews into actionable insights. Advanced synthesis techniques and frameworks. |
| `/weekly-plan` | Aakash Gupta PM OS | Set next week's priorities |
| `/weekly-review` | Aakash Gupta PM OS | Review week's progress, meetings, learnings |
| `/write-prod-strategy` | Aakash Gupta PM OS | Product strategy docs using 7-component framework |

## Content & Social

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
