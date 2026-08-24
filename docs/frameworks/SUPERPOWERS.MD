# Superpowers skills

All [obra/superpowers](https://github.com/obra/superpowers) skills, sorted by the same sections as README.md. Upstream v6.3.0 (b36e082) checked 2026-08-23.

# Development Process
## Loop
| Execution | What it does |
| --- | --- |
| `/writing-plans` | Use when you have a spec or requirements for a multi-step task, before touching code. |
| `/executing-plans` | Use when you have a written implementation plan to execute in a separate session with review checkpoints. |
| `/subagent-driven-development` | Use when executing implementation plans with independent tasks in the current session. |

## Dev Tooling
| Execution | What it does |
| --- | --- |
| `/using-git-worktrees` | Use when starting feature work that needs isolation from current workspace or before executing implementation plans — ensures an isolated workspace exists via native tools or git worktree fallback. |

## Requirements
| Execution | What it does |
| --- | --- |
| `/brainstorming` | You MUST use this before any creative work — creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation. |

## Developing
| Execution | What it does |
| --- | --- |
| `/systematic-debugging` | Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes. |

## Testing
| Execution | What it does |
| --- | --- |
| `/test-driven-development` | Use when implementing any feature or bugfix, before writing implementation code. |

## Code Review
| Execution | What it does |
| --- | --- |
| `/requesting-code-review` | Use when completing tasks, implementing major features, or before merging to verify work meets requirements. |
| `/receiving-code-review` | Use when receiving code review feedback, before implementing suggestions — requires technical rigor and verification, not performative agreement or blind implementation. |

## Deploying
| Execution | What it does |
| --- | --- |
| `/finishing-a-development-branch` | Use when implementation is complete, all tests pass, and you need to decide how to integrate the work. |

# Scaffolding and Harness
## Harness Development
| Execution | What it does |
| --- | --- |
| `/writing-skills` | Use when creating new skills, editing existing skills, or verifying skills work before deployment. |
| `/dispatching-parallel-agents` | Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies. |

## Harness Setup
| Execution | What it does |
| --- | --- |
| `/using-superpowers` | Use when starting any conversation — establishes how to find and use skills, requiring skill invocation before ANY response including clarifying questions. |

## Anti Drift / Anti Hallucinations
| Execution | What it does |
| --- | --- |
| `/verification-before-completion` | Use when about to claim work is complete, fixed, or passing, before committing or creating PRs — requires running verification commands and confirming output before making any success claims; evidence before assertions. |

# Hooks
| Name | What it does |
| --- | --- |
| session-start | SessionStart (startup/clear/compact): injects the using-superpowers skill so skill discovery and mandatory skill invocation are active from the first message. |

# Other offerings
| Name | What it does |
| --- | --- |
| superpowers-dev marketplace | `.claude-plugin/marketplace.json` — plugin marketplace exposing the superpowers plugin for `claude plugin install`. |
| Multi-agent packaging | Ports of the same skill set for other agents: `.codex-plugin/`, `.cursor-plugin/`, `.devin-plugin/`, `.hermes-plugin/`, `.kimi-plugin/`, `.opencode/`, `.pi/`, `.agents/`, plus `gemini-extension.json` for Gemini CLI. |
