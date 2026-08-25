# GSD agents

All [open-gsd/gsd-core](https://github.com/open-gsd/gsd-core) agents, sorted by
the same sections as [IN-REPO-AGENTS.md](IN-REPO-AGENTS.md). 35 agents. Upstream 8442d98
(2026-08-24) checked 2026-08-24. Skills for the same pack:
docs/frameworks/GSD.MD.

These are pipeline agents, not a general-purpose crew: each is spawned by a
specific `/gsd:*` command and each writes a named planning artifact under
`.planning/`. You normally run the command, not the agent. Every name is
prefixed `gsd-` upstream and is kept that way here.

Adds one section the shared taxonomy lacks: **Design & UI**, for the three
agents that own the UI-SPEC design contract.

## Plan & Architecture

| Execution | What it does |
|---|---|
| Agent subagent_type=`gsd-roadmapper` | Creates project roadmaps with phase breakdown, requirement mapping, success criteria, and coverage validation. Spawned by /gsd:new-project. |
| Agent subagent_type=`gsd-planner` | Creates executable phase plans with task breakdown, dependency analysis, and goal-backward verification. Spawned by /gsd:plan-phase. |
| Agent subagent_type=`gsd-plan-checker` | Verifies plans will achieve the phase goal before execution, via goal-backward analysis. Spawned by /gsd:plan-phase. |
| Agent subagent_type=`gsd-pattern-mapper` | Analyzes the codebase for existing patterns; produces PATTERNS.md mapping new files to their closest analogs. Spawned by /gsd:plan-phase. |
| Agent subagent_type=`gsd-codebase-mapper` | Explores the codebase and writes structured analysis documents by focus area (tech, arch, quality, concerns). Spawned by map-codebase. |
| Agent subagent_type=`gsd-assumptions-analyzer` | Deeply analyzes the codebase for a phase and returns structured assumptions with evidence. Spawned by discuss-phase assumptions mode. |
| Agent subagent_type=`gsd-framework-selector` | Interactive decision matrix surfacing the right AI/LLM framework for the use case; returns a scored recommendation with rationale. |
| Agent subagent_type=`gsd-intel-updater` | Analyzes the codebase and writes structured intel files to .planning/intel/. |

## Code Review

| Execution | What it does |
|---|---|
| Agent subagent_type=`gsd-code-reviewer` | Reviews source files for bugs, security issues, and code quality; produces a severity-classified REVIEW.md. Spawned by /gsd:code-review. |
| Agent subagent_type=`gsd-code-fixer` | Applies fixes to code review findings from REVIEW.md, committing each fix atomically. Spawned by /gsd:code-review --fix. |
| Agent subagent_type=`gsd-security-auditor` | Verifies threat mitigations from the PLAN.md threat model exist in implemented code; returns SECURED / OPEN_THREATS / ESCALATE. Spawned by /gsd:secure-phase. |

## Build, Test & QA

| Execution | What it does |
|---|---|
| Agent subagent_type=`gsd-executor` | Executes GSD plans with atomic commits, deviation handling, checkpoint protocols, and state management. Spawned by execute-phase. |
| Agent subagent_type=`gsd-verifier` | Verifies phase goal achievement through goal-backward analysis: does the codebase deliver what the phase promised. Creates VERIFICATION.md. |
| Agent subagent_type=`gsd-integration-checker` | Verifies cross-phase integration and E2E flows: phases connect properly and user workflows complete end to end. |
| Agent subagent_type=`gsd-nyquist-auditor` | Fills Nyquist validation gaps by generating tests and verifying coverage for phase requirements. |
| Agent subagent_type=`gsd-dom-verifier` | Verifies live-DOM acceptance criteria for a completed execution wave via a browser MCP server; writes DOM-VERIFY.md. Additive, never blocks a wave. |
| Agent subagent_type=`gsd-debugger` | Investigates bugs using the scientific method, manages debug sessions, handles checkpoints. Spawned by the /gsd:debug orchestrator. |
| Agent subagent_type=`gsd-debug-session-manager` | Manages the multi-cycle /gsd:debug checkpoint and continuation loop in isolated context; spawns gsd-debugger agents and applies fixes. |
| Agent subagent_type=`gsd-eval-planner` | Designs a structured evaluation strategy for an AI phase: failure modes, rubrics, tooling, reference dataset. Spawned by /gsd:ai-integration-phase. |
| Agent subagent_type=`gsd-eval-auditor` | Retroactive audit of an AI phase's eval coverage against AI-SPEC.md; scores dimensions COVERED/PARTIAL/MISSING into EVAL-REVIEW.md. Spawned by /gsd:eval-review. |

## Design & UI

| Execution | What it does |
|---|---|
| Agent subagent_type=`gsd-ui-researcher` | Produces the UI-SPEC.md design contract for frontend phases; detects design system state and asks only unanswered questions. Spawned by /gsd:ui-phase. |
| Agent subagent_type=`gsd-ui-checker` | Validates UI-SPEC.md design contracts against 7 quality dimensions; returns BLOCK/FLAG/PASS. Spawned by /gsd:ui-phase. |
| Agent subagent_type=`gsd-ui-auditor` | Retroactive 6-pillar visual audit of implemented frontend code; produces a scored UI-REVIEW.md. Spawned by /gsd:ui-review. |

## Docs & Research

| Execution | What it does |
|---|---|
| Agent subagent_type=`gsd-project-researcher` | Researches the domain ecosystem before roadmap creation; produces .planning/research/ files. Spawned by /gsd:new-project or /gsd:new-milestone. |
| Agent subagent_type=`gsd-phase-researcher` | Researches how to implement a phase before planning; produces RESEARCH.md consumed by gsd-planner. Spawned by /gsd:plan-phase. |
| Agent subagent_type=`gsd-domain-researcher` | Researches the business domain of the AI system being built: expert evaluation criteria, failure modes, regulatory context. Spawned by /gsd:ai-integration-phase. |
| Agent subagent_type=`gsd-ai-researcher` | Researches a chosen AI framework's official docs to produce implementation-ready guidance; writes AI-SPEC.md Framework Quick Reference sections. |
| Agent subagent_type=`gsd-advisor-researcher` | Researches a single gray-area decision and returns a structured comparison table with rationale. Spawned by discuss-phase advisor mode. |
| Agent subagent_type=`gsd-research-synthesizer` | Synthesizes research outputs from parallel researcher agents into SUMMARY.md. Spawned by /gsd:new-project after 4 researcher agents complete. |
| Agent subagent_type=`gsd-doc-classifier` | Classifies a single planning document as ADR, PRD, SPEC, DOC, or UNKNOWN with title, scope, and cross-references. Spawned in parallel by /gsd:ingest-docs. |
| Agent subagent_type=`gsd-doc-synthesizer` | Synthesizes classified planning docs into one consolidated context; detects conflicts and writes INGEST-CONFLICTS.md. Spawned by /gsd:ingest-docs. |
| Agent subagent_type=`gsd-doc-writer` | Writes and updates project documentation from a doc_assignment block (create/update/supplement). |
| Agent subagent_type=`gsd-doc-verifier` | Verifies factual claims in generated docs against the live codebase; returns structured JSON per doc. |

## Agent Harness

| Execution | What it does |
|---|---|
| Agent subagent_type=`gsd-user-profiler` | Analyzes extracted session messages across 8 behavioral dimensions; returns a scored developer profile with confidence and evidence. |
| Agent subagent_type=`gsd-mempalace-curator` | Ship-time MemPalace curation: session diary, cross-project tunnels, temporal KG mirroring, drawer pruning. Spawned at ship:post. |
