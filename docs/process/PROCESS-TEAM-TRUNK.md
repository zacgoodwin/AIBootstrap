# Team Tooling for an AI-Enabled Codebase, Trunk-Based

Several developers, one repo, one shared branch, every one of them running
agents. This is the trunk-based route through the same catalog as
docs/process/PROCESS.md, and it is self-contained: a team on trunk should not
need to read the stacked-PR route to use it.

Three team routes exist and you pick one:

- docs/process/PROCESS-TEAM.md plus docs/process/PROCESS-TEAM-SERVER.md is the
  stacked-PR route. Small dependent PRs, stacked with Stax, reviewed as a
  chain. The two docs split laptop-side tooling from server-side tooling.
- **This document** is the trunk route. Short-lived branches off one main,
  merged the same day, incomplete work merged dark behind a flag. Laptop and
  server tooling are folded together here, because on trunk almost every gate
  that matters runs on a server anyway.
- docs/process/PROCESS-SOLO.md is the one-person cut of either.

docs/process/PROCESS.md remains the lifecycle underneath all three: 26 stages
from ideation to retro. This document does not replace it. It answers the
narrower question of what has to be installed, versioned, and enforced so that
five people running agents against one branch produce one codebase.

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

Three rules follow, and they hold on any branching model:

- **Canon lives in the repo, not in heads and not in `~/.claude`.** If it is
  not versioned and committed, it is not shared, and half the team's agents
  have never read it.
- **Every gate is a machine.** Human review is for judgment. Anything a check
  could catch, a check catches, because with agent-scale volume the human will
  eventually miss it.
- **Work is claimed from a queue and isolated on claim.** Claim, branch,
  isolate, merge through a gate. In that order, every time.

Trunk adds a fourth, and it is the one this document exists for:

- **A branch that outlives the day is a liability, not a workspace.** At agent
  volume a branch diverges from main faster than a human can reconcile it, and
  the reconciliation cost is paid by whoever merges last. Trunk moves that cost
  to zero by never letting it accumulate.

---

## Trunk mechanics

The part that differs from the stacked route. Everything after this section is
the same nine-layer tooling stack, adjusted where trunk changes the answer.

### Branch lifetime

One rule, and it is testable: **a branch opened today merges today.** If it
cannot, the ticket was decomposed wrong (Layer 2) or the work needed a flag
(below) or an abstraction seam (below). Those are the only three answers. "It
is nearly done, I will finish it tomorrow" is not one of them.

Stacking is still allowed, and Stax still works, but it stops being the spine.
On trunk a stack is a bounded convenience: **depth three maximum, and the whole
stack merges the same day.** A deeper or longer-lived stack is long-lived
branching wearing a diagram, and it carries the same divergence cost while
looking disciplined.

What this buys, and it is the reason to run trunk at all: nobody is ever
reading a diff against a base that no longer exists, and no agent is ever
reasoning about a file whose real version is three days ahead of the one in its
context window.

### Feature flags: how incomplete work reaches trunk

On the stacked route flags are optional, a Tier 2 tool installed when the first
A/B test appears. On trunk they are load-bearing from day one, because they are
the only mechanism by which work that is not finished can live on the shared
branch without being visible.

**Mandatory, not preferred.** Any change that alters user-visible behavior and
is not complete ships behind a flag in its first commit. This is a gate check,
not an agreement (Layer 4). The stacked route can survive an agreement here;
trunk cannot, because the alternative to a flag is a long branch and the long
branch is exactly what trunk removed.

**Every flag gets an expiry date at creation.** Not a convention, a required
field in whatever registry you use. A flag with no expiry becomes permanent by
default, and every permanent flag is a code path nobody tests and every agent
reads as live. The most expensive flags are the ones that have been at 100% for
a year while both branches of the conditional still compile.

**A registry in the repo, and a monthly sweep.** The registry lists every flag,
its owner, its expiry, and its current rollout. The sweep, on the monthly
cadence next to the other audits, deletes every flag sitting at 100% or 0% and
files a ticket for every flag past its expiry that is neither. LaunchDarkly is
the only vendor that automates this half, and it is priced for governance
(entry contracts around $25k/year), so for most teams the sweep is discipline
you run rather than a feature you buy.

**What QA tests is what merged.** The alternative pattern, publishing a
pre-release build from an unmerged branch so QA can validate before the merge,
tests code that is not what lands: the branch keeps diverging from main while
QA runs. Merging dark behind a flag and flipping it on per environment removes
the arithmetic and the divergence at once. Keep the pre-release path only for
changes a runtime boolean genuinely cannot cover, which usually means manifest,
dependency, and platform-configuration changes rather than product behavior.

| Need | Pick | Note |
| --- | --- | --- |
| Flag platform, day one | Statsig (free to 1M events) or GrowthBook Cloud (free: three users, unlimited flags and experiments; events and CDN metered) | Both have real free tiers. GrowthBook self-hosted removes the event cap when flag-evaluation volume is what grows. Unleash and Flagsmith are the other self-host options. |
| Lifecycle governance | LaunchDarkly, or the repo registry plus the monthly sweep | LaunchDarkly automates stale-flag detection, approvals, and audit. At its price, buy it for the lifecycle automation or not at all. |
| The registry | A file in the repo, reviewed like any other | Flag name, owner, expiry, rollout, the ticket that created it. Whatever the platform holds, the repo holds the expiry, because the sweep is a repo cadence. |

### Branch by abstraction

Some work is too big for a boolean: a storage engine swap, a framework
migration, a rewrite of a module every caller touches. Wrapping it in a flag
produces a conditional wrapped around half the codebase.

The answer is an abstraction seam rather than a long branch. Introduce an
interface over the old implementation, merge that. Add the new implementation
behind the same interface, merge that, unused. Move callers across a few at a
time, each its own same-day merge. Delete the old implementation last. Every
step is small, reviewable, and shippable, and main is never broken.

docs/rules/SERVICES.md is the architectural version of the same move: one
concern, one directory, contracts at the boundary. A codebase with real seams
is a codebase where branch-by-abstraction is cheap. A codebase without them is
where teams reach for the four-week branch.

### Revert first

**Main goes red, or a deploy goes bad: revert now, diagnose in a branch.** Not
"fix forward if it looks quick", because it never looks slow at the moment
someone says it.

This needs three things written down before the first red main, not after:

- **A stated SLA.** How long main may stay red before the revert is automatic
  rather than discussed. Fifteen minutes is a common number. Any number beats
  none.
- **A named owner** for trunk health, in the ownership table below, with the
  authority to revert someone else's merge without asking.
- **The reverted author's obligation:** the revert is not a judgment, and the
  fix comes back the same way everything else does, through the gate.

Say the precondition plainly, because it is a real one: **a team that will not
revert should not run trunk.** Every other property here (short branches,
merge-dark, deploy on green) assumes main can be returned to a known-good
state in one command. Without that assumption trunk
becomes a shared branch that is broken half the time, which is worse than the
stacked route on every axis.

### The merge queue is not optional here

On the stacked route a merge queue is something a team adds around nine people.
On trunk it is day-one infrastructure, because the failure it prevents is
trunk's defining failure: two PRs that are each green against main, and broken
against each other once both have landed. Semantic conflicts do not show up in
a diff, and at agent volume concurrent merges are the normal case rather than
the busy-day case.

Check the tier before planning: GitHub's native merge queue covers public
repositories owned by an organization on any plan, and private repositories
**only on GitHub Enterprise Cloud** ($21/user/mo). On Team with a private repo
it is not available at all, and Graphite or Mergify is the route. Aviator adds
parallel queues, batching, and monorepo affected-target routing once volume
reaches four figures of PRs a day.

Budget this as a planning input rather than a footnote. It is the one line item
trunk adds that the stacked route can defer.

---

## Layer 1: Canon, what every agent reads

The single highest-value team investment, and identical on both routes. Every
agent session on every machine starts by reading these files.

| Tool | From | Role |
| --- | --- | --- |
| `CLAUDE.md` + `docs/rules/` committed | this repo | The instruction set every session loads. Rules split by domain (CODING, TESTING, SAFETY, WORKFLOW, SERVICES, DELEGATION) so sessions load what applies rather than everything. |
| `/constitution` | rsc-harness | Project non-negotiables as numbered, testable rules. On trunk it carries three more (below). The thing a review can cite by number. |
| `/coding-standards` | ECC | Baseline conventions for naming, readability, immutability. The Standards axis of `/code-review` reads this; without it, that axis has nothing to check against. |
| `/domain-modeling` | mattpocock | The ubiquitous language. Two developers using different words for the same concept produces two subsystems for the same concept. |
| `/contract-first` | ECC | Typed schema and API contracts in `contracts/` that both sides import. What lets two people evolve two services without field drift, and what makes branch-by-abstraction cheap. |
| `/architecture-decision-records` | ECC | ADRs captured in-session as decisions happen. `/write-adr` and `/adr-decision-extraction` (Beagle) mine a design conversation for the decisions it already contains. |
| `docs/DESIGN.md` | gstack `/design-consultation` | The visual canon. `/anti-ui-slop document` (uizze) generates it from existing code when the design system is already implicit in the app. |
| `/git-workflow` | ECC | Branching strategy, commit conventions, merge versus rebase. On trunk this is short and load-bearing: the same-day rule, the stack depth cap, the revert rule. |

**The three trunk non-negotiables go in the constitution as numbered rules,**
so a review comment cites a number instead of an opinion:

1. Incomplete user-visible behavior ships behind a flag in its first commit.
2. A branch opened today merges today. Stacks are depth three and merge whole.
3. Red main is reverted, not fixed forward, inside the stated SLA.

Keeping canon readable by agents, which is a different job from keeping it
readable by people:

- `/writing-for-agents` (mattpocock) for authoring the rules, skills,
  `CLAUDE.md`, and `AGENTS.md` themselves.
- `/claude-md-improver` (official) to audit and repair a CLAUDE.md that has
  accumulated cruft.
- `/rules-distill` (ECC) to pull cross-cutting principles out of accumulated
  skills and into rule files, so the same instruction is not repeated in twelve
  places.
- `/quality-docs-update` (zcaceres) audits docs against the codebase via
  parallel agents. Run it monthly; stale canon is worse than no canon, because
  agents follow it confidently.

**Spec home, for what does not belong in the rules files:** Docusaurus when
specs should review as PRs, Notion or Confluence for the narrative that does
not. Both are reachable over MCP. The placement rule is in Layer 5.

**The test:** clone the repo to a fresh machine, open an agent, ask it to
implement a ticket. If the output matches house style without anyone in the
room, the canon layer works.

---

## Layer 2: The work queue

One tracker, machine-readable, with tickets an agent can execute without a
conversation first. Trunk adds one sizing constraint.

| Tool | From | Role |
| --- | --- | --- |
| `/to-tickets` | mattpocock | Breaks a spec into tracer-bullet tickets, each declaring its blocking edges, published to the configured tracker. Edges are what let two people pick non-conflicting work without asking each other. |
| `/intent-driven-development` | ECC | Scoped, verifiable acceptance criteria on each ticket, written before implementation. These criteria are the contract between the person who wrote the ticket and the agent that executes it, and what the merge gate checks against. |
| `/writing-plans` | claude-mpm | Implementation plans in bite-sized tasks for engineers with zero codebase context, which is exactly what a fresh agent session is. |
| `/triage` | mattpocock | State machine for inbound issues and external PRs: categorise, verify, grill, then write an agent-ready brief. The intake valve. |
| `/wayfinder` | mattpocock | Work larger than one agent session can hold, planned as a shared map of decision tickets resolved one at a time. |
| `/prioritize` | PM OS | LNO framework (Leverage, Neutral, Overhead) to classify what actually gets picked up next. |

**Tickets are sized to merge the same day.** This is the constraint that makes
the branch-lifetime rule survivable, and it is a decomposition discipline
rather than a deadline. A ticket that cannot merge in a day gets split, or gets
a flag, or gets an abstraction seam. Reviewing that at refinement is cheaper
than discovering it on day three of a branch.

**Labels are the agent contract.** The pattern worth copying is GSD's:
`gsd-loop-build` builds the oldest safe issue labeled `gsd:ready`, and
`gsd-loop-review` audits the resulting PR against its linked issue contract and
required CI, posting a verdict and labels without ever merging. A label
vocabulary that agents can read turns the tracker into a queue that drains
itself.

**Tracker choice.** The deciding property is an API, and ideally an MCP server,
so an agent moves ticket state and reads acceptance criteria with no person in
the loop. GitHub Issues plus Projects when the code is already on GitHub; Linear
(~$10-16/user) when non-engineers are in the loop; Jira (~$8-17) when it is
already there; Plane when self-hosting is required, since it ships a native MCP
server. All per-seat, so all stay cheap as agent throughput grows.

---

## Layer 3: Isolation, so parallel agents do not collide

| Tool | From | Role |
| --- | --- | --- |
| `EnterWorktree` / `/using-git-worktrees` / `/git-worktrees` | native / Superpowers / claude-mpm | One claim, one worktree. Native tool first, skill as fallback. This is the single mechanical change that makes parallel agent work safe. |
| Worktrunk | tool | Worktree management once 2+ parallel sessions per person is routine. |
| Stax | tool | Stacked branches, bounded: depth three, merged same day. Small PRs are the only PRs that get reviewed properly at agent volume, and on trunk small mostly comes from small tickets rather than from stacking. |
| docs/rules/SERVICES.md | this repo | One concern, one directory, no shared mutable state beyond defined contracts. Service boundaries are collision prevention at the architecture level, which beats collision prevention at the git level. |
| `/freeze` and `/guard` | gstack | Directory-scoped edits and destructive-command warnings for a session. Useful when someone runs a long autonomous job while others are working. |
| Coder, devcontainers, Codespaces | tool | The harder form. `/guard` and `/freeze` are requests to a cooperative agent; a container is a boundary. Reach for it when the threat model needs one, not by default. |

Scaling parallel work beyond one person's sessions:
`/parallel-execution-optimizer` (ECC) and `/dispatching-parallel-agents`
(Superpowers, claude-mpm) for deciding what actually fans out safely;
`/team-agent-orchestration` (ECC) for work items, ownership, an agent Kanban,
and control-pane handoffs; `/claude-devfleet` (ECC) to dispatch parallel agents
in isolated worktrees and read structured reports.

**Rule of thumb:** fan out only when the units are genuinely independent and
the time saved beats the agent cost. Serial is correct more often than it
feels. See docs/rules/DELEGATION.md.

---

## Layer 4: Gates, what actually blocks a merge

Layer 1 tells agents what to do. This layer is what happens when they do not.
Each row is a machine, not an agreement.

**The distinction that matters most on trunk:** a pre-commit hook is the fast
local echo of a server check, never the check itself. `--no-verify` skips it, a
fresh clone may never install it, and an agent told to work around a red hook
will. The gate is a required status check on the protected branch. Everything
below is sorted by where it runs.

**Pre-commit, free and local, under two seconds.**

| Tool | From | Catches |
| --- | --- | --- |
| `/setup-pre-commit` | mattpocock | Format, typecheck, test on every commit via Husky and lint-staged. |
| Gate tests | this repo | Deterministic, under two seconds, every commit, in CI too. `node tools/gate.mjs` plus project tests. |
| `/security-gitleaks` | zcaceres | Secrets. Scans history first, then installs the hook and pinned CI. Install this on day one; installing it over a polluted history makes CI permanently red. |
| `/plankton-code-quality` | ECC | Write-time formatting, linting, and fixes on every file edit via hooks. |
| `/git-guardrails-claude-code` | mattpocock | Blocks `push`, `reset --hard`, `clean`, `branch -D` before an agent runs them. |
| `eslint-plugin-jsx-a11y` | tool | Accessibility issues at write time, before a page renders. See the accessibility section below. |

**Required status checks on the protected branch.** These are the gate.

| Check | Delivery | Note |
| --- | --- | --- |
| Build and tests | Actions | The floor. Also the merge rate: on trunk with per-ticket deploys, CI latency is how fast the team can merge, so runner speed is structural rather than a cost line. Blacksmith, Namespace, or Depot when it binds. |
| Gate tests | Actions | The same sub-two-second suite the hook runs, run again where it cannot be skipped. |
| Secret scan | gitleaks in CI, or GitHub Secret Protection / GitGuardian (free under 25 developers) | Day one. |
| SAST | OpenGrep in CI (free; the LGPL fork of Semgrep CE that restores taint analysis and interprocedural scanning to the free tier) | Qodana (~$6/contributor) or Codacy (~$15/user) if a managed dashboard is wanted. Both per-seat, so both are safe at agent volume. SonarQube Community Build analyzes only the main branch, so it is a trend dashboard rather than a PR gate. |
| Lighthouse CI budgets | Lighthouse CI server, self-hosted and free | `budget.json` turns FCP, LCP, TBT, CLS, and the accessibility score into pass or fail per PR. |
| **Flag-first check** | A CI script | New user-visible behavior that is not complete must reference a flag. Trunk-specific, and the reason the flag discipline above is real rather than aspirational. |
| Evals | Promptfoo, self-hosted, free | Required whenever a prompt, a skill, or any latent behavior changed. Exit codes make it a gate. Keep it off the per-commit hook: it is paid and non-deterministic, and a flaky gate stops being a gate. |
| DAST | OWASP ZAP baseline against the preview environment | Baseline scans run under five minutes, which makes them PR-viable. Needs a preview URL to exist. |
| zizmor | Free, runs in seconds | Static analysis for the workflows themselves. See pipeline hardening below. |

**Per commit and per PR, the review layer.**

| Tool | From | Role |
| --- | --- | --- |
| RoboRev (`/roborev-refine`) | roborev | Automated review of every commit, with the fix-and-re-review loop closed and capped. At agent volume this is the only review that scales linearly with output. |
| `/code-review` | mattpocock | Two parallel axes: Standards against the repo's documented conventions, Spec against what the ticket asked. The Spec axis is what generic reviewers miss and what a team most needs, because the reviewer did not attend the conversation. |
| `/pr-quality-checklist` and `/code-review-standards` | claude-mpm | A PR quality checklist and a severity-tagged review checklist (CRITICAL / HIGH / MEDIUM / LOW). Shared severity vocabulary keeps "blocking" from being a matter of mood. |
| `/receiving-code-review` | Superpowers | The half teams skip: processing feedback with technical rigor and verification rather than performative agreement or blind implementation. |
| `/stack-ship` | zg-skills | The full pipeline in one command: RoboRev gate with bounded auto-fix, squash-submit one clean commit upstream as a PR, blinded adversarial review on that PR, version bump. |
| `/z-adversarial-review` | zg-skills | Blinded four-key review (spec, acceptance criteria, diff, throwaway worktree) handed to a fresh reviewer holding nothing else, plus skeptic sub-agents on non-trivial diffs. Skeptic seats can run on other vendors' CLIs (Codex, Gemini, Antigravity) for cross-provider blind spots. |
| `/santa-method` | ECC | Two independent review agents must both pass, with a convergence loop. The lighter alternative when the full blinded pipeline is too heavy. |

**Do not let a PR bot replace the blinded review.** `/z-adversarial-review`
works because the reviewer never saw the conversation. A PR bot sees the diff
and the description, which is weaker. Run both if you run a bot at all.

**Stop hooks: what blocks an agent from claiming it is done.**
`/delivery-gate` (ECC) blocks finishing until quality checks pass and detects
rationalization patterns; `/unlazy` writes runnable acceptance gates to
GATES.md before execution and blocks completion until they pass;
`/verification-before-completion` (Superpowers) is evidence before assertions.

**Harden the pipeline against the agents themselves.** Every gate above lives
in .github/workflows, and an agent with write access there can weaken the gate
that reviews it without any gate objecting, because the gate is what changed.
Four controls close it, all free:

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

[zizmor](https://github.com/zizmorcore/zizmor) catches all four and belongs in
CI next to the secret scan. `/github-actions` (rsc-harness) is the authoring
counterpart for token permissions, OIDC deploys, and environment gates.

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

Two rules that sharpen the general principle into something checkable:

- **Scope tools per task, not per agent.** Least privilege sliced by job rather
  than by identity. An agent whose job is reading raw customer tickets gets
  ticket-create and nothing else, and never repo write, no matter what its
  parent session is allowed to do. The permission set follows the untrusted
  input, so the blast radius of a successful injection is bounded by what that
  one task needed rather than by what the harness can do.
- **Vet and pin MCP servers.** A tool description is text the agent reads
  before it decides, which makes an MCP server an injection vector as well as a
  dependency. Pin versions the way actions are SHA-pinned, review the diff when
  a pin moves, and keep the approved list in managed settings so a per-machine
  addition is not silently possible. `/harness-mcp-scan` covers the scan;
  pinning covers the day the scanned version changes underneath you. An MCP
  gateway (MCPJungle self-hosted, MintMCP or Obot hosted) makes the allowlist
  enforceable at the network rather than by agreement.

---

## Layer 5: Shared knowledge

The team's second-hardest problem after collisions: person B's agent does not
know what person A's agent learned.

**Four stores, and one rule: a fact lives in exactly one of them.**

| Store | Holds | Property |
| --- | --- | --- |
| **Repo canon** (`CLAUDE.md`, `AGENTS.md`, `docs/rules/`) | What agents must obey: standards, safety rules, workflow, the constitution | Versioned, PR-reviewed, loaded by every session on every machine. If it is not here, half the team's agents never read it. |
| **Repo docs** (`docs/architecture/`, ADRs, runbooks, specs) | Durable knowledge humans and agents both consult | Versioned; audited monthly against the code. |
| **The wiki** (Notion, Confluence, Docmost, Tela) | Human-facing narrative: PRDs, research reports, release notes, onboarding prose | Reachable by agents over MCP for reading and writing, but never the source of truth for anything an agent must obey. |
| **Derived context** (knowledge graph, session handoffs, learnings ledger) | Regenerable understanding: code structure, paused-work state, accumulated lessons | Never canonical; rebuilt from the sources above. Losing it costs recompute, not knowledge. |

The rule is what makes the taxonomy useful. When someone proposes a fifth
store, the answer is not "no" but **"which of the four does this fact belong
in"**, which is answerable and usually settles it. A second memory system on
top of the graph and the canon adds sync problems, not recall.

| Tool | From | Role |
| --- | --- | --- |
| Graphify | tool | One queryable knowledge graph of the codebase, shared. `graphify query "<question>"` before raw grep; `graphify update .` after changes. Run with `--mcp` so agents query the graph as a tool and two people's graphs cannot disagree. |
| `/setup-gbrain` + `/sync-gbrain` | gstack | Code-index memory with per-remote trust policy. `--audit` shows which pages exist per project. |
| Sourcebot or Sourcegraph | tool | Multi-repo code search. Graphify is the single-repo answer; this is the "who calls this API across twenty repos" answer. Sourcebot is Zoekt-backed with a built-in MCP server. |
| Tela, Docmost, Notion | tool | The wiki. The property that matters is an MCP server, not the editor. Outline is humans-first and ships none, so agents reach it only through an integration you build. |
| `/handoff` and `/claude-handoff` | mattpocock | Compact a session into a handoff document, or hand it live to a fresh background agent. On a team this is also the person-to-person handoff. |
| `/context-save` / `/context-restore` | gstack | Branch, status, decisions, and remaining work as a timestamped checkpoint. `/context-save list --all` finds paused work across parallel streams. |

**Onboarding, human and agent.** New people and fresh agents have the same
problem, so the same tools serve both: `/codebase-onboarding` (ECC) for the
architecture map, entry points, conventions, and a starter CLAUDE.md;
`/code-tour` (ECC or zcaceres) for a CODE_TOUR.md with a Mermaid diagram of how
the pieces connect; `/teach` (mattpocock) for one concept inside this
workspace.

---

## Layer 6: Harness parity

Five differently-configured harnesses on one repo is five codebases wearing a
trench coat. This layer is how you stop that.

| Tool | From | Role |
| --- | --- | --- |
| Commit `.claude/` | this repo | Agents, skills, hooks, and settings versioned in the repo, not in each person's home directory. The single most important line in this document. |
| A private plugin marketplace | first-party, free | A git repo with `.claude-plugin/marketplace.json` bundling skills, agents, hooks, and MCP definitions. Distributing through Organization settings requires the repo to be private or internal. Turns "everyone should install these" into one command. |
| Managed settings | first-party, delivered by MDM | The policy floor users cannot override per machine. Pushed by MDM, file placement, or the Admin Console. Check what your org already licenses before buying an MDM for this; most enterprise licences include one. |
| `/agent-sort` | ECC | Builds an evidence-backed install plan for this repo, sorting skills, commands, rules, hooks into DAILY versus a parked LIBRARY. Run once, commit the result, publish through the marketplace, everyone loads the same DAILY set. |
| `/skill-library` | ECC | The router into the parked library, so an unusual task can reach a parked skill without everyone carrying it in context permanently. |
| `/optimize-skill-activation` | zcaceres | Right-sizes each skill's activation mode. Team-wide this is a context budget decision multiplied by headcount. |
| `/skill-stocktake` | ECC | Quality audit of installed skills and commands. Run when the shared set has grown without anyone pruning. |
| `/skill-comply` | ECC | Generates scenarios at three strictness levels, runs agents, classifies behavior. The only tool here that answers "is our canon real or decorative." |
| `/fewer-permission-prompts` + `/update-config` | built-in | A shared project `.claude/settings.json` allowlist so nobody is approving the same safe command forty times a day. |
| `/config-gc` | ECC | Periodic garbage collection of stale skills, orphaned hooks, redundant permissions. Quarterly. |

**Mixed CLIs are normal, plan for them.** Some of the team will be on Codex,
Cursor, or Gemini. Packs that ship multi-runtime adapters are worth preferring:
GSD's capability packs cover more than twenty runtimes, Superpowers ships
`.codex-plugin/`, `.cursor-plugin/`, `.opencode/` and a Gemini extension, ECC's
`/configure-ecc` handles install per harness. Keep `AGENTS.md` alongside
`CLAUDE.md` so non-Claude agents read the same canon.

**Moving execution off laptops.** The Claude Code GitHub Action
(`anthropics/claude-code-action@v1`) runs Claude Code inside a workflow, with
`plugin_marketplaces` and `plugins` installing your private marketplace into
the CI run so the same skills run server-side as locally, and OIDC workload
identity federation removing long-lived secrets from the repository. Self-hosted
environments run cloud sessions on runners inside your network when source code
cannot leave it; note they cannot route inference through Bedrock, Vertex,
Foundry, or an LLM gateway, and are unavailable with Zero Data Retention.

---

## Layer 7: Observability

Answering "what did the agents do, was it good, what did it cost" is a team
question.

**Claude Code exports OpenTelemetry metrics and events with one environment
variable,** into any OTLP backend. This is the highest-value item in the layer,
first-party, and free.

| Signal | What it answers |
| --- | --- |
| `claude_code.cost.usage`, `claude_code.token.usage` | Team spend by model, split by cache hit and miss |
| `claude_code.session.count` | Sessions, tagged `fresh`, `resume`, `continue` |
| `claude_code.lines_of_code.count` | Lines added and removed, by model |
| `claude_code.commit.count`, `claude_code.pull_request.count` | Output that reached the repo, not just the terminal |
| `claude_code.code_edit_tool.decision` | Accept and reject counts per tool, with `decision_source` |

Cost events carry `agent.name`, `skill.name`, and `plugin.name`, which turns
two guesses into measurements: a skill burning real money and never invoked
becomes a deletion you can point at. Prompt text is off by default.

**First-party dashboards also exist** at `claude.ai/analytics/claude-code` for
Team and Enterprise: lines accepted, suggestion accept rate, active users and
sessions, plus PRs and lines shipped once the GitHub app is connected.

| Tool | Role |
| --- | --- |
| Grafana Cloud, Datadog, or SigNoz | The OTLP backend. Grafana Cloud's free tier costs a small team nothing and is reported 50-70% cheaper than Datadog at similar scale. Whichever you pick also receives the product's telemetry, which is the argument for having exactly one. |
| ccusage, `/cost-tracking` (ECC) | Local token and cost analytics, per person. |
| `/context-budget` (ECC) | What every skill, rule, MCP server, and the CLAUDE.md chain costs in tokens. Multiply by headcount. |
| `/health` (gstack), `/code-quality-scoring` (claude-mpm) | The weekly code-quality dashboard, and the version you can show a non-engineer. |
| `/devex-review` (gstack) | Live developer experience audit. Ask it when onboarding keeps taking three days. |
| docs/HEALTH-METRICS.md | Where "unhealthy" becomes a number instead of a feeling. |

**Trunk-specific metrics worth watching from week one:** time from branch
creation to merge (the same-day rule, measured rather than asserted), time main
spends red per week (the revert SLA, measured), and open flags past expiry (the
sweep, measured). All three are the leading indicators of trunk breaking down,
and all three are cheap to pull from the forge API.

**The pricing lens that decides what you buy.** An AI-enabled team has few
humans and enormous activity per human. Per-seat and per-MAU tools stay cheap
as throughput grows. Per-snapshot, per-trace, per-score, and per-scan tools bill
you for exactly the thing you added agents to increase. Model every metered tool
at 5x current PR volume before signing, and remember that machine-review LLM
tokens are themselves a meter that scales with PR count.

---

## Layer 8: Production, what happens after merge

Layers 1 to 7 get code into main safely; this covers the week after, and on a
team that week has an owner who is not the author.

### Deploys: per ticket, or batched

Trunk's default is **deploy per ticket, on green**, and the reason is the same
reason trunk exists: batching couples unrelated work. In a weekly or nightly
train, one bad ticket blocks every other ticket in the batch, and the pressure
that creates is what makes teams invent pre-release escape hatches for QA. Per
ticket, a bad change blocks only itself, and the revert is one commit rather
than a bisect across twelve.

Batched trains still make sense against a real constraint: a platform whose
install or publish step is slow or manual, a customer-facing change window, or
a compliance process that reviews releases rather than changes. Name the
constraint. If none of them apply, the batch is habit.

What per-ticket deploys require that batched trains do not, and all three are
already above: the merge queue, so concurrent merges do not produce a broken
main to deploy from; the revert rule, so a bad deploy has a one-command answer;
and CI fast enough that latency is not the merge rate.

| Need | Pick | Note |
| --- | --- | --- |
| The deploy platform | Vercel, Render, Railway, Fly.io hosted; Coolify or Kamal self-hosted | Hosted unless cost at scale says otherwise. |
| Preview environment per branch | Vercel, Netlify, Render; Argo CD PR generator or Coolify self-hosted | The highest-value purchase for a product with a UI: `/qa` runs in CI against a real URL instead of one person's localhost, and DAST gets a target. |
| Pre-deploy watch | `/canary <url> --baseline` before, `/canary <url>` after (gstack) | Screenshots, console error counts, and load times against the pre-deploy baseline. Ten-minute watch. |
| Rollback | The previous version, installed | Decide the threshold in advance so rollback is policy, not a debate at 5pm. |

### Environment drift check, before the deploy

Code that passed QA still breaks production, and the usual reason is not the
code. The QA environment is a close cousin of production, not a clone:
dependency versions, platform settings, account configuration, and feature
flags all drift between them, and the running application is composed from
those at deploy time.

**Diff the two before the human approves, not monthly.** A script reads the
installed versions and the settings that matter from both environments via the
platform's CLI or API, and posts the summary on the deploy job. The approver
sees "these four things differ" before clicking rather than discovering it
afterwards. A monthly environment audit catches drift eventually; a per-deploy
diff catches it before it bites, and it costs one script that gets written
once.

Two things make it worth more than it looks. It is the same script your backup
story needs, since it already reads the configuration nobody has snapshotted.
And it turns "why did that break in production" from an investigation into a
lookup, because the drift summary from that deploy is in the job log.

### Incidents, backups, support, compliance

**Incidents.** `/incident-response` and `/runbook-structure` (Han) write the
severity ladder, the comms protocol, and the runbooks before anyone needs them;
`/sre-incident-response` (Han) works the live one. Every incident closes with a
regression test and a `/learn` entry, same as a bug, which is the loop back into
Layer 1 canon. Rotation, paging, and status pages are priced in
docs/process/STACK-TEAM.md; under nine people Better Stack bundling uptime,
on-call, and the status page usually beats three products, and incident.io
(~$45/user) is the option that is a product rather than a pager.

Add the agent-shaped entries a normal runbook lacks: an unattended loop that
opened forty pull requests, an agent that force-pushed, a backfill pointed at
production. `/guard` and `/freeze` are the prevention; the runbook is for when
prevention did not hold.

**Uptime for the quiet failures.** Sentry sees thrown errors; nothing notices a
service that is down but silent. Uptime Kuma self-hosted **on infrastructure
separate from the app**, or Checkly hosted when the checks should be real
browser scripts from multiple regions. A monitor that dies with the thing it
monitors is not a monitor.

**Backups and restore.** `/backups` (rsc-harness) for RPO and RTO targets and
3-2-1-1-0 copies. The team version of the rule is that the restore drill has a
named owner and a date, because "we have backups" is a claim nobody has tested
until someone times a restore. Quarterly, and the number you get is your real
RTO.

**Support as product input.** A helpdesk wired into the tracker so a user
complaint becomes a ticket with the same shape as any other. `/triage`
(mattpocock) is the intake state machine, the `support` agent turns feedback
into Backlog tickets, and `/document-release` plus the Diataxis suite keep the
help docs from drifting behind what shipped. Chatwoot self-hosted or Zendesk
hosted, wired into the tracker, is the tooling half.

**The compliance floor.** Whatever `/compliance` (rsc-harness) scoped in
docs/process/PROCESS.md stage 5 becomes an ownership row here, not a document.
Most of the evidence a SOC 2 window wants is already emitted by Layer 4: review
before merge, change management, vulnerability remediation. Decide where it is
exported while Layer 4 is being wired, not during the audit.

---

## Layer 9: The human layer

What stays human, and the tooling that keeps the human parts short.

**Two gates, and only two.** Humans approve the plan and approve the merge;
agents do everything between. That is the `/orch-pipeline` (ECC) model and it
holds on trunk unchanged.

**Decisions.** For contested ones: `/council` (ECC, four voices),
`/plan-eng-review`, `/plan-ceo-review`, `/plan-design-review`,
`/plan-devex-review` (gstack), or `/autoplan` (gstack) to run all four
sequentially with auto-decisions. `/decision-doc` (PM OS) captures the outcome
with rationale and alternatives.

**Product review.** `/prd-review-panel` (PM OS) fans a PRD to seven parallel
reviewers. Seven parallel reviewers is cheaper than seven calendars.

**Comms.** `/internal-comms` (claude-mpm) for concise 3P updates (Progress,
Plans, Problems). `/meeting-notes` (PM OS) to turn a transcript into decisions
and action items, which then become tickets via `/to-tickets` and ADRs via
`/write-adr`.

**Learning.** `/retro` (gstack) weekly, reading the Layer 7 telemetry rather
than memory. `/learn` (gstack) into docs/LEARNINGS.md as things happen.
`/skillify` (gstack) the second time anyone on the team runs the same manual
flow: on a team the payoff multiplies by headcount.

**When you cannot answer.** `/to-questionnaire` (mattpocock) turns a decision
you cannot fully answer into a questionnaire for the person who can, which is a
better artifact than a meeting.

---

## Accessibility

Optional in the sense that a headless service does not need it, and not
optional in any other. Turn it on for any repo with a user interface, and turn
it on at the start, because retrofitting it is the expensive version.

Three gates, each cheap, each riding infrastructure this document already
installs:

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
by name.

docs/process/PROCESS.md stage 13 carries the depth: the target standard, the
implementation patterns, where accessibility overlays fit, and the
internationalization decision that has the same shape.

---

## Adoption sequence

Do not install everything at once. Each week's layer makes the next one
cheaper. Trunk moves flags and the merge queue earlier than the stacked route
does, because trunk does not work without them.

| Week | Install | Done when |
| --- | --- | --- |
| 1 | Canon and pre-commit gates: CLAUDE.md plus `docs/rules/` committed, `/constitution` carrying the three trunk rules, `/coding-standards`, `/setup-pre-commit`, `/security-gitleaks`, gate tests in CI | A fresh clone plus a fresh agent produces house-style code with nobody in the room |
| 2 | Required status checks on the protected branch: build, gate tests, secret scan, SAST. CODEOWNERS over .github/workflows and zizmor in CI from the start | A PR failing any check cannot be merged by anyone, including whoever configured them |
| 3 | Flags and the queue: flag platform live, expiry required at creation, the registry committed, the flag-first check wired, merge queue on | Incomplete work merges dark instead of waiting in a branch, and two green PRs cannot break each other after landing |
| 4 | Queue and isolation: one tracker with a label vocabulary, `/to-tickets`, `/intent-driven-development`, tickets sized to merge same day, worktree-per-claim | Two people pick work without asking each other, and no branch is older than a day |
| 5 | The review layer: RoboRev on every commit, `/code-review`, `/stack-ship` with `/z-adversarial-review` | Nothing reaches main that no machine reviewed |
| 6 | Knowledge and parity: `.claude/` committed and published as a private plugin, managed settings floor pushed, `/agent-sort` DAILY set agreed, Graphify indexed with `--mcp` | A new laptop reaches parity in two commands, and a new hire ships a real ticket on day two |
| 7 | Telemetry: OTel export on, one backend, the three trunk metrics on a dashboard, `/retro` and `/health` weekly | The retro cites data instead of impressions, and branch age is a number |
| 8 | Production: preview environments, per-ticket deploys with the canary watch, the drift check on the deploy job, an incident runbook with a severity ladder and the revert SLA, a timed restore drill, support wired into the tracker | Merge to deployed with no keystrokes, a page has a runbook, and a restore has a measured RTO |

`/schedule` (built-in) puts the weekly and monthly cadence on a cron so it
does not depend on anyone remembering. The monthly items: the flag sweep,
`/ponytail-audit`, `/quality-docs-update`, `/cso --comprehensive`.
`/config-gc` stays quarterly, per Layer 6.

---

## Scaling by team size

| Size | What changes |
| --- | --- |
| 2 to 3 | Canon plus required checks plus a shared tracker is enough, and the merge queue can wait until two people merge on the same day often enough to notice. Flags cannot wait: they are how trunk works at any size. Contracts matter as soon as two people own two services. |
| 4 to 8 | The merge queue becomes real. Add named ownership per service directory and per shared tool. Add severity-tagged review so "blocking" means the same thing to everyone. Add an agent-readable wiki: at this size knowledge stops fitting in the repo docs. Layer 8 starts mattering, because an incident now has a person who did not write the code. |
| 9+ | `/skill-comply` quarterly, because at this size canon drifts silently. Separate the deploy owner from the on-call rotation. A secrets manager instead of `.env` files. `/context-budget` becomes a budget line. Consider parallel merge queues (Aviator) if the queue itself becomes the bottleneck. |

---

## Ownership

Every shared tool needs a name against it, or it rots.

| Surface | Owner's job |
| --- | --- |
| CLAUDE.md and `docs/rules/` | Reviews every change to canon. Runs `/rules-distill` and `/claude-md-improver` quarterly. |
| The gate | Owns pre-commit, CI, RoboRev config, the required-check list. Fixes a red gate as first priority; a red gate that is normal is not a gate. |
| **Trunk health** | Owns the revert SLA and has the authority to revert anyone's merge without asking. Watches branch age and time-main-spends-red. The role that makes trunk work; distinct from the gate owner, who makes the checks work. |
| **Flags** | Owns the registry, runs the monthly sweep, chases expired flags to a ticket. Small job, and the one that decays silently if nobody holds it. |
| The merge queue | Owns its config and watches its throughput. A queue backing up is a CI-speed problem surfacing somewhere else. |
| The shared `.claude/` set and the marketplace | Owns the DAILY versus LIBRARY split and pack upgrades. Runs `/skill-stocktake` and `/config-gc`. |
| Contracts and schemas | Owns `contracts/`. Any cross-service change is a schema version bump and both sides updated in the same PR. |
| Design system | Owns docs/DESIGN.md and its Storybook. Rejects UI that deviates without a decision. |
| Deploy and on-call | Owns the deploy job, the drift check, canary baselines, alerting. |
| The pipeline | Owns CODEOWNERS, action pinning, `GITHUB_TOKEN` scopes, and the zizmor check. Distinct from the gate owner: this one owns the gate's own integrity. |
| Incidents and restore | Owns the runbooks, the severity ladder, the rotation, and the quarterly timed restore drill. |
| Telemetry | Owns the OTel pipeline and the dashboard. A dashboard nobody reads is a subscription, not observability. |
| Compliance | Owns the control register and where its evidence is exported. Nothing to do most quarters, which is why it needs a name. |
| Support | Owns the helpdesk-to-tracker loop and the help docs. |
| Cost | Reads the telemetry monthly, raises it before finance does. |

---

## Anti-patterns

The general ones, which apply on any route:

- **Canon in `~/.claude` instead of the repo.** Half the team's agents have
  never read your rules.
- **A gate that is normally red.** Once red is normal, the gate is decoration.
- **One giant PR because agents made it fast.** Review quality falls off a
  cliff with diff size, and agent-authored diffs get large by default.
- **Trusting a review the agent could see coming.** If the reviewer sat in the
  conversation that produced the code, it is not an independent review.
- **Different packs per person.** Two reviewers with different standards skills
  produce contradictory review comments and a team that stops trusting review.
- **A pipeline an agent can edit unreviewed.** Without CODEOWNERS on
  .github/workflows, the gate can be weakened by the same process it gates, and
  the diff looks routine.
- **Backups nobody has restored.** Untested backups are a belief, not a control.
- **Treating agent-read text as trusted.** An issue body, a fetched page, and an
  MCP response are all inputs an agent may act on.
- **A metered subscription priced before you added agents.** Re-model it at 5x
  PR volume.

The trunk-specific ones, which are how this route actually fails:

- **A branch that outlives the day.** This is long-lived branching regardless of
  what the diagram says, and every property in this document assumes it does not
  happen. Watch branch age as a metric, not as a vibe.
- **A flag with no expiry.** It becomes permanent, and a permanent flag is an
  untested code path that every agent reads as live behavior.
- **The sweep nobody runs.** Flag debt compounds faster than code debt because
  each stale flag doubles the state space the next reader has to hold.
- **A red main nobody reverts.** The first time fixing forward wins the
  argument, the SLA is gone, and trunk degrades into a shared branch that is
  broken half the time.
- **Trunk without a merge queue,** once more than one person merges per day.
  Two green PRs that break each other after landing is not a rare event at agent
  volume; it is Tuesday.
- **Pre-release builds from unmerged branches as the default QA path.** It tests
  code that is not what merges. Keep it for the platform-level changes a runtime
  flag cannot cover, and nothing else.

---

## Tool tier

What a trunk team installs, over and above a solo setup
(docs/process/PROCESS-SOLO.md).

**Day one, because trunk does not work without them:**

| Tool | Why |
| --- | --- |
| A flag platform | Statsig or GrowthBook Cloud free tiers. The mechanism that lets incomplete work merge. Not a Tier 2 trigger on this route. |
| A merge queue | Native on public org repos or Enterprise Cloud; Graphite or Mergify on Team with a private repo. Semantic conflicts are the default failure of concurrent merges. |
| Required status checks on the protected branch | Free. The gate. Pre-commit is the echo. |
| gitleaks or GitGuardian | Free under 25 developers. Day one, because retrofitting over a polluted history makes CI permanently red. |
| RoboRev + Stax + zg-skills | Machine review that scales linearly with output, and bounded stacking. |
| CODEOWNERS + SHA-pinned actions + zizmor | Free, seconds to run, and the cheapest control nobody installs. |

**Week two onward:**

| Tool | Why |
| --- | --- |
| Graphify (with `--mcp`) | One shared code graph. Answers architecture questions identically for everyone, which grep does not. |
| OpenGrep | Free SAST in CI. Qodana or Codacy if a managed dashboard is worth $6-15 per seat. |
| Promptfoo | Evals as a required check. Free, self-hosted, and the only thing that enforces the evals rule rather than stating it. |
| Preview environments | The highest-value purchase for a UI product: `/qa` and ZAP both get a real URL. |
| OTel backend (Grafana Cloud free tier) | Receives Claude Code telemetry and the product's. Have exactly one. |
| Sentry | Errors, grouped, with spike protection capping surprise bills. |
| Uptime Kuma or Checkly | The quiet failures Sentry cannot see. Separate infrastructure from the app. |
| Lighthouse CI server | Free, self-hosted. Accessibility and performance as pass-or-fail per PR. |
| Codex CLI + Gemini CLI + Antigravity | Cross-vendor skeptic seats for `/z-adversarial-review`. Different vendors have different blind spots. |
| A tracker with an MCP server | Linear, Jira, GitHub Projects, or Plane. Per-seat, so it stays cheap. |
| An agent-readable wiki | Tela, Docmost, or Notion. The moment a second person needs project knowledge. |

**On a trigger:** a secrets manager (secrets shared beyond one machine),
managed CI runners (CI latency binds the merge rate), Temporal (first real
background job), Storybook (UI repo), a browser service (`/qa` and `/canary`
need to run server-side), an MCP gateway (tool credentials should leave
laptops), Sourcebot or Sourcegraph (multi-repo search), an identity provider
(before the twelfth service, not after).

**Hold:** multi-agent desktops and orchestrators. Native subagents, worktrees,
and Workflow scripts cover the orchestration this process needs. A second
memory layer on top of Graphify plus the canon adds sync problems, not recall,
and Layer 5's four-store rule is the answer when someone proposes one.

---

## Pack dependencies

| Source | What it powers here | Weight |
| --- | --- | --- |
| garrytan/gstack | QA, review, deploy, canary, benchmark, security audit, context save, plan reviews | Core: the operational spine |
| mattpocock/skills | Tickets, triage, TDD, implement, two-axis code review, handoffs, agent-facing docs, git guardrails | Core: the engineering spine |
| roborev + stax + zg-skills | The merge gate that scales to agent volume | Core: non-negotiable |
| affaan-m/ECC | `/ai-first-engineering`, `/contract-first`, `/intent-driven-development`, ADRs, `/skill-comply`, `/agent-sort`, harness hygiene | Broad; install via `/agent-sort`, not wholesale |
| claude-mpm | PR quality checklist, severity-tagged review standards, `/writing-plans`, `/internal-comms` | High value for the review and comms layers |
| Superpowers | `/receiving-code-review`, `/verification-before-completion`, `/dispatching-parallel-agents`, worktree discipline | Adopt the named skills even if not the whole method |
| GSD | The issue-driven loop pattern (`gsd-loop-*`), guard and injection-scanning hooks, multi-runtime capability packs | Reference for the queue and guard patterns |
| zcaceres/skills | Permissions, gitleaks, dead code, docs audit, safety hooks | High value, small footprint |
| rsc-harness | `/constitution`, `/agent-safety`, `/github-actions`, `/monitoring`, `/backups`, `/compliance` | The ops and infra bench |
| PM OS | PRD review panel, metrics, launch checklist, comms templates | Core when the team has product people |
| Trail of Bits | Deep security bench | Pull in when the stakes rise |
| ponytail | Over-engineering review and audit, debt ledger | Already a mode; the audit is a monthly cadence item |

Install per source via the files in docs/frameworks/; the full skill catalog by
workflow stage lives in docs/frameworks/Z-TOP-SKILLS.md.

---

The short version: **commit the canon, machine every gate, merge every day,
flag what is not finished, and revert what goes red.** Everything else in this
document is an implementation of one of those five.
