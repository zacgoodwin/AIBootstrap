# zg-skills

All [zacgoodwin/zg-skills](https://github.com/zacgoodwin/zg-skills) skills, sorted by the same sections as the other files in docs/frameworks/. Upstream 723216b (2026-08-25) checked 2026-08-25.

The quality gate this repo's workflow is built on: docs/rules/WORKFLOW.md's Shipping pipeline is `/stack-ship`, and the review it cannot talk its way past is `/z-adversarial-review`. Six skills, no agents, no hooks. Two families: the ship-and-review gate (`/stack-ship`, `/z-adversarial-review`, `/zg-verify-claims`, `/zg-doc-integrity`), whose common idea is that a finding counts only when something other than the author's prose backs it -- a skeptic quorum counted off disk, a claim re-derived off the filesystem, a citation resolved by line; and the identity pair (`/dev-as-ai`, `/dev-as-human`), which switches git and `gh` between the human and the AI dev bot so authorship stays honest.

# Development Process

## Loop

| Execution | What it does |
| --- | --- |
| `/stack-ship` | Ship the current stax branch through the quality pipeline: gate on roborev per-commit reviews (bounded auto-fix loop on failure), squash-submit one clean commit upstream as a PR via stax, run blinded cross-provider adversarial review on that PR, then patch-bump VERSION on the shipped PR. |

# Dev Tooling

## Developing

| Execution | What it does |
| --- | --- |
| `/dev-as-ai` | Switch this repo's git commit identity and the gh CLI account to the AI dev bot (tordek-ai). |
| `/dev-as-human` | Switch this repo's git commit identity and the gh CLI account back to Zac Goodwin. |

## Code Review

| Execution | What it does |
| --- | --- |
| `/z-adversarial-review` | Blinded adversarial review for any GitHub PR. Assembles a blinded four-key input (spec, acceptance criteria, diff, throwaway worktree), spawns one fresh reviewer agent holding nothing else, fans out 3 independent skeptic sub-agents on non-trivial diffs, and reports a confidence-scored verdict with the skeptic quorum counted off disk. Skeptic seats can run on other vendors' CLIs (codex, agy) for cross-provider blind spots. Read-only by default. |
| `/zg-verify-claims` | Audits a repo with subagents that may only propose findings as structured evidence, never prose. A script re-derives every claim off the filesystem before a human reads it: file exists, line says what was quoted, count is what was measured, reference resolves. Anything that does not reproduce is discarded and listed as discarded, so you see what the agent got wrong instead of fact-checking it yourself. |

## Documentation

| Execution | What it does |
| --- | --- |
| `/zg-doc-integrity` | Finds internal contradictions and language drift across one or many documents reviewed as a single document: instructions that conflict, one term used for two things, two terms used for one thing, numbers and versions that disagree, and structural references that dangle. Every instance is cited by line, every finding offers resolution options with their costs, and no option is recommended -- the judgment stays with the human. Reviewers see ONLY the documents passed in: no repo, no web, no outside knowledge. |
