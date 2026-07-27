# Safety

Top of the precedence order. These override everything else.

- Never commit secrets. `.env*` is gitignored; if `.env` is touched, verify
  `.gitignore` before any commit.
- Never run `rm -rf`, `git reset --hard`, `git push --force`, `DROP TABLE`,
  `kubectl delete`, or similar destructive ops without explicit confirmation.
- Never skip pre-commit hooks with `--no-verify`. If a hook fails, fix the
  underlying issue.
- Never commit binaries, compiled outputs, or model weights. Use Git LFS or
  cloud storage with a pointer.
- Before any action touching production, state what you're about to do and
  wait for confirmation.
