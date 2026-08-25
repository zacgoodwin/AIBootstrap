# The Solo Builder's Tool Stack

Five complete tool stacks for one person shipping a product with agents doing
most of the typing, covering the lifecycle end to end: ideation, research,
specification, design, development, test, deliver, maintain.

Built on the four PROCESS reports: docs/process/PROCESS-SOLO.md supplies the
constraints (you are every role, attention is scarcer than tokens, nothing
forces you to write anything down, scope creep has no predator, QA goes first),
docs/process/PROCESS.md the lifecycle, docs/process/PROCESS-TEAM.md what
changes at the first hire, and docs/process/PROCESS-TEAM-SERVER.md the
hosted-tool research and pricing. Prices are list prices from secondary sources as of
August 2026.

Two assumptions shape everything below:

1. **You can self-host.** So one cheap VPS running a personal services box is a
   first-class option, not a fallback - and it is where the per-activity meters
   (analytics events, uptime checks, search queries) go to die.
2. **Attention is the budget that matters.** A $10 subscription that saves an
   evening beats a free tool that costs one. Self-hosting is allowed to lose to
   SaaS on those grounds, and does, several times below.

Every stage has two halves: **on the development machine** (Claude Code, skill
packs, local CLIs - deliberately constant across stacks) and **hosted** (SaaS
or your own box - where the stacks differ).

The five stacks:

| Stack | Optimizes for | Monthly order of magnitude |
| --- | --- | --- |
| **A. Least overhead** | Free tiers, local files, one bill you already pay | ~$30-60 |
| **B. Best in class** | The strongest tool per stage that one person can run without it running them | ~$300-380 |
| **C. Cost no object** | Buying back every hour money can buy back | ~$700-1,000 |
| **D. Cheapest** | The minimum dollar figure that still ships, with every give-up named | ~$17-25 |
| **E. Self-host homelab** | Everything on the machine or on hardware at home; SaaS only where self-hosting genuinely cannot do the job | ~$210-230 + one-time hardware |

The biggest line item in every stack past A is not a tool, it is the agent:
Claude Max 20x at $200/month is the single purchase that most changes what one
person can ship. Stacks B, C, and E are all built around it - E included,
because Claude-class inference is the first entry on the list of things a
homelab cannot replace. Stack D is the exception: it runs on Claude Pro, and
its per-stage rows say what that and every other cut costs.

---

## The constant: on the development machine

| Layer | Tools | Stages touched |
| --- | --- | --- |
| The agent | [Claude Code](https://www.finout.io/blog/claude-code-pricing-2026): Pro $17-20 (stacks A, D), Max 5x $100 or **Max 20x $200** (B, C, E) | All eight |
| Editor | VS Code free, or [Zed](https://zed.dev/compare/cursor) free - native speed and Claude Code as an external agent via ACP; Cursor Pro $20 in stack C as a second surface | Development |
| Skill packs | The PROCESS-SOLO minimum install: gstack + mattpocock spine, PM OS subset, zcaceres subset, ponytail as a mode, RoboRev + stax + zg-skills as the gate | All eight |
| Notes and thinking | [Obsidian](https://nexasphere.io/blog/best-note-taking-apps-developers-2026) - local-first markdown, 1,500+ plugins, the most future-proof personal knowledge base; your vault is also agent-readable context | Ideation, research, specification |
| Sketching | Excalidraw - free, local files, no board cap | Ideation, design |
| Tracker | Kata - local-first, CLI and TUI, no account, built for agent loops; the tracker `/to-tickets` writes to | Specification, development |
| Env reproducibility | [Devbox](https://briandetering.net/2026/05/28/best-dev-environment-managers-2026/) - one `devbox.json` and a reimaged laptop recovers in minutes; for one person this is disaster recovery, not team parity | Development |
| API work | [Bruno](https://apiscout.dev/guides/bruno-vs-postman-vs-insomnia-api-clients-2026) - collections as files in git, no account | Development, test |
| Database | [Beekeeper Studio CE](https://futurepicker.com/en/dbeaver-alternatives-database-tools-2026-2/) (MIT, clean) or DBeaver CE for many-database work | Development |
| Safety | `/setup-pre-commit`, git guardrails, `/guard`, `/freeze`, the zcaceres safety hooks - the machine gates PROCESS-SOLO demands because nobody else will catch you | Development, deliver |
| Memory across sessions | `/context-save`, `/loose-ends`, `/learn` - the defense against solo amnesia | All eight |

## The solo self-host box (stacks B and C)

The "assume you can self-host" dividend, concentrated in one place: a
[Hetzner](https://selfhostable.dev/blog/best-vps-providers-for-self-hosting-2026/)
CX23-class VPS (~€10/mo, 2 vCPU / 4GB) running
[Coolify](https://temps.sh/blog/coolify-review-2026) (free self-hosted), which
deploys and supervises the whole set with per-app backups:

| Service | Replaces | Stage |
| --- | --- | --- |
| [Umami](https://openpanel.dev/articles/self-hosted-web-analytics) (~512MB) | Metered web analytics | Research, maintain |
| [Uptime Kuma](https://betterstack.com/community/comparisons/uptime-kuma-alternative/) | Uptime SaaS + status page | Maintain |
| [Listmonk](https://listmonk.app/) (single binary) | Newsletter SaaS | Deliver |
| SearXNG | Per-query search APIs for agent research | Research |
| GlitchTip (optional) | Sentry, if its free tier ever binds | Maintain |
| Kroki | Diagram rendering for docs and PRs | Specification |

One box, one login, roughly €10/month, and every service on it is a
per-activity meter you now do not pay. This box is also a fine second target
for `/land-and-deploy` side projects. Rule from PROCESS-TEAM-SERVER still
applies: the monitor (Uptime Kuma) must watch production from *different*
infrastructure than production - which it does, if production is on a PaaS.

---

## Ideation

What the stage needs (PROCESS-SOLO stage 1): the interrogation you will not
give yourself. Almost entirely on-machine.

**On the machine:** `/office-hours` or `/grill-with-docs` (pick one),
`/wait-what`, ponytail as the standing "does this need to exist" voice,
Obsidian for the thinking, Excalidraw for the sketch.

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | Nothing | A whiteboard SaaS for one person is a subscription for meetings you do not have. |
| B | [Excalidraw+](https://storyflow.so/blog/best-excalidraw-alternatives-2026) free, or FigJam free (3 files) | Only for sharing a sketch with an outside collaborator; local files otherwise. |
| C | FigJam via the Figma seat (see Design) + [v0](https://uibakery.io/blog/bolt-vs-lovable-vs-v0) $25/mo | v0 as an ideation tool: the fastest way from "what if the page worked like this" to a rendered answer. Multi-stage: v0 also serves Design. |
| D | Nothing | Identical to A. Already free. |
| E | Nothing hosted; Excalidraw's collaboration server on the homelab if a sketch ever needs a share link | Same verdict as A: this stage lives on the machine. Excalidraw self-hosts in one container when sharing matters. |

## Research

What the stage needs (PROCESS-SOLO stages 2-3): evidence into the repo, users
actually asked, and grounded API docs so a hallucinated API does not cost the
evening.

**On the machine:** `/research` (markdown into the repo),
`/competitive-platform-analysis`, `/user-research-synthesis`, docs-mcp-server
or GitMCP.

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | [Tally free](https://tally.so/help/compare) | Genuinely unlimited forms and responses free, with logic, file uploads, and Stripe payments - where Typeform free caps at 10 responses/month. The entire user-feedback intake for $0. |
| B | Tally free + SearXNG on the box + [PostHog Cloud free](https://www.buildmvpfast.com/api-costs/analytics) surveys | SearXNG removes the per-query bill on agent research. PostHog surveys ride the analytics you already have. Synthesis stays on-machine - the Dovetail-class repository is a team coordination tool; solo, your Obsidian vault plus `/user-research-synthesis` *is* the repository. |
| C | Stack B + an AI-moderated interview service ([User Intuition class](https://cleverx.com/blog/best-dovetail-alternatives-in-2026-10-tools-for-research-synthesis/), ~$25/interview, 24-hour turnaround) + [Maze](https://www.koji.so/blog/maze-alternatives-2026) from $25/mo for prototype tests | The one research capability money genuinely adds solo: other people, recruited, interviewed, and summarized while you build. |
| D | Tally free + GitMCP free | Gives up: the SearXNG and crawl layer; do less agent web research at volume, or eat occasional per-query API pricing when it matters. |
| E | [Formbricks](https://formbricks.com/blog/best-open-source-survey-software) on the box (AGPLv3, unlimited responses self-hosted: link, email, and in-app surveys via a 7KB SDK) + SearXNG + Firecrawl or fastCRW on the box | Formbricks replaces Tally at home; the search and crawl layer already lived there in stack B. Cannot self-host: recruited participants; see the Stack E exceptions list. |

## Specification

What the stage needs (PROCESS-SOLO stage 2, 4): the PRD review panel that
substitutes for the team you do not have, then tickets with acceptance
criteria, because you cannot be both author and only judge.

**On the machine:** `/prd-draft` → `/prd-review-panel` (the single
highest-leverage skill in the catalog for a solo builder) → `/spec` →
`/to-tickets` → `/intent-driven-development`. Kata holds the queue. ADRs via
`/write-adr` for the you of six weeks from now.

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | GitHub Free: repo + Issues if you want the queue visible | Kata is local; GitHub Issues only if the project is public and outsiders file things. Specs are markdown in the repo. |
| B | GitHub Free + [Linear free](https://costbench.com/software/developer-tools/linear/) (free until 250 issues) *if* you want a hosted board | Optional. The honest default stays Kata + repo markdown: a hosted tracker for one person is mostly a nicer TV. |
| C | Linear Basic $10/mo + Notion Plus $10/mo | Bought for polish and mobile access, not necessity. Multi-stage: Notion then also holds research notes and public docs drafts. |
| D | Kata + repo markdown + GitHub Free | Nothing real to give up solo; this stage was already free in stack A. |
| E | Forgejo Issues on the box + Kata local; Docmost on the box only if a wiki earns its keep | The tracker rides the forge that moves home under Development. Specs stay markdown in the repo, same as every stack. |

## Design

What the stage needs (PROCESS-SOLO stage 3): a design system produced once
(docs/DESIGN.md), obeyed everywhere, and prototypes that answer questions
cheaply. The anti-generic pass matters more solo - nothing else stops the app
from looking AI-built.

**On the machine:** `/design-consultation` → DESIGN.md, `/design-shotgun`,
`/taste-skill` or `/stitch-skill`, `/anti-ui-slop` family, `/prototype`,
Storybook in-repo when there are components worth cataloging.

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | [Figma free Starter](https://www.usecarly.com/blog/figma-pricing/) | Free tier covers one person's file needs; the system lives in DESIGN.md, not the tool. The Figma MCP server installs from the claude-plugins-official marketplace (docs/SETUP.md step 5). |
| B | Figma free + [v0](https://uibakery.io/blog/bolt-vs-lovable-vs-v0) $25/mo | v0 generates the cleanest production-ready React/shadcn UI of the AI builders; for a solo builder it is a design department that answers in sixty seconds. [Penpot](https://hedrick.io/post/penpot-vs-figma) self-hosted is the own-your-files lane and fits the box, but only if that ownership matters to you. |
| C | Figma Professional $16 + v0 $25 + [Lovable](https://blog.tooljet.com/lovable-vs-bolt-vs-v0/) ~$25 | Lovable for full-app throwaways with backend and auth included - the fastest "is this product idea real" loop that exists. |
| D | Figma Starter free + Excalidraw | Gives up: v0. Prototypes come from `/prototype` and `/taste-skill`, slower but free. |
| E | [Penpot](https://hedrick.io/post/penpot-vs-figma) on the box + Storybook in-repo | The stack where Penpot is primary, not a lane: self-hosted, SVG-native, design tokens, free dev handoff, air-gappable. Cannot self-host: v0-class AI prototyping; the local substitute is the harness itself with `/taste-skill` and `/prototype`, or keep v0 as a named SaaS exception. |

## Development

What the stage needs (PROCESS-SOLO stages 5, 8): the loop - and the reviewer
you do not employ. The gate is non-negotiable at every tier because it is the
substitute bench.

**On the machine, all stacks:** the whole loop. `/tdd` or `/implement` →
`/roborev-refine` → `/stack-ship` (RoboRev gate → squash PR via stax → blinded
`/z-adversarial-review`). `/investigate` + `/orch-fix-defect` for bugs.
`/codex review` as the free cross-vendor second opinion. Worktrees only when
actually running two sessions.

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | **GitHub Free**: private repos, 2,000 Actions minutes, Dependabot, secret scanning on public repos | The multi-stage backbone at $0. 2,000 minutes covers a solo project's CI comfortably if the gate stays fast - docs/rules/TESTING.md requires under two seconds. |
| B | GitHub Free or Pro $4 + [Supabase](https://layerbase.com/blog/neon-vs-supabase) free → Pro $25 (database + auth + storage + realtime + functions, MCP server already in this harness) or [Neon](https://designrevision.com/blog/supabase-vs-neon) free (scale-to-zero, ~100 free projects - the side-project database) | Supabase when the product uses the platform, Neon when databases sit idle. Multi-stage: Supabase spans development + deliver + maintain (logs and advisors queryable from the harness). |
| C | GitHub Pro + Supabase Pro + [Blacksmith or Depot](https://tenki.cloud/blog/github-actions-runner-showdown-2026) runners (~$20-50 usage) + [Browserbase Developer](https://apiscout.dev/guides/browserbase-vs-steel-vs-hyperbrowser-browser-infrastructure-2026) $20 + [Amp](https://sourcegraph.com/pricing?product=codeIntelligence) or Copilot Pro $10 as a second agent | Faster CI, a cloud browser so `/qa` and `/canary` run in CI instead of on your laptop, and a second-vendor agent for the diversity `/z-adversarial-review` skeptic seats want. |
| D | Claude Pro $17 + GitHub Free + [Neon free](https://designrevision.com/blog/supabase-vs-neon) (scale-to-zero, ~100 free projects; Supabase free pauses after 7 idle days) | The real cost of the whole stack sits here: Pro's usage limits cap the agent, and the agent is the staff. Also gives up branch protection on private repos (a paid GitHub feature): go public, pay GitHub Pro $4, or lean on pre-commit alone and accept that it is skippable. |
| E | [Forgejo](https://www.techverdict.io/articles/self-hosted-git-2026) on the box: repo + Actions-compatible runners + native container registry, a single binary under 100MB idling at 40-80MB RAM + self-hosted Supabase (its Docker Compose stack) or plain Postgres via Coolify | The whole forge at home, with CI minutes that cost electricity. GitHub Free stays as an optional public mirror for open-source visibility; that network effect does not self-host. |

## Test

What the stage needs (PROCESS-SOLO stages 6-7): proof it runs, because "you
wrote it, so you believe it works" is the failure mode. QA is the first thing
solo builders cut and the last thing this stack will let you cut.

**On the machine:** gate tests, `/qa` driving the real app, `/run`,
`/test gaps` before calling anything done, Playwright locally,
`/clean-ai-slop` per branch. The blinded review inside `/stack-ship`.

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | GitHub required checks: gate tests + gitleaks + [OpenGrep](https://www.opengrep.dev/) | Three free machine gates. Solo, the required check matters *more* than on a team: it is the only reviewer who never gets tired of you. |
| B | Stack A + [Promptfoo](https://qaskills.sh/blog/promptfoo-complete-guide-2026) in CI (evals as a required check - the repo's own rule, enforced) + [Lighthouse CI](https://unlighthouse.dev/learn-lighthouse/lighthouse-ci/server) assertions in CI (a11y + perf budgets; the server can live on the box or just assert in-workflow) + BackstopJS for visual regression when there is UI worth pinning | All free, all in CI, no meters. This is the full machine substitute bench. |
| C | Stack B + [Chromatic free tier → Starter](https://argos-ci.com/blog/percy-vs-chromatic-vs-argos) (5k snapshots free; $179 for 35k) + [CodeRabbit](https://wetheflywheel.com/en/guides/best-ai-code-review-tools-2026/) or Greptile (~$12-30/mo solo) as a hosted PR reviewer on top of RoboRev + [Langfuse Cloud](https://www.morphllm.com/comparisons/braintrust-vs-langsmith) $29 for eval history | The hosted reviewer reviews PRs you open from anywhere, including the phone. Watch Chromatic's snapshot meter - agents multiply it. |
| D | The free gate set inside 2,000 free Actions minutes; Playwright local | Gives up: the cloud browser, visual regression, and eval history dashboards; QA is laptop-bound, and enforcement is soft on a private repo (see Development). |
| E | Stack B's free gate set on Forgejo runners + [Browserless or Steel](https://sliplane.io/blog/5-awesome-browserless-alternatives) on the box (Playwright-compatible WebSocket, so scripts just change a connection string) + ZAP against Coolify preview deployments + Langfuse self-hosted for eval history | The homelab's strongest stage: every gate, the browser, DAST, and eval history all self-host well, and every one of them is a meter somewhere else. |

## Deliver

What the stage needs (PROCESS-SOLO stage 9-10): deploy, watch it for ten
minutes, and tell someone it exists - solo products die unlaunched more often
than broken.

**On the machine:** `/setup-deploy` once, `/land-and-deploy`,
`/canary --baseline` and `/canary`, `/benchmark`, `/launch-checklist
--template small`, `/brand-voice` + `/landing-copy` + `/copywriting`.

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | [Railway Hobby](https://devtoolpicks.com/blog/railway-vs-render-vs-fly-io-solo-developers-2026) ($5 incl. $5 usage; realistically $6-13/mo) or Vercel Hobby (free, but a bot spike can blow past the 100k invocation cap - a documented failure mode) | Railway wins solo on price and predictability. Avoid Fly.io's trial-only entry unless global edge is the product. |
| B | Railway (~$10-20) or Render Starter $7 + GrowthBook Cloud free (3 users, unlimited flags) + Listmonk on the box + [Postiz](https://teqvolt.com/open-source/postiz-29-6k-star-open-source-social-scheduler-buffer-alternative) self-hosted (AGPL, 30+ platforms) if a publishing cadence is real | Flags free, newsletter owned, social scheduling owned. [Coolify on the box](https://ceaksan.com/en/hetzner-coolify-self-hosting-reality) is also a fine primary deploy target - real projects report ~$17/mo total versus $64-100 managed. |
| C | Vercel Pro $20 + Railway + GrowthBook + Buffer or Postiz Cloud $29 + a domain-and-email polish pass | Paying for the deploy platform's polish and preview URLs rather than operating them. |
| D | Cloudflare Pages and Workers free + Neon free; a *.pages.dev subdomain until a ~$10/yr domain feels earned | Gives up: a real backend PaaS. Long-running servers do not fit the free edge, so the architecture bends to the free tier, which is a genuine design tax. Vercel Hobby is non-commercial. No SMTP budget means no newsletter; skip it or use a free-tier sender. |
| E | Coolify on the box: deploys, per-branch previews, managed Postgres backups + GrowthBook self-hosted (MIT) + Listmonk + Postiz self-hosted; ingress via Cloudflare Tunnel (free) or [Pangolin](https://www.serverspan.com/en/blog/pangolin-on-a-vps-replace-cloudflare-tunnels-and-tailscale-with-one-self-hosted-tool) on a ~$5 VPS | The two places delivery genuinely fights the homelab are public ingress and outbound email; both are on the exceptions list below with options. Production with a real SLA is the third; the hybrid answer is serving the app from the edge VPS while the homelab runs everything else. |

## Maintain

What the stage needs (PROCESS-SOLO stages 11-12): you are the on-call
rotation, so the tools must watch while you sleep - and the monthly hour of
audits must stay one hour.

**On the machine:** `/loose-ends` and `/context-save` per session, `/health`
weekly, `/ponytail-audit` + `/cso --diff` + `/quality-docs-update` +
`/ponytail-debt` + `/context-budget` monthly, `/schedule` so the cadence does
not depend on memory.

| Stack | Hosted pick | Why |
| --- | --- | --- |
| A | [Sentry free](https://gaxonline.com/vs/sentry-vs-datadog/) (~5k errors/mo) + [PostHog Cloud free](https://www.buildmvpfast.com/api-costs/analytics) (1M events, 5k replays) + UptimeRobot free or Uptime Kuma if any box exists | Errors, analytics, replay, and uptime for $0. For one person this tier honestly covers a long way. |
| B | Sentry Team $26 + PostHog Cloud free tier + the box (Umami, Uptime Kuma, GlitchTip in reserve) + Claude Code OTel telemetry → [Grafana Cloud free](https://devsecops.ae/observability-platforms-2026/) | The telemetry pipe gives `/context-budget` real numbers: which skills cost what, which are never invoked. Spend follows evidence, monthly, in the hour already budgeted. |
| C | Sentry Team + [Better Stack](https://devsecops.ae/observability-platforms-2026/) (~$25-50; uptime + status page + on-call + logs in one bill - the multi-stage maintain product) + PostHog paid + [Aikido free tier → ~$300/mo](https://weavai.app/blog/en/2026/05/01/2026-aikido-security-review-is-all-in-one-appsec-worth-300/) consolidating SAST + SCA + secrets when the product handles user data | The "I am asleep and it still pages me" tier. incident.io-class platforms stay team-priced; Better Stack is the solo-shaped version. |
| D | Sentry free (~5k errors) + PostHog free + UptimeRobot free | Gives up: retention, replay volume, and alert routing. Honestly adequate until real users arrive. |
| E | GlitchTip (errors) + Umami (analytics) + OpenReplay (session replay) + Uptime Kuma + Metabase (BI) + Dependency-Track (SBOM) on the box; Claude Code OTel telemetry into SigNoz on the box, which a 32GB machine runs comfortably | The near-complete maintain suite at home. Cannot self-host the outside vantage: a monitor on the homelab cannot tell you the homelab is down. Options on the exceptions list. |

Support intake, all stacks: Tally form + an email alias into the tracker.
A helpdesk for one person is a queue with extra steps; revisit at the first
hire (docs/process/PROCESS-TEAM.md takes over there). Stack E swaps Tally for
Formbricks on the box.

---

## Stack D in full: cheapest, and what it costs

Claude Pro $17/mo annual and nothing else with a bill. Every per-stage D row
above names its local give-up; these are the three structural ones:

1. **Agent capacity.** Pro's usage limits are the ceiling on everything, and
   the agent is the staff. Per PROCESS-SOLO, when the limits bind, the honest
   fix is the Max upgrade, not more tools. This is the give-up that caps
   output rather than comfort.
2. **Soft enforcement on private repos.** Branch protection is a paid GitHub
   feature, so the required checks that substitute for a reviewer become
   requests. The free escapes: make the repo public (checks free, plus free
   Actions minutes), or GitHub Pro at $4.
3. **The architecture bends to the free tier.** Free edge hosting means no
   long-running servers; free databases pause or scale to zero; no SMTP budget
   means no email. Each is fine alone, but design decisions made to stay at
   $0 are still design decisions, and they outlive the budget that forced
   them.

The upgrade ladder out, in order: Max when Pro binds (~+$83-183) · GitHub Pro
$4 or go public (the gate) · Railway $5 (a real backend) · a $10/yr domain ·
Sentry stays free far longer than the rest. Spending the GitHub Pro, Railway,
and domain rungs converts D into A, which is why A, not D, is this report's
recommended floor: the $13-40 difference buys back give-ups 2 and 3 above. Max
is the separate agent-capacity purchase and lands you past A, not at it.

---

## Stack E in full: the self-host homelab

The premise: keep Claude Max 20x, and for everything else favor the
development machine or hardware at home. This is stack B's philosophy taken to
its conclusion; the per-stage rows above name the picks, and this section
covers what they run on, how the outside world reaches them, and the honest
list of what self-hosting cannot do.

Who it is for: the builder who wants data ownership, wants the meters dead,
or wants the learning. PROCESS-SOLO's warning applies once and is not repeated:
attention is the scarce resource, and this stack deliberately spends evenings
on operations that stacks A-C buy back. If that trade does not sound like fun,
run stack B.

### The hardware

| Option | Spec | Cost | Fits |
| --- | --- | --- | --- |
| The default | [Intel N305 mini PC, 32GB RAM](https://botmonster.com/self-hosting/best-mini-pcs-home-lab-2026/) (Beelink/Minisforum class) | ~$250-300 one-time, idles 6-10W, ~$8-12/yr electricity | The full roster below with headroom, including SigNoz |
| The floor | [N100/N150 mini PC, 16GB](https://dev.to/selfhostingsh/best-mini-pcs-for-home-servers-in-2026-2b0i) | ~$180-250 | 15-20 containers comfortably; skip SigNoz, keep Grafana Cloud free for telemetry |
| The addendum | A used Mac mini | varies | The one thing a homelab does that clouds charge dearly for: local iOS/macOS builds via Fastlane. Only if you ship Apple platforms. |

Prefer SO-DIMM upgradeable RAM over soldered. Proxmox is optional; Docker plus
Coolify as the control plane is enough for this roster, and it is the same
Coolify the deploy stage already uses.

### The roster

Everything from the stack B box, plus the E additions, one machine:

| Service | Stage | Replaces |
| --- | --- | --- |
| Forgejo + runners + registry | Specification, development, test, deliver | GitHub (which stays as an optional mirror) |
| Coolify | Development, deliver, maintain | Railway/Render/Vercel |
| Supabase self-hosted or Postgres | Development, deliver | Supabase Cloud |
| Penpot | Design | Figma |
| Formbricks | Research, maintain | Tally/Typeform |
| SearXNG + Firecrawl/fastCRW | Research | Metered search and crawl APIs |
| Browserless or Steel | Test, maintain | Browserbase |
| Langfuse | Test | Langfuse Cloud/Braintrust |
| GlitchTip | Maintain | Sentry |
| Umami + OpenReplay | Maintain | PostHog Cloud |
| Uptime Kuma | Maintain | Better Stack/UptimeRobot |
| SigNoz (32GB box) | Maintain | Grafana Cloud/Datadog |
| Metabase + Dependency-Track | Maintain | Hosted BI, hosted SCA |
| GrowthBook | Deliver | Statsig/LaunchDarkly |
| Listmonk + Postiz | Deliver | Buttondown/Buffer |
| Kroki + Excalidraw server | Specification, ideation | Nothing; they were always free |
| Authelia in front of all of it | Cross-cutting | Twelve separate logins |

### Ingress: how the world reaches a home network

The first genuinely hard problem. Residential connections mean dynamic IPs,
often CGNAT, and an ISP that never promised you inbound traffic.

| Option | Cost | Trade |
| --- | --- | --- |
| [Cloudflare Tunnel](https://www.xda-developers.com/replaced-cloudflare-tunnel-with-pangolin-own-my-whole-ingress-path/) | Free | No open ports, works behind CGNAT, plus Cloudflare's edge. The catch for a purist: Cloudflare terminates your TLS and inspects traffic. |
| [Pangolin](https://www.serverspan.com/en/blog/pangolin-on-a-vps-replace-cloudflare-tunnels-and-tailscale-with-one-self-hosted-tool) on a ~$5 VPS | ~$5/mo | WireGuard tunnel + reverse proxy + identity-aware access in one self-hosted stack; nobody else sees the traffic; works behind CGNAT. The self-host-consistent answer. |
| Tailscale (free tier) | Free | For private access only: your devices reach the homelab without exposing anything. Funnel exists for public sharing but locks to ts.net domains and one node. |

A workable split: Tailscale for you, Pangolin or Cloudflare Tunnel for
anything the public reaches. The Pangolin VPS doubles as the hybrid production
host and the external monitoring vantage below, which makes the $5 do triple
duty.

### What self-hosting cannot do

The list the stack is honest about. Each row: the gap, why, and the options.

| Cannot self-host | Why | Options |
| --- | --- | --- |
| Claude-class inference | The reason Max 20x survives every stack. Local models via Ollama run on this hardware but are not Claude-class for agentic coding | Keep Max 20x (the plan of record); Ollama for cheap eval graders and embeddings where quality tolerates it |
| Outbound email deliverability | [Gmail, Microsoft, and Yahoo issue permanent SMTP-level rejections](https://powerdmarc.com/self-hosting-email/) for non-compliant mail, and residential IP ranges are tainted or blocked outright. Self-hosted Listmonk still needs a trusted sender | Relay outbound through Amazon SES, Postmark, SMTP2GO, or Resend: a few dollars a month, with the IP reputation you would otherwise spend months building. Receiving self-hosts fine (Mailcow, Stalwart) if you want it |
| The outside vantage | A monitor on the homelab cannot report the homelab down; the network is the shared failure domain | UptimeRobot free, Better Stack free tier, or a second Uptime Kuma on the Pangolin VPS |
| Offsite backups | 3-2-1 needs a copy that does not burn down with the house | restic or Coolify's S3 backups to Backblaze B2 or a Hetzner Storage Box, single-digit dollars monthly |
| Domains, DNS, certificates | Registrars and CAs are external by construction | Porkbun or Cloudflare Registrar; Let's Encrypt via Coolify/Traefik is already free and automatic |
| Production SLA | Residential power and ISP outages take the product down with the lab | Accept it (a side project survives this); or hybrid: the app serves from the $5 edge VPS or a PaaS while the homelab runs everything else. The PROCESS-TEAM-SERVER rule restated: production and its monitor must not share a failure domain |
| Payments | Nobody self-hosts card processing | Stripe, as ever |
| Recruited research participants | Other humans are not a container | Per-interview AI-moderated services (~$25/interview); Formbricks handles the users you already have |
| v0-class AI prototyping | The generation runs on vendor models | The harness + `/taste-skill` + `/prototype` locally; or keep v0 as a named exception |
| Cross-vendor review seats | `/codex review` and the `/z-adversarial-review` skeptic seats call other vendors' models by design | Their APIs or subscriptions; the diversity is the point, so this is spend, not infrastructure |
| Claude cloud sessions on your own runners | Self-hosted environments are Team and Enterprise only | [Remote Control](https://code.claude.com/docs/en/self-hosted-environments), which IS available on Max: run Claude Code on the always-on homelab box and drive it from your phone or laptop. The homelab-native answer, and arguably better than the thing it substitutes for |
| GitHub's network effects | Stars, discovery, and drive-by contributors live on github.com | Mirror public repos from Forgejo to GitHub; develop at home, be found in public |

### Stack E, rolled up

**Claude Max 20x $200** · domain ~$1 · SMTP relay ~$1-5 · offsite backup
~$1-5 · Pangolin/edge VPS ~$5 · electricity ~$1 · everything else $0 after
~$250-300 one-time hardware. Roughly **$210-230/month**, the cheapest of the
Max-based stacks, with more raw capability than B and C combined and the ops
load to match. Nearly the whole budget is the agent, which is still the correct
shape.

Build order: hardware + Coolify + Forgejo the first weekend; move the CI gates
onto Forgejo runners the second; ingress, Authelia, and offsite backups before
anything is public; the observability roster last, one container at a time as
each earns its keep.

---

## Multi-stage products worth buying once

| Product | Covers | In stacks |
| --- | --- | --- |
| Claude Code Max + skill packs | All eight stages, on the machine | All (tier varies) |
| GitHub Free/Pro | Specification, development, test, deliver, maintain | All |
| The Hetzner + Coolify box | Research (SearXNG), specification (Kroki), deliver (Listmonk, deploy target), maintain (Umami, Uptime Kuma) | B, C |
| Obsidian | Ideation, research, specification - and agent-readable context | All |
| PostHog Cloud | Research (surveys), deliver (flags via experiments), maintain (analytics, replay, errors) | A, B, C, D (free tier); E self-hosts Umami + OpenReplay |
| Supabase | Development, deliver, maintain | B, C |
| v0 | Ideation, design | B, C |
| Sentry | Test (release health), deliver, maintain | A, B, C, D (E swaps in GlitchTip) |
| Better Stack | Maintain, four ways at once | C |
| Kata | Specification, development | All |
| Forgejo | Specification, development, test, deliver in one sub-100MB binary | E |
| The homelab box | Every hosted stage at once; the exceptions list is what it cannot absorb | E |

---

## The five stacks, rolled up

### Stack A: least overhead (~$30-60/mo)

Claude Code Pro $20 (or Max 5x $100 the month things get serious) · GitHub
Free · Railway ~$10 · everything else $0: Obsidian, Excalidraw, Kata, Bruno,
Devbox, Tally, Figma Starter, PostHog free, Sentry free, the
three free CI gates. One to three bills. The constraint is agent capacity:
Pro's limits are the ceiling you will hit first, and the honest fix is the
Max upgrade, not more tools.

### Stack B: best in class (~$300-380/mo)

**Claude Max 20x $200** · GitHub Free · Railway/Render ~$15 · Supabase Pro $25
· Sentry Team $26 · v0 $25 · the Hetzner box ~$11 · GrowthBook free · PostHog
free tier · plus the free CI gate set (Promptfoo, OpenGrep, Lighthouse,
BackstopJS, gitleaks). Roughly seven bills, one box, no meter an agent can run
away with. Two-thirds of the budget is the agent, which is the correct shape:
per PROCESS-SOLO, the agent is the staff.

### Stack C: cost no object (~$700-1,000/mo)

Stack B plus: API overflow budget on top of Max 20x (~$100-200) · Cursor Pro
or Copilot Pro as a second surface · Lovable $25 · Figma Pro $16 · Linear $10 +
Notion $10 · CodeRabbit ~$24 · Chromatic Starter when snapshots earn it ·
Browserbase $20 · Blacksmith/Depot ~$30 · Langfuse Cloud $29 · Better Stack
~$40 · Maze $25 + ~$100/mo of AI-moderated interviews · Aikido when user data
arrives. The defensible core of C over B is four things: more agent (API
overflow + second vendor), other people's opinions (interviews, hosted PR
review), a cloud browser so QA runs without your laptop, and being paged
properly. The rest is polish.

### Stack D: cheapest (~$17-25/mo)

Claude Pro $17 and free tiers all the way down: GitHub Free, Cloudflare Pages,
Neon, Figma Starter, Tally, PostHog, Sentry, UptimeRobot. One bill. The three
structural give-ups (agent capacity, soft enforcement on private repos, an
architecture bent to fit free tiers) and the upgrade ladder out are in the
Stack D section above.

### Stack E: self-host homelab (~$210-230/mo + ~$250-300 one-time)

Claude Max 20x $200 plus single-digit dollars of unavoidable SaaS (domain,
SMTP relay, offsite backup, edge VPS, electricity) on top of a ~$250-300 mini
PC. Full breakdown, roster, ingress options, and the cannot-self-host list in
the Stack E section above. Most capable per dollar, and the only stack whose
real currency is evenings.

---

## What to do first, whichever stack

1. Claude Code plan sized to actual usage - the one purchase that changes
   output, before any tool.
2. The three free required checks: gate tests, gitleaks, OpenGrep. The
   reviewer who never gets tired of you.
3. Tally form live before the product is done - feedback intake from day one.
4. `/setup-deploy` + Railway so `/land-and-deploy` works, then Sentry free.
5. Stack B and up: the Hetzner + Coolify box in one afternoon, then Promptfoo
   and Lighthouse into CI.
6. Stack E: hardware + Coolify + Forgejo the first weekend; gates onto Forgejo
   runners the second; ingress, Authelia, and offsite backups before anything
   goes public.

Sources: consolidated in docs/process/PROCESS-TEAM-SERVER.md plus inline -
[Claude Code plans](https://www.finout.io/blog/claude-code-pricing-2026),
[notes apps](https://nexasphere.io/blog/best-note-taking-apps-developers-2026),
[Tally vs Typeform](https://tally.so/help/compare),
[AI prototypers](https://uibakery.io/blog/bolt-vs-lovable-vs-v0),
[PaaS for solo devs](https://devtoolpicks.com/blog/railway-vs-render-vs-fly-io-solo-developers-2026),
[Hetzner + Coolify in practice](https://ceaksan.com/en/hetzner-coolify-self-hosting-reality),
[Supabase vs Neon](https://layerbase.com/blog/neon-vs-supabase),
[Bruno](https://apiscout.dev/guides/bruno-vs-postman-vs-insomnia-api-clients-2026),
[Devbox](https://briandetering.net/2026/05/28/best-dev-environment-managers-2026/),
[analytics pricing](https://www.buildmvpfast.com/api-costs/analytics),
[observability](https://devsecops.ae/observability-platforms-2026/),
[visual testing](https://argos-ci.com/blog/percy-vs-chromatic-vs-argos),
[managed runners](https://tenki.cloud/blog/github-actions-runner-showdown-2026),
[cloud browsers](https://apiscout.dev/guides/browserbase-vs-steel-vs-hyperbrowser-browser-infrastructure-2026),
and for stack E:
[Formbricks](https://formbricks.com/blog/best-open-source-survey-software),
[homelab mini PCs](https://botmonster.com/self-hosting/best-mini-pcs-home-lab-2026/),
[Pangolin and tunnel options](https://www.serverspan.com/en/blog/pangolin-on-a-vps-replace-cloudflare-tunnels-and-tailscale-with-one-self-hosted-tool),
[self-hosted email deliverability](https://powerdmarc.com/self-hosting-email/),
[self-hosted git forges](https://www.techverdict.io/articles/self-hosted-git-2026).
