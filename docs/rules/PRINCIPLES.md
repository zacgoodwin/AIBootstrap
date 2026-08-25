<!-- Mapped from the global CLAUDE.md, 2026-08-23 -->

# Principles

Precedence when rules conflict: Safety first (docs/rules/SAFETY.md), then How
to work (scope: finish everything asked, with tests and docs), then the lazy
ladder (style: the smallest correct diff that covers that scope; the ladder
below). The ladder limits code volume, never scope.

## How to work

Deliver what was asked, at the scope intended. Make routine judgment calls
yourself, and check in only when different readings of the request would lead
to materially different work. If the request seems mistaken or a better
approach exists, say so in a sentence and continue with the task as asked
rather than quietly narrowing, widening, or transforming it. Finish the whole
task, and stop short of actions that are clearly beyond what was asked.

Tests, evals, and docs are in scope by default (docs/rules/TESTING.md). When
the user asks for something, the answer is the finished product, not a plan to
build it.

You can outsource the typing. You cannot outsource the understanding. Before
calling anything DONE, be able to explain why the code is correct and exactly
where it would break. Tests passing is not understanding.

## Latent vs deterministic

Picking the wrong space is the most common way agents produce bad output.

- **Latent (LLM):** judgment, pattern matching, creativity, ambiguous inputs,
  prose.
- **Deterministic (code):** same input must produce the same correct answer by
  definition. Reproducible, testable, free per run.

Arithmetic, date/timezone math, file lookups, CSV parsing, JSON transforms,
regex matches, hashes, and structured API calls never happen inside a model
reply. Stop and write the script (it lives in tools/). If a task is both,
split it: the deterministic piece becomes a script + tests, the latent piece
becomes a prompt + eval. The script then constrains the model forever after,
and the old failure path becomes unreachable.

## Tie every change to a measurable outcome

- Name the outcome before building: the metric, workflow step, or user-visible
  behavior that changes. "It works" is not an outcome.
- Can't state what gets measurably better and how you'll see it? Say so in one
  sentence and propose the outcome you think it should hit, then continue.
  Confusion Protocol stop only when the answer would lead to materially
  different work.
- Wire in the trace: a metric, a log line, an eval score. Compute that
  produces no measurable result is theater.

## The lazy-dev ladder

Lazy means efficient, not careless. Stop at the first rung that holds:

1. Does it need to exist at all? (YAGNI)
2. Already in this codebase? Reuse it.
3. Stdlib does it? Use it.
4. Native platform feature covers it? Use it.
5. Already-installed dependency solves it? Use it.
6. Can it be one line? One line.
7. Only then: the minimum code that works.

Understand the problem and trace the real flow first, then climb. Bug fix =
root cause in the shared function, not a per-caller patch. Mark deliberate
corner-cuts with a `ponytail:` comment naming the ceiling and upgrade path.
Never lazy about: understanding the problem, input validation at trust
boundaries, error handling that prevents data loss, security, accessibility,
anything explicitly requested.

## Skills

- Request matches an installed skill? Invoke it via the Skill tool. Don't
  re-implement what a skill already does well.
- Skillify repeated success, not just failure. Second time running the same
  manual flow by hand, codify it: script, skill, or workflow. Twice by hand
  means the third time is a command.
- Pack-specific bullets (browser sessions, codebase graphs, ...) are added
  here at bootstrap time for the packs actually installed (docs/SETUP.md
  step 7 carries the canonical text).

## Grounding

<investigate_before_answering>
Never speculate about code you have not opened. If the user references a specific file,
you MUST read the file before answering. Make sure to investigate and read relevant
files BEFORE answering questions about the codebase. Never make any claims about code
before investigating unless you are certain of the correct answer.
</investigate_before_answering>
