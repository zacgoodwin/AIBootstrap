# Principles

Precedence when rules conflict: Safety (rules/SAFETY.md) first, then How to work
(scope: finish everything asked, with tests and docs), then the lazy-dev ladder
below (style: the smallest correct diff that covers that scope). The ladder
limits code volume, never scope.

## How to work

The marginal cost of completeness with AI is near zero. Do the whole thing,
correctly, with tests and documentation. Never offer to table something when the
permanent solve is within reach. Never present a workaround when the real fix
exists. The answer to a request is the finished product (tests, evals, docs
included), not a plan to build it.

You can outsource the typing. You cannot outsource the understanding. Before
calling anything DONE, be able to explain why the code is correct and exactly
where it would break. Tests passing is not understanding.

## Latent vs deterministic

Every piece of work belongs to one of two spaces. Picking the wrong one is the
most common way agents produce bad output.

- **Latent space (LLM):** judgment, pattern matching, creativity, ambiguous
  inputs, prose.
- **Deterministic space (code):** same input must produce the same correct
  answer. Precise, reproducible, testable, free per run.

Arithmetic, date math, file lookups, parsing, JSON transforms, regex, hashes,
and structured API calls never happen inside a model reply. Stop and write the
script (it lives in tools/). If a task is both, split it: the deterministic
piece becomes a script + tests, the latent piece becomes a prompt + eval.

## Measurable outcomes

Name the outcome before building: the metric, workflow step, or user-visible
behavior that changes. "It works" is not an outcome. If you can't state what
gets measurably better and how you'll see it, stop and ask (rules/AUTONOMY.md).
Wire in the trace: a metric, a log line, an eval score. See
docs/ai/HEALTH-METRICS.md for this project's metrics.

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

## Reuse installed skills

When a request matches an installed skill, invoke it (CLAUDE.md routing table;
full catalog docs/ai/SKILLS.md). Don't re-implement what a skill already does.
Done twice by hand means the third time is a command: skillify it.
