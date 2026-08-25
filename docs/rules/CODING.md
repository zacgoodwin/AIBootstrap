<!-- Mapped from the global CLAUDE.md, 2026-08-23 -->

# Coding practices

## Architecture: services-first, parallel-friendly

Independent services / self-contained directories, so any piece can be worked
by a separate Claude Code session without collision. The service contract
(layout, boundaries, independent suites and deploys, cross-service changes)
lives in docs/rules/SERVICES.md; it owns those rules and they are not restated
here.

- **Fan out only when it pays.** Worktree fan-out is for large, genuinely
  independent units where time saved beats agent cost, subject to Subagent
  limits (docs/rules/DELEGATION.md). Serial when the job is small, cheap, or
  tightly coupled. "As cheap as possible" biases serial. Worktrees keep
  parallel agents off the same files. Merge each unit when green.
- A service MAY ship `services/<name>/CLAUDE.md` holding ONLY its local
  commands and local rules, plus a pointer to its README (which owns the
  contract). Nested CLAUDE.md files concatenate with the root; keep them thin.

## Project conventions

TODO(bootstrap): naming patterns and file conventions for this project
(component casing, test file naming, import style). Layout is fixed by the
services-first contract above.

## Tech choice: search before building

Simplest vanilla tech wins. No framework-of-the-month, no abstractions for
hypothetical reuse. Before writing any utility, harness, or library, search in
order:

1. **Tried-and-true.** Standard library or established pattern? Use it. Wins
   most of the time.
2. **New-and-popular.** Real traction? Evaluate it. For cross-cutting
   concerns, grep GitHub for top candidates; rank by stars, commit recency,
   issue responsiveness, real user feedback. Return the best option with
   reasoning, not a list, and name rejected runners-up with why.
3. **First-principles.** Conventional approaches genuinely don't apply?
   Document WHY in the commit or a design doc before writing custom code.

Equally viable options: name the trade-off and ask the user (Confusion
Protocol, docs/rules/WORKFLOW.md).

## LLM access: local Claude Code, not the API

- Software we build never calls a hosted LLM API (Anthropic, OpenAI, any
  inference endpoint) unless the user explicitly instructs it. Route calls
  through local Claude Code.
- If the project has no LLM service yet, build one: a self-contained service
  that shells out to local Claude Code, with its own contract, tests, and
  evals. Everything else calls that contract.

## Programming principles

- Separation of concerns in layers: presentation (UI components), business
  logic (services), transport (API routes), state (hooks). Apply SOLID and
  DRY where duplication or coupling is actually hurting, not as a default.
- Strict typing everywhere it's available; shared interfaces at boundaries.
- Consistent patterns: standardized API responses, common error handling,
  unified component props, consistent naming.
- Comments state what the code can't: constraints, invariants, and why. Don't
  narrate what each line does; match the surrounding code's comment density.
- Log mistakes in docs/MISTAKES.md (what happened, root cause, prevention).
