# Server-Side Tooling Across the SDLC

A companion to docs/process/PROCESS-TEAM.md, which describes an AI-enabled team's
process almost entirely as things running on laptops: hooks, skills, CLIs, and
a committed `.claude/` directory. This report asks what belongs on a server,
who should run that server, and what each choice costs.

Organized by the section headings in docs/frameworks/Z-TOP-SKILLS.md, so every category in
the skill catalog gets an answer, including the categories whose answer is
"nothing, keep this local." Knowing where not to spend is half the value.

SonarQube is the shape of the move but a small slice of it. Rules a linter
checks locally become a gate that runs on every pull request and blocks the
merge whether the developer wanted it to. That move is available at roughly
twenty points in the catalog. SonarQube covers one and a half.

Desk research against public sources, current as of the searches at the end.
Nothing here has been run against this repo. Prices are list prices found in
secondary sources and move constantly; treat them as order of magnitude, not
quotes.

---

## Server-side is not the same as self-hosted

Two independent decisions, and conflating them is the most expensive mistake in
this document.

**Decision one: does this belong on a server at all?** Three properties decide
it, and every recommendation below claims at least one.

1. **Enforcement that is not opt-in.** A pre-commit hook is a file in a repo.
   `--no-verify` skips it, a fresh clone may never install it, and an agent
   that hits a red hook can be told to work around it. A required status check
   on a protected branch is not skippable by the person who wants to skip it.
2. **A view across everyone.** `ccusage` reports what your laptop spent.
   Nothing local reports what the team spent, which skills earned their token
   cost, or which agent added the dependency that just failed a CVE scan.
3. **Continuity.** Laptops get reimaged and sessions get cleared. Servers keep
   the history a retro, a cost review, or a post-mortem needs.

**Decision two: who runs it?** All three properties hold identically whether
the server is in your VPC or someone else's. SaaS is server-side. It buys the
same enforcement, the same aggregation, the same continuity, and adds things
self-hosting cannot:

- **No on-call surface.** Every self-hosted service is a thing that breaks on a
  Friday and an upgrade you owe.
- **The vendor tracks the ecosystem.** A hosted SAST vendor ships new rules for
  a new framework before your self-hosted install notices the framework exists.
- **Time to value in an afternoon**, not a sprint.

**So the default is SaaS.** Self-host on a named constraint, not on taste.

### The constraints that actually justify self-hosting

| Constraint | Example |
| --- | --- |
| Data residency or sovereignty written into a contract | A customer contract naming where data lives |
| Air-gap or no-egress network policy | Regulated environments, defense, some finance |
| Source code cannot reach a third party | The reason Claude Code self-hosted environments exist |
| The meter is punitive at your volume | High-ingest observability, snapshot-billed visual testing |
| You already run the platform | Marginal cost of one more container is near zero |
| No hosted option exists | Rare, and getting rarer |

Anything else is preference. Preference is allowed, but budget it as
preference, not as engineering.

---

## The pricing lens that matters for an AI-enabled team

This is the section that changes what you buy, and it is specific to teams
where agents generate most of the output.

**Per-seat pricing is your friend. Per-activity pricing is your enemy.**

An AI-enabled team has an unusual shape: few humans, enormous activity per
human. Agents are not seats, so per-seat tools stay cheap while your throughput
grows. Agents *are* activity, so metered tools bill you for exactly the thing
you added agents to increase.

| Billing model | Examples | Effect on an agent-heavy team |
| --- | --- | --- |
| Per seat or per contributor | Linear ($10-16), Jira ($7.91-17), Codacy ($15), Qodana ($6), DeepSource ($12, moved to $24 for Team in Feb 2026) | Cheap and stays cheap. Buy these. |
| Per monthly active user | LaunchDarkly, most flag vendors | Uncorrelated with agent output. Safe. |
| Per event or error | Sentry (~$26 Team, ~$80 Business, ~5k free) | Mostly production traffic, weakly correlated. Watch it, but fine. |
| Per snapshot, trace, score, or scan | Chromatic ($179 for 35k snapshots, $399 for 85k, $0.008 over), Percy (from $599), Braintrust ($2.50/1k scores), LangSmith ($2.50/1k traces) | **Dangerous.** Agents open more PRs, which means more snapshots, more traces, more evals. Model your bill at 5x current PR volume before signing. |
| Per compute minute or GB | GitHub Actions minutes, Browserbase (~$0.10-0.12/browser hour, $12/GB on Developer) | **Dangerous, and now unavoidable.** GitHub began charging $0.002/minute for self-hosted runner usage in private repos on 1 March 2026, so the old escape hatch is metered too. |

**The practical rule that falls out:** buy the per-seat services, and put the
per-activity ones where the meter cannot reach you. That is a principled
self-hosting decision rather than an aesthetic one, and it lands on exactly the
categories where self-hosting is cheapest to run: static analysis, visual
regression, evals, browsers, and observability ingest.

---

## How to read this

Three vocabularies, one map.

| RECSKILLS heading | SDLC stage | PROCESS.md |
| --- | --- | --- |
| Pack Setup, Harness Development, Harness Setup, Token Savings, Context/Memory | HAR harness | 1, 24 |
| Starting Direction, PRD, Research, Business, Marketing | PM product | 2, 3, 4, 5, 18 |
| Initial Design, Designer Implementation | UX design | 6, 12 |
| Success Measurement, Requirements | PRI prioritization | 8, 9 |
| Loop, Developing, Testing, Technical Stack Specific, Mobile | DEV developing | 10, 11, 15 |
| Code Review, Codebase Health, Security | REV code review | 13, 14, 19, 20, 22 |
| Deploying | DEP deploy | 16 |
| Product Health | MON monitoring | 17 |
| Documentation, Knowledge Base | SUP support | 21, 23 |
| Code Architecture | ARC architecture | 7 |
| Agent Safety, Agent Only Assist, Anti Drift | AGT agent operations | 11, 24 |

---

## Coverage matrix

The question that changes a purchasing decision is not "what does this tool
do" but "how many categories does one subscription cover." Sorted by span.

Codes: **HAR** harness, **PM** product, **UX** design, **PRI** prioritization,
**ARC** architecture, **DEV** developing, **REV** code review, **DEP** deploy,
**MON** monitoring, **SUP** support, **AGT** agent operations.

| Tool | Delivery | Covers | Span |
| --- | --- | --- | --- |
| PostHog | Cloud (self-host unsupported) | PM, UX, PRI, DEP, MON, SUP | 6 |
| The forge (GitHub / GitLab / Forgejo) | Either | PRI, ARC, DEV, REV, DEP | 5 |
| Claude Code harness set (telemetry, managed settings, marketplace, runners, Action) | First-party, mostly free | HAR, DEV, REV, MON, AGT | 5 |
| Observability (Grafana Cloud, Datadog, SigNoz, LGTM) | Either | HAR, DEV, DEP, MON, AGT | 5 |
| Sentry / GlitchTip | Either | DEV, DEP, MON, SUP | 4 |
| Linear / Plane / Huly | Either | PM, PRI, DEV, SUP | 4 |
| Backstage / Port / Cortex / OpsLevel | Either | ARC, DEV, PRI, SUP | 4 |
| Coder | Self-hosted | DEV, REV, HAR, AGT | 4 |
| Browserbase / Steel / Browserless | Either | AGT, DEV, MON, UX | 4 |
| Identity (Authentik, Keycloak, Okta, WorkOS) | Either | Every service above | cross |
| Promptfoo / Braintrust / Langfuse | Either | AGT, DEV, REV | 3 |
| Statsig / GrowthBook / LaunchDarkly | Either | PRI, DEP, MON | 3 |
| Sourcebot / Sourcegraph | Either | DEV, REV, SUP | 3 |
| Lighthouse CI server | Self-hosted | UX, REV, MON | 3 |
| Chatwoot / Intercom / Zendesk | Either | SUP, PM, MON | 3 |
| Metabase / Superset | Either | PM, PRI, MON | 3 |
| Docmost / Outline / Notion / Mintlify | Either | PM, SUP, HAR | 3 |
| Pact Broker (PactFlow hosted) | Either | DEV, ARC, DEP | 3 |
| Aikido / Snyk / Semgrep | Either | REV, DEP | 2 |
| Kroki + Structurizr Lite | Self-hosted, tiny | ARC, SUP | 2 |
| Dependency-Track | Self-hosted | REV, MON | 2 |
| Harbor / Cloudsmith / Artifactory | Either | DEP, REV | 2 |
| ReportPortal / Currents | Either | DEV, REV | 2 |
| Chromatic / Percy / BackstopJS | Hosted or self | UX, REV | 2 |
| OWASP ZAP | Self-hosted | REV, DEV | 2 |
| Managed CI runners (Blacksmith, Namespace, Depot) | Hosted | DEV, REV | 2 |
| Penpot / Figma | Either | UX, PM | 2 |
| Uptime Kuma / Better Stack / Checkly | Either | MON, SUP | 2 |
| SearXNG + Firecrawl | Either | PM, SUP | 2 |
| **SonarQube / SonarQube Cloud** | **Either** | **REV plus a health tail** | **1.5** |
| OpenGrep / Codacy / Qodana / DeepSource | Either | REV | 1 |
| Merge queue (Graphite, Aviator, Mergify) | Hosted | REV | 1 |
| Deploy platform (Vercel, Railway, Coolify, Argo CD) | Either | DEP | 1 |
| Secrets (Doppler, 1Password, Infisical, OpenBao) | Either | DEP | 1 |

---

# Product Process

## Pack Setup

**Local today:** `/agent-sort`, `/configure-ecc`, a committed `.claude/`.

**Server, first-party, free:** [a private plugin
marketplace](https://code.claude.com/docs/en/plugin-marketplaces) is a git repo
with `.claude-plugin/marketplace.json` bundling skills, agents, hooks, and MCP
definitions. Distributing through Organization settings requires the repo to be
private or internal. Paired with **managed settings** pushed by MDM, file
placement, or the claude.ai Admin Console, which users cannot override.

That pair makes `/agent-sort`'s DAILY set real: run it once, publish, everyone
installs the same set with one command, and the policy floor is not negotiable
per machine. No hosting decision to make; it is a git repo and a settings file.

## Starting Direction / Human Helper

**Server: none, hosted or otherwise.** Interview loops between one human and
one agent. Nothing to enforce, nothing to aggregate. The only server-adjacent
piece is where the output lands, covered under PRD.

## PRD

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| Spec home for humans and agents | Docmost, Outline, BookStack | Notion, Confluence, [Mintlify](https://www.featurebase.app/blog/mintlify-pricing) | Notion for most teams. Mintlify dropped per-seat Pro for a free Starter plus Enterprise plus metered AI credits, which is worth checking against the per-activity lens above. |
| Docs beside the code | Docusaurus | GitBook, Mintlify | Docusaurus when specs should review as PRs. 3.9 added DocSearch v4 and AskAI. |
| Traceability spec to ticket to PR | Plane | Linear, Jira | Whichever tracker you already use. This is discipline, not a product. |

## Success Measurement

The category where a server changes the answer rather than the process, because
these skills currently reason over numbers nobody has.

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| Product analytics | PostHog (unsupported), Matomo | PostHog Cloud, Amplitude, Mixpanel | PostHog Cloud. Autocapture, funnels, retention, cohorts, replay, flags, surveys in one product; six categories for one bill. |
| Experimentation with statistics | GrowthBook | [Statsig, GrowthBook Cloud, LaunchDarkly](https://www.growthbook.io/insights/growthbook-vs-launchdarkly-vs-statsig) | GrowthBook Cloud free tier is unusually good for this team shape: up to three users with unlimited flags, experiments, and traffic. Statsig is free to 1M events (Amplitude took on the Statsig brand, platform, and contracts in May 2026). LaunchDarkly enterprise contracts start around $25k/year and reach $100-150k at 50k MAU, which is governance pricing, not startup pricing. |
| Dashboards over existing databases | Metabase, Superset | Metabase Cloud, Omni, Hex | Metabase either way. Community Edition self-hosted is genuinely complete: question builder, SQL editor, dashboards, alerts, 20+ connectors. |
| Traffic analytics | Umami, Plausible, Matomo | Plausible Cloud, Fathom | Umami self-hosted runs in ~512MB beside the app. Plausible Cloud if you would rather not. |

**The PostHog note:** MIT-licensed with an open-source deployment, but
self-hosting is unsupported, needs infrastructure expertise, and lacks some
paid cloud capabilities. If data residency is the constraint, PostHog Cloud
does not satisfy it and PostHog self-hosted is not a supported path. The fully
self-hostable equivalent is four services: Umami or Matomo, OpenReplay,
GrowthBook, and GlitchTip. Same six categories, four times the operations.

## Research

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| Search without a per-query bill | [SearXNG](https://ai-box.eu/en/ai-pipeline-en/fully-local-web-search-how-i-wean-my-hermes-agent-off-the-cloud-drip/2454/) | Exa, Tavily, Brave Search API | SearXNG. This is a per-activity meter and agents are the activity, so the self-host case is the pricing case. |
| Crawl and convert to markdown | [Firecrawl self-hosted](https://fastcrw.com/blog/best-self-hosted-scrapers), fastCRW | Firecrawl Cloud | Firecrawl self-hosted is a ~2-3GB five-container stack; fastCRW is an ~8MB static binary with a built-in MCP server. Start hosted, move when the bill notices you. |
| Grounded library and API docs | docs-mcp-server | Context7, GitMCP | Either. A hallucinated API costs a whole debugging session; this is the cheapest prevention. |

## Marketing

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| Scheduling and publishing | [Postiz](https://teqvolt.com/open-source/postiz-29-6k-star-open-source-social-scheduler-buffer-alternative) (AGPL-3.0, 30+ platforms) | Buffer, Hootsuite, Postiz Cloud from $29/mo | Hosted, unless there is a reason to own it. This is low-volume, low-stakes. |
| Newsletter | [Listmonk](https://listmonk.app/) | Buttondown, Ghost, ConvertKit | Listmonk if you already have Postgres and an SMTP relay. Otherwise hosted. |

## Initial Design

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| Design files | [Penpot](https://hedrick.io/post/penpot-vs-figma) | Figma, Penpot Cloud | Figma, and it already has an MCP server wired into this harness. Penpot when owning the files is a requirement: self-hostable, air-gappable, stores SVG rather than a proprietary binary, native design tokens, free developer handoff with no paid Dev seat. |

## Business

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| Ask questions of production data safely | Metabase, Superset | Metabase Cloud | Metabase. Read replicas only, either way. |

Skip CRM and finance tooling unless the business runs on this repo. The PM OS
meeting and status skills have no server counterpart worth running.

---

# Development Process

## Loop

Two first-party ways to move execution off laptops, solving different problems.

**[The GitHub Action](https://code.claude.com/docs/en/github-actions)**
(`anthropics/claude-code-action@v1`) runs Claude Code inside a workflow:
interactive mode responding to `@claude`, or automation mode driven by a
`prompt` input on any event including cron. Three properties matter more than
they first appear:

- `plugin_marketplaces` and `plugins` install your private marketplace into the
  CI run, so the same skills run server-side as locally.
- Workload identity federation via OIDC removes long-lived secrets from the
  repository.
- `use_bedrock`, `use_vertex`, `use_foundry` route inference through your own
  cloud account.

The cross-vendor counterpart:
[jules-action](https://github.com/google-labs-code/jules-action) puts Google's
Jules coding agent in the same workflow slot — the CI form of the Codex,
Gemini, and Antigravity CLI seats the review gates already use.

**[Self-hosted
environments](https://code.claude.com/docs/en/self-hosted-environments)**
(public beta, Team and Enterprise, off by default) run Claude Code cloud
sessions on runners inside your network. A runner polls Anthropic's queue,
clones the repo, spawns the session locally. Checkouts, artifacts, secrets, and
created files stay on your machines; the conversation still goes to
`api.anthropic.com` and the control plane stays Anthropic-hosted. All
connections outbound. A runner locks to one user on its first session so
checked-out code never mixes.

This is the clearest example in the report of the two-decision split: the
*server* is Anthropic's control plane either way, and self-hosting moves only
the execution. Two constraints: unavailable with Zero Data Retention, and
inference cannot route through Bedrock, Vertex, Foundry, or an LLM gateway in
self-hosted environments.

**Where the compute runs matters now.** GitHub began charging $0.002 per minute
for self-hosted runner usage in private repositories on 1 March 2026, so "bring
your own hardware" is no longer free. [Managed runner
vendors](https://tenki.cloud/blog/github-actions-runner-showdown-2026) exist
precisely for this: Blacksmith claims roughly 2-3x GitHub's speed at about a
third less cost, Namespace leads on platform depth and arm64 CPU, Depot
specializes in Docker build caching, with RunsOn, WarpBuild, and Tenki also
credible. If image builds are the bottleneck, a build cache beats a faster
generic runner.

## Designer Implementation

The category where the SonarQube move applies most directly and is least often
made: the design system stops describing intent and starts failing builds.

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| Accessibility and performance as a check | [Lighthouse CI server](https://unlighthouse.dev/learn-lighthouse/lighthouse-ci/server) | Calibre, DebugBear, SpeedCurve | Lighthouse CI server, self-hosted. Free, small, and `budget.json` assertions turn FCP, LCP, TBT, CLS, and the accessibility score into pass or fail per PR. Converts two PROCESS.md stages into required checks with one install. |
| WCAG rule detail | Pa11y, axe-core in CI | Deque axe DevTools, Siteimprove | Pa11y in CI. Lighthouse reports a score, not the rule set. |
| Visual regression | [BackstopJS](https://testguild.com/visual-validation-tools/), Argos self-hosted | [Chromatic, Percy, Applitools](https://argos-ci.com/blog/percy-vs-chromatic-vs-argos) | **Run the numbers before signing.** Chromatic is free to 5k snapshots/month, $179 for 35k, $399 for 85k, $0.008 each over. Percy is free to 5k then starts around $599. Both bill per snapshot, and agents open more PRs, so this is the textbook per-activity trap. BackstopJS is the self-hosted answer (**Lost Pixel was archived April 2026**, do not start there). Argos is open source with a real PR review UI but documents the hosted path. |
| Component workshop | Storybook | Chromatic hosts Storybook | Storybook either way. It becomes a server the moment it is built and published per PR. |

## Technical Stack Specific

**Server: none directly.** Stack knowledge is context, not enforcement. The
server that serves this indirectly is the package registry under Deploying,
which constrains what an agent can install regardless of stack.

---

# Code Architecture

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| What services exist, who owns them, where docs are | [Backstage](https://encore.dev/articles/backstage-alternatives) | Port, Cortex, OpsLevel, Roadie (managed Backstage) | **Hosted, if at all.** Backstage is a framework you build and maintain, not a product you install, and that cost is well documented. Port is the configurable version of the same idea. Under nine people the catalog is a markdown file; do not buy either. |
| Diagrams from text | [Kroki](https://kroki.io/) + [Structurizr Lite](https://docs.structurizr.com/community) | Structurizr Cloud, Mermaid in the forge | Kroki self-hosted, it is tiny. Renders 25+ text formats including the Structurizr DSL, so `/diagram` output becomes a reviewable diff rather than a stale PNG. Structurizr is models-as-code for C4 by the author of C4. |
| Contracts that break the build when violated | [Pact Broker](https://qaskills.sh/blog/pact-contract-testing-complete-guide-2026) | PactFlow | Either. Consumers write tests, providers verify, the broker holds contracts, `can-i-deploy` gates the deploy. This is the machine form of docs/rules/SERVICES.md and the only entry here that actually stops a breaking cross-service change. |

---

# Dev Tooling

## Requirements

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| A tracker agents can drive | [Plane](https://openalternative.co/alternatives/linear), Huly | [Linear](https://costbench.com/software/developer-tools/linear/) ($10 Basic / $16 Business per user/mo), [Jira](https://costbench.com/compare/jira-vs-linear/) ($7.91 Standard / $17 Premium), GitHub Projects | **Hosted, and this is per-seat so it stays cheap.** The deciding property is an API and ideally an MCP server so an agent moves ticket state and reads acceptance criteria with no person in the loop. Plane ships a native MCP server and is the self-host answer. |

**The label-as-contract pattern.** Worth copying from GSD whatever tracker you
pick: an agent builds the oldest safe issue carrying a `ready` label, and a
reviewer audits the resulting PR against its linked issue contract and required
CI, posting a verdict without merging. Turns a tracker into a queue that drains
itself. Only works if the tracker has an API an agent can reach.

## Developing

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| Isolated workspaces | [Coder](https://coder.com/docs/admin/integrations/devcontainers), devcontainers | GitHub Codespaces, Gitpod, Coder Cloud | Codespaces if already on GitHub. Coder when network isolation or a custom image matters. `/guard` and `/freeze` are requests to a cooperative agent; a container is a boundary. |
| Harder isolation | Docker Sandboxes (microVM per agent) | E2B, Daytona | Only when the threat model needs a separate kernel. |
| Code search for humans and agents | [Sourcebot](https://github.com/sourcebot-dev/sourcebot), OpenGrok | Sourcegraph, GitHub code search | Sourcebot: Zoekt-backed with a built-in MCP server so agents query over Streamable HTTP. The multi-repo answer where Graphify is the single-repo one. |
| A URL to QA against | [Argo CD PR generator](https://oneuptime.com/blog/post/2026-02-09-argocd-pr-preview-environments/view), Uffizzi, Coolify | Vercel, Netlify, Render preview environments | **Hosted, almost always.** This is the single highest-value purchase for a product with a UI: it lets `/qa` run in CI against a real URL instead of one person's localhost, and it gives DAST something to scan. |
| Faster CI | Self-hosted runners (now $0.002/min on GitHub private repos) | Blacksmith, Namespace, Depot, RunsOn | Hosted managed runners. The old free-self-hosted argument evaporated in March 2026. |

## Testing

The category docs/process/PROCESS-TEAM.md under-covers most, and the one where agent
volume changes what breaks.

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| A browser that is not on a laptop | [Browserless](https://sliplane.io/blog/5-awesome-browserless-alternatives), Steel self-hosted, Selenium Grid | [Browserbase](https://apiscout.dev/guides/browserbase-vs-steel-vs-hyperbrowser-browser-infrastructure-2026) ($20 Developer, $99 Startup, ~$0.10-0.12/browser hour, $12/GB), Hyperbrowser (~$10), Steel Cloud (~$10), BrowserStack | **Start hosted, watch the meter.** This unlocks five skills at once: `/browse`, `/qa`, `/scrape`, `/canary`, `/benchmark` all need Chrome, and none can run server-side without it. Positioning: Browserbase is polish, Hyperbrowser is volume, Steel is openness. All expose a Playwright-compatible WebSocket, so scripts move by swapping a connection string, which also makes the eventual self-host migration cheap. |
| Make sense of thousands of results | [ReportPortal](https://qualflare.com/reportportal-alternative/) | Currents, Allure TestOps, Datadog Test Optimization | ReportPortal self-hosted: ML pattern matching clusters recurring failures, which is the scaling answer when agent-written suites fail in bulk and the signal is which root cause, not which test. |
| Keep the gate credible | quarantine logic in CI | [Trunk Flaky Tests](https://trunk.io/flaky-tests), Datadog | Hosted. Tracks pass/fail history per commit, quarantines automatically rather than by hand, works with any language, runner, and CI. Agent-written tests raise absolute flake count even at a constant rate. |
| Stop cross-service breakage | Pact Broker | PactFlow | Either. See Code Architecture. |
| Payments without a live processor | [AcquireMock](https://github.com/ashfromsky/acquiremock) | Stripe test mode | Trigger: the first payment feature. Provider test modes cover the happy path; a mock gateway you control also injects the failures (declines, timeouts, partial refunds) an agent-written suite should exercise. |
| Evals, not just tests | Promptfoo | Braintrust, LangSmith, Langfuse Cloud | See Anti Drift. |

## Code Review

Five distinct servers live here, which is why treating SonarQube as the whole
answer under-covers even this one category.

### Static analysis

[SonarQube's AI Code
Assurance](https://docs.sonarsource.com/sonarqube-server/2026.1/quality-standards-administration/ai-code-assurance/overview)
fits on paper: mark a project as containing AI-generated code, attach a quality
gate written for that case, passing projects carry a badge. It assumes what
this process assumes, that agent-authored code needs a stricter bar.

**The edition table is the whole decision.** SonarQube Community Build is free
and production-grade with thousands of rules across twenty-plus languages, but
it [analyzes only the main
branch](https://costbench.com/software/developer-tools/sonarqube/free-plan/):
no branch analysis, no PR decoration, no taint analysis. Since the entire
argument is gating the PR, the free tier does not deliver it. That is Developer
Edition, roughly $2,500/year at 100K lines. The AI Code Assurance docs page
does not state its edition requirement, so confirm before budgeting.

| Option | Delivery | Gates a PR | Price signal |
| --- | --- | --- | --- |
| [OpenGrep](https://www.opengrep.dev/) | Self-hosted | Yes, via CI | Free. LGPL-2.1 fork of Semgrep CE from January 2025, maintained by a ten-plus vendor consortium, restoring taint analysis, interprocedural scanning, fingerprinting, and Windows support to the free tier. |
| Semgrep | Either | Yes | Free CE; Teams is per-contributor; Secrets is a separate module. |
| [Qodana](https://dev.to/rahulxsingh/deepsource-vs-qodana-code-quality-platforms-compared-2026-152a) | Hosted | Yes | ~$6/contributor/month. Cheapest per-seat option found. |
| [Codacy](https://dev.to/rahulxsingh/codacy-vs-sonarqube-code-quality-platforms-compared-2026-35d2) | Hosted | Yes | ~$15/user/month, bundling quality, SAST, SCA, secrets, and AI-code guardrails. |
| DeepSource | Hosted | Yes | ~$12/user/month; a February 2026 restructure moved Team to ~$24. |
| SonarQube Cloud | Hosted | Yes | Free entry tier, lines-of-code pricing above it. |
| SonarQube Developer Edition | Self-hosted | Yes | ~$2,500/year at 100K LOC. |
| SonarQube Community Build | Self-hosted | Main branch only | Free. A trend dashboard, not a gate. |

**Pick:** OpenGrep in CI as the free floor. Add Qodana or Codacy if you want a
managed dashboard, because both are per-seat and therefore safe for this team
shape. Reach for SonarQube Developer Edition only if AI Code Assurance
specifically is what you are buying.

### The rest

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| Review every PR regardless of origin | [Qodo Merge](https://wetheflywheel.com/en/guides/best-ai-code-review-tools-2026/) (free, on the open-source PR-Agent engine, your own keys) | CodeRabbit, Greptile, Qodo, Graphite | Trial two on real PRs; vendor benchmarks in this space disagree with each other. Greptile applies full-codebase context, which catches what a diff-only reviewer misses. |
| Keep main green under concurrent merges | Nothing credible | [Graphite, Aviator, Mergify](https://graphite.com/guides/merge-queue-tools-options), GitHub merge queue | **Hosted.** Start with GitHub's native merge queue, free. Graphite is the closest counterpart to Stax. [Aviator](https://www.aviator.co/aviator-vs-graphite) adds parallel queues, batching, and monorepo affected-target routing at 1,000+ PRs a day. |
| Gate on policy, not a checkbox list | OPA, Conftest, Kyverno | Same, as libraries | Self-hosted by nature. Puts the policy itself under review. |

**Do not let a bot replace the blinded review.** `/z-adversarial-review` works
because the reviewer never saw the conversation. A PR bot sees the diff and the
description, which is weaker. Run both.

## Deploying

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| The deploy platform | [Coolify, Dokploy](https://introserv.com/blog/dokploy-vs-coolify-complete-comparison-of-the-best-self-hosted-paas-platforms-for-vps-and-dedicated-servers-2026/), Kamal, Argo CD | Vercel, Netlify, Railway, Render, Fly.io | **Hosted unless cost at scale says otherwise.** Coolify is the mature self-host option with 280+ templates, managed database backups, and native per-branch previews. Kamal is deliberately minimal: YAML plus SSH, no dashboard, no daemon. |
| Rollout that reverses itself | [Argo Rollouts, Flagger](https://oneuptime.com/blog/post/2026-03-13-flagger-vs-argo-rollouts-comparison/view) | Vercel/Render native, Harness | Kubernetes only. Analysis templates query Prometheus, Datadog, CloudWatch; failing analysis scales down the canary and reverts traffic automatically. Flagger for automatic promotion, Argo Rollouts for step-based control with approval gates. |
| Ship dark, enable later | GrowthBook, Unleash, Flagsmith | Statsig, LaunchDarkly, GrowthBook Cloud | Statsig or GrowthBook Cloud. Both have real free tiers; LaunchDarkly is priced for governance, not for you. |
| Signed, scanned images | [Harbor](https://oneuptime.com/blog/post/2026-02-08-how-to-run-harbor-container-registry-with-vulnerability-scanning/view) | GitHub Packages, Cloudsmith, Artifactory | Either. Harbor is CNCF-graduated with native Trivy scan-on-push and Cosign signing. |
| An allowlist an agent cannot escape | Harbor, Nexus, Verdaccio | Cloudsmith, Artifactory | The strong control for the dependency problem: an agent installs only from the registry it can reach, and that registry is yours. |
| Secrets | [OpenBao, Infisical](https://infisical.com/blog/open-source-secrets-management-devops) | Doppler, 1Password, Infisical Cloud | **Hosted.** This is the category where self-hosting buys you an outage at the worst possible time. OpenBao is the Linux Foundation MPL-2.0 Vault fork at 2.5.0 (Feb 2026) if you must; Infisical is MIT and far gentler. |

## Codebase Health

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| Quality trend over time | SonarQube Community Build | SonarQube Cloud, Codacy | Whatever the static-analysis choice already gives you. Do not buy a second tool for the trend line. |
| Coverage as a gate | SonarQube, CI thresholds | Codecov, Coveralls, SonarQube Cloud | Gate on *new-code* coverage, which does not punish a legacy codebase. |
| Findings from every scanner in one place | [DefectDojo](https://defectdojo.com/blog/top-11-open-source-vulnerability-management-tools-for-2026) (500+ tool integrations) | Aikido, Snyk, Wiz | If you buy a consolidated AppSec platform, you do not need DefectDojo. If you assembled free scanners, you eventually do. |

## Mobile App Specific

**The honest answer: the weakest category for self-hosting**, because iOS
builds need macOS hosts and Apple does not make that cheap.

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| Build and release automation | [Fastlane](https://fastlane.tools/) on your own runners | Fastlane on Codemagic, Bitrise, Xcode Cloud, GitHub macOS runners | Hosted. Fastlane is the tool either way; the question is only who owns the Mac. Note fastlane.ci, the self-hosted mobile CI project, is dormant. |
| Device testing | A physical device lab, serve-sim for simulators | AWS Device Farm, BrowserStack App Live, Firebase Test Lab | Hosted. A device lab is a hardware refresh cycle you do not want. |
| Build size regression | None found | Emerge Tools | Hosted; no strong open-source equivalent found. |

## Documentation

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| Docs beside the code | Docusaurus, MkDocs | Mintlify, GitBook, ReadMe | Docusaurus. Reviews as PRs, so `/document-release` output goes through the same gate as code. |
| Wiki for what does not belong in a repo | Docmost, Outline, BookStack | Notion, Confluence | Hosted, unless the content is sensitive. |
| Docs attached to the service catalog | Backstage TechDocs | Port, Cortex | Only if you already bought the catalog. |
| Diagrams in docs and PRs | Kroki | Mermaid rendered by the forge | Kroki. A diagram becomes a reviewable diff rather than a stale PNG. |

## Security

Layered, and each layer is a different decision. The second-largest category
here after Code Review.

| Layer | Self-hosted | Hosted | Note |
| --- | --- | --- | --- |
| Secrets in history and pushes | gitleaks in CI | [GitGuardian](https://www.aikido.dev/blog/top-gitguardian-alternatives) (free under 25 developers), push protection rulesets | Install day one. Adding it over a polluted history makes CI permanently red. |
| Static analysis (SAST) | OpenGrep | Semgrep, Codacy, Qodana, Snyk Code | See Code Review. |
| Dependencies (SCA) | [Dependency-Track](https://engineering.backbase.com/2026/04/14/dependency-track/) | Snyk, Socket, Aikido | Dependency-Track ingests an SBOM per build over REST and re-analyzes daily against NVD and GitHub Advisories, so a package that turns vulnerable next month surfaces without a new build. The justification: [an agent will install whatever dependency it decides it needs, by whatever method it thinks of](https://blog.gitguardian.com/renovate-dependabot-the-new-malware-delivery-system/). |
| Running application (DAST) | [OWASP ZAP](https://oneuptime.com/blog/post/2026-01-25-owasp-zap-api-security/view) | Detectify, Invicti | ZAP is still the strongest free DAST in 2026 and baseline scans run under five minutes, which makes them PR-viable. Needs the preview environment from Developing to have a target; the two purchases compound. |
| Containers | Trivy, in Harbor and CI | Aikido, Snyk Container, Wiz | Trivy free either way. |
| Runtime | [Falco](https://wazuh.com/blog/cloud-native-security-with-wazuh-and-falco/), Wazuh | Datadog Security, Wiz | Only once there is production worth watching. |
| Aggregation | DefectDojo | Aikido, Snyk | See below. |
| Policy | OPA, Conftest, Kyverno | Same | Rules as code so the gate fails on defined severity and exploitability conditions, not on every finding. |
| Dependency updates | Self-hosted Renovate | Renovate Cloud, Dependabot | Self-hosted Renovate means you control the runner, credentials, and network, which is more defensible than a cloud bot holding broad repo access. |

**The consolidation question.** Assembling gitleaks, OpenGrep,
Dependency-Track, ZAP, and Trivy gets you five free gates covering secrets,
code, dependencies, the running app, and containers, at the price of five
configurations and five inboxes. [Aikido](https://weavai.app/blog/en/2026/05/01/2026-aikido-security-review-is-all-in-one-appsec-worth-300/)
bundles SAST, SCA, secrets, cloud, and runtime with flat rather than per-seat
pricing, with a free tier and a Basic plan reported around $300/month. For a
small team that values a Saturday, one bill is a defensible trade. Snyk's free
tier has hard test limits that a small team hits quickly.

## Product Health

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| Traces, metrics, logs | [SigNoz, Grafana LGTM](https://signoz.io/blog/grafana-alternatives/) | [Grafana Cloud, Datadog, Honeycomb, Better Stack](https://devsecops.ae/observability-platforms-2026/) | **The genuinely contested one.** Grafana Cloud is reported 50-70% cheaper than Datadog at similar scale and has a free tier that costs a small team nothing; Better Stack is the option with EU data residency by default at €0.10/GB ingest. Self-host SigNoz when ingest volume makes the meter punitive. LGTM has the largest ecosystem and the steepest operational curve; SigNoz is OpenTelemetry-native and ships as one product. Whichever you pick also receives Claude Code's telemetry, which is the argument for having exactly one. |
| Errors, grouped | GlitchTip, Sentry self-hosted | [Sentry](https://gaxonline.com/vs/sentry-vs-datadog/) (~5k errors free, ~$26 Team, ~$80 Business) | **Hosted Sentry.** For a 1-15 person team shipping a web or mobile app, this pays for itself in week one, and spike protection actually caps surprise bills. Turns `/investigate` from log reading into a stack trace with a frequency count. |
| Uptime and a status page | [Uptime Kuma](https://betterstack.com/community/comparisons/uptime-kuma-alternative/), Gatus | Better Stack, Checkly, Pingdom | Uptime Kuma self-hosted **on different infrastructure from the app**. A monitor that dies with the thing it monitors is not a monitor. |
| Session replay | [OpenReplay](https://temps.sh/blog/can-you-self-host-session-replay-2026) | PostHog, LogRocket, FullStory | Whatever the analytics choice already includes. |
| LLM tracing, if the product ships LLM features | [Langfuse](https://github.com/langfuse/langfuse), Phoenix | Langfuse Cloud, LangSmith, Braintrust | See Anti Drift. Choose one, not both. |

## Agent Safety

**Local today:** `/guard`, `/freeze`, `/careful`, `/delivery-gate`. All
instructions to a cooperative agent. The server is the boundary those
instructions describe.

| Need | Self-hosted | Hosted | Note |
| --- | --- | --- | --- |
| The agent cannot write outside its box | Coder, Docker Sandbox | Codespaces, E2B, Daytona | A container is not a request. |
| The agent cannot reach what it should not | Egress proxy, network policy | Cloud provider egress controls | Managed settings can name an approved MCP list; the network makes it true. |
| The agent cannot use an unapproved tool | [MCPJungle](https://github.com/mcpjungle/MCPJungle) | MintMCP, Obot, AWS MCP Gateway | The registry is the catalog agents discover from; the gateway controls access, routing, and logging. Pair with the managed-settings allowlist so the gateway is the only route and it holds the credentials. |
| Isolation you can prove, not just configure | [IronClaw](https://github.com/IronSecCo/ironclaw) | — | Watch-list, not an install: security-first self-hosted agents with provable isolation. Too young to trust today; the right shape to track for this row. |
| One login for every service in this report | [Authentik, Authelia, Keycloak](https://blog.elest.io/authentik-vs-authelia-vs-keycloak-choosing-the-right-self-hosted-identity-provider-in-2026/) | Okta, WorkOS, Google Workspace SSO | **The tax nobody budgets.** Twelve services means twelve auth systems unless one identity provider fronts them. Authentik is the 2026 default for greenfield self-hosting; Authelia is the lightweight reverse-proxy companion; Keycloak is heavier (~1GB RAM, steeper data model) and worth it mainly for Red Hat alignment. If most of your stack is SaaS, your existing Google or Okta tenant already solved this, which is one more quiet point for SaaS. |

**Budget identity before the twelfth service, not after.**

## Agent Only Assist

**Server: the browser, and only the browser.** Everything else here is
in-session behavior. A shared browser service converts five skills from "runs
on the developer's laptop" to "runs anywhere, including CI." See Testing for
the hosted and self-hosted options and the meter warning.

---

# Scaffolding and Harness

## Agents and Personas

The private plugin marketplace distributes agent definitions the same way it
distributes skills. Nothing further needed, hosted or otherwise.

## Harness Development

The eval infrastructure under Anti Drift and the telemetry under Token Savings.
A harness you cannot measure is a harness you cannot improve.

## Harness Setup

Managed settings, described under Pack Setup. The difference between agreeing
on a configuration and enforcing one.

## Token Savings

The highest-value item in this report, first-party, and free.

[Claude Code exports OpenTelemetry metrics and
events](https://code.claude.com/docs/en/monitoring-usage) with one environment
variable, into any OTLP backend, hosted or self-hosted.

| Signal | What it answers |
| --- | --- |
| `claude_code.cost.usage`, `claude_code.token.usage` | Team spend by model, split by cache hit and miss |
| `claude_code.session.count` | Sessions, tagged `fresh`, `resume`, `continue` |
| `claude_code.lines_of_code.count` | Lines added and removed, by model |
| `claude_code.commit.count`, `claude_code.pull_request.count` | Output that reached the repo, not just the terminal |
| `claude_code.code_edit_tool.decision` | Accept and reject counts per tool, with `decision_source` |
| Events: `user_prompt`, `api_request`, `api_error`, `api_refusal`, `tool_decision`, `tool_result`, `mcp_server_connection`, `plugin_loaded` | The behavioral trace |

Cost events carry `agent.name`, `skill.name`, and `plugin.name`. That converts
two guesses into measurements: `/context-budget` estimates what a skill costs
and this reports it; `/skill-stocktake` judges skills by reading while this
shows which are invoked. A skill burning real money and never invoked becomes a
deletion you can point at. All events share a `prompt.id`, so one prompt
correlates with every API call and tool decision that followed.

Prompt text is off by default. `OTEL_LOG_USER_PROMPTS`, `OTEL_LOG_TOOL_DETAILS`,
and `OTEL_LOG_RAW_API_BODIES` are opt-in; the metrics are useful without them.

**First-party dashboards also exist**, which an earlier draft of this report
wrongly denied. [The Team and Enterprise
dashboard](https://code.claude.com/docs/en/analytics) at
`claude.ai/analytics/claude-code` shows lines accepted, suggestion accept rate,
active users and sessions, plus contribution metrics once the GitHub app is
connected: PRs and lines shipped with Claude Code, a leaderboard, CSV export.
The Enterprise Analytics API returns per-user engagement, usage, and cost with
a `read:analytics` key; API customers get a Console dashboard and the Claude
Code Analytics API. Merged PRs containing Claude-assisted lines are labeled
`claude-code-assisted` in GitHub via conservative line-level matching over a
21-day window, excluding lock files and generated code, dropping attribution
when a developer rewrote more than 20 percent. Unavailable with Zero Data
Retention.

**LLM gateway**, if you need hard caps rather than measurement:
[LiteLLM](https://docs.litellm.ai/docs/simple_proxy) self-hosted gives virtual
keys with [budgets per key, team, org, and model that stop requests at the
cap](https://docs.litellm.ai/docs/proxy/users); Portkey and Helicone are the
hosted equivalents. [Otari](https://github.com/mozilla-ai/otari) (Mozilla AI)
is the lighter self-hosted alternative: OpenAI-compatible, virtual keys and
budgets across 40+ providers, without LiteLLM's operational stack. Two
caveats: LiteLLM self-hosted is Postgres, Redis, secret management, and
version pinning, and no gateway composes with Claude Code self-hosted
environments, which cannot route inference through one. Measure first; add
enforcement only if caps are genuinely needed.

## Anti Drift / Anti Hallucinations

**The biggest uncovered gap in the whole report.** This repo requires evals
whenever latent behavior changes. Nothing currently runs them on a schedule or
blocks a merge on them.

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| Evals as a required check | [Promptfoo](https://qaskills.sh/blog/promptfoo-complete-guide-2026) | [Braintrust](https://www.morphllm.com/comparisons/braintrust-vs-langsmith), LangSmith, Langfuse Cloud | **Promptfoo, self-hosted, wired as a required check.** MIT, evaluates prompts, models, RAG pipelines, agents, and endpoints against versioned test cases. Assertions include exact match, contains, regex, JSON schema, cost thresholds, latency limits, and LLM-graded evaluation, plus custom assertions in JS or Python. CLI exit codes make it a gate that blocks a merge below a threshold, and it flags when a new prompt version underperforms its baseline. Acquired by OpenAI on 2026-03-09 with a commitment to stay open source. |
| Eval history and traces | Langfuse | Langfuse Cloud (~$29 Pro, 50k units free), Braintrust ($249 Pro incl. 50k scores, then $2.50/1k), LangSmith ($2.50/1k traces after 5k free) | **Watch the meter.** Braintrust bills scores because evaluation is its product; LangSmith bills traces because monitoring is its. Both are per-activity and agents are the activity. Langfuse Cloud is the cheap middle and self-hosting it is always free. |
| Cross-model comparison | Promptfoo matrix runs | Braintrust | The server form of `/benchmark-models`. |

**This is the one recommendation in the report that enforces a rule the repo
already wrote and currently cannot enforce.**

## Context Setting / Memory

| Need | Approach | Note |
| --- | --- | --- |
| One code graph, not one per laptop | `graphify --mcp` | Starts a graphify MCP stdio server after the build so agents query the graph as a tool. A one-flag change that removes the class of problem where two people's graphs disagree. |
| Shared code index | gbrain on Supabase | The shared-brain mode, versus local PGLite. |
| Multi-repo search | Sourcebot or Sourcegraph | See Developing. |

**On vector databases:** [pgvector handles most cases up to tens of millions of
vectors with zero new infrastructure](https://rivestack.io/blog/pgvector-vs-qdrant);
Qdrant is the pick for low latency and complex metadata filtering, and Pinecone
or Qdrant Cloud are the hosted forms. **Do not add any of them as a third
memory system.** Graphify plus gbrain already hold project knowledge. Reach for
a vector store only when retrieval is a feature of the product you are
building.

## Knowledge Base

| Need | Self-hosted | Hosted | Pick |
| --- | --- | --- | --- |
| A wiki agents read and write | Tela (built-in MCP server) | Notion with its MCP server | Either. The property that matters is an MCP server, not the editor. Outline is humans-first and ships none, so agents reach it only through an integration you build. |
| A wiki that reviews as PRs | [Kherad](https://github.com/mohammadmaso/kherad) | — | Notion-like editing backed by real git commits with merge-request review, so wiki changes pass the same gate as code. Young project; trial before adopting. |
| Which tools agents may reach | MCPJungle | MintMCP, Obot | See Agent Safety. |

---

# The three you will forget to budget

1. **Identity.** Twelve self-hosted services means twelve login systems.
   Install it third, not twelfth. Mostly-SaaS stacks get this free from an
   existing Google or Okta tenant.
2. **The forge.** GitHub is the default and everything integrates with it.
   GitLab CE bundles CI, registry, and issues in one self-hosted install but
   wants 4GB minimum and 8GB to be comfortable; [Forgejo is the community
   default for almost any self-hosted git
   scenario](https://www.techverdict.io/articles/self-hosted-git-2026) at under
   100MB, idling at 40-80MB RAM, with a native registry and Actions-compatible
   runners.
3. **Backups, TLS, and upgrades** for anything you self-host. Every service
   holds state someone needs after an incident.

---

## What this actually costs

The published TCO analyses contradict each other, and the contradiction is the
useful part.

- One line of analysis puts five-year personnel cost at **$1.2-1.8M
  self-hosted versus $300-600K SaaS**, and calls it the deciding factor.
- Another concludes that for a typical small-to-medium team, **SaaS is 3-15x
  more expensive over five years** than self-hosting, even valuing engineering
  time at full market rates.
- Concrete numbers where sources agree: a self-hosted install runs roughly
  40 hours of experienced DevOps time to stand up, plus 20-30 hours a year
  maintaining. Other estimates put it at 50-100 hours initial and 5-10 hours
  monthly. A single self-hosted knowledge base is estimated at $4,500-13,000 a
  year all-in.
- SaaS has its own hidden costs: egress on exit is real, with a 100TB restore
  quoted at $9,000-12,000 in transfer fees, plus vendor management, renewals,
  and waiting on support tickets.

**The contradiction resolves by team shape, not by principle.** Under ten
people with no platform engineer, SaaS wins nearly everything, because the
scarce resource is attention and every self-hosted service spends it. Past
roughly thirty with a platform team, the per-activity services start winning on
cost because the marginal container is nearly free.

**A defensible default for this repo's readers:** buy the per-seat services,
self-host the per-activity ones, and count the identity provider before you
count the twelfth service.

---

## Three reference stacks

### SaaS-default (recommended for two to eight people)

| Service | Covers | Rough cost |
| --- | --- | --- |
| Claude Code telemetry into Grafana Cloud | HAR, DEV, MON, AGT | Free tier |
| Claude Code analytics dashboard | HAR | Included |
| Private plugin marketplace | HAR | A git repo |
| Linear | PM, PRI, DEV, SUP | ~$10/user/mo |
| GitHub: Actions, merge queue, rulesets, Packages | PRI, ARC, DEV, REV, DEP | Existing plan |
| Blacksmith or Namespace runners | DEV, REV | ~⅔ of GitHub minute cost |
| Qodana or Codacy | REV | ~$6-15/user/mo |
| GitGuardian | REV | Free under 25 devs |
| Vercel or Render previews | DEV, DEP | Usage |
| Sentry | DEV, DEP, MON, SUP | ~$26/mo Team |
| PostHog Cloud | PM, UX, PRI, DEP, MON, SUP | Free tier to start |
| Browserbase | AGT, DEV, MON, UX | $20-99/mo |
| Doppler or 1Password | DEP | Per seat |
| Notion or Mintlify | PM, SUP | Per seat or free tier |

Add self-hosted only where the meter bites: **Promptfoo** in CI (free, and the
evals gate this repo requires), **OpenGrep** in CI (free), **Lighthouse CI
server** (free, and the accessibility and performance gate), **Kroki** (tiny).

### Self-hosted (a named constraint forces it)

Everything above replaced by: OTel Collector plus SigNoz, Plane, Forgejo or
GitLab CE, OpenGrep, gitleaks, Dependency-Track, OWASP ZAP, Coolify, GlitchTip,
Uptime Kuma, Browserless, Infisical, Docmost, Kroki, Authentik. Budget a
part-time platform role and read the cost section again first.

### Hybrid (what most teams should actually land on)

SaaS for anything per-seat or low-volume; self-hosted for the five things that
are free, small, and metered elsewhere: **Promptfoo, OpenGrep, Lighthouse CI
server, Kroki, and the OTel collector.** Those five cost a day to set up, run
in containers nobody has to babysit, and cover the evals gate, the SAST gate,
the accessibility and performance gate, diagrams, and the telemetry pipeline.

---

## Adoption order

| Step | Install | Done when |
| --- | --- | --- |
| 1 | Claude Code telemetry into any OTLP backend; enable via managed settings | You can answer "what did the team spend last week, on which skills" without asking anyone |
| 2 | Required checks: gate tests, secret scan, OpenGrep, Lighthouse budgets | A PR failing any of them cannot be merged by anyone, including whoever configured them |
| 3 | Private plugin marketplace plus managed settings baseline | A new laptop reaches parity in two commands and no README |
| 4 | Preview environments; a browser service; ZAP against the preview | `/qa` and a DAST scan both run in CI against a real URL |
| 5 | Promptfoo as a required check on prompt and skill changes | A prompt regression fails the build the way a code regression does |
| 6 | Identity, before the service count grows | Every tool uses one login |
| 7 | Merge queue; PR review bot; SBOM into Dependency-Track | Main stays green under concurrent merges, and an agent-added dependency is a reviewable event |
| 8 | Tracker with an API agents can drive; helpdesk wired into it; Pact Broker if services are split | An agent moves ticket state without a person, and a breaking contract change cannot deploy |
| 9 | Sandboxed workspaces; MCP gateway; self-hosted environments if compliance requires | Agents cannot write outside a container, and tool credentials are off laptops |

Steps 1, 2, and 5 are most of the value, and all three are free. Do not start
at step 9 because it is the most interesting.

---

## Where no server is warranted

| RECSKILLS heading | Why it stays local |
| --- | --- |
| Starting Direction / Human Helper | Interview loops between one human and one agent. Nothing to enforce, nothing to aggregate. |
| Technical Stack Specific | Stack knowledge is context, not enforcement. The package registry constrains it indirectly. |
| Agents and Personas | The plugin marketplace already distributes them. |
| Business, beyond BI | Meeting notes and status updates are coordination, not infrastructure. |
| ponytail, `/context-save`, `/loose-ends` | Session behaviors. |
| A second memory system | Graphify plus gbrain already hold project knowledge. |
| Anything with no named owner | A service nobody owns is worse than the laptop tool it replaced, because people now trust it. This applies to a SaaS subscription nobody reads the dashboard of, too. |

---

## Corrections to earlier drafts

- **Wrong:** "No official admin or analytics API." First-party dashboards exist
  at `claude.ai/analytics/claude-code` and `platform.claude.com/claude-code`,
  plus an Enterprise Analytics API and a Claude Code Analytics API.
  OpenTelemetry is the real-time path, not the only path.
- **Wrong:** hand-rolled git commit trailers recommended for AI attribution.
  The `claude-code-assisted` GitHub label is computed line-by-line and is the
  better mechanism where available.
- **Wrong in framing, this revision's correction:** earlier drafts treated
  "server-side" as "self-hosted" and defaulted to open-source everywhere. That
  was a bias, not an argument, and the cost section contradicted it. SaaS
  delivers all three properties a server buys, and the default should be
  hosted with self-hosting on a named constraint.
- **New since the first draft:** Claude Code self-hosted environments, and the
  constraint that they cannot route inference through Bedrock, Vertex, Foundry,
  or an LLM gateway. Also, GitHub began metering self-hosted runner minutes in
  private repos on 1 March 2026.

---

## What this changes in docs/process/PROCESS-TEAM.md

| Section | Change |
| --- | --- |
| Layer 4 gates | Required status checks become the enforcement point. Pre-commit hooks are the fast local echo of a server check, not the check. Add DAST and evals as gate types. |
| Layer 5 shared knowledge | Add the MCP gateway and registry as the access layer, and `graphify --mcp` as the one-flag shared-index change. |
| Layer 6 harness parity | "Commit `.claude/`" becomes "commit it, publish it as a private plugin, push the policy floor via managed settings, and bake it into the workspace image." |
| Layer 7 observability | Claude Code telemetry plus the analytics dashboard replace ccusage and AgentsView as the source of truth. |
| Team tool tier | Split it by delivery model, and add the per-seat versus per-activity pricing lens as the selection rule. |
| Ownership table | Add owners for the telemetry pipeline, the gate, the marketplace, identity, the deploy platform, and each SaaS subscription. |
| Anti-patterns | Add "a server nobody owns," "twelve services and twelve logins," and "a metered subscription priced before you added agents." |
| New | A support layer, which the document lacks entirely. |
| New | An evals gate. The repo requires evals for latent behavior and has no mechanism that enforces it. |

---

## Sources

Vendor pages are marketing; treat performance, benchmark, and pricing claims as
unverified and re-check prices before committing.

**Claude Code first-party:** [monitoring and
OpenTelemetry](https://code.claude.com/docs/en/monitoring-usage) ·
[analytics](https://code.claude.com/docs/en/analytics) · [GitHub
Actions](https://code.claude.com/docs/en/github-actions) · [self-hosted
environments](https://code.claude.com/docs/en/self-hosted-environments) ·
[plugin marketplaces](https://code.claude.com/docs/en/plugin-marketplaces) ·
[metrics in
CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/coding-agents-claude-code.html)

**Pricing and delivery model:** [self-hosted vs SaaS
TCO](https://unfoldcms.com/blog/self-hosted-vs-saas-cms-five-year-tco) ·
[GitHub runner pricing change and
alternatives](https://northflank.com/blog/github-pricing-change-self-hosted-alternatives-github-actions)
· [managed runner
comparison](https://tenki.cloud/blog/github-actions-runner-showdown-2026) ·
[Linear pricing](https://costbench.com/software/developer-tools/linear/) ·
[Jira vs Linear](https://costbench.com/compare/jira-vs-linear/) · [Mintlify
pricing](https://www.featurebase.app/blog/mintlify-pricing) · [code quality
platform pricing](https://dev.to/rahulxsingh/deepsource-vs-qodana-code-quality-platforms-compared-2026-152a)
· [Codacy vs
SonarQube](https://dev.to/rahulxsingh/codacy-vs-sonarqube-code-quality-platforms-compared-2026-35d2)
· [SonarQube Community Build
limits](https://costbench.com/software/developer-tools/sonarqube/free-plan/) ·
[Percy vs Chromatic vs Argos](https://argos-ci.com/blog/percy-vs-chromatic-vs-argos)
· [Braintrust vs
LangSmith](https://www.morphllm.com/comparisons/braintrust-vs-langsmith) ·
[flag platform
comparison](https://www.growthbook.io/insights/growthbook-vs-launchdarkly-vs-statsig)
· [observability platform
pricing](https://devsecops.ae/observability-platforms-2026/) · [Sentry vs
Datadog](https://gaxonline.com/vs/sentry-vs-datadog/) · [cloud browser
comparison](https://apiscout.dev/guides/browserbase-vs-steel-vs-hyperbrowser-browser-infrastructure-2026)
· [AppSec tool
pricing](https://weavai.app/blog/en/2026/05/01/2026-aikido-security-review-is-all-in-one-appsec-worth-300/)
and [GitGuardian
alternatives](https://www.aikido.dev/blog/top-gitguardian-alternatives)

**Code review, quality, testing:** [SonarQube AI Code
Assurance](https://docs.sonarsource.com/sonarqube-server/2026.1/quality-standards-administration/ai-code-assurance/overview)
· [Opengrep](https://www.opengrep.dev/) and [the license
split](https://socket.dev/blog/opengrep-forks-semgrep) · [AI review
tools](https://wetheflywheel.com/en/guides/best-ai-code-review-tools-2026/) ·
[merge queues](https://graphite.com/guides/merge-queue-tools-options) ·
[Aviator vs Graphite](https://www.aviator.co/aviator-vs-graphite) · [Trunk
flaky tests](https://trunk.io/flaky-tests) ·
[ReportPortal](https://qualflare.com/reportportal-alternative/) · [Pact
contract testing](https://qaskills.sh/blog/pact-contract-testing-complete-guide-2026)
· [visual testing tools](https://testguild.com/visual-validation-tools/) ·
[Lighthouse CI server](https://unlighthouse.dev/learn-lighthouse/lighthouse-ci/server)

**Evals and agent operations:** [Promptfoo
guide](https://qaskills.sh/blog/promptfoo-complete-guide-2026) ·
[Langfuse](https://github.com/langfuse/langfuse) · [self-hosted browser
automation](https://sliplane.io/blog/5-awesome-browserless-alternatives) · [MCP
registries](https://www.truefoundry.com/blog/best-mcp-registries) ·
[MCPJungle](https://github.com/mcpjungle/MCPJungle) · [LiteLLM
proxy](https://docs.litellm.ai/docs/simple_proxy) and
[budgets](https://docs.litellm.ai/docs/proxy/users)

**Security and supply chain:** [Renovate and Dependabot as a malware
path](https://blog.gitguardian.com/renovate-dependabot-the-new-malware-delivery-system/)
· [Dependency-Track in
practice](https://engineering.backbase.com/2026/04/14/dependency-track/) ·
[open-source vulnerability
management](https://defectdojo.com/blog/top-11-open-source-vulnerability-management-tools-for-2026)
· [Harbor with
Trivy](https://oneuptime.com/blog/post/2026-02-08-how-to-run-harbor-container-registry-with-vulnerability-scanning/view)
· [OWASP ZAP in
CI](https://oneuptime.com/blog/post/2026-01-25-owasp-zap-api-security/view) ·
[Wazuh and Falco](https://wazuh.com/blog/cloud-native-security-with-wazuh-and-falco/)
· [open-source secrets
management](https://infisical.com/blog/open-source-secrets-management-devops) ·
[self-hosted identity
providers](https://blog.elest.io/authentik-vs-authelia-vs-keycloak-choosing-the-right-self-hosted-identity-provider-in-2026/)

**Product, design, architecture, ops:** [PostHog
review](https://work-management.org/analytics/posthog-review/) · [Penpot vs
Figma](https://hedrick.io/post/penpot-vs-figma) · [self-hosted Linear
alternatives](https://openalternative.co/alternatives/linear) ·
[self-hosted web analytics](https://openpanel.dev/articles/self-hosted-web-analytics)
· [Metabase review](https://valiotti.com/metabase-review/) · [Backstage
alternatives](https://encore.dev/articles/backstage-alternatives) ·
[Kroki](https://kroki.io/) and [Structurizr
community tooling](https://docs.structurizr.com/community) · [Coder dev
containers](https://coder.com/docs/admin/integrations/devcontainers) ·
[Sourcebot](https://github.com/sourcebot-dev/sourcebot) · [Argo CD PR preview
environments](https://oneuptime.com/blog/post/2026-02-09-argocd-pr-preview-environments/view)
· [Coolify vs
Dokploy](https://introserv.com/blog/dokploy-vs-coolify-complete-comparison-of-the-best-self-hosted-paas-platforms-for-vps-and-dedicated-servers-2026/)
· [Flagger vs Argo
Rollouts](https://oneuptime.com/blog/post/2026-03-13-flagger-vs-argo-rollouts-comparison/view)
· [Grafana alternatives and SigNoz](https://signoz.io/blog/grafana-alternatives/)
· [Uptime Kuma
alternatives](https://betterstack.com/community/comparisons/uptime-kuma-alternative/)
· [self-hosted session
replay](https://temps.sh/blog/can-you-self-host-session-replay-2026) ·
[self-hosted Zendesk alternatives](https://selfhosting.sh/replace/zendesk/) ·
[self-hosted wiki tools](https://contabo.com/blog/best-self-hosted-wiki-tools/)
· [self-hosted git forges](https://www.techverdict.io/articles/self-hosted-git-2026)
· [Fastlane](https://fastlane.tools/) ·
[Postiz](https://teqvolt.com/open-source/postiz-29-6k-star-open-source-social-scheduler-buffer-alternative)
· [Listmonk](https://listmonk.app/) · [self-hosted scrapers for
agents](https://fastcrw.com/blog/best-self-hosted-scrapers) · [pgvector vs
Qdrant](https://rivestack.io/blog/pgvector-vs-qdrant)
