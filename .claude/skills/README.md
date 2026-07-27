# Project skills

Project-specific skills live here and are auto-discovered by Claude Code.

- `/skillify` output lands here: repeated manual flows codified as skills.
- Dependency-delivered skills (packages that ship their own SKILL.md) may land
  here or in `.agents/skills/` (gitignored when generated).
- Skill PACKS (gstack, zstack) are host-installed via `bootstrap.ps1` /
  `bootstrap.sh`, never vendored here. See docs/ai/SETUP.md.
- `graphify/` is vendored deliberately: a standalone skill, no pack or
  installer upstream, so every clone gets knowledge-graph queries day one.
  Its output dir `graphify-out/` is gitignored.
