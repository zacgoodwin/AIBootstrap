# GSD skills

All [open-gsd/gsd-core](https://github.com/open-gsd/gsd-core) skills, sorted by the same sections as the other files in docs/frameworks/. Upstream 8442d98 (2026-08-24) checked 2026-08-24.

gsd-core ships 71 skills, each paired with a `/gsd:<name>` command (identical sets), plus 35 agents, 28 hook scripts, 46 capability packs, 46 planning templates, and 104 reference docs. Sibling org repos carry 46 more skills — gsd-pi (37), gsd-spec-build-loop (5), and one each in gsd-browser, gsd-test-runner, agent-inbox, gsd-graph — folded into the tables below and tagged with their repo. Entries without a tag live in gsd-core.

# Product Process

## Pack Setup

| Execution | What it does |
| --- | --- |
| `/gsd:config` | Configure GSD settings — workflow toggles, advanced knobs, integrations, and model profile |
| `/gsd:settings` | Configure GSD workflow toggles and model profile |
| `/gsd:surface` | Toggle which skills are surfaced — apply a profile, list, or disable a cluster without reinstall |
| `/gsd:update` | Update GSD to latest version with changelog display |
| `/gsd:workspace` | Manage GSD workspaces — create, list, or remove isolated workspace environments |

## Starting Direction / Human Helper

| Execution | What it does |
| --- | --- |
| `/gsd:explore` | Socratic ideation and idea routing — think through ideas before committing to plans |
| `/gsd:new-project` | Initialize a new project with deep context gathering and PROJECT.md |
| `/gsd:capture` | Capture ideas, tasks, notes, and seeds to their destination |
| `/gsd:spike` | Spike an idea through experiential exploration, or propose what to spike next (frontier mode) |
| `gsd-loop-discover` | (gsd-spec-build-loop) Chart or advance one interactive discovery map, shape it into delivery slices, then hand those slices to gsd-loop-spec. Never runs unattended or writes product code |

## PRD

| Execution | What it does |
| --- | --- |
| `/gsd:spec-phase` | Clarify WHAT a phase delivers with ambiguity scoring; produces a SPEC.md before discuss-phase |
| `/gsd:import` | Ingest external plans with conflict detection against project decisions before writing anything |
| `/gsd:review` | Request cross-AI peer review of phase plans from external AI CLIs |
| `/gsd:plan-review-convergence` | Cross-AI plan convergence — replan until review concerns are resolved |
| `grill-me` | (gsd-pi) Relentless sequential interview that stress-tests a plan or design until every decision branch is resolved; blocks execution until alignment is reached |
| `write-milestone-brief` | (gsd-pi) Synthesize the current conversation into a milestone brief (PRD), written to M###-CONTEXT.md or a GitHub issue on explicit confirmation |
| `gsd-loop-spec` | (gsd-spec-build-loop) Turn a rough idea or cleared discovery map into contract-grade GitHub issues for the gsd-loop queue. Interactive only |

## Initial Design

| Execution | What it does |
| --- | --- |
| `/gsd:sketch` | Sketch UI/design ideas with throwaway HTML mockups, or propose what to sketch next (frontier mode) |

# Development Process

## Loop

| Execution | What it does |
| --- | --- |
| `/gsd:next` | Smart entry — detect project state and route to the right next GSD action |
| `/gsd:progress` | Check progress, advance workflow, or dispatch freeform intent — the unified GSD situational command |
| `/gsd:autonomous` | Run all remaining phases autonomously — discuss→plan→execute per phase |
| `/gsd:discuss-phase` | Gather phase context through adaptive questioning before planning |
| `/gsd:plan-phase` | Create detailed phase plan (PLAN.md) with verification loop |
| `/gsd:ultraplan-phase` | [BETA] Offload plan phase to Claude Code's ultraplan cloud; review in browser and import back |
| `/gsd:execute-phase` | Execute all plans in a phase with wave-based parallelization |
| `/gsd:verify-work` | Validate built features through conversational UAT |
| `/gsd:mvp-phase` | Plan a phase as a vertical MVP slice — user story, SPIDR splitting, then plan-phase |
| `/gsd:manager` | Interactive command center for managing multiple phases from one terminal |
| `/gsd:workstreams` | Manage parallel workstreams — list, create, switch, status, progress, complete, and resume |
| `/gsd:new-milestone` | Start a new milestone cycle — update PROJECT.md and route to requirements |
| `/gsd:complete-milestone` | Archive completed milestone and prepare for next version |
| `/gsd:audit-milestone` | Audit milestone completion against original intent before archiving |
| `gsd-orchestrator` | (gsd-pi) Build software products autonomously via GSD headless mode — write a spec, launch a build, poll for completion, handle blockers, track costs, verify the result |
| `gsd-headless` | (gsd-pi) Orchestrate GSD projects programmatically via headless CLI — create milestones from specs, execute workflows, monitor progress, pause/stop/skip/steer |
| `gsd-loop-build` | (gsd-spec-build-loop) Build the oldest safe gsd:ready GitHub issue or repair one gsd:rework PR; each invocation completes exactly one pass, then stops |
| `gsd-loop-schedule` | (gsd-spec-build-loop) Create or update a native recurring task that repeatedly runs one-pass gsd-loop builder or reviewer work |

## Designer Implementation

| Execution | What it does |
| --- | --- |
| `/gsd:ui-phase` | Generate UI design contract (UI-SPEC.md) for frontend phases |
| `/gsd:ui-review` | Retroactive 6-pillar visual audit of implemented frontend code |
| `frontend-design` | (gsd-pi) Create distinctive, production-grade frontend interfaces with high design quality, avoiding generic AI aesthetics |
| `make-interfaces-feel-better` | (gsd-pi) Design-engineering principles for polished UI — animations, hover states, shadows, typography, micro-interactions |
| `accessibility` | (gsd-pi) Audit and improve web accessibility following WCAG 2.1 — screen reader support, keyboard navigation |
| `web-design-guidelines` | (gsd-pi) Review UI code for Web Interface Guidelines compliance — accessibility, design, UX best practices |
| `userinterface-wiki` | (gsd-pi) UI/UX best practices for web interfaces across 11 categories from animation principles to typography; outputs file:line findings |
| `core-web-vitals` | (gsd-pi) Optimize Core Web Vitals (LCP, INP, CLS) for better page experience and search ranking |
| `web-quality-audit` | (gsd-pi) Comprehensive web quality audit covering performance, accessibility, SEO, and best practices |

## Technical Stack Specific

| Execution | What it does |
| --- | --- |
| `/gsd:ai-integration-phase` | Generate an AI-SPEC.md design contract for phases that involve building AI systems |
| `/gsd:eval-review` | Audit an executed AI phase's evaluation coverage and produce an EVAL-REVIEW.md remediation plan |
| `react-best-practices` | (gsd-pi) React and Next.js performance optimization guidelines from Vercel Engineering |

# Code Architecture

| Execution | What it does |
| --- | --- |
| `/gsd:map-codebase` | Analyze codebase with parallel mapper agents to produce .planning/codebase/ documents |
| `api-design` | (gsd-pi) Design or review an HTTP/REST/GraphQL API for versioning, pagination, error shapes, idempotency, auth, status codes, and breaking-change management |
| `design-an-interface` | (gsd-pi) Produce 3+ radically different designs for a module, API, or interface, compare them, and synthesize a recommendation ("Design It Twice") |

# Dev Tooling

## Requirements

| Execution | What it does |
| --- | --- |
| `/gsd:phase` | CRUD for phases in ROADMAP.md — add, insert, remove, or edit phases |
| `/gsd:review-backlog` | Review and promote backlog items to active milestone |
| `/gsd:inbox` | Triage and review open GitHub issues and PRs against project templates and contribution guidelines |
| `decompose-into-slices` | (gsd-pi) Break a plan or milestone brief into independently-grabbable vertical slices (tracer bullets) with dependency order |

## Developing

| Execution | What it does |
| --- | --- |
| `/gsd:quick` | Execute a quick task with GSD guarantees (atomic commits, state tracking) but skip optional agents |
| `/gsd:fast` | Execute a trivial task inline — no subagents, no planning overhead |
| `/gsd:debug` | Systematic debugging with persistent state across context resets |
| `/gsd:pr-branch` | Create a clean PR branch by filtering out .planning/ commits — ready for code review |
| `/gsd:undo` | Safe git revert. Roll back phase or plan commits using the phase manifest with dependency checks |
| `best-practices` | (gsd-pi) Apply modern web development best practices for security, compatibility, and code quality |
| `debug-like-expert` | (gsd-pi) Deep analysis debugging mode — evidence gathering, hypothesis testing, rigorous verification for complex issues |

## Testing

| Execution | What it does |
| --- | --- |
| `/gsd:add-tests` | Generate tests for a completed phase based on UAT criteria and implementation |
| `/gsd:audit-uat` | Cross-phase audit of all outstanding UAT and verification items |
| `/gsd:validate-phase` | Retroactively audit and fill Nyquist validation gaps for a completed phase |
| `tdd` | (gsd-pi) Test-driven development with red-green-refactor loops around vertical slices, not horizontal layers |
| `test` | (gsd-pi) Generate or run tests — auto-detects framework, generates tests for source files, or runs suites with failure analysis |
| `run-and-die` | (gsd-test-runner) Run a project's Node tests without leaking orphaned processes — call `gsd-test run` instead of spawning test processes locally |
| `agent-inbox` | (agent-inbox) Create temporary email inboxes and receive emails for testing auth flows, email verification, and account confirmation (MCP server, mail.tm + 1secmail) |

## Code Review

| Execution | What it does |
| --- | --- |
| `/gsd:code-review` | Review source files changed during a phase for bugs, security issues, and code quality problems |
| `review` | (gsd-pi) Review code changes for security, performance, bugs, and quality — staged, unstaged, commits, or PR-ready diffs |
| `gsd-loop-review` | (gsd-spec-build-loop) Audit one open PR against its linked issue contract and required CI, then post a gsd-loop verdict and labels; never merges or pushes |

## Deploying

| Execution | What it does |
| --- | --- |
| `/gsd:ship` | Create PR, run review, and prepare for merge after verification passes |
| `github-workflows` | (gsd-pi) Work with GitHub Actions CI/CD workflows — read live syntax, monitor runs, debug failures |

## Codebase Health

| Execution | What it does |
| --- | --- |
| `/gsd:audit-fix` | Autonomous audit-to-fix pipeline — find issues, classify, fix, test, commit |
| `/gsd:cleanup` | Archive accumulated phase directories from completed milestones |
| `/gsd:health` | Diagnose planning directory health and optionally repair issues |
| `code-optimizer` | (gsd-pi) Deep code optimization audit using parallel specialist agents — DB queries, memory leaks, complexity, concurrency, bundle size, dead code, I/O, caching |
| `dependency-upgrade` | (gsd-pi) Plan, batch, and verify dependency upgrades safely — risk tiers, ordered batches, auditable commit sequence |
| `lint` | (gsd-pi) Lint and format code — auto-detects ESLint, Biome, Prettier, or language-native formatters and runs them with auto-fix |

## Documentation

| Execution | What it does |
| --- | --- |
| `/gsd:docs-update` | Generate or update project documentation verified against the codebase |
| `/gsd:milestone-summary` | Generate a comprehensive project summary from milestone artifacts for team onboarding and review |
| `write-docs` | (gsd-pi) Collaborative authoring workflow for proposals, specs, decision docs, READMEs, and ADRs — gather context, iterate on structure, reader-test for a stranger |

## Security

| Execution | What it does |
| --- | --- |
| `/gsd:secure-phase` | Retroactively verify threat mitigations for a completed phase |
| `security-review` | (gsd-pi) Threat-model-driven security review — STRIDE-style pass producing a filing-ready report with severity, exploit scenario, and remediation |

## Product Health

| Execution | What it does |
| --- | --- |
| `/gsd:stats` | Display project statistics — phases, plans, requirements, git metrics, and timeline |
| `observability` | (gsd-pi) Add agent-first observability — structured logs, health endpoints, failure-state persistence — so the next agent can diagnose problems unattended |

## Agent Only Assist

| Execution | What it does |
| --- | --- |
| `/gsd:help` | Show available GSD commands and usage guide |
| `/gsd:ns-context` | codebase intel · map graphify docs learnings mempalace |
| `/gsd:ns-ideate` | exploration capture · explore sketch spike spec capture |
| `/gsd:ns-manage` | config workspace · workstreams thread update ship inbox |
| `/gsd:ns-project` | project lifecycle · milestones audits summary |
| `/gsd:ns-review` | quality gates · code review debug audit security eval ui |
| `/gsd:ns-workflow` | workflow · discuss plan execute verify phase progress |
| `btw` | (gsd-pi) Ask a quick side question about your current work without derailing the main task — answers from existing conversation context only |
| `agent-browser` | (gsd-pi) Browser automation CLI for AI agents — navigate, fill forms, click, screenshot, scrape, log in, test web apps |
| `gsd-browser` | (gsd-browser) Open GSD native browser automation — real Chrome/Chromium control: navigate, inspect localhost, click, type, fill forms, screenshots, stable snapshot refs |

# Scaffolding and Harness

## Harness Development

| Execution | What it does |
| --- | --- |
| `/gsd:forensics` | Post-mortem investigation for failed GSD workflows — diagnoses what went wrong |
| `create-gsd-extension` | (gsd-pi) Create, debug, and iterate on GSD extensions — TypeScript modules adding tools, commands, event hooks, custom UI, and providers |
| `create-mcp-server` | (gsd-pi) Build, iterate, and evaluate MCP servers that expose external services as tools — schema design, error handling, pagination, Inspector testing, evals |
| `create-skill` | (gsd-pi) Expert guidance for creating, writing, building, and refining GSD skills and SKILL.md files |
| `create-workflow` | (gsd-pi) Conversational guide for creating valid YAML workflow definitions |
| `forensics` | (gsd-pi) Post-mortem a failed GSD auto-mode run — traces symptom to root cause via .gsd/ artifacts, producing a filing-ready bug report with file:line refs |

## Harness Setup

| Execution | What it does |
| --- | --- |
| `/gsd:onboard` | Guide existing codebase onboarding through mapping, doc ingest, and planning setup |
| `/gsd:ingest-docs` | Bootstrap or merge a .planning/ setup from existing ADRs, PRDs, SPECs, and docs in a repo |

## Anti Drift / Anti Hallucinations

| Execution | What it does |
| --- | --- |
| `verify-before-complete` | (gsd-pi) Block completion claims until verification evidence has been produced in the current message — evidence before claims, always; fresh output or no claim |

## Context Setting / Memory

| Execution | What it does |
| --- | --- |
| `/gsd:pause-work` | Create context handoff when pausing work mid-phase |
| `/gsd:resume-work` | Resume work from previous session with full context restoration |
| `/gsd:thread` | Manage persistent context threads for cross-session work |
| `/gsd:extract-learnings` | Extract decisions, lessons, patterns, and surprises from completed phase artifacts |
| `/gsd:mempalace-capture` | File a phase artifact into MemPalace; mirror decision facts into its temporal KG |
| `/gsd:mempalace-recall` | Recall decisions, patterns, and surprises from MemPalace before planning |
| `/gsd:profile-user` | Generate developer behavioral profile and create Claude-discoverable artifacts |
| `handoff` | (gsd-pi) Prepare a clean cross-session handoff — writes a focused continue.md and ensures STATE.md and summary artifacts are current |

## Knowledge Base

| Execution | What it does |
| --- | --- |
| `/gsd:graphify` | Build, query, and inspect the project knowledge graph in .planning/graphs/ |
| `spike-wrap-up` | (gsd-pi) Package findings from a completed spike into a durable project-local skill that auto-loads on future similar work |
| `gsd-graph` | (gsd-graph) Auto-build and continuously update the project knowledge graph (.gsd-graph/) for brownfield onboarding and ongoing work — enable, sync, status, ask |

# Agents

| Name | What it does |
| --- | --- |
| `gsd-advisor-researcher` | Researches a single gray area decision and returns a structured comparison table with rationale. Spawned by discuss-phase advisor mode |
| `gsd-ai-researcher` | Researches a chosen AI framework's official docs to produce implementation-ready guidance; writes AI-SPEC.md Framework Quick Reference sections. Spawned by /gsd:ai-integration-phase |
| `gsd-assumptions-analyzer` | Deeply analyzes codebase for a phase and returns structured assumptions with evidence. Spawned by discuss-phase assumptions mode |
| `gsd-code-fixer` | Applies fixes to code review findings from REVIEW.md, committing each fix atomically. Spawned by /gsd:code-review --fix |
| `gsd-code-reviewer` | Reviews source files for bugs, security issues, and code quality; produces severity-classified REVIEW.md. Spawned by /gsd:code-review |
| `gsd-codebase-mapper` | Explores codebase and writes structured analysis documents by focus area (tech, arch, quality, concerns). Spawned by map-codebase |
| `gsd-debug-session-manager` | Manages multi-cycle /gsd:debug checkpoint and continuation loop in isolated context; spawns gsd-debugger agents, applies fixes |
| `gsd-debugger` | Investigates bugs using scientific method, manages debug sessions, handles checkpoints. Spawned by /gsd:debug orchestrator |
| `gsd-doc-classifier` | Classifies a single planning document as ADR, PRD, SPEC, DOC, or UNKNOWN with title, scope, and cross-references. Spawned in parallel by /gsd:ingest-docs |
| `gsd-doc-synthesizer` | Synthesizes classified planning docs into one consolidated context; detects conflicts and writes INGEST-CONFLICTS.md. Spawned by /gsd:ingest-docs |
| `gsd-doc-verifier` | Verifies factual claims in generated docs against the live codebase; returns structured JSON per doc |
| `gsd-doc-writer` | Writes and updates project documentation from a doc_assignment block (create/update/supplement) |
| `gsd-dom-verifier` | Verifies live-DOM acceptance criteria for a completed execution wave via a browser MCP server; writes DOM-VERIFY.md. Additive — never blocks a wave |
| `gsd-domain-researcher` | Researches the business domain of the AI system being built — expert evaluation criteria, failure modes, regulatory context. Spawned by /gsd:ai-integration-phase |
| `gsd-eval-auditor` | Retroactive audit of an AI phase's eval coverage against AI-SPEC.md; scores dimensions COVERED/PARTIAL/MISSING into EVAL-REVIEW.md. Spawned by /gsd:eval-review |
| `gsd-eval-planner` | Designs a structured evaluation strategy for an AI phase — failure modes, rubrics, tooling, reference dataset. Spawned by /gsd:ai-integration-phase |
| `gsd-executor` | Executes GSD plans with atomic commits, deviation handling, checkpoint protocols, and state management. Spawned by execute-phase |
| `gsd-framework-selector` | Interactive decision matrix to surface the right AI/LLM framework for the use case; scored recommendation with rationale |
| `gsd-integration-checker` | Verifies cross-phase integration and E2E flows — phases connect properly and user workflows complete end-to-end |
| `gsd-intel-updater` | Analyzes codebase and writes structured intel files to .planning/intel/ |
| `gsd-mempalace-curator` | Ship-time MemPalace curation — session diary, cross-project tunnels, temporal KG mirroring, drawer pruning. Spawned at ship:post |
| `gsd-nyquist-auditor` | Fills Nyquist validation gaps by generating tests and verifying coverage for phase requirements |
| `gsd-pattern-mapper` | Analyzes codebase for existing patterns; produces PATTERNS.md mapping new files to closest analogs. Spawned by /gsd:plan-phase |
| `gsd-phase-researcher` | Researches how to implement a phase before planning; produces RESEARCH.md consumed by gsd-planner. Spawned by /gsd:plan-phase |
| `gsd-plan-checker` | Verifies plans will achieve phase goal before execution via goal-backward analysis. Spawned by /gsd:plan-phase |
| `gsd-planner` | Creates executable phase plans with task breakdown, dependency analysis, and goal-backward verification. Spawned by /gsd:plan-phase |
| `gsd-project-researcher` | Researches domain ecosystem before roadmap creation; produces .planning/research/ files. Spawned by /gsd:new-project or /gsd:new-milestone |
| `gsd-research-synthesizer` | Synthesizes research outputs from parallel researcher agents into SUMMARY.md. Spawned by /gsd:new-project |
| `gsd-roadmapper` | Creates project roadmaps with phase breakdown, requirement mapping, success criteria, and coverage validation. Spawned by /gsd:new-project |
| `gsd-security-auditor` | Verifies threat mitigations from PLAN.md threat model exist in implemented code; verdict SECURED / OPEN_THREATS / ESCALATE. Spawned by /gsd:secure-phase |
| `gsd-ui-auditor` | Retroactive 6-pillar visual audit of implemented frontend code; produces scored UI-REVIEW.md. Spawned by /gsd:ui-review |
| `gsd-ui-checker` | Validates UI-SPEC.md design contracts against 7 quality dimensions; BLOCK/FLAG/PASS verdicts. Spawned by /gsd:ui-phase |
| `gsd-ui-researcher` | Produces UI-SPEC.md design contract for frontend phases; detects design system state, asks only unanswered questions. Spawned by /gsd:ui-phase |
| `gsd-user-profiler` | Analyzes extracted session messages across 8 behavioral dimensions; scored developer profile with confidence and evidence |
| `gsd-verifier` | Verifies phase goal achievement through goal-backward analysis — codebase delivers what the phase promised. Creates VERIFICATION.md |

# Hooks

Wired via `hooks/hooks.json`; `managed-hooks-registry.cjs` tracks the managed set. Runtime-adapter variants exist for Cursor and Windsurf.

| Name | What it does |
| --- | --- |
| `gsd-agent-isolation-guard.js` | PreToolUse (Agent/Task): blocks subagent dispatches that violate GSD agent isolation |
| `gsd-prompt-guard.js` | PreToolUse (Write/Edit): prompt injection guard |
| `gsd-read-guard.js` | PreToolUse (Write/Edit): read guard on file writes |
| `gsd-write-guard.js` | PreToolUse (Write): write guard |
| `gsd-worktree-path-guard.js` | PreToolUse (Write/Edit/MultiEdit): keeps writes inside the correct worktree path |
| `gsd-workflow-guard.js` | PreToolUse: enforces GSD workflow rules |
| `gsd-validate-commit.sh` | PreToolUse: enforces Conventional Commits format |
| `gsd-read-injection-scanner.js` | PostToolUse (Read/WebFetch/WebSearch): scans fetched/read content for prompt injection |
| `gsd-context-monitor.js` | PostToolUse/SubagentStop/Stop/PreCompact: monitors context usage |
| `gsd-graphify-update.sh` | PostToolUse (Bash): auto-rebuilds the project knowledge graph |
| `gsd-phase-boundary.sh` | PostToolUse: detects .planning/ file writes at phase boundaries |
| `gsd-ensure-canonical-path.js` | SessionStart: normalizes the session to the canonical project path |
| `gsd-session-state.sh` | SessionStart: injects project state reminder |
| `gsd-check-update.js` / `gsd-check-update-worker.js` | SessionStart: background GSD update check with cached result |
| `gsd-update-banner.js` | SessionStart: surfaces GSD update availability banner |
| `gsd-config-reload.js` | FileChanged (config.json): hot-reloads GSD config context |
| `gsd-statusline.js` | Claude Code statusline, GSD edition (phase/progress display) |
| `gsd-node-runner.sh` | Portable node resolver for managed JS hook commands (--portable-hooks) |
| `gsd-cursor-*.js` (6 files) | Cursor runtime adapters: session-start, pre-tool, post-tool, stop, subagent-start, subagent-stop |
| `gsd-windsurf-pre-command.js` / `gsd-windsurf-pre-write.js` | Windsurf/Cascade adapters for pre-command and pre-write events |

# Other offerings

| Name | What it does |
| --- | --- |
| `gsd-core/bin/gsd-tools.cjs` | Deterministic CLI backing the skills — state, roadmap, phase, milestone, config, and workstream operations |
| `capabilities/` (46 packs) | Pluggable capability packs: runtime adapters (claude, cursor, codex, gemini, copilot, windsurf, opencode, cline, kilo, trae, qwen, kimi, zcode, antigravity, vscode, hermes, codebuddy, augment, llama-cpp, lm-studio, ollama, pi) and feature packs (tdd, security, code-review, coderabbit, audit, drift, gap-analysis, graphify, intel, mempalace, nyquist, pattern-mapper, live-dom-uat, external-job, claude-orchestration, ai-integration, assumption-delta, broken-windows, profile-pipeline, refactor-trigger, research, schema-gate, ui) |
| `gsd-core/templates/` (46 files) | Planning artifact templates: project, roadmap, milestone, spec, UI-SPEC, AI-SPEC, UAT, DEBUG, VALIDATION, research, retrospective, codebase docs, config.json, continue-here handoff |
| `gsd-core/references/` (104 docs) | Reference docs loaded by skills/agents: debugger playbooks, gates, checkpoints, TDD, context budget, git integration, iOS scaffold, edge-probe fixtures, few-shot examples |
| `gsd-core/contexts/` | Context presets: dev.md, research.md, review.md |
| `.claude-plugin` + multi-runtime installers | Ships as a Claude Code plugin; also installs to Cursor, Windsurf, Codex, Gemini, OpenCode, Cline, and other runtimes via the capability packs |
| Localized READMEs + `docs/` | README in ja-JP, ko-KR, pt-BR, zh-CN; docs/ carries ADRs, PRDs, registries, skill discovery contract |
| Sibling repos (org) | gsd-pi (standalone pi coding agent bundling the 37 tagged skills), gsd-spec-build-loop (issue-driven spec→build→review loop), gsd-browser (native browser automation), gsd-test-runner (leak-free Node test runner), agent-inbox (temp email MCP server), gsd-graph (knowledge graph auto-builder), gsd-cursor, gsd-cloud-daemon, gsd-pi-presets, gsd-pi-config, marketplace-gsd-dev, docs |
