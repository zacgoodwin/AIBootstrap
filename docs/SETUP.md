# First-run setup

CLAUDE.md's first-run trigger points here. This is an interview: work
through it WITH the user, one branch at a time — ask, don't assume. Enter
plan mode for step 6's tooling plan. Steps only the human can do
(credentials, dashboards, sign-ups) run through /wizard. When the last
step is done this file stays as reference; the trigger disarms when the
TODO(bootstrap) markers are gone (step 8).

## 1. Which setup — Global or Repo?

- **Global**: configure this machine's user-level `~/.claude` (global
  CLAUDE.md, tools, plugins). No project is named.
- **Repo**: bootstrap this clone into a named project.

Both paths run the same steps below; Global-only and Repo-only points are
marked.

## 2. Context

- **Solo or team?** Sets which process doc backs every later
  recommendation: docs/process/PROCESS-SOLO.md or
  docs/process/PROCESS-TEAM.md. Read the matching one now.
- **Team only:** shared server workspace, or laptops? Shared → also read
  docs/process/PROCESS-TEAM-SERVER.md.
- **Repo only:** name the project — fill CLAUDE.md's title and
  description TODO markers. If the repo already has code, analyze it:
  infer the language and stack, and suggest skills and hooks that fit
  what you find.

## 3. Machine

- **Windows?** MERGE docs/rules/windows-hook.json's `hooks` entries into
  .claude/settings.json (`~/.claude/settings.json` on the Global path) —
  never replace the file, or you lose its `permissions` block and the
  filter-test-output hook. Then copy docs/rules/WINDOWS.md's rules into
  CLAUDE.md as a `## Windows` section, demoting its `##` headings to
  `###`.
- **Language** (ask only if step 2 didn't infer it) → record in
  docs/architecture/STACK.MD with exact versions ("Next.js 15 App
  Router", not "Next.js").

## 4. Ticketing

Does an existing ticketing system carry this work? Record the answer; it
feeds step 7's rules rewrite. No tracker is a valid answer — step 5 can
propose one.

## 5. Tooling

Ask: do you want tooling recommendations?

- **Yes** → open the STACK file matching step 2
  (docs/process/STACK-SOLO.md or docs/process/STACK-TEAM.md) and ask
  which tier: least overhead / best in class / cost no object / cheapest
  / (solo only) self-host homelab. Then walk each lifecycle phase
  (Ideation → Research → Specification → Design → Development → Test →
  Deliver → Maintain) confirming the tier's pick wherever it has no
  obvious answer.
- **No** → walk the same phases asking what they already use; offer a
  suggestion only where they have nothing.

Either branch includes the baseline toolchain below. Each item is
optional. Two are load-bearing for the rules as written: stax + roborev
(docs/rules/WORKFLOW.md Shipping) and the ponytail marker
(docs/rules/PRINCIPLES.md). The rest are convenience — skip one and
nothing in docs/rules/ goes stale.

| Tool | What it does | Install | Verify |
|---|---|---|---|
| rtk | Filters shell output before it reaches the model; its installer drops usage docs at `~/.claude/RTK.md` | github.com/rtk-rs — then wire its PreToolUse hook per its README | `rtk --version`; `rtk gain` |
| ponytail plugin | Enforces the lazy ladder (docs/rules/PRINCIPLES.md) every session | `/plugin` -> ponytail marketplace (table below) | SessionStart shows "PONYTAIL MODE ACTIVE" |
| caveman + context-optimizer plugins | Terse prose + context hygiene | `/plugin` -> their marketplaces (table below) | `/plugin` lists them |
| stax (`st`) + roborev | Stacked branches + per-commit background review (docs/rules/WORKFLOW.md Shipping) | their READMEs; roborev config is already in `.roborev.toml` | `st doctor`; `roborev show HEAD` |
| gh | Tickets and PRs | cli.github.com | `gh auth status` |
| graphify | Codebase as a queryable knowledge graph; CLAUDE.md routes codebase questions here | github.com/safishamsi/graphify | `graphify --version` |
| skill packs | The catalog in docs/frameworks/ | the marketplace table below covers the plugin sources; other packs are documented in docs/frameworks/, which names the upstream repo and carries an install line where upstream publishes one | invoked skills appear in the session skill list |
| everything else on the shelf | CLI apps, frameworks, MCP servers, and language-specific helpers considered but not baseline | docs/dev-tooling/ names each one and its upstream | per tool |

### Plugin marketplaces

Register once via `/plugin` -> add marketplace (or `claude plugin
marketplace add <repo>`); the plugin rows above install from these.

| Marketplace | Repo | Carries |
|---|---|---|
| ponytail | DietrichGebert/ponytail | ponytail plugin (lazy ladder mode, review/audit/debt skills) |
| caveman | JuliusBrussee/caveman | caveman plugin (terse output mode) |
| context-optimizer | egorfedorov/claude-context-optimizer | context hygiene plugin |
| claude-plugins-official | anthropics/claude-plugins-official | official plugins: supabase, figma, claude-md-management |
| context-engineering-marketplace | muratcankoylan/Agent-Skills-for-Context-Engineering | context-engineering skill pack |
| zcaceres-skills | zcaceres/skills | zcaceres skill pack (also installable per-skill: `npx skills add zcaceres/skills -s <name>`, see docs/frameworks/ZCARES.MD) |
| ecc | affaan-m/ECC | ECC pack |
| codemyspec | Code-My-Spec/plugins | codemyspec plugin |

Plugins installed from a marketplace update through `/plugin`. Anything
vendored into `.claude/skills/` instead, and every pack catalog in
docs/frameworks/, is tracked in tools/sources.json:
`node tools/skills-update.mjs check` says what has moved upstream since, and
`/skills-update` refreshes it. Vendor a skill by hand and the gate will ask
for its manifest entry.

## 6. Plan, approve, execute

Build ONE plan covering: local installs, external services to sign up
for, self-hosted deployments, and estimated cost (each STACK file ends
with per-tier cost rollups — use the chosen tier's). Present it for
approval and loop on "what needs to change?" until approved. Then
execute; generate a /wizard for the human-only steps.

## 7. Rewrite the choice-dependent rules

With the answers in hand, fill every choice point:

- docs/rules/WORKFLOW.md `## Tickets` — the chosen tracker and template
  (default: docs/rules/TICKET_TEMPLATE.md).
- docs/rules/WORKFLOW.md `## Shipping` — confirm the stax+roborev
  default or replace it with the chosen pipeline. Team: add a
  merge-discipline addendum (human review before `st merge`, branch
  protection on trunk, who runs /stack-ship).
- CLAUDE.md `## Estimation` — tracker board with Model + Model Effort
  fields → keep board-field routing; no board → "the
  docs/rules/DELEGATION.md table governs."
- docs/rules/DELEGATION.md `## Ticket execution` — confirm the GitHub
  Projects default, rewrite the field lookup for another tracker, or
  delete the section when there is no tracker. Tune the model table's
  defaults to the chosen stack tier and subscription.
- **Repo only:** docs/rules/CODING.md `## Project conventions` — from the
  language / repo analysis.
- **Repo only:** CLAUDE.md `## Commands` — project test and eval commands.
- docs/rules/PRINCIPLES.md `## Skills` — append a bullet per installed
  pack. Canonical text:
  - gstack: "gstack's `/browse` for interactive browser sessions (QA,
    dogfooding, form flows). WebSearch/WebFetch for reading pages and
    docs."
  - graphify: "If `graphify-out/graph.json` exists in the repo, answer
    codebase questions with `graphify query \"<question>\"` (also
    `path`, `explain`) before raw grep, and run `graphify update .`
    after modifying code. Run it bare, no `cd` prefix
    (docs/rules/SAFETY.md)."
- docs/rules/VOICE.md — offer to tune it; a team adopting the kit may
  want its own voice.

## 8. Close out

- **Repo only:** wire the gate pre-commit hook:

  ```sh
  # Git Bash, not PowerShell. Refuses to clobber an existing hook.
  [ -e .git/hooks/pre-commit ] \
    && echo 'pre-commit exists — add "node tools/gate.mjs" to it by hand' \
    || { printf '#!/bin/sh\nnode tools/gate.mjs\n' > .git/hooks/pre-commit; chmod +x .git/hooks/pre-commit; }
  ```

  Then extend tools/gate.mjs (or add a runner next to it) with the
  project's own tests as they appear.
- **Repo only:** docs/STRATEGY.md — interview the user section by
  section. docs/DESIGN.md — run /design-consultation, or mark
  "Deferred: no UI yet."
- Delete every remaining TODO(bootstrap) marker in CLAUDE.md. The
  first-run trigger fires on those markers; with them gone, sessions
  start normally.
