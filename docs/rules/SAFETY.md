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

Windows-specific shell safety lives in docs/rules/WINDOWS.md, which setup
copies into CLAUDE.md on Windows machines.
