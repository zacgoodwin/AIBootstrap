# First-run setup

CLAUDE.md's first-run trigger points here. Work through this checklist WITH
the user (ask, don't assume), top to bottom. Each step says what to edit or
install and how to verify it. When the last step is done, this file stays as
reference but the trigger is disarmed.

## 1. Name the project

Replace the TODO(bootstrap) markers in CLAUDE.md's title and description, and
fill docs/architecture/STACK.MD. Exact versions ("Next.js 15 App Router",
not "Next.js").

## 2. Install the toolchain the rules reference

Each item is optional individually — but the rules in docs/rules/ assume the
full set. Skip one and its references go inert, not broken.

| Tool | What it does | Install | Verify |
|---|---|---|---|
| rtk | Filters shell output before it reaches the model; its installer drops usage docs at `~/.claude/RTK.md` | github.com/rtk-rs — then wire its PreToolUse hook per its README | `rtk --version`; `rtk gain` |
| ponytail plugin | Enforces the lazy ladder (docs/rules/PRINCIPLES.md) every session | `/plugin` -> ponytail marketplace (table below) | SessionStart shows "PONYTAIL MODE ACTIVE" |
| caveman + context-optimizer plugins | Terse prose + context hygiene | `/plugin` -> their marketplaces (table below) | `/plugin` lists them |
| stax (`st`) + roborev | Stacked branches + per-commit background review (docs/rules/WORKFLOW.md Shipping) | their READMEs; roborev config is already in `.roborev.toml` | `st doctor`; `roborev show HEAD` |
| gh | Tickets and PRs | cli.github.com | `gh auth status` |
| skill packs | The catalog in README.md | per-source files in docs/frameworks/ carry install commands (`npx skills add <source>` style) | invoked skills appear in the session skill list |

### Plugin marketplaces

Register once via `/plugin` -> add marketplace (or `claude plugin marketplace
add <repo>`); the plugin rows above install from these.

| Marketplace | Repo | Carries |
|---|---|---|
| ponytail | DietrichGebert/ponytail | ponytail plugin (lazy ladder mode, review/audit/debt skills) |
| caveman | JuliusBrussee/caveman | caveman plugin (terse output mode) |
| context-optimizer | egorfedorov/claude-context-optimizer | context hygiene plugin |
| claude-plugins-official | anthropics/claude-plugins-official | official plugins: supabase, figma, claude-md-management |
| context-engineering-marketplace | muratcankoylan/Agent-Skills-for-Context-Engineering | context-engineering skill pack |
| zcaceres-skills | zcaceres/skills | zcaceres skill pack |
| ecc | affaan-m/ECC | ECC pack |
| codemyspec | Code-My-Spec/plugins | codemyspec plugin |

## 3. Wire the gate

CI already runs it (.github/workflows/gate.yml). Add it as a pre-commit hook:

```
echo 'node tools/gate.mjs' > .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit
```

Then extend tools/gate.mjs (or add a runner next to it) with the project's
own tests as they appear, and fill CLAUDE.md `## Commands`.

## 4. Fill or defer the product docs

- docs/STRATEGY.md — vision, users, 90-day outcomes, kill criteria. Interview
  the user section by section.
- docs/DESIGN.md — run /design-consultation, or mark "Deferred: no UI yet."

## 5. Disarm the trigger

Delete every remaining TODO(bootstrap) marker in CLAUDE.md. The first-run
trigger fires on those markers; with them gone, sessions start normally.
