# First-session interview

You are the first Claude session in a repo born from the AIBootstrap template.
Walk the user through this interview, fill the placeholders, then delete this
file. Ask one step at a time (AskUserQuestion where available); accept "skip"
for any step and leave its `TODO(bootstrap)` marker in place. Do not start
feature work until this file is gone.

## Step 1 — Verify tooling

Check that the gstack and zstack skill packs respond (a skill listing that
includes /ship and /z-setup is enough). If missing, point the user at
docs/ai/SETUP.md (run bootstrap.ps1 or bootstrap.sh) and STOP here.

## Step 2 — Strategy

Ask, one at a time:
1. What is the product, in one sentence?
2. Who is it for? Which segment is the beachhead, and what criteria qualify a
   prospect as in it?
3. What measurable outcome defines success in 90 days?
4. What is explicitly out of scope?
5. What signal would tell you to stop or pivot? (kill criteria)
6. Any existing business rules Claude must never invent (pricing tiers,
   permission models, compliance constraints, billing mechanics)? If yes,
   record each in docs/ai/BUSINESS-RULES.md; if greenfield, skip — that file
   fills reactively.
7. Brand voice for user-facing text (register, banned phrases, preferred
   terminology)? Append to rules/VOICE.md; skip if undecided.

Write answers 1-5 into docs/STRATEGY.md (replace the TODO(bootstrap) markers).
Copy each 90-day outcome and kill criterion into the Product outcomes table of
docs/ai/HEALTH-METRICS.md with source + threshold.

## Step 3 — Stack

Ask: language, framework, package manager — WITH exact versions ("Next.js 15
App Router", never "Next.js") — how to run the app, the gate-test command
(must be deterministic and <2s), the eval command (or "none yet"). Also:
naming conventions (component casing, test file naming, import style), and
any test accounts Claude should use for /qa or /browse.

Then:
- Fill CLAUDE.md `## Stack` and `## Commands` (versions included).
- Fill the `## Project conventions` block in rules/CODING.md (naming only).
- Test accounts: create `.claude/credentials.md` from
  `.claude/credentials.example.md` (gitignored; test/dev accounts only).
- Update `TEST_RUNNERS` and `SELF_CHECK` in
  .claude/hooks/filter-test-output.mjs to match the real gate command; run
  `node .claude/hooks/filter-test-output.mjs --check`.
- Offer to wire the gate as a pre-commit hook (stack-appropriate: husky,
  pre-commit, core.hooksPath — pick what fits, never `--no-verify` culture).
- Offer the code-intelligence plugin for the chosen language (one
  go-to-definition replaces grep + candidate reads).
- Add stack ignores to .gitignore (node_modules/, dist/, __pycache__/, etc.).

## Step 4 — Design

Ask whether this project has a UI yet. If yes, offer /design-consultation and
write the outcome into DESIGN.md. If no, replace DESIGN.md's TODO with
"Deferred: no UI yet (revisit at first UI ticket)."

## Step 5 — Board

Offer to run /z-setup now (creates the GitHub ProjectV2 board with the nine
statuses and Model/Effort/Estimate/Actual fields). Note /setup-deploy comes
later, when there is something to deploy.

## Step 6 — Estimation

Fill CLAUDE.md `## Estimation` with this project's Model + Model Effort
defaults (start from the rules/DELEGATION.md table; adjust for domain
difficulty with the user).

## Step 7 — Finalize

1. Rewrite README.md to describe THIS product (keep a short "AI-assisted
   development" section pointing at docs/ai/SETUP.md and CLAUDE.md).
2. Remove the bootstrap pointer paragraph from CLAUDE.md (the bold block near
   the top referencing this file).
3. Delete this file (docs/ai/BOOTSTRAP.md) and its line in docs/ai/INDEX.md.
4. Run `node tools/gate.mjs` — must be green.
5. Commit: `bootstrap: initialize project`.
6. Report remaining `TODO(bootstrap)` markers (grep) as the open items list.
