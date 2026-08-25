# gstack skills

All [garrytan/gstack](https://github.com/garrytan/gstack) skills, sorted by the same sections as the other files in docs/frameworks/. Upstream 1.68.3.0 (85fd9db, 2026-08-21) checked 2026-08-23: no skills added since 1.62.0.0.

# Product Process
## Pack Setup 
| Execution | What it does |
| --- | --- |
| `/setup-deploy` | Configure deployment settings for /land-and-deploy. |
| `/setup-browser-cookies` | Import cookies from your real Chromium browser into the headless browse session. |
| `/setup-gbrain` | One-time gbrain install on this machine: detects current state, picks PGLite or Supabase, registers the MCP server, and records per-remote trust policy. |
| `/setup-gbrain --cleanup-orphans` | Skips setup and instead lists and deletes in-flight Supabase projects left behind by failed or abandoned provisioning runs. |
| `/setup-gbrain --repo` | Skips the install flow and only flips the per-remote brain policy for the repo you are in. |
| `/setup-gbrain --resume-provision <ref>` | Re-enters an interrupted Supabase auto-provision at its polling step using the given reference, instead of starting a fresh provision. |
| `/setup-gbrain --switch` | Only migrates the brain engine between PGLite and Supabase, leaving the original brain untouched. |
| `/gstack-upgrade` | Upgrade gstack to the latest version. |

## Starting Direction / Human Helper 
| Execution | What it does |
| --- | --- |
| `/office-hours` | YC Office Hours — two modes. |

## PRD
| Execution | What it does |
| --- | --- |
| `/plan-devex-review` | Interactive developer experience plan review. |
| `/plan-eng-review` | Eng manager-mode plan review. |
| `/plan-design-review` | Designer's eye plan review — interactive, like CEO and Eng review. |
| `/spec` | Turn vague intent into a precise, executable spec in five phases. |
| `/autoplan` | Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk and runs them sequentially with auto-decisions using 6 decision principles. |

## Initial Design
| Execution | What it does |
| --- | --- |
| `/design-shotgun` | Design shotgun: generate multiple AI design variants, open a comparison board, collect structured feedback, and iterate. |
| `/diagram` | Turn an English description (or mermaid source) into a diagram triplet: the source, an editable .excalidraw file you can open |

## Business
| Execution | What it does |
| --- | --- |
| `/plan-ceo-review` | CEO/founder-mode plan review. |
| `/retro` | Weekly engineering retrospective. |

# Development Process
## Designer Implementation
| Execution | What it does |
| --- | --- |
| `/design-consultation` | Design consultation: understands your product, researches the landscape, proposes a complete design system (aesthetic, typography, color, layout, spacing, motion), and generates fo |
| `/design-html` | Design finalization: generates production-quality Pretext-native HTML/CSS. |
| `/design-review` | Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems, AI slop patterns, and slow interactions — then fixes them. |

# Dev Tooling
## Developing
| Execution | What it does |
| --- | --- |
| `/pair-agent` | Pair a remote AI agent with your browser. |

## Testing
| Execution | What it does |
| --- | --- |
| `/qa` | Systematically QA test a web application and fix bugs found. |
| `/qa-only` | Report-only QA testing. |
| `/investigate` | Systematic debugging with root cause investigation. |

## Code Review
| Execution | What it does |
| --- | --- |
| `/codex` | Codex CLI wrapper with review, challenge and consult modes. With no args it auto-detects: offers to review or challenge a branch diff, else the newest plan file, else asks what to send. |
| `/codex review --xhigh` | Normal pass/fail diff review but raises model_reasoning_effort from high to xhigh, roughly 23x more tokens and can run 50+ minutes. Opt in only when you want maximum reasoning and will wait. |
| `/review` | Pre-landing PR review. |

## Deploying
| Execution | What it does |
| --- | --- |
| `/canary` | Post-deploy visual monitor via the browse daemon. The normal shape is /canary <url>. |
| `/canary <url>` | Monitors the URL for 10 minutes after a deploy, screenshotting pages, counting console errors and checking load times against the captured baseline. |
| `/canary <url> --baseline` | Captures pre-deploy screenshots, console error counts and load times into .gstack/canary-reports/baselines. Run BEFORE deploying, not after. |
| `/canary <url> --duration 5m` | Replaces the default 10 minute watch window with a custom duration, anywhere from 1m to 30m. |
| `/canary <url> --pages <paths>` | Overrides navigation auto-discovery with an explicit comma separated path list for both baseline capture and monitoring. |
| `/canary <url> --quick` | Does one health check pass and exits instead of monitoring for the full duration. |
| `/land-and-deploy` | Land and deploy workflow. |
| `/landing-report` | Read-only queue dashboard for workspace-aware ship. |
| `/ship` | Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION, update CHANGELOG, commit, push, create PR. |

## Codebase Health
| Execution | What it does |
| --- | --- |
| `/health` | Code quality dashboard. |
| `/devex-review` | Live developer experience audit. |

## Mobile App Specific
| Execution | What it does |
| --- | --- |
| `/ios-clean` | Remove the DebugBridge SPM package and all #if DEBUG wiring from an iOS app. |
| `/ios-design-review` | Visual design audit for iOS apps on real hardware. |
| `/ios-fix` | Autonomous iOS bug fixer. |
| `/ios-qa` | Live-device iOS QA for SwiftUI apps. |
| `/ios-sync` | Regenerate the iOS debug bridge against the latest upstream gstack templates. |

## Documentation
| Execution | What it does |
| --- | --- |
| `/document-release` | Post-ship documentation update. |
| `/make-pdf` | Turn any markdown file into a publication-quality PDF. |
| `/document-generate` | Generate missing documentation from scratch for a feature, module, or entire project. |

## Security
| Execution | What it does |
| --- | --- |
| `/cso` | Full security audit, all phases 0-14, with an 8/10 confidence gate so only high-confidence findings reach the report. Reports only, never edits code. |
| `/cso --code` | Narrows the audit to application code: LLM/AI security, OWASP, STRIDE and data classification phases. Skips secrets, CI/CD, infra and webhook phases. |
| `/cso --comprehensive` | Same all-phase sweep but drops the confidence gate from 8/10 to 2/10, surfacing many more findings marked TENTATIVE. Meant as a monthly deep scan. |
| `/cso --diff` | Constrains every phase to files and commits changed on the current branch versus base instead of the whole repo. The one flag combinable with any scope flag. |
| `/cso --infra` | Limits the audit to infrastructure: stack detection, attack surface, secrets archaeology, dependency supply chain, CI/CD, shadow infra and webhooks. Also blocks auto-discarding CI/CD findings. |
| `/cso --owasp` | Runs only the OWASP Top 10 phase plus the mandatory setup and reporting phases. Skips secrets, supply chain, CI/CD, STRIDE and data classification. |
| `/cso --scope <area>` | Focuses the audit on one named domain such as auth rather than a phase group. Mutually exclusive with the other scope flags. |
| `/cso --skills` | Runs only the skill supply chain scan of installed agent skills plus setup and reporting phases. Ignores application code and infra entirely. |
| `/cso --supply-chain` | Runs only the dependency supply chain phase plus setup and reporting. Answers "are my packages safe" without the rest of the audit. |

## Product Health
| Execution | What it does |
| --- | --- |
| `/benchmark` | Performance audit driven by the browse daemon. Without a URL it needs --diff or --trend; the normal shape is /benchmark <url>. |
| `/benchmark --diff` | Restricts the benchmark to pages affected by files changed on the current branch versus base, rather than the full discovered page list. |
| `/benchmark --trend` | Skips measurement and prints a table of FCP, LCP, bundle size, request count and grade across the last several stored runs. |
| `/benchmark <url>` | Navigates the URL with the browse daemon, collects TTFB, FCP, LCP, DOM timings, resource waterfall and bundle sizes, and compares against the saved baseline. |
| `/benchmark <url> --baseline` | Captures current numbers as the reference point in .gstack/benchmark-reports/baselines instead of comparing. Run before the changes you want to measure. |
| `/benchmark <url> --pages <paths>` | Overrides page auto-discovery with an explicit comma separated path list such as /,/dashboard,/api/health. |
| `/benchmark <url> --quick` | Single-pass timing check with no stored baseline and no comparison, for a fast "how slow is it right now" answer. |

## Agent Safety
| Execution | What it does |
| --- | --- |
| `/careful` | Safety guardrails for destructive commands. |
| `/freeze` | Restrict file edits to a specific directory for the session. |
| `/guard` | Full safety mode: destructive command warnings + directory-scoped edits. |
| `/unfreeze` | Clear the freeze boundary set by /freeze, allowing edits to all directories again. |

## Agent Only Assist
| Execution | What it does |
| --- | --- |
| `/browse` | Fast headless browser for QA testing and site dogfooding. |
| `/open-gstack-browser` | Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in. |
| `/scrape` | Pull data from a web page. |
| `/skillify` | Codify the most recent successful /scrape flow into a permanent browser-skill on disk. |
| `/gstack` | Router for the gstack skill suite. |
| `/plan-tune` | Self-tuning question sensitivity + developer psychographic for gstack (v1: observational). |

# Scaffolding and Harness
## Anti Drift / Anti Hallucinations
| Execution | What it does |
| --- | --- |
| `/benchmark-models` | Cross-model benchmark for gstack skills. |

## Context Setting / Memory
| Execution | What it does |
| --- | --- |
| `/context-restore` | Restore working context saved earlier by /context-save. |
| `/context-save` | Captures branch, git status, diff stat, recent log, decisions and remaining work into a timestamped checkpoint for /context-restore. Optional title names it; never touches code. |
| `/context-save list --all` | Lists saved checkpoints from every branch instead of the default current-branch view, adding a Branch column. |
| `/learn` | Manage project learnings. |
| `/sync-gbrain` | Incremental sync of the gbrain index with this repo's code via an mtime fast path (about 50ms steady state), then refreshes the AGENTS.md guidance on when to prefer gbrain search over Grep. |
| `/sync-gbrain --audit` | Read-only: lists gstack-owned brain pages per project, summarizes by page type, and flags cached salience entries outside the allowlist. No sync stages run. |
| `/sync-gbrain --code-only` | Runs only the code indexing stage, skipping the memory and brain-sync stages the default run includes. |
| `/sync-gbrain --dream` | Forces a rebuild of the call graph behind code-callers and code-callees, even if one already exists. --full only auto-dreams when the graph was never built. |
| `/sync-gbrain --dry-run` | Previews exactly what the sync would do without writing to the brain, cache or repo. |
| `/sync-gbrain --full` | Replaces the incremental fast path with a complete reindex-code pass (25-35 minutes on a large repo) and builds the call graph if it never existed. Also pins an unpinned worktree. |
| `/sync-gbrain --no-dream` | Suppresses the call graph build that --full would otherwise trigger, keeping the reindex to the code stage only. |
| `/sync-gbrain --no-memory` | Skips the memory stage while still running the code and brain-sync stages. |
| `/sync-gbrain --quiet` | Suppresses per-stage progress output, leaving just the final verdict block. |
| `/sync-gbrain --refresh-cache` | Forces a rebuild of the brain-aware planning cache for the current project slug plus the user-profile page, skipping code and memory stages. Replaced the old /brain-refresh-context. |

