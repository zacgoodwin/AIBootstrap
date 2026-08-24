# zcaceres/skills

Skills from https://github.com/zcaceres/skills sorted by the README's sections. Install: `npx skills add zcaceres/skills -s <name>`.

# Product Process
## Starting Direction / Human Helper
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/bro` | zcaceres/skills | Restate the last message in plain human language: no jargon, simpler, shorter. |
| `/decompose` | zcaceres/skills | Break stuck problems into tractable pieces using diagnostic lenses. |
| `/eli5` | zcaceres/skills | Explain a concept like the listener is five: short words, everyday analogies, one idea at a time. |
| `/zoom` | zcaceres/skills | Shift abstraction level (`in` for internals, `out` for context). |

## Research
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/find-docs` | zcaceres/skills | Retrieve current docs, API references, and code examples for any library via the Context7 CLI. |
| `/gemini-deep-research` | zcaceres/skills | Run Google Gemini Deep Research reports: submit a topic, background-poll, save the markdown report. Needs `GEMINI_API_KEY`. |
| `/transcribe-youtube` | zcaceres/skills | Download and transcribe a YouTube video to a markdown file via yt-dlp + Whisper. |

## Marketing
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/copywriting` | zcaceres/skills | Refine and edit text into clear, concise copy: Anglo-Saxon swaps, banned AI-tells, worked examples. |

## Initial Design
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/acid-trip` | zcaceres/skills | Generate frontend designs from random rolls (Wikipedia x document type x aesthetic lineage). |
| `/nano-banana-generator` | zcaceres/skills | Generate one-off graphic assets (logos, icons, illustrations, UI elements) via Google's Nano Banana / Gemini image generation. |

## Business
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/audit-aws-costs` | zcaceres/skills | Read-only audit of an AWS account: CloudTrail write activity, idle-billing resources, Cost Explorer spend by service/region, keep/shutdown report. Never modifies anything. |

# Development Process
## Loop
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/project` | zcaceres/skills | Manage a repo's kanban board over GitHub Projects or Linear: `setup`, `next`, `new-task`, `update`, `review`, `decompose`, `delete`, `milestone`, `batch`. |

# Dev Tooling
## Developing
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/clean-ai-slop` | zcaceres/skills | Diff the current branch against `main` and strip AI-generated slop: superfluous comments, defensive `try/catch`, `any`-casts, style inconsistent with the file. |
| `/pr` | zcaceres/skills | Commit work and open PRs. Normal mode commits, pushes, opens one PR; stacked mode adds `checkpoint`, `submit`, `sync`, `merge`. `--draft` supported. Runs under Claude Code, Codex, Gemini CLI. |

## Testing
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/quality-chaos-monkey` | zcaceres/skills | Trace code paths to find bugs, race conditions, and edge cases. |
| `/test [gaps] [target]` | zcaceres/skills | Cross-reference tests against the source they cover and report missing edge cases: untested branches, error paths, boundary conditions. |

## Code Review
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/review-code` | zcaceres/skills | Full code-review pipeline: reviews the branch diff (default), `repro` reproduces findings to filter false positives, `fix` plans and applies fixes, `comments` processes reviewer comments on your PR. |

## Codebase Health
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/quality-cli-agent-friendly-audit` | zcaceres/skills | Audit a CLI tool against the agent-friendliness checklist for agent ergonomics. |
| `/quality-dead-code-analyzer` | zcaceres/skills | Find dead code, duplicates, and circular deps via knip/jscpd/madge. |
| `/quality-perf-review` | zcaceres/skills | Analyze a full-stack web app for evidence-based performance bottlenecks, interactively. |
| `/quality-project-health` | zcaceres/skills | Assess the current repo and work tracker, then rate overall project health from 0-10. |

## Documentation
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/code-tour` | zcaceres/skills | Walk an unfamiliar codebase and write a concise `CODE_TOUR.md` onboarding guide with a Mermaid diagram of how components connect. |
| `/quality-docs-update` | zcaceres/skills | Audit project docs against the codebase via parallel Explore agents, produce a per-file revision plan, and apply approved fixes. |
| `/record-gif` | zcaceres/skills | Record animated GIFs of web page animations via Playwright frame capture + ffmpeg palette encoding. |

## Security
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/investigate-repo` | zcaceres/skills | Audit an unfamiliar repository for malicious patterns and supply-chain risk. |
| `/security-bumblebee` | zcaceres/skills | Run Perplexity's bumblebee endpoint scanner for supply-chain exposure; `setup` baselines and schedules scans, `review` surfaces drift. |
| `/security-gitleaks` | zcaceres/skills | Set up gitleaks secret-scanning: scans history first, then scaffolds `.gitleaks.toml`, a pre-commit hook, and a pinned CI workflow. |
| `/security-openssf` | zcaceres/skills | Scaffold OpenSSF Scorecard CI on a public repo with a two-phase rollout; `fix` turns a report into a remediation plan. Public repos only. |
| `/security-scfw` | zcaceres/skills | Set up Datadog's Supply-Chain Firewall to block known-malicious npm/PyPI/Poetry packages at install time; `setup` installs and aliases, `review` audits installed packages. |
| `/security-snyk` | zcaceres/skills | Walk through the Snyk GitHub App install and verify it landed; optionally scaffold a pinned `snyk code test` CI workflow. |
| `/security-socket` | zcaceres/skills | Walk through the Socket Security GitHub App OAuth install and verify it landed; optionally scaffold a pinned CI status-check workflow. |

## Agent Safety
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/safety-dotenv-guard` | zcaceres/skills | Hook. Blocks `Read`/`Bash`/`Grep`/`Glob` tool calls that touch `.env` files; allows `.env.example`-style templates. |
| `/safety-git-reset-guard` | zcaceres/skills | Hook. Blocks destructive git commands (`reset --hard`, `push --force`, etc.); redirects to safer alternatives. |
| `/safety-op-creds` | zcaceres/skills | Hook + wrapper. Use 1Password credentials via `op` CLI process substitution / `op run`; blocks bare `op read` and other secret-printing subcommands. |
| `/safety-rm-rf-guard` | zcaceres/skills | Hook. Blocks `rm`, `shred`, `unlink`, `find -delete`, and sudo/xargs/subshell variants. |

## Agent Only Assist
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/cleanup-computer` | zcaceres/skills | Interactive file-by-file cleanup of Downloads/Desktop/Documents: delete, move, or keep. |
| `/storage-cleanup` | zcaceres/skills | Find large files and directories that are safe to delete. |
| `/trip-planner` | zcaceres/skills | Generate a packing list from a destination weather forecast (wttr.in helper bundled). |

# Scaffolding and Harness
## Harness Setup
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/optimize-permissions` | zcaceres/skills | Scan recent transcripts for safe commands the user keeps approving, preview proposals, write them to the agent config (Claude Code, Codex, Cursor). |
| `/optimize-skill-activation` | zcaceres/skills | Right-size each installed skill's activation mode (slash-only, model-invocable, eager-loaded), then rewrite its `SKILL.md` frontmatter. |
| `/quality-worktree-setup [setup\|update\|check]` | zcaceres/skills | Bootstrap and maintain Claude Code worktree auto-setup: interviews the repo for what `claude --worktree` needs, generates and smoke-tests `.worktreeinclude` + hook. |

## Token Savings
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/laconic` | zcaceres/skills | Hook + slash command. Answer in a spare, plain register. Toggle with `/laconic on\|off` in `prose-only` or `prose+code` mode; SessionStart hook injects it each session. |
| `/ste100` | zcaceres/skills | Hook + slash command. Write in ASD-STE100 Simplified Technical English. Toggle with `/ste100 on\|off`; SessionStart hook injects rules, per-turn reminder counters drift. |

## Anti Drift / Anti Hallucinations
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/reflect-on-conversation` | zcaceres/skills | Structured retrospective on the current conversation: prompting, gaps, efficiency. |
| `/loose-ends` | zcaceres/skills | Surface unaddressed threads from the conversation: bugs mentioned but not fixed, deferred decisions, unverified claims, promised-but-not-done items. Reports only, never edits. |

## Context Setting / Memory
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/audit-memories` | zcaceres/skills | Audit an agent's saved memories: inventory by type/age, flag stale/contradictory/redundant/orphaned ones, walk keep/update/merge/delete decisions. Never bulk-deletes. |
| `/memory-insights` | zcaceres/skills | Read the agent file-based memory (current project or all projects) and give a few one-sentence, non-obvious observations about the user. |
