# Process gap review: what was adopted, what was not

2026-08-25.

## What this was

The six docs in docs/process/ were compared against an external report that
applied the same ideas to a real org migrating off a human-gatekeeper SDLC
(`zgoodwinusesi/AIBootstrap@1041067`,
`docs/plans/2026-08-25-sdlc-vs-greenfield-comparison.md`). That report raised
roughly forty concepts these docs had never had to confront, mostly because
migration questions, degraded-mode questions, and role-change questions do not
come up when you are writing a process from scratch.

Each concept was checked against docs/process/ by grep before being called a
gap. This file records the decisions so the comparison is not run again.

## Adopted

| Concept | Landed in |
| --- | --- |
| Trunk-based development as a route, with flag lifecycle, branch-by-abstraction, revert-first, and merge queue as day-one infrastructure | New: docs/process/PROCESS-TEAM-TRUNK.md, self-contained, combining the team and server docs recast for trunk |
| Deploy cadence as an explicit choice: per ticket on green vs batched trains, with what each requires and costs | docs/process/PROCESS-TEAM.md Layer 8; tooling half in docs/process/PROCESS-TEAM-SERVER.md Deploying; carried into the trunk doc |
| Pre-deploy environment drift check, per deploy rather than monthly | Same three places |
| Four-store knowledge model with the rule that a fact lives in exactly one store | docs/process/PROCESS-TEAM.md Layer 5, docs/process/PROCESS-TEAM-SERVER.md Knowledge Base, trunk doc Layer 5 |
| Accessibility as an explicit per-repo opt-in, in every process route | docs/process/PROCESS.md stage 13 (depth), plus opt-in blocks in docs/process/PROCESS-TEAM.md, docs/process/PROCESS-TEAM-SERVER.md, docs/process/PROCESS-SOLO.md, and the trunk doc |
| The a11y automation ceiling (30-50% of WCAG), the manual screen-reader pass and third-party VPAT it forces, `eslint-plugin-jsx-a11y` at lint time, and overlays as a liability with a sequenced exit | docs/process/PROCESS.md stage 13 |
| Scope tools per task, not per agent | docs/process/PROCESS.md stage 24, docs/process/PROCESS-TEAM.md Layer 4, docs/process/PROCESS-TEAM-SERVER.md Agent Safety, trunk doc Layer 4 |
| Vet and pin MCP servers, because a tool description is text the agent reads | Same four places |

## Considered and deliberately not adopted

Not oversights. Each was read, checked against the docs, and declined.

- **Risk-tiered review routing.** A score deciding which review tier blocks the
  merge, with the expensive blinded pass reserved for high-risk paths and run
  post-merge elsewhere. The docs keep the uniform pipeline: every commit gets
  RoboRev, every shipped branch gets the blinded adversarial review.
- **Cross-vendor independence as a binding rule.** The rule that the blocking
  reviewer's vendor must differ from the author's, plus cross-vendor test
  authorship, cross-vendor eval grading, and vendor-alternating nightly sweeps.
  The docs keep cross-vendor skeptic seats as an available option rather than a
  required pairing.
- **Progressive delivery with traffic control** (split traffic, promote on
  green), **post-install production smoke with a pre-agreed rollback
  threshold**, **one smoke suite serving PR, post-deploy, and synthetics**, and
  **synthetics hygiene** (bot allowlisting, `is_synthetic` analytics exclusion).
- **E2E latency engineering:** tiering E2E by gate, and the Playwright speed
  specifics (sharding, `storageState` via a setup project, artifacts on failure
  only, retries with quarantine).
- **The people track:** paired ramp-up on agent direction, resetting what senior
  review means for agent-authored diffs, deliberate hands-on-keyboard time
  against skill atrophy, a named AI-enablement owner, and the role transition
  for whoever currently owns release ceremony.
- **Vendor and model lifecycle:** a written degraded mode when the review tier
  is unavailable, pinned model versions with evals re-run before an upgrade, and
  per-vendor budget alerts.
- **Governance artifacts:** a written AI usage policy, ADR enforcement as a
  required check on architecture-flagged paths, rulesets with an explicitly
  empty bypass list, and backup scope extended to forge and SaaS configuration.
- **Support and maintenance loops:** investigate-on-alert, release-tag and
  source-map correlation, support-to-error cross-linking for affected-customer
  counts, machine-assembled prioritization evidence packets, and release-keyed
  internal feature marketing.
- **Human review required before any external-content-triggered agent action
  becomes a PR.**
- **Org-specific material:** the Microsoft E5 licence mapping, VTEX platform
  specifics, the 14-criteria PR Score framework, and vendor pricing movements.

## If this comes up again

The trunk route is the one addition with real surface area. If a future reader
wants any of the declined items, the comparison report is the source and each
bullet above names it precisely enough to find. The ones most likely to earn a
second look as the kit grows: risk-tiered review routing (once review token
spend becomes the largest meter) and degraded mode (the first time a vendor
outage blocks merges).
