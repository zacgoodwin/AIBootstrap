# Machine setup

Once per machine. After this, every repo born from the template just works.

## Prerequisites

git, GitHub CLI (`gh`, authenticated with `project` scope for boards),
Node 20+, Claude Code CLI.

## Run the bootstrap script

Windows:

```
powershell -ExecutionPolicy Bypass -File bootstrap.ps1
```

macOS / Linux:

```
bash bootstrap.sh
```

The script verifies prerequisites and installs the two skill packs if absent:

- **gstack** (github.com/garrytan/gstack) — plan, review, QA, ship, deploy skills
- **zstack** (github.com/zacgoodwin/zstack) — GitHub-board dev loop (z-setup, z-plan, z-loop)

Re-running is safe; everything checks before acting. Exit code 0 = ready.

## Plugins

ponytail, caveman, and claude-context-optimizer are declared in
.claude/settings.json and install automatically the first time you trust this
repo in Claude Code. No manual step.

## Verify

Open Claude Code in the repo. You should see gstack skills (/ship, /qa) and
zstack skills (/z-setup) in the skill list, and the session should immediately
offer the first-session interview (docs/ai/BOOTSTRAP.md).

## Optional tuning

- Statusline: show context usage continuously (see /statusline).
- `CLAUDE_CODE_SUBAGENT_MODEL=haiku` routes exploration subagents to Haiku.
  Off by default here: it conflicts with board Model-field routing once
  /z-loop is running.

## Troubleshooting

- `gh auth status` fails: `gh auth login`, grant `project` scope
  (`gh auth refresh -s project`).
- Pack clone fails behind a proxy: clone manually into `~/.claude/skills/<name>`
  and run its `./setup`.
- Windows: run scripts from Git Bash if PowerShell policy is locked down;
  `bash bootstrap.sh` works there too.
