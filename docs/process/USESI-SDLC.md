# USESI SDLC: Target Process and Migration Plan

| | |
| --- | --- |
| **Status** | DRAFT, pending approval |
| **Approver** | Zac Goodwin |
| **Date** | 2026-08-25 |
| **Sources** | `docs/plans/2026-08-25-sdlc-vs-greenfield-comparison.md` (the comparison report), `Greenfield.md`, the seven docs in `current_process/` |
| **Supersedes** | On approval, this document is the process of record. The `current_process/` docs remain as historical reference; their still-true content (PR Score criteria, beta-release mechanics, TDD walkthrough) is incorporated here by reference. |

This document does two things. **Part 1** states what the process is at 100% adoption of the comparison report's recommendations: every verdict in its sections 2 through 7, the eight additions from its section 8.2, and one tool per capability from its tooling table. It is written in the present tense as the process of record, even though most of it is not yet true. **Part 2** is the migration plan from the current process to Part 1: eight phases plus five parallel tracks, milestone-driven, each gated by exit criteria.

## Decision log

Four decisions the comparison report left open, decided by Zac Goodwin on 2026-08-25:

1. **Tool track: best-in-class, minus the two big tickets.** The primary column of the report's gap table governs, except the two items the report says to justify individually rather than adopt by default: LaunchDarkly (Statsig free plus a mandatory repo-level flag registry and sweep takes the slot) and Braintrust (Promptfoo self-hosted takes the slot). Named re-entry triggers for both are in Section 16. One consolidation rides the same logic: incident.io (the report's best-in-class incident-management pick) already covers paging and status pages, so gap 8's Better Stack pairing is not purchased separately.
2. **GitHub Enterprise Cloud.** One upgrade buys the native merge queue on private repos and Entra SSO/SCIM. (The report's third justification, org-level rulesets, turned out to be available on Team since June 2025; the other two stand.)
3. **Production smoke stops at payment.** The post-deploy checkout walk in production goes up to payment submission and no further. The order-sync assertion stays in the QA master workspace. No synthetic orders enter Eclipse. The deploy runbook names this residual risk: production's order-path composition is only indirectly verified. Side benefit: the smoke suite stays outside cardholder-data scope for PCI purposes.
4. **Milestone-driven pacing.** Phases are gated by exit criteria with estimated durations, not calendar dates. A phase is done when its exit criteria hold, not when its week ends.

## Validation notes

The comparison report was fact-checked by a nine-agent research pass on its own date; this document re-verified the load-bearing claims on 2026-08-25 (eight research agents, 30 claims, primary sources). Twenty-five confirmed. Five corrections, all folded into the text below:

1. **Org-level rulesets are on the Team plan** since June 2025, not Enterprise-only. Enterprise Cloud is justified by the merge queue and SSO/SCIM alone.
2. **Copilot code review has been metered since June 2025** (premium requests), not June 2026. What changed June 2026: the multiplier jumped to 13 premium requests per review, reviews began consuming Actions minutes on private repos, and GitHub is moving to token-metered AI Credits. The report's conclusion (sample it, never blanket it) holds, more strongly.
3. **The VTEX CLI auth citation:** the community issue requesting a token flag (toolbelt #1162) closed in 2022; the live artifact is the unmerged toolbelt PR #1211 (a `--pipeline` login flag, open since Feb 2024). The substance stands: no supported non-interactive login exists; the first-party `vtex/action-toolbelt` Actions authenticate by writing the session files (`session.json`, `tokens.json`, `workspace.json`) an interactive login would create.
4. **The overlay lawsuit statistic:** 24.9% of 2025 web-accessibility suits hit sites with an overlay installed (EcomBack), not ~40%. Federal filings up 27% year over year and the Unruh Act's $4,000 per violation both confirmed. The accessiBe assessment is unchanged.
5. **Checkly Starter ($24/mo) runs hourly Playwright checks fine but exposes only ~4-6 regions, capped at 3 locations per check.** Sufficient for our synthetics; noted so nobody expects the 22-region spread without the Team tier.

---

## Part 1: The target process

### 1. Principles

Six rules; everything below implements one of them.

1. **Canon lives in the repo.** If a rule is not versioned and committed where every agent session loads it, half the team's agents have never read it.
2. **Every stage leaves an artifact the next stage reads.** PRD to spec to tickets to PRs to learnings. No stage starts from a blank page or a memory.
3. **Every gate is a machine.** Human review is for judgment. Anything a check could catch, a check catches, because at agent volume the human will eventually miss it.
4. **A gate on a laptop is not a gate.** Pre-commit hooks are the fast local echo. The gate is a required status check on a protected branch, configured so nobody, including its owner, can merge past it.
5. **Revert first, diagnose second.** On a red trunk or a bad deploy, the default action is the revert (in VTEX terms: install the previous version), inside a stated time limit. Heroic forward fixes happen in a branch, after.
6. **Buy per-seat, self-host per-activity, and model every metered tool at 5x current PR volume before signing.** Agents multiply exactly the meters that bill per scan, snapshot, trace, or review.

### 2. Roles and ownership

Every shared surface has a named owner or it rots. The Gatekeeper role is promoted, not deleted: from performing the release ceremony to owning the machines that perform it.

| Surface | Owner (role) | The job |
| --- | --- | --- |
| The gate (rulesets, required checks, CI, review pipeline config) | Gatekeeper | A red gate is fixed as first priority; a red gate that is normal is decoration |
| Trunk health | Gatekeeper | Owns the revert SLA (Section 6). "Trunk is green" is a job, not a hope |
| Canon (`CLAUDE.md`, `AGENTS.md`, `docs/rules/`, the constitution) | Gatekeeper (initially) | Reviews every change to canon; quarterly cruft pass |
| E2E, smoke, and eval suites; exploratory testing | QA | Owns suite health, flake quarantine decisions, and the exploratory passes machines cannot do |
| Work queue and acceptance-criteria discipline | PM | No ticket enters `ready` without acceptance criteria; owns the label vocabulary and decomposition review |
| Telemetry pipeline | Gatekeeper | Owns the OTel export, Datadog dashboards, and per-vendor budget alerts |
| Cost review | PM | Reads the Datadog/Power BI panes weekly; raises cost before finance does |
| Deploy pipeline and on-call | Gatekeeper | Owns the release Actions, canary baselines, alert routing, incident command rotation |
| Design system (`docs/DESIGN.md`, Storybook) | Designer | Rejects UI that deviates without a decision |
| Identity and access | IT (Entra) | PIM on the roles that edit rulesets, deploy jobs, and the VTEX production account |
| AI enablement (the people track) | Named at phase 2 | Paired ramp-up, the senior-review reset, adoption metrics |
| Each SaaS subscription | Named per tool in Section 16 | Someone reads the dashboard, or we cancel it |

The Gatekeeper holds several rows deliberately: at this team size, consolidation beats orphaned surfaces. As the team grows, canon and telemetry are the first rows to split off.

Human approvals in the whole flow, per ticket: **two.** The merge approval (Gatekeeper or delegate, informed by the machine verdicts) and the production-install approval (QA). Everything between them is automated. One confirmation follows them: the short sanity pass that closes the ticket after a green production smoke. It reads the machine's verdict rather than re-testing, and its click is what moves Production validation to Done.

### 3. The work queue (Jira)

Jira stays. Its role upgrades from a status board people push tickets across to a machine-readable contract agents act on. The Atlassian MCP server (GA Feb 2026, org-admin enablement required) is how agents reach it.

- **Acceptance criteria are written on every ticket before implementation starts.** They are the contract between whoever wrote the ticket and the agent that executes it, and they are what the Spec axis of code review checks the diff against. A ticket without them does not get the `ready` label.
- **A label vocabulary agents act on without a conversation:** `ready` (criteria written, unblocked), `blocked-by:<key>` (declared edges from decomposition), `needs-design`, `high-risk` (routes to the blocking adversarial tier), `flag:<name>` (the feature flag this work ships behind).
- **Model and Model Effort fields** on the board, set at estimation time, so routing a ticket to the right-sized agent is a field lookup.
- **Status transitions are automated from GitHub and deploy events.** Nobody hand-reassigns a ticket to move it; even the claim is a command, not a UI reassignment (the claiming developer or agent transitions Backlog → In development through the Jira MCP as part of picking the ticket up). This collapses the admitted three-flow problem (Jira, Git, VTEX) into one flow with two mirrors:

| Transition | Triggered by |
| --- | --- |
| Backlog → In development | The claiming session transitions it via the Jira MCP on pickup |
| In development → Code review | PR opened |
| Code review → Ready for deployment | PR merged (merge queue green) |
| Ready for deployment → In QA | Release job installed the version in the QA workspaces |
| In QA → Production validation | QA approves the production step; prod install and smoke run |
| Production validation → Done | `@smoke-prod` green plus the human sanity pass |

Two statuses are deliberately re-pointed relative to the current flow, where "In QA" precedes "Ready for deployment" (QA tests, then the ticket waits for the production install). Under per-ticket deploys, "Ready for deployment" means merged and awaiting the automatic QA install, "In QA" follows it, and no resting state exists between QA approval and the production install because nothing waits there. The current "Awaiting QA" status (developer tests in the productive workspace, meaning the per-ticket workspace in the QA account) is absorbed: the per-PR smoke tier runs against the ticket's workspace URL before merge (Section 9 defines how the PR's code gets there), so by the time a version reaches a QA workspace it has already passed the checks a developer used to run by hand. The re-mapping is agreed with the team and landed at task 3.8, before the automation.

- **Decomposition is machine work, reviewed by the PM.** Specs are decomposed into tracer-bullet tickets, each independently shippable, each declaring its blocking edges. Declared edges are what let parallel sessions pick non-conflicting work.

### 4. The build loop (per ticket)

```mermaid
sequenceDiagram
    autonumber
    participant Dev as Developer + Agent
    participant GH as GitHub (protected main)
    participant MR as Machine review tier
    participant GK as Gatekeeper (human)
    participant CI as Actions (deploy job)
    participant VTEX
    participant QA
    participant Jira

    Jira->>Dev: Ticket with acceptance criteria + risk score
    Dev->>Dev: Worktree per ticket, agent implements (TDD, flag-first commit)
    Dev->>GH: Push branch, open PR (score label auto-applied)
    GH->>GH: Required checks: build, gate tests, secret scan, SonarCloud, Semgrep
    GH->>MR: Per-commit review + two-axis code review (all PRs)
    alt High score (checkout, order-sync, auth, schema...)
        MR->>MR: Blinded adversarial review, cross-vendor seat (blocking)
    else Low/medium score
        MR-->>MR: Adversarial review runs post-merge, nightly
    end
    MR->>GK: Verdict + findings on PR
    GK->>GH: Human merge approval (the first of two human gates)
    GH->>GH: Merge queue tests PR against post-merge trunk
    GH->>Jira: Auto-transition: Ready for deployment
    GH->>CI: Merge event triggers release job
    CI->>VTEX: Release, tag, vtex publish, install to QA workspaces
    CI->>Jira: Auto-transition: In QA
    QA->>QA: Validates (flag on in QA account only)
    CI->>CI: Drift check: QA vs production app versions + settings
    QA->>CI: Approve production step (the second human gate, drift summary in view)
    CI->>VTEX: Install to production (standard: account master; high-risk: prod workspace)
    CI->>CI: @smoke-prod Playwright run vs the installed target (stops at payment)
    alt Smoke green
        CI->>VTEX: High-risk releases: native A/B traffic split, then vtex promote
        QA->>Jira: Sanity pass confirms: Production validation -> Done
    else Smoke red
        CI->>VTEX: Rollback: install previous version, no promote
    end
    Note over GH,VTEX: Red trunk or bad deploy: revert first, diagnose in a branch
```

The steps: claim a `ready` ticket; one worktree per ticket so parallel sessions never collide; the agent implements against the ticket's acceptance criteria, TDD, with the feature flag as the first commit; push; the PR gets its score label automatically; machine review runs; a human approves the merge; the merge queue lands it; the deploy pipeline (Section 8) takes it from there. Weekly deploy batches no longer exist. One bad ticket blocks only itself.

Work too large for one PR is stacked, with every branch in the stack merging the day it opens and stack depth capped at three. Anything that cannot land within 24 hours is flattened into a single change behind a flag, or restructured as branch-by-abstraction (Section 7).

### 5. Review

Review is layered machines with a human at the end, and the PR Score framework is the routing table. The framework's criteria stop deciding which human reviews and start deciding which tier of machine review blocks the merge.

**The layers, every PR:**

1. **Per-commit machine review** (Claude Code Action) with a bounded fix-and-re-review loop.
2. **Two-axis code review:** Standards (against `docs/rules/` and the constitution: cite the rule by number) and Spec (against the ticket's acceptance criteria: did it build the thing asked). The Spec axis catches the dominant agent failure, building the wrong thing.
3. **Anthropic's first-party managed code review** on every PR (Team/Enterprise, currently a research preview; enabled once org-wide via the Claude GitHub App, per-repo trigger "after every push").

**The blocking adversarial tier, high-score PRs only:** a blinded review whose reviewer holds exactly four keys (spec, acceptance criteria, diff, throwaway worktree) and never saw the conversation that produced the code, plus skeptic sub-agents. High score means the PR Score router says so: the high-risk repos (checkout, uselectrical-integrations, b2bstore, order-sync-service, usesi-apps), hot fixes, new features, breaking changes, security fixes, schema and `manifest.json` dependency changes, auth and payment paths. Low- and medium-score PRs get the same adversarial pass post-merge, nightly, with findings filed as tickets through triage.

**The cross-vendor rule, written into the constitution:** *the blocking reviewer's vendor must differ from the diff author's vendor.* Claude-authored code gets its adversarial seat from Codex; Codex-authored code gets Claude. Copilot code review joins as a sampled extra signal on the high-score tier only (13 premium requests plus Actions minutes per review as of June 2026 makes blanket coverage the wrong spend). The same rule powers: cross-vendor test authorship on high-risk tickets (one vendor implements, the other writes the acceptance tests from the ticket alone), cross-vendor eval grading, the alternating nightly sweep, second opinions on stalled incidents, and plan review before implementation on architectural tickets, where a second vendor critiques the plan before code exists: the cheapest place to catch a wrong approach, and blinding is trivial since there is no conversation to leak. Calibration: cross-vendor review catches some correlated-blind-spot errors, not all; it is worth doing because the marginal cost is near zero, not because it makes review failure-proof.

**Score recalibration for agent-shaped PRs:** the size criteria (files, commits) assumed human-shaped PRs. Agent PRs that exceed the size thresholds are stacked or split, not scored higher. The framework's earned knowledge (which repos are dangerous, which change types are risky) is what survives.

**The human merge approval stays on every PR.** Auto-merging the lowest-risk tier (docs, dependency bumps, low-score repos) with sampled post-merge review is a config change the router already permits; it is deliberately deferred until phase 7 has months of clean gate history.

**Receiving review is verified, not obeyed.** Agents implement wrong review feedback enthusiastically; the fix-and-re-review loop verifies each suggestion before applying it.

### 6. The gate

Three tiers. The budget per tier is part of the design: a gate that kills merge cadence gets routed around.

| Tier | What runs | Budget | Failure means |
| --- | --- | --- | --- |
| **Local echo** | Gate tests, format, typecheck, gitleaks | Under 2s | Commit blocked (locally; the server re-checks regardless) |
| **Per-PR, required checks** | Build + unit tests, SonarCloud quality gate (customized, required), Semgrep SAST, secret scanning push protection, dependency review (Socket + Dependabot), per-commit review, two-axis review, `@smoke` E2E against the ticket's workspace URL, selective E2E slices for touched areas, Lighthouse budgets (a11y + perf) on changed routes, zizmor on workflow-file diffs, Promptfoo on prompt/skill diffs | Under 10 min | Merge blocked, for everyone including admins |
| **Post-merge on trunk** | Full Playwright regression (nightly), visual regression, StackHawk DAST against the QA workspace, full eval suite, adversarial review on unflagged paths (alternating vendors), monthly security audit | Nightly / per batch | **Revert first**, then diagnose in a branch. Findings file tickets through triage |

**Enforcement mechanics:** repository rulesets (and org-level rulesets, available on our plan) with **empty bypass lists** on every active repo. Audit-log alerts fire on any ruleset edit. Entra PIM gates the roles that can edit rulesets: just-in-time elevation, no standing admin. The merge queue tests every PR against the actual post-merge state of trunk, so two individually-green PRs that break each other are caught before landing.

**The revert rule** (canon, `docs/rules/WORKFLOW.md` equivalent): a red trunk or a red post-deploy watch is reverted within 30 minutes of detection unless the owner of trunk health explicitly stays the revert in writing. Agents produce clean revert commits reliably and heroic forward fixes unreliably.

**Flaky tests are quarantined, not retried into silence.** One retry in CI; a retried-pass is flagged flaky, quarantined by tag, and ticketed. Trunk Flaky Tests (free tier) is the bridge; Datadog Test Optimization takes over when the telemetry pane lands (phase 5), keeping one observability vendor.

**Degraded mode, written in advance:** when an LLM review vendor is down, human review substitutes, gated by PR score (high-score PRs wait or get two human reviewers; low-score proceed on one). Merges neither freeze nor skip gates. Model versions are pinned in the harness; any model upgrade re-runs the eval suite first so a drift in review strictness is measured, not discovered.

### 7. Feature flags

Flags go from preferred to load-bearing. Under trunk-based development they are how incomplete work reaches trunk at all.

- **Flag-first is a gate check, not a habit.** New user-facing behavior ships behind a flag; the first commit adds it. The per-PR gate verifies the registry entry exists.
- **Every flag gets an expiry date at creation**, recorded in a repo-level flag registry (one file, reviewed like code). A monthly sweep deletes flags at 100% or 0% rollout and pages the owner of any flag past expiry. Every stale flag is a permanently untested code path an agent will reason about wrongly.
- **Backends:** Statsig (free tier: 2M events/month, no seat cap) for Node services and middleware (order-sync-service and kin). VTEX IO storefront apps keep the existing app-settings mechanism where a Statsig SDK does not fit; the registry and expiry discipline cover both backends identically. LaunchDarkly re-enters only on its named trigger (Section 16).
- **Work too big for a boolean** uses branch-by-abstraction: introduce the seam, land it, migrate callers incrementally, delete the old path. Never a long-lived branch.
- **Beta releases are demoted to the narrow exception** for what a runtime flag cannot cover: VTEX `manifest.json` dependency and manifest-level changes. The existing version rules (`major.minor.patch+1-beta.n`) and the never-in-production rule stand for that case. The old criteria list (checkout, integration, b2bstore, order-sync; order placement, auth) is precisely the flag-first list now, not the beta-first list. CONTRIBUTING.md files are updated accordingly.

### 8. Deploy and release

The Gatekeeper's fourteen manual steps become a GitHub Actions release job keyed off the merge event, with one human approval in it.

**Per merged ticket, automated:** update CHANGELOG and manifest, git tag, `vtex publish`, create/refresh the productive workspace, `vtex install` to the QA workspaces, Jira transition. Sentry release tagging rides the same job so errors correlate with deploys.

**The production step, gated:** the job first runs the **pre-install drift check** (a script diffs installed app versions and relevant settings between the QA and production accounts and posts the summary on the job, so the approver decides with the drift in front of them); QA approves; the job installs in the production account under a GitHub **protected environment** (required reviewers, scoped secrets) and immediately runs `@smoke-prod`. A green run plus the QA sanity pass closes the ticket.

**`@smoke-prod` (budget: five minutes), stopping at payment per the decision log:**

- Read-only money paths: home render, search and PLP (Algolia), PDP, B2B login, logged-in pricing display, add-to-cart, cart math, checkout walked up to payment submission and no further.
- The permission matrix: the same paths as anonymous visitor, org buyer, and sales-rep roles (storefront-permissions), because B2B composition bugs hide in the role a human does not spot-check.
- The order-sync assertion runs in the QA master workspace, not production. The runbook names the residual risk: production's install-time composition (dependency versions, edition, account settings, franchise configs) is verified for render-and-cart paths but only indirectly for order placement.

**High-risk releases** (the same list as the high-score review tier) do not install straight to master: publish, install to a production workspace, smoke it, split a slice of traffic with VTEX's native A/B test (`vtex workspace abtest`, whole-number proportions, 30-day auto-end), then `vtex workspace promote` on green. That is a canary deploy in VTEX's own vocabulary.

**Rollback is policy, not a debate:** red smoke inside the watch window, or a Sentry error spike inside the ten-minute post-deploy watch against the canary baseline, triggers installing the previous version. The threshold is decided in advance and written in the deploy runbook (a distinct document from the incident runbook of Section 15: it holds the release mechanics, the manual-ceremony fallback, the auth caveat, the rollback thresholds, and the stop-at-payment residual risk).

**The honest constraint:** VTEX CLI auth in CI rides an unsupported path. The first-party `vtex/action-toolbelt` Actions authenticate by writing the session files an interactive `vtex login` would create; no official token flag exists (the open artifact is toolbelt PR #1211). We pin the action and CLI versions, treat auth as a watched dependency, and keep the VTEX Developer MCP roadmap on the radar: today it is documentation/API-spec access only (four tools, no deploy capability), so if VTEX ships deploy-capable tooling, this section gets simpler.

**Synthetics:** the read-only `@smoke-prod` subset runs hourly from Checkly (Starter, ~$24/mo; ~4-6 regions, 3 locations per check, which covers us), alongside API heartbeat checks on order-sync-service and the integration endpoints, because rendered storefront paths never exercise the middleware whose quiet failures this tier exists to catch (order-sync-service down-but-silent is invisible to Sentry and Zendesk until orders are missing). One suite, three duties: PR smoke against the workspace URL, post-install verification against production, continuous uptime. Synthetics hygiene: the runner's identity is allowlisted in bot protection, the test account carries `is_synthetic` in analytics, and the test SKU stays out of merchandising.

### 9. Testing and evals

**The pyramid gets thick under E2E.** The team reports that most bugs are discovered in full E2E functional testing; that says the layers below it are thin. Agents backfill unit and integration coverage at service seams (the order-sync `processOrderByID`/`processQueueRecords` pattern is the house example) so discovery moves earlier and E2E becomes the safety net instead of the net. The existing 25%→80% coverage ramp stops being a deadline and becomes a work queue, because agents write the tests and humans review them.

**E2E placement** is the tiered gate doing its job: `@smoke` money paths per PR (under 10 minutes, hard; a PR-triggered job first publishes the branch build as a CI prerelease, the beta-release version mechanics run by a machine rather than by hand, and installs it into the ticket's workspace, so the suite has a real URL before merge); selective slices per PR mapped to touched areas (`--grep @checkout` when checkout files changed); the full functional regression nightly against the trunk-tracking QA workspace, never holding a merge.

**Playwright speed engineering, compounding:** (1) `fullyParallel` plus sharding across CI jobs with merged blob reports; (2) never do setup through the UI: authenticate once in a dedicated setup project (`projects[].dependencies`, not `globalSetup`) and reuse `storageState`; create carts, orders, and test data through VTEX APIs, not clicks; (3) artifacts on failure only (`trace: 'on-first-retry'`, `video: 'retain-on-failure'`, `screenshot: 'only-on-failure'`); (4) no build in the test job, point at the workspace URL an earlier job installed (the PR-time install pre-merge, the release job post-merge); (5) one retry with quarantine, never unbounded retries.

**Accessibility rides along:** `@axe-core/playwright` asserts no critical violations inside the same suite; `eslint-plugin-jsx-a11y` catches issues at write time; Lighthouse accessibility budgets run as a required check on changed routes, with Pa11y supplying WCAG rule detail in the nightly tier. UI-bearing tickets carry a11y in their acceptance criteria (keyboard path, focus order, ARIA on custom components; B2B quote tables and punchout flows are where custom widgets fail silently), and `docs/DESIGN.md` encodes contrast-safe tokens and focus-visible states so agent-built UI starts accessible. Target is WCAG 2.2 AA. Automated tools catch roughly 30-50% of criteria, so a periodic manual screen-reader pass (NVDA/VoiceOver on checkout and PDP) and a third-party VPAT stay on the calendar. accessiBe is demoted to supplemental while source-level debt burns down, and decommissioned only after the audit passes; dropping it cold mid-transition raises exposure.

**Evals are a required check for latent behavior.** Anything with a prompt, skill, or model in it (the review pipeline itself included) has a Promptfoo suite with versioned test cases; a prompt regression fails the build the way a code regression does. CI exit codes make it a gate. LLM-graded evals are judged by a different vendor than the one being graded. Governance note, recorded: OpenAI acquired Promptfoo in March 2026; it remains MIT-licensed with Anthropic providers unchanged. Braintrust re-enters on its named trigger (Section 16).

**Visual regression:** Chromatic on the Storybook of `usesi-styleguide` (free to 5k snapshots, then metered: modeled at 5x PR volume before the paid tier is signed). It lands after Storybook does (Track D).

### 10. Canon, knowledge, and documentation

Four stores, one rule: a fact lives in exactly one of them.

| Store | Holds | Property |
| --- | --- | --- |
| **Repo canon** (`CLAUDE.md`, `AGENTS.md`, `docs/rules/`, the constitution) | What agents must obey: standards, safety rules, workflow, review severity vocabulary, the numbered non-negotiables | Versioned, PR-reviewed, loaded by every session on every machine |
| **Repo docs** (`docs/architecture/` with ADRs, runbooks, specs, the flag registry) | Durable knowledge humans and agents both consult | Versioned; audited monthly against the code |
| **Confluence** | Human-facing narrative: PRDs, research reports, release notes, onboarding prose, the HR-facing AI policy copy | MCP-reachable by agents for reading and writing; never the source of truth for anything an agent must obey |
| **Derived context** (knowledge graph, session handoffs, learnings ledger) | Regenerable understanding | Never canonical; losing it costs recompute, not knowledge |

- **`AGENTS.md` sits alongside `CLAUDE.md`** so Codex and Copilot read the same canon Claude does (it is a Linux Foundation-stewarded standard read natively by 30+ tools; Claude Code loads it via an import line in `CLAUDE.md`). A cross-vendor reviewer that never read the house rules reviews against the wrong standard.
- **ADRs** live in `docs/architecture/decisions/`, one short file per decision (context, options, choice, consequences), drafted by agents from the design conversations that already contain them. PRs touching architecture-flagged paths (contracts, schemas, cross-app dependencies, `manifest.json` dependency changes) require a linked ADR or the check fails.
- **The constitution** is the project's non-negotiables as numbered, testable rules, so a review comment says "violates rule 7" instead of an opinion. It includes the agent-security rules (Section 13) and the cross-vendor review rule (Section 5).
- **Documentation automation, three flows:** per release, an agent updates the touched docs from the shipped diff as part of the ship phase; monthly, a docs-versus-code audit flags every claim the code no longer supports (stale canon is worse than none, because agents follow it confidently); per meeting, Teams transcripts run through a notes pass whose decisions feed ADRs and whose action items feed tickets.
- **No second memory system.** When someone proposes one, the answer is "which of the four stores does this fact belong in."

### 11. Harness parity

The test: a fresh clone plus a fresh agent produces house-style code with nobody in the room.

- **`.claude/` is committed:** agents, skills, hooks, settings, versioned in each repo, not in home directories.
- **Skills ship via a private plugin marketplace** (a git repo with `.claude-plugin/marketplace.json`); everyone installs the same set with one command.
- **Managed settings are the policy floor**, pushed by Intune (Windows: `HKLM\SOFTWARE\Policies\ClaudeCode`), not overridable per machine. Telemetry export and the permission baseline ride in it.
- **`.mcp.json` is committed** with the VTEX Developer MCP (`npx -y @vtex/developer-mcp`: documentation search, document fetch, API endpoint search, OpenAPI spec retrieval, so agents stop hallucinating VTEX APIs) and the Atlassian MCP. MCP servers are vetted and pinned; tool descriptions are an injection surface.
- **A shared permission allowlist** so nobody approves the same safe command forty times a day.
- **Mixed CLIs are planned for, not fought:** Codex holds the outside-reviewer seat, Copilot the sampled signal; `AGENTS.md` keeps them on the same canon. Cursor and ChatGPT Enterprise assistant seats are re-justified or dropped by phase 5 telemetry.

### 12. Observability and cost

- **Claude Code OTel telemetry** (one environment variable, delivered via managed settings) streams into **Datadog**: spend by model and skill, lines shipped, accept/reject rates, sessions, commit and PR counts, with `agent.name`/`skill.name`/`plugin.name` attribution. Datadog is also the pane for APM, logs, and test optimization: one vendor, per-activity meter modeled at 5x before signing.
- **Power BI** (E5, owned) holds the leadership view: weekly agent cost, throughput, and health aggregates. Raw traces stay in Datadog; Power BI gets aggregates (its dataset and refresh caps fit aggregates and not raw telemetry).
- **First-party Claude analytics** (Team/Enterprise dashboard; PRs and lines shipped once the GitHub app is connected) cross-checks the OTel numbers.
- **Weekly ritual:** a health report someone actually reads at the retro: SonarCloud deltas across all repos, coverage trend against the ramp, flake count, security hotspots, dependency alerts, stale flags, debt-ledger items, and the agent cost/output numbers. Monthly: dead-code and over-engineering audits as the counterweight to months of additive agent work.
- **Budget alerts are day-one, not post-incident:** machine-review LLM tokens are the plan's largest new meter. Hard alerts per vendor console plus Datadog monitors, so a runaway loop is a page, not an invoice. Every metered tool (Chromatic snapshots, Braintrust-if-ever, Checkly runs, Actions minutes, premium requests) gets the 5x model before purchase and an alert after.
- **Model lifecycle:** versions pinned in the harness; upgrades re-run the eval suite first; effort defaults re-swept per model generation.
- **Slack stays the event surface:** gate failures, merge-queue results, and deploy/rollback events post into the existing channels that already key on PR and ticket status.

### 13. Security

Layered by cadence, like the gate. For a B2B e-commerce platform handling pricing, orders, and punchout auth, this was the thinnest layer relative to its stakes.

- **Continuous:** GitHub Secret Protection ($19/active committer, push protection org-wide) with GitGuardian as the second engine; Dependabot alerts; **Socket** as a required check on dependency changes (typosquats and AI-hallucinated package names are a mainstream attack vector); a canon rule that any new dependency needs human sign-off.
- **Per PR:** Semgrep SAST as a required check; a **path-triggered security review** that adds the security pass automatically when the diff touches auth, payments, punchout, user input handling, secrets, or `manifest.json` policies, costing nothing on the PRs that touch none of them.
- **Per release:** StackHawk DAST against the QA workspace URL.
- **Periodic:** monthly full audit; a threat model whenever a new integration or external surface lands, with mitigations filed as tickets and test cases.
- **CI/CD hardening against agent-authored workflow changes** (a PR editing `.github/workflows/` is a privilege-escalation path to the VTEX, Jira, and deploy secrets): CODEOWNERS requires human review on `.github/workflows/` and `.claude/` paths; protected environments on the prod deploy job; OIDC over long-lived secrets where supported; third-party actions pinned to commit SHAs; `pull_request`, never `pull_request_target`, for anything touching agent-generated branches; **zizmor** as a required check on workflow-file diffs.
- **Agent security, numbered in the constitution:** (1) tools are scoped per task, not per agent: the intake agent gets Jira-create and nothing else, never repo write; (2) all external text (Zendesk tickets, Sentry payloads, web content) is data, structurally, never instructions; (3) any external-content-triggered action requires human review before it becomes a PR or customer-visible change; (4) MCP servers are vetted and pinned; (5) autonomous runs are sandboxed with egress controls.
- **Corporate estate (E5, owned):** Purview DLP on what leaves for AI endpoints plus DSPM for AI visibility; Defender for Cloud Apps watching for shadow AI SaaS; Entra PIM and access reviews on the roles that can edit rulesets, deploy jobs, and the VTEX production account.

### 14. Outside the build loop

**Product management.** Intake becomes a pipeline: an agent classifies each Zendesk and Sentry item (bug, feature request, confusion, duplicate), links it to existing Jira tickets, drafts tickets with repro steps, tags the theme; the PM reviews a labeled queue. (Buy-vs-build check first: Zendesk's own Intelligent Triage is included on Suite Professional/Enterprise; verify the current plan before building the classification half.) Weekly, a synthesis pass over support tickets, QA findings, and sales notes yields themes with frequency and severity. Prioritization candidates get evidence packets (impact sizing, affected-customer counts, effort signal from the PR Score repo tiers); the ranking stays human. PRDs carry two required fields, the hypothesis and the success metric, and get the seven-perspective agent panel before any human meeting. The chain from intent to work is three versioned links: the PRD in Confluence, an executable spec in the repo (precise behavior, edge cases, acceptance criteria an agent can implement against), and tickets decomposed from the spec; requirement changes amend the spec in a reviewed commit, so drift becomes visible history instead of surprise. A weekly 3P update generates from Jira state and merged PRs; 30/60 days post-launch, a feature-results report checks the hypothesis against usage and support volume.

**Analytics.** An owned event taxonomy in the repo (events, properties, naming, consent gating, PII scrubbing, the `is_synthetic` property); funnels on the money paths; instrumentation in the ticket's acceptance criteria, not a follow-up. VTEX and Algolia native analytics for commerce and search; **Amplitude** for the product analytics layer; Power BI on top.

**Design.** `docs/DESIGN.md` is the visual canon (tokens including contrast-safe color pairs, type scale, spacing, component inventory, interaction states including focus-visible, voice); the designer owns a system instead of producing screens. For `needs-design` tickets, agents produce working variant explorations against DESIGN.md with all states present (loading, empty, error, edge); the designer picks and redlines a real thing. Storybook on `usesi-styleguide` renders components in isolation and gives Chromatic its target. UI-bearing PRs get a generic-UI score and a DESIGN.md conformance check in their review tier.

**Active maintenance.** Investigate-on-alert: a Sentry alert above threshold fires a workflow running the Claude Code Action; the agent reads the stack trace, pulls the release diff (release tagging makes the deploy known), forms a root-cause hypothesis, and files a Jira ticket with analysis and sometimes a draft PR that still walks every gate; a human wakes up to a diagnosis. Zendesk-Sentry cross-linking turns "how many customers does this affect" into a count. Scheduled maintenance runs as crons filing tickets through triage: per branch before ship, a scoped slop pass over the diff; nightly regression and dependency alerts; weekly health and retro input; monthly flag sweep, docs audit, security sweep, repo-wide slop cleanup with a verification stage between finding and deleting (the AI-shaped debris SonarCloud does not catch: restate-the-code comments, defensive try/catch, `any` casts); quarterly harness cleanup.

**Investigation speed.** A queryable knowledge graph per repo served over MCP (one shared graph, not one per developer); **Sourcegraph** for cross-repo search across the 21 repos in the PR Score list; Sentry source maps uploaded in the release job so traces land on real code. Every agent investigation leaves its findings in the ticket.

**Internal comms.** Per release, an agent drafts an engineering release note (what changed, flags, rollback notes) to Slack and a stakeholder note (what customers can now do, who should care) to Confluence and support, including Zendesk macro/help-article updates. Monthly, a what-shipped roundup against the roadmap. Support learns a feature shipped before a customer asks.

### 15. People and policy

- **AI usage policy, a written artifact** (one page in `docs/rules/`, an HR-facing copy in Confluence): which data classes may reach which vendor endpoint; the human approver is accountable for a merged agent-authored diff; agent authorship recorded via commit trailers; the approved-tool list. Auditors and enterprise customers ask for this by name.
- **Incident management, the human half:** a one-page runbook with a severity ladder, who gets paged, who declares and commands, comms templates support can send, and blameless postmortems whose action items enter triage and whose learnings enter canon. **incident.io** (~$45/user/mo: incident response, on-call, status pages) is the tooling; it also covers the paging/status-page duty, so no separate Better Stack subscription.
- **Backup and disaster recovery:** GitHub org configuration (rulesets, environments) as code and backed up; Atlassian content on scheduled export; VTEX account/app settings snapshotted on a schedule (the drift-check script already reads them; writing them to storage is nearly free); stated RTO/RPO; one restore test a year.
- **Compliance posture:** PCI: the smoke suite stops before payment submission, keeping it outside cardholder-data scope; confirm scope stays with VTEX's payment components. SOC 2: the controls this process installs (rulesets, secret scanning, review tiers, audit logs) map to the evidence requests B2B customers send; record the mapping once. IP: the three AI vendors carry different indemnification terms by plan tier; record which tiers we hold and require agent authoring to stay on indemnified tiers.
- **The people track:** paired ramp-up on agent direction; an explicit reset of what senior review means when the diff is agent-authored; deliberate hands-on-keyboard time so skills do not atrophy; a named AI-enablement owner. Per-person accept rates from telemetry are the adoption metric, never a leaderboard. This is the mitigation for the org's admitted historic weak spot: process adoption. The difference this time is that the rules are enforced by rulesets, not memos.

### 16. The authoritative tool stack

Per the decision log: best-in-class column, minus LaunchDarkly and Braintrust. **Kept:** GitHub (+Actions), SonarCloud (gate customized and required), Sentry (+release tagging), Jira and Confluence (+MCP), Slack, VTEX workspaces (the preview environments other teams buy), Claude Code (author), Codex (outside reviewer), Copilot (sampled high-tier signal), accessiBe (demoted until the audited exit).

| Capability | Tool | Billing shape / note | Owner |
| --- | --- | --- | --- |
| Plan tier | GitHub Enterprise Cloud | $21/user/mo; buys merge queue on private repos + Entra SSO/SCIM | Gatekeeper |
| Secrets | GitHub Secret Protection + GitGuardian | $19/active committer + free under 25 devs | Gatekeeper |
| Machine review | Anthropic managed code review + Claude Code Action + blinded adversarial skill (Codex seat) | Token-metered: the largest new meter; budget alerts day one | Gatekeeper |
| Merge queue | GitHub native | In Enterprise | Gatekeeper |
| Feature flags | Statsig free + repo flag registry | $0 to 2M events/mo, no seat cap | Gatekeeper |
| E2E / flakes | Playwright + Trunk free, then Datadog Test Optimization | Playwright free; Trunk free ≤5 committers | QA |
| Observability | Datadog (OTel from Claude Code) + Power BI | Per-activity: model at 5x, alert after | Gatekeeper/PM |
| Synthetics | Checkly Starter | ~$24/mo; ~4-6 regions, 3 locations/check | QA |
| Incident mgmt / on-call / status | incident.io | ~$45/user/mo (Pro + on-call add-on) | Gatekeeper |
| Dependency safety | Socket + Dependabot + sign-off rule | Socket per-seat; Dependabot free | Gatekeeper |
| Evals | Promptfoo self-hosted | Free, MIT (OpenAI-owned since Mar 2026, recorded) | QA |
| SAST | Semgrep AppSec Platform | Per-contributor | Gatekeeper |
| DAST | StackHawk | Per-app | Gatekeeper |
| CI speed | Depot runners | $20-200/mo tiers + usage; structural under per-ticket deploys (phase 6) | Gatekeeper |
| Visual regression | Chromatic (after Storybook) | Free to 5k snapshots; meter modeled at 5x | Designer |
| Product analytics | Amplitude + VTEX/Algolia native | Per-MTU; verify what is already installed first | PM |
| Multi-repo search | Sourcegraph | ~$59/user | Gatekeeper |
| Workflow-file scanning | zizmor | Free, OSS | Gatekeeper |
| A11y gates | eslint-plugin-jsx-a11y, @axe-core/playwright, Lighthouse CI, Pa11y | Free; + periodic third-party VPAT | QA |
| Identity, MDM, DLP, leadership BI | Entra ID P2, Intune, Purview, Power BI | Owned (E5) | IT |

**Deliberately not adopted** (per the report, plus one recorded consolidation): Linear/Plane (Jira + MCP covers it), a wiki migration (Confluence + MCP covers it), CodeRabbit/Greptile (no clean win over the owned pipeline), Percy, a second memory system, Backstage, branch-based stacked-PR default (the trunk variant fits), the full 4-stack buyout, self-hosted environments and MCP gateways (named-trigger items), Better Stack (the consolidation: incident.io covers its paging and status-page duties; recorded in the decision log), Teams-vs-Slack consolidation (its own timeline; nothing here depends on it).

**Deferred with named re-entry triggers:**

| Deferred | Trigger to revisit |
| --- | --- |
| LaunchDarkly | Active flag count or audit demands outgrow the registry-and-sweep discipline (e.g. >50 concurrent flags, or a SOC 2 auditor requires an approvals workflow on flag changes) |
| Braintrust | Eval volume needs human review queues and dataset management Promptfoo does not cover, or eval-gating disputes need its UI |
| QA Wolf | E2E ownership must be bought outright because the internal suite fails its SLA two quarters running |
| Auto-merge lowest-risk tier | Phase 7 complete with months of clean gate history and zero Sev-1 escapes from the low tier |
| Self-hosted Claude environments, MCP gateway | A compliance requirement names them |
| Pact Broker | Services split to the point that cross-service contract breakage recurs |

---

## Part 2: The migration plan

Milestone-driven: each phase ends when its exit criteria hold. Durations are estimates for capacity planning, not commitments. Order matters: each phase makes the next one safer, and agents writing implementation (phase 7) is deliberately last because it is only safe once everything before it exists.

**Dependency spine:** 0 → 1 → 2 → 3 → {4, 5} → 6 → 7. Tracks P, D, M, and H run in parallel and do not block the spine (H starts with phase 2). Track R is the exception: its DR items are a prerequisite of task 6.3, the production install.

### Phase 0: Facts and prerequisites (~1 week)

Every later phase cites a fact someone should verify rather than assume.

| # | Task |
| --- | --- |
| 0.1 | Confirm current GitHub plan tier and seat count; price the Enterprise Cloud upgrade; inventory the 21 repos in the PR Score list and which are active (the score table's repo row omits `uselectrical-middleware`: assign it a tier or record why it is inactive) |
| 0.2 | Inventory GitHub Actions across repos; list the inherited broken steps the CI/CD doc names |
| 0.3 | Verify Sentry source maps are uploaded (traces point at real code) |
| 0.4 | Verify Zendesk plan tier (Intelligent Triage included on Suite Professional/Enterprise?) for Track P's buy-vs-build call |
| 0.5 | Audit what product analytics is actually installed (VTEX native, Algolia, anything else) before Amplitude is scoped |
| 0.6 | Pin current VTEX CLI and `vtex/action-toolbelt` versions; start the deploy-runbook draft with the current manual ceremony and the auth-path caveat |
| 0.7 | Record the AI vendor plan tiers held (Claude, Codex, Copilot) and their IP indemnification terms |
| 0.8 | Snapshot current baselines so the migration is measurable: deploy frequency, blocked-deployment count, lead time from merge to production, coverage %, Sonar grades |

**Exit:** every item above answered in writing, in the repo. **Owner:** Gatekeeper + PM.

### Phase 1: Server-side enforcement (~1-2 weeks)

Highest value, lowest cost; everything else depends on it. Configuration, not construction.

| # | Task |
| --- | --- |
| 1.1 | Purchase GitHub Enterprise Cloud; wire Entra SSO/SCIM |
| 1.2 | Rulesets (repo-level; org-level where uniform) with **empty bypass lists** on every active repo: require PRs, required status checks (build, tests, SonarCloud gate), block force-push |
| 1.3 | GitHub Secret Protection org-wide (push protection on) + GitGuardian free tier as second engine |
| 1.4 | Dependabot on; dependency-review gate; new-dependency human-sign-off rule written into review config; Socket trial on the two riskiest repos, promoted to an org-wide required check on dependency-manifest paths by end of phase 3 against stated trial criteria (catch rate, false-positive rate) |
| 1.5 | Fix the inherited broken Actions steps (from 0.2); pin third-party actions to SHAs |
| 1.6 | CODEOWNERS: human review required on `.github/workflows/` and `.claude/` paths; zizmor as a required check on workflow diffs |
| 1.7 | Audit-log alerts on ruleset changes; Entra PIM on the roles that can edit rulesets |
| 1.8 | Customize the SonarCloud quality gate beyond the default and make it required |
| 1.9 | Procure Semgrep AppSec Platform; tune the ruleset on two repos, then add it to the required checks org-wide |

**Exit:** no one, including admins, can merge past a red check on any active repo, verified by attempting it. Secret push protection demonstrably blocks a planted test credential. **Owner:** Gatekeeper.

### Phase 2: Canon, harness, and policy (~2-3 weeks)

What makes N people's agents produce one codebase. The raw material already exists in Confluence.

| # | Task |
| --- | --- |
| 2.1 | Write `CLAUDE.md` + `docs/rules/` per active repo from the existing Confluence content (PR rules, beta criteria, TDD walkthrough, VTEX workspace practices); `AGENTS.md` alongside, imported into `CLAUDE.md` |
| 2.2 | Write the constitution: numbered non-negotiables including the agent-security rules (13) and the cross-vendor review rule (5) |
| 2.3 | Commit `.claude/` (agents, skills, hooks, settings) and `.mcp.json` (VTEX Developer MCP, Atlassian MCP); publish the private plugin marketplace |
| 2.4 | Enable the Atlassian MCP org-side (org-admin 3LO + permission config) |
| 2.5 | Intune managed-settings floor: telemetry on, permission baseline, model pins |
| 2.6 | Jira: acceptance-criteria-required convention + `ready` label vocabulary + Model/Model Effort fields |
| 2.7 | AI usage policy page in `docs/rules/` + HR-facing Confluence copy |
| 2.8 | Start the ADR practice: `docs/architecture/decisions/`, MADR template, extraction from design conversations |
| 2.9 | Shared permission allowlist committed |
| 2.10 | Repo bootstrap script: fresh laptop to a working `vtex link` in under an hour; time-to-first-merged-PR becomes a measured devex metric; a devex review runs whenever onboarding pain recurs, and the top item gets fixed each time |

**Exit:** the parity test passes: a fresh clone plus a fresh agent implements a sample ticket in house style with nobody in the room; a ticket is executable from its acceptance criteria without a conversation. **Owner:** Gatekeeper (canon), PM (queue), with the AI-enablement owner named this phase. **Track H starts here.**

### Phase 3: Machine review tiers and the merge queue (~2-3 weeks)

| # | Task |
| --- | --- |
| 3.1 | **Write the revert rule first** (30-minute SLA, canon), before any review moves post-merge |
| 3.2 | Anthropic managed code review enabled org-wide, per-repo trigger "after every push" |
| 3.3 | Claude Code Action per-commit review with the bounded fix-and-re-review loop |
| 3.4 | Two-axis review (Standards vs canon, Spec vs acceptance criteria) wired into the PR flow |
| 3.5 | PR Score auto-labeling (repo tier + change type + paths); blinded adversarial review blocking on high-score, nightly post-merge elsewhere; Codex cross-vendor seat |
| 3.6 | Copilot review sampled on the high-score tier only |
| 3.7 | Merge queue on for the active repos |
| 3.8 | Jira status semantics re-mapped per Section 3, agreed with the team before automation lands; transitions automated: MCP claim → In development, PR open → Code review, merge → Ready for deployment; gate and merge-queue events wired into the existing Slack channels |
| 3.9 | Degraded-mode rule written (vendor down → human review by score tier); token budget alerts per vendor console |
| 3.10 | Score recalibration note in canon: oversized agent PRs are split, not scored higher |
| 3.11 | Cross-vendor plan review on architectural tickets: a second vendor critiques the plan before implementation begins |

**Exit:** every PR machine-reviewed; a high-score PR demonstrably cannot merge without the adversarial verdict; trunk stays green under two concurrent merges that would break each other (test it); no hand-reassignment needed from claim to merge. **Owner:** Gatekeeper.

### Phase 4: Flag discipline (~2 weeks; parallel with 5)

| # | Task |
| --- | --- |
| 4.1 | Repo-level flag registry file: name, owner, backend (Statsig or VTEX app settings), expiry, rollout state |
| 4.2 | Gate check: new user-facing behavior requires a registry entry (flag-first) |
| 4.3 | Statsig set up for Node services; registry convention retrofitted onto existing VTEX app-settings flags |
| 4.4 | Monthly sweep cron: delete flags at 100%/0%, page owners past expiry |
| 4.5 | Beta releases demoted in CONTRIBUTING.md to the manifest-level exception; criteria list re-pointed at flags-first |

**Exit:** one incomplete feature demonstrably merges dark behind a flag instead of waiting or going beta; the sweep has run once and its output was acted on. **Owner:** Gatekeeper + QA.

### Phase 5: Telemetry (~1-2 weeks; parallel with 4)

| # | Task |
| --- | --- |
| 5.1 | Claude Code OTel export on via managed settings → Datadog |
| 5.2 | Datadog dashboards: spend by model/skill, lines shipped, accept rates, PRs merged; monitors on spend |
| 5.3 | Power BI leadership page fed aggregates |
| 5.4 | Weekly health report + retro ritual standing; `docs/HEALTH-METRICS.md` thresholds so "unhealthy" is a number |
| 5.5 | Sentry release tagging added to the (still partly manual) release path now, so history exists before phase 6 |
| 5.6 | Schedule the Cursor / ChatGPT Enterprise seat review for 60 days after 5.1: re-role or drop on the telemetry evidence |
| 5.7 | Flake tracking migrates from the Trunk free tier to Datadog Test Optimization; Trunk decommissioned |

**Exit:** "what did agents do and cost last week, on which skills" is answerable from a dashboard without asking anyone. **Owner:** telemetry owner (named in Section 2's table).

### Phase 6: Deploy automation (~4-8 weeks; the long pole)

Genuine engineering against VTEX's real constraints. Tasks 6.3-6.5, the production half, have two prerequisites that run first despite their numbering: task 6.7 (incident.io and the incident runbook) and Track R's DR items.

| # | Task |
| --- | --- |
| 6.1 | Release job on merge: CHANGELOG/manifest update, tag, `vtex publish`, workspace create/refresh, `vtex install` to QA workspaces, and the Ready for deployment → In QA transition. Auth via pinned `vtex/action-toolbelt`; versions pinned per 0.6 |
| 6.2 | Drift-check script (QA vs production app versions + settings) posted on the deploy job; its snapshots also written to storage (the DR ride-along) |
| 6.3 | Production install behind a GitHub protected environment: QA approval required, scoped secrets, OIDC where supported |
| 6.4 | `@smoke-prod` suite built (read-only money paths, permission matrix, stop-at-payment) and wired post-install; rollback threshold and the canary baseline + ten-minute watch procedure written into the deploy runbook |
| 6.5 | High-risk path: publish → prod workspace → smoke → `vtex workspace abtest` slice → `vtex workspace promote` on green |
| 6.6 | Checkly hourly synthetics on the read-only subset plus API heartbeat checks on order-sync-service and the integration endpoints; bot-protection allowlist, `is_synthetic` analytics property, test-SKU hygiene |
| 6.7 | incident.io live: severity ladder, paging, status page; the one-page incident runbook published |
| 6.8 | StackHawk DAST against the QA workspace per release; Depot runners on the PR-check jobs (under per-ticket deploys, CI latency is the merge rate, so runner speed is structural, not a cost line) |
| 6.9 | Remaining Jira transitions automated (QA approval + prod install → Production validation; the QA sanity-pass click closes to Done); deploy and rollback events wired into Slack |
| 6.10 | PR-time workspace install: on PR open/push, publish the branch build as a CI prerelease and install it into the ticket's workspace; `@smoke` against that URL becomes a required check |
| 6.11 | Deploy runbook finalized: release mechanics, the manual ceremony as the fallback path, the auth caveat (0.6), rollback thresholds, the stop-at-payment residual risk |
| 6.12 | Release-driven comms and docs automation: engineering + stakeholder release notes to Slack and Confluence, Zendesk help-article updates, the per-release docs pass, and the monthly what-shipped roundup against the roadmap (Sections 10 and 14) |

**Exit:** merge to QA-installed with zero Gatekeeper keystrokes; a production deploy is one QA approval click; a forced-red smoke run demonstrably triggers the previous-version install; the per-PR `@smoke` check runs as a required check against a real workspace URL; deploy frequency and blocked-deployment counts improving against the 0.8 baselines. **Owner:** Gatekeeper (deploy), QA (smoke suite).

### Phase 7: The agent ramp (~4-8 weeks to majority, then ongoing)

The payoff, last on purpose. AI involvement rises one notch at a time, gated by evidence, with the PR Score repo tiers as the ready-made risk ladder.

| # | Task |
| --- | --- |
| 7.1 | Notch 1 (already accepted practice): agent-written tests everywhere; the 25%→80% coverage ramp executed as a work queue |
| 7.2 | Notch 2: agent-written implementation on low-score repos (session-listener, add-to-list, usesi-telemarketing, usesi-zendesk, usesi-styleguide, sentry-client-monitor, usesi-shopper) |
| 7.3 | Notch 3: medium-score repos after ≥4 weeks of notch-2 clean gate history (no Sev-1 escapes attributable to agent authorship) |
| 7.4 | Notch 4: high-score repos, with the blocking adversarial tier and cross-vendor test authorship mandatory |
| 7.5 | Promptfoo suites as required checks on everything latent: prompts, skills, the review pipeline itself (review-quality evals); cross-vendor judging |
| 7.6 | VTEX Developer MCP confirmed in every harness (agents pull platform docs and API specs instead of guessing) |
| 7.7 | Investigate-on-alert live (Sentry webhook → Claude Code Action → diagnosed Jira ticket, draft PRs still walking every gate) |
| 7.8 | Investigation infrastructure: one knowledge graph per repo served over a shared MCP; Sourcegraph across the 21 repos; every agent investigation leaves its findings in the ticket |

**Exit:** majority of merged diff agent-authored; gate history clean; the eval gate has blocked at least one real or deliberately planted prompt regression, verified as a true positive (the gate is real). **Owner:** Gatekeeper + AI-enablement owner.

### Parallel tracks

**Track P: Product (PM; start anytime).** Intake pipeline (Zendesk/Sentry classification → labeled Jira queue; buy-vs-build per 0.4); weekly synthesis; evidence packets for prioritization; a north-star map for the storefront (likely order volume or quote-to-order conversion) decomposed into feature-level metrics; PRD hypothesis + success-metric fields and the seven-perspective panel; quarterly outbound research (agent-run competitive analysis with a fixed method, checked into the repo and refreshed on schedule; user interviews with a prepared guide, synthesized into findings linked to backlog candidates); the Teams-transcript notes pass (decisions feed ADRs, action items feed tickets); weekly generated 3P update; 30/60-day feature-results reports; event taxonomy + Amplitude scoped after 0.5.

**Track D: Design (Designer; start anytime).** `docs/DESIGN.md`; Storybook on `usesi-styleguide`; variant-exploration workflow for `needs-design` tickets; UI slop gate + DESIGN.md conformance check in the review tier; Chromatic after Storybook lands.

**Track M: Maintenance and a11y (QA; starts after phase 3 gives it the review tier).** Cadence crons filing tickets through triage (nightly regression + dependency alerts; monthly flag sweep, docs-vs-code audit, security sweep, slop cleanup; quarterly harness cleanup); eslint-plugin-jsx-a11y + axe-in-E2E + Lighthouse budgets + Pa11y rule detail; the manual screen-reader calendar; the VPAT audit; the accessiBe exit sequenced after the audit passes.

**Track H: People (AI-enablement owner; starts with phase 2).** Paired ramp-up on agent direction; the senior-review reset; scheduled hands-on-keyboard time; accept-rate adoption metrics from phase 5 telemetry (never a leaderboard); onboarding target: a new hire ships a real ticket in week one via canon + harness parity.

**Track R: Resilience (Gatekeeper + IT; the DR items block task 6.3, the production install).** Org config as code and backed up; Atlassian scheduled export; VTEX settings snapshots (rides 6.2); stated RTO/RPO; annual restore test; SOC 2 control mapping; PCI scope confirmation; IP indemnification tiers recorded (0.7).

### Risks and honest constraints

1. **VTEX automation is the long pole.** Phase 6 is real engineering with prior art only for the auth and test steps; the CLI auth path is unsupported (pinned, watched). If the pinned path breaks, the fallback is the documented manual ceremony, which the deploy runbook keeps current for exactly this case.
2. **Adoption history.** The org's own docs admit the current flow is "not fully followed 100% of the time." The countermeasure is structural: phases 1-3 make the rules machine-enforced before phase 7 raises the stakes, and Track H exists because tooling without the people track reproduces the old pattern with new tools.
3. **Token spend is the largest new meter.** Budget alerts land in phase 3 (before review volume scales), telemetry in phase 5 (before agent volume scales). Any month the review pipeline's spend surprises anyone, the alerts were set wrong; fix the alerts, not just the spend.
4. **The Score framework must be recalibrated** (3.10) or agent-shaped PRs will distort it.
5. **Post-merge review requires revert discipline.** If the 30-minute revert SLA is not honored in practice, the correct response is moving the adversarial tier back to blocking on more paths, not abandoning the SLA.
6. **Vendor dependence in the merge path.** The degraded mode (3.9) is written before it is needed; model pins plus eval-gated upgrades keep review behavior a measured quantity.

### What "done" looks like

Against the 0.8 baselines: deploys per week up and per-ticket (no batches); blocked deployments at ~zero; merge-to-production lead time in hours; coverage at the ramp target with flake count flat; every PR machine-reviewed with human approvals down to two clicks; agent-authored share of diff a majority with a clean gate history; and the weekly dashboard answering what it all cost, unprompted.
