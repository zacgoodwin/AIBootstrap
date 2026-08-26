# Agent rosters by pack

The agent counterpart to docs/frameworks/ (which covers skills). One file per
pack that ships subagent definitions, sorted by the same categories as
[IN-REPO-AGENTS.md](IN-REPO-AGENTS.md), the deduplicated roster of every agent reachable
from the author's machine.

Execution: agents run as subagents via the Agent tool with
`subagent_type=<name>`, or by asking Claude to "use the `<name>` agent".

Categories follow the machine-wide roster: Plan & Architecture, Code Review, Build, Test & QA,
Docs & Research, Agent Harness, Open-source Pipeline, Product & Review Panel,
Business Personas, Domain Specialists. A pack that needs a category the
taxonomy lacks adds one and says so at the top of its file.

## Packs that ship agents

214 agents across five packs.

| Pack | Agents | File | Shape of the roster |
| --- | --- | --- | --- |
| affaan-m/ECC | 73 | [ECC.md](ECC.md) | General-purpose crew: 17 language reviewers, 11 build resolvers, planners, a GAN harness trio, and an open-source sanitization pipeline. 34 of the 73 are installed here. |
| TheBushidoCollective/han | 72 | [HAN.MD](HAN.MD) | Discipline personas: one to six specialists per engineering domain, plus a CI-watching background agent. |
| open-gsd/gsd-core | 35 | [GSD.MD](GSD.MD) | Pipeline agents, each spawned by a specific `/gsd:*` command and each writing a named planning artifact. Not directly invoked. |
| trailofbits/skills | 29 | [TRAILOFBITS.MD](TRAILOFBITS.MD) | Security-audit pipelines: multi-stage worker and judge clusters for C, Rust, zeroization, and false-positive elimination. |
| Code-My-Spec/plugins | 5 | [CODEMYSPEC.MD](CODEMYSPEC.MD) | The Phoenix/Elixir spec-to-code lifecycle: spec, test, code, BDD, QA. All pinned to Sonnet. |

## Packs that ship no agents

Listed here rather than given an empty file.

| Pack | What it ships instead |
| --- | --- |
| garrytan/gstack | Skills only; no agent definitions recorded in docs/frameworks/GSTACK.MD. |
| mattpocock/skills | Skills only. |
| zcaceres/skills | Skills plus hook-based safety guards (dotenv, rm -rf, git reset). |
| ericrisco/rsc-harness | Skills only; its "Agents and Personas" section is empty. |
| obra/superpowers | Skills plus one SessionStart hook. |
| ruvnet/ruflo | Agent-*building* skills (`/daa-agent`, `/managed-agent`, `/wasm-agent`, `/nested-subagents`) but no subagent definitions of its own. |
| existential-birds/beagle | Explicitly none: 139 skills, no agents, hooks, commands, or MCP servers. |
| bobmatnyc/claude-mpm-skills | Explicitly none: 176 skills, no hooks, agents, or commands. |
| berwinsingh/oldhand | Explicitly none: 1 skill, 0 agents, 0 hooks. Its `openai.yaml` is a Codex UI manifest, not a persona. |
| Leonxlnx/unlazy | 1 skill plus a Stop hook enforcing gate ledgers. |
| Leonxlnx/taste-skill | Skills only. |
| Mindrally/skills | Skills only (240+ converted Cursor rules). |
| DKeken/codex-skills-alternative | Explicitly none: 19 skills, no agents or hooks. |
| MariaVimer/pm-claude-brief | Explicitly none: 1 skill plus 12 CLAUDE.md brief templates. |
| zacgoodwin/zg-skills | Explicitly none: 6 skills, 0 agents, 0 hooks. Its adversarial reviewer and skeptics are spawned per run, not shipped as definitions. |

## Refreshing this directory

Last refreshed 2026-08-24 against these commits:

| Pack | Commit | Since last check |
| --- | --- | --- |
| affaan-m/ECC | d8409a4 (2026-08-19) | First verification against upstream. The earlier file documented only the 34 agents parked locally; upstream ships 73. |
| TheBushidoCollective/han | 29a19d3 (2026-08-19) | Unchanged. |
| open-gsd/gsd-core | 8442d98 (2026-08-24) | Roster unchanged at 35; `gsd-research-synthesizer` description updated. |
| trailofbits/skills | 311a784 (2026-08-24) | 31 to 29 (docs/frameworks/TRAILOFBITS.MD updated to match). c-review dropped both judge agents when the plugin moved from class-partitioned to location-partitioned review. |
| Code-My-Spec/plugins | 2b6a897 (2026-08-21) | Unchanged. |

To redo the pass, check what moved, then diff only the movers:

```bash
for r in TheBushidoCollective/han open-gsd/gsd-core affaan-m/ECC \
         trailofbits/skills Code-My-Spec/plugins; do
  printf '%-32s ' "$r"
  gh api "repos/$r/commits?per_page=1" --jq '.[0] | "\(.sha[0:7])  \(.commit.committer.date)"'
done

# for each pack whose SHA moved, from the commit in the table above:
gh api repos/OWNER/REPO/compare/OLD...NEW --jq '.files[] | "\(.status)  \(.filename)"' | grep agent
```

Counts in each file must match its table rows; verify with
`grep -c '^| Agent subagent_type=' docs/agents/*`.

## Sources outside docs/frameworks/

- **Aakash Gupta PM OS** ships 7 review-panel agents (customer-voice,
  designer-reviewer, engineer-reviewer, executive-reviewer, legal-advisor,
  skeptic, uxr-analyst) with no framework file of its own. They ship in this
  repo under .claude/agents/ and are listed in IN-REPO-AGENTS.md.
- **This repo** authors 6 business personas (product, data, launch, marketing,
  sales, support) under .claude/agents/, also in IN-REPO-AGENTS.md.
