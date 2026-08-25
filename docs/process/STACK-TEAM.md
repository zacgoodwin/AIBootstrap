# The Team Tool Stack

Four complete tool stacks for a team of two to nine developers running an
AI-enabled workflow, covering the product lifecycle end to end: ideation,
research, specification, design, development, test, deliver, maintain.

Built on the four PROCESS reports: docs/process/PROCESS.md supplies the lifecycle,
docs/process/PROCESS-TEAM.md the eight coordination layers, docs/process/PROCESS-TEAM-SERVER.md
the hosted-tool research and the per-seat versus per-activity pricing lens, and
docs/process/PROCESS-SOLO.md the contrast case. Prices are list prices from secondary
sources as of August 2026; re-check before committing.

Every stage has two halves:

- **On the development machine.** The layer the PROCESS docs already define:
  Claude Code plus skill packs plus local CLIs. It is deliberately close to
  constant across all four stacks, because the harness is where the team's
  actual process lives and swapping it per budget tier would be churn.
- **Hosted (SaaS or on-premise).** Where the stacks genuinely differ.

The four stacks:

| Stack | Optimizes for | Monthly order of magnitude (5 people) |
| --- | --- | --- |
| **A. Least overhead** | Fewest vendors, fewest logins, most free tiers, nothing to babysit | ~$225-260 |
| **B. Best in class** | The strongest tool per stage that per-seat pricing keeps sane for an agent-heavy team | ~$900-1,500 |
| **C. Cost no object** | The strongest tool per stage, full stop | $5,000+ and climbing |
| **D. Cheapest** | Minimum dollars, with the give-ups named per stage | ~$95-110 |

A and D are not the same axis: A minimizes attention and vendors, D minimizes
dollars, and D pays for the difference in enforcement, parity, and someone's
evenings. Every D row below states what it gives up.

The pricing rule from docs/process/PROCESS-TEAM-SERVER.md governs stack B: an
AI-enabled team is few humans with enormous activity per human, so per-seat
tools stay cheap while throughput grows, and per-activity tools (per snapshot,
per trace, per score, per browser-hour) bill you for exactly the thing agents
multiply. Stack B buys per-seat and self-hosts the five free, tiny, metered
things: Promptfoo, OpenGrep, Lighthouse CI server, Kroki, and the OTel
collector. Stack C ignores the rule on purpose and accepts the meters.

---

## The constant: on the development machine

Identical across all four stacks except where noted. This is the layer
docs/process/PROCESS-TEAM.md commits into the repo so five laptops behave as one.

| Layer | Tools | Lifecycle stages touched |
| --- | --- | --- |
| The agent | Claude Code (Team Standard $25/seat or Premium ~$100-125/seat; Premium for the heavy agent users, Standard for the rest) | All eight |
| Editor around it | VS Code free, or [Zed](https://zed.dev/compare/cursor) (free; Pro $10) for native speed, real-time multiplayer editing, and running Claude Code as an external agent via ACP; Cursor Pro $20 if the team prefers an AI-first fork | Development |
| Skill packs, committed | gstack + mattpocock as the spine; PM OS subset; zcaceres subset; ponytail as a mode; distributed via the private plugin marketplace | All eight |
| The loop CLIs | stax (stacked branches), RoboRev (per-commit review), Kata or the tracker CLI, RTK (already hooked), Graphify | Development, test |
| Env parity | [Devbox](https://briandetering.net/2026/05/28/best-dev-environment-managers-2026/) - Nix reproducibility with a simple config; check in `devbox.json` + `devbox.lock` and a clone works on every laptop | Development |
| API work | [Bruno](https://apiscout.dev/guides/bruno-vs-postman-vs-insomnia-api-clients-2026) - collections as plain files in git, no account, 44k stars and 2-3 releases a month. The Postman restructure of March 2026 made Free single-user only | Development, test |
| Database | DBeaver CE (many databases, free) or TablePlus ($stripe-ish one-time) for the native-feel single-database case | Development |
| Local safety | Pre-commit via `/setup-pre-commit`, git guardrails hooks, `/guard` and `/freeze` | Development, deliver |
| Diagrams | Excalidraw (free, local files) for sketches; Mermaid/Structurizr DSL in the repo, rendered by Kroki | Ideation, specification |

Stack differences: A skips Graphify and runs fewer packs (`/agent-sort` DAILY
only). C adds Cursor or Zed Pro seats for everyone and Claude Code Premium
seats for everyone.

---

## Ideation

What the stage needs (PROCESS.md stages 2, 5): a surface to think on together,
and an interrogation of the idea before it becomes a fact. The interrogation is
on-machine (`/office-hours`, `/grill-with-docs`, `/prd-review-panel`); the
surface is hosted.

**On the machine:** the gstack/mattpocock interview skills; Excalidraw for
sketching; `/design-shotgun` for visual idea comparison.

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | [Excalidraw+ free tier, or FigJam free](https://storyflow.so/blog/best-excalidraw-alternatives-2026) (3 files) | Excalidraw is free with no board cap and can be self-hosted at $0. FigJam free covers the occasional workshop. Zero new vendors. |
| B | **FigJam via the Figma seat** ($3-5/editor, [bundled into every paid Figma seat since March 2025](https://codepic.cc/blog/miro-vs-figjam)) | The team already buys Figma for Design below; the whiteboard rides along at no marginal vendor. Multi-stage: the Figma subscription covers ideation + design. |
| C | [Miro Business](https://figr.design/blog/miro-pricing-a4e11) ($20/user/mo) | The deepest template and workshop toolkit for cross-functional sessions. Known costs: the free plan's 3-board cap and metered AI credits are why teams leave; at this tier you pay past both. |
| D | Excalidraw, free or self-hosted; FigJam free | $0. Gives up: workshop templates and unlimited boards. This stage was nearly free already, so the give-up is small. |

## Research

What the stage needs (PROCESS.md stage 3): user evidence, competitor evidence,
and primary-source reading that lands in the repo - plus somewhere for raw
research to live once more than one person collects it.

**On the machine:** `/research` (findings as markdown in the repo),
`/competitive-platform-analysis` chain, `/user-research-synthesis`,
docs-mcp-server or GitMCP for grounded API docs.

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | [Tally](https://tally.so/help/compare) free + PostHog surveys | Tally's free plan is genuinely unlimited (forms, responses, logic, file uploads, Stripe payments) where Typeform free caps at 10 responses/month. PostHog surveys ride the analytics subscription. Synthesis stays on-machine via `/user-research-synthesis`. |
| B | Tally Pro ($29/mo flat) + PostHog surveys + interviews synthesized on-machine | Same tools, paid tier removes the badge. The AI synthesis that Dovetail charges per-editor for is what the PM OS skills already do locally. Flat pricing beats per-seat here. |
| C | [Dovetail](https://cleverx.com/blog/best-dovetail-alternatives-in-2026-10-tools-for-research-synthesis/) (~$29-49/editor/mo, ~$11k+/yr for a 20-person org) + [Maze](https://www.koji.so/blog/maze-alternatives-2026) (from $25/mo) + an AI-moderated panel service (User Intuition class, ~$25/interview, 24-hour turnaround) | The full research org: repository, prototype testing, and AI-moderated interviews that compress 4-6 week qualitative cycles to under 24 hours. |
| D | Tally free + PostHog free surveys | $0. Gives up: only the Tally badge at this scale. Synthesis was always on-machine. |

## Specification

What the stage needs (PROCESS.md stages 4-5, 9): a PRD reviewed from every
seat, an executable spec, and tickets with acceptance criteria an agent can
execute. The review panel and the spec pipeline are entirely on-machine; hosted
is where the artifacts live and the queue that feeds the loop.

**On the machine:** `/prd-draft` → `/prd-review-panel` → `/spec` →
`/to-tickets` → `/intent-driven-development`. The whole pipeline.

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | GitHub Issues + Projects (free) + specs as markdown in the repo | Zero vendors. Agents drive it via `gh`. The label-as-contract queue pattern from PROCESS-TEAM works on labels alone. |
| B | **[Linear](https://costbench.com/software/developer-tools/linear/)** ($10 Basic / $16 Business per user/mo) + [Notion Business](https://toolradar.com/tools/notion/pricing) ($20/user/mo, AI now bundled) | Linear is per-seat, agent-drivable, and the tracker `/to-tickets` publishes to. Notion Business holds PRDs, strategy, and research with AI search across all of it. Multi-stage: Notion covers specification + research notes + maintain-stage docs. On-prem lane: Plane (native MCP server) + Docmost. |
| C | Linear Business + Notion Enterprise + [Port or OpsLevel](https://encore.dev/articles/backstage-alternatives) | Adds the service catalog so specs, owners, and services cross-link. Buy the hosted catalog, not Backstage: Backstage is a framework you build and maintain. |
| D | GitHub Free Issues + Projects; specs and wiki as repo markdown | $0. Gives up: Linear's speed and Notion's AI search. Markdown in git is the fallback that always works, and agents read it natively. |

## Design

What the stage needs (PROCESS.md stage 6): a design system that becomes
docs/DESIGN.md and governs everything downstream, plus the files themselves,
plus fast disposable prototypes.

**On the machine:** `/design-consultation` (produces DESIGN.md),
`/design-shotgun`, `/taste-skill` or `/stitch-skill` (anti-generic standards),
`/anti-ui-slop` family, the Figma MCP server, installed from the claude-plugins-official marketplace (docs/SETUP.md step 5).

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | [Figma free Starter](https://www.usecarly.com/blog/figma-pricing/) + Excalidraw | Free Figma covers a small team's file needs early; the design *system* lives in DESIGN.md and Storybook (free, in-repo), not in the tool. |
| B | **Figma Professional** ($16 full / $12 dev / $3 collab seat, annual) + Storybook in-repo + [v0](https://uibakery.io/blog/bolt-vs-lovable-vs-v0) (~$25/mo, one shared account) for throwaway prototype generation | Dev seats at $12 keep engineer access cheap; FigJam rides along (see Ideation). v0 generates the cleanest production-ready React/shadcn UI for the `/prototype`-style question that needs a real page. On-prem lane: [Penpot](https://hedrick.io/post/penpot-vs-figma) - self-hostable, air-gappable, SVG-native, free dev handoff with no paid seat. |
| C | [Figma Organization](https://www.banani.co/blog/figma-pricing-and-credits) ($55 full / $25 dev, annual only; ~$13,200/yr for 20 full seats) + Miro Business + v0 Team + Lovable (~$25/mo) | Org tier buys shared libraries across teams and centralized admin. Lovable adds full-app prototyping with backend included. |
| D | Figma Starter (3 files) + Excalidraw; Penpot on the shared box when the file cap binds | $0. Gives up: unlimited files, dev seats, and v0 prototyping; prototypes come from the harness (`/prototype`, `/taste-skill`) instead, slower but free. |

## Development

What the stage needs (PROCESS.md stages 10, 15; PROCESS-TEAM layers 2-4): the
loop itself, isolation for parallel agents, a forge, CI that is fast enough not
to be routed around, and server-side agent execution.

**On the machine:** the whole loop - worktrees, stax, `/tdd`, `/implement`,
`/roborev-refine`, `/stack-ship`, ponytail as a mode, `/investigate` and
`/orch-fix-defect` for bugs. This is the layer that does not change per stack.

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | **[GitHub Team](https://www.getpricepulse.com/blog/github-pricing-2026-complete-guide.html)** ($4/user/mo): repo + Actions + merge queue + Packages + Pages + Codespaces | The widest hosted multi-stage product in the report (Claude Code spans all eight, but it is the harness, not a hosted pick): one $4 seat covers specification (Issues/Projects), development (repo, Codespaces), test (Actions), deliver (merge queue, Packages, Pages), and maintain (Dependabot, security alerts). |
| B | GitHub Team + **[Blacksmith or Namespace runners](https://tenki.cloud/blog/github-actions-runner-showdown-2026)** (~2-3x faster at ~⅓ less than GitHub minutes) + [Depot](https://latchkey.dev/learn/compare-runners/depot-vs-blacksmith) if Docker builds are the bottleneck + Claude Code GitHub Action (`@claude` on issues/PRs, installs the private marketplace into CI) | GitHub began metering self-hosted runner minutes in private repos ($0.002/min, March 2026), so managed runners are now the cost play, not just the speed play. Agents iterate fast; slow CI becomes skipped CI. |
| C | GitHub Enterprise ($21/user/mo) + Copilot Business ($19/seat) as the second assistant + Namespace + Depot + [Coder](https://coder.com/docs/admin/integrations/devcontainers) self-hosted workspaces + Claude Code **self-hosted environments** (Team/Enterprise beta: runners in your network, checkouts and secrets never leave, all connections outbound) + [Sourcegraph/Amp Enterprise](https://sourcegraph.com/pricing?product=codeIntelligence) (~$59/user/mo; platform contracts ~$15k+ small-team) for cross-repo code intelligence | The compliance-grade lane. Note the constraint from PROCESS-TEAM-SERVER: self-hosted environments cannot route inference through Bedrock, Vertex, Foundry, or an LLM gateway. |
| D | 5x individual Claude Pro (~$85/mo total) + GitHub Free org + Neon free or Postgres on the box | The structural give-ups live here. Individual Pro accounts mean no managed settings, no org analytics, no marketplace distribution via org settings: harness parity and telemetry become convention, not policy. GitHub Free means no branch protection on private repos, so the entire gate layer is voluntary. Escape hatches: GitHub Team at $20/mo total restores required checks, or public repos get them free. Pro's usage limits also cap the agents themselves, which is the least visible and largest cost. |

Managed Postgres, all stacks: [Supabase](https://layerbase.com/blog/neon-vs-supabase)
(Pro $25/mo org - database plus auth, storage, realtime, functions; already an
MCP server in this harness) or [Neon](https://designrevision.com/blog/supabase-vs-neon)
when scale-to-zero fits intermittent load (~$15/mo small). Multi-stage:
Supabase covers development + deliver + a slice of maintain (its logs and
advisors are queryable from the harness).

## Test

What the stage needs (PROCESS.md stages 11-14; PROCESS-TEAM layer 4): the gate
that cannot be talked around, real-app QA, accessibility, visual regression,
flaky-test control, and - the repo's own unenforced rule - evals.

**On the machine:** gate tests (`node tools/gate.mjs`), `/qa` and `/qa-only`,
`/test gaps`, `/tdd-workflow`, Playwright locally, `/z-adversarial-review`
inside `/stack-ship`, `/codex review` for the cross-vendor second opinion.

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | GitHub required checks: gate tests + gitleaks + [OpenGrep](https://www.opengrep.dev/) + [GitGuardian](https://www.aikido.dev/blog/top-gitguardian-alternatives) (free under 25 devs) | Four free gates: deterministic tests, secrets twice, SAST. Enforcement without a bill. |
| B | Stack A **plus** self-hosted [Promptfoo](https://qaskills.sh/blog/promptfoo-complete-guide-2026) (evals as a required check - the rule this repo has and cannot currently enforce) + [Lighthouse CI server](https://unlighthouse.dev/learn-lighthouse/lighthouse-ci/server) (a11y + perf budgets per PR) + BackstopJS for visual regression + [Trunk Flaky Tests](https://trunk.io/flaky-tests) (hosted; auto-quarantine, any runner) + [Qodana](https://dev.to/rahulxsingh/deepsource-vs-qodana-code-quality-platforms-compared-2026-152a) (~$6/contributor) or [Codacy](https://dev.to/rahulxsingh/codacy-vs-sonarqube-code-quality-platforms-compared-2026-35d2) (~$15/user) for the managed quality dashboard | The hybrid rule in action: visual regression and evals are per-activity meters (Chromatic bills per snapshot, Braintrust per score), so they self-host; the quality dashboard is per-seat, so it is bought. |
| C | Stack B, swapping BackstopJS for [Chromatic](https://argos-ci.com/blog/percy-vs-chromatic-vs-argos) ($179/mo for 35k snapshots, $399 for 85k, $0.008 over) and Promptfoo's dashboard for [Braintrust](https://www.morphllm.com/comparisons/braintrust-vs-langsmith) ($249 Pro incl. 50k scores) + [Browserbase](https://apiscout.dev/guides/browserbase-vs-steel-vs-hyperbrowser-browser-infrastructure-2026) ($99 Startup) so `/qa`, `/canary`, `/benchmark` run in CI + **[QA Wolf](https://bug0.com/knowledge-base/qa-wolf-pricing)** (~$8k/mo floor for 200 tests, contracts $60k-250k/yr; 80% E2E coverage in ~4 months) as the outsourced QA department | Model the Chromatic and Braintrust bills at 5x current PR volume first; that is the meter agents multiply. QA Wolf is the "we do not want to own E2E at all" move and is priced like the headcount it replaces. |
| D | The free gate set (gate tests, gitleaks, OpenGrep, Promptfoo, Lighthouse assertions) inside the 2,000 free Actions minutes | $0, but only enforced if repos are public or GitHub Team is bought (see Development). Gives up: managed runners (CI speed), the flaky-test service, visual regression, and the cloud browser; QA stays on laptops. |
| Any | SonarQube: only if [AI Code Assurance](https://docs.sonarsource.com/sonarqube-server/2026.1/quality-standards-administration/ai-code-assurance/overview) specifically is the requirement - the free Community Build [gates only main](https://costbench.com/software/developer-tools/sonarqube/free-plan/), and the PR gate is Developer Edition (~$2,500/yr at 100K LOC) | The honest SonarQube verdict from PROCESS-TEAM-SERVER. |

## Deliver

What the stage needs (PROCESS.md stages 16-18): deploy with previews, a
reversible rollout, flags, secrets, and the launch itself.

**On the machine:** `/setup-deploy` once, `/land-and-deploy`, `/ship`,
`/canary --baseline` before and `/canary` after, `/launch-checklist`,
`/brand-voice` and the marketing chain.

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | [Railway](https://www.birjob.com/blog/paas-comparison-railway-render-fly-vercel-2026) (~$10-20/mo for web + worker + Postgres) or [Render](https://devtoolpicks.com/blog/railway-vs-render-vs-fly-io-solo-developers-2026) (Starter $7 + $25/mo flat workspace fee for PR previews with database copies) + GitHub Packages + Doppler or Infisical Cloud free tier for secrets + [Statsig](https://www.growthbook.io/insights/growthbook-vs-launchdarkly-vs-statsig) free (1M events) or GrowthBook Cloud free (3 users, unlimited flags) | Render's flat-fee PR previews are the sleeper: they give `/qa` and DAST a real URL per PR, which upgrades the whole Test stage. |
| B | Vercel Pro or Render + previews + **[GrowthBook Cloud](https://www.growthbook.io/insights/launchdarkly-pricing)** ($40/seat Pro) or Statsig + Infisical Cloud + [Postiz](https://teqvolt.com/open-source/postiz-29-6k-star-open-source-social-scheduler-buffer-alternative) (from $29 cloud) and [Listmonk](https://listmonk.app/) (self-host, single binary) for launch marketing | Flags per-seat, previews flat-fee, launch tooling owned. PostHog already covers flags and experiments in this stack; buy GrowthBook only for its statistics engine or per-flag governance. Watch Vercel's usage meters under bot traffic - a documented failure mode. On-prem lane: [Coolify](https://introserv.com/blog/dokploy-vs-coolify-complete-comparison-of-the-best-self-hosted-paas-platforms-for-vps-and-dedicated-servers-2026/) with native per-branch previews, or Argo CD + [Argo Rollouts](https://oneuptime.com/blog/post/2026-03-13-flagger-vs-argo-rollouts-comparison/view) on Kubernetes for metric-driven auto-rollback. |
| C | Vercel Enterprise or Kubernetes + Argo CD + Rollouts + **[LaunchDarkly](https://www.growthbook.io/insights/launchdarkly-pricing)** (~$25k/yr entry; $100-150k at 50k MAU - governance pricing) + [Harbor](https://oneuptime.com/blog/post/2026-02-08-how-to-run-harbor-container-registry-with-vulnerability-scanning/view) or Artifactory + OpenBao or Vault + a merge platform ([Graphite or Aviator](https://www.aviator.co/aviator-vs-graphite) - stack-aware queues, the server-side sibling of stax) | The enterprise release train: kill switches with audit trails, signed images, queue-managed merges at 1,000+ PRs/day. |
| D | One Hetzner box + Coolify (~EUR 10/mo): deploys, per-branch previews, Postgres backups + GrowthBook self-hosted + Cloudflare free CDN and Tunnel | Gives up: a PaaS SLA and vendor support; the box needs a named owner, which is exactly the attention stack A refuses to spend. Vercel Hobby is not an option for a commercial team product. |

## Maintain

What the stage needs (PROCESS.md stages 17, 19-24): observability, errors,
uptime, support intake that feeds the backlog, docs that do not rot, security
on a cadence, and the retro loop.

**On the machine:** `/health` weekly, `/cso` on cadence, `/clean-ai-slop` per
branch, `/ponytail-audit` and `/quality-docs-update` monthly, `/retro`,
`/learn`, `/loose-ends` per session, `/context-budget` - now fed by real
telemetry.

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | **[Sentry Team](https://gaxonline.com/vs/sentry-vs-datadog/)** ($26/mo, spike protection caps surprise bills) + [Grafana Cloud free tier](https://devsecops.ae/observability-platforms-2026/) receiving Claude Code's own OTel telemetry + [Uptime Kuma](https://betterstack.com/community/comparisons/uptime-kuma-alternative/) self-hosted on separate infra + PostHog Cloud free (analytics + replay + surveys) + support via a shared inbox | Sentry pays for itself in week one for a small team. The Claude Code telemetry pipe is the single highest-value free item in PROCESS-TEAM-SERVER: per-skill cost attribution for one env var. |
| B | Sentry Team + Grafana Cloud paid or [Better Stack](https://devsecops.ae/observability-platforms-2026/) (EU residency, €0.10/GB logs, bundles uptime + status page + on-call - a three-stage product for the maintain column) + **PostHog Cloud** (the six-category product: analytics, replay, flags, experiments, surveys, errors) + [Chatwoot](https://selfhosting.sh/replace/zendesk/) (free self-host CE, or cloud from $19/agent) wired into Linear + self-hosted [Renovate](https://blog.gitguardian.com/renovate-dependabot-the-new-malware-delivery-system/) + [Dependency-Track](https://engineering.backbase.com/2026/04/14/dependency-track/) for the SBOM loop | Better Stack replacing three single-purpose tools is the least-vendors play inside the best-in-class stack. Chatwoot-into-tracker is the loop PROCESS-TEAM lacks a layer for: support as product input. |
| C | [Datadog](https://tech-insider.org/grafana-vs-datadog-2026/) (full platform; expect 10x Grafana Cloud) + [incident.io](https://incident.io/blog/incident-management-pricing-comparison-2026) ($45/user/mo Pro, all-in with on-call and status pages - cleaner than PagerDuty's $21-41 base plus $699/mo AIOps add-on; note Opsgenie shuts down April 2027 and Grafana OnCall OSS is archived) + [Amplitude](https://mcgaw.io/blog/mixpanel-vs-amplitude/) (volume-based since July 2026; behavioral cohorts and predictive analytics) + Zendesk or Intercom + [Aikido](https://weavai.app/blog/en/2026/05/01/2026-aikido-security-review-is-all-in-one-appsec-worth-300/) (~$300/mo flat, SAST + SCA + secrets + cloud + runtime in one bill) | One observability throat to choke, an incident platform that is a product rather than a pager, and consolidated AppSec. |
| D | Sentry free (5k errors, one member account) + PostHog free + UptimeRobot free + OTel into Grafana Cloud free | Gives up: seats (alerts route to one person), retention windows, on-call tooling, and enforced telemetry; without managed settings, cost visibility is voluntary per laptop. |

---

## Multi-stage products worth buying once

The span callout the stacks are built around. If a product below is in
your stack, do not buy a single-stage competitor for a stage it already covers.

| Product | Covers | In stacks |
| --- | --- | --- |
| GitHub (one $4 Team seat; $21 Enterprise in C) | Specification, development, test, deliver, maintain | A, B, C |
| Claude Code + skill packs | All eight stages, on the machine | A, B, C |
| PostHog | Research (surveys), test (feature-flagged rollout checks), deliver (flags, experiments), maintain (analytics, replay, errors) | A (free), B (paid) |
| Figma subscription | Ideation (FigJam), design, specification (design specs) | B, C |
| Notion Business | Research notes, specification, maintain (docs), AI search across all three | B, C |
| Better Stack | Maintain: uptime + status page + on-call + logs | B |
| Supabase | Development, deliver, maintain (logs/advisors via MCP) | A, B |
| Better-known single-purpose tools (Chromatic, Braintrust, QA Wolf, LaunchDarkly, Dovetail) | One stage each, deeply | C only, by design |
| Sentry | Test (release health), deliver, maintain | A, B, D (C uses Datadog) |
| Coolify (on-prem lane) | Development (previews), deliver, maintain (one box runs the self-hosted set) | B on-prem, D |

---

## The four stacks, rolled up

Approximate monthly, five people, list prices, annual billing where cheaper.

### Stack A: least overhead (~$225-260/mo)

GitHub Team $20 · Claude Code Team Standard $125 · Sentry $26 · Railway ~$20 ·
Supabase Pro $25 · everything else free tiers (Figma Starter, FigJam, Tally,
PostHog, GitGuardian, Statsig, Grafana Cloud, GitHub Projects) · one small VPS
for Uptime Kuma ~$7. Six vendors with bills. The trade: free tiers have caps,
and the day one is hit is the day you revisit.

### Stack B: best in class (~$900-1,500/mo)

Stack A plus: Claude Code Premium seats for the two heaviest agent users
(+$150-200 net of the Standard seats they replace) · Linear $50-80 · Notion Business $100 · Figma Pro ~$60 mixed
seats · Blacksmith runners ~$50-150 usage · Qodana $30 · Trunk Flaky Tests ·
GrowthBook Pro $200 · Better Stack ~$50-100 · PostHog paid usage · Chatwoot
CE free · v0 $25 · Tally Pro $29 - and the five self-hosted freebies
(Promptfoo, OpenGrep, Lighthouse CI, Kroki, OTel collector) on one ~$10 VPS or
inside CI. Roughly a dozen vendors, nearly all per-seat or flat-fee; the metered exceptions to watch are Blacksmith runner minutes and PostHog usage, the two an
agent can run away with.

### Stack C: cost no object ($5,000+/mo before QA Wolf; $13k+ with it)

Stack B upgraded: Claude Enterprise + Copilot Business · GitHub Enterprise ·
Figma Organization · Miro Business · Linear Business + Port · Dovetail + Maze ·
Chromatic · Braintrust · Browserbase · QA Wolf (~$8k/mo floor) · LaunchDarkly
(~$2k+/mo effective) · Datadog · incident.io $225 · Amplitude · Aikido ·
Sourcegraph/Amp · Coder + Claude Code self-hosted environments. The defensible
version of this stack is not "buy everything": it is stack B plus the three
things money genuinely upgrades - QA Wolf (a QA department), Datadog +
incident.io (an ops department), and Dovetail + panel interviews (a research
department). The rest of C is diminishing returns over B.

### Stack D: cheapest (~$95-110/mo)

5x individual Claude Pro ~$85 · one Hetzner + Coolify box ~$11 · everything
else free tiers: GitHub Free org, Issues/Projects, Figma Starter, Tally,
PostHog, Sentry (one account), UptimeRobot, Grafana Cloud, Neon. Two bills and
a box.

What going this route gives up, in order of how much it hurts:

1. **Enforcement.** GitHub Free has no branch protection on private repos, so
   every gate in the Test stage is voluntary. This contradicts the core rule
   of docs/process/PROCESS-TEAM.md ("every gate is a machine"). The first $20 this
   team ever spends should be GitHub Team to buy it back, or go public and
   get it free.
2. **Parity and visibility.** Individual Pro accounts mean no managed
   settings, no org analytics, no marketplace distribution through org
   settings. Harness parity and telemetry become convention, and PROCESS-TEAM
   Layers 6 and 7 run on trust.
3. **Agent capacity.** Pro's usage limits cap the agents themselves - the
   least visible give-up and the one that most directly caps output.
4. **An owner's evenings.** The box replaces every PaaS SLA with a named
   person.

The upgrade ladder out: GitHub Team ($20 total) first, Claude Team seats
(central admin plus managed settings) second, Sentry Team ($26) third, then
Railway ~$20 and Supabase Pro $25. That sequence converts D into A at roughly
$225-260/mo, which is the argument that A, not D, is the real floor for a team
that intends to stay one.

---

## What to do first, whichever stack

1. Wire Claude Code telemetry into whatever observability you picked (one env
   var; per-skill cost attribution).
2. Turn on the free gates as required checks: gate tests, gitleaks, OpenGrep.
3. Publish the skill packs as a private plugin marketplace.
4. Get PR preview URLs (Render flat fee, Vercel, or Coolify) - they upgrade
   Test and Deliver simultaneously.
5. Add Promptfoo as a required check on prompt/skill changes - the eval rule
   this repo already has, finally enforced.

Sources: consolidated in docs/process/PROCESS-TEAM-SERVER.md, plus this report's
inline links for ideation ([Miro/FigJam/Excalidraw](https://codepic.cc/blog/miro-vs-figjam)),
research ([Dovetail alternatives](https://cleverx.com/blog/best-dovetail-alternatives-in-2026-10-tools-for-research-synthesis/),
[Tally vs Typeform](https://tally.so/help/compare)), plans and seats
([Claude Code](https://www.finout.io/blog/claude-code-pricing-2026),
[GitHub](https://www.getpricepulse.com/blog/github-pricing-2026-complete-guide.html),
[Figma](https://www.usecarly.com/blog/figma-pricing/),
[Notion](https://toolradar.com/tools/notion/pricing),
[Linear](https://costbench.com/software/developer-tools/linear/)),
dev machine ([Bruno](https://apiscout.dev/guides/bruno-vs-postman-vs-insomnia-api-clients-2026),
[Devbox](https://briandetering.net/2026/05/28/best-dev-environment-managers-2026/),
[Zed vs Cursor](https://zed.dev/compare/cursor),
[database GUIs](https://mako.ai/guides/tableplus-vs-dbeaver)),
test ([QA Wolf](https://bug0.com/knowledge-base/qa-wolf-pricing),
[visual testing](https://argos-ci.com/blog/percy-vs-chromatic-vs-argos)),
deliver ([PaaS pricing](https://www.birjob.com/blog/paas-comparison-railway-render-fly-vercel-2026),
[Supabase vs Neon](https://layerbase.com/blog/neon-vs-supabase)),
maintain ([incident management](https://incident.io/blog/incident-management-pricing-comparison-2026),
[analytics](https://www.buildmvpfast.com/api-costs/analytics),
[Amp/Sourcegraph](https://sourcegraph.com/pricing?product=codeIntelligence)).
