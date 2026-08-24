# Oldhand skills

All [berwinsingh/oldhand](https://github.com/berwinsingh/oldhand) skills, sorted by the same sections as README.md. Upstream 56029eb (2026-08-03) checked 2026-08-24.

Oldhand is a deliberately minimal framework: one portable skill (1 skill total, 0 agents, 0 hooks) packaged as a Claude Code and ChatGPT Codex plugin. The single `/oldhand:oldhand` command (`$oldhand` on Codex) is a complete ticket-to-proof development workflow: work contract from any tracker or plain prompt, end-to-end flow tracing, MIT/Apache-2.0 prior-art research, minimal Ponytail implementation, and realistic browser or computer-use verification. Everything else in the repo is packaging: plugin manifests, a smoke-test script, and the docs site.

# Development Process

## Loop

| Execution | What it does |
| --- | --- |
| `/oldhand:oldhand` | Analyze and deliver non-trivial development requests from Jira, Asana, monday.com, Linear, GitHub Issues, another tracker, documents, or context-rich plain prompts; end-to-end tracing, MIT/Apache-2.0 prior-art research, minimal Ponytail implementation, proportional checks, realistic browser/computer-use QA. Keeps fixing until the real path passes; plan-only mode stays read-only. |

# Other offerings

| Name | What it does |
| --- | --- |
| `skills/oldhand/agents/openai.yaml` | Codex interface manifest for the skill (display name "Oldhand", tagline "From request to proof", default prompt). Not an agent persona. |
| `.claude-plugin/` + `.codex-plugin/` + `.agents/plugins/` | Plugin and marketplace manifests for Claude Code, Codex CLI, and the generic agents marketplace (v1.1.1, MIT). |
| `scripts/smoke-test.sh` | Dependency-free package validation: checks every manifest/template file exists and greps SKILL.md for the required orchestrator contract (Fable/Opus for Claude Code, GPT-5.6 Sol/Terra/Luna for Codex). |
| `.github/` templates | Bug report issue form, issue config, PR template; plus CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, SUPPORT docs. |
| `site/` | Source of the GitHub Pages site (React/Vite) documenting the 5-phase workflow: Intake, Trace, Prior Art, Change, Inspect. |
