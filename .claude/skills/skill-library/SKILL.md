---
name: skill-library
description: Router into the parked skill/agent library (.claude/skill-library/, .claude/agent-library/). Use when a task needs a capability not in the DAILY set — stack patterns (React, Rust, Angular, Java, SQL, Redis, Docker), TDD/testing, security scans, orchestration harnesses, deep research, meta/curation tooling — or when promoting library items after the stack is chosen.
---

# Skill library router

This repo keeps two buckets (sorted by /agent-sort, evidence-based):

- **DAILY** — auto-loaded every session: `.claude/skills/` and `.claude/agents/`.
  Product-thinking core, the shipping flow (stack-ship, z-adversarial-review),
  graphify, writing-for-agents, and the 13 curated agents + typescript-reviewer.
- **LIBRARY** — parked, not loaded: `.claude/skill-library/<name>/` (148 skills)
  and `.claude/agent-library/<name>.md` (33 agents). Kept in-repo so child
  repos inherit the full pack and can promote per stack at bootstrap.

## Finding a library skill

`ls .claude/skill-library` or grep its SKILL.md frontmatter. Trigger map:

- **Frontend / UI**: react-patterns, react-performance, react-testing,
  react-native-patterns, frontend-patterns, frontend-a11y, accessibility,
  frontend-design-direction, design-system, make-interfaces-feel-better,
  anti-slop UI, ui-demo, frontend-slides, acid-trip
- **Backend / data**: backend-patterns, api-design, api-connector-builder,
  postgres-patterns, mysql-patterns, redis-patterns, database-migrations,
  contract-first, mailtrap-email-integration
- **Languages**: rust-patterns, rust-testing, java-coding-standards,
  angular-developer, bun-runtime, coding-standards, error-handling
- **Testing / quality**: tdd, tdd-workflow, e2e-testing, ai-regression-testing,
  browser-qa, verification-loop, clean-ai-slop, plankton-code-quality,
  quality-* (dead-code, docs-update, project-health, cli-audit), production-audit
- **Security**: security-review, security-scan, security-gitleaks,
  security-openssf, defi-amm-security, investigate-repo
- **Ops / deploy**: deployment-patterns, docker-patterns, canary-watch,
  git-workflow, github-ops, terminal-ops, resolving-merge-conflicts
- **Orchestration / harness**: orch-* family, gan-style-harness,
  autonomous-loops, continuous-agent-loop, team-agent-orchestration,
  team-builder, parallel-execution-optimizer, ralphinho-rfc-pipeline,
  plan-orchestrate, wayfinder, santa-method, dynamic-workflow-mode,
  agent-harness-construction, agent-architecture-audit, loop-design-check
- **Planning / specs**: to-spec, to-tickets, implement, decompose,
  intent-driven-development, grill-me, grilling, grill-with-docs, council,
  plan-canvas, prototype, product-capability, product-lens, wizard, triage
- **Research / competitive**: deep-research, research, find-docs, search-first,
  competitive-platform-analysis, benchmark-methodology,
  competitive-report-structure, iterative-retrieval
- **Codebase understanding**: codebase-onboarding, codebase-design, code-tour,
  domain-modeling, improve-codebase-architecture, repo-scan, spec-miner (agent),
  architecture-decision-records, inherit-legacy-style
- **Meta / curation**: skill-scout, skill-stocktake, skill-comply, config-gc,
  context-budget, cost-tracking, token-budget-advisor, optimize-permissions,
  optimize-skill-activation, rules-distill, hookify-rules, strategic-compact,
  unified-memory, continuous-learning-v2, delivery-gate, eval-harness,
  agent-self-evaluation, growth-log, knowledge-ops, living-docs-governance,
  workspace-surface-audit, ecc-* / configure-ecc / everything-claude-code,
  regex-vs-llm-structured-text, prompt-optimizer, agentic-engineering
- **Handoffs / session**: handoff, claude-handoff, teach, wait-what, loop-me,
  ask-matt, setup-matt-pocock-skills
- **Library agents** (`.claude/agent-library/`): code-reviewer, code-architect,
  code-explorer, code-simplifier, architect, planner, security-reviewer,
  silent-failure-hunter, performance-optimizer, refactor-cleaner, tdd-guide,
  type-design-analyzer, comment-analyzer, database-reviewer, react-*, rust-*,
  gan-*, opensource-*, e2e-runner, doc-updater, docs-lookup, rag-pipeline-reviewer,
  harness-optimizer, agent-evaluator, conversation-analyzer, marketing-agent,
  spec-miner

## Using a library item once

Read its `SKILL.md` (or agent `.md`) directly and follow it in place. No move
needed for one-off use.

## Promoting to DAILY

When the bootstrap interview fixes the stack (or a library item earns its way
in), per item:

1. `git mv .claude/skill-library/<name> .claude/skills/<name>` (agents:
   `git mv .claude/agent-library/<name>.md .claude/agents/<name>.md`)
2. `node tools/catalog-sync.mjs` (adds the docs/ai/SKILLS.md entry)
3. `node tools/gate.mjs` — must be green

Demoting is the same move in reverse; catalog entries for demoted items can be
deleted from docs/ai/SKILLS.md (extra entries don't fail the gate, but a lean
catalog reads better).
