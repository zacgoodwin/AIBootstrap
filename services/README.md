# Services

One concern, one directory. Each `services/<name>/` owns its code, tests,
evals, README, and config, and can be worked on by a separate agent session
without touching any other service. Root holds only glue. Contracts between
services live in `contracts/` or `schemas/` at the repo root; never reach into
another service's internals.

Model service shape:

```
services/<name>/
├── README.md      # what it does, its contract, how to run it
├── src/
├── config.*       # this service's config only
├── test/          # gate tests: deterministic, <2s, run on every commit
└── evals/         # paid evals, only if the service has latent behavior
```

A change in one service must not require running another service's suite to
validate. Cross-service change = contract change: bump the schema version,
update both sides, call it out explicitly (rules/CODING.md).
