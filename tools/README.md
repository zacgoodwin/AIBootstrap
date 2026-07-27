# Tools

Deterministic maintenance scripts (rules/PRINCIPLES.md latent-vs-deterministic:
arithmetic, parsing, transforms, lookups never happen inside a model reply —
they live here).

Contract:
- Deterministic only: same input, same output.
- Each script leaves one runnable self-check (`--check` flag or assert block).
- No business logic; that belongs in services/.

`gate.mjs` is the template's own gate test: run `node tools/gate.mjs` before
committing repo-structure changes.
