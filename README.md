# AIBootstrap

A Claude Code starter kit: one developer's tuned setup, codified so you can
pick it up and get the same experience in your own repo. It ships three
things — a CLAUDE.md template backed by a rules pack, a first-run interview
that installs the toolchain and fills in the blanks, and a researched catalog
of the skill and agent packs worth installing.

Nothing here is machine-specific. Clone it, answer the setup questions, and
the template becomes your project's.

## Quickstart

1. Clone or copy this repo.
2. Open Claude Code in it. The `TODO(bootstrap)` markers in
   [CLAUDE.md](CLAUDE.md) trigger the first-run interview in
   [docs/SETUP.md](docs/SETUP.md), which asks whether you are solo or a team,
   what you build with, and what tooling you want, then builds a costed
   install plan for your approval.
3. Install the packs you picked. Start from
   [the catalog](docs/frameworks/Z-TOP-SKILLS.md).

Setup ends by deleting the `TODO(bootstrap)` markers. After that, sessions
start normally.

## What's in here

| Path | What it holds |
|---|---|
| [CLAUDE.md](CLAUDE.md) | The template's root instructions: map, commands, non-negotiables, routing table |
| [docs/rules/](docs/rules/) | The rules pack CLAUDE.md loads on demand — one file per domain |
| [docs/SETUP.md](docs/SETUP.md) | The first-run interview |
| [docs/process/](docs/process/) | Lifecycle and tool-stack research: solo vs team, laptop vs server, five costed stacks |
| [docs/frameworks/](docs/frameworks/) | The skill catalog: one file per upstream pack, plus the cross-pack pick list |
| [docs/agents/](docs/agents/) | Subagent rosters, per pack and deduplicated |
| [docs/architecture/](docs/architecture/), [docs/DESIGN.md](docs/DESIGN.md), [docs/STRATEGY.md](docs/STRATEGY.md) | Project docs the setup interview fills in |
| [.claude/](.claude/) | Shipped agents, skills, hooks, and settings |
| [tools/gate.mjs](tools/gate.mjs) | The gate: every doc path resolves, credentials stay ignored, hooks self-check |

## The rules pack

[CLAUDE.md](CLAUDE.md) stays short and routes to [docs/rules/](docs/rules/),
which is loaded per situation rather than all at once: scope and architecture
decisions ([PRINCIPLES.md](docs/rules/PRINCIPLES.md)), writing code
([CODING.md](docs/rules/CODING.md)), tests and evals
([TESTING.md](docs/rules/TESTING.md)), tickets and shipping
([WORKFLOW.md](docs/rules/WORKFLOW.md)), service boundaries
([SERVICES.md](docs/rules/SERVICES.md)), subagents and model choice
([DELEGATION.md](docs/rules/DELEGATION.md)), act-vs-ask
([AUTONOMY.md](docs/rules/AUTONOMY.md)), destructive operations
([SAFETY.md](docs/rules/SAFETY.md)), and prose
([VOICE.md](docs/rules/VOICE.md)). Windows setups fold
[WINDOWS.md](docs/rules/WINDOWS.md) into CLAUDE.md directly.

Precedence when they conflict: safety first, then finishing the whole task,
then the smallest diff that covers it.

## Skill catalog

**[docs/frameworks/Z-TOP-SKILLS.md](docs/frameworks/Z-TOP-SKILLS.md) is the
catalog** — the best skill per job across every pack below, organized by
workflow stage: Product Process, Development Process, Code Architecture, Dev
Tooling, Scaffolding and Harness, Built-in Claude Code, and Tools. Start
there; the per-pack files are the full inventories behind it.

| Pack | Upstream | What it is |
|---|---|---|
| [ECC](docs/frameworks/ECC.md) | affaan-m/ECC | The broadest general-purpose pack, and the largest agent roster here |
| [Han](docs/frameworks/HAN.MD) | TheBushidoCollective/han | A marketplace of 161 plugins across 11 categories; discipline personas per engineering domain |
| [GSD](docs/frameworks/GSD.MD) | open-gsd/gsd-core | Planning-artifact pipeline: every skill paired with a `/gsd:*` command and an agent that writes a named doc |
| [gstack](docs/frameworks/GSTACK.MD) | garrytan/gstack | The browse, QA, review and ship spine this template's workflow assumes |
| [Trail of Bits](docs/frameworks/TRAILOFBITS.MD) | trailofbits/skills | Security audit pipelines: multi-stage worker and judge clusters for C, Rust, and zeroization |
| [CodeMySpec](docs/frameworks/CODEMYSPEC.MD) | Code-My-Spec/plugins | Spec-driven development for Phoenix/Elixir, spec through QA |
| [Beagle](docs/frameworks/BEAGLE.MD) | existential-birds/beagle | 11 plugins spanning planning to review. Skills only |
| [Claude MPM](docs/frameworks/CLAUDE-MPM.MD) | bobmatnyc/claude-mpm-skills | Skills for the Claude MPM multi-agent orchestration framework |
| [rsc-harness](docs/frameworks/RCS.MD) | ericrisco/rsc-harness | Harness and operations skills. Skills only |
| [Mindrally](docs/frameworks/MINDRALLY.MD) | Mindrally/skills | Converted Cursor rules, in bulk |
| [Ruflo](docs/frameworks/RUFLO.MD) | ruvnet/ruflo | An agent meta-harness: skills for *building* agents, plus domain verticals |
| [zcaceres](docs/frameworks/ZCARES.MD) | zcaceres/skills | General utilities plus hook-based safety guards (dotenv, `rm -rf`, git reset) |
| [Matt Pocock](docs/frameworks/MATT.MD) | mattpocock/skills | TypeScript-focused. Skills only |
| [Superpowers](docs/frameworks/SUPERPOWERS.MD) | obra/superpowers | Development-loop skills plus one SessionStart hook |
| [Codex Skills Alternative](docs/frameworks/CODEX-SKILLS-ALTERNATIVE.MD) | DKeken/codex-skills-alternative | Vendor-neutral reimplementation of the Codex-only Creative Production and Product Design plugins |
| [Taste](docs/frameworks/TASTE-SKILL.MD) | Leonxlnx/taste-skill | Design taste and judgment. Experimental |
| [Unlazy](docs/frameworks/UNLAZY.MD) | Leonxlnx/unlazy | One skill plus a Stop hook enforcing gate ledgers |
| [PM Claude Brief](docs/frameworks/PM-CLAUDE-BRIEF.MD) | MariaVimer/pm-claude-brief | Brief-writing discipline for PMs: one skill and 12 CLAUDE.md templates |
| [Oldhand](docs/frameworks/OLDHAND.MD) | berwinsingh/oldhand | Deliberately minimal: one portable skill |

Most files record the upstream commit they were checked against, so you can
tell how stale one is before trusting it.

Installing is uneven, because upstream is uneven. The marketplace table in
[docs/SETUP.md](docs/SETUP.md) covers the packs distributed as Claude Code
plugins. Four pack files carry their own command (CodeMySpec, Codex Skills
Alternative, Trail of Bits, zcaceres). The rest publish no one-line
installer — clone the upstream repo and copy the skills you want.

## Agent rosters

[docs/agents/](docs/agents/) is the subagent counterpart to the skill
catalog: five packs ship agents, and
[docs/agents/README.md](docs/agents/README.md) indexes them.
[docs/agents/IN-REPO-AGENTS.md](docs/agents/IN-REPO-AGENTS.md) is a
deduplicated roster of every agent reachable from one mature machine — an
example of where this ends up, not a description of this repo. Fourteen
agents ship here, in [.claude/agents/](.claude/agents/): six business
personas, a seven-agent product review panel, and a TypeScript reviewer.

## The gate

`node tools/gate.mjs` runs in CI and as a pre-commit hook. It is
deterministic, free, and finishes in under two seconds: every repo path
referenced in the docs must resolve, `.claude/credentials.md` must stay
gitignored, and the shipped hooks must pass their self-checks. Run
`node tools/gate.mjs --self-test` to check the gate itself.

The setup interview extends it with your project's own tests.
