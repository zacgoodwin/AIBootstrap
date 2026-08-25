# Ruflo

Skills from https://github.com/ruvnet/ruflo — an agent meta-harness shipped as 35+ Claude Code plugins. Sorted into the same categories as Z-TOP-SKILLS.md. Domain-vertical plugins (IoT, trading, market data) get their own section since the main taxonomy has no home for them. Upstream not pinned in tools/sources.json; `/skills-update` records the commit on its first full catalog pass.

# Product Process
## Pack Setup
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/discover-plugins` | ruvnet/ruflo | Finding available plugins. |
| `/init-project` | ruvnet/ruflo | Initializing new projects. |
| `/ruflo-doctor` | ruvnet/ruflo | Running system health checks. |

## PRD
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/sparc-spec` | ruvnet/ruflo | Creating detailed specifications (SPARC methodology, spec phase). |

## Research
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/deep-research` | ruvnet/ruflo | Conducting thorough investigations. |
| `/dossier-collect` | ruvnet/ruflo | Assembling information profiles. |
| `/research-synthesize` | ruvnet/ruflo | Consolidating findings. |

## Marketing
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/pod-sales` | ruvnet/ruflo | Sales-focused agent bundle. |

## Business
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/horizon-track` | ruvnet/ruflo | Monitoring long-term objectives. |

# Development Process
## Loop
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/autopilot-loop` | ruvnet/ruflo | Executing autonomous task cycles. |
| `/autopilot-predict` | ruvnet/ruflo | Forecasting via learned patterns. |
| `/cron-schedule` | ruvnet/ruflo | Setting up scheduled tasks. |
| `/loop-worker` | ruvnet/ruflo | Deploying recurring background jobs. |
| `/monitor-stream` | ruvnet/ruflo | Observing live agent events. |
| `/swarm-init` | ruvnet/ruflo | Launching multi-agent collectives. |
| `/workflow-create` | ruvnet/ruflo | Building new orchestrations. |
| `/workflow-run` | ruvnet/ruflo | Executing workflow instances. |
| `/gaia-architecture-comparison` | ruvnet/ruflo | Contrasting workflow designs. |
| `/gaia-debugging` | ruvnet/ruflo | Troubleshooting workflow execution. |
| `/gaia-submission` | ruvnet/ruflo | Submitting benchmark results. |

## Technical Stack Specific
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/migrate-create` | ruvnet/ruflo | Generating database migration scripts. |
| `/migrate-validate` | ruvnet/ruflo | Verifying migration integrity. |

## Domain Specific
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/iot-anomalies` | ruvnet/ruflo | Detecting device irregularities. |
| `/iot-firmware` | ruvnet/ruflo | Managing firmware deployments. |
| `/iot-fleet` | ruvnet/ruflo | Supervising device collections. |
| `/iot-register` | ruvnet/ruflo | Enrolling new devices. |
| `/iot-witness-verify` | ruvnet/ruflo | Validating IoT signatures. |
| `/market-ingest` | ruvnet/ruflo | Importing OHLCV market data. |
| `/market-pattern` | ruvnet/ruflo | Matching candlestick formations. |
| `/trader-backtest` | ruvnet/ruflo | Simulating strategy performance. |
| `/trader-cloud-backtest` | ruvnet/ruflo | Running distributed backtests. |
| `/trader-explain` | ruvnet/ruflo | Interpreting trade logic. |
| `/trader-portfolio` | ruvnet/ruflo | Optimizing asset allocation. |
| `/trader-portfolio-cg` | ruvnet/ruflo | Conjugate gradient portfolio optimization. |
| `/trader-regime` | ruvnet/ruflo | Detecting market regime shifts. |
| `/trader-risk` | ruvnet/ruflo | Assessing portfolio exposure. |
| `/trader-signal` | ruvnet/ruflo | Generating trading indicators. |
| `/trader-train` | ruvnet/ruflo | Training trading models. |

# Code Architecture
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/adr-create` | ruvnet/ruflo | Creating architecture decision records. |
| `/adr-index` | ruvnet/ruflo | Indexing ADR documents. |
| `/adr-reindex` | ruvnet/ruflo | Re-indexing ADR collections. |
| `/adr-review` | ruvnet/ruflo | Reviewing recorded decisions. |
| `/adr-verify` | ruvnet/ruflo | Validating ADR integrity. |
| `/ddd-aggregate` | ruvnet/ruflo | Validating aggregate roots. |
| `/ddd-context` | ruvnet/ruflo | Scaffolding bounded contexts. |
| `/ddd-validate` | ruvnet/ruflo | Ensuring domain model consistency. |
| `/sparc-refine` | ruvnet/ruflo | Advancing architecture designs (SPARC methodology, refine phase). |

# Dev Tooling
## Requirements
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/goal-plan` | ruvnet/ruflo | Formulating action strategies — GOAP A* decomposition of goals into executable plans. |

## Developing
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/git-workflow` | ruvnet/ruflo | Managing PR lifecycles. |
| `/sparc-implement` | ruvnet/ruflo | Executing refined designs (SPARC methodology, implement phase). |

## Testing
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/browser-screenshot-diff` | ruvnet/ruflo | Comparing visual states. |
| `/browser-test` | ruvnet/ruflo | Running browser-based test suites. |
| `/tdd-repair` | ruvnet/ruflo | Fixing failing tests. |
| `/tdd-workflow` | ruvnet/ruflo | Running test-driven development cycles. |
| `/test-gaps` | ruvnet/ruflo | Identifying coverage deficiencies. |

## Code Review
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/diff-analyze` | ruvnet/ruflo | Assessing merge risk levels. |

## Documentation
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/api-docs` | ruvnet/ruflo | Generating API documentation. |
| `/doc-gen` | ruvnet/ruflo | Producing technical documentation. |

## Security
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/dependency-check` | ruvnet/ruflo | Scanning for vulnerable libraries. |
| `/security-scan` | ruvnet/ruflo | Analyzing codebase vulnerabilities. |
| `/witness` | ruvnet/ruflo | Cryptographic signing and verification. |

## Product Health
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/observe-metrics` | ruvnet/ruflo | Aggregating system measurements. |
| `/observe-trace` | ruvnet/ruflo | Tracking distributed execution paths. |

## Agent Safety
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/pii-detect` | ruvnet/ruflo | Identifying personally identifiable information. |
| `/safety-scan` | ruvnet/ruflo | Screening for prompt injection threats. |

## Agent Only Assist
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/browser-auth-flow` | ruvnet/ruflo | Automating authentication sequences. |
| `/browser-extract` | ruvnet/ruflo | Pulling data from web pages. |
| `/browser-form-fill` | ruvnet/ruflo | Populating form fields automatically. |
| `/browser-intent` | ruvnet/ruflo | Interpreting user navigation goals. |
| `/browser-login` | ruvnet/ruflo | Managing session login procedures. |
| `/browser-record` | ruvnet/ruflo | Capturing browser interactions. |
| `/browser-replay` | ruvnet/ruflo | Replaying recorded sessions. |
| `/browser-scrape` | ruvnet/ruflo | Extracting web content. |

# Scaffolding and Harness
## Harness Development
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/cognitive-pattern` | ruvnet/ruflo | Implementing adaptive cognition patterns. |
| `/daa-agent` | ruvnet/ruflo | Deploying dynamic architecture agents. |
| `/managed-agent` | ruvnet/ruflo | Operating cloud-hosted agents. |
| `/nested-subagents` | ruvnet/ruflo | Deploying hierarchical agent structures. |
| `/wasm-agent` | ruvnet/ruflo | Running WebAssembly sandboxed agents. |
| `/wasm-gallery` | ruvnet/ruflo | Managing WASM agent repositories. |
| `/federation-init` | ruvnet/ruflo | Establishing zero-trust cross-machine federation. |
| `/federation-status` | ruvnet/ruflo | Monitoring federation health. |
| `/federation-audit` | ruvnet/ruflo | Reviewing federated access logs. |
| `/intelligence-route` | ruvnet/ruflo | Directing via learned models. |
| `/intelligence-transfer` | ruvnet/ruflo | Moving patterns across systems. |
| `/neural-train` | ruvnet/ruflo | Training neural networks. |
| `/chat-format` | ruvnet/ruflo | Formatting conversation data. |
| `/llm-config` | ruvnet/ruflo | Configuring language model parameters. |
| `/harness-bench` | ruvnet/ruflo | Scoring test harness performance. |
| `/harness-drift-from-history` | ruvnet/ruflo | Detecting behavioral changes. |
| `/harness-evolve` | ruvnet/ruflo | Improving harness designs. |
| `/harness-genome` | ruvnet/ruflo | Analyzing test structure. |
| `/harness-gepa` | ruvnet/ruflo | Running genetic algorithm optimization. |
| `/harness-learn` | ruvnet/ruflo | Training harness models. |
| `/harness-mcp-scan` | ruvnet/ruflo | Scanning MCP security. |
| `/harness-mint` | ruvnet/ruflo | Creating new harness variants. |
| `/harness-oia-audit` | ruvnet/ruflo | Auditing AI openness compliance. |
| `/harness-score` | ruvnet/ruflo | Computing harness ratings. |
| `/harness-security-bench` | ruvnet/ruflo | Benchmarking security measures. |
| `/harness-similarity` | ruvnet/ruflo | Comparing test patterns. |
| `/harness-threat-model` | ruvnet/ruflo | Modeling adversarial scenarios. |

## Harness Setup
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/create-plugin` | ruvnet/ruflo | Scaffolding new plugins. |
| `/validate-plugin` | ruvnet/ruflo | Testing plugin correctness. |

## Token Savings
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/cost-anomaly` | ruvnet/ruflo | Detecting spending irregularities. |
| `/cost-benchmark` | ruvnet/ruflo | Comparing expenditure metrics. |
| `/cost-booster-edit` | ruvnet/ruflo | Modifying cost optimization settings. |
| `/cost-booster-route` | ruvnet/ruflo | Routing via economical pathways. |
| `/cost-budget-check` | ruvnet/ruflo | Validating spending limits. |
| `/cost-burn` | ruvnet/ruflo | Tracking consumption rates. |
| `/cost-compact-context` | ruvnet/ruflo | Minimizing token overhead. |
| `/cost-conversation` | ruvnet/ruflo | Analyzing dialogue expenses. |
| `/cost-counterfactual` | ruvnet/ruflo | Exploring alternate spend scenarios. |
| `/cost-diff` | ruvnet/ruflo | Computing expenditure changes. |
| `/cost-export` | ruvnet/ruflo | Exporting financial reports. |
| `/cost-federation` | ruvnet/ruflo | Aggregating federated costs. |
| `/cost-health` | ruvnet/ruflo | Monitoring financial wellness. |
| `/cost-optimize` | ruvnet/ruflo | Reducing operational expenses. |
| `/cost-projection` | ruvnet/ruflo | Forecasting future spending. |
| `/cost-report` | ruvnet/ruflo | Generating financial summaries. |
| `/cost-session` | ruvnet/ruflo | Tracking per-session costs. |
| `/cost-summary` | ruvnet/ruflo | Creating condensed overviews. |
| `/cost-track` | ruvnet/ruflo | Monitoring ongoing expenses. |
| `/cost-trend` | ruvnet/ruflo | Analyzing spending patterns. |

## Context Setting / Memory
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/agentdb-query` | ruvnet/ruflo | Querying semantic agent database. |
| `/vector-search` | ruvnet/ruflo | Performing HNSW vector lookups. |
| `/memory-bridge` | ruvnet/ruflo | Connecting memory systems. |
| `/memory-search` | ruvnet/ruflo | Querying stored information. |
| `/rvf-manage` | ruvnet/ruflo | Maintaining session containers. |
| `/session-persist` | ruvnet/ruflo | Preserving conversation state. |
| `/vector-cluster` | ruvnet/ruflo | Grouping vectors via GNN. |
| `/vector-embed` | ruvnet/ruflo | Generating embeddings. |
| `/vector-hyperbolic` | ruvnet/ruflo | Using hyperbolic space representations. |
| `/vector-setup` | ruvnet/ruflo | Initializing vector infrastructure. |

## Knowledge Base
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/kg-extract` | ruvnet/ruflo | Identifying entities and relationships. |
| `/kg-traverse` | ruvnet/ruflo | Navigating graph pathways. |
