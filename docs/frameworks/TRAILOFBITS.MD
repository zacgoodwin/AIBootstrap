# Trail of Bits skills

All [trailofbits/skills](https://github.com/trailofbits/skills) skills, sorted by the same sections as the other files in docs/frameworks/. Upstream commit 311a784 (2026-08-24) checked 2026-08-24. 42 plugins: 80 skills, 8 commands, 29 agents, 4 hook sets, 2 MCP server configs. Agent roster detail: docs/agents/TRAILOFBITS.MD.

# Product Process

## Starting Direction / Human Helper

| Execution | What it does |
|---|---|
| `/let-fate-decide` | Draws the 12 Houses of the Zodiac Tarot spread to inject entropy into planning when prompts are vague or casually delegated; interprets the spread to guide next steps |

## Business

| Execution | What it does |
|---|---|
| `/interpreting-culture-index` | Interprets Culture Index surveys and behavioral profiles: individual interpretation, team composition (gas/brake/glue), burnout detection, comparison, hiring |

# Development Process

## Technical Stack Specific

| Execution | What it does |
|---|---|
| `/modern-cpp` | Guides C++ code toward modern idioms (C++20/23/26): smart pointers over raw, concepts over SFINAE, std::print over printf, for security-critical C++ |
| `/modern-python` | Configures Python projects with modern tooling (uv, ruff, ty); use when creating projects, writing standalone scripts, or migrating from pip/Poetry/mypy/black |
| `/writing-lean-proofs` | Writes and reviews structured Lean 4 proofs and designs Lean libraries following Mathlib conventions |

# Dev Tooling

| Execution | What it does |
|---|---|
| `/devcontainer-setup` | Creates devcontainers with Claude Code, language-specific tooling (Python/Node/Rust/Go), and persistent volumes for isolated or sandboxed development |
| `/gh-cli` | Enforces authenticated gh CLI workflows over unauthenticated curl/WebFetch patterns for GitHub URLs, API access, PRs, and issues |
| `/git-cleanup` | Safely analyzes and cleans up local git branches and worktrees by categorizing them as merged, squash-merged, superseded, or active work |

## Requirements

| Execution | What it does |
|---|---|
| `/spec-to-code-compliance` | Checks code against the documentation that specifies it: which requirements hold, which the code contradicts, which are absent, and what the code does that no document mentions |

## Testing

| Execution | What it does |
|---|---|
| `/mutation-testing` | Configures mewt or muton mutation testing campaigns: scopes targets, tunes timeouts, optimizes long-running runs |
| `/property-based-testing` | Writes, reviews, and debugs property-based tests: Hypothesis, fast-check, proptest, jqwik, rapid, and Echidna/Medusa for Solidity invariants |
| `/address-sanitizer` | AddressSanitizer detects memory errors during fuzzing |
| `/aflpp` | AFL++ fuzzing: a fork of AFL with better performance and advanced features |
| `/atheris` | Atheris coverage-guided Python fuzzer based on libFuzzer |
| `/cargo-fuzz` | cargo-fuzz, the de facto fuzzing tool for Rust projects using Cargo |
| `/constant-time-testing` | Constant-time testing detects timing side channels in cryptographic code |
| `/coverage-analysis` | Coverage analysis measures code exercised during fuzzing |
| `/fuzzing-dictionary` | Fuzzing dictionaries guide fuzzers with domain-specific tokens |
| `/fuzzing-obstacles` | Techniques for patching code to overcome fuzzing obstacles |
| `/harness-writing` | Techniques for writing effective fuzzing harnesses across languages |
| `/libafl` | LibAFL modular fuzzing library for building custom fuzzers |
| `/libfuzzer` | Coverage-guided fuzzer built into LLVM for C/C++ projects |
| `/ossfuzz` | OSS-Fuzz free continuous fuzzing for open source projects |
| `/ruzzy` | Ruzzy coverage-guided Ruby fuzzer by Trail of Bits |
| `/wycheproof` | Wycheproof test vectors for validating cryptographic implementations |
| `/genotoxic` | Graph-informed mutation testing triage: uses survived mutants, unnecessary test statements, and call graph data to find false positives and missing coverage |
| `/vector-forge` | Mutation-driven test vector generation: runs mutation testing on crypto implementations, then generates new vectors exercising uncovered code paths |

## Code Review

| Execution | What it does |
|---|---|
| `/second-opinion` | Runs external LLM code reviews (OpenAI Codex or Google Gemini CLI) on uncommitted changes, branch diffs, or specific commits |
| `/github-triage` | Triages a repository's open GitHub issues and PRs via gh CLI; optionally reviews and incrementally merges ready PRs, spawning review subagents |

## Deploying

| Execution | What it does |
|---|---|
| `/open-sourcing` | Prepares a repository for public release: open-source readiness checks, license choice, release automation |

## Documentation

| Execution | What it does |
|---|---|
| `/diagramming-code` | Generates Mermaid diagrams (call graphs and more) from Trailmark code graphs |

## Security

| Execution | What it does |
|---|---|
| `/agentic-actions-auditor` | Audits GitHub Actions workflows for security vulnerabilities in AI agent integrations (Claude Code Action, Gemini CLI, Codex); detects attacker-controlled input reaching agents |
| `/audit-context-building` | Understands a codebase before bug hunting: what each function assumes, guarantees, and depends on; use when starting an audit, threat model, or architecture review |
| `/algorand-vulnerability-scanner` | Scans Algorand smart contracts (TEAL/PyTeal) for 11 common vulnerabilities: rekeying, unchecked fees, missing field validations, access control |
| `/audit-prep-assistant` | Prepares codebases for security review using Trail of Bits' checklist: review goals, static analysis, test coverage, dead code removal, documentation |
| `/cairo-vulnerability-scanner` | Scans Cairo/StarkNet contracts for 6 critical vulnerabilities: felt252 overflow, L1-L2 messaging, address conversion, signature replay |
| `/code-maturity-assessor` | Systematic code maturity assessment using Trail of Bits' 9-category framework (arithmetic safety, access controls, complexity, decentralization, MEV, ...) |
| `/cosmos-vulnerability-scanner` | Scans Cosmos SDK modules and CosmWasm contracts for consensus-critical vulnerabilities: chain halts, fund loss, state divergence (25 core + 16 IBC + 10 EVM + 3 CosmWasm patterns) |
| `/guidelines-advisor` | Smart contract development advisor based on Trail of Bits' best practices: architecture review, upgradeability checks, pitfall identification |
| `/secure-workflow-guide` | Guides through Trail of Bits' 5-step secure development workflow: Slither scans, upgradeability/ERC conformance checks, security diagrams, property documentation |
| `/solana-vulnerability-scanner` | Scans Solana/Anchor programs for 6 critical vulnerabilities: arbitrary CPI, improper PDA validation, missing signer/ownership checks, sysvar spoofing |
| `/substrate-vulnerability-scanner` | Scans Substrate/Polkadot pallets for 7 critical vulnerabilities: arithmetic overflow, panic DoS, incorrect weights, bad origin checks |
| `/token-integration-analyzer` | Analyzes token implementations for ERC20/ERC721 conformity, 20+ weird token patterns, and contract composition, per Trail of Bits' token integration checklist |
| `/ton-vulnerability-scanner` | Scans TON (FunC) smart contracts for integer-as-boolean misuse, fake Jetton contracts, and forward TON without gas checks |
| `/burpsuite-project-parser` | Searches and explores Burp Suite project files (.burp) from the CLI: regex over response headers/bodies, extract findings, dump proxy history and site map |
| `/burp-search` | Command: searches Burp Suite project files for security analysis |
| `/c-review` | Comprehensive C/C++ security review for memory corruption, integer overflows, race conditions, and platform-specific vulnerabilities |
| `/constant-time-analysis` | Detects timing side-channel vulnerabilities in cryptographic code (C, C++, Go, Rust): division on secrets, secret-dependent branches |
| `/ct-check` | Command: detects timing side-channels in cryptographic code |
| `/differential-review` | Performs security-focused differential review of code changes (PRs, commits, diffs) |
| `/diff-review` | Command: runs the security-focused differential review |
| `/dimensional-analysis` | Annotates codebases with dimensional analysis comments (units, dimensions, decimal scaling); finds unit-mismatch vulnerabilities in DeFi protocols |
| `/dwarf-expert` | Analyzes DWARF debug information in compiled binaries: .debug_* sections, DIE trees, dwarfdump/llvm-dwarfdump verification, DWARF standards questions |
| `/entry-point-analyzer` | Identifies state-changing entry points in smart contract codebases, categorized by access level (public, admin, role-restricted, contract-only) |
| `/entry-points` | Command: identifies state-changing entry points in smart contracts |
| `/firebase-apk-scanner` | Scans Android APKs for Firebase misconfigurations: open databases, storage buckets, auth issues, exposed cloud functions |
| `/scan-apk` | Command: scans Android APKs for Firebase security misconfigurations |
| `/fp-check` | Systematically verifies suspected security bugs to eliminate false positives, producing TRUE/FALSE POSITIVE verdicts with documented evidence |
| `/audit` | Command: audits a file, directory, or repo for insecure defaults: fallback secrets, default credentials, fail-open switches, weak crypto, permissive access, debug leakage |
| `/rust-review` | Comprehensive Rust security review: safe/unsafe boundaries, memory safety in unsafe blocks, concurrency hazards, panic DoS, FFI, async runtime mistakes |
| `/semgrep-rule-creator` | Creates custom Semgrep rules for detecting security vulnerabilities, bug patterns, and code patterns |
| `/semgrep-rule` | Command: creates Semgrep rules with test-first methodology |
| `/semgrep-rule-variant-creator` | Creates language variants of existing Semgrep rules, producing independent rule+test directories per target language |
| `/sharp-edges` | Identifies error-prone APIs, dangerous configurations, and footgun designs that enable security mistakes; evaluates secure-by-default posture |
| `/codeql` | Scans a codebase for security vulnerabilities using CodeQL's interprocedural data flow |
| `/sarif-parsing` | Parses and processes SARIF files from static analysis tools like CodeQL and Semgrep |
| `/semgrep` | Runs a Semgrep security scan over a codebase: detects languages, selects rulesets |
| `/supply-chain-risk-auditor` | Audits dependencies for supply-chain risk: version-matched advisories across the lockfile tree, abandoned upstreams, publisher concentration, install-time scripts |
| `/trailmark` | Builds and queries multi-language source and binary code graphs for security analysis: blast radius, taint, privilege boundaries, entry points |
| `/trailmark-structural` | Runs full Trailmark structural analysis: hotspots, taint, blast radius, privilege boundaries, attack surface |
| `/trailmark-summary` | Runs a Trailmark summary analysis: auto-detected languages, entry point count, dependency list |
| `/trailmark-finding-triage` | Graph-assisted triage of a single finding, SARIF result, or suspicious function using reachability, taint, privilege-boundary, and blast-radius data |
| `/trailmark-review-gate` | Trailmark structural review gate over a branch/PR/diff: detects new entrypoints, new tainted paths, removed validation or authorization, privilege drift |
| `/trailmark-variant-neighborhood` | Expands one confirmed vulnerability into a graph neighborhood of variant candidates: sibling functions, shared callers/callees, common sinks |
| `/audit-augmentation` | Augments Trailmark code graphs with external audit findings from SARIF static analysis |
| `/graph-evolution` | Compares Trailmark code graphs at two source snapshots (git commits) to surface structural change |
| `/crypto-protocol-diagram` | Extracts protocol message flow from code, RFCs, papers, or ProVerif/Tamarin models and generates Mermaid sequence diagrams with cryptographic annotations |
| `/mermaid-to-proverif` | Translates Mermaid sequence diagrams of cryptographic protocols into ProVerif formal verification models (.pv) |
| `/variant-analysis` | Hunts for other instances of a bug already found: the variants of one root cause across a codebase |
| `/vulnerability-triage-brocards` | Triage a vulnerability using brocards (concise triage maxims) |
| `/yara-rule-authoring` | Guides authoring of high-quality YARA-X detection rules for malware identification |
| `/zeroize-audit` | Detects missing zeroization of sensitive data and zeroization removed by compiler optimizations, with assembly-level and control-flow verification (C/C++/Rust) |

# Scaffolding and Harness

## Harness Development

| Execution | What it does |
|---|---|
| `/skill-improver` | Iteratively reviews and fixes Claude Code skill quality issues until they meet standards, via automated fix-review cycles |
| `/cancel-skill-improver` | Command: stops the active skill improvement loop while preserving all changes made to skill files |
| `/testing-handbook-generator` | Meta-skill that analyzes the Trail of Bits Testing Handbook (appsec.guide) to generate new skills |

## Harness Setup

| Execution | What it does |
|---|---|
| `/chrome-mcp-troubleshooting` | Diagnoses and fixes Claude in Chrome MCP extension connectivity issues when mcp__claude-in-chrome__* tools fail or behave erratically |

## Token Savings

| Execution | What it does |
|---|---|
| `/slicing-code-context` | Selects bounded, graph-informed source slices with Trailmark and delegates focused analysis or patch work to a smaller subagent |

## Context Setting / Memory

| Execution | What it does |
|---|---|
| `/goal-prompt` | Drafts copy-paste-ready /goal commands for goal mode in Claude Code and Codex: create, rewrite, compress, or clean up goal prompts |

# Hooks

| Name | What it does |
|---|---|
| fp-check hooks | Stop/SubagentStop prompt hooks that enforce fp-check verification completeness: block premature verdicts and incomplete agent output |
| gh-cli hooks | Intercepts GitHub URL fetches and curl/wget, suggests gh CLI; PATH shims block gh anti-patterns; cleans up cloned repos on session end |
| modern-python hooks | Intercepts legacy Python/pip commands via PATH shims and suggests uv alternatives |
| skill-improver hooks | Stop hook driving the iterative skill improvement loop |

# Agents

| Name | What it does |
|---|---|
| audit-context-building: function-analyzer | Analyzes one function in depth for audit context (invariants, assumptions, callee guarantees); writes prose to disk, returns a compact record |
| c-review: c-review-worker | Runs one assigned c-review cluster task and writes finding files; spawned by the c-review orchestrator |
| differential-review: adversarial-modeler | Models attacker perspectives and builds exploit scenarios for HIGH RISK code changes |
| dimensional-analysis: arithmetic-scanner | Scans repo for files with dimensional arithmetic to scope discovery |
| dimensional-analysis: dimension-discoverer | Discovers dimensional vocabulary from naming conventions and protocol patterns |
| dimensional-analysis: dimension-annotator | Adds dimensional annotations to source at anchor points |
| dimensional-analysis: dimension-propagator | Propagates annotations through arithmetic and call chains, reporting mismatches |
| dimensional-analysis: dimension-validator | Validates dimensional consistency and detects dimensional bugs in annotated code |
| fp-check: data-flow-analyzer | Maps data flow source-to-sink: trust boundaries, API contracts, environment protections |
| fp-check: exploitability-verifier | Verifies exploitability: attacker control, mathematical bounds, race feasibility |
| fp-check: poc-builder | Creates proof-of-concept exploits plus negative PoCs showing exploit preconditions |
| let-fate-decide: draw | Draws the Zodiac Tarot spread and returns a concise structured reading |
| rust-review: rust-review-worker | Runs one assigned rust-review cluster task and writes finding files |
| rust-review: rust-review-dedup-judge | Merges duplicate rust-review findings deterministically, then LLM dedup passes |
| rust-review: rust-review-fp-judge | Second-stage judge for rust-review: fp_verdict then severity for survivors |
| sharp-edges: sharp-edges-analyzer | Evaluates APIs, configurations, and library interfaces for misuse resistance and footgun potential |
| spec-to-code-compliance: spec-compliance-checker | Checks one documented requirement against the implementing code, returning a verdict with evidencing lines |
| trailmark: code-slice-worker | Analyzes one bounded Trailmark source packet and returns source-cited JSON without repo access |
| zeroize-audit: 0-preflight | Preflight validation, config merging, TU enumeration, work directory setup |
| zeroize-audit: 1-mcp-resolver | Resolves symbols, types, and cross-file references via Serena MCP before source analysis |
| zeroize-audit: 2-source-analyzer | Identifies sensitive objects, detects and validates wipe calls, data-flow/heap analysis |
| zeroize-audit: 2b-rust-source-analyzer | Source-level zeroization analysis for Rust crates via rustdoc JSON and dangerous-API scanning |
| zeroize-audit: 3-tu-compiler-analyzer | Per-TU compiler-level analysis (IR diff, assembly, semantic IR, CFG); parallel across TUs |
| zeroize-audit: 3b-rust-compiler-analyzer | Crate-level MIR and LLVM IR analysis for Rust; detects dead-store elimination of wipes |
| zeroize-audit: 4-report-assembler | Collects findings, applies supersessions and confidence gates, produces the markdown+JSON report |
| zeroize-audit: 5-poc-generator | Crafts bespoke PoC programs demonstrating findings are exploitable |
| zeroize-audit: 5b-poc-validator | Compiles and runs all PoCs, producing validation results |
| zeroize-audit: 5c-poc-verifier | Verifies each PoC actually proves the vulnerability it claims |
| zeroize-audit: 6-test-generator | Generates runtime validation test harnesses (C tests, MSAN, Valgrind) for confirmed findings |

# Other offerings

| Name | What it does |
|---|---|
| second-opinion MCP config | Registers the OpenAI Codex CLI as an MCP server (`codex mcp-server`) for external reviews |
| zeroize-audit MCP config | Registers Serena (language-server-backed semantic analysis over clangd) as an MCP server for symbol resolution |
| Plugin marketplace | `.claude-plugin/marketplace.json`: install any plugin via `/plugin marketplace add trailofbits/skills` |
| Bundled CLI tooling | Per-plugin deterministic tools: `ct_analyzer` Python package (constant-time-analysis), `scanner.sh` (firebase-apk-scanner), SARIF/run-plan scripts (c-review), workflow scripts (audit-context-building, variant-analysis, insecure-defaults) |
