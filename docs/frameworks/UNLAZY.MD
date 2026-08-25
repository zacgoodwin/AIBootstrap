# Unlazy skills

All [Leonxlnx/unlazy](https://github.com/Leonxlnx/unlazy) skills, sorted by the same sections as the other files in docs/frameworks/. Upstream commit 754d9a6 (post-2.0.0, targeting 2.1.0) checked 2026-08-23.

# Scaffolding and Harness

## Anti Drift / Anti Hallucinations

| Execution | What it does |
|---|---|
| `/unlazy` | Completion discipline for substantial autonomous work: writes runnable acceptance gates (GATES.md) before execution, decomposes work with the Depth Tree, runs approved checks, and re-verifies evidence before reporting done |

# Hooks

| Name | What it does |
|---|---|
| Stop hook (`scripts/stop-hook.mjs`) | Claude Code Stop hook that scans the session's resolved gate ledger and blocks stopping while gates remain unmet; session-keyed progress guard releases after six consecutive blocks without ledger progress. Installed via `scripts/install-hooks.mjs` (project-local, shared, or global scope) |

# Other offerings

| Name | What it does |
|---|---|
| `scripts/gate-check.mjs` | Zero-dependency Node CLI that parses, approves, and runs GATES.md ledgers; `--status` mode inspects without executing |
| `scripts/install-hooks.mjs` | Installer/uninstaller for the Stop hook into Claude Code settings, with atomic writes and backups |
| `templates/gates-leaf.md`, `templates/gates-node.md`, `templates/PLAN.md` | Gate-ledger templates for solo tasks (leaf), orchestrated subtrees (node), and planning |
| `references/` (gates, method, orchestration, parallel, token-economy) | Reference docs on the gate contract, working method, orchestration, parallel leaves, and token economy |
| `agents/openai.yaml` | Codex/OpenAI skill UI metadata (display name, default prompt, implicit invocation policy) |
| `tests/` (run-tests, self-check, hardening-tests, stress-tests) | The framework's own test suite for the checker, parser, and hook |
