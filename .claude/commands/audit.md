---
description: Audit docs for factual errors and contradictions; every finding is mechanically verified before it reaches the report.
argument-hint: "[path or topic, e.g. docs/rules or 'skill counts'] (default: all tracked docs)"
allowed-tools: Bash, Read, Grep, Glob, Write, Agent
---

# /audit

Scope: **$ARGUMENTS** (empty means every tracked Markdown file.)

A documentation audit is worthless if you have to fact-check it. This command
makes the report a build artifact: a subagent may only *propose* a finding, and
a proposal that does not reproduce against the filesystem is discarded before a
human reads it.

The rule this whole command exists to enforce: **no finding reaches the report
unless `verify-claims` reproduced its evidence.** You do not get to argue a
claim through. If it cannot be mechanically shown, it is discarded and listed
as discarded.

---

## Phase 0 — mechanical baseline (no model judgement)

```
RUN=.audit/$(date +%Y%m%d-%H%M%S)
mkdir -p "$RUN"
node tools/docs-check.mjs --json > "$RUN/mechanical.json"
```

These findings (dead links, dead anchors, count drift, roster drift, cross-file
disagreement) are already measured off the filesystem. They are `MECHANICAL`,
they enter the report as-is, and **you do not re-derive them by reading.** If a
number is wrong, `docs-check` already knows; do not spend an agent on it.

Read `$RUN/mechanical.json` so the fan-out does not re-report what it holds.

## Phase 1 — fan out for the latent half

Split the scope into 3-5 slices (by directory, or by claim family: setup
instructions, skill/agent catalogs, process docs, rules). Dispatch one subagent
per slice **in parallel, in a single message**.

Each agent hunts what a script cannot: guidance that contradicts other
guidance, instructions that cannot be followed as written, a doc describing a
workflow the repo no longer has, a claim about the repo that is simply false.

Give every agent this contract verbatim:

> Write `.audit/<run>/claims-<slice>.json` as your FIRST action, containing
> `{"slice":"<slice>","claims":[]}`. Append each claim to that file as you find
> it. Never hold findings in context to write at the end — if you are
> interrupted, whatever you already wrote must survive.
>
> Emit **claims, not prose.** Every claim is an object:
>
> ```json
> {
>   "id": "slice-01",
>   "finding": "one sentence a human can act on",
>   "file": "docs/rules/TESTING.md",
>   "line": 42,
>   "severity": "P1|P2|P3",
>   "class": "SEMANTIC",
>   "evidence": [ ... ]
> }
> ```
>
> `evidence` is a non-empty array. Each item is one of:
>
> - `{"type":"file_exists","path":"docs/x.md"}` — add `"absent":true` to
>   assert something is missing.
> - `{"type":"line_content","file":"docs/x.md","line":42,"contains":"text"}`
>   — or `"matches":"regex"`. Omit `line` to assert only that the text is
>   somewhere in the file. **Cite a line only if you read that line.**
> - `{"type":"count","kind":"files|dirs|lines|matches","path":"docs/rules",
>   "pattern":"optional regex","expected":9,"op":"eq|gte|lte"}`
> - `{"type":"cross_reference","from":"README.md","to":"docs/SETUP.md",
>   "anchor":"optional-heading"}`
>
> Rules, all of them hard:
> 1. Never write a count you did not measure. Express it as a `count` claim and
>    let the verifier measure it.
> 2. Never cite a line number you did not read. A drifted line number fails
>    verification and sinks the whole claim.
> 3. A claim whose evidence you cannot express in these four types is not
>    admissible. Drop it rather than dressing it up.
> 4. One weak evidence item sinks the claim. Attach only what reproduces.
> 5. Do not report anything already in `mechanical.json`.
>
> Return only the path to your claims file.

## Phase 2 — verify

```
jq -s '{claims: (map(.claims) | add)}' "$RUN"/claims-*.json > "$RUN/claims.json"
scripts/verify-claims.sh "$RUN/claims.json" --json > "$RUN/verdict.json"
```

`verify-claims` exits 1 when anything was discarded. **That is the expected
outcome, not a failure of the run** — it is the filter doing its job. Do not
retry it, do not loosen a claim to make it pass, and never edit a claim's
evidence to fit what was measured. The measurement is the truth.

## Phase 3 — report

Write the report to `$RUN/report.md`, in this order:

1. **Verified findings** — `mechanical.json` findings plus `verdict.json`
   `verified[]`, each with the evidence line that proved it, sorted by
   severity. Nothing else may appear here.
2. **Discarded** — every entry in `verdict.json` `discarded[]`, with the claim
   as proposed and the `why` from the verifier. This section is mandatory and
   never summarised away. It is how the reader sees what the agents got wrong.
3. **Coverage** — files scanned, claims proposed, verified, discarded.

Then report to the user: the verified count, the discard count, and the path to
`$RUN/report.md`.

**Do not fix anything.** An audit reports. Fixing is a separate, approved step
(`node tools/docs-check.mjs --fix` handles the mechanical counts and moved
links; semantic findings are for a human to route).
