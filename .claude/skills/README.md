# Project skills

Project-specific skills live here and are auto-discovered by Claude Code.

- `/skillify` output lands here: successful /scrape flows codified as
  browser-skills (scrape flows only). Other repeated flows become scripts in
  tools/ or hand-written skills here.
- Dependency-delivered skills (packages that ship their own SKILL.md) may land
  here or in `.agents/skills/` (gitignored when generated).
- Skill PACKS (gstack) are host-installed via `bootstrap.ps1` /
  `bootstrap.sh`, never vendored here. See docs/ai/SETUP.md.
- `graphify/` is vendored deliberately: a standalone skill, no pack or
  installer upstream, so every clone gets knowledge-graph queries day one.
  Its output dir `graphify-out/` is gitignored.
- Only DAILY surfaces live here (and in `../agents/`); they load every
  session. Off-stack and situational items are parked in
  `../skill-library/` and `../agent-library/` — not auto-discovered. The
  `skill-library` router skill maps triggers to parked items and holds the
  promote/demote recipe. Sorted by /agent-sort; re-sort when the stack
  changes.
