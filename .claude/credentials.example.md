# Claude-usable credentials (EXAMPLE — copy to .claude/credentials.md)

Test and dev accounts Claude uses for /qa, /browse, and dev services.
Rules: test/dev accounts ONLY, never production (docs/rules/SAFETY.md). The
real file `.claude/credentials.md` is gitignored; tools/gate.mjs enforces the
ignore line exists.

| Service | Environment | URL | Username | Password | Notes |
|---|---|---|---|---|---|
| example-app | staging | https://staging.example.com | qa-user@example.com | example-only | seeded nightly |
