# AIBootstrap

Template repository for AI-assisted application development. A repo born from
this template carries the personas, rules, skills wiring, and folder structure
for Claude Code to take a product from strategy to shipped, with a
GitHub-board dev loop and token-efficient defaults.

## Start a project

1. Click **Use this template** on GitHub and clone your new repo.
2. Once per machine: follow [docs/ai/SETUP.md](docs/ai/SETUP.md)
   (`powershell -ExecutionPolicy Bypass -File bootstrap.ps1` on Windows,
   `bash bootstrap.sh` elsewhere).
3. Open Claude Code in the clone. It detects the first-session interview
   ([docs/ai/BOOTSTRAP.md](docs/ai/BOOTSTRAP.md)), fills in strategy, stack,
   design, and board, rewrites this README for your product, and deletes the
   interview.

## What's inside

- **CLAUDE.md** — always-loaded brain, capped at 80 lines (gate-enforced);
  routes to everything else on demand.
- **rules/** — principles, coding, testing, workflow, delegation, autonomy,
  safety, voice, token economy.
- **.claude/agents/** — marketing, launch, product, sales, support, data
  personas. Engineering personas come from the gstack skill pack.
- **.claude/skills/** — project skills; graphify vendored for codebase
  knowledge graphs.
- **architecture/**, **services/**, **tools/**, **docs/** — the layout
  contract; see [docs/ai/INDEX.md](docs/ai/INDEX.md) for the full map.
- **tools/gate.mjs** — the template's own gate test (`node tools/gate.mjs`).
- **RTK-ai.app** - minimize input
- **ponytail** - minimize code
- **graphify** - minimize searching
- **z-stack** - loop based development

## Pulling template improvements later

Repos born from a template don't track it. To pull improvements:

```sh
git remote add template https://github.com/zacgoodwin/AIBootstrap.git
git fetch template
git cherry-pick <commit>
```
