# Team Tooling for an AI-Enabled Codebase

Several developers, one repo, every one of them running agents. A third route
through the same catalog as docs/process/PROCESS.md, organized by the shared tooling
layer rather than by lifecycle stage, because on a team the lifecycle is not
the hard part. Coordination is.

docs/process/PROCESS.md is the lifecycle. docs/process/PROCESS-SOLO.md is the one-person cut.
docs/process/PROCESS-TEAM-TRUNK.md is the trunk-based alternative to this
document: one shared branch, branches that merge the same day, incomplete work
merged dark behind a flag. It is self-contained and folds in the server-side
picks, so pick it or this pair, not both. This document answers a narrower
question: what has to be installed, versioned, and enforced so that five people
running agents on one codebase produce one codebase.

## The problem agents create for a team

Before agents, a team's consistency came from people reading each other's code.
Three things break that:

1. **Volume outruns review.** Agents generate more diff per hour than humans
   can read carefully. Review that depends on human attention silently becomes
   review that depends on human skimming.
2. **Every harness is configured differently.** One person's `~/.claude` has
   ECC, another has gstack, a third is on Codex. The same ticket produces three
   dialects of the same repo.
3. **Parallel agents collide.** Two sessions editing the same file is not a
   merge conflict problem, it is a "both agents were confidently wrong about
   the other half" problem.

Three rules follow:

- **Canon lives in the repo, not in heads and not in `~/.claude`.** If it is
  not versioned and committed, it is not shared, and half the team's agents
  have never read it.
- **Every gate is a machine.** Human review is for judgment. Anything a check
  could catch, a check catches, because with agent-scale volume the human will
  eventually miss it.
- **Work is claimed from a queue and isolated on claim.** Claim, branch,
  isolate, merge through a gate. In that order, every time.

The one skill that states the whole operating model: **`/ai-first-engineering`
(ECC)**, the engineering model for teams where agents generate a large share of
implementation output. Run it once when setting team process, review gates, and
ownership rules. Everything below is the tooling that implements whatever it
decides.

---

## Layer 1: Canon, what every agent reads

The single highest-value team investment. Every agent session on every machine
starts by reading these files. Get them right once and five people's agents
converge instead of diverging.

| Tool | From | Role |
| --- | --- | --- |
| `CLAUDE.md` + `docs/rules/` committed | this repo | The instruction set every session loads. Rules split by domain (CODING, TESTING, SAFETY, WORKFLOW, SERVICES, DELEGATION) so sessions load what applies rather than everything. |
| `/constitution` | rsc-harness | Project non-negotiables as numbered, testable rules later phases obey. Stack canon, quality bars, security and a11y floors. The thing a review can cite by number. |
| `/coding-standards` | ECC | Baseline conventions for naming, readability, immutability. The Standards axis of `/code-review` reads this; without it, that axis has nothing to check against. |
| `/domain-modeling` | mattpocock | The ubiquitous language. Two developers using different words for the same concept produces two subsystems for the same concept. |
| `/contract-first` | ECC | Typed schema and API contracts in `contracts/` that both sides import. The mechanism that lets two people evolve two services without field drift. |
| `/architecture-decision-records` | ECC | ADRs captured in-session as decisions happen. `/write-adr` and `/adr-decision-extraction` (Beagle) mine a design conversation for the decisions it already contains. |
| `docs/DESIGN.md` | gstack `/design-consultation` | The visual canon. `/anti-ui-slop document` (uizze) generates it from existing code when the design system is already implicit in the app. |
| `/git-workflow` | ECC | Branching strategy, commit conventions, merge versus rebase, agreed once and written down. |

Keeping canon readable by agents, which is a different job from keeping it
readable by people:

- `/writing-for-agents` (mattpocock) for authoring the rules, skills, CLAUDE.md
  and AGENTS.md themselves.
- `/claude-md-improver` (official) to audit and repair a CLAUDE.md that has
  accumulated cruft.
- `/rules-distill` (ECC) to pull cross-cutting principles out of accumulated
  skills and into rule files, so the same instruction is not repeated in twelve
  places.
- `/living-docs-governance` (ECC) assigns each existing doc a constitution,
  map, status, or history role and wires the harness to keep them current.
- `/quality-docs-update` (zcaceres) audits docs against the codebase via
  parallel agents. Run it monthly; stale canon is worse than no canon, because
  agents follow it confidently.

**The test:** clone the repo to a fresh machine, open an agent, ask it to
implement a ticket. If the output matches house style without anyone in the
room, the canon layer works.

---

## Layer 2: The work queue

One tracker, machine-readable, with tickets an agent can execute without a
conversation first.

| Tool | From | Role |
| --- | --- | --- |
| `/to-tickets` | mattpocock | Breaks a spec into tracer-bullet tickets, each declaring its blocking edges, published to the configured tracker. Edges are what let two people pick non-conflicting work without asking each other. |
| `/intent-driven-development` | ECC | Scoped, verifiable acceptance criteria on each ticket, written before implementation. On a team these criteria are the contract between the person who wrote the ticket and the agent that executes it. |
| `/writing-plans` | claude-mpm | Implementation plans in bite-sized tasks for engineers with zero codebase context, which is exactly what a fresh agent session is. |
| `/triage` | mattpocock | State machine for inbound issues and external PRs: categorise, verify, grill, then write an agent-ready brief. The intake valve. |
| `/wayfinder` | mattpocock | Work larger than one agent session can hold, planned as a shared map of decision tickets resolved one at a time. The multi-person version of a long project. |
| `/codemyspec:product three-amigos <story_id>` | CodeMySpec | Example Mapping on one story, pulling business, dev, and test perspectives into concrete examples. The one planning ceremony that stays worth doing with humans in the room. |
| `/prioritize` | PM OS | LNO framework (Leverage, Neutral, Overhead) to classify what actually gets picked up next. |

**Labels are the agent contract.** The pattern worth copying is GSD's:
`gsd-loop-build` builds the oldest safe issue labeled `gsd:ready`, and
`gsd-loop-review` audits the resulting PR against its linked issue contract and
required CI, posting a verdict and labels without ever merging. A label
vocabulary that agents can read turns the tracker into a queue that drains
itself. super-board packages exactly this loop for GitHub Projects: drag a
card to Ready and a Claude Code build, QA, and review cycle runs to a merged
PR. Tiny project (double digits of stars); trial it on a low-stakes repo
before trusting it with the queue.

**Tracker choice:** GitHub Issues plus Projects when the code is already on
GitHub (agents drive it via `/gh-cli` and `/github-ops`). Linear when the team
has non-engineers in the loop, via `/create-tickets` (PM OS) or `/project`
(zcaceres). Kata for local-first tracking when you want the queue in the repo
rather than a SaaS.

---

## Layer 3: Isolation, so parallel agents do not collide

| Tool | From | Role |
| --- | --- | --- |
| `EnterWorktree` / `/using-git-worktrees` / `/git-worktrees` | native / Superpowers / claude-mpm | One claim, one worktree. Native tool first, skill as fallback. This is the single mechanical change that makes parallel agent work safe. |
| Worktrunk | tool | Worktree management once 2+ parallel sessions per person is routine. Native `EnterWorktree` covers the single-session case; Worktrunk covers a team's worth. |
| Stax | tool | Stacked branches: small dependent PRs instead of one large diff. Small PRs are the only PRs that get reviewed properly at agent volume. `/stacked-prs` (claude-mpm) or git-stack are the alternates. |
| `docs/rules/SERVICES.md` | this repo | One concern, one directory, no shared mutable state beyond defined contracts. Service boundaries are collision prevention at the architecture level, which beats collision prevention at the git level. |
| `/freeze` and `/guard` | gstack | Directory-scoped edits and destructive-command warnings for a session. Useful when someone runs a long autonomous job while others are working. |
| `/gsd:workstreams` | GSD | Named parallel workstreams: list, create, switch, status. Useful when two initiatives run at once and each has its own phase state. |

Scaling parallel work beyond one person's sessions:

- `/parallel-execution-optimizer` (ECC) and `/dispatching-parallel-agents`
  (Superpowers, claude-mpm) for deciding what actually fans out safely.
- `/team-agent-orchestration` (ECC): work items, ownership, an agent Kanban,
  merge gates, control-pane handoffs. The closest thing in the catalog to a
  team-shaped orchestration model.
- `/ralphinho-rfc-pipeline` (ECC): RFC-driven multi-agent DAG execution with
  quality gates, merge queues, and work-unit orchestration. Reach for it when
  the team's parallelism has outgrown a Kanban.
- `/claude-devfleet` (ECC) to plan a project, dispatch parallel agents in
  isolated worktrees, monitor, and read structured reports.
- `/dmux-workflows` (ECC) for tmux-pane orchestration across mixed harnesses
  (Claude Code, Codex, OpenCode) when the team is not all on one CLI.

**Rule of thumb:** fan out only when the units are genuinely independent and
the time saved beats the agent cost. Serial is correct more often than it
feels. See docs/rules/DELEGATION.md.

---

## Layer 4: Gates, what actually blocks a merge

Layer 1 tells agents what to do. This layer is what happens when they do not.
Each row is a machine, not an agreement.

**Pre-commit, free and local.**

| Tool | From | Catches |
| --- | --- | --- |
| `/setup-pre-commit` | mattpocock | Format, typecheck, test on every commit via Husky and lint-staged. |
| Gate tests | this repo | Deterministic, under two seconds, every commit, in CI too. `node tools/gate.mjs` plus project tests. |
| `/security-gitleaks` | zcaceres | Secrets. Scans history first, then installs the hook and pinned CI. Install this on day one; installing it over a polluted history makes CI permanently red. |
| `/plankton-code-quality` | ECC | Write-time formatting, linting, and fixes on every file edit via hooks. |
| `/git-guardrails-claude-code` | mattpocock | Blocks `push`, `reset --hard`, `clean`, `branch -D` before an agent runs them. |

**Per commit and per PR.**

| Tool | From | Role |
| --- | --- | --- |
| RoboRev (`/roborev-refine`) | roborev | Automated review of every commit, with the fix-and-re-review loop closed and capped. At agent volume this is the only review that scales linearly with output. |
| `/code-review` | mattpocock | Two parallel axes: Standards against the repo's documented conventions, Spec against what the ticket asked. The Spec axis is what generic reviewers miss and what a team most needs, because the reviewer did not attend the conversation. |
| `/pr-quality-checklist` and `/code-review-standards` | claude-mpm | A PR quality checklist and a severity-tagged review checklist (CRITICAL / HIGH / MEDIUM / LOW). Shared severity vocabulary keeps "blocking" from being a matter of mood. |
| `/pre-merge` | claude-mpm | The verification workflow before merging to production. |
| `/requesting-code-review` | Superpowers / claude-mpm | Dispatches a reviewer subagent against the plan and requirements before proceeding. |
| `/receiving-code-review` | Superpowers | The other half, and the half teams skip: processing feedback with technical rigor and verification rather than performative agreement or blind implementation. |

**The gate that cannot be talked around.**

| Tool | From | Role |
| --- | --- | --- |
| `/stack-ship` | zg-skills | The full pipeline in one command: RoboRev gate with bounded auto-fix, squash-submit one clean commit upstream as a PR via stax, blinded adversarial review on that PR, version bump. |
| `/z-adversarial-review` | zg-skills | Blinded four-key review (spec, acceptance criteria, diff, throwaway worktree) handed to a fresh reviewer holding nothing else, plus skeptic sub-agents on non-trivial diffs. Skeptic seats can run on other vendors' CLIs (Codex, Gemini, Antigravity) for cross-provider blind spots. |
| `/santa-method` | ECC | Two independent review agents must both pass, with a convergence loop. The lighter alternative when the full blinded pipeline is too heavy. |
| `/codex review` | gstack | A different vendor's model on the same diff. `--xhigh` when the diff is dangerous and you can wait. |
| `/code-review ultra` | built-in | Multi-agent cloud review of a branch or GitHub PR. Billed and user-triggered, so reserve it for the changes where being wrong is expensive. |

**Stop hooks: what blocks an agent from claiming it is done.**

- `/delivery-gate` (ECC): Stop hook that blocks finishing until quality checks
  pass, detecting rationalization patterns and stale learning logs.
- `/unlazy` (unlazy): writes runnable acceptance gates to GATES.md before
  execution and blocks completion until they pass. The mechanism that makes
  unattended agent work safe to leave running.
- `/verification-before-completion` (Superpowers, claude-mpm): evidence before
  assertions. Run the command, show the output, then claim success.

**CI.** `/github-actions` (rsc-harness, claude-mpm) for the workflows,
`/security-scanning` (claude-mpm) for secrets, dependencies, SAST, and triage
with expiring exceptions. `gsd-loop-review` (GSD) is the pattern to copy for
auditing each open PR against its linked issue contract and required CI.

**Harden the pipeline against the agents themselves.** Every gate above lives
in .github/workflows, and an agent with write access there can weaken the gate
that reviews it without any gate objecting, because the gate is what changed.
Four controls close it, all free, and they matter more on a team because more
agents have push access:

1. **CODEOWNERS over .github/workflows, over the CODEOWNERS file itself, and
   over branch-protection config.** A named human reviews pipeline changes.
   This is the one CODEOWNERS entry that is not bureaucracy.
2. **Pin actions by 40-character commit SHA, not by tag.** A moving tag is a
   supply-chain incident waiting to happen with your `GITHUB_TOKEN` in scope.
   Renovate bumps the pins.
3. **`permissions: contents: read` at the workflow root,** elevated per job
   only where needed. The default token is broader than nearly any job needs.
4. **Never `pull_request_target` with a checkout of the PR head.** Untrusted
   fork code, write permissions, and secrets in one job is the standard
   takeover.

[zizmor](https://github.com/zizmorcore/zizmor) is the static analyzer that
catches all four, and it belongs in CI next to the secret scan so nobody has to
remember them. `/github-actions` (rsc-harness) is the authoring counterpart for
token permissions, OIDC deploys, and environment gates.

**The agents are also a threat surface, not only a workforce.** Everything an
agent reads is untrusted input, and on a team the inputs multiply: issue
bodies, PR descriptions, fetched docs, and MCP responses all arrive as text an
agent may act on. `/agent-safety` (rsc-harness) is the model for tool gating
and injection defense; `/cso --skills` (gstack) scans the shared skill set as
the third-party executable text it is, which matters most here because Layer 6
installs that set on every machine at once; `/harness-mcp-scan` and
`/safety-scan` (ruflo) cover MCP servers and injection screening;
`/security-scan` (ECC) audits the committed `.claude` directory itself. GSD's
`gsd-prompt-guard.js` and `gsd-read-injection-scanner.js` hooks are the
enforcing version: a hook is a boundary, a rule in CLAUDE.md is a request.

Two rules that turn that general principle into something checkable:

- **Scope tools per task, not per agent.** Least privilege sliced by job rather
  than by identity. An agent whose job is reading raw customer tickets gets
  ticket-create and nothing else, and never repo write, no matter what its
  parent session is allowed to do. The permission set follows the untrusted
  input, so a successful injection is bounded by what that one task needed
  rather than by what the harness can do.
- **Vet and pin MCP servers.** A tool description is text the agent reads
  before it decides, which makes an MCP server an injection vector as well as a
  dependency. Pin versions the way actions are SHA-pinned, review the diff when
  a pin moves, and keep the approved list in shared settings so a per-machine
  addition is not silently possible. `/harness-mcp-scan` covers the scan;
  pinning covers the day the scanned version changes underneath you.

**Branch protection is the backstop, not the gate.** Require the gate tests,
require RoboRev green, require one approving review. The agent pipeline should
already have satisfied all three before a human looks.

---

## Layer 5: Shared knowledge

The team's second-hardest problem after collisions: person B's agent does not
know what person A's agent learned.

**Four stores, and one rule: a fact lives in exactly one of them.**

| Store | Holds | Property |
| --- | --- | --- |
| **Repo canon** (`CLAUDE.md`, `AGENTS.md`, `docs/rules/`) | What agents must obey: standards, safety rules, workflow, the constitution | Versioned, PR-reviewed, loaded by every session on every machine. If it is not here, half the team's agents never read it. |
| **Repo docs** (`docs/architecture/`, ADRs, runbooks, specs) | Durable knowledge humans and agents both consult | Versioned; audited monthly against the code. |
| **The wiki** (Tela, Notion, Confluence) | Human-facing narrative: PRDs, research reports, release notes, onboarding prose | Reachable by agents over MCP for reading and writing, but never the source of truth for anything an agent must obey. |
| **Derived context** (knowledge graph, session handoffs, learnings ledger) | Regenerable understanding: code structure, paused-work state, accumulated lessons | Never canonical; rebuilt from the sources above. Losing it costs recompute, not knowledge. |

The rule is what makes the taxonomy useful. When someone proposes a fifth
store, the answer is not "no" but **"which of the four does this fact belong
in"**, which is answerable and usually settles it. It also turns the
no-second-memory-system anti-pattern below from a prohibition into a routing
question.

| Tool | From | Role |
| --- | --- | --- |
| Graphify | tool | One queryable knowledge graph of the codebase, committed or shared. `graphify query "<question>"` before raw grep; `graphify update .` after changes. One graph per repo, not one per developer. |
| `/setup-gbrain` + `/sync-gbrain` | gstack | Code-index memory with per-remote trust policy. `--audit` shows which pages exist per project, which matters when several people write to the same brain. |
| Tela | tool | Self-hostable markdown team wiki with a built-in MCP server, so agents read and write the same wiki humans do. Outline is the alternative when the wiki is for humans first; it ships no MCP server, so agents reach it only through whatever integration you build. |
| Kherad | tool | Notion-like wiki for non-technical teams backed by real git commits with merge-request review, plus AI agents. The only wiki option that also satisfies "canon lives in the repo": wiki changes pass the same gate as code. Young project; trial before adopting. |
| `/unified-memory` | ECC | Durable, inspectable context and handoffs shared across Claude, Codex, Cursor, and OpenCode. Relevant the moment the team is not all on one CLI. |
| `/knowledge-ops` | ECC | Knowledge base ingestion, sync, and retrieval across local files, MCP memory, vector stores, and Git repos. |
| `/handoff` and `/claude-handoff` | mattpocock | Compact a session into a handoff document, or hand it live to a fresh background agent. On a team this is also the person-to-person handoff. |
| `/context-save` / `/context-restore` | gstack | Branch, status, decisions, and remaining work as a timestamped checkpoint. `/context-save list --all` lists checkpoints from every branch, not just the current one, which is how you find paused work across parallel streams. |

**Onboarding, human and agent.** New people and fresh agents have the same
problem, so the same tools serve both: `/codebase-onboarding` (ECC or
rsc-harness) for the architecture map, entry points, conventions, and a starter
CLAUDE.md; `/code-tour` (ECC or zcaceres) for a CODE_TOUR.md with a Mermaid
diagram of how the pieces connect; `/gsd:milestone-summary` (GSD) for a project
summary built from milestone artifacts; `/teach` (mattpocock) for bringing
someone up on one concept inside this workspace.

---

## Layer 6: Harness parity

Five differently-configured harnesses on one repo is five codebases wearing a
trench coat. This layer is how you stop that.

| Tool | From | Role |
| --- | --- | --- |
| Commit `.claude/` | this repo | Agents, skills, hooks, and settings versioned in the repo, not in each person's home directory. This is the single most important line in this document. |
| `/agent-sort` | ECC | Builds an evidence-backed install plan for this specific repo, sorting skills, commands, rules, hooks into DAILY versus a parked LIBRARY. Run once, commit the result, everyone loads the same DAILY set. |
| `/skill-library` | ECC | The router into the parked library, so an unusual task can reach a parked skill without everyone carrying it in context permanently. |
| `/optimize-skill-activation` | zcaceres | Right-sizes each skill's activation mode (slash-only, model-invocable, eager-loaded). Team-wide this is a context budget decision multiplied by headcount. |
| `/skill-stocktake` | ECC | Quality audit of installed skills and commands, quick-scan or full. Run when the shared set has grown without anyone pruning. |
| `/skill-comply` | ECC | Checks whether the rules, skills, and agent definitions are actually followed: generates scenarios at three strictness levels, runs agents, classifies behavior. The only tool here that answers "is our canon real or decorative." |
| `/fewer-permission-prompts` + `/update-config` | built-in | A shared project `.claude/settings.json` allowlist so nobody is approving the same safe command forty times a day. |
| `/config-gc` | ECC | Periodic garbage collection of stale skills, orphaned hooks, redundant permissions. Quarterly. |

**Mixed CLIs are normal, plan for them.** Some of the team will be on Codex,
Cursor, or Gemini. Packs that ship multi-runtime adapters are worth preferring:
GSD's capability packs cover more than twenty runtimes, Superpowers ships
`.codex-plugin/`, `.cursor-plugin/`, `.opencode/` and a Gemini extension, ECC's
`/configure-ecc` handles install per harness. `AGENTS.md` alongside `CLAUDE.md`
so non-Claude agents read the same canon.

---

## Layer 7: Observability

Answering "what did the agents do, was it good, what did it cost" is a team
question. Alone you were there for all of it.

| Tool | From | Role |
| --- | --- | --- |
| AgentsView | tool | Local-first session search, analytics, and token stats across coding agents. The evidence a retro needs when the question is "what did the agents actually do this week." |
| ccusage | tool | Token usage and cost analytics across sessions. Per-person and aggregate. |
| `/cost-tracking` | ECC | The same inside Claude Code, from the local cost-tracker metrics log. |
| `/context-budget` | ECC | What every skill, rule, MCP server, and the CLAUDE.md chain costs in tokens, with prioritized savings. Multiply by headcount to see why it matters. |
| `/ecc-tools-cost-audit` | ECC | For the specific failure mode of runaway automated PR creation, duplicate jobs, and premium-model leakage. |
| `/health` and `/quality-project-health` | gstack / zcaceres | The weekly code-quality dashboard and a 0-10 project health rating. |
| `/code-quality-scoring` | claude-mpm | Vendor-neutral software health scoring and tech-debt estimation, framed for communicating to stakeholders. The version of health you can show a non-engineer. |
| `/devex-review` | gstack | Live developer experience audit. Ask it when onboarding keeps taking three days. |

**Product-side observability** stays the same as the solo route but gets an
owner: `/canary` and `/benchmark --trend` (gstack) around each deploy,
`/monitoring` and `/observability` (rsc-harness) for uptime, alerts, and
OpenTelemetry wiring, Phoenix (Arize) when the product itself ships LLM
features and needs tracing and evaluation.

---

## Layer 8: Production, what happens after merge

The layer this document was missing entirely. Layers 1 to 7 get code into main
safely; none of them cover the week after, and on a team that week has an owner
who is not the author.

**Deploys: per ticket, or batched.** A choice to make deliberately, because the
default a team drifts into is usually batching and the cost is invisible until
it bites.

*Per ticket, on green.* Each merge deploys itself. A bad change blocks only
itself, the revert is one commit rather than a bisect across twelve, and the
release path is testable because it is code. What it requires that batching does
not: a merge queue so concurrent merges do not produce a broken main to deploy
from, a revert rule so a bad deploy has a one-command answer, and CI fast enough
that latency is not the merge rate.

*Batched trains.* Weekly or nightly, risk concentrated into a known window that
a human watches. What it costs: one bad ticket blocks every other ticket in the
batch, and the pressure that creates is what makes teams invent pre-release
escape hatches so QA can test unmerged code. Batching earns its place against a
real constraint, a slow or manual publish step, a customer-facing change window,
a compliance process that reviews releases rather than changes. Name the
constraint. If none applies, the batch is habit.

`/land-and-deploy` and `/canary` (gstack) cover either shape; per-ticket is
where the automation pays for itself fastest.

**The pre-deploy drift check.** Code that passed QA still breaks production, and
the usual reason is not the code. The QA environment is a close cousin of
production, not a clone: dependency versions, platform settings, account
configuration, and flag states drift between them, and the running application
is composed from those at deploy time.

Diff the two before the human approves, not monthly. A script reads the
installed versions and the settings that matter from both environments via the
platform's CLI or API and posts the summary on the deploy job, so the approver
sees "these four things differ" before clicking rather than afterwards. A
monthly environment audit catches drift eventually; a per-deploy diff catches it
before it bites, and it costs one script written once. It also feeds the backup
story below, since it already reads the configuration nobody has snapshotted.

**Incidents.** `/incident-response` and `/runbook-structure` (Han) write the
severity ladder, the comms protocol, and the runbooks before anyone needs them;
`/sre-incident-response` (Han) works the live one. The rule that keeps it from
becoming a folder of timelines: every incident closes with a regression test
and a `/learn` entry, same as a bug, which is the loop back into Layer 1 canon.
Rotation, paging, and status pages are priced in docs/process/STACK-TEAM.md; on a team
under nine the answer is usually Better Stack bundling uptime, on-call, and the
status page rather than three products.

Add the agent-shaped entries a normal runbook lacks: an unattended loop that
opened forty pull requests, an agent that force-pushed, a backfill pointed at
production. `/guard` and `/freeze` (gstack) are the prevention; the runbook is
for when prevention did not hold.

**Backups and restore.** `/backups` (rsc-harness) for RPO and RTO targets and
3-2-1-1-0 copies. The team version of the rule is that the restore drill has a
named owner and a date, because "we have backups" is a claim nobody has tested
until someone times a restore. Put it on the quarterly cadence.

**Support as product input.** The loop this document lacked: a helpdesk wired
into the tracker so a user complaint becomes a ticket with the same shape as
any other. `/triage` (mattpocock) is the intake state machine, the `support`
agent turns feedback into Backlog tickets, and `/document-release` plus the
Diataxis suite keep the help docs from drifting behind what shipped. Chatwoot
self-hosted or Zendesk hosted, wired into Linear or GitHub Issues, is the
tooling half.

**The compliance floor.** Whatever `/compliance` (rsc-harness) scoped in
PROCESS.md stage 5 becomes an ownership row here, not a document. The control
register names an owner per control, and most of the evidence a SOC 2 window
wants is already emitted by Layer 4: review before merge, change management,
vulnerability remediation. Decide where it is exported while Layer 4 is being
wired, not during the audit.

---

## Layer 9: The human layer

What stays human, and the tooling that keeps the human parts short.

**Decisions.** The two human gates in `/orch-pipeline` (ECC) are the right
model: humans approve the plan and approve the merge, agents do everything
between. For contested decisions: `/council` (ECC, four voices),
`/plan-eng-review`, `/plan-ceo-review`, `/plan-design-review`,
`/plan-devex-review` (gstack), or `/autoplan` (gstack) to run all four
sequentially with auto-decisions. `/decision-doc` (PM OS) captures the outcome
with rationale and alternatives.

**Product review.** `/prd-review-panel` (PM OS) still earns its place on a
team: seven parallel reviewers is cheaper than seven calendars. Use
`--perspectives` to run the subset the real reviewers do not cover.

**Comms.** `/internal-comms` (claude-mpm) for concise 3P updates (Progress,
Plans, Problems) to stakeholders. `/status-update` and `/slack-message` (PM OS)
for the routine ones. `/meeting-notes` (PM OS) to turn a transcript into
decisions and action items, which then become tickets via `/to-tickets`.

**Learning.** `/retro` (gstack) weekly, with AgentsView data behind it rather
than memory. `/learn` (gstack) into docs/LEARNINGS.md as things happen.
`/growth-log` (ECC) for reusable patterns rather than diary entries.
`/skillify` (gstack) the second time anyone on the team runs the same manual
flow: on a team the payoff multiplies by headcount.

**When you cannot answer.** `/to-questionnaire` (mattpocock) turns a decision
you cannot fully answer into a questionnaire for the person who can, which is a
better artifact than a meeting.

---

## Accessibility

Optional in the sense that a headless service does not need it, and not
optional in any other. Turn it on for any repo with a user interface, and turn
it on at the start, because retrofitting it is the expensive version. On a team
it also stops being one person's conscience and becomes three checks in Layer 4.

- **Lint time:** `eslint-plugin-jsx-a11y` in the pre-commit hook. Catches
  issues before a page renders, which is the cheapest place to catch anything.
- **Test time:** `@axe-core/playwright` asserting no critical violations inside
  the E2E suite you already run. Near-zero marginal cost once the suite exists.
- **PR time:** Lighthouse CI budgets as a required check on changed routes, and
  Pa11y when you need WCAG rule detail rather than a score.

Plus the two things automation cannot do, which need budgeting rather than
installing: **automated tooling catches roughly 30-50% of WCAG criteria**, so a
green gate is necessary and not sufficient. Budget a periodic manual
screen-reader pass on the highest-stakes flows, and a third-party VPAT or ACR
rather than self-certifying, which is also what enterprise procurement asks for
by name. Both belong on the quarterly cadence with an owner, or they do not
happen.

docs/process/PROCESS.md stage 13 carries the depth: the target standard, the
implementation patterns, where accessibility overlays fit, and the
internationalization decision that has the same shape.

---

## Adoption sequence

Do not install all nine layers at once. Each week's layer makes the next one
cheaper.

| Week | Install | Done when |
| --- | --- | --- |
| 1 | Canon and pre-commit gates: CLAUDE.md plus `docs/rules/` committed, `/constitution`, `/coding-standards`, `/setup-pre-commit`, `/security-gitleaks`, gate tests in CI | A fresh clone plus a fresh agent produces house-style code with nobody in the room |
| 2 | Queue and isolation: one tracker with a label vocabulary, `/to-tickets`, `/intent-driven-development`, worktree-per-claim, Stax | Two people can pick work without asking each other, and neither branch touches the other's files |
| 3 | The merge gate: RoboRev on every commit, `/code-review`, `/stack-ship` with `/z-adversarial-review`, branch protection requiring all three | Nothing reaches main that no machine reviewed |
| 4 | Knowledge and parity: `.claude/` committed, `/agent-sort` DAILY set agreed, Graphify or gbrain indexed, `/codebase-onboarding` written | A new hire ships a real ticket on day two |
| 5 | Observability and cadence: AgentsView, ccusage, `/health` weekly, `/retro` weekly, monthly audits scheduled | The retro cites data instead of impressions |
| 6 | Production: CODEOWNERS plus SHA-pinned actions plus zizmor in CI, an incident runbook with a severity ladder, a timed restore drill, support wired into the tracker | A pipeline change needs a human, a page has a runbook, and a restore has a measured RTO rather than an assumed one |

`/schedule` (built-in) puts the weekly and monthly rows on a cron so the
cadence does not depend on anyone remembering.

---

## Scaling by team size

| Size | What changes |
| --- | --- |
| 2 to 3 | Canon plus gates plus a shared tracker is enough. Skip merge queues, skip formal ownership, skip `/team-agent-orchestration`. Worktrees per claim, Stax for stacking, RoboRev on every commit. Contracts matter as soon as two people own two services. |
| 4 to 8 | Add named ownership per service directory and per shared tool (see below). Add `/pr-quality-checklist` and severity-tagged review so "blocking" means the same thing to everyone. Add Tela or an equivalent agent-readable wiki: at this size, knowledge stops fitting in the repo docs. Add `/team-agent-orchestration` when the Kanban stops being obvious. Layer 8 starts mattering here: an incident now has a person who did not write the code, so the runbook has a reader. |
| 9+ | Merge queue becomes real, not optional (and check the tier: native merge queue is public-org-repo or Enterprise Cloud only, so on Team with a private repo it means Graphite or Mergify). `/ralphinho-rfc-pipeline` for DAG execution across work units. `/skill-comply` quarterly, because at this size canon drifts silently. Separate deploy owner and on-call rotation. Vault instead of `.env` files. `/context-budget` becomes a budget line, not a curiosity. |

---

## Ownership

Every shared tool needs a name against it, or it rots. The list is short on
purpose.

| Surface | Owner's job |
| --- | --- |
| CLAUDE.md and `docs/rules/` | Reviews every change to canon. Runs `/rules-distill` and `/claude-md-improver` quarterly. |
| The gate | Owns pre-commit, CI, RoboRev config, branch protection. Fixes a red gate as first priority; a red gate that is normal is not a gate. |
| The shared `.claude/` set | Owns the DAILY versus LIBRARY split and pack upgrades. Runs `/skill-stocktake` and `/config-gc`. |
| Contracts and schemas | Owns `contracts/`. Any cross-service change is a schema version bump and both sides updated in the same PR. |
| Design system and accessibility | Owns docs/DESIGN.md and its Storybook. Rejects UI that deviates without a decision. Holds the quarterly screen-reader pass and the call on whether a third-party VPAT is needed. |
| Deploy and on-call | Owns `/land-and-deploy` config, canary baselines, alerting. |
| The pipeline | Owns CODEOWNERS, action pinning, `GITHUB_TOKEN` scopes, and the zizmor check. Distinct from the gate owner: this one owns the gate's own integrity. |
| Incidents and restore | Owns the runbooks, the severity ladder, the on-call rotation, and the quarterly timed restore drill. |
| Compliance | Owns the control register from PROCESS.md stage 5 and where its evidence is exported. Nothing to do most quarters, which is why it needs a name. |
| Support | Owns the helpdesk-to-tracker loop and the help docs. |
| Cost | Reads ccusage and `/context-budget` monthly, raises it before finance does. |

---

## Anti-patterns

- **Canon in `~/.claude` instead of the repo.** The most common failure. Half
  the team's agents have never read your rules.
- **A gate that is normally red.** Once red is normal, the gate is decoration
  and everyone merges past it.
- **Skipping `/receiving-code-review`.** Agents implement review feedback
  blindly and enthusiastically, including the wrong feedback. Verification of
  the suggestion is part of the review, not an optional extra.
- **One giant PR because agents made it fast.** Stack it. Review quality falls
  off a cliff with diff size, and agent-authored diffs get large by default.
- **Trusting a review the agent could see coming.** If the reviewer sat in the
  conversation that produced the code, it is not an independent review. That is
  the entire reason `/z-adversarial-review` is blinded.
- **Different packs per person.** Two reviewers with different standards skills
  produce contradictory review comments and a team that stops trusting review.
- **No named owner for the gate.** Shared ownership of the thing that blocks
  merges means nobody fixes it at 6pm on a Friday.
- **Fan-out as a default.** Parallel agents on coupled work produce conflicting
  confident changes. Fan out only on genuinely disjoint units.
- **A pipeline an agent can edit unreviewed.** Every gate in Layer 4 is a file
  in .github/workflows. Without CODEOWNERS on that directory, the gate can be
  weakened by the same process it is supposed to gate, and the diff looks
  routine.
- **Backups nobody has restored.** Untested backups are a belief, not a
  control. The drill is quarterly and it is timed.
- **Treating agent-read text as trusted.** An issue body, a fetched page, and
  an MCP response are all inputs an agent may act on. On a team the volume of
  untrusted text is much larger than one person's.

---

## Team tool tier

Where a team's shelf differs from the solo shelf in docs/process/PROCESS-SOLO.md.

**Install with the team:**

| Tool | Why it is team-specific |
| --- | --- |
| Stax + RoboRev | Same as solo, but load-bearing here: small PRs and machine review are the only things that scale to agent-volume diff across several people. |
| Graphify | One graph per repo, shared. Answers architecture questions identically for everyone, which grep does not. |
| Tela | Self-hosted markdown wiki with an MCP server, so agents read and write the same knowledge humans do. The moment a second person needs project knowledge, this beats a folder of docs. |
| AgentsView | Session search and token stats across the team. The only way a retro can say what the agents actually did. |
| ccusage | Per-person and aggregate cost. Spend has an owner on a team; it needs numbers. |
| GitHub Projects or Linear | A tracker with a machine-readable label vocabulary. Kata is right for solo, wrong here unless the whole team is comfortable with a repo-local queue. |
| Worktrunk | Worktree management once parallel sessions are routine across several developers. |
| Vault | The moment secrets are shared beyond one machine. Until then, `.env` plus gitleaks scanning covers it. |
| Codex CLI + Gemini CLI + Antigravity | Cross-vendor skeptic seats for `/z-adversarial-review`, and second opinions via `/codex`. Different vendors have different blind spots, which is worth more on a team where everyone's primary model is the same. |

**Add on a trigger:** Temporal (first real background job or backfill),
Replane (first A/B test or staged rollout), Phoenix (the product ships LLM
features), Storybook (UI repo, as the living home of the design system),
Scalekit (an enterprise customer asks for SSO), React Doctor (React repo,
deterministic scanner in the slop-cleanup cadence).

**Hold:** multi-agent desktops and orchestrators (Multica, Agent Teams AI,
oh-my-claudecode, FirstMate, LobeHub, Paperclip, Sim). Native subagents,
worktrees, and Workflow scripts cover the orchestration this process needs.
Revisit only when orchestration genuinely outgrows one machine per developer.
The one piece worth borrowing from those desktops is live session status,
and it is a hook, not a vendor: `PostToolUse` writes one status line per
session to a temp-dir file, and a loop reads the last line of each. Build
it when three or more concurrent sessions per person is routine, not before.
A second memory layer on top of Graphify plus gbrain adds sync problems, not
recall.

---

## Pack dependencies for a team

| Source | What it powers here | Weight |
| --- | --- | --- |
| garrytan/gstack | QA, review, deploy, canary, benchmark, security audit, context save, plan reviews | Core: the operational spine |
| mattpocock/skills | Tickets, triage, TDD, implement, two-axis code review, handoffs, agent-facing docs, git guardrails | Core: the engineering spine |
| roborev + stax + zg-skills | The merge gate that scales to agent volume | Core: non-negotiable |
| affaan-m/ECC | `/ai-first-engineering`, `/team-agent-orchestration`, `/contract-first`, `/intent-driven-development`, ADRs, `/skill-comply`, harness hygiene | Broad; install via `/agent-sort`, not wholesale |
| claude-mpm | PR quality checklist, severity-tagged review standards, `/pre-merge`, `/writing-plans`, `/internal-comms`, `/code-quality-scoring` | High value for the review and comms layers specifically |
| Superpowers | `/receiving-code-review`, `/verification-before-completion`, `/dispatching-parallel-agents`, worktree discipline, multi-runtime packaging | Adopt the named skills even if not the whole method |
| GSD | The issue-driven loop pattern (`gsd-loop-*`), workstreams, guard hooks, multi-runtime capability packs | Reference for the queue and guard patterns; adopt whole only if replacing the loop engine |
| zcaceres/skills | Permissions, gitleaks, dead code, docs audit, worktree setup, safety hooks | High value, small footprint |
| rsc-harness | `/constitution`, `/decision-records`, `/github-actions`, `/monitoring`, `/observability`, `/deployment` | The ops and infra bench |
| PM OS | PRD review panel, metrics, launch checklist, comms templates | Core when the team has product people |
| Trail of Bits | Deep security bench | Pull in when the stakes rise |
| ponytail | Over-engineering review and audit, debt ledger | Already a mode; the audit is a team cadence item |

Install per source via the files in docs/frameworks/, which are the full
skill catalog by workflow stage. Tools that are not skills live in
docs/dev-tooling/.

---

The short version: **commit the canon, machine every gate, isolate on claim,
and give every shared tool a name.** Everything else in this document is an
implementation of one of those four.
