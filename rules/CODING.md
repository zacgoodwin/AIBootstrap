# Coding practices

## Architecture: services-first, parallel-friendly

Build everything as independent services / self-contained directories, so any
single piece can be worked on by a separate agent session without stepping on
another session's work.

- One concern, one directory: `services/<name>/` owns its code, tests, evals,
  README, and config. See services/README.md for the contract.
- Contracts at the boundary: typed interfaces defined in `contracts/` or
  `schemas/` that both sides import. Never reach into another service's
  internals.
- Independent test + eval suites and independent deploy per service.
- Root holds only glue: orchestration scripts, shared config, contracts, docs.
- Cross-service change = contract change: bump the schema version, update both
  sides, call it out explicitly.
- Fan out when it pays: parallel agents in worktrees for genuinely independent
  units; serial when small, cheap, or tightly coupled.
- A service MAY ship `services/<name>/CLAUDE.md` holding ONLY its local
  commands and local rules, plus a pointer to its README (which owns the
  contract). Nested CLAUDE.md files concatenate with the root; keep them thin.

## Project conventions

TODO(bootstrap): naming patterns and file conventions for this project
(component casing, test file naming, import style). Layout is fixed by the
services-first contract above.

## Tech choice: search before building

Simplest vanilla tech wins. Before writing any utility or library, search in
three layers, in order:

1. **Tried-and-true.** Stdlib or standard pattern. Wins most of the time.
2. **New-and-popular.** Evaluate by stars, commit recency, issue
   responsiveness, real user feedback. Recommend one option with reasoning and
   name the rejected runners-up.
3. **First-principles.** Document WHY before writing custom code.

Prefer dependencies that ship their own agent skills: a dep carrying SKILL.md
teaches the agent its API for free (same token logic as code-intel plugins).
Check new deps for a `skills/` dir.

## LLM access: local Claude Code, not hosted APIs

Software we build never calls a hosted LLM API unless explicitly instructed.
Route calls through local Claude Code. If the project has no LLM service yet,
build one: a self-contained service that shells out to local Claude Code, with
its own contract, tests, and evals.

## Programming principles

- SOLID: single responsibility; open/closed; Liskov substitution; interface
  segregation; dependency inversion.
- DRY: reusable components, base services for common patterns, centralized
  utilities.
- Separation of concerns by layer: presentation, business logic, transport,
  state.
- Strict typing everywhere it's available; shared interfaces at boundaries.
- Consistent patterns: standardized responses, common error handling, unified
  naming.
- Comments state what the code can't: constraints, invariants, why. Match the
  surrounding code's comment density.
