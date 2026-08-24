# Matt Pocock Skills

All skills from [mattpocock/skills](https://github.com/mattpocock/skills), sorted by the README.md sections. Skills not yet in README.md are marked **new**; in-progress skills are tagged (in-progress).

# Product Process
## Pack Setup
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/setup-matt-pocock-skills` | mattpocock/skills | Configure this repo for the engineering skills — set up its issue tracker, triage label vocabulary, and domain doc layout. |

## Starting Direction / Human Helper
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/grill-me` | mattpocock/skills | A relentless interview to sharpen a plan or design. |
| `/grill-with-docs` | mattpocock/skills | A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go. |
| `/loop-me` | mattpocock/skills | Grill me about specs for the workflows I want to build, within this workspace. |
| `/wait-what` | mattpocock/skills | Stop. That last message did not land — re-pitch it. |
| `/ask-matt` | mattpocock/skills | Ask which skill or flow fits your situation. A router over the skills in this repo. |
| `/to-questionnaire` | mattpocock/skills | **new** Turn a decision you can't fully answer into a questionnaire for someone else to fill in. |

## PRD
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/to-spec` | mattpocock/skills | Turn the current conversation into a spec and publish it to the project issue tracker — no interview, just synthesis of what you've already discussed. |

## Research
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/domain-modeling` | mattpocock/skills | Build and sharpen a project's domain model. Use when the user wants to pin down domain terminology or a ubiquitous language, record an architectural decision, or when another skill |
| `/research` | mattpocock/skills | Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. |

# Code Architecture
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/codebase-design` | mattpocock/skills | Shared vocabulary for designing deep modules. Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code m |
| `/setup-ts-deep-modules` | mattpocock/skills | **new** Wire dependency-cruiser into a TypeScript repo so each package is a deep module, with implementation hidden in subfolders and reachable only through its entry-point files. User-invoked. (in-progress) |

# Dev Tooling
## Requirements
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/wayfinder` | mattpocock/skills | Plan a huge chunk of work — more than one agent session can hold — as a shared map of decision tickets on your issue tracker, and resolve them one at a time until the way to the de |
| `/to-tickets` | mattpocock/skills | Break a plan, spec, or the current conversation into a set of tracer-bullet tickets, each declaring its blocking edges, published to the configured tracker — edges as text in one f |
| `/triage` | mattpocock/skills | Move issues and external PRs through a state machine of triage roles — categorise, verify, grill if needed, and write agent-ready briefs. |

## Developing
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/implement` | mattpocock/skills | Implement a piece of work based on a spec or set of tickets. |
| `/implement-spec` | mattpocock/skills | **new** Implement a specification in code. (in-progress) |
| `/prototype` | mattpocock/skills | Build a throwaway prototype to answer a design question. Use when the user wants to sanity-check whether a state model or logic feels right, or explore what a UI should look like. |
| `/tdd` | mattpocock/skills | Test-driven development. Use when the user wants to build features or fix bugs test-first, mentions "red-green-refactor", or wants integration tests. |
| `/scaffold-exercises` | mattpocock/skills | **new** Create exercise directory structures with sections, problems, solutions, and explainers that pass linting. Use when user wants to scaffold exercises, create exercise stubs, or set up a new course section. |

## Testing
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/diagnosing-bugs` | mattpocock/skills | Diagnosis loop for hard bugs and performance regressions. Use when the user says "diagnose"/"debug this", or reports something broken/throwing/failing/slow. |
| `/migrate-to-shoehorn` | mattpocock/skills | **new** Migrate test files from `as` type assertions to @total-typescript/shoehorn. Use when user mentions shoehorn, wants to replace `as` in tests, or needs partial test data. |
| `/setup-pre-commit` | mattpocock/skills | **new** Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests in the current repo. Use when user wants to add pre-commit hooks, set up Husky, configure lint-staged, or add commit-time formatting/typechecking/testing. |

## Code Review
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/code-review` | mattpocock/skills | **new** Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes: Standards (does the code follow this repo's documented coding standards?) and Spec (does the code match what the originating issue/spec asked for?). Runs both reviews in parallel sub-agents and reports them side by side. |

## Deploying
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/resolving-merge-conflicts` | mattpocock/skills | Use when you need to resolve an in-progress git merge/rebase conflict. |

## Codebase Health
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/improve-codebase-architecture` | mattpocock/skills | Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick. |

## Documentation
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/writing-for-agents` | mattpocock/skills | Writing documents for agents. Use when creating or editing skills, or modifying AGENTS.md or CLAUDE.md. |
| `/writing-fragments` | mattpocock/skills | **new** Writing, explore: mine raw fragments, no structure yet. (in-progress) |
| `/writing-beats` | mattpocock/skills | **new** Writing, exploit: assemble raw material into a journey of beats, grounding each term before a beat leans on it. (in-progress) |
| `/writing-shape` | mattpocock/skills | **new** Writing, exploit: shape raw material into an article, paragraph by paragraph. (in-progress) |

## Agent Safety
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/git-guardrails-claude-code` | mattpocock/skills | **new** Set up Claude Code hooks to block dangerous git commands (push, reset --hard, clean, branch -D, etc.) before they execute. Use when user wants to prevent destructive git operations, add git safety hooks, or block git push/reset in Claude Code. |

## Agent Only Assist
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/grilling` | mattpocock/skills | Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases. |
| `/wizard` | mattpocock/skills | Generate an interactive bash wizard that walks a human through steps only they can perform. |

# Scaffolding and Harness
## Context Setting / Memory
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/claude-handoff` | mattpocock/skills | Hand the current conversation off to a fresh background agent that picks up the work immediately. |
| `/handoff` | mattpocock/skills | Compact the current conversation into a handoff document for another agent to pick up. |

## Knowledge Base
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/teach` | mattpocock/skills | Teach the user a new skill or concept, within this workspace. |
