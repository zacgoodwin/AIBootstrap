# Trail of Bits agents

All [trailofbits/skills](https://github.com/trailofbits/skills) agents, sorted
by the same sections as [IN-REPO-AGENTS.md](IN-REPO-AGENTS.md). 29 agents. Upstream
311a784 (2026-08-24) checked 2026-08-24. Skills for the same pack:
docs/frameworks/TRAILOFBITS.MD.

**Changed since 293fb74:** c-review dropped `c-review-dedup-judge` and
`c-review-fp-judge`. The plugin was class-partitioned (one agent per bug class)
and is now location-partitioned; upstream measured that an undirected fan-out
matched class-partitioning on recall at ~40% of the cost. The surviving worker
absorbed the dedup pass. `rust-review` still runs the three-agent shape.

Almost every agent is a stage in a security pipeline rather than a standalone
persona: the parent skill spawns the cluster, fans work out, and judges the
results. Each row names its owning plugin first. Numbered zeroize-audit agents
run in sequence.

Adds one section the shared taxonomy lacks: **Security Audit**, since
"Code Review" would flatten twenty-two specialized audit stages into one bucket.

## Plan & Architecture

| Execution | What it does |
|---|---|
| Agent subagent_type=`draw` | let-fate-decide: draws the Zodiac Tarot spread and returns a concise structured reading, injecting entropy into planning when prompts are vague or casually delegated. |

## Code Review

Language-specific review clusters. rust-review runs worker, then dedup judge,
then false-positive judge; c-review now runs one worker per producing task.

| Execution | What it does |
|---|---|
| Agent subagent_type=`c-review-worker` | c-review: runs one c-review producing task (a location slice, the class sweep, the invariant audit, or the dedup pass), reading source and writing exactly one part file. Spawned by the c-review workflow only; no shell. |
| Agent subagent_type=`rust-review-worker` | rust-review: runs one assigned rust-review cluster task and writes finding files. |
| Agent subagent_type=`rust-review-dedup-judge` | rust-review: merges duplicate findings deterministically, then runs LLM dedup passes. |
| Agent subagent_type=`rust-review-fp-judge` | rust-review: second-stage judge deciding fp_verdict, then severity for survivors. |
| Agent subagent_type=`sharp-edges-analyzer` | sharp-edges: evaluates APIs, configurations, and library interfaces for misuse resistance and footgun potential. |
| Agent subagent_type=`spec-compliance-checker` | spec-to-code-compliance: checks one documented requirement against the implementing code, returning a verdict with evidencing lines. |

## Security Audit

### Context and triage

| Execution | What it does |
|---|---|
| Agent subagent_type=`function-analyzer` | audit-context-building: analyzes one function in depth for audit context (invariants, assumptions, callee guarantees); writes prose to disk, returns a compact record. |
| Agent subagent_type=`adversarial-modeler` | differential-review: models attacker perspectives and builds exploit scenarios for HIGH RISK code changes. |
| Agent subagent_type=`code-slice-worker` | trailmark: analyzes one bounded Trailmark source packet and returns source-cited JSON without repo access. |

### False-positive elimination

| Execution | What it does |
|---|---|
| Agent subagent_type=`data-flow-analyzer` | fp-check: maps data flow source-to-sink, covering trust boundaries, API contracts, and environment protections. |
| Agent subagent_type=`exploitability-verifier` | fp-check: verifies exploitability via attacker control, mathematical bounds, and race feasibility. |
| Agent subagent_type=`poc-builder` | fp-check: creates proof-of-concept exploits plus negative PoCs showing exploit preconditions. |

### Dimensional analysis

Finds unit-mismatch vulnerabilities; run in listed order.

| Execution | What it does |
|---|---|
| Agent subagent_type=`arithmetic-scanner` | dimensional-analysis: scans the repo for files with dimensional arithmetic to scope discovery. |
| Agent subagent_type=`dimension-discoverer` | dimensional-analysis: discovers dimensional vocabulary from naming conventions and protocol patterns. |
| Agent subagent_type=`dimension-annotator` | dimensional-analysis: adds dimensional annotations to source at anchor points. |
| Agent subagent_type=`dimension-propagator` | dimensional-analysis: propagates annotations through arithmetic and call chains, reporting mismatches. |
| Agent subagent_type=`dimension-validator` | dimensional-analysis: validates dimensional consistency and detects dimensional bugs in annotated code. |

### Zeroization audit

Detects sensitive data never wiped, or wipes removed by compiler
optimization. Eleven numbered stages, run in order.

| Execution | What it does |
|---|---|
| Agent subagent_type=`0-preflight` | zeroize-audit: preflight validation, config merging, translation-unit enumeration, work directory setup. |
| Agent subagent_type=`1-mcp-resolver` | zeroize-audit: resolves symbols, types, and cross-file references via Serena MCP before source analysis. |
| Agent subagent_type=`2-source-analyzer` | zeroize-audit: identifies sensitive objects, detects and validates wipe calls, performs data-flow and heap analysis. |
| Agent subagent_type=`2b-rust-source-analyzer` | zeroize-audit: source-level zeroization analysis for Rust crates via rustdoc JSON and dangerous-API scanning. |
| Agent subagent_type=`3-tu-compiler-analyzer` | zeroize-audit: per-translation-unit compiler-level analysis (IR diff, assembly, semantic IR, CFG); runs parallel across TUs. |
| Agent subagent_type=`3b-rust-compiler-analyzer` | zeroize-audit: crate-level MIR and LLVM IR analysis for Rust; detects dead-store elimination of wipes. |
| Agent subagent_type=`4-report-assembler` | zeroize-audit: collects findings, applies supersessions and confidence gates, produces the markdown and JSON report. |
| Agent subagent_type=`5-poc-generator` | zeroize-audit: crafts bespoke PoC programs demonstrating findings are exploitable. |
| Agent subagent_type=`5b-poc-validator` | zeroize-audit: compiles and runs all PoCs, producing validation results. |
| Agent subagent_type=`5c-poc-verifier` | zeroize-audit: verifies each PoC actually proves the vulnerability it claims. |
| Agent subagent_type=`6-test-generator` | zeroize-audit: generates runtime validation test harnesses (C tests, MSAN, Valgrind) for confirmed findings. |
