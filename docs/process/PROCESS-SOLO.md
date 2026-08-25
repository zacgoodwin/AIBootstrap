# The Solo Builder's Process

One person, one product, agents doing most of the typing. A second route
through the same catalog as docs/process/PROCESS.md, cut for the case where there is
no one else: no reviewer, no PM, no designer, no QA, and nobody who notices
if you skip a step.

Read docs/process/PROCESS.md for the full-lifecycle route with every alternate named.
This document assumes you cannot afford that route's ceremony and keeps what
survives contact with a one-person schedule. When a second person arrives, the
team routes are docs/process/PROCESS-TEAM.md plus
docs/process/PROCESS-TEAM-SERVER.md for stacked PRs, or
docs/process/PROCESS-TEAM-TRUNK.md for trunk-based.

## What actually changes when it is just you

Five constraints drive every choice below.

1. **You are every role.** A team catches mistakes because a second person
   reads the work. Alone, that reading has to be manufactured on purpose.
2. **Attention is the scarce resource**, not agent time. Tokens cost money,
   but a wasted afternoon costs more.
3. **Nothing is blocked on anyone**, so nothing forces you to write anything
   down. Cross-session amnesia is the top solo failure: two hours lost on
   Thursday re-deriving what Tuesday already decided.
4. **Scope creep has no predator.** Nobody is going to say "that is not worth
   building."
5. **QA is the first thing to go.** You wrote it, so you believe it works.

Four rules answer those constraints:

- **Manufacture the reviews you do not have.** Every decision that is
  expensive to reverse gets an adversary before it gets committed.
- **Write down what you would otherwise carry in your head.** Not for
  teammates, for tomorrow-you and for the next agent session.
- **Machine gates over personal discipline.** You will not remember to run
  the check. The hook will.
- **Buy back attention, not tokens.** Push mechanical work down to cheaper
  models and overnight loops. Keep the judgment.

## The minimum install

A solo builder who installs nineteen packs spends more time tuning the harness
than shipping the product. Start here, add only on a real trigger.

| Install now | Why it is not optional for one person |
| --- | --- |
| garrytan/gstack | The operational spine: QA, review, deploy, canary, security audit, context save. The largest single reduction in "things you have to remember." |
| mattpocock/skills | The engineering spine with the lowest overhead per ticket: research, spec, tickets, TDD, implement, code review, handoffs. |
| RoboRev + Stax + zg-skills | The reviewer you do not employ. RoboRev reviews every commit, `/stack-ship` gates the branch, `/z-adversarial-review` attacks the PR blind. |
| ponytail | The voice that says "you do not need that." Solo projects over-build because nothing pushes back. |
| PM OS, subset only | `/prd-review-panel`, `/write-prod-strategy`, `/define-north-star`, `/feature-metrics`, `/launch-checklist`. Skip the meeting and status skills entirely, you have no meetings. |
| zcaceres/skills, subset only | `/optimize-permissions`, `/security-gitleaks`, `/clean-ai-slop`, `/loose-ends`, `/test gaps`. Small footprint, high value. |

Then run `/agent-sort` to split that set into a DAILY bucket and a parked
LIBRARY, so the context window carries only what this repo uses.

**Hold until triggered:** ECC as a whole (cherry-pick the named skills below
instead), Trail of Bits (until you handle money, auth, or user data at scale),
Han and Mindrally (until you want stack-specific patterns), rsc-harness and
GSD and Superpowers (alternate loop engines; adopting a second one is churn,
not leverage).

---

## Movement 0: Setup, about an hour, once

Everything here removes a recurring tax.

| Run | From | What it buys |
| --- | --- | --- |
| `/agent-sort` | ECC | The DAILY vs LIBRARY split, so the harness stays small. |
| `/setup-pre-commit` | mattpocock | Husky plus lint-staged: format, typecheck, test on every commit. The gate you will otherwise skip. |
| `/security-gitleaks` | zcaceres | Scans history first, then installs the hook and pinned CI. Solo projects leak keys because nobody reviews the `.env` line. |
| `/optimize-permissions` | zcaceres | Reads your transcripts and writes the allowlist. Kills the permission-prompt friction that makes you babysit sessions. |
| `/git-guardrails-claude-code` | mattpocock | Hooks that block `push`, `reset --hard`, `clean`, `branch -D` before they run. No teammate will notice you nuked a branch. |
| `/setup-deploy` | gstack | Wires deploy once so `/land-and-deploy` works later without a detour. |

Brownfield instead of greenfield: `/codebase-onboarding` (ECC) for the
architecture map and starter CLAUDE.md, plus `/inherit-legacy-style` (ECC) if
the existing code has conventions the agent must match.

Skip for now: gbrain, Graphify, worktree tooling. Add Graphify when the repo
outgrows your memory of it. Add worktrees when you actually run two sessions
at once.

---

## Movement 1: Decide, one or two sessions, not a week

The Define phase in docs/process/PROCESS.md has nine stages. Alone, most of that is
documentation for readers who do not exist. Four stages survive, each because
it prevents an expensive mistake.

### 1. Sharpen the idea before it becomes a fact

| Primary | From | Why |
| --- | --- | --- |
| `/office-hours` | gstack | YC-style interrogation of whether the thing is worth building. The review a solo builder most reliably skips and most needs. |
| `/grill-with-docs` | mattpocock | Relentless interview that breaks or confirms every weak decision, leaving ADRs and a glossary on disk as it goes. Two outputs for one session. |
| `/wait-what` | mattpocock | When your own pitch does not land back at you, re-pitch it. Cheap sanity check. |

Pick one of the first two, not both. `/grill-with-docs` when you want the
artifacts, `/office-hours` when you are unsure the idea is real.

### 2. One document, seven reviewers

| Primary | From | Why |
| --- | --- | --- |
| `/prd-draft` | PM OS | Clarifying questions, then a PRD. Even a one-person PRD earns its keep: it is what tomorrow-you and every agent session read instead of guessing. |
| `/prd-review-panel` | PM OS | Fans it to seven parallel reviewers (engineer, designer, executive, legal, UX research, skeptic, customer voice). The highest-leverage skill in the catalog for a solo builder: the entire team you do not have, for one command. |
| `/spec` | gstack | Turns approved intent into a precise five-phase executable spec. This is what the build loop implements against. |

Use `--perspectives "eng,design,skeptic"` when the full seven is overkill. Add
`/council` (ECC, four voices) or `/dev-team` (ECC, PM plus architect plus
developer plus QA personas in one session) when one specific decision is stuck
rather than the whole document.

### 3. The three choices that are expensive to reverse

Everything else can change later. These cannot, so spend the session.

**Stack and structure.** `/codebase-design` (mattpocock) for deep-module
vocabulary, `/domain-modeling` (mattpocock) to pin the names before they
calcify wrong, `/search-first` (ECC) to check whether the thing already exists
before you build it. Record the result in docs/architecture/STACK.MD.

**Data.** `/supabase-postgres-best-practices` (official) before writing any
schema. `/database-migrations` (ECC) for how you will change it later. Schema
mistakes are the most expensive solo mistake, because you are the only person
who will ever run the migration.

**Visual.** `/design-consultation` (gstack) produces the design system, which
becomes docs/DESIGN.md and governs every UI decision after. `/design-shotgun`
(gstack) when you want to choose with your eyes instead of adjectives.
`/stitch-skill` or `/taste-skill` (taste-skill) so the result does not look
like every other AI-built app.

Record decisions as they happen: `/architecture-decision-records` (ECC) or
`/write-adr` (Beagle). Not for a reader, for the version of you in six weeks
who wants to know why.

### 4. Cut it into tickets

| Primary | From | Why |
| --- | --- | --- |
| `/to-tickets` | mattpocock | Tracer-bullet tickets with blocking edges declared, published to a tracker. Built for feeding an agent loop, which is exactly what you are doing. |
| `/intent-driven-development` | ECC | Puts verifiable acceptance criteria on each ticket. Those criteria are the independent yardstick the merge gate checks against, which matters more alone: you cannot both write the code and be its only judge. |
| `/blueprint` | ECC | For work spanning many sessions. Each step carries a self-contained context brief, so a fresh agent picks it up without you re-explaining the project. |

Tracker: **Kata** is the right default for one person. Local-first, CLI and
TUI, built for agent loops, no account, no sync. GitHub Issues works if the
repo is public. Linear is overkill.

Skip `/wayfinder` unless the work genuinely will not fit in a month of
sessions.

---

## Movement 2: Build, the loop you live in

```
pick ticket -> worktree (optional) -> TDD -> commit -> RoboRev
     ^                                                    |
     |                                        fix findings (bounded)
     |                                                    |
     +------- next ticket <------- /stack-ship (gate, PR, adversarial review)
```

### 5. The loop

| Primary | From | Why |
| --- | --- | --- |
| `/implement` or `/tdd` | mattpocock | `/tdd` when the logic is non-trivial or it is a bug fix, `/implement` when the ticket is mechanical. The acceptance criteria on the ticket are the contract. |
| `/roborev-refine` | roborev | Review, fix, commit, re-review, capped iterations. The closed loop matters alone: single-pass review puts you back to being the only judge. |
| `/stack-ship` | zg-skills | RoboRev gate with bounded auto-fix, squash to one clean PR via stax, blinded adversarial review on that PR, version bump. One command replaces the whole team ritual. |
| ponytail | ponytail | A mode, not a command. The YAGNI ladder is the counterweight to building the thing nobody asked for. |

Worktrees are optional for one person running one session. Use `EnterWorktree`
when you actually run two agents at once, or want to abandon an experiment
cleanly. `/quality-worktree-setup` (zcaceres) automates it if that becomes
routine.

Alternate whole-loop engine: `/oldhand:oldhand` goes ticket to proof in one
command (trace the flow, research prior art, minimal implementation, browser
verification). Worth trying when the multi-step loop feels like too many
commands for a small change.

### 6. Prove it runs

You wrote it, so you believe it works. That belief is the failure mode.

| Primary | From | Why |
| --- | --- | --- |
| `/qa` | gstack | Drives the real app in a browser, finds bugs, fixes them. Non-negotiable for any UI change: tests pass on code that renders a blank page. |
| `/run` | built-in | Launches the project's app so you see the change in the real thing, not just green tests. |
| `/test gaps` | zcaceres | Cross-references tests against source: untested branches, error paths, boundaries. Run before calling anything done. |
| Gate tests | this repo | `node tools/gate.mjs` plus project tests. Deterministic, free, under two seconds, every commit. The floor. |

**Accessibility, opt in per project.** Skip it for a headless service. For
anything with a user interface, turn it on now, because retrofitting a11y alone
is worse than retrofitting it with help. Three cheap gates, in order of how
early they catch: `eslint-plugin-jsx-a11y` in the pre-commit hook,
`@axe-core/playwright` inside whatever E2E you already run, and Lighthouse CI
budgets on changed routes. `/accessibility` and `/frontend-a11y` (ECC) do the
design and implementation half inside the loop.

Then know the ceiling, because alone you have nobody to catch what the tools
miss: automated tooling covers roughly 30-50% of WCAG criteria. Put one manual
screen-reader pass on the monthly hour, on whichever flow costs you most if it
breaks. If a customer ever asks for a VPAT, that is a third party's job, not
yours. docs/process/PROCESS.md stage 13 has the rest, including why an
accessibility overlay is not a substitute.

### 7. Gate it

| Primary | From | Why |
| --- | --- | --- |
| `/code-review` | mattpocock | Two parallel axes: Standards (does it follow this repo's documented conventions) and Spec (does it do what the ticket asked). The spec axis catches solo drift. |
| `/z-adversarial-review` | zg-skills | Runs inside `/stack-ship`. Blinded: a fresh reviewer gets the spec, the criteria, the diff, and a throwaway worktree, holding nothing else, plus skeptic sub-agents. It cannot be talked around because it was never in the conversation. |
| `/codex review` | gstack | A different vendor's model on the same diff. Different training, different blind spots. Cheap second opinion when the change is risky. |
| `/agent-self-evaluation` | ECC | The agent rates its own output on accuracy, completeness, clarity, actionability, conciseness, with evidence per criterion. Not a substitute for the above, but it catches obvious gaps for free. |

`/code-review ultra` (built-in) launches a multi-agent cloud review when the
branch is genuinely hairy. It is billed and user-triggered, so save it for the
changes where being wrong is expensive.

### 8. When it breaks

| Primary | From | Why |
| --- | --- | --- |
| `/investigate` | gstack | The default entry point for any bug. Root cause, not symptom. |
| `/orch-fix-defect` | ECC | Reproduce as a failing regression test, fix to green, review, gated commit. The rule "every bug ships the test that would have caught it" made mechanical. |
| `/diagnosing-bugs` | mattpocock | The hard ones, and performance regressions. |
| `/baseline-restorer` | Han | When repeated fix attempts have made things worse, which happens more alone because nobody stops you at attempt four. |

---

## Movement 3: Ship

### 9. Deploy and watch

| Run | From | When |
| --- | --- | --- |
| `/canary <url> --baseline` | gstack | Before deploying. Captures screenshots, console error counts, load times as the comparison point. |
| `/land-and-deploy` | gstack | The deploy itself, wired in Movement 0. |
| `/canary <url>` | gstack | After. Ten minutes of watching against the baseline. You have no on-call rotation, so this is the rotation. |
| `/benchmark <url>` | gstack | Performance versus baseline when the change touched anything user-facing. |
| `/monitoring` | rsc-harness | Once, early: uptime and alerts, so you learn it is down before a user emails you. |
| `/document-release` | gstack | After the deploy sticks: fold what shipped back into the docs while it is still fresh. |

### 10. When production breaks and you are the rotation

You have no on-call rotation, which does not mean nothing pages. It means the
page arrives as an email from a user, hours late, while you are doing something
else. Two cheap things make that survivable, and both have to exist before the
outage rather than during it.

| Run | From | When |
| --- | --- | --- |
| `/incident-response` | Han | Once, early. Produces the severity ladder and a runbook per known failure mode. Alone the runbook's reader is you at 2am with none of today's context, which is a real second person. |
| `/backups` | rsc-harness | Once, before real user data exists. RPO and RTO targets and 3-2-1-1-0 copies. A managed Postgres with automated backups covers most of it; the part it does not cover is whether you can restore. |
| A timed restore drill | none, do it by hand | Quarterly. Restore into a scratch database and time it. That number is your real RTO. Nobody else is going to discover the backup was empty. |
| `/investigate` | gstack | After containment, when the question turns from "stop the bleeding" to "why". |

**Fold the incident back in, the same way a bug folds back in.** The regression
test that would have caught it, plus a `/learn` entry. Solo, this is the whole
mechanism that stops the same outage twice, because there is no second person
carrying the memory.

**The unattended-agent failure modes are the ones you will actually hit.** A
loop that opened thirty pull requests overnight, an agent that force-pushed
over a branch, a backfill run against production because that was the default
connection string. `/guard` and `/freeze` (gstack) plus the zcaceres safety
hooks are the prevention; snapshot before any data-modifying job. termly-cli on
your phone is the closest thing to a pager you have.

**Compliance, only when it binds you.** Most solo projects owe nothing here and
should skip it. The moment one of three things is true, run `/compliance`
(rsc-harness) once and `/gdpr-privacy` (rsc-harness) for the published
artifacts: you take card payments (keep card entry in the processor's hosted
fields so your servers and your CI never see a card number), you handle
personal data of EU users, or you are selling to a company whose procurement
will ask for a security questionnaire. Doing it at that moment is an afternoon.
Doing it after the architecture assumed otherwise is a rewrite.

### 11. Tell someone it exists

Solo products die unlaunched more often than they die broken. Keep this thin.

| Primary | From | Why |
| --- | --- | --- |
| `/brand-voice` | ECC | Build the writing-style profile once from your real writing. Every content skill after consumes it, so nothing ships in default-AI voice. |
| `/landing-copy` | rsc-harness | The one conversion page: hero, offer, proof, one call to action. |
| `/launch-checklist --template small` | PM OS | The small-feature template, not the major one. You have no partner enablement or investor comms to sequence. |
| `/copywriting` | zcaceres | Strips the AI tells out of prose before it goes public. |

Add `/seo` (ECC) once there is something worth indexing, and `/content-engine`
plus `/crosspost` (ECC) only when you have committed to a publishing cadence
you will actually sustain.

---

## Movement 4: Keep, the maintenance you will actually do

A team runs six recurring passes. Solo, they collapse into two cadences: the
weekly check and the monthly hour.

### 12. Session and week

| Run | From | Why |
| --- | --- | --- |
| `/loose-ends` | zcaceres | Every session end, not weekly: bugs you mentioned but did not fix, decisions you deferred, things you promised. The best single defense against solo amnesia. |
| `/context-save` | gstack | Also per session when work is unfinished. Branch, status, decisions, remaining work into a checkpoint `/context-restore` reads. |
| `/health` | gstack | The weekly glance at code quality. |
| `/learn` | gstack | Whenever something was learned, into docs/LEARNINGS.md. |
| `/clean-ai-slop` | zcaceres | Per branch before shipping: tombstone comments, restated-code comments, defensive try/catch, `any` casts. |

### 13. The monthly hour

| Run | From | Why |
| --- | --- | --- |
| `/ponytail-audit` | ponytail | Whole-repo over-engineering hunt. The counterweight to a month of additive work with nobody saying no. |
| `/cso --diff` | gstack | Security audit scoped to the branch. Run `--comprehensive` quarterly, not monthly, unless you handle user data. |
| `/quality-docs-update` | zcaceres | Audits docs against current code. Your docs are agent input, so drift degrades every future session. |
| `/ponytail-debt` | ponytail | Harvests every `ponytail:` shortcut comment into a ledger, so deliberate corners get revisited instead of forgotten. |
| `/context-budget` | ECC | What every skill, rule, and MCP costs in tokens, with prioritized savings. Directly a money question when it is your money. |
| `/cso --skills` | gstack | Quarterly rather than monthly. Scans the installed skills as the third-party executable text they are. Solo you install packs faster than anyone reviews them, and a skill runs with your credentials. |

Automate the cadence: `/schedule` (built-in) creates cron routines, `/loop`
handles recurring runs inside a session. A solo builder who has to remember
the cadence does not have a cadence.

Skip monthly: `/retro` (a retrospective with yourself is a journal, use
`/learn`), the `/review-llm-artifacts` chain (worth it on a large legacy
codebase, not a young one), `/config-gc` (quarterly at most).

---

## The substitute bench

The whole solo problem in one table: the role you do not have, and what stands
in for it.

| Role you do not have | Stands in | When to call it |
| --- | --- | --- |
| Eng manager | `/plan-eng-review` (gstack) | Before committing to a plan that spans weeks. |
| Staff engineer on the design | `/grill-with-docs` (mattpocock), `/design-an-interface` (GSD) | Any interface or module you will live with. |
| Second reviewer | `/z-adversarial-review` (zg-skills), `/codex review` (gstack) | Every PR, automatically, through `/stack-ship`. |
| Designer | `/design-consultation` then `/design-review` (gstack), `/anti-ui-slop critique` (uizze) | Once for the system, then per UI change. |
| Product manager | `/prd-review-panel` (PM OS), `/product-lens` (ECC) | Before building, when you suspect you are building the wrong thing. |
| QA | `/qa` (gstack), `/test gaps` (zcaceres) | Every ticket that touches the running product. |
| Security engineer | `/security-review` (ECC) in-loop, `/cso` periodically | Auth, user input, secrets, endpoints, payments. |
| CEO or investor | `/office-hours` (gstack), `/plan-ceo-review` (gstack) | Before a quarter of work goes into one bet. |
| The person who says no | ponytail mode, `/ponytail-review` | Always on. It is a mode, not a command. |
| SRE and on-call | `/incident-response` and `/runbook-structure` (Han), `/canary` (gstack) | Written once, read at 2am by a version of you with none of today's context. |
| DBA | `/backups` (rsc-harness), plus a timed restore drill quarterly | Nobody else will notice the backup has been failing for six weeks. |
| Compliance and legal | `/compliance` and `/gdpr-privacy` (rsc-harness), `legal-advisor` agent | Only when payments, EU personal data, or a procurement questionnaire makes it real. |
| Rubber duck | `/council` (ECC), `/dev-team` (ECC) | One stuck decision, not a whole document. |
| The colleague who knows | `/to-questionnaire` (mattpocock) | A decision you genuinely cannot answer: turn it into a questionnaire for someone who can. |

---

## Attention and money

Two budgets, and they trade against each other.

**Route work down.** Mechanical bulk to Haiku, scoped research to Sonnet,
multi-step reasoning and agentic coding to Opus, judgment and long planning to
Fable. `/token-budget-advisor` (ECC) makes the depth choice explicit before a
long answer. docs/rules/DELEGATION.md holds the table.

**Run loops while you sleep.** `/loop` and `/schedule` (built-in) for
recurring work. `/unlazy` (unlazy) writes runnable acceptance gates to
GATES.md before autonomous work starts and blocks completion via a Stop hook
until they pass, which is what makes an overnight run trustworthy instead of
expensive. termly-cli puts the running session on your phone (encrypted,
remote), so checking the overnight loop does not require a laptop.

**Watch the bill.** `ccusage` for local token and cost analytics across
sessions. `/cost-tracking` (ECC) if you want it inside Claude Code. RTK is
installed at docs/SETUP.md step 5 as a PreToolUse hook; it cuts command output 60 to 90
percent; `rtk gain` shows what it saved.

**Protect the sessions.** `/guard` and `/freeze` (gstack) scope destructive
commands and edits when you leave an agent running. The zcaceres safety hooks
(`/safety-rm-rf-guard`, `/safety-git-reset-guard`, `/safety-dotenv-guard`)
cover the specific ways an unattended agent ruins an afternoon.

---

## What to skip that a team cannot

Everything in this list exists to coordinate people. You have no people.

- Standups, sprint planning, status updates, meeting notes, internal comms.
  The PM OS meeting family (`/meeting-agenda`, `/meeting-notes`,
  `/status-update`, `/slack-message`, `/internal-comms`) is dead weight.
- Contract versioning across teams. `/contract-first` matters when two people
  own two sides. With one owner, a typed interface in the repo is enough.
- CODEOWNERS, branch protection policy, merge queues, PR templates. These are
  coordination between people and you have none. **Pipeline hardening is not
  on this list**: pin GitHub Actions by commit SHA rather than tag, declare
  `permissions: contents: read` at the workflow root, and never pair
  `pull_request_target` with a checkout of the PR head. That is supply-chain
  risk, not coordination, and it is worse solo because nobody else reviews the
  workflow diff your agent just wrote. [zizmor](https://github.com/zizmorcore/zizmor)
  checks all three in one command; put it in CI once.
- Human onboarding docs. Keep the agent-facing docs (CLAUDE.md, rules,
  architecture) because agents onboard every session. Skip the human ones.
- Handoff documents between people. Keep `/context-save` and `/handoff`,
  because you hand off to yourself constantly.
- Multi-runtime harness parity. One machine, one config.

## Solo anti-patterns

- **Installing packs instead of shipping.** The harness is not the product. A
  week on skills and none on the app is the failure.
- **Skipping QA because you wrote it.** Teams catch this because the reviewer
  did not write it. `/qa` is the reviewer.
- **Reviewing your own diff and calling it review.** You are the author. Run
  the blinded review; that is the entire point of it being blinded.
- **Carrying state in your head across days.** Every unwritten decision is a
  two-hour tax later. `/context-save` costs one minute.
- **Building the thing nobody asked for.** Nothing stops you but ponytail and
  `/office-hours`.
- **Assuming the backup works.** It is the one failure where being solo has no
  recovery path at all: no colleague has a copy, no runbook exists, and the
  data is gone. Time a restore quarterly.
- **Deferring the gate.** "I will add tests after" is how a solo codebase
  becomes unmaintainable, because there is no second person whose pain forces
  the cleanup.

## The rhythm

| When | Run |
| --- | --- |
| Per session end | `/loose-ends`; `/context-save` if work is unfinished; `/learn` if something was learned |
| Per ticket | `/tdd` or `/implement`, `/qa`, `/clean-ai-slop`, `/stack-ship` |
| Per day | Nothing ceremonial. Pick the next ticket, run the loop. |
| Per release | `/canary --baseline`, `/land-and-deploy`, `/canary`, `/benchmark`, `/document-release` |
| Weekly | `/health` |
| Monthly | `/ponytail-audit`, `/cso --diff`, `/quality-docs-update`, `/ponytail-debt`, `/context-budget` |
| Quarterly | A timed restore from a real backup; `/cso --skills` over the installed skill set |
| On repeating a manual flow twice | `/skillify` |

## Tools for one

| Tool | Why for solo specifically |
| --- | --- |
| Stax | Small stacked PRs instead of one branch that grows for three weeks because nobody is waiting on it. |
| RoboRev | Automated review on every commit. The reviewer headcount you do not have. |
| Kata | Local-first issue tracking, CLI and TUI, no account, no sync. The tracker `/to-tickets` writes to. |
| RTK | Installed at setup (docs/SETUP.md step 5). Cuts command output 60 to 90 percent, directly your token bill. |
| ccusage | Local token and cost analytics. You are the one paying. |
| Git Credential Manager | One-time setup, removes a recurring class of auth friction. |
| docs-mcp-server or GitMCP | Library and API answers from real docs instead of training data. Alone, a hallucinated API costs you the whole debugging session. |
| Graphify | Add when the repo outgrows your memory of it, not before. |
| termly-cli | Mobile companion for Claude Code, Gemini, and OpenCode sessions. The overnight loop's pager, since you have no on-call rotation. |

Skip: Worktrunk (until two parallel sessions are routine), Temporal, Vault,
Tela, AgentsView, Replane, multi-agent desktops. Every one of them solves a
coordination or scale problem you do not have yet.

---

Where this route and the full one differ: docs/process/PROCESS.md keeps every stage
because a team can staff them. This one keeps thirteen, and the four it defends
hardest are the ones replacing a missing human: the review panel, the blinded
adversarial gate, real-app QA, and the ponytail ladder.
