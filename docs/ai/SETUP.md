# Machine setup

Once per machine. After this, every repo born from the template just works.

## Prerequisites

git (on Windows: Git for Windows, whose Git Bash runs the pack setups),
GitHub CLI (`gh`, authenticated with `project` scope for boards),
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

The script verifies prerequisites (including the gh `project` scope) and
installs or repairs the two skill packs, cloning if absent and re-running
each pack's own idempotent setup:

- **gstack** (github.com/garrytan/gstack) — plan, review, QA, ship, deploy skills

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

## Troubleshooting

- `gh auth status` fails: `gh auth login`, grant `project` scope
  (`gh auth refresh -s project`).
- Pack clone fails behind a proxy: clone manually into `~/.claude/skills/<name>`
  and run its `./setup`.
- Windows: run scripts from Git Bash if PowerShell policy is locked down;
  `bash bootstrap.sh` works there too.
