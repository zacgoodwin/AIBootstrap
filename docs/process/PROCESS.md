# The Ultimate Development Process

An opinionated path through the skill catalog: one lifecycle, 26 stages, each
stage backed by the best skills found across the framework packs in
docs/frameworks/. Those files are the full catalog; this document is the
route through them. Each stage names a primary pick with
reasoning and lists alternates so you can swap by taste or stack.

## What it is

Five phases. Setup runs once per repo. Define runs once per product or major
initiative. Build is the loop you live in, once per ticket. Ship runs per
release, and Maintain runs on a weekly and monthly cadence forever.

```
SETUP ──> DEFINE ─────────────> BUILD (loop) ──────> SHIP ──────> MAINTAIN (cadence)
bootstrap  ideation              dev loop             deploy       slop cleanup
           research              testing + QA         monitor      codebase health
           business plan         accessibility        incidents    documentation
           compliance scope      code review          marketing    security
           PRD                   merge gate                        retro + learning
           tech/data/visual      debugging                         harness hygiene
           architecture ADRs
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

### 5. Compliance, privacy, and IP scope

Which rules bind this product, answered before the architecture that has to
obey them. Scope is an architecture decision, not a lawyer's footnote.

| Primary | From | Why |
| --- | --- | --- |
| `/compliance` | rsc-harness | Scopes which frameworks actually bind the business (SOC 2, ISO 27001, HIPAA, PCI DSS, EU AI Act, DORA, NIS2) and builds a control register with owners and evidence per control. Run it before the technical design, because the scope answer changes the design. |
| `/gdpr-privacy` | rsc-harness | The artifacts a product publishes or hands a customer: a privacy policy true to what it actually processes, lawful basis per purpose, the consent surface, Art. 28 processor terms. |
| `legal-advisor` agent | this repo | Flags privacy, compliance, IP, and regulatory risk in a plan before it ships. The cheapest pass available; run it on the PRD in the next stage. |

Three specifics this stage exists to catch, because each is expensive to
retrofit and none of them surface on their own.

**PCI scope decides what your checkout smoke test is allowed to touch.** If a
primary account number ever reaches your servers, your servers are in scope,
and so is any CI environment that replays a fixture containing one. Keeping
card entry inside the processor's hosted fields or iframe means the smoke test
asserts on the processor's test tokens instead, and CI stays out of scope.
Decide this before the first payment ticket: descoping a checkout after it is
built is a rewrite, and a mock payment gateway (docs/process/PROCESS-TEAM-SERVER.md,
Testing) only helps once the boundary is drawn.

**SOC 2 evidence is a byproduct of the gate or it is a fire drill.** Most of
what a Type II audit asks for (change management, access review, review before
merge, vulnerability remediation inside a stated window) is already produced by
the merge gate in stage 15 and the security layer in stage 24. Decide where
that evidence is exported and retained while you are wiring the gate. The
alternative is reconstructing twelve months of it during the observation
window, from logs that were never kept for the purpose.

**AI IP indemnification is tiered, and the tier is a purchasing decision.**
Model vendors' indemnities for generated output carry conditions and caps that
differ by plan, and the free and consumer tiers generally carry none at all.
Since agents write most of the code here, record in the control register which
tier this project's inference actually runs on, and whether the indemnity
survives the way you use it. Dependency license obligations belong in the same
register: CVE scanning under stage 24 answers "is it vulnerable", not "may we
ship it".

Alternates: `/hipaa-compliance` and `/healthcare-phi-compliance` (ECC) when
health data is in scope, `/decision-doc` (PM OS) to record the scope call
itself, `/open-sourcing` (Trail of Bits) for license choice when the repo goes
public, `/prd-review-panel --perspectives "legal"` (PM OS) for a lighter pass
when nothing here obviously applies.

### 6. Product Requirements Documentation

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

### 7. Initial technical, data and visual design

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

### 8. Architecture governance (starts here, never stops)

Decisions get recorded when made, not reconstructed later.

| Primary | From | Why |
| --- | --- | --- |
| `/architecture-decision-records` | ECC | Captures ADRs as they happen in-session. |
| `/write-adr` + `/adr-decision-extraction` | Beagle | Mines a design conversation for the decisions it contains, then writes MADR-format ADRs with done criteria. |

Alternates: `/decision-records` (rsc-harness, immutable numbered ADRs),
`/constitution` (rsc-harness, project non-negotiables as testable rules),
`/codemyspec:design strategy` (Phoenix stacks), `/adr-*` suite (ruflo).

### 9. Measurements and analytics

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

### 10. Requirements decomposition and ticketing

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

### 11. Loop-based development: worktrees, stacked PRs, RoboRev

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
not using stax, Worktrunk CLI for worktree management at scale, super-board
(tiny, watch it) for a GitHub-Projects card-to-merged-PR autonomous loop.

### 12. Testing and QA

Review checks the diff; QA checks the running product. Both, always.

| Primary | From | Why |
| --- | --- | --- |
| `/tdd-workflow` | ECC | Enforced TDD with unit, integration, and E2E coverage when the mattpocock `/tdd` needs more teeth. |
| `/e2e-testing` | ECC | Playwright patterns, Page Object Model, CI integration, flaky-test strategy. |
| `/qa` / `/qa-only` | gstack | Drives the real app in a browser, finds bugs, fixes them (`/qa`) or just reports (`/qa-only`). |
| `/test gaps` | zcaceres | Cross-references tests against source: untested branches, error paths, boundary conditions. Run before calling a ticket done. |
| Gate tests (`node tools/gate.mjs` + project tests) | this repo | Deterministic, free, under 2s, every commit. The floor beneath everything else. |
| Promptfoo as a required check | tool | The other half of the floor, and the one usually missing. This repo requires evals whenever latent behavior changes, and a rule with no mechanism is a preference. Promptfoo runs versioned test cases against prompts, models, RAG pipelines, and agents, with assertions for exact match, schema, cost, latency, and LLM-graded quality; its exit code makes it a check that blocks a merge below a threshold. Free and self-hosted. |

**Tests and evals are not the same gate and must not share a threshold.** A
gate test is deterministic, free, and binary: it passes or the commit does not
land. An eval is paid, non-deterministic, and scored against a pass threshold,
so it runs before ship and nightly rather than on every commit. Wiring an eval
into the per-commit hook makes the hook slow and flaky, and a flaky gate stops
being a gate. Keep them separate and give each its own trigger.

**Load and capacity testing is the one gap the catalog does not fill.** Every
performance skill named here and in stage 18 measures one user's experience
(Core Web Vitals, bundle size, slow transactions). None of them answer what
happens at a hundred concurrent users, which is a different question with a
different failure mode. There is no skill for it; reach for k6, Locust, or
Artillery directly, and run it before a launch rather than after the first
traffic spike. This is also the check that catches the N+1 query an agent
wrote that looks fine against a ten-row dev database.

Alternates: `/verification-loop` (ECC), `/gen-test-plan` + `/run-test-plan`
(Beagle, YAML E2E plans), `/browser-qa` (ECC), `/property-based-testing` and
`/mutation-testing` (Trail of Bits, when correctness really matters),
`/quality-chaos-monkey` (zcaceres, race conditions and edge cases),
stack-specific testing skills (ECC `/react-testing`, `/python-testing`, etc.).

### 13. Accessibility

Not a retrofit. Runs inside the loop for any UI ticket.

| Primary | From | Why |
| --- | --- | --- |
| `/accessibility` | ECC | Design, implement, and audit against WCAG 2.2 AA. |
| `/frontend-a11y` | ECC | The React/Next implementation patterns: semantic HTML, ARIA, focus management, screen readers. |

Alternates: `/anti-ui-slop audit` (uizze, reports a11y among technical
checks), gsd-pi `accessibility`, `/gluestack-accessibility` (Han, if using
gluestack).

**Opt in per repo, and opt in at the start.** A headless service does not need
this stage. Anything with a user interface does, and the cost of turning it on
later is a retrofit across every component already written. Three gates, each
riding infrastructure other stages already install, in order of how early they
catch:

1. **Lint time:** `eslint-plugin-jsx-a11y` in the pre-commit hook from stage 1.
   Catches issues before a page renders, which is the cheapest place to catch
   anything, and it is the rung this stage most often skips.
2. **Test time:** `@axe-core/playwright` asserting no critical violations
   inside the E2E suite from stage 12. Near-zero marginal cost once that suite
   exists.
3. **PR time:** Lighthouse CI budgets as a required check on changed routes,
   with Pa11y when you need WCAG rule detail rather than a score.

**Know the ceiling: automated tooling catches roughly 30-50% of WCAG
criteria.** A green gate is necessary and not sufficient, and treating it as
sufficient is how a compliant-looking product fails a real user. Two things
close the rest and neither is a tool you install: a periodic manual
screen-reader pass (NVDA or VoiceOver) on the highest-stakes flows, on the
quarterly cadence with an owner; and a third-party VPAT or ACR rather than
self-certifying, which is also what enterprise procurement asks for by name.

**Accessibility overlays are a liability, not a control.** A script that
remediates in the visitor's browser leaves the source-level WCAG failures in
place, does not satisfy a VPAT, and is regularly reported to interfere with the
screen readers it claims to serve. If one is already installed, do not drop it
cold: build the gates above, get the audit, then decommission, because removing
the visible mitigation before the real one exists raises exposure rather than
lowering it. Measure the day it can go.

**Internationalization is the same shape of decision** and gets skipped for the
same reason: cheap now, a rewrite later. If a second locale is plausible,
`/internationalization-i18n` and `/localization-l10n` (Mindrally) belong in the
loop for the first UI ticket, not after the strings are hardcoded in two
hundred components. If a second locale is genuinely not coming, say so once and
move on.

### 14. Code review

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

### 15. Merge gates with adversarial reviews

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

### 16. Debugging and investigation

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

### 17. Deploying

| Primary | From | Why |
| --- | --- | --- |
| `/land-and-deploy` | gstack | The land-and-deploy workflow, configured once by `/setup-deploy` in Phase 0. |
| `/ship` | gstack | The fuller ceremony when needed: merge base, tests, diff review, version bump, changelog, PR. |
| `/canary <url> --baseline` | gstack | Run BEFORE deploying: captures screenshots, console error counts, and load times as the comparison baseline. |
| `/launch-checklist` | Aakash Gupta PM OS | For product launches (not routine deploys): prioritized checklist with owners, dependencies, and critical path; templates for small, major, and regulatory launches. |

**Schema changes deploy differently from code.** Code rolls back; a dropped
column does not. Expand-contract (add the new shape, backfill, move reads, then
remove the old shape across separate deploys) is the pattern that keeps a
migration reversible, and `/database-migrations` (ECC) is where the strategy
gets written down. Any backfill big enough to notice is a data-modifying job
and runs under this repo's background-jobs protocol: snapshot the affected rows
first, monitor on a cadence, report before and after.

Alternates: `/resolving-merge-conflicts` (mattpocock) when landing goes
sideways, `/gen-release-notes` (Beagle), `/deployment` and provider-specific
skills (rsc-harness: `/vercel`, `/fly-io`, `/cloudflare`, etc.) when choosing
or operating infra, `/opensource-pipeline` (ECC) for public releases,
`/github-actions` (rsc-harness) for CI plumbing.

### 18. Post-deploy monitoring and performance

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

### 19. Incident response and resilience

Stage 18 is the watch. This is what happens when the watch finds something,
and what has to already exist for the answer to be short.

| Primary | From | Why |
| --- | --- | --- |
| `/incident-response` | Han | Incident procedures and on-call playbooks: severity levels, who is told what, and the post-mortem template. Written before it is needed, because nobody writes process at 2am. |
| `/runbook-structure` | Han | Structured runbooks for whoever is holding the pager. A runbook an agent can also read is the difference between a page and a fix. |
| `/sre-incident-response` | Han | Working a live incident on SRE lines once one is actually running. |
| `/backups` | rsc-harness | Defensible RPO and RTO targets, 3-2-1-1-0 copies that are offsite and immutable, and the restore procedure. This is the floor under everything above it. |

**A backup nobody has restored is a hypothesis.** The restore drill is the only
test of a backup that counts, and it belongs on the cadence table below like
any other recurring pass. Time it: the number you get is your real RTO, and it
is usually not the one in the plan.

**Every incident ends the way every bug ends.** A regression test that would
have caught it, plus a learning in docs/LEARNINGS.md via stage 25. Same rule as
`/orch-fix-defect` in stage 16, higher stakes. An incident that produces only a
timeline document has taught the codebase nothing.

**Agent-shaped failures need their own runbook entries,** because they do not
look like the outages runbooks are usually written for: an unattended loop that
opened forty pull requests overnight, an agent that force-pushed over a branch,
a backfill that ran against production because the connection string was the
default one. The prevention is in this repo's rules already, snapshot before a
data-modifying job, monitor on a five-minute cadence, keep `/guard` and
`/freeze` on for unattended work. The runbook is for the day prevention did not
hold.

Alternates: `/monitoring` and `/observability` (rsc-harness) for the alerting
that pages you in the first place, Sentry's `/incident-response` and
`/analyze-performance` (Han) when Sentry is the alert source,
`/investigate` (gstack) once the incident is contained and the question becomes
root cause, `/quality-chaos-monkey` (zcaceres) to find the failure mode before
production does. Tooling for on-call rotation and status pages is priced in
docs/process/STACK-TEAM.md; run uptime checks on infrastructure separate from the app,
since a monitor that dies with the thing it monitors is not a monitor.

### 20. Product marketing

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

### 21. AI slop cleanup

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

### 22. Codebase health

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

### 23. Documentation

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

### 24. Security

Layered: continuous scanning in CI, per-feature review in the loop, periodic
deep audit.

| Primary | From | Why |
| --- | --- | --- |
| `/security-gitleaks` | zcaceres | Secret scanning done right: scans history first, then pre-commit hook and pinned CI. Install in Phase 0, benefits forever. |
| `/security-review` | ECC | In-loop: runs whenever a ticket touches auth, user input, secrets, endpoints, or payments. |
| `/cso` | gstack | The periodic audit: all phases with an 8/10 confidence gate. `--diff` per branch, `--comprehensive` monthly, `--supply-chain` / `--owasp` / `--skills` to scope. Reports only, never edits. |
| `/differential-review` | Trail of Bits | Security-focused review of a specific risky diff, with adversarial exploit modeling. |
| `/threat-modeling` | claude-mpm | STRIDE with risk scoring; mitigations land in the backlog and the test suite, closing the loop into Phase 1 tickets. |

**Agent and pipeline security.** Everything above secures the code the agents
write. This secures the agents, and it is the layer this catalog covers least
well relative to how much of the work agents now do.

| Primary | From | Why |
| --- | --- | --- |
| `/agent-safety` | rsc-harness | Bounds an agent that already runs: tools gated to least privilege, and prompt-injection defense for untrusted text arriving through web fetches, RAG, email, and issue bodies. The premise is one sentence: everything an agent reads is untrusted input, and an issue comment can be an instruction. |
| `/cso --skills` | gstack | Supply-chain scan of the installed skills themselves. A skill is executable text from a third party and earns the same scrutiny as a dependency. |
| `/harness-mcp-scan` and `/safety-scan` | ruflo | MCP server security, and screening for prompt-injection threats. |
| `/security-scan` | ECC | Scans the `.claude` configuration itself, which is the file set that decides what every session is allowed to do. |
| `/harness-threat-model` | ruflo | STRIDE pointed at the harness rather than the product: what an adversary does with an agent that holds your credentials. |

Injection defense that runs rather than advises: GSD ships
`gsd-prompt-guard.js` as a PreToolUse hook and `gsd-read-injection-scanner.js`
as a PostToolUse hook that scans fetched and read content before the agent acts
on it. A hook is a boundary; a rule in CLAUDE.md is a request.

Two rules that turn least privilege from a principle into something checkable:

**Scope tools per task, not per agent.** Least privilege sliced by job rather
than by identity. An agent whose job is reading untrusted external text (an
issue body, a support ticket, a fetched page) gets exactly the tools that task
needs and nothing more, and never repo write, no matter what its parent session
is allowed to do. The permission set follows the untrusted input, so a
successful injection is bounded by what that one task needed rather than by
what the harness can do.

**Vet and pin MCP servers.** A tool description is text the agent reads before
it decides, which makes an MCP server an injection vector as well as a
dependency. Pin versions in `.mcp.json` the way actions are pinned by SHA, and
review the diff when a pin moves. `/harness-mcp-scan` covers the scan; pinning
covers the day the scanned version changes underneath you.

**CI hardening, the gap agents open.** An agent with write access to
.github/workflows can weaken the gate that is supposed to review it, and the
gate will not object, because the gate is the thing being edited. Four
controls close it and all four are free.

1. **CODEOWNERS over the pipeline.** .github/workflows, the CODEOWNERS file
   itself, and branch-protection config require a named human reviewer.
   Without this, the merge gate approves its own weakening.
2. **Pin actions by commit SHA, not by tag.** `actions/checkout@v4` follows a
   moving tag, so a compromised tag is a supply-chain incident holding your
   `GITHUB_TOKEN`. Pin the 40-character SHA and let Renovate bump it.
3. **Least-privilege `GITHUB_TOKEN`.** Declare `permissions:` at the workflow
   root as `contents: read` and elevate per job only where a job needs it. The
   default is broader than almost any workflow requires.
4. **Never pair `pull_request_target` with a checkout of the PR head.** That
   combination runs untrusted fork code with write permissions and secrets in
   scope, and it is the standard fork-PR takeover.

Scan for these rather than remembering them:
[zizmor](https://github.com/zizmorcore/zizmor) is a static analyzer for GitHub
Actions that catches exactly this class, unpinned actions, excessive
permissions, `pull_request_target` misuse, and template injection. It is free,
fast, and belongs in the gate next to the secret scan. `/github-actions`
(rsc-harness) is the authoring counterpart, covering token permissions, OIDC
cloud deploys, and environment gates.

Alternates: `/security-review` (Claude Code built-in, branch-level pass when
the ECC pack is not installed), Trail of Bits is the deep bench (`/semgrep`,
`/codeql`, `/supply-chain-risk-auditor`, `/audit-prep-assistant`, `/fp-check`
to kill false positives, fuzzing suite), `/security-scfw` / `/security-socket`
/ `/security-snyk` (zcaceres, supply-chain firewalls and scanners),
`/security-scan` (ECC, scans the .claude config itself), `/secure-coding`
(rsc-harness), stack-specific security skills (ECC `/django-security` etc.).

### 25. Retro and learning loop

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

### 26. Context, memory and harness hygiene

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
(wired at docs/SETUP.md step 5) and Token Saver for output compression, Caveman
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
/compliance              # which frameworks bind this, before the architecture
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
/canary <url>              # ten-minute watch (runbook + on-call target exist by now)
/benchmark <url>           # perf vs baseline
/document-release          # docs current
# incident runbook and on-call target already exist (stage 19) before this point
/feature-results           # (after data accrues) hypothesis check
marketing skills as the launch demands
```

### Cadence (Phase 4)

| When | Run |
| --- | --- |
| Every session end | `/loose-ends`, `/learn` when something was learned |
| Every branch | `/clean-ai-slop`, `/cso --diff` when the diff warrants it; zizmor on any branch that touched .github/workflows; Promptfoo when the branch changed a prompt, a skill, or any latent behavior |
| Weekly | `/retro`, `/health` |
| Monthly | `/ponytail-audit`, `/review-llm-artifacts` chain, `/cso --comprehensive`, `/quality-docs-update`, `/config-gc`, `/context-budget` |
| Quarterly | Restore drill from a real backup, timed; `/cso --skills` and `/security-scan` over the harness; compliance control register reviewed against what actually shipped; manual screen-reader pass on the highest-stakes flows when the repo has a UI (stage 13) |
| On repeat of any manual flow | `/skillify` |

The weekly and monthly rows can run themselves: `/schedule` (built-in) creates
scheduled cloud routines on a cron, and `/loop` handles recurring runs inside
a live session.

---

## Recommended tools

Curated from the tools shelf in docs/dev-tooling/. Tier 1 is part of the
process itself; Tier 2 installs when its trigger fires; the rest stays on the
shelf until a real need shows up.

### Tier 1: install now

| Tool | What for | Stage |
| --- | --- | --- |
| Stax | Stacked PRs; the branch mechanics behind `/stack-ship`. | Build loop |
| RoboRev | Automated review on every commit; the other half of the merge gate. Pair with Stax. | Build loop, merge gate |
| RTK | Token-optimized CLI proxy, 60-90% output reduction. Wired as a PreToolUse hook at docs/SETUP.md step 5. | Every stage |
| Graphify | Codebase as a queryable knowledge graph; answers architecture questions without grep. docs/SETUP.md step 7 adds the `graphify query` harness rule when this pack is installed. | Tech design, debugging, harness hygiene |
| Kata | Local-first issue tracking with CLI and TUI, built for agent loops. The tracker `/to-tickets` publishes to when you do not want Linear or GitHub Projects. Local-first fits the no-machine-deps starter-kit goal. | Decomposition, Build loop |
| Git Credential Manager | Secure cross-platform git auth. Cheap, one-time, removes a whole class of credential friction. | Setup |
| Promptfoo | Evals as a required check: versioned cases, assertions including LLM-graded quality and cost, exit codes that block a merge. Free, self-hosted, and the only thing in this list that enforces the evals rule this repo already wrote. | Testing, merge gate |
| zizmor | Static analysis for GitHub Actions: unpinned actions, over-broad `GITHUB_TOKEN` permissions, `pull_request_target` misuse, template injection. Free, and it is the only check that notices an agent weakening its own pipeline. | Security, merge gate |
| ccusage | Local token usage and cost analytics across sessions. Feeds the monthly `/context-budget` and `/cost-tracking` pass with real numbers. | Harness hygiene cadence |
| docs-mcp-server | Local grounded-docs MCP (Context7 alternative) so library and API answers come from real docs, not training data. GitMCP is the per-repo variant: point it at any GitHub project to stop hallucinated APIs. | Build loop, research |
| Storybook | Component workshop in isolation; the living home of the design system that `/design-consultation` produces. UI repos only. | Visual design, Build loop |

### Tier 2: install when the trigger fires

| Tool | Trigger | What for |
| --- | --- | --- |
| Worktrunk | Running 2+ parallel agent sessions routinely | Worktree management at scale; native EnterWorktree covers the single-session case. |
| Temporal | First real background job or backfill | Durable execution with retries and visibility, instead of hand-rolled job loops. Rivet Actors is the lighter stateful-compute alternative. |
| k6 or Locust | Before the first launch with real concurrency | Load and capacity testing, which no skill in the catalog covers. `/benchmark` measures one user; this measures a hundred. |
| Replane | First A/B test or staged rollout | Feature flags and dynamic config without redeploying; pairs with `/experiment-decision`. |
| Phoenix (Arize) | The product itself ships LLM features | Tracing, evaluation, and troubleshooting for LLM calls; the observability half of the evals rule. |
| Vault | Secrets shared beyond one machine | Centralized secrets management; until then `.env` + gitleaks scanning covers it. |
| Tela | A second person needs the project knowledge | Self-hosted markdown team wiki with a built-in MCP server, so agents read and write the same wiki humans do. Outline is the humans-first alternative without agent access. |
| Potpie | Project context is split across GitHub, a tracker, and a wiki, and Graphify's code-only graph stops answering | Derived graph spanning code, PRs, source history, tracker, and wiki, with a local daemon that runs inference through your existing harness rather than its own API key. The one tool that argues against Graphify rather than duplicating it; see PROCESS-TEAM.md Layer 5 for the shared-graph question to settle first. |
| React Doctor | React repo | Deterministic scanner that catches bad React patterns agents write; slots into the slop-cleanup cadence next to `/clean-ai-slop`. |
| AgentsView | Weekly retros start asking "what did the agents actually do" | Local session search, analytics, and token stats; evidence for `/retro`. |
| OpenCode / Crush | Adversarial review wants more vendor seats than Codex, Gemini, and Antigravity (agy) already provide | Additional agent CLIs for `/z-adversarial-review` skeptic seats; the three named CLIs are the assumed baseline. |
| Maxun / ScrapeGraphAI | Scraping becomes a product feature | No-code site-to-API (Maxun) or LLM-driven extraction (ScrapeGraphAI); for ad-hoc pulls the `/scrape` and `/browse` skills already cover it. |
| serve-sim | iOS work | Apple simulators streamed to a browser; pairs with the `/ios-qa` family. |
| Scalekit | An enterprise customer asks for SSO/SCIM | Enterprise auth component instead of building it. |
| markdownify-mcp | Research ingests PDFs, decks, or odd formats | Converts almost anything to Markdown so `/research` output lands in the repo cleanly. |
| Usertour | `/activation-analysis` names an onboarding gap | Open-source in-app product tours, checklists, and surveys; the shipping half of the activation work. |
| ShipShipShip | Release notes exist but nowhere public to put them | Self-hostable changelog and roadmap page; where `/gen-release-notes` output lands. |

### Hold off

- **Multi-agent desktops and orchestrators** (Multica, Agent Teams AI,
  oh-my-claudecode, FirstMate, LobeHub, Paperclip, Sim): native subagents,
  teams, and Workflow scripts already cover the orchestration this process
  needs. Revisit only if orchestration outgrows one machine.
- **Memory layers** (brain.md, memU, Docbank, contexton-ai-oss, Mem0): native
  file-based memory plus gbrain and Graphify already hold project knowledge; a
  third memory system adds sync problems, not recall. contexton-ai-oss is held
  on adoption rather than on idea: docs/rules/CODING.md ranks candidates by
  stars, commit recency, issue responsiveness, and real user feedback, and at
  0 stars and 8 commits it has none of them yet, whatever the merits of scoring
  how much you trust a stored fact. Mem0 is the opposite case and still loses:
  it has the adoption contexton-ai-oss lacks, and it extracts every memory with
  an LLM call into a vector or graph store, which the LLM-access rule routes
  through local Claude Code instead. If a product being built ever needs agent
  memory, Graphiti below is the pick, on adoption and on expiring facts rather
  than accumulating them; Mem0 is the fallback for the accumulating case.
- **CodeGraph, Create Context Graph, Context+**: overlap Graphify; one graph is
  enough. Context+ is the closest runner-up and lost on a stated trade: it wants
  an embedding backend per developer, where Graphify parses locally with
  tree-sitter and explains every edge. Revisit if fuzzy semantic recall on a very
  large repo starts beating explainable edges.
- **Token Saver**: overlaps RTK; add only if RTK measurably misses cases
  (`rtk gain` will show it).
- **LLM infra** (LangChain, AgentField, Wyolet Relay, Unsloth, LEANN,
  Graphiti): only relevant when building LLM products, and the LLM-access rule
  routes product inference through local Claude Code, which removes most of what
  these solve. Graphiti is the pick among them if a product ever needs agent
  memory where facts expire rather than accumulate; it is the best-adopted
  of the graph options and still costs a graph database plus an LLM call per
  ingest, so it is a product dependency, not team tooling.
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

Install per source via the files in docs/frameworks/, which are the skill
catalog by workflow stage. Tools that are not skills live in
docs/dev-tooling/.
