# Health metrics

Owned by the data agent (.claude/agents/data.md). Every metric has a
deterministic source (script, query, eval score) and a threshold with an
action. A metric without a decision attached is decoration.

## Engineering (standing)

| Metric | Source | Threshold | Action on breach |
|---|---|---|---|
| Gate pass rate on main | CI history | 100% | fix before any new work |
| Eval scores | eval suite runs | per-suite threshold | ship blocked |
| Estimate vs Actual (board) | /z-status cost totals | Actual <= 1.5x Estimate | re-estimate model routing |
| Post-deploy canary | /canary reports | green | rollback per launch checklist |

## Product outcomes

TODO(bootstrap): one row per 90-day outcome from docs/STRATEGY.md, plus the
kill-criteria triggers.

| Metric | Source | Threshold | Action on breach |
|---|---|---|---|
