# CLAUDE.md restructure plan v3 — direct mapping of the global setup

Date: 2026-08-23. Status: awaiting approval, not executed. Supersedes v2.

## Goal

Map the global ~/.claude configuration into this repo 1:1 so an adopter gets
the same /doctor-tuned experience. The global content is canonical and is not
edited on the way in. Exactly two transforms are allowed:

1. **Path retargeting** — `~/.claude/RTK.md`-style global paths become in-repo
   paths; `rules/` becomes `docs/rules/`.
2. **Name slot** — "Zac" becomes "the user". Substance untouched.

Nothing is genericized, made optional, or stripped. RTK, ponytail, the
stax/roborev/z-adversarial pipeline, and the plugins are part of the
experience being shipped; docs/SETUP.md installs them instead of the rules
pretending they don't exist. (This reverses v2's de-personalization sweep.)

## The mapping table (the heart of the plan)

Every H2 of the global CLAUDE.md, its repo destination, and its state today.
"sync" = replace the repo passage with the global text verbatim.

| Global section | Repo destination | State today | Action |
|---|---|---|---|
| Preamble: repo-wins precedence, Safety > How to work > Ponytail | CLAUDE.md top + docs/rules/PRINCIPLES.md | PRINCIPLES has it | sync; add the precedence line to CLAUDE.md |
| How to work | docs/rules/PRINCIPLES.md | present, reworded | sync |
| Latent vs deterministic | docs/rules/PRINCIPLES.md | present | sync |
| Tests and evals: every time | docs/rules/TESTING.md | present | sync |
| Measurable outcome per change | docs/rules/PRINCIPLES.md | present | sync |
| LLM access: local Claude Code | docs/rules/CODING.md | present | sync |
| Tech choice: search before building | docs/rules/CODING.md | present | sync |
| Architecture: services-first | docs/rules/CODING.md + SERVICES.md | present | sync |
| Skills (incl. graphify, /browse rules) | docs/rules/PRINCIPLES.md | partial — graphify and /browse lines missing | sync + add |
| Grounding (investigate_before_answering) | docs/rules/PRINCIPLES.md | **missing** | add verbatim, incl. the XML tag |
| Completion status protocol | docs/rules/WORKFLOW.md | present | sync |
| Background jobs and backfills | docs/rules/WORKFLOW.md | present, compressed | sync to full global text |
| Confusion protocol | docs/rules/WORKFLOW.md | present | sync |
| How Zac wants to be talked to | docs/rules/VOICE.md | **missing** (file deleted in 17b1ede) | restore, name slot applied |
| Response length | docs/rules/VOICE.md | **missing** | add |
| Written deliverable length | docs/rules/VOICE.md | **missing** | add |
| Progress updates | docs/rules/VOICE.md | **missing** | add |
| Programming principles | docs/rules/CODING.md | **drifted** — repo mandates full SOLID as default; global says apply SOLID/DRY only where coupling actually hurts | sync (global wins) |
| Design system | docs/DESIGN.md + CLAUDE.md routing row | present | keep; fix routing path |
| Model routing, delegation, escalation | docs/rules/DELEGATION.md | **drifted** — effort defaults disagree (Sonnet medium vs high; Opus xhigh vs high/xhigh-demanding; Fable medium vs high/xhigh); missing the per-generation effort-sweep note | sync (global wins) |
| Subagent limits | docs/rules/DELEGATION.md | **missing** | add verbatim |
| RTK | docs/rules/RTK.md (copy of ~/.claude/RTK.md) | **missing** | copy in; keep CLAUDE.md's rtk-instructions block; retarget its `~/.claude/RTK.md` ref |
| Safety | docs/rules/SAFETY.md | **missing** (deleted in 17b1ede) | restore verbatim, incl. the Windows Git Bash path rule |

Non-global repo files docs/rules/AUTONOMY.md and SERVICES.md stay as-is (they
extend the global content; they don't contradict it). The split of one global
monolith into per-topic rules files is the repo's original design and is kept;
it is a structural choice, not a content edit.

Drift instances above are the proof this repo needs a canonical-source rule:
each mapped file gets a one-line header `Mapped from the global CLAUDE.md,
2026-08-23` so future syncs know the direction.

## Phase 1 — CLAUDE.md: minimal edit of the existing template, not a rewrite

Keep the template's shape (it's the original design). Change only:

- Add the precedence line under the title: Safety first, then How to work,
  then the lazy ladder.
- **Fix every dead pointer**: `rules/X.md` -> `docs/rules/X.md` (nine rows,
  incl. restored SAFETY, VOICE, RTK); `docs/ai/SKILLS.md` -> README.md (the
  catalog); `docs/ai/plans/` -> docs/plans/; `docs/ai/LEARNINGS.md` -> new
  docs/LEARNINGS.md stub; drop the `docs/ai/INDEX.md` line (the rules table IS
  the index); `architecture/` -> docs/architecture/; `DESIGN.md` ->
  docs/DESIGN.md; `rules/TOKEN-ECONOMY.md` row dropped (file gone, no global
  counterpart to map).
- First-run trigger: `docs/ai/BOOTSTRAP.md` -> docs/SETUP.md.
- Commands: gate row points at the new tools/gate.mjs (Phase 3); the
  /stack-ship row stays (the pipeline is part of the kit).
- Routing table, Non-negotiables, Estimation, Landmines, Compact
  instructions, rtk block: **kept as-is** (paths fixed only).

## Phase 2 — execute the mapping table

- Sync pass over PRINCIPLES, TESTING, CODING, WORKFLOW, DELEGATION: replace
  each mapped passage with the global text verbatim (name slot where needed).
- Create docs/rules/SAFETY.md, VOICE.md, RTK.md from the global content.
- WORKFLOW.md keeps the stax/roborev/z-adversarial shipping section unchanged;
  its one dead pointer (docs/ai/TICKET-TEMPLATE.md) is fixed by inlining the
  ticket sections (Context, Acceptance Criteria, Origin).
- SERVICES.md: fix its `rules/CODING.md` pointer.
- Create docs/LEARNINGS.md and docs/MISTAKES.md stubs (global's mistakes-log
  rule and the /learn routing row need real targets).

## Phase 3 — gate + CI (carried from v2 unchanged)

- New `tools/gate.mjs` (~40 lines, node stdlib): every relative link and
  backtick path in CLAUDE.md, README.md, docs/**/*.md resolves; `--self-test`
  proves it fails on a removed path. TODO(bootstrap) markers are fill-in
  points, not failures.
- Rewrite `.github/workflows/gate.yml`: gate.mjs, gate.mjs --self-test,
  filter-test-output.mjs --check. CI is currently red on every push (three
  steps run files deleted in b0aa7b7); this is the highest-urgency fix.

## Phase 4 — first-run experience: docs/SETUP.md installs the toolchain

New docs/SETUP.md (~60 lines), the interview/checklist the first-run trigger
points at:

1. Fill project name + stack in CLAUDE.md.
2. Install the toolchain the rules reference, in order, each with its install
   command and a skip note: rtk (+ its PreToolUse hook), ponytail plugin,
   caveman + context-optimizer plugins (already in .claude/settings.json
   enabledPlugins — kept, reversing v2), stax + roborev + gh, the skill packs
   from README.md's per-source files (GSTACK.MD, ECC.md, MATT.MD, ZCARES.MD,
   RCS.MD).
3. Wire the gate as a pre-commit hook.
4. Fill or defer docs/DESIGN.md and docs/STRATEGY.md; fix-forward their dead
   docs/ai references to docs/SETUP.md.
5. Delete remaining TODO(bootstrap) markers, disarming the trigger.

README.md gets a new intro (tables untouched): what the kit is — the author's
/doctor-tuned Claude Code setup, codified — plus the 3-step quickstart
pointing at docs/SETUP.md.

## Phase 5 — housekeeping

- Commit the pending ECC-Missing.md deletion and untracked GSTACK.MD, MATT.MD,
  ZCARES.MD. Delete skills-v1.md (superseded by README's tables; git keeps
  history).
- agents.md: keep the full cross-machine inventory, add one header line noting
  it's the author's machine-wide inventory and which rows ship in-repo. (v2's
  trim recommendation withdrawn — the inventory shows adopters what a mature
  setup looks like.)
- .claude/settings.json: untouched.

## Acceptance Criteria

1. Every row of the mapping table lands: each global H2 section's text appears
   at its repo destination, altered only by the two allowed transforms.
   Spot-checkable by diffing any section against ~/.claude/CLAUDE.md.
2. DELEGATION.md's table and CODING.md's programming principles match the
   current global text exactly (the two known drifts are gone).
3. `node tools/gate.mjs` exits 0; `--self-test` exits non-zero on a removed
   path; gate.yml is green on the PR.
4. `grep -rn "docs/ai/\|(^|[^/])rules/[A-Z]" CLAUDE.md docs/` finds nothing:
   no pointer targets a deleted tree.
5. docs/rules/ has 10 files (7 current + SAFETY, VOICE, RTK), each mapped file
   carrying its `Mapped from the global CLAUDE.md, <date>` header.
6. docs/SETUP.md exists, lists every tool the rules reference with an install
   command, and is the target of CLAUDE.md's first-run trigger and README's
   quickstart.

## Out of scope

- Editing the substance of any global-derived rule (the whole point).
- README.md's catalog tables.
- .agents/skills/ contents; verifying third-party install commands upstream.
