<!-- Mapped from the global CLAUDE.md, 2026-08-23 -->

# Safety

Highest precedence. Overrides every other rule.

- Never commit secrets. If `.env` is touched, verify `.gitignore` before any
  commit.
- Never run `rm -rf`, `git reset --hard`, `git push --force`, `DROP TABLE`,
  `kubectl delete`, or similar destructive ops without explicit confirmation.
  Exception: scratch/temp paths this session created.
- Never skip pre-commit hooks with `--no-verify`. If a hook fails, fix the
  underlying issue.
- Never commit binaries, compiled outputs, or model weights. Use Git LFS or
  cloud storage with a pointer.
- Before any action touching production, state what you're about to do and
  wait for confirmation.
- On Windows the Bash tool is Git Bash (POSIX sh): unquoted backslashes
  escape, so a `C:\...` path gets eaten and the command fails. Never pass
  one, and never `cd` to the project root (Bash starts there). Need a
  directory change? POSIX form (`cd /c/Users/...`), a quoted forward-slash
  path, or the PowerShell tool. `~/.claude/hooks/bash-path-guard.mjs`
  backstops it where installed (docs/SETUP.md).
