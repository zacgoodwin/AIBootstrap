# Services

One concern, one directory. Each `services/<name>/` owns its code, tests,
evals, README, and config, and can be worked on by a separate agent session
without touching any other service. Root holds only glue. Contracts at the
boundary: typed interfaces (HTTP, gRPC, message bus, shared schema package)
defined in `contracts/` or `schemas/` at the repo root that both sides import;
never reach into another service's internals.

Model service shape:

```
services/<name>/
├── README.md      # what it does, its contract, how to run it
├── CLAUDE.md      # optional: local commands/rules only; details live in README
├── src/
├── config.*       # this service's config only
├── test/          # gate tests: deterministic, <2s (CI + pre-commit once wired)
└── evals/         # paid evals, only if the service has latent behavior
```

A change in one service must not require running another service's suite to
validate, and each service is its own deploy unit: no release forces lockstep.
Cross-service change = contract change: bump the schema version, update both
sides, call it out explicitly. More services with sharp boundaries beats fewer
with fuzzy ones. This file owns the service contract; docs/rules/CODING.md
points here.
