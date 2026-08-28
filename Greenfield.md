# Setting Up a Full AI Workflow for a Team

One document, four questions answered in order:

1. **What is the process?** A lifecycle of five phases and 24 stages, each with
   a named skill that produces the artifact the next stage reads.
2. **What has to be shared?** Eight coordination layers that turn several
   developers running agents into one codebase instead of five dialects of one.
3. **What belongs on a server?** The gates that stop being optional the moment
   they leave a laptop, plus the rule for deciding hosted versus self-hosted.
4. **What does it cost?** Four complete stacks at $95, $250, $1,200, and $5,000
   a month for five people, with the give-ups named per stage.

Part 6 answers a fifth: **what if we run trunk-based development?** It states
the six deltas against everything above, since the default assumed here is
short-lived branches with stacked PRs.

Written for a team of two to nine developers where agents generate most of the
implementation output. Prices are list prices from public sources as of August
2026; re-check before committing.

---

## The problem agents create for a team

Before agents, a team's consistency came from people reading each other's code.
Three things break that:

1. **Volume outruns review.** Agents generate more diff per hour than humans
   can read carefully. Review that depends on human attention silently becomes
   review that depends on human skimming.
2. **Every harness is configured differently.** One person's `~/.claude` has one
   set of packs, another has a different set, a third is on Codex. The same
   ticket produces three dialects of the same repo.
3. **Parallel agents collide.** Two sessions editing the same file is not a
   merge conflict problem, it is a "both agents were confidently wrong about the
   other half" problem.

## Five rules the whole thing hangs on

- **Canon lives in the repo, not in heads and not in `~/.claude`.** If it is not
  versioned and committed, it is not shared, and half the team's agents have
  never read it.
- **Every stage leaves an artifact the next stage reads.** Ideation leaves a
  spec, the spec leaves tickets, tickets leave PRs, PRs leave learnings. No
  stage starts from a blank page.
- **Every gate is a machine.** Human review is for judgment. Anything a check
  could catch, a check catches, because at agent volume the human will
  eventually miss it.
- **A gate on a laptop is not a gate.** `--no-verify` skips a pre-commit hook, a
  fresh clone may never install it, and an agent told to work around a red hook
  will. A required status check on a protected branch is not skippable by the
  person who wants to skip it. Pre-commit is the fast local echo of the server
  check, not the check.
- **Buy per-seat, self-host per-activity.** An AI-enabled team is few humans with
  enormous activity per human. Per-seat tools stay cheap while throughput grows.
  Per-activity tools bill you for exactly the thing you added agents to increase.

Everything below is an implementation of one of those five.

---

# Part 1: The lifecycle

Five phases. **Setup** runs once per repo. **Define** runs once per product or
major initiative. **Build** is the loop you live in, once per ticket. **Ship**
runs per release. **Maintain** runs weekly and monthly, forever.

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

## Phase 0: Setup (once per repo)

**1. Bootstrap.** `/agent-sort` builds an evidence-backed install plan for this
specific repo, sorting skills into a DAILY set and a parked LIBRARY, so you load
what the project needs instead of everything. `/setup-pre-commit` for format,
typecheck, and test on every commit. `/security-gitleaks` on day one, because
installing it over a polluted history makes CI permanently red.
`/optimize-permissions` to kill permission-prompt friction. `/setup-deploy` so
`/land-and-deploy` works later. Brownfield repos add `/codebase-onboarding` for
the architecture map and a starter CLAUDE.md.

**Team difference:** run `/agent-sort` once and **commit the result**. Everyone
loads the same DAILY set. This is where harness parity starts.

## Phase 1: Define (per product or major initiative)

**2. Ideation.** `/office-hours` interrogates whether the business idea is worth
building at all. `/grill-me` stress-tests the plan until every weak decision
breaks or survives; `/grill-with-docs` leaves ADRs and a glossary behind as it
goes. `/pm-brief` audits whether you understand the problem well enough to act,
before a PRD exists to be wrong.

**3. Product research.** `/research` captures primary-source investigation as
markdown in the repo, so findings persist past the session.
`/competitive-platform-analysis` then `/benchmark-methodology` then
`/competitive-report-structure` is a real three-stage pipeline: scope the
competitor set, score it across nine dimensions, assemble a decision-grade
report. `/interview-guide` plus `/user-interview` plus
`/user-research-synthesis` covers the human side end to end.

**4. Business plan.** `/write-prod-strategy` produces the 7-component strategy
doc. `/define-north-star` picks and validates the one metric it answers to.
`/plan-ceo-review` is the founder-mode gate before committing a quarter.

**5. PRD.** `/prd-draft` asks clarifying questions then drafts.
`/prd-review-panel` fans it to seven parallel reviewers (engineer, designer,
exec, legal, UX research, skeptic, customer voice). On a team this still earns
its place: seven parallel reviewers is cheaper than seven calendars, and
`--perspectives` runs the subset the real reviewers do not cover. `/spec` turns
the approved intent into an executable spec in five phases, which is the
artifact the Build loop implements against.

**6. Technical, data, and visual design.** Three tracks in parallel, each
leaving a doc the loop reads.

- *Technical:* `/codebase-design` for deep-module vocabulary,
  `/domain-modeling` to pin the ubiquitous language before names calcify wrong,
  `/design-an-interface` for three genuinely different designs of each key API,
  `/contract-first` for anything with multiple consumers.
- *Data:* `/supabase-postgres-best-practices` before touching a Postgres schema,
  `/database-migrations` for change strategy. Record versions in
  `docs/architecture/STACK.MD`.
- *Visual:* `/design-consultation` researches the space and proposes a complete
  design system with previews; its output becomes `docs/DESIGN.md`, which
  everything downstream obeys. `/design-shotgun` generates competing variants on
  a comparison board so you pick with eyes, not adjectives. `/taste-skill` bakes
  anti-generic standards in so the UI does not ship looking like every AI app.

**7. Architecture governance.** Starts here and never stops.
`/architecture-decision-records` captures ADRs in-session as decisions happen.
`/write-adr` plus `/adr-decision-extraction` mines a design conversation for the
decisions it already contains. `/constitution` writes project non-negotiables as
numbered, testable rules a review can cite by number.

**8. Measurement.** Decide what success looks like before building, wire the
instruments during. `/metrics-framework` maps north star down to shippable
metrics. `/feature-metrics` applies STEDII so the numbers survive an experiment.
`/impact-sizing` puts driver trees and confidence levels behind prioritization.
`/analytics` is the wiring: event taxonomy, funnels, consent gating, PII
scrubbing. The PM skills say what to measure; this one makes the events exist.

**9. Decomposition.** `/to-tickets` breaks the spec into tracer-bullet tickets,
each declaring its blocking edges, published to the tracker. On a team those
edges are what let two people pick non-conflicting work without asking each
other. `/intent-driven-development` writes scoped, verifiable acceptance
criteria onto each ticket before implementation; those criteria are the contract
between whoever wrote the ticket and the agent that executes it, and what the
merge gate later checks against. `/triage` is the intake valve for inbound
issues and external PRs. `/wayfinder` handles work bigger than one session can
hold.

## Phase 2: Build (the loop, per ticket)

```
pick ticket -> worktree -> implement (TDD) -> commit -> RoboRev per commit
     ^                                                        |
     |                                            fix findings (bounded loop)
     |                                                        |
     +---- next ticket <---- /stack-ship (gate + PR + adversarial review)
```

**10. The loop.** `EnterWorktree` gives each ticket its own worktree so parallel
sessions never collide. **Stax** gives stacked branches: small dependent PRs
instead of one monster diff, because small PRs are the only PRs that get
reviewed properly at agent volume. `/implement` or `/tdd` builds against the
ticket's acceptance criteria. `/roborev-refine` reviews every commit and closes
the fix-and-re-review loop with a cap. `/stack-ship` ships the branch: RoboRev
gate with bounded auto-fix, squash-submit one clean PR via stax, adversarial
review on the PR, version bump.

**11. Testing and QA.** Review checks the diff; QA checks the running product.
Both, always. `/tdd-workflow` for enforced unit, integration, and E2E coverage.
`/e2e-testing` for Playwright patterns and flaky-test strategy. `/qa` drives the
real app in a browser and fixes what it finds; `/qa-only` reports without
touching. `/test gaps` cross-references tests against source for untested
branches and error paths. Underneath all of it, gate tests: deterministic, free,
under two seconds, every commit, in CI too.

**12. Accessibility.** Not a retrofit. `/accessibility` for WCAG 2.2 AA design
and audit, `/frontend-a11y` for the implementation patterns. Runs inside the
loop for any UI ticket.

**13. Code review.** `/code-review` reviews along two axes in parallel:
Standards against the repo's documented conventions, and Spec against what the
ticket actually asked. The Spec axis is what generic reviewers miss and what a
team most needs, because the reviewer did not attend the conversation.
`/codex review` adds a different vendor's model on the same diff.
`/receiving-code-review` is the half teams skip: processing feedback with
verification rather than blind implementation. Agents implement wrong review
feedback enthusiastically.

**14. The merge gate.** The last door before main. `/stack-ship` is the gate
itself. `/z-adversarial-review` is the reason it holds: a blinded four-key
review (spec, acceptance criteria, diff, throwaway worktree) handed to a fresh
reviewer holding nothing else, plus skeptic sub-agents on non-trivial diffs, and
those seats can run on other vendors' CLIs for cross-provider blind spots.
`/unlazy` writes runnable acceptance gates to GATES.md before execution and
blocks completion until they pass, which is what makes unattended agent work
safe to leave running.

**15. Debugging.** `/investigate` for systematic root cause, `/orch-fix-defect`
for the disciplined path: reproduce as a failing regression test, fix to green,
review, gated commit. Every bug ships with the test that would have caught it.

## Phase 3: Ship (per release)

**16. Deploy.** `/canary <url> --baseline` **before** deploying, to capture
screenshots, console error counts, and load times as the comparison point.
`/land-and-deploy` to ship. `/launch-checklist` for product launches as opposed
to routine deploys.

**17. Post-deploy watch.** `/canary <url>` for the ten-minute watch against the
baseline. `/benchmark <url>` for TTFB, FCP, LCP, and bundle sizes versus
baseline. `/monitoring` for uptime, health checks, and alerts, so you learn it is
down before customers do.

**18. Marketing.** `/brand-voice` builds a source-derived style profile once;
every other content skill consumes it, so nothing ships in default-AI voice.
Then `/marketing-campaign`, `/landing-copy`, `/seo`, and `/content-engine` as the
launch demands.

## Phase 4: Maintain (recurring)

**19. AI slop cleanup.** `/clean-ai-slop` per branch before shipping: tombstone
comments, restate-the-code comments, defensive try/catch, `any` casts, style
drift. `/review-llm-artifacts` then `/verify-llm-artifacts` then
`/fix-llm-artifacts` monthly, with a verification stage between finding and
deleting so cleanup does not become breakage. `/ui-slop-score` and
`/anti-ui-slop` for how generic the UI looks.

**20. Codebase health.** `/health` weekly. `/ponytail-audit` monthly for the
whole-repo over-engineering hunt, the counterweight to months of additive work.
`/quality-dead-code-analyzer` for dead code, duplicates, and circular deps.
`/ponytail-debt` harvests deliberate shortcut comments into a ledger so corners
get revisited instead of rotting.

**21. Documentation.** `/document-release` at the end of every Ship phase.
`/quality-docs-update` monthly, auditing all docs against the codebase via
parallel agents. Stale canon is worse than no canon, because agents follow it
confidently. `/writing-for-agents` for the docs agents read: skills, CLAUDE.md,
AGENTS.md. Different audience, different rules.

**22. Security.** Layered: `/security-gitleaks` continuously,
`/security-review` in-loop whenever a ticket touches auth, user input, secrets,
endpoints, or payments, `/cso` as the periodic audit (`--diff` per branch,
`--comprehensive` monthly), `/differential-review` on a specific risky diff, and
`/threat-modeling` producing mitigations that land in the backlog and the test
suite, closing the loop back into Phase 1.

**23. Retro and learning.** The mechanism that makes every other stage improve.
`/retro` weekly. `/learn` into `docs/LEARNINGS.md` as things happen.
`/feature-results` after launch data accrues: did the PRD's hypothesis survive
contact with users. `/loose-ends` at session end for bugs mentioned but not
fixed. `/skillify` the second time anyone runs the same manual flow; on a team
the payoff multiplies by headcount.

**24. Context and harness hygiene.** `/context-save` and `/context-restore` as
the pause/resume button for multi-day work. `/handoff` compacts a session into a
document, which on a team is also the person-to-person handoff. `/graphify`
holds the codebase as a queryable knowledge graph so architecture questions get
answered from the graph instead of grep. `/config-gc` and `/context-budget`
quarterly.

---

# Part 2: The eight coordination layers

The lifecycle above is not the hard part on a team. Coordination is. These
layers are what has to be installed, versioned, and enforced so that five people
running agents produce one codebase.

The one skill that states the whole operating model is `/ai-first-engineering`.
Run it once when setting team process, review gates, and ownership. Everything
below implements whatever it decides.

## Layer 1: Canon, what every agent reads

The highest-value team investment. Every agent session on every machine starts
by reading these files.

| Artifact | Role |
| --- | --- |
| `CLAUDE.md` + `docs/rules/` committed | The instruction set every session loads. Split by domain (CODING, TESTING, SAFETY, WORKFLOW, SERVICES, DELEGATION) so sessions load what applies. |
| `/constitution` | Non-negotiables as numbered, testable rules. The thing a review can cite by number. |
| `/coding-standards` | Naming, readability, immutability. The Standards axis of `/code-review` reads this; without it that axis has nothing to check against. |
| `/domain-modeling` | The ubiquitous language. Two developers using different words for one concept build two subsystems for one concept. |
| `/contract-first` | Typed schema and API contracts both sides import. What lets two people evolve two services without field drift. |
| `docs/DESIGN.md` | The visual canon, from `/design-consultation`. |
| `/git-workflow` | Branching, commit conventions, merge versus rebase, agreed once and written down. |

Keeping canon readable *by agents* is a different job from keeping it readable
by people: `/writing-for-agents` to author it, `/claude-md-improver` to repair a
CLAUDE.md that accumulated cruft, `/rules-distill` to pull cross-cutting
principles out of twelve skills into one rule file, `/living-docs-governance` to
assign each doc a constitution, map, status, or history role.

**The test:** clone the repo to a fresh machine, open an agent, ask it to
implement a ticket. If the output matches house style with nobody in the room,
the canon layer works.

## Layer 2: The work queue

One tracker, machine-readable, with tickets an agent can execute without a
conversation first. `/to-tickets` and `/intent-driven-development` from stage 9
fill it. `/writing-plans` produces implementation plans written for an engineer
with zero codebase context, which is exactly what a fresh agent session is.
`/prioritize` decides what gets picked up next.

**Labels are the agent contract.** The pattern worth copying: an agent builds
the oldest safe issue carrying a `ready` label, and a reviewer audits the
resulting PR against its linked issue contract and required CI, posting a
verdict and labels without ever merging. A label vocabulary agents can read
turns the tracker into a queue that drains itself. It only works if the tracker
has an API, and ideally an MCP server, that an agent can reach with no person in
the loop.

**Tracker choice:** GitHub Issues plus Projects when the code is already on
GitHub. Linear when the team has non-engineers in the loop. Plane when it has to
be self-hosted; it ships a native MCP server.

## Layer 3: Isolation, so parallel agents do not collide

| Tool | Role |
| --- | --- |
| `EnterWorktree` | One claim, one worktree. The single mechanical change that makes parallel agent work safe. |
| Worktrunk | Worktree management once 2+ parallel sessions per person is routine. |
| Stax | Stacked branches. Small PRs are the only PRs reviewed properly at agent volume. |
| `docs/rules/SERVICES.md` | One concern, one directory, no shared mutable state beyond defined contracts. Collision prevention at the architecture level beats collision prevention at the git level. |
| `/freeze` and `/guard` | Directory-scoped edits and destructive-command warnings, for when someone runs a long autonomous job while others work. |

Beyond one person's sessions: `/parallel-execution-optimizer` and
`/dispatching-parallel-agents` decide what actually fans out safely.
`/team-agent-orchestration` is the closest thing in the catalog to a team-shaped
orchestration model: work items, ownership, an agent Kanban, merge gates.
`/ralphinho-rfc-pipeline` when parallelism has outgrown a Kanban.

**Rule of thumb:** fan out only when the units are genuinely independent and the
time saved beats the agent cost. Serial is correct more often than it feels.

## Layer 4: Gates, what actually blocks a merge

Layer 1 tells agents what to do. This layer is what happens when they do not.
Every row is a machine, not an agreement.

**Local, free, fast (the echo, not the gate):** `/setup-pre-commit` for format,
typecheck, and test. Gate tests under two seconds. `/security-gitleaks`.
`/plankton-code-quality` for write-time fixes on every file edit.
`/git-guardrails-claude-code` to block `push`, `reset --hard`, `clean`, and
`branch -D` before an agent runs them.

**Per commit and per PR:** RoboRev on every commit, the only review that scales
linearly with output. `/code-review` on both axes. `/pr-quality-checklist` and
`/code-review-standards` for a severity vocabulary (CRITICAL / HIGH / MEDIUM /
LOW) so "blocking" stops being a matter of mood.

**The gate that cannot be talked around:** `/stack-ship` running
`/z-adversarial-review`. `/santa-method` is the lighter version: two independent
review agents must both pass, with a convergence loop.

**Stop hooks, what blocks an agent from claiming it is done:**
`/delivery-gate` detects rationalization patterns, `/unlazy` blocks completion
until GATES.md passes, `/verification-before-completion` demands evidence before
assertions: run the command, show the output, then claim success.

**On the server, and this is the part that makes the layer real:** required
status checks on a protected branch. Gate tests, secret scan, SAST, and
Lighthouse budgets configured as required checks cannot be merged past by
anyone, including whoever configured them. Branch protection is the backstop.
The agent pipeline should have satisfied every check before a human looks.

**Do not let a PR review bot replace the blinded review.**
`/z-adversarial-review` works because the reviewer never saw the conversation. A
bot sees the diff and the description, which is weaker. Run both.

## Layer 5: Shared knowledge

The team's second-hardest problem after collisions: person B's agent does not
know what person A's agent learned.

- **Graphify**, one graph per repo, not one per developer. Run it with
  `graphify --mcp` so agents query the graph as a tool over a shared server;
  that one flag removes the class of problem where two people's graphs disagree.
- **A wiki with an MCP server** so agents read and write the same knowledge
  humans do. Tela self-hosted, or Notion with its MCP server. Outline is
  humans-first and ships none, so agents only reach it through an integration you
  build.
- **Sourcebot or Sourcegraph** for multi-repo code search; Graphify is the
  single-repo answer.
- `/handoff`, `/context-save`, and `/context-restore` for paused work.
  `/context-save list --all` lists checkpoints from every branch, which is how
  you find paused work across parallel streams.

**Onboarding, human and agent.** New people and fresh agents have the same
problem, so the same tools serve both: `/codebase-onboarding` for the
architecture map and entry points, `/code-tour` for a CODE_TOUR.md with a
diagram of how the pieces connect, `/teach` for one concept inside this
workspace.

## Layer 6: Harness parity

Five differently-configured harnesses on one repo is five codebases wearing a
trench coat.

| Move | Why |
| --- | --- |
| Commit `.claude/` | Agents, skills, hooks, and settings versioned in the repo, not in each home directory. The single most important line in this document. |
| Publish it as a **private plugin marketplace** | A git repo with `.claude-plugin/marketplace.json` bundling skills, agents, hooks, and MCP definitions. Everyone installs the same set with one command. Distribution through Organization settings requires the repo to be private or internal. |
| Push a policy floor via **managed settings** | Delivered by MDM, file placement, or the admin console, and not overridable per machine. The difference between agreeing on a configuration and enforcing one. |
| `/agent-sort` once, committed | The DAILY versus parked LIBRARY split, agreed and shared. |
| `/skill-comply` | Generates scenarios at three strictness levels, runs agents, classifies behavior. The only tool here that answers "is our canon real or decorative." |
| `/fewer-permission-prompts` + `/update-config` | A shared project allowlist so nobody approves the same safe command forty times a day. |

**Mixed CLIs are normal, plan for them.** Some of the team will be on Codex,
Cursor, or Gemini. Prefer packs that ship multi-runtime adapters, and keep an
`AGENTS.md` alongside `CLAUDE.md` so non-Claude agents read the same canon.

## Layer 7: Observability

Answering "what did the agents do, was it good, what did it cost" is a team
question. Alone you were there for all of it.

**The highest-value item in this entire document is first-party and free.**
Claude Code exports OpenTelemetry metrics and events with one environment
variable, into any OTLP backend, hosted or self-hosted:

| Signal | What it answers |
| --- | --- |
| `claude_code.cost.usage`, `claude_code.token.usage` | Team spend by model, split by cache hit and miss |
| `claude_code.session.count` | Sessions, tagged `fresh`, `resume`, `continue` |
| `claude_code.lines_of_code.count` | Lines added and removed, by model |
| `claude_code.commit.count`, `claude_code.pull_request.count` | Output that reached the repo, not just the terminal |
| `claude_code.code_edit_tool.decision` | Accept and reject counts per tool, with `decision_source` |
| Events: `user_prompt`, `api_request`, `api_error`, `tool_decision`, `tool_result`, `mcp_server_connection`, `plugin_loaded` | The behavioral trace |

Cost events carry `agent.name`, `skill.name`, and `plugin.name`. That converts
two guesses into measurements: `/context-budget` estimates what a skill costs
and this reports it; `/skill-stocktake` judges skills by reading them while this
shows which are actually invoked. A skill burning real money and never invoked
becomes a deletion you can point at. All events share a `prompt.id`, so one
prompt correlates with every API call and tool decision that followed. Prompt
text is off by default and opt-in.

First-party dashboards also exist on Team and Enterprise plans: lines accepted,
suggestion accept rate, active users and sessions, plus PRs and lines shipped
once the GitHub app is connected, with CSV export and an Enterprise Analytics
API. Merged PRs containing Claude-assisted lines get labeled in GitHub by
line-level matching. Unavailable with Zero Data Retention.

If you need hard caps rather than measurement, an LLM gateway (LiteLLM
self-hosted, or Portkey and Helicone hosted) gives virtual keys with budgets per
key, team, org, and model that stop requests at the cap. Measure first. Note
that no gateway composes with Claude Code self-hosted environments.

Alongside it: `/health` weekly, `/code-quality-scoring` for the version of
health you can show a non-engineer, `/devex-review` when onboarding keeps taking
three days.

## Layer 8: The human layer

What stays human, and the tooling that keeps the human parts short.

**Decisions.** Two human gates, and only two: humans approve the plan and
approve the merge, agents do everything between. For contested decisions,
`/council` (four voices) or the plan reviews (`/plan-eng-review`,
`/plan-ceo-review`, `/plan-design-review`, `/plan-devex-review`), with
`/autoplan` to run all four sequentially. `/decision-doc` captures the outcome
with rationale and alternatives.

**Comms.** `/internal-comms` for 3P updates (Progress, Plans, Problems),
`/status-update` and `/slack-message` for routine ones, `/meeting-notes` to turn
a transcript into decisions and action items that become tickets via
`/to-tickets`.

**When you cannot answer.** `/to-questionnaire` turns a decision you cannot
fully answer into a questionnaire for the person who can, which is a better
artifact than a meeting.

---

# Part 3: What belongs on a server

## Server-side is not the same as self-hosted

Two independent decisions, and conflating them is the most expensive mistake
here.

**Decision one: does this belong on a server at all?** Three properties decide
it, and every recommendation below claims at least one.

1. **Enforcement that is not opt-in.** See rule four above.
2. **A view across everyone.** Local tools report what your laptop spent.
   Nothing local reports what the team spent, which skills earned their token
   cost, or which agent added the dependency that just failed a CVE scan.
3. **Continuity.** Laptops get reimaged and sessions get cleared. Servers keep
   the history a retro, a cost review, or a post-mortem needs.

**Decision two: who runs it?** All three properties hold identically whether the
server is in your VPC or someone else's. SaaS *is* server-side. It buys the same
enforcement, aggregation, and continuity, and adds no on-call surface, a vendor
who tracks the ecosystem, and time-to-value in an afternoon.

**So the default is SaaS.** Self-host on a named constraint: data residency
written into a contract, an air-gap policy, source that cannot reach a third
party, a punitive meter at your volume, a platform you already run, or no hosted
option existing. Anything else is preference. Preference is allowed, but budget
it as preference, not as engineering.

## The pricing lens

| Billing model | Examples | Effect on an agent-heavy team |
| --- | --- | --- |
| Per seat or per contributor | Linear ($10-16), Jira ($7.91-17), Codacy ($15), Qodana ($6) | Cheap and stays cheap. Buy these. |
| Per monthly active user | Most flag vendors | Uncorrelated with agent output. Safe. |
| Per event or error | Sentry (~$26 Team, ~5k free) | Mostly production traffic. Watch it, but fine. |
| Per snapshot, trace, score, or scan | Chromatic ($179/35k snapshots, $0.008 over), Percy (from $599), Braintrust ($2.50/1k scores), LangSmith ($2.50/1k traces) | **Dangerous.** Agents open more PRs, so more snapshots, traces, and evals. Model your bill at 5x current PR volume before signing. |
| Per compute minute or GB | GitHub Actions minutes, Browserbase (~$0.10-0.12/browser hour) | **Dangerous.** GitHub announced a $0.002/minute platform fee on self-hosted runners in private repos for 1 March 2026, then shelved it before the effective date after community pushback, with no new date set. Self-hosted runners in private repos stay free for now, but GitHub has said the charge could return in some form, so don't architect around "free forever." |

The practical rule: buy the per-seat services, and put the per-activity ones
where the meter cannot reach you. That lands on exactly the categories where
self-hosting is cheapest to run: static analysis, visual regression, evals,
browsers, and observability ingest.

## The picks, by category

| Need | Pick | Note |
| --- | --- | --- |
| Move execution off laptops | The **Claude Code GitHub Action**, plus **self-hosted environments** if compliance requires | The Action runs Claude Code inside a workflow, interactive on `@claude` or automated on any event including cron. `plugin_marketplaces` installs your private marketplace into the CI run, so the same skills run server-side as locally. OIDC removes long-lived secrets. Self-hosted environments run cloud sessions on runners inside your network; checkouts and secrets stay on your machines, the control plane stays Anthropic-hosted, and inference cannot route through Bedrock, Vertex, Foundry, or a gateway. |
| Faster CI | Blacksmith, Namespace, or Depot managed runners | Roughly 2-3x GitHub's speed at about a third less cost. Depot if Docker builds are the bottleneck. The self-hosted-runner platform fee announced for March 2026 was shelved before taking effect, so self-hosting stays a live free option, but a paused decision, not a permanent one. |
| Static analysis as a PR gate | **OpenGrep** free in CI as the floor; add **Qodana** (~$6/contributor) or **Codacy** (~$15/user) for a managed dashboard | SonarQube Community Build analyzes only the main branch: no branch analysis, no PR decoration. Since the entire argument is gating the PR, the free tier does not deliver it. That is Developer Edition, ~$2,500/year at 100K LOC. Buy it only if AI Code Assurance specifically is the requirement. |
| Secrets | gitleaks in CI **and** GitGuardian (free under 25 developers) | Day one. Adding it over a polluted history makes CI permanently red. |
| Dependencies | **Dependency-Track** | Ingests an SBOM per build and re-analyzes daily against NVD and GitHub Advisories, so a package that turns vulnerable next month surfaces without a new build. The justification: an agent installs whatever dependency it decides it needs, by whatever method it thinks of. |
| The running app (DAST) | **OWASP ZAP** baseline scans | Under five minutes, so PR-viable. Needs preview environments to have a target; the two purchases compound. |
| Accessibility and performance as a check | **Lighthouse CI server**, self-hosted | Free, small, and `budget.json` assertions turn FCP, LCP, TBT, CLS, and the accessibility score into pass or fail per PR. Converts two lifecycle stages into required checks with one install. Add Pa11y for the WCAG rule detail Lighthouse only scores. |
| Visual regression | **BackstopJS** self-hosted, or Chromatic if you have run the numbers | The textbook per-activity trap. Chromatic is free to 5k snapshots then $179 for 35k. |
| **Evals as a required check** | **Promptfoo**, self-hosted | The biggest uncovered gap on most teams. Evaluates prompts, models, RAG pipelines, agents, and endpoints against versioned test cases; assertions cover exact match, regex, JSON schema, cost thresholds, latency limits, and LLM-graded evaluation. CLI exit codes make it a gate that blocks a merge below a threshold, and it flags when a new prompt version underperforms its baseline. **This enforces the rule most AI-first repos write and cannot currently enforce.** |
| A URL to QA against | Preview environments (Vercel, Render, Coolify, Argo CD PR generator) | The single highest-value purchase for a product with a UI: `/qa` runs in CI against a real URL instead of one person's localhost, and DAST gets a target. |
| A browser that is not on a laptop | Browserbase, Hyperbrowser, or Steel; Browserless self-hosted | Unlocks five skills at once: `/browse`, `/qa`, `/scrape`, `/canary`, `/benchmark` all need Chrome. All expose a Playwright-compatible WebSocket, so migration is a connection string. |
| Keep the gate credible | Trunk Flaky Tests | Tracks pass/fail history per commit and quarantines automatically. Agent-written tests raise absolute flake count even at a constant rate. |
| Keep main green | GitHub's native merge queue on public repos, free on any plan; on **private** repos it requires Enterprise Cloud ($21/user); Graphite, Mergify, or Aviator work on Team without the upgrade | Graphite is the closest server-side counterpart to stax. On private repos, the merge queue and SSO/SCIM are the same purchase, so price them together. |
| Contracts that break the build | Pact Broker or PactFlow | The machine form of service boundaries, and the only thing here that actually stops a breaking cross-service change. `can-i-deploy` gates the deploy. |
| Agent containment | Coder or devcontainers; an MCP gateway such as MCPJungle | `/guard` and `/freeze` are requests to a cooperative agent. A container is a boundary. Pair the gateway with the managed-settings allowlist so it is the only route and it holds the credentials. |
| Identity | One provider in front of everything | **The tax nobody budgets.** Twelve services means twelve auth systems unless one IdP fronts them. Install it around step six, not after the twelfth service. A mostly-SaaS stack gets this free from an existing Google or Okta tenant, which is one more quiet point for SaaS. |

## Where no server is warranted

| Category | Why it stays local |
| --- | --- |
| Ideation and interview loops | One human and one agent. Nothing to enforce, nothing to aggregate. |
| Stack-specific knowledge | Context, not enforcement. The package registry constrains it indirectly. |
| Agent definitions and personas | The plugin marketplace already distributes them. |
| Meeting notes, status updates | Coordination, not infrastructure. |
| Session behaviors (`/context-save`, `/loose-ends`) | Nothing crosses a machine boundary. |
| A second memory system | Graphify plus a shared brain already hold project knowledge. A third adds sync problems, not recall. |
| **Anything with no named owner** | A service nobody owns is worse than the laptop tool it replaced, because people now trust it. This applies to a SaaS subscription nobody reads the dashboard of, too. |

---

# Part 4: The stack, with prices

Four complete stacks for two to nine developers. The **on-machine** layer is
deliberately near-constant across all four, because the harness is where the
process lives and swapping it per budget tier would be churn. The **hosted**
layer is where they differ.

| Stack | Optimizes for | Monthly, 5 people |
| --- | --- | --- |
| **A. Least overhead** | Fewest vendors, fewest logins, most free tiers, nothing to babysit | ~$225-260 |
| **B. Best in class** | The strongest tool per stage that per-seat pricing keeps sane | ~$900-1,500 |
| **C. Cost no object** | The strongest tool per stage, full stop | $5,000+ |
| **D. Cheapest** | Minimum dollars, with the give-ups named | ~$95-110 |

A and D are not the same axis. A minimizes attention and vendors, D minimizes
dollars, and D pays the difference in enforcement, parity, and someone's
evenings.

## The constant: on the development machine

| Layer | Tools |
| --- | --- |
| The agent | Claude Code (Team Standard ~$25/seat, Premium ~$100-125 for the heavy agent users) |
| Editor | VS Code free, Zed free (Claude Code as an external agent via ACP), or Cursor Pro $20 |
| Skill packs, committed | The operational spine plus the engineering spine, distributed via the private plugin marketplace |
| The loop CLIs | stax, RoboRev, the tracker CLI, Graphify |
| Env parity | Devbox: check in `devbox.json` and `devbox.lock` and a clone works on every laptop |
| API work | Bruno (collections as plain files in git, no account) |
| Local safety | Pre-commit, git guardrails, `/guard` and `/freeze` |
| Diagrams | Excalidraw for sketches; Mermaid or Structurizr DSL in the repo, rendered by Kroki |

## By stage

**Ideation.** A: Excalidraw free plus FigJam free. B: **FigJam via the Figma
seat** you already buy for Design, so the whiteboard rides along at no marginal
vendor. C: Miro Business ($20/user). D: Excalidraw, $0, giving up workshop
templates.

**Research.** A and D: Tally free (genuinely unlimited forms and responses,
where Typeform free caps at 10 responses a month) plus PostHog surveys;
synthesis stays on-machine via `/user-research-synthesis`. B: Tally Pro ($29
flat). C: Dovetail (~$29-49/editor) plus Maze plus an AI-moderated panel service
(~$25/interview, 24-hour turnaround) compressing 4-6 week qualitative cycles to
under a day.

**Specification.** A and D: GitHub Issues and Projects, free, driven by agents
through the CLI; specs as markdown in the repo. B: **Linear** ($10 Basic / $16
Business) plus Notion Business ($20/user) holding PRDs, strategy, and research
with AI search across all of it. On-prem lane: Plane (native MCP server) plus
Docmost. C: adds Port or OpsLevel as the service catalog. Do not buy Backstage;
it is a framework you build and maintain, not a product you install.

**Design.** A: Figma free Starter; the design *system* lives in DESIGN.md and
Storybook, not in the tool. B: **Figma Professional** ($16 full / $12 dev / $3
collab, annual) plus Storybook in-repo plus v0 (~$25, one shared account) for
throwaway prototypes. On-prem lane: Penpot, self-hostable, SVG-native, free dev
handoff with no paid seat. C: Figma Organization ($55 full / $25 dev; ~$13,200/yr
for 20 full seats) plus Lovable. D: Figma Starter's 3-file cap, prototypes from
the harness instead.

**Development.** A and B: **GitHub Team at $4/user** is the widest hosted
multi-stage product in this document: one seat covers specification
(Issues/Projects), development (repo, Codespaces), test (Actions), deliver
(merge queue, Packages, Pages), and maintain (Dependabot, security alerts). B
adds Blacksmith or Namespace runners and the Claude Code GitHub Action. C adds
GitHub Enterprise ($21/user), Coder self-hosted workspaces, Claude Code
self-hosted environments, and cross-repo code intelligence (~$59/user). D drops
to GitHub Free, which is where the structural give-ups live: **no branch
protection on private repos, so the entire gate layer is voluntary.**

Managed Postgres, all stacks: Supabase Pro ($25/mo org, database plus auth,
storage, realtime, functions, and already an MCP server in this harness) or Neon
(~$15) when scale-to-zero fits intermittent load.

**Test.** A: GitHub required checks running gate tests, gitleaks, OpenGrep, and
GitGuardian. Four free gates: deterministic tests, secrets twice, SAST.
Enforcement without a bill. B: stack A **plus** self-hosted Promptfoo (the evals
gate), Lighthouse CI server (a11y and perf budgets per PR), BackstopJS, Trunk
Flaky Tests, and Qodana or Codacy for the managed dashboard. That is the hybrid
rule in action: the per-activity meters self-host, the per-seat dashboard is
bought. C: swaps BackstopJS for Chromatic and Promptfoo's dashboard for
Braintrust, adds Browserbase so `/qa`, `/canary`, and `/benchmark` run in CI, and
adds QA Wolf (~$8k/mo floor, contracts $60k-250k/yr) as the outsourced QA
department. D: the free gate set inside 2,000 free Actions minutes, enforced only
if repos are public or GitHub Team is bought.

**Deliver.** A: Railway (~$10-20) or Render (Starter $7 plus a $25 flat
workspace fee for **PR previews with database copies**, the sleeper feature that
upgrades the whole Test stage) plus Doppler or Infisical free plus Statsig or
GrowthBook Cloud free. B: adds GrowthBook Pro or keeps PostHog's flags, plus
Postiz and Listmonk for launch marketing. On-prem lane: Coolify with native
per-branch previews, or Argo CD plus Rollouts for metric-driven auto-rollback.
C: Vercel Enterprise or Kubernetes with Argo Rollouts, LaunchDarkly (~$25k/yr
entry, which is governance pricing), Harbor, Vault, and a merge platform. D: one
Hetzner box with Coolify (~EUR 10) doing deploys, previews, and Postgres
backups, giving up a PaaS SLA and requiring a named owner.

**Maintain.** A: **Sentry Team ($26**, and spike protection actually caps
surprise bills) plus **Grafana Cloud free receiving Claude Code's own OTel
telemetry** plus Uptime Kuma self-hosted **on different infrastructure from the
app** (a monitor that dies with the thing it monitors is not a monitor) plus
PostHog Cloud free. B: adds Better Stack (EU residency, bundling uptime, status
page, and on-call, so one vendor replaces three) plus paid PostHog (analytics,
replay, flags, experiments, surveys, errors in one product) plus Chatwoot wired
into Linear, which closes the support-as-product-input loop most process docs
lack a layer for, plus self-hosted Renovate and Dependency-Track. C: Datadog
plus incident.io ($45/user, all-in with on-call and status pages) plus Amplitude
plus Aikido (~$300 flat, SAST + SCA + secrets + cloud + runtime in one bill). D:
free tiers, giving up seats, retention, and on-call.

## Multi-stage products worth buying once

If one of these is in your stack, do not buy a single-stage competitor for a
stage it already covers.

| Product | Covers |
| --- | --- |
| GitHub ($4 Team seat) | Specification, development, test, deliver, maintain |
| Claude Code + committed packs | All eight stages, on the machine |
| PostHog | Research surveys, flags, experiments, analytics, replay, errors |
| Figma subscription | Ideation (FigJam), design, design specs |
| Notion Business | Research notes, specification, docs, AI search across all three |
| Better Stack | Uptime, status page, on-call, logs |
| Supabase | Development, deliver, maintain (logs and advisors via MCP) |
| Sentry | Release health, deliver, maintain |

## Rolled up

**Stack A (~$225-260/mo).** GitHub Team $20 · Claude Code Team Standard $125 ·
Sentry $26 · Railway ~$20 · Supabase Pro $25 · one small VPS ~$7 · everything
else on free tiers. Six vendors with bills. The trade: free tiers have caps, and
the day one is hit is the day you revisit.

**Stack B (~$900-1,500/mo).** Stack A plus Claude Code Premium seats for the two
heaviest agent users · Linear $50-80 · Notion Business $100 · Figma ~$60 mixed
seats · managed runners ~$50-150 · Qodana $30 · Trunk Flaky Tests · GrowthBook
Pro $200 · Better Stack ~$50-100 · PostHog usage · v0 $25 · Tally Pro $29, plus
the five self-hosted freebies (Promptfoo, OpenGrep, Lighthouse CI, Kroki, OTel
collector) on one ~$10 VPS or inside CI. A dozen vendors, nearly all per-seat or
flat-fee. The two metered exceptions to watch are runner minutes and PostHog
usage, which are the two an agent can run away with.

**Stack C ($5,000+/mo, $13k+ with QA Wolf).** The defensible version of C is not
"buy everything." It is stack B plus the three things money genuinely upgrades:
**QA Wolf** (a QA department), **Datadog plus incident.io** (an ops department),
and **Dovetail plus panel interviews** (a research department). The rest of C is
diminishing returns over B.

**Stack D (~$95-110/mo).** Five individual Pro accounts ~$85 · one Hetzner and
Coolify box ~$11 · everything else free. Two bills and a box. What it gives up,
in order of how much it hurts:

1. **Enforcement.** GitHub Free has no branch protection on private repos, so
   every gate is voluntary. This contradicts rule three. The first $20 this team
   ever spends should be GitHub Team to buy it back, or go public and get it free.
2. **Parity and visibility.** Individual accounts mean no managed settings, no
   org analytics, no marketplace distribution through org settings. Layers 6 and
   7 run on trust.
3. **Agent capacity.** Individual usage limits cap the agents themselves: the
   least visible give-up and the one that most directly caps output.
4. **An owner's evenings.** The box replaces every PaaS SLA with a named person.

The upgrade ladder out of D: GitHub Team ($20 total) first, Claude Team seats
(central admin plus managed settings) second, Sentry Team ($26) third, then
Railway and Supabase Pro. That sequence converts D into A at roughly $225-260,
which is the argument that **A, not D, is the real floor** for a team that
intends to stay one.

---

# Part 5: Adoption sequence

Do not install this all at once. Each week makes the next one cheaper. Weeks 1
through 5 are the team layers; 6 through 8 are the server layers that make them
enforceable. Steps 1, 2, and 6 are most of the value, and nearly all of it is
free.

| Week | Install | Done when |
| --- | --- | --- |
| 1 | **Canon and local gates.** CLAUDE.md plus `docs/rules/` committed, `/constitution`, `/coding-standards`, `/setup-pre-commit`, `/security-gitleaks`, gate tests in CI | A fresh clone plus a fresh agent produces house-style code with nobody in the room |
| 2 | **Queue and isolation.** One tracker with a label vocabulary, `/to-tickets`, `/intent-driven-development`, worktree-per-claim, stax | Two people can pick work without asking each other, and neither branch touches the other's files |
| 3 | **The merge gate.** RoboRev on every commit, `/code-review`, `/stack-ship` with `/z-adversarial-review`, branch protection requiring all three | Nothing reaches main that no machine reviewed |
| 4 | **Knowledge and parity.** `.claude/` committed and published as a private plugin marketplace, managed settings baseline, `/agent-sort` DAILY set agreed, Graphify indexed with `--mcp`, `/codebase-onboarding` written | A new laptop reaches parity in two commands and no README, and a new hire ships a real ticket on day two |
| 5 | **Telemetry.** Claude Code OTel into any OTLP backend, enabled via managed settings; `/health` and `/retro` weekly | You can answer "what did the team spend last week, on which skills" without asking anyone |
| 6 | **Required checks.** Gate tests, secret scan, OpenGrep, Lighthouse budgets, all as required status checks | A PR failing any of them cannot be merged by anyone, including whoever configured them |
| 7 | **Preview environments, a browser service, ZAP against the preview, Promptfoo as a required check on prompt and skill changes** | `/qa` and a DAST scan both run in CI against a real URL, and a prompt regression fails the build the way a code regression does |
| 8 | **Identity, before the service count grows.** Then merge queue, a PR review bot, SBOM into Dependency-Track | Every tool uses one login, main stays green under concurrent merges, and an agent-added dependency is a reviewable event |

Later, on a named trigger: sandboxed workspaces and an MCP gateway when agent
containment matters; Pact Broker when services split; self-hosted environments
when compliance requires it. Do not start there because it is the most
interesting.

**Put the cadence on a cron** so it does not depend on anyone remembering:

| When | Run |
| --- | --- |
| Every session end | `/loose-ends`, `/learn` when something was learned |
| Every branch | `/clean-ai-slop`, `/cso --diff` when the diff warrants it |
| Weekly | `/retro`, `/health` |
| Monthly | `/ponytail-audit`, the LLM-artifact cleanup chain, `/cso --comprehensive`, `/quality-docs-update`, `/config-gc`, `/context-budget` |
| Quarterly | `/skill-comply`, `/skill-stocktake`, `/rules-distill` |
| On repeat of any manual flow | `/skillify` |

---

# Scaling by team size

| Size | What changes |
| --- | --- |
| **2 to 3** | Canon plus gates plus a shared tracker is enough. Skip merge queues, formal ownership, and orchestration frameworks. Worktrees per claim, stax for stacking, RoboRev on every commit. Contracts matter as soon as two people own two services. Stack A. |
| **4 to 8** | Add named ownership per service directory and per shared tool. Add a severity-tagged review vocabulary so "blocking" means the same thing to everyone. Add an agent-readable wiki: at this size knowledge stops fitting in repo docs. Add `/team-agent-orchestration` when the Kanban stops being obvious. Stack B. |
| **9+** | Merge queue becomes real, not optional. `/ralphinho-rfc-pipeline` for DAG execution across work units. `/skill-comply` quarterly, because at this size canon drifts silently. Separate deploy owner and on-call rotation. A real secrets manager instead of `.env` files. `/context-budget` becomes a budget line, not a curiosity. |

# Ownership

Every shared tool needs a name against it, or it rots. The list is short on
purpose.

| Surface | Owner's job |
| --- | --- |
| CLAUDE.md and `docs/rules/` | Reviews every change to canon. Runs `/rules-distill` and `/claude-md-improver` quarterly. |
| The gate | Owns pre-commit, CI, RoboRev config, required checks, branch protection. Fixes a red gate as first priority; a red gate that is normal is not a gate. |
| The shared `.claude/` set and the marketplace | Owns the DAILY versus LIBRARY split, pack upgrades, and the managed-settings floor. Runs `/skill-stocktake` and `/config-gc`. |
| The telemetry pipeline | Owns the OTel collector and the dashboard. Answers the weekly "what did the agents do and what did it cost." |
| Contracts and schemas | Owns `contracts/`. Any cross-service change is a schema version bump with both sides updated in the same PR. |
| Design system | Owns `docs/DESIGN.md` and its Storybook. Rejects UI that deviates without a decision. |
| Deploy and on-call | Owns deploy config, canary baselines, alerting. |
| Identity | Owns the IdP and who has access to what. |
| Cost | Reads the telemetry and `/context-budget` monthly, raises it before finance does. |
| Each SaaS subscription | Someone reads the dashboard. Otherwise cancel it. |

# Anti-patterns

- **Canon in `~/.claude` instead of the repo.** The most common failure. Half
  the team's agents have never read your rules.
- **A gate that is normally red.** Once red is normal, the gate is decoration
  and everyone merges past it.
- **A gate that only exists on a laptop.** A hook is a file in a repo.
  `--no-verify` skips it. If it is not a required status check, it is advice.
- **Skipping `/receiving-code-review`.** Agents implement review feedback
  blindly and enthusiastically, including the wrong feedback. Verification of
  the suggestion is part of the review.
- **One giant PR because agents made it fast.** Stack it. Review quality falls
  off a cliff with diff size, and agent-authored diffs get large by default.
- **Trusting a review the agent could see coming.** If the reviewer sat in the
  conversation that produced the code, it is not an independent review. That is
  the entire reason the adversarial review is blinded.
- **Different packs per person.** Two reviewers with different standards skills
  produce contradictory review comments and a team that stops trusting review.
- **Fan-out as a default.** Parallel agents on coupled work produce conflicting
  confident changes. Fan out only on genuinely disjoint units.
- **A metered subscription priced before you added agents.** Model the bill at
  5x current PR volume, then decide.
- **Twelve services and twelve logins.** Budget identity before the twelfth
  service, not after.
- **A server nobody owns.** Worse than the laptop tool it replaced, because
  people now trust it.

---

# Part 6: The trunk-based variant

Everything above assumes branches: a worktree per ticket, a stack of dependent
PRs, and a heavyweight blinded review at the door. That is a default, not a
requirement. Trunk-based development works with this process, and for an
agent-heavy team it fits better than it first looks, because agents are bad at
exactly the thing long-lived branches produce: a week of divergence they cannot
see, reasoned about from a context window that never held both sides.

Six things change. Two of them are load-bearing and free, so this is not an
expensive variant. It is a differently-shaped one.

## 1. Stacks become a queue, not a tree

Stax in Part 1 is a review-sizing device: split one large agent diff into three
reviewable ones. That stays correct under trunk-based **only if every branch in
the stack merges the day it opens.** A six-deep stack sitting for a week is
long-lived branching wearing a stax hat.

Two rules make it work: cap stack depth at roughly three, and flatten anything
that cannot land within 24 hours into a single change behind a flag. Worktrees
are unaffected and get more correct, not less: a short-lived branch is a
short-lived worktree.

## 2. Feature flags stop being optional

Part 4 lists flags under Deliver as "ship dark, enable later," a stack B
nicety. Under trunk-based they are how incomplete work reaches trunk at all,
which promotes them to day one in **every** stack including D. Statsig free
(no seat cap, 2M events/mo) covers a 5-10 person team at $0; GrowthBook Cloud's
free tier caps at 3 users, so past that use self-hosted GrowthBook (OSS, no
caps) rather than Cloud. PostHog already includes flags if it is in the stack.

For work too large to hide behind a boolean, the answer is branch-by-abstraction,
not a long branch: introduce the seam, land it, migrate callers incrementally,
delete the old path. `/design-an-interface` and `/contract-first` from stage 6
are what make that seam exist in the first place.

## 3. The gate gets tiered, because it cannot all be blocking

This is the change teams skip and then blame trunk-based for. The binding
constraint under trunk-based is **merge latency**. A 25-minute blocking gate
means nobody merges five times a day, and a gate people route around is
decoration. Split it three ways.

| Tier | What runs | Budget | Failure means |
| --- | --- | --- | --- |
| **Local** | Gate tests, gitleaks, format, typecheck | Under 2s | Commit blocked |
| **Per-PR, required checks** | Changed-package tests, OpenGrep, secret scan, Lighthouse budgets on changed routes, sampled Promptfoo suite, RoboRev, `/code-review` on both axes | Under 10 min | Merge blocked |
| **Post-merge on trunk** | Full E2E, visual regression, ZAP against the preview, the full eval suite, `/z-adversarial-review` on flagged paths, `/cso` | Nightly or per merge batch | **Revert**, then fix forward |

That last row carries a discipline the branch-based version does not need:
**on trunk, revert first and diagnose second.** Agents produce a clean revert
commit reliably and attempt heroic forward fixes on a red trunk unreliably.
Write the revert rule into `docs/rules/WORKFLOW.md` with a stated time limit so
it is canon rather than instinct.

## 4. The merge queue moves from "later, at 9+ people" to week three

In Part 2 the merge queue is a scaling item. Under trunk-based it is core, and
the reason is semantic conflicts rather than textual ones: two PRs that each
pass green against the trunk they branched from, and break each other after
landing. Agent volume makes that a daily event instead of a monthly one.

A merge queue tests each PR against the actual post-merge state of trunk before
letting it in. GitHub's native one is free on public repos on any plan; on
**private** repos it requires Enterprise Cloud ($21/user), which also buys
SSO/SCIM, so price it as one decision rather than a stack-A freebie. Below
that tier, Graphite, Mergify, or Aviator deliver the same queue on Team.
Either way this is a week-three, not a 9+-people, priority under trunk-based.

## 5. Adversarial review gets risk-tiered instead of universal

Blocking every 200-line PR on a blinded four-key review with skeptic subagents
is what kills merge cadence, and a gate that kills cadence gets routed around.

Keep RoboRev per commit and `/code-review`'s Standards and Spec axes as the
blocking pair. Run `/z-adversarial-review` **blocking** only on flagged paths:
auth, payments, schema and migrations, `contracts/`, prompts and skills, and
anything the security review would have caught. Everywhere else it runs
post-merge against trunk on a nightly cadence, with findings filed as tickets
through `/triage`.

The bar does not drop. Some of it moves after the merge, and the revert rule in
tier three is what pays for that move. If you are not willing to revert on
trunk, do not make this trade.

## 6. CI speed stops being a cost decision

Part 3 puts managed runners under cost: roughly 2-3x faster at about a third
less than GitHub minutes. Under trunk-based, CI latency **is** the merge rate,
so Blacksmith, Namespace, or Depot move into stack A. Slow CI under trunk-based
does not get skipped, it gets batched, and batching is precisely what
trunk-based exists to prevent.

## What changes in the stacks

Three rows move up, and all three are free or near-free.

| Item | Branch-based default | Trunk-based |
| --- | --- | --- |
| Feature flags | Stack B, Deliver stage | **Stack A and D, day one.** Statsig's free tier has no seat cap (2M events/mo) and fits a 5-10 person team outright; GrowthBook Cloud's free tier caps at 3 users, so past that size use self-hosted GrowthBook (fully OSS, no caps) instead of Cloud. |
| Merge queue | Step 8, or 9+ people | **Week 3, stack A on public repos** (GitHub native, free); on private repos it needs Enterprise Cloud ($21/user) or a third-party queue (Graphite, Mergify) on Team. |
| Managed runners | Stack B, a cost play | **Stack A, structural.** ~$50-150/mo usage. |
| Preview environments | Per PR | Per PR **and** a permanent trunk-tracking staging environment, because post-merge detection now carries real weight. |
| Progressive rollout | Stack C (Argo Rollouts, LaunchDarkly) | Worth pulling into B: automated metric-driven rollback is the safety net that pre-merge review used to be. The PaaS instant-rollback button is the cheap version. |

Net effect on stack A: roughly $50-150 a month for runners, plus the merge
queue's Enterprise-or-third-party fork on private repos above.

## Two new anti-patterns and one new owner

- **A stack that outlives the day.** If it did not merge today, it is a
  long-lived branch and you are not doing trunk-based, whatever the diagram says.
- **A flag that outlives its feature.** Every stale flag is a permanent
  untested code path and a branch an agent will reason about wrongly. Flags need
  the same ledger-and-cleanup cadence as `/ponytail-debt`: a monthly sweep that
  deletes flags at 100% or 0% rollout, and an expiry date on every flag at
  creation.
- **Fixing forward on a red trunk.** Stop the line, revert, then diagnose in a
  branch like everyone else.

The new owner is **trunk health**, with a stated revert SLA. Somebody's job is
"trunk is green," and stop-the-line has to mean something, or trunk-based
degrades into everyone committing to main and hoping.

## What does not change

Canon, harness parity, telemetry, the work queue, the artifact chain, service
boundaries, ownership, and the adoption sequence through week 5. Worktree per
claim gets more correct. The blinded review still exists, it just runs on a
different schedule for most diffs. Every one of the five rules at the top holds
unchanged.

## When trunk-based is the wrong call here

Three cases. Release-gated software where a version ships to customers on a
schedule and cannot be flag-controlled. Regulated changes needing pre-merge
sign-off recorded per change, where moving review after the merge fails an
audit. And a team that will not revert: without tier-three revert discipline,
trunk-based moves risk after the merge and then does nothing about it, which is
strictly worse than the branch-based default.

---

# What to do first, whichever stack

1. **Commit the canon** and the `.claude/` directory. Free, and everything else
   assumes it.
2. **Turn on the free gates as required checks**: gate tests, gitleaks,
   OpenGrep. Free, and this is the line between a process and a preference.
3. **Wire Claude Code telemetry** into whatever observability you picked. One
   environment variable, and it buys per-skill cost attribution.
4. **Publish the skill packs as a private plugin marketplace** and push a
   managed-settings floor. A git repo and a settings file.
5. **Get PR preview URLs.** They upgrade Test and Deliver at the same time and
   give DAST a target.
6. **Add Promptfoo as a required check** on prompt and skill changes. The evals
   rule most AI-first teams have written and cannot currently enforce.

Steps 1 through 4 are free. Step 5 is $25 a month. That is the whole
enforcement layer for the price of one lunch.

---

**The short version:** commit the canon, machine every gate, put the machines on
a server where nobody can skip them, isolate on claim, buy per-seat and
self-host per-activity, and give every shared tool a name. Everything above is
an implementation of one of those six.
