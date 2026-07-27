Every ticket body on the board uses these sections, exact headings and levels.
`z-ticket-lint` enforces them; z-plan's backlog gate rejects bodies that drift.
Copy from the first heading down, replace the guidance lines.

## Context

Why this work exists: the problem, who hit it, what prompted it. If deferred
from elsewhere: "Deferred from <ticket/PR> on <date>."

## Plan

Numbered steps concrete enough that a fresh session can execute without asking.
Name files and functions.

### Acceptance Criteria

Bullet list of observable outcomes. The independent yardstick QA and review
check against; weakening or skipping one is a spec question, never a silent
edit.

## Tests + evals

Which gate tests and evals this ticket adds or updates, and where they live.

## Docs pages touched

docs/user-guide/ pages this ticket updates in the same PR, or "None" with why.

## Out of scope

What this ticket deliberately does not do, so review doesn't expand it.

---

Optional `## Files` section: top-level bullets, first backticked span is the
repo-relative path, `(new)` marker for created files.

Filled example (fenced so the lint reads only the template above):

```markdown
## Context

Signup emails go out unthrottled; ops hit SES rate limits twice this week
(alerts #142, #158). Deferred from PR #61 on 2026-07-20.

## Plan

1. Add `services/mailer/src/throttle.ts` with a token-bucket limiter
   (stdlib timers, no new dependency).
2. Wire it into `services/mailer/src/send.ts:sendBatch`.
3. Expose `MAILER_RATE_PER_SEC` in `services/mailer/config.ts`, default 10.

### Acceptance Criteria

- 100 queued emails send at <=10/sec; none dropped.
- Rate limit breach logs one warning, never crashes the worker.
- Config change takes effect without redeploy.

## Tests + evals

- Gate: `services/mailer/test/throttle.test.ts` (bucket math, burst edge).
- Eval: none; no latent behavior changed.

## Docs pages touched

None; internal infrastructure, no user-visible behavior.

## Out of scope

- Retry/backoff policy (separate ticket).
- Non-SES providers.

## Files

- `services/mailer/src/throttle.ts` (new) token-bucket limiter
- `services/mailer/src/send.ts` wire limiter into sendBatch
```
