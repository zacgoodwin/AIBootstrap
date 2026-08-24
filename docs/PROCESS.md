# The Ultimate Development Process

An opinionated path through the skill catalog: one lifecycle, 24 stages, each
stage backed by the best skills found across docs/RECSKILLS.md and the 19
framework packs in docs/frameworks/. RECSKILLS.md is the full catalog; this
document is the route through it. Each stage names a primary pick with
reasoning and lists alternates so you can swap by taste or stack.

## What it is

Four phases. Setup runs once per repo. Define runs once per product or major
initiative. Build is the loop you live in, once per ticket. Ship runs per
release, and Maintain runs on a weekly and monthly cadence forever.

```
SETUP ──> DEFINE ─────────────> BUILD (loop) ──────> SHIP ──────> MAINTAIN (cadence)
bootstrap  ideation              dev loop             deploy       slop cleanup
           research              testing + QA         monitor      codebase health
           business plan         accessibility        marketing    documentation
           PRD                   code review                       security
           tech/data/visual      merge gate                        retro + learning
           architecture ADRs     debugging                         harness hygiene
           measurement plan
           decomposition ──> tickets feed the Build loop
```

Two rules hold the whole thing together:

1. **Nothing merges without a gate.** Every PR passes automated review
   (RoboRev), and every shipped branch passes an adversarial review it cannot
   see coming.
2. **Every stage leaves an artifact the next stage reads.** Ideation leaves a
   spec, the spec leaves tickets, tickets leave PRs, PRs leave learnings.
   Skills consume the previous stage's output; none start from a blank page.

---

## Phase 0: Setup (once per repo)

### 1. Bootstrap

Get the repo, the packs, and the harness configured before any product work.

| Primary | From | Why |
| --- | --- | --- |
| `/agent-sort` | ECC | Builds an evidence-backed install plan for this repo: which skills go in the DAILY set vs the parked LIBRARY, so you load what the project needs instead of everything. |
| `/setup-deploy` | gstack | Wires deployment settings once so `/land-and-deploy` works later. |
| `/setup-pre-commit` | mattpocock | Pre-commit hooks (format, typecheck, test) so the gate-test discipline exists from commit one. |
| `/optimize-permissions` | zcaceres | Scans transcripts for repeatedly-approved safe commands and writes the allowlist, killing permission-prompt friction early. |
| `/codebase-onboarding` | ECC | Brownfield only: architecture map, entry points, conventions, starter CLAUDE.md for an existing codebase. |

Alternates: `/gsd:new-project` (GSD, if adopting the whole GSD planning tree),
`/init` (rsc-harness), `/inherit-legacy-style` (ECC, legacy style match),
`/setup-gbrain` (gstack, code-index memory), `/quality-worktree-setup`
(zcaceres, worktree auto-setup for the Build loop).

---

## Phase 1: Define (per product or major initiative)

### 2. Ideation

Turn a hunch into a sharpened idea before anything is written down as fact.

| Primary | From | Why |
| --- | --- | --- |
| `/office-hours` | gstack | YC-style interrogation of the business idea itself: is this worth building at all. |
| `/grill-me` | mattpocock | Relentless interview that stress-tests the plan until every weak decision breaks or survives. Use `/grill-with-docs` to leave ADRs and a glossary behind as you go. |
| `/pm-brief` (problem-clarity template) | pm-claude-brief | Audits whether you understand the problem well enough to act, before a PRD exists to be wrong. |

Alternates: `/brainstorming` (Superpowers, mandatory-before-creative-work
version), `/gsd:explore` (GSD Socratic mode), `/idea-refinement`
(rsc-harness), `/brainstorm-beagle` (Beagle), `/grilling` (installed local).

### 3. Product research

Evidence before opinion: users, competitors, market, prior art.

| Primary | From | Why |
| --- | --- | --- |
| `/research` | mattpocock | Primary-source investigation captured as a Markdown file in the repo, so findings persist past the session. |
| `/competitive-platform-analysis` -> `/benchmark-methodology` -> `/competitive-report-structure` | ECC | A real three-stage pipeline: scope the competitor set, score it across nine dimensions, assemble a decision-grade report. The only competitor flow with structure instead of vibes. |
| `/interview-guide` + `/user-interview` + `/user-research-synthesis` | Aakash Gupta PM OS | JTBD interview guides, batch interview processing, and synthesis into insights. Covers the human side end to end. |

Alternates: `/deep-research` (ECC, needs firecrawl/exa MCPs),
`/market-research` (rsc-harness, TAM/SAM/SOM with convergence check),
`/competitor-analysis` (PM OS, lighter single-shot), `/ui-radar` (uizze,
800k-screen UI reference research), `/web-research` (Beagle).

### 4. Business plan

The commercial spine: strategy, metric, money.

| Primary | From | Why |
| --- | --- | --- |
| `/write-prod-strategy` | Aakash Gupta PM OS | 7-component product strategy doc; the artifact the CEO review reads. |
| `/define-north-star` | Aakash Gupta PM OS | Picks and validates the one metric the strategy answers to. |
| `/plan-ceo-review` | gstack | Founder-mode review of the strategy before you commit a quarter to it. |

Alternates: `/strategy-interview` + `/strategy-review` (Beagle, seven-dimension
stress test including falsifiability), rsc-harness business ops for the
mechanics (`/pricing`, `/unit-economics`, `/financial-model`, `/fundraising`),
`/expansion-strategy` and `/retention-analysis` (PM OS) once revenue exists.

### 5. Product Requirements Documentation

One PRD, reviewed from every seat that could kill it later.

| Primary | From | Why |
| --- | --- | --- |
| `/prd-draft` | Aakash Gupta PM OS | Clarifying questions, then a modern AI-era PRD draft. |
| `/prd-review-panel` | Aakash Gupta PM OS | Fans the PRD to seven parallel reviewers (engineer, designer, exec, legal, UX research, skeptic, customer voice). Cheapest way to find the objection you did not think of. Use `--perspectives` to run a subset. |
| `/spec` | gstack | Turns the approved PRD intent into a precise, executable spec in five phases: the artifact the Build loop implements against. |
| `/autoplan` | gstack | Runs the CEO, design, eng, and DX plan reviews sequentially with auto-decisions when you want the full gauntlet without four interactive sessions. |

Alternates: `/prfaq-beagle` (Beagle, Amazon Working Backwards gauntlet),
`/product-lens` (ECC, validates the why before the what), `/to-spec`
(mattpocock, conversation -> spec with no interview), `/ralph-wiggum` (PM OS,
devil's advocate reviewer), `/decision-doc` (PM OS) for decisions made along
the way.

### 6. Initial technical, data and visual design

Three tracks, run in parallel, each leaving a doc the loop reads.

**Technical.**

| Primary | From | Why |
| --- | --- | --- |
| `/codebase-design` | mattpocock | Deep-module vocabulary for interfaces and seams; the shared language every later design conversation uses. |
| `/domain-modeling` | mattpocock | Pins down the ubiquitous language and domain model before names calcify wrong. |
| `/design-an-interface` | GSD (gsd-pi) | "Design It Twice": three genuinely different designs for each key module or API, compared, then synthesized. |
| `/contract-first` | ECC | For anything with multiple consumers: schema and API contracts evolve without field drift. Matches this repo's services-first architecture. |

**Data.** `/supabase-postgres-best-practices` (official plugin) before touching
any Postgres schema, `/database-migrations` (ECC) for change strategy,
`/postgres-patterns` (ECC) for design. Record the stack and versions in
docs/architecture/STACK.MD.

**Visual.**

| Primary | From | Why |
| --- | --- | --- |
| `/design-consultation` | gstack | Researches the product space and proposes a complete design system (type, color, spacing, motion) with previews. Its output becomes docs/DESIGN.md, which everything downstream obeys. |
| `/design-shotgun` | gstack | Generates competing variants on a comparison board; pick with eyes, not adjectives. |
| `/stitch-skill` or `/taste-skill` | taste-skill | Anti-generic standards baked into the DESIGN.md so the UI does not ship looking like every AI app. |

Alternates: `/napkin-sketch` (PM OS ASCII wireframes), `/gsd:sketch`
(throwaway HTML mockups), `/ui-design` (uizze), `/diagram` (gstack) for
architecture pictures, Figma skills (`/figma-generate-design`,
`/figma-generate-library`) when Figma is the source of truth.

### 7. Architecture governance (starts here, never stops)

Decisions get recorded when made, not reconstructed later.

| Primary | From | Why |
| --- | --- | --- |
| `/architecture-decision-records` | ECC | Captures ADRs as they happen in-session. |
| `/write-adr` + `/adr-decision-extraction` | Beagle | Mines a design conversation for the decisions it contains, then writes MADR-format ADRs with done criteria. |

Alternates: `/decision-records` (rsc-harness, immutable numbered ADRs),
`/constitution` (rsc-harness, project non-negotiables as testable rules),
`/codemyspec:design strategy` (Phoenix stacks), `/adr-*` suite (ruflo).

### 8. Measurements and analytics

Decide what success looks like before building, wire the instruments during.

| Primary | From | Why |
| --- | --- | --- |
| `/metrics-framework` | Aakash Gupta PM OS | Leading vs lagging indicators per feature; the map from north star down to shippable metrics. |
| `/feature-metrics` | Aakash Gupta PM OS | STEDII framework for metrics you can actually trust in an experiment. |
| `/impact-sizing` | Aakash Gupta PM OS | Driver trees and confidence levels so prioritization has numbers behind it. |
| `/analytics` | rsc-harness | The wiring: GA4/PostHog SDK setup, event taxonomy, funnels, consent gating, PII scrubbing. The PM OS skills say what to measure; this one makes the events exist. |
| `/experiment-decision` | Aakash Gupta PM OS | When to A/B test vs just ship. |

Alternates: `/kpi-framework`, `/ab-testing`, `/dashboard` (rsc-harness),
`/activation-analysis` and `/retention-analysis` (PM OS) post-launch,
`/eval-harness` (ECC) when the feature is latent and needs evals not metrics.

### 9. Requirements decomposition and ticketing

The spec becomes tracer-bullet tickets with dependency edges; tickets feed the loop.

| Primary | From | Why |
| --- | --- | --- |
| `/to-tickets` | mattpocock | Breaks the spec into tracer-bullet tickets, each declaring its blocking edges, published to the tracker. Built exactly for feeding an agent loop. |
| `/wayfinder` | mattpocock | For work bigger than one session can hold: a shared map of decision tickets resolved one at a time. |
| `/intent-driven-development` | ECC | Turns each ambiguous ticket into scoped, verifiable acceptance criteria before implementation. Those criteria are what the merge gate later checks against. |
| `/triage` | mattpocock | State machine for inbound issues and external PRs; writes agent-ready briefs. |

Alternates: `/tasks` (rsc-harness, ordered list with literal done-checks),
`/decompose-into-slices` (GSD), `/codemyspec:product three-amigos` (per-story
example mapping), `/create-tickets` (PM OS, Linear/Jira), Kata CLI for
local-first tracking, `/project` (zcaceres, GitHub Projects/Linear kanban).

---

## Phase 2: Build (the loop, per ticket)

### 10. Loop-based development: worktrees, stacked PRs, RoboRev

The core loop. One ticket, one worktree, one stacked branch, automated review
on every commit.

```
pick ticket -> worktree -> implement (TDD) -> commit -> RoboRev per commit
     ^                                                        |
     |                                            fix findings (bounded loop)
     |                                                        |
     +---- next ticket <---- /stack-ship (gate + PR + adversarial review)
```

| Primary | From | Why |
| --- | --- | --- |
| EnterWorktree / `/worktrees` | native / rsc-harness | Isolation first: each ticket gets its own worktree so parallel sessions never collide. Native tool when available, skill as fallback. |
| Stax CLI | cesarferreira/stax | Stacked branches: small dependent PRs instead of one monster diff. Already the spine of this repo's quality pipeline. |
| `/implement` | mattpocock | Implements against the spec or ticket brief. The ticket's acceptance criteria are the contract. |
| `/tdd` | mattpocock | Test-first when building features or fixing bugs; red-green-refactor with integration tests. |
| `/roborev-review` / `/roborev-refine` | roborev | Automated review of every commit; `refine` closes the loop (review, fix, commit, re-review, capped iterations). This is the "RoboRev on every PR" requirement, delivered per commit. |
| `/stack-ship` | zg-skills | Ships the branch: RoboRev gate with bounded auto-fix, squash-submit one clean PR via stax, adversarial review on the PR, version bump. One command, whole pipeline. |

Alternates for the loop engine: `/oldhand:oldhand` (single ticket-to-proof
command: trace, prior-art research, minimal implementation, browser-verified),
`/gsd:autonomous` (GSD phase automation), `/codemyspec:implement start`
(Phoenix), `/sdd` (rsc-harness spec-driven chain), `/continuous-agent-loop` +
`/loop-design-check` (ECC, for designing new autonomous loops without
Goodharting), `/pr` stacked mode (zcaceres) or `/stacked-prs` (claude-mpm) if
not using stax, Worktrunk CLI for worktree management at scale.

### 11. Testing and QA

Review checks the diff; QA checks the running product. Both, always.

| Primary | From | Why |
| --- | --- | --- |
| `/tdd-workflow` | ECC | Enforced TDD with unit, integration, and E2E coverage when the mattpocock `/tdd` needs more teeth. |
| `/e2e-testing` | ECC | Playwright patterns, Page Object Model, CI integration, flaky-test strategy. |
| `/qa` / `/qa-only` | gstack | Drives the real app in a browser, finds bugs, fixes them (`/qa`) or just reports (`/qa-only`). |
| `/test gaps` | zcaceres | Cross-references tests against source: untested branches, error paths, boundary conditions. Run before calling a ticket done. |
| Gate tests (`node tools/gate.mjs` + project tests) | this repo | Deterministic, free, under 2s, every commit. The floor beneath everything else. |

Alternates: `/verification-loop` (ECC), `/gen-test-plan` + `/run-test-plan`
(Beagle, YAML E2E plans), `/browser-qa` (ECC), `/property-based-testing` and
`/mutation-testing` (Trail of Bits, when correctness really matters),
`/quality-chaos-monkey` (zcaceres, race conditions and edge cases),
stack-specific testing skills (ECC `/react-testing`, `/python-testing`, etc.).

### 12. Accessibility

Not a retrofit. Runs inside the loop for any UI ticket.

| Primary | From | Why |
| --- | --- | --- |
| `/accessibility` | ECC | Design, implement, and audit against WCAG 2.2 AA. |
| `/frontend-a11y` | ECC | The React/Next implementation patterns: semantic HTML, ARIA, focus management, screen readers. |

Alternates: `/anti-ui-slop audit` (uizze, reports a11y among technical
checks), gsd-pi `accessibility`, `/gluestack-accessibility` (Han, if using
gluestack).

### 13. Code review

Human-grade review on top of RoboRev's automated pass.

| Primary | From | Why |
| --- | --- | --- |
| `/code-review` | mattpocock | Reviews along two axes in parallel: Standards (repo's documented conventions) and Spec (does the code do what the ticket asked). The spec axis is what generic reviewers miss. |
| `/review` | gstack | Pre-landing PR review; the default second pass. |
| `/codex review` | gstack | Cross-vendor second opinion via the Codex CLI; different model, different blind spots. `--xhigh` when the diff is dangerous and you can wait. |
| `/code-review` | Claude Code built-in | Effort-leveled diff or PR review (low through max) with `--fix` and `--comment`; `/code-review ultra` launches a multi-agent cloud review of the branch or a GitHub PR when the change earns the heavyweight pass. |

Alternates: `/review-code` (zcaceres, includes a `repro` mode that reproduces
findings to kill false positives), `/second-opinion` (Trail of Bits,
Codex/Gemini external review), `/ponytail-review` (over-engineering only),
typescript-reviewer agent (installed) for TS/JS diffs, `/receiving-code-review`
(Superpowers) for processing feedback with rigor instead of blind compliance.

### 14. Merge gates with adversarial reviews

The last door before main. Nothing talks its way through.

| Primary | From | Why |
| --- | --- | --- |
| `/stack-ship` | zg-skills | The gate itself: RoboRev must pass (bounded auto-fix loop on red), then squash-submit, then adversarial review on the actual PR. |
| `/z-adversarial-review` | zg-skills | Blinded four-key review: spec, acceptance criteria, diff, throwaway worktree handed to a fresh reviewer holding nothing else, plus three skeptic sub-agents on non-trivial diffs, optionally on other vendors' CLIs. Confidence-scored verdict. |
| `/unlazy` | unlazy | Writes runnable acceptance gates (GATES.md) before execution and blocks completion until they pass, via a Stop hook. Use for large autonomous work where "done" claims need teeth. |

Alternates: `/code-review ultra` (Claude Code built-in, multi-agent cloud
review as an extra pre-merge pass on hairy branches), `/santa-method` (ECC,
two independent reviewers must both pass with a convergence loop),
`/delivery-gate` (ECC stop hook detecting rationalization patterns),
`/verification-before-completion` (Superpowers, evidence before assertions),
`/verify` (rsc-harness evidence gate), `/gsd-loop-review` (GSD,
PR-vs-issue-contract audit).

### 15. Debugging and investigation

For when the loop breaks or production reports something the tests missed.

| Primary | From | Why |
| --- | --- | --- |
| `/investigate` | gstack | Systematic root-cause investigation; the default entry point for any bug. |
| `/diagnosing-bugs` | mattpocock | The diagnosis loop for hard bugs and performance regressions. |
| `/orch-fix-defect` | ECC | The disciplined path: reproduce as a failing regression test, fix to green, review, gated commit. Matches the every-bug-ships-a-test rule. |

Alternates: `/systematic-debugging` (Superpowers), `/gsd:debug` (persistent
state across context resets, for multi-session hunts), `/root-cause-tracing`
(claude-mpm), `/debug-like-expert` (gsd-pi), `/baseline-restorer` (Han, when
repeated fix attempts have made things worse).

---

## Phase 3: Ship (per release)

### 16. Deploying

| Primary | From | Why |
| --- | --- | --- |
| `/land-and-deploy` | gstack | The land-and-deploy workflow, configured once by `/setup-deploy` in Phase 0. |
| `/ship` | gstack | The fuller ceremony when needed: merge base, tests, diff review, version bump, changelog, PR. |
| `/canary <url> --baseline` | gstack | Run BEFORE deploying: captures screenshots, console error counts, and load times as the comparison baseline. |
| `/launch-checklist` | Aakash Gupta PM OS | For product launches (not routine deploys): prioritized checklist with owners, dependencies, and critical path; templates for small, major, and regulatory launches. |

Alternates: `/resolving-merge-conflicts` (mattpocock) when landing goes
sideways, `/gen-release-notes` (Beagle), `/deployment` and provider-specific
skills (rsc-harness: `/vercel`, `/fly-io`, `/cloudflare`, etc.) when choosing
or operating infra, `/opensource-pipeline` (ECC) for public releases,
`/github-actions` (rsc-harness) for CI plumbing.

### 17. Post-deploy monitoring and performance

Deploying ends at ship; this is the watch after.

| Primary | From | Why |
| --- | --- | --- |
| `/canary <url>` | gstack | Ten-minute post-deploy watch against the pre-deploy baseline: pages, console errors, load times. |
| `/benchmark <url>` | gstack | Performance regressions: TTFB, FCP, LCP, bundle sizes vs baseline; `--trend` for history, `--diff` to scope to changed pages. |
| `/monitoring` | rsc-harness | Uptime, health checks, alerts, on-call basics so you learn it is down before customers do. |

Alternates: `/canary-watch` (ECC, single-pass smoke check; `--compare` diffs
staging vs production), `/observability` (rsc-harness, OpenTelemetry wiring),
Sentry plugin (Han) for error tracking, `/production-audit` (ECC) for the
"what breaks in prod" question.

### 18. Product marketing

Voice first, then campaigns, then channels. Everything reuses the voice profile.

| Primary | From | Why |
| --- | --- | --- |
| `/brand-voice` | ECC | Builds a source-derived writing style profile once; every other content skill consumes it, so nothing ships in default-AI voice. |
| `/marketing-campaign` | ECC | End-to-end campaign: audience, positioning, angle, landing copy, email sequences, social. |
| `/landing-copy` | rsc-harness | The single conversion page done properly: hero, offer, proof, one CTA. |
| `/seo` | ECC | Technical SEO, on-page, structured data, Core Web Vitals. |
| `/content-engine` + `/crosspost` | ECC | Platform-native content systems and multi-platform distribution once there is a cadence to sustain. |

Alternates: rsc-harness owns channel depth (`/linkedin-*`, `/youtube-*`,
`/shortform-*`, `/newsletter`, `/ads`, `/seo-geo` for AI answer engines),
`/market-my-spec:marketing-strategy` (CodeMySpec, guided 9-step strategy),
`/copywriting` (zcaceres, de-AI the prose), `/social-publisher` (ECC,
scheduling), `/press-kit` and `/case-studies` (rsc-harness).

---

## Phase 4: Maintain (recurring)

### 19. AI slop cleanup

Three kinds of slop, three tools. Per-branch is cheap; whole-repo is periodic.

| Primary | From | Why |
| --- | --- | --- |
| `/clean-ai-slop` | zcaceres | Per branch, before shipping: strips tombstone comments, restate-the-code comments, defensive try/catch, `any` casts, style drift. |
| `/review-llm-artifacts` -> `/verify-llm-artifacts` -> `/fix-llm-artifacts` | Beagle | Whole-project sweep with a verification stage between finding and deleting, so cleanup does not become breakage. Monthly. |
| `/ui-slop-score` + `/anti-ui-slop` | uizze | Scores how generic the UI looks, then the subcommand family fixes it (distill, harden, polish, quieter). |

Alternates: `/simplify` (Claude Code built-in, reuse/simplification/efficiency
cleanups applied to the changed code), `/design-review` (gstack, visual slop
with fixes), `/review-ai-writing` + `/humanize-beagle` (Beagle, prose slop in
docs and commits), `/quality-dead-code-analyzer` (zcaceres, the mechanical
dead-code half).

### 20. Codebase health

| Primary | From | Why |
| --- | --- | --- |
| `/health` | gstack | The code quality dashboard; the weekly glance. |
| `/ponytail-audit` | ponytail | Whole-repo over-engineering hunt: what to delete, simplify, or replace with stdlib. The counterweight to months of additive work. |
| `/quality-dead-code-analyzer` | zcaceres | knip/jscpd/madge with validated findings: dead code, duplicates, circular deps. |
| `/improve-codebase-architecture` | mattpocock | Scans for module-deepening opportunities and grills through the one you pick. |
| `/ponytail-debt` | ponytail | Harvests every `ponytail:` shortcut comment into a ledger so deliberate corners get revisited instead of rotting. |

Alternates: `/devex-review` (gstack, developer-experience audit),
`/dependency-upgrade` (gsd-pi, risk-tiered upgrade batches),
`/quality-project-health` (zcaceres, 0-10 rating), `/review-structure`
(Beagle), `/repo-scan` (ECC).

### 21. Documentation

| Primary | From | Why |
| --- | --- | --- |
| `/document-release` | gstack | Post-ship doc update; runs at the end of every Ship phase. |
| `/quality-docs-update` | zcaceres | Audits all docs against the current codebase via parallel agents and applies approved fixes. The anti-drift pass. |
| `/document-generate` | gstack | Missing docs from scratch for a feature, module, or project. |
| `/writing-for-agents` | mattpocock | For the docs agents read: skills, CLAUDE.md, AGENTS.md. Different audience, different rules. |
| Beagle Diataxis suite (`/docs-style`, `/tutorial-docs`, `/howto-docs`, `/reference-docs`, `/explanation-docs`) | Beagle | When writing user-facing docs properly: each doc type has its own pattern. |

Alternates: `/code-tour` (ECC, onboarding guide with diagram),
`/living-docs-governance` (ECC, assigns docs constitution/map/status/history
roles so they stop rotting), `/make-pdf` (gstack), `/ensure-docs` and
`/improve-doc` (Beagle), `/ui-demo` (ECC, demo videos).

### 22. Security

Layered: continuous scanning in CI, per-feature review in the loop, periodic
deep audit.

| Primary | From | Why |
| --- | --- | --- |
| `/security-gitleaks` | zcaceres | Secret scanning done right: scans history first, then pre-commit hook and pinned CI. Install in Phase 0, benefits forever. |
| `/security-review` | ECC | In-loop: runs whenever a ticket touches auth, user input, secrets, endpoints, or payments. |
| `/cso` | gstack | The periodic audit: all phases with an 8/10 confidence gate. `--diff` per branch, `--comprehensive` monthly, `--supply-chain` / `--owasp` / `--skills` to scope. Reports only, never edits. |
| `/differential-review` | Trail of Bits | Security-focused review of a specific risky diff, with adversarial exploit modeling. |
| `/threat-modeling` | claude-mpm | STRIDE with risk scoring; mitigations land in the backlog and the test suite, closing the loop into Phase 1 tickets. |

Alternates: `/security-review` (Claude Code built-in, branch-level pass when
the ECC pack is not installed), Trail of Bits is the deep bench (`/semgrep`,
`/codeql`, `/supply-chain-risk-auditor`, `/audit-prep-assistant`, `/fp-check`
to kill false positives, fuzzing suite), `/security-scfw` / `/security-socket`
/ `/security-snyk` (zcaceres, supply-chain firewalls and scanners),
`/security-scan` (ECC, scans the .claude config itself), `/secure-coding`
(rsc-harness), stack-specific security skills (ECC `/django-security` etc.).

### 23. Retro and learning loop

The mechanism that makes every other stage improve. Failures get codified the
day they happen; successes get skillified the second time they repeat.

| Primary | From | Why |
| --- | --- | --- |
| `/retro` | gstack | The weekly engineering retrospective. |
| `/learn` | gstack | Project learnings captured to docs/LEARNINGS.md as they occur. |
| `/feature-results` | Aakash Gupta PM OS | Post-launch: did the hypothesis from the PRD survive contact with users. Closes the loop back to Phase 1. |
| `/loose-ends` | zcaceres | End-of-session sweep: bugs mentioned but not fixed, deferred decisions, promised-but-not-done items. |
| `/skillify` | gstack | Second time a manual flow works, codify it. The third time is a command. |

Alternates: `/growth-log` (ECC, reusable patterns not diary entries),
`/gsd:extract-learnings` (GSD), `/reflect-on-conversation` (zcaceres),
`/continuous-learning-v2` (ECC, hook-driven instinct capture),
docs/MISTAKES.md per this repo's rules.

### 24. Context, memory and harness hygiene

The agent-ops layer: keeps long projects coherent and the token bill sane.

| Primary | From | Why |
| --- | --- | --- |
| `/context-save` / `/context-restore` | gstack | Checkpoints branch, status, decisions, and remaining work; the pause/resume button for multi-day work. |
| `/handoff` / `/claude-handoff` | mattpocock | Compacts the session into a handoff doc, or hands it live to a fresh background agent. |
| `/graphify` | graphify | Persistent queryable knowledge graph of the codebase; answer architecture questions from the graph instead of grep. |
| `/config-gc` | ECC | Periodic garbage collection of ~/.claude: stale skills, orphaned hooks, redundant permissions. |
| `/context-budget` | ECC | Inventories what every skill, rule, and MCP costs in tokens and reports prioritized savings. |
| `/guard` / `/freeze` | gstack | Safety rails for autonomous sessions: destructive-command warnings and directory-scoped edits. |

Alternates: `/setup-gbrain` + `/sync-gbrain` (gstack, code-index memory),
`/skill-stocktake` (ECC, skill quality audit), `/optimize-skill-activation`
(zcaceres, right-size which skills eager-load), `/cost-tracking` (ECC), RTK
(already wired via hook) and Token Saver for output compression, Caveman
plugin (ultra-compressed output mode, the prose counterpart to ponytail), cco
/ claude-context-optimizer (cache-aware context audits via `/cco-overhead`,
auto .contextignore), `/strategic-compact` (ECC).

---

## How to use it

### Run 1: new product (Phases 0-1, roughly a week of sessions)

```
/agent-sort              # install what this repo needs
/setup-pre-commit        # gates from commit one
/office-hours            # is the idea worth it
/grill-with-docs         # stress-test, leave ADRs behind
/research                # evidence into the repo
/competitive-platform-analysis   # then benchmark-methodology, then report
/write-prod-strategy     # strategy doc
/define-north-star       # the metric
/plan-ceo-review         # founder gate
/prd-draft               # the PRD
/prd-review-panel        # seven reviewers in parallel
/spec                    # executable spec
/design-consultation     # -> docs/DESIGN.md
/codebase-design + /domain-modeling + /design-an-interface   # tech design
/metrics-framework + /analytics   # what to measure, wired in
/to-tickets              # spec -> tracer-bullet tickets with edges
```

### Run 2: per ticket (Phase 2, the daily loop)

```
pick ticket (acceptance criteria already on it via /intent-driven-development)
EnterWorktree            # isolation
/tdd or /implement       # build against the criteria
/qa                      # drive the real app
/clean-ai-slop           # strip the noise
/code-review             # standards + spec axes
/stack-ship              # RoboRev gate -> squash PR via stax -> adversarial review
```

Bug instead of feature: `/investigate`, then `/orch-fix-defect` so the fix
ships with the regression test that would have caught it.

### Run 3: per release (Phase 3)

```
/canary <url> --baseline   # before
/land-and-deploy           # ship
/canary <url>              # ten-minute watch
/benchmark <url>           # perf vs baseline
/document-release          # docs current
/feature-results           # (after data accrues) hypothesis check
marketing skills as the launch demands
```

### Cadence (Phase 4)

| When | Run |
| --- | --- |
| Every session end | `/loose-ends`, `/learn` when something was learned |
| Every branch | `/clean-ai-slop`, `/cso --diff` when the diff warrants it |
| Weekly | `/retro`, `/health` |
| Monthly | `/ponytail-audit`, `/review-llm-artifacts` chain, `/cso --comprehensive`, `/quality-docs-update`, `/config-gc`, `/context-budget` |
| On repeat of any manual flow | `/skillify` |

The weekly and monthly rows can run themselves: `/schedule` (built-in) creates
scheduled cloud routines on a cron, and `/loop` handles recurring runs inside
a live session.

---

## Recommended tools

Curated from the tools shelf in docs/RECSKILLS.md. Tier 1 is part of the
process itself; Tier 2 installs when its trigger fires; the rest stays on the
shelf until a real need shows up.

### Tier 1: install now

| Tool | What for | Stage |
| --- | --- | --- |
| Stax | Stacked PRs; the branch mechanics behind `/stack-ship`. | Build loop |
| RoboRev | Automated review on every commit; the other half of the merge gate. Pair with Stax. | Build loop, merge gate |
| RTK | Token-optimized CLI proxy, 60-90% output reduction. Already wired via the PreToolUse hook. | Every stage |
| Graphify | Codebase as a queryable knowledge graph; answers architecture questions without grep. Already referenced by the harness rules (`graphify query` before raw search). | Tech design, debugging, harness hygiene |
| Kata | Local-first issue tracking with CLI and TUI, built for agent loops. The tracker `/to-tickets` publishes to when you do not want Linear or GitHub Projects. Local-first fits the no-machine-deps starter-kit goal. | Decomposition, Build loop |
| Git Credential Manager | Secure cross-platform git auth. Cheap, one-time, removes a whole class of credential friction. | Setup |
| ccusage | Local token usage and cost analytics across sessions. Feeds the monthly `/context-budget` and `/cost-tracking` pass with real numbers. | Harness hygiene cadence |
| docs-mcp-server | Local grounded-docs MCP (Context7 alternative) so library and API answers come from real docs, not training data. GitMCP is the per-repo variant: point it at any GitHub project to stop hallucinated APIs. | Build loop, research |
| Storybook | Component workshop in isolation; the living home of the design system that `/design-consultation` produces. UI repos only. | Visual design, Build loop |

### Tier 2: install when the trigger fires

| Tool | Trigger | What for |
| --- | --- | --- |
| Worktrunk | Running 2+ parallel agent sessions routinely | Worktree management at scale; native EnterWorktree covers the single-session case. |
| Temporal | First real background job or backfill | Durable execution with retries and visibility, instead of hand-rolled job loops. Rivet Actors is the lighter stateful-compute alternative. |
| Replane | First A/B test or staged rollout | Feature flags and dynamic config without redeploying; pairs with `/experiment-decision`. |
| Phoenix (Arize) | The product itself ships LLM features | Tracing, evaluation, and troubleshooting for LLM calls; the observability half of the evals rule. |
| Vault | Secrets shared beyond one machine | Centralized secrets management; until then `.env` + gitleaks scanning covers it. |
| Tela | A second person needs the project knowledge | Self-hosted markdown team wiki with a built-in MCP server, so agents read and write the same wiki humans do. Outline is the humans-first alternative without agent access. |
| React Doctor | React repo | Deterministic scanner that catches bad React patterns agents write; slots into the slop-cleanup cadence next to `/clean-ai-slop`. |
| AgentsView | Weekly retros start asking "what did the agents actually do" | Local session search, analytics, and token stats; evidence for `/retro`. |
| OpenCode / Crush | Adversarial review wants more vendor seats than Codex, Gemini, and Antigravity (agy) already provide | Additional agent CLIs for `/z-adversarial-review` skeptic seats; the three named CLIs are the assumed baseline. |
| Maxun / ScrapeGraphAI | Scraping becomes a product feature | No-code site-to-API (Maxun) or LLM-driven extraction (ScrapeGraphAI); for ad-hoc pulls the `/scrape` and `/browse` skills already cover it. |
| serve-sim | iOS work | Apple simulators streamed to a browser; pairs with the `/ios-qa` family. |
| Scalekit | An enterprise customer asks for SSO/SCIM | Enterprise auth component instead of building it. |
| markdownify-mcp | Research ingests PDFs, decks, or odd formats | Converts almost anything to Markdown so `/research` output lands in the repo cleanly. |

### Hold off

- **Multi-agent desktops and orchestrators** (Multica, Agent Teams AI,
  oh-my-claudecode, FirstMate, LobeHub, Paperclip, Sim): native subagents,
  teams, and Workflow scripts already cover the orchestration this process
  needs. Revisit only if orchestration outgrows one machine.
- **Memory layers** (brain.md, memU, Docbank): native file-based memory plus
  gbrain and Graphify already hold project knowledge; a third memory system
  adds sync problems, not recall.
- **CodeGraph, Create Context Graph**: overlap Graphify; one graph is enough.
- **Token Saver**: overlaps RTK; add only if RTK measurably misses cases
  (`rtk gain` will show it).
- **LLM infra** (LangChain, AgentField, Wyolet Relay, Unsloth, LEANN): only
  relevant when building LLM products, and the LLM-access rule routes product
  inference through local Claude Code, which removes most of what these solve.
- **SystemPrompt Template, tirreno, Conductor, Ideon, Karpathy LLM Wiki,
  Dify Docs, Apohara Context Forge, Plasmic, Claude Code for PMM**: niche or
  curiosity-shelf; nothing in the process depends on them.

## Pack dependencies

| Source | Powers | Weight |
| --- | --- | --- |
| garrytan/gstack | Setup, PRD reviews, visual design, QA, review, deploy, canary, benchmark, retro, context, security audit | Core: the operational spine |
| mattpocock/skills | Ideation grilling, research, tech design, ticketing, TDD/implement, code review, docs-for-agents, handoffs | Core: the engineering spine |
| roborev + stax + zg-skills | The loop's merge gate (`/roborev-*`, `/stack-ship`, `/z-adversarial-review`) | Core: non-negotiable gate |
| Aakash Gupta PM OS | Strategy, PRD, metrics, launch, post-launch analysis | Core for product work |
| affaan-m/ECC | Research pipeline, contracts, acceptance criteria, a11y, security review, brand voice, harness hygiene | Broad utility; install via `/agent-sort`, not wholesale |
| zcaceres/skills | Permissions, slop cleanup, dead code, docs audit, secret scanning, supply chain, loose ends | High value, small footprint |
| Beagle | LLM-artifact cleanup chain, ADR writing, Diataxis docs, plan review | Maintain + Define support |
| uizze (anti-ui-slop, ui-radar) | UI slop scoring and repair, design research | UI-heavy projects |
| Trail of Bits | Deep security bench | Pull in when security stakes rise |
| ponytail | Over-engineering audits, debt ledger | Already active as a mode |
| Superpowers / GSD / rsc-harness / CodeMySpec / Oldhand | Alternate loop engines and deep alternates named per stage | Optional; adopt whole or cherry-pick |
| taste-skill / Mindrally / Han / claude-mpm / ruflo | Visual taste, stack patterns, validation hooks, stacked-PR patterns, meta-harness | Reference shelf |

Install per source via the files in docs/frameworks/; the skill catalog by
workflow stage lives in README.md.
