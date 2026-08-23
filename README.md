# AIBootstrap

Started out as a template repository but as I learn more it keeps morphing. Currently it's a list of skills and what they are used for: 

# Product Process
## Pack Setup Skills 
| Name | Pack | Purpose |
| --- | --- | --- |
| `/codemyspec:init` | Code-My-Spec/plugins | Project setup, authentication, and sync. Use when starting a new project, logging in, or refreshing stale state. |
| `/codemyspec:init auth` | Code-My-Spec/plugins | Project setup, authentication, and sync. Use when starting a new project, logging in, or refreshing stale state. |
| `/inherit-legacy-style` | affaan-m/ECC | Legacy-project style inheritance skill. Use when the user types /inherit-legacy-style, or when onboarding an AI coding agent onto a hand-written legacy project and you need to prev |
| `/setup-deploy` | garrytan/gstack | Configure deployment settings for /land-and-deploy. |
| `/setup-browser-cookies` | garrytan/gstack | Import cookies from your real Chromium browser into the headless browse session. |


## Starting Direction / Human Helper Skills 

Designed to ask questions and help focus the start of an idea into something complete.

| Name | Pack | Purpose |
| --- | --- | --- |
| `/grill-me` | mattpocock/skills | A relentless interview to sharpen a plan or design. |
| `/grill-with-docs` | mattpocock/skills | A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go. |
| `/office-hours` | garrytan/gstack | YC Office Hours — two modes. |
| `/codemyspec:product interview` | Code-My-Spec/plugins | Product management — guided story interview, review, and Three Amigos sessions. Use when defining what to build, refining requirements, reviewing story quality, or running an Examp |
| `/loop-me` | mattpocock/skills | Grill me about specs for the workflows I want to build, within this workspace. |
| `/plan-canvas` | affaan-m/ECC | Open plans and HTML artifacts in a local browser canvas where the human annotates elements, chats, and approves or requests changes without leaving the page. |
| `/napkin-sketch` | Aakash Gupta PM OS | ASCII wireframes + browser capture for design matching |


## PRD Skills

You have the idea now you need to firm up what the product will look like 

| Name | Pack | Purpose |
| --- | --- | --- |
| `/codemyspec:product` | Code-My-Spec/plugins | Product management — guided story interview, review, and Three Amigos sessions. Use when defining what to build, refining requirements, reviewing story quality, or running an Examp |
| `/product-capability` | affaan-m/ECC | Translate PRD intent, roadmap asks, or product discussions into an implementation-ready capability plan that exposes constraints, invariants, interfaces, and unresolved decisions b |
| `/plan-devex-review` | garrytan/gstack | Interactive developer experience plan review. |
| `/plan-eng-review` | garrytan/gstack | Eng manager-mode plan review. |
| `/plan-design-review` | garrytan/gstack | Designer's eye plan review — interactive, like CEO and Eng review. |
| `/to-spec` | mattpocock/skills | Turn the current conversation into a spec and publish it to the project issue tracker — no interview, just synthesis of what you've already discussed. |
| `/spec` | garrytan/gstack | Turn vague intent into a precise, executable spec in five phases. |
| `/product-lens` | affaan-m/ECC | Use this skill to validate the "why" before building, run product diagnostics, and pressure-test product direction before the request becomes an implementation contract. |
| `/autoplan` | garrytan/gstack | Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk and runs them sequentially with auto-decisions using 6 decision principles. |
| `/accessibility` | affaan-m/ECC | Design, implement, and audit inclusive digital products using WCAG 2.2 Level AA |


## Research Skills

| Name | Pack | Purpose |
| --- | --- | --- |
| `/codemyspec:product review` | Code-My-Spec/plugins | Product management — guided story interview, review, and Three Amigos sessions. Use when defining what to build, refining requirements, reviewing story quality, or running an Examp |
| `/domain-modeling` | mattpocock/skills | Build and sharpen a project's domain model. Use when the user wants to pin down domain terminology or a ubiquitous language, record an architectural decision, or when another skill |
| `/deep-research` | affaan-m/ECC | Multi-source deep research using firecrawl and exa MCPs. Searches the web, synthesizes findings, and delivers cited reports with source attribution. |
| `/find-docs` | zcaceres/skills | Retrieve authoritative, up-to-date documentation, API references, configuration details, and code examples for any developer technology (libraries, frameworks, languages, SDKs, API |
| `/research` | mattpocock/skills | Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. |
| `/research-ops` | affaan-m/ECC | Evidence-first current-state research workflow for ECC. Use when the user wants fresh facts, comparisons, enrichment, or a recommendation built from current public evidence and any |

## Initial Design Skills

| Name | Pack | Purpose |
| --- | --- | --- |
| `/design-shotgun` | garrytan/gstack | Design shotgun: generate multiple AI design variants, open a comparison board, collect structured feedback, and iterate. |
| `/diagram` | garrytan/gstack | Turn an English description (or mermaid source) into a diagram triplet: the source, an editable .excalidraw file you can open |
| `/figma-use-slides` | anthropics/claude-plugins-official | This skill helps agents use Figma's use_figma MCP tool in the Slides context. Can be used alongside figma-use which has foundational context for using the use_figma tool. |
| `/frontend-slides` | affaan-m/ECC | Create stunning, animation-rich HTML presentations from scratch or by converting PowerPoint files. |
| `/acid-trip` | zcaceres/skills | Generate frontend designs from random rolls — a Wikipedia article (subject), a document_type, and a lineage. |
| `/acid-trip --paper` | zcaceres/skills | Generate frontend designs from random rolls — a Wikipedia article (subject), a document_type, and a lineage. |
| `/acid-trip --react` | zcaceres/skills | Generate frontend designs from random rolls — a Wikipedia article (subject), a document_type, and a lineage. |
| `/ui-design` | uizze.com | Design or refine intentional web and iOS interfaces, using compact UIZZE evidence only when it answers a concrete unresolved question. |
| `/ui-radar` | uizze.com | Find and compare real UI examples from UIZZE’s 800,000+ web and iOS screens. Use for UI inspiration, UI research, design references, comparable apps, user flows, layouts, navigatio |

## Business Skills

| Name | Pack | Purpose |
| --- | --- | --- |
| `/plan-ceo-review` | garrytan/gstack | CEO/founder-mode plan review. |
|     |     |     |

## Agent Only Helper Skills

| Name | Pack | Purpose |
| --- | --- | --- |
| `/grilling` | mattpocock/skills | Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases. |
| `/wizard` | mattpocock/skills | Generate an interactive bash wizard that walks a human through steps only they can perform. |


# Development Process
## Loop Skills
| Name | Pack | Purpose |
| --- | --- | --- |



## Designer Implmentation Skills

Take that PRD and turn it into a demo so you can continue to iterate

| Name | Pack | Purpose |
| --- | --- | --- |
| `/codemyspec:design` | Code-My-Spec/plugins | Architecture design, UI design system, and technology strategy. Use before writing code to plan how to build it. |
| `/codemyspec:design ui` | Code-My-Spec/plugins | Architecture design, UI design system, and technology strategy. Use before writing code to plan how to build it. |
| `/anti-ui-slop` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop adapt [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop animate [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop audit [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop bolder [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop clarify [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop colorize [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop critique [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop delight [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop distill [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop document` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop extract [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop harden [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop init` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop layout [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop live` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop onboard [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop optimize [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop overdrive [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop polish [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop quieter [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop shape [feature]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
| `/anti-ui-slop typeset [target]` | uizze.com | Compare AI design against real world UI to remove generic AI slop |
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



## Technical Stack Specific Skills
| Name | Pack | Purpose |
| --- | --- | --- |
| `/react-testing` | affaan-m/ECC | React component testing with React Testing Library, Vitest/Jest, MSW for network mocking, accessibility assertions with axe, and the decision boundary between component tests and P |
| `/rust-testing` | affaan-m/ECC | Rust testing patterns including unit tests, integration tests, async testing, property-based testing, mocking, and coverage. |



# Code Architecture Skills
| Name | Pack | Purpose |
| --- | --- | --- |
| `/architecture-decision-records` | affaan-m/ECC | Capture architectural decisions made during Claude Code sessions as structured ADRs. |
| `/codebase-design` | mattpocock/skills | Shared vocabulary for designing deep modules. Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code m |
| `/codemyspec:design architecture` | Code-My-Spec/plugins | Architecture design, UI design system, and technology strategy. Use before writing code to plan how to build it. |
| `/codemyspec:design strategy` | Code-My-Spec/plugins | Architecture design, UI design system, and technology strategy. Use before writing code to plan how to build it. |



## Requirements Skills

The product is defined; turn it into developable chunks

| Name | Pack | Purpose |
| --- | --- | --- |
| `/codemyspec:product three-amigos <story_id>` | Code-My-Spec/plugins | Product management — guided story interview, review, and Three Amigos sessions. Use when defining what to build, refining requirements, reviewing story quality, or running an Examp |
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

## Developing Skills

| Name | Pack | Purpose |
| --- | --- | --- |
| `/api-connector-builder` | affaan-m/ECC | Build a new API connector or provider by matching the target repo's existing integration pattern exactly. |
| `/code-first-draft` | Aakash Gupta PM OS | Initial feature implementation |
| `/code-first-draft --explore-only` | Aakash Gupta PM OS | Initial feature implementation |
| `/codemyspec:develop` | Code-My-Spec/plugins | Full-lifecycle development — context orchestration, LiveView orchestration, and interactive refactoring. |
| `/codemyspec:develop context` | Code-My-Spec/plugins | Full-lifecycle development — context orchestration, LiveView orchestration, and interactive refactoring. |
| `/codemyspec:develop liveview` | Code-My-Spec/plugins | Full-lifecycle development — context orchestration, LiveView orchestration, and interactive refactoring. |
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


## Testing Skills

| `/verification-loop` | affaan-m/ECC | A comprehensive verification system for Claude Code sessions. |
| `/ai-regression-testing` | affaan-m/ECC | Regression testing strategies for AI-assisted development. Sandbox-mode API testing without database dependencies, automated bug-check workflows, and patterns to catch AI blind spo |
| `/browser-qa` | affaan-m/ECC | Use this skill to automate visual testing and UI interaction verification using browser automation after deploying features. |
| `/codemyspec:qa fix [severity]` | Code-My-Spec/plugins | codemyspec QA: test a story, run integrations, or triage/fix findings by severity. |
| `/codemyspec:qa integrations` | Code-My-Spec/plugins | codemyspec QA: test a story, run integrations, or triage/fix findings by severity. |
| `/codemyspec:qa story <id>` | Code-My-Spec/plugins | codemyspec QA: test a story, run integrations, or triage/fix findings by severity. |
| `/codemyspec:qa triage [severity]` | Code-My-Spec/plugins | codemyspec QA: test a story, run integrations, or triage/fix findings by severity. |
| `/e2e-testing` | affaan-m/ECC | Playwright E2E testing patterns, Page Object Model, configuration, CI/CD integration, artifact management, and flaky test strategies. |
| `/qa` | garrytan/gstack | Systematically QA test a web application and fix bugs found. |
| `/qa-only` | garrytan/gstack | Report-only QA testing. |
| `/diagnosing-bugs` | mattpocock/skills | Diagnosis loop for hard bugs and performance regressions. Use when the user says "diagnose"/"debug this", or reports something broken/throwing/failing/slow. |
| `/investigate` | garrytan/gstack | Systematic debugging with root cause investigation. |




## Code Review Skills
| Name | Pack | Purpose |
| --- | --- | --- |
| `/codex` | garrytan/gstack | OpenAI Codex CLI wrapper — three modes. |
| `/codex review --xhigh` | garrytan/gstack | OpenAI Codex CLI wrapper — three modes. |
| `/santa-method` | affaan-m/ECC | Multi-agent adversarial verification with convergence loop. Two independent review agents must both pass before output ships. |
| `/code-review` |  | Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes — Standards (does the code follow this repo's documented coding standards?) and Spec (doe |
| `/review` | garrytan/gstack | Pre-landing PR review. |
| `/z-adversarial-review` | zacgoodwin/zg-skills | Blinded adversarial review for any GitHub PR. Assembles a blinded four-key input (spec, acceptance criteria, diff, throwaway worktree), spawns one fresh reviewer agent holding noth |

RoboRev is it's own specific thing that automates PRs
| Name | Pack | Purpose |
| --- | --- | --- |
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

## Deploying Skills

| Name | Pack | Purpose |
| --- | --- | --- |
| `/resolving-merge-conflicts` | mattpocock/skills | Use when you need to resolve an in-progress git merge/rebase conflict. |
| `/canary` | garrytan/gstack | Post-deploy canary monitoring. |
| `/canary <url>` | garrytan/gstack | Post-deploy canary monitoring. |
| `/canary <url> --baseline` | garrytan/gstack | Post-deploy canary monitoring. |
| `/canary <url> --duration 5m` | garrytan/gstack | Post-deploy canary monitoring. |
| `/canary <url> --pages <paths>` | garrytan/gstack | Post-deploy canary monitoring. |
| `/canary <url> --quick` | garrytan/gstack | Post-deploy canary monitoring. |
| `/canary-watch` | affaan-m/ECC | Use this skill to monitor and verify a deployed URL after releases — checks HTTP endpoints, SSE streams, static assets, console errors, and performance regressions after deploys, m |
| `/canary-watch --compare` | affaan-m/ECC | Use this skill to monitor and verify a deployed URL after releases — checks HTTP endpoints, SSE streams, static assets, console errors, and performance regressions after deploys, m |
| `/land-and-deploy` | garrytan/gstack | Land and deploy workflow. |
| `/landing-report` | garrytan/gstack | Read-only queue dashboard for workspace-aware ship. |
| `/ship` | garrytan/gstack | Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION, update CHANGELOG, commit, push, create PR. |

## Codebase Health Skills

| Name | Pack | Purpose |
| --- | --- | --- |
| `/improve-codebase-architecture` | mattpocock/skills | Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick. |
| `/codemyspec:develop refactor [ModuleName]` | Code-My-Spec/plugins | Full-lifecycle development — context orchestration, LiveView orchestration, and interactive refactoring. |
| `/clean-ai-slop` | zcaceres/skills | Find AI-generated noise on the current branch — tombstone comments, restating-the-code comments, callsite-reference comments, unused imports, dead internal symbols — propose each f |
| `/health` | garrytan/gstack | Code quality dashboard. |
| `/ponytail:ponytail-audit` | DietrichGebert/ponytail | Whole-repo audit for over-engineering. Like ponytail-review, but scans the entire codebase instead of a diff: a ranked list of what to delete, simplify, or replace with stdlib/nati |
| `/ponytail:ponytail-review` | DietrichGebert/ponytail | Code review focused exclusively on over-engineering. Finds what to delete: reinvented standard library, unneeded dependencies, speculative abstractions, dead flexibility. |
| `/production-audit` | affaan-m/ECC | Local-evidence production readiness audit for shipped apps, pre-launch reviews, post-merge checks, and "what breaks in prod?" questions without sending repo data to an external aud |
| `/quality-dead-code-analyzer` | zcaceres/skills | Analyze a codebase for dead code, duplicates, and circular dependencies using knip, jscpd, and madge, then validate findings to filter false positives. |
| `/investigate-repo <repo-url-or-path>` | zcaceres/skills | Audit an unfamiliar code repo (GitHub URL) for malicious patterns — clone shallow, grep, emit a verdict with file:line evidence. |
| `/repo-scan` | affaan-m/ECC | Cross-stack source code asset audit — classifies every file, detects embedded third-party libraries, and delivers actionable four-level verdicts per module with interactive HTML re |
| `/ui-slop-score` | uizze.com | Review a rendered web or mobile interface and score how generic it looks. Use for UI critique, design review, visual polish, screenshot review, pre-merge checks, and requests to fi |

## Mobile App Specific Skills

| Name | Pack | Purpose |
| --- | --- | --- |
| `/ios-clean` | garrytan/gstack | Remove the DebugBridge SPM package and all #if DEBUG wiring from an iOS app. |
| `/ios-design-review` | garrytan/gstack | Visual design audit for iOS apps on real hardware. |
| `/ios-fix` | garrytan/gstack | Autonomous iOS bug fixer. |
| `/ios-qa` | garrytan/gstack | Live-device iOS QA for SwiftUI apps. |
| `/ios-sync` | garrytan/gstack | Regenerate the iOS debug bridge against the latest upstream gstack templates. |


## Documentation Skills
| Name | Pack | Purpose |
| --- | --- | --- |
| `/document-release` | garrytan/gstack | Post-ship documentation update. |
| `/code-tour [path-to-tour]` | affaan-m/ECC | Walk an unfamiliar codebase and write a concise CODE_TOUR.md onboarding guide — the key components, a Mermaid diagram of how they connect, and the areas worth a closer look to unde |
| `/codebase-onboarding` | affaan-m/ECC | Analyze an unfamiliar codebase and generate a structured onboarding guide with architecture map, key entry points, conventions, and a starter CLAUDE.md. |
| `/make-pdf` | garrytan/gstack | Turn any markdown file into a publication-quality PDF. |
| `/ui-demo` | affaan-m/ECC | Record polished UI demo videos using Playwright. Use when the user asks to create a demo, walkthrough, screen recording, or tutorial video of a web application. |

Graphify is it's own specific thing
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



## Product Health Skills
| Name | Pack | Purpose |
| --- | --- | --- |
| `/benchmark` | garrytan/gstack | Performance regression detection using the browse daemon. |
| `/benchmark --diff` | garrytan/gstack | Performance regression detection using the browse daemon. |
| `/benchmark --trend` | garrytan/gstack | Performance regression detection using the browse daemon. |
| `/benchmark <url>` | garrytan/gstack | Performance regression detection using the browse daemon. |
| `/benchmark <url> --baseline` | garrytan/gstack | Performance regression detection using the browse daemon. |
| `/benchmark <url> --pages <paths>` | garrytan/gstack | Performance regression detection using the browse daemon. |
| `/benchmark <url> --quick` | garrytan/gstack | Performance regression detection using the browse daemon. |
| `/quality-project-health [focus]` | zcaceres/skills | Assess the current project's repo and work-tracker status, then rate overall project health from 0-10. |

## Agent Safety Skills
| Name | Pack | Purpose |
| --- | --- | --- |
| `/careful` | garrytan/gstack | Safety guardrails for destructive commands. |
| `/freeze` | garrytan/gstack | Restrict file edits to a specific directory for the session. |
| `/guard` | garrytan/gstack | Full safety mode: destructive command warnings + directory-scoped edits. |
| `/unfreeze` | garrytan/gstack | Clear the freeze boundary set by /freeze, allowing edits to all directories again. |
| `/delivery-gate` | affaan-m/ECC | Stop hook that blocks Claude from finishing until quality checks pass. Detects rationalization patterns (surface text heuristics), stale learning logs (filesystem mtime), and low d |
| `/quality-cli-agent-friendly-audit` | zcaceres/skills | Audit a CLI tool against the agent-friendliness checklist from Zbigniew Sobiecki's "Building Agent-Friendly CLIs". |


???
| `/retro` | garrytan/gstack | Weekly engineering retrospective. |


## Agent Only Assist Skills

| Name | Pack | Purpose |
| --- | --- | --- |
| `/council` | affaan-m/ECC | Convene a four-voice council for ambiguous decisions, tradeoffs, and go/no-go calls. |
| `/browse` | garrytan/gstack | Fast headless browser for QA testing and site dogfooding. |
| `/open-gstack-browser` | garrytan/gstack | Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in. |
| `/scrape` | garrytan/gstack | Pull data from a web page. |
| `/skillify` | garrytan/gstack | Codify the most recent successful /scrape flow into a permanent browser-skill on disk. |
| `/figma-generate-diagram` | anthropics/claude-plugins-official | MANDATORY prerequisite — load this skill BEFORE every `generate_diagram` tool call. |
| `/figma-use` | anthropics/claude-plugins-official | you MUST invoke this skill BEFORE every `use_figma` tool call. NEVER call `use_figma` directly without loading this skill first. |


# Scaffolding and Harness

## Agents and Personas 

See Agents Readme

## Token Savings

| Name | Pack | Purpose |
| --- | --- | --- |
|     |     |     |

## Anti Drift / Anti Hallucinations

| Name | Pack | Purpose |
| --- | --- | --- |
|     |     |     |


## Context Setting / Memory

| Name | Pack | Purpose |
| --- | --- | --- |
|     |     |     |


## AI Slop Clean up

| Name | Pack | Purpose |
| --- | --- | --- |
|     |     |     |


# Frameworks
## Applications

| Name | Purpose | URL |
| --- | --- | --- |
|     |     |     |


## MCP 

| Name | Purpose | URL |
| --- | --- | --- |
|     |     |     |


## Skill Packs (ish) 

| Name | Purpose | URL |
| --- | --- | --- |
|  Oldhand   |  Ticket Based Development Workflow   |  https://berwinsingh.github.io/oldhand/#top   |
|   CodeMySpec  |   Phoenix / Elixir workflow  |  https://codemyspec.com/   |
|   gStack  |   Y Combinator CEO's workflow to develop product businesses  |   https://github.com/garrytan/gstack  |
| rcs-harness    |   Wizard builds a harness based on project  |  https://github.com/ericrisco/rsc-harness   |
|   zcarceres  |  Developer's personal skills   |  https://github.com/zcaceres/skills   |
|   ECC  |  Everything (and the kitchen sink) skills   |  https://github.com/affaan-m/ECC   |
|   Matt Pocock's Skills  |  Low overhead ticket based workflow   |  https://github.com/mattpocock/skills   |

