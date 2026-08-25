# Health metrics

The data agent (.claude/agents/data.md) owns this file. Every metric here
carries a definition, a source of truth, and a threshold that means "act".

Rules that outlive the bootstrap fill:

- Deterministic only. A metric is computed by a script, query, or eval score
  (docs/rules/PRINCIPLES.md, latent vs deterministic). A number estimated in
  prose is not a metric.
- Every metric names the action its threshold triggers. A number nobody acts
  on is a dashboard decoration.

TODO(bootstrap): fill the table once the product has users. Until then this
file exists so the data and executive-reviewer agents resolve.

| Metric | Definition | Source of truth | Threshold | Action when crossed |
|---|---|---|---|---|
| TODO(bootstrap) | | | | |
