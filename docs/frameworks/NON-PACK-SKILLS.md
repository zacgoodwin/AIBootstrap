# Non-pack skills catalog

Skills that no per-pack inventory in docs/frameworks/ carries: either their
source has no pack file of its own, or the pack file for that source does not
list them. Same sections and format as the pack files, so between them every
skill in the catalog appears exactly once; the Source column names the origin.

That once-only rule covers individual skills. It does not cover the packs that
carry them: a framework pack is installed as a unit, so it is listed on the
tools shelf in docs/dev-tooling/ as well as here, on purpose. Things that are
never skills, such as CLI apps and MCP servers, live only in
docs/dev-tooling/.

# Product Process

## Pack Setup

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/connect-mcps` | Aakash Gupta PM OS | Connect MCPs for real-time tool integration |
| `/ponytail:ponytail-help` | DietrichGebert/ponytail | Quick-reference card for all ponytail modes, skills, and commands. One-shot display, not a persistent mode. |

## Starting Direction / Human Helper

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/napkin-sketch` | Aakash Gupta PM OS | ASCII wireframes + browser capture for design matching |

## PRD

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/context-engineering:project-development` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for project-level decisions about LLM-powered systems: whether an LLM is the right primitive for the task at hand, the shape of a multi-stage batch or agent pipeline, token and |
| `/ralph-wiggum` | Aakash Gupta PM OS | Devil's advocate PRD/document reviewer with humor and sharp critique |
| `/decision-doc` | Aakash Gupta PM OS | Document important product decisions. Creates decision logs with rationale, alternatives, and trade-offs. |
| `/journey-map` | Aakash Gupta PM OS | Create user journey maps and customer journey maps (dual mode) |
| `/prd-draft` | Aakash Gupta PM OS | Create a modern, AI-era PRD for features and initiatives. Guides through clarifying questions, generates draft, and offers multi-agent review. |
| `/prd-draft --ai` | Aakash Gupta PM OS | Create a modern, AI-era PRD for features and initiatives. Guides through clarifying questions, generates draft, and offers multi-agent review. |
| `/prd-draft --stage` | Aakash Gupta PM OS | Create a modern, AI-era PRD for features and initiatives. Guides through clarifying questions, generates draft, and offers multi-agent review. |
| `/prd-review-panel` | Aakash Gupta PM OS | Fans a PRD out to seven reviewer subagents in parallel (engineer, designer, executive, legal, UX research, skeptic, customer voice) and reports gaps, challenged assumptions and conflicts. |
| `/prd-review-panel --perspectives "eng,design,exec"` | Aakash Gupta PM OS | Runs only the named subset of the seven reviewers, cutting cost and time when you need specific angles. |
| `/write-prod-strategy` | Aakash Gupta PM OS | Product strategy docs using 7-component framework |

## Success Measurement

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/experiment-decision` | Aakash Gupta PM OS | Decide when to A/B test vs just ship. Framework for experiment planning and prioritization. |
| `/experiment-metrics` | Aakash Gupta PM OS | STEDII framework for selecting trustworthy experiment metrics. Ensures metric validity and reliability. |
| `/feature-metrics` | Aakash Gupta PM OS | Define success metrics using the STEDII framework for trustworthy experiment metrics. |
| `/feature-results` | Aakash Gupta PM OS | Post-launch analysis and results documentation. Document what shipped and what we learned. |
| `/impact-sizing` | Aakash Gupta PM OS | Quantify feature value with driver trees, confidence levels, and the 4-step sizing framework. |
| `/metrics-framework` | Aakash Gupta PM OS | Set up leading vs lagging indicators for product decisions. Framework for metric selection and tracking. |

## Research

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/activation-analysis` | Aakash Gupta PM OS | Analyze user activation using Setup → Aha → Habit framework. Identifies activation bottlenecks. |
| `/competitor-analysis` | Aakash Gupta PM OS | Deep competitive analysis + ongoing monitoring. Checks user research for competitor mentions, sales notes, existing analysis. |
| `/interview-guide` | Aakash Gupta PM OS | Create JTBD-based interview guides for user research. Structured questions for discovery interviews. |
| `/prototype-feedback` | Aakash Gupta PM OS | Build → review → iterate prototype workflow. Structured feedback collection and iteration. |
| `/user-interview` | Aakash Gupta PM OS | Systematically process user interviews to extract actionable insights. Batch processes interviews and generates research reports. |
| `/user-research-synthesis` | Aakash Gupta PM OS | Turn user interviews into actionable insights. Advanced synthesis techniques and frameworks. |

## Initial Design

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/figma-use-slides` | anthropics/claude-plugins-official | This skill helps agents use Figma's use_figma MCP tool in the Slides context. Can be used alongside figma-use which has foundational context for using the use_figma tool. |
| `/ui-design` | uizze.com | Design or refine intentional web and iOS interfaces, using compact UIZZE evidence only when it answers a concrete unresolved question. |
| `/ui-radar` | uizze.com | Find and compare real UI examples from UIZZE’s 800,000+ web and iOS screens. Use for UI inspiration, UI research, design references, comparable apps, user flows, layouts, navigatio |

## Business

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/daily-plan` | Aakash Gupta PM OS | Generate PM daily plan with context |
| `/define-north-star` | Aakash Gupta PM OS | Identify and validate your North Star Metric. Aligns product strategy with key business metric. |
| `/expansion-strategy` | Aakash Gupta PM OS | Upsell, cross-sell, and account growth tactics. Framework for revenue expansion. |
| `/meeting-agenda` | Aakash Gupta PM OS | Create structured meeting agendas for effective collaboration |
| `/meeting-cleanup` | Aakash Gupta PM OS | Batch process multiple meetings from a single day. Consolidates action items and insights across meetings. |
| `/meeting-feedback` | Aakash Gupta PM OS | Post-meeting effectiveness feedback and continuous improvement |
| `/meeting-notes` | Aakash Gupta PM OS | Transform meeting transcripts into structured action items, decisions, and key insights. |
| `/retention-analysis` | Aakash Gupta PM OS | Cohort analysis and retention optimization framework. Identifies retention drivers and churn factors. |
| `/slack-message` | Aakash Gupta PM OS | Draft team communications for Slack. Creates clear, actionable messages for different contexts. |
| `/status-update` | Aakash Gupta PM OS | Generate stakeholder status updates. Creates clear, concise progress reports for different audiences. |
| `/strategy-sprint` | Aakash Gupta PM OS | Create product strategy in 1 day, 1 week, or 1 month timeframes. Progressive strategy development framework. |
| `/weekly-plan` | Aakash Gupta PM OS | Set next week's priorities |
| `/weekly-review` | Aakash Gupta PM OS | Review week's progress, meetings, learnings |

# Development Process

## Loop

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/context-engineering:long-horizon-prompting` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when writing, enhancing, or evaluating the launch prompt for a long-running autonomous agent or a parallel multi-agent orchestration attacking a hard problem: pseudo-formal tas |

## Designer Implementation

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/anti-ui-slop` | uizze.com | With no argument it reads the routing reference and presents a context-aware menu, never auto-running a command. Pure router. |
| `/anti-ui-slop adapt [target]` | uizze.com | Fix: adapts a target for different devices and screen sizes, loading the native variant reference on iOS or Android. |
| `/anti-ui-slop animate [target]` | uizze.com | Enhance: adds purposeful animation and motion to a target. |
| `/anti-ui-slop audit [target]` | uizze.com | Evaluate: technical quality checks for accessibility, performance and responsiveness. Reports only; optimize fixes. |
| `/anti-ui-slop bolder [target]` | uizze.com | Refine: amplifies designs that read as safe or bland. Opposite of quieter. |
| `/anti-ui-slop clarify [target]` | uizze.com | Fix: improves UX copy, labels and error messages rather than visual styling. |
| `/anti-ui-slop colorize [target]` | uizze.com | Enhance: adds strategic color to a monochromatic or washed-out UI. |
| `/anti-ui-slop critique [target]` | uizze.com | Evaluate: UX design review with heuristic scoring, the subjective counterpart to audit. |
| `/anti-ui-slop delight [target]` | uizze.com | Enhance: adds personality and memorable touches beyond baseline correctness. |
| `/anti-ui-slop distill [target]` | uizze.com | Refine: strips a design to its essence and removes accumulated complexity. |
| `/anti-ui-slop document` | uizze.com | Build: generates a DESIGN.md from the existing project code, reading rather than writing UI. |
| `/anti-ui-slop extract [target]` | uizze.com | Build: pulls reusable tokens and components out of a target into the design system. |
| `/anti-ui-slop harden [target]` | uizze.com | Refine: makes a surface production ready by covering error states, i18n and edge cases. |
| `/anti-ui-slop init` | uizze.com | Build: captures durable product context into PRODUCT.md and records the platform. Most other subcommands assume it has run. |
| `/anti-ui-slop layout [target]` | uizze.com | Enhance: fixes spacing, rhythm and visual hierarchy specifically. Narrower than polish. |
| `/anti-ui-slop live` | uizze.com | Iterate: pick elements in the browser and it generates visual variants. The only interactive browser-driven subcommand. |
| `/anti-ui-slop onboard [target]` | uizze.com | Refine: designs first-run flows, empty states and activation paths. |
| `/anti-ui-slop optimize [target]` | uizze.com | Fix: diagnoses and fixes UI performance problems, where audit only reports them. |
| `/anti-ui-slop overdrive [target]` | uizze.com | Enhance: pushes a design past conventional limits. More extreme than bolder. |
| `/anti-ui-slop polish [target]` | uizze.com | Refine: final broad quality pass before shipping, covering what the narrower refine commands touch individually. |
| `/anti-ui-slop quieter [target]` | uizze.com | Refine: tones down aggressive or overstimulating designs. Inverse of bolder and overdrive. |
| `/anti-ui-slop shape [feature]` | uizze.com | Build: plans the UX and UI for a named feature before any code is written and owns task discovery before routing into new work. |
| `/anti-ui-slop typeset [target]` | uizze.com | Enhance: improves typographic hierarchy and font choices only. |
| `/figma-code-connect` | anthropics/claude-plugins-official | Creates and maintains Figma Code Connect template files that map Figma components to code snippets. |
| `/figma-create-new-file` | anthropics/claude-plugins-official | you MUST invoke this skill BEFORE every `create_new_file` tool call. NEVER call `create_new_file` directly without loading this skill first. |
| `/figma-design-to-code` | anthropics/claude-plugins-official | you MUST invoke this skill BEFORE calling the `get_design_context` Figma MCP tool. |
| `/figma-generate-design` | anthropics/claude-plugins-official | Use this skill alongside figma-use when the task involves translating an application page, view, or multi-section layout into Figma. |
| `/figma-generate-library` | anthropics/claude-plugins-official | Build or update a professional-grade design system in Figma from a codebase. Use when the user wants to create variables/tokens, build component libraries, create individual compon |
| `/figma-implement-motion` | anthropics/claude-plugins-official | Translates Figma motion and animations into production-ready application code. Use when implementing animation/motion from a Figma design — user mentions "implement this motion", " |
| `/figma-swiftui` | anthropics/claude-plugins-official | SwiftUI ↔ Figma translation. Use whenever the user mentions Swift, SwiftUI, iOS, iPhone, or iPad — in EITHER direction — translating a Figma design into SwiftUI (design → code), or |
| `/figma-use-figjam` | anthropics/claude-plugins-official | This skill helps agents use Figma's use_figma MCP tool in the FigJam context. Can be used alongside figma-use which has foundational context for using the use_figma tool. |
| `/figma-use-motion` | anthropics/claude-plugins-official | Motion / animation context for the `use_figma` MCP tool — animating Figma nodes via manual keyframes, animation styles, easing, and timeline duration. |
| `/ui-ux-pro-max` | nextlevelbuilder/ui-ux-pro-max-skill | Design intelligence and automated design-system generation for professional UI/UX across platforms. https://github.com/nextlevelbuilder/ui-ux-pro-max-skill |

## Technical Stack Specific

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/supabase` | anthropics/claude-plugins-official | Use when doing ANY task involving Supabase. Triggers: Supabase products (Database, Auth, Edge Functions, Realtime, Storage, Vectors, Cron, Queues); client libraries and SSR integra |
| `/supabase-postgres-best-practices` | anthropics/claude-plugins-official | Postgres best practices maintained by Supabase, for Postgres running anywhere. Load this skill BEFORE writing or changing anything that lives in a Postgres database: creating or al |

# Dev Tooling

## Requirements

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/create-tickets` | Aakash Gupta PM OS | Create tickets via Linear/Jira MCP or generate formatted ticket text |
| `/prioritize` | Aakash Gupta PM OS | Classify PM tasks using LNO Framework (Leverage/Neutral/Overhead) to focus on high-impact work. |

## Developing

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/code-first-draft` | Aakash Gupta PM OS | Initial feature implementation |
| `/code-first-draft --explore-only` | Aakash Gupta PM OS | Initial feature implementation |
| `/dev-as-ai` | zacgoodwin/zg-skills | Switch this repo's git commit identity and the gh CLI account to the AI dev bot (tordek-ai). |
| `/dev-as-human` | zacgoodwin/zg-skills | Switch this repo's git commit identity and the gh CLI account back to Zac Goodwin. |
| `/generate-ai-prototype` | Aakash Gupta PM OS | Generate v0.dev, Lovable, or Bolt.new prompts for AI-powered prototyping |
| `/stack-ship` | zacgoodwin/zg-skills | Ship the current stax branch through the quality pipeline: gate on roborev per-commit reviews (bounded auto-fix loop on failure), squash-submit one clean commit upstream as a PR vi |

## Code Review

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/z-adversarial-review` | zacgoodwin/zg-skills | Blinded adversarial review for any GitHub PR. Assembles a blinded four-key input (spec, acceptance criteria, diff, throwaway worktree), spawns one fresh reviewer agent holding noth |
| `/zg-verify-claims` | zacgoodwin/zg-skills | Audits a repo with subagents that may only propose findings as structured evidence, never prose. A script re-derives every claim off the filesystem first, so a fabricated line number or an unmeasured count is discarded and listed as discarded before anyone reads the report. |
| `/roborev-fix` | roborev-dev/roborev | Use only for a current operative request that explicitly invokes /roborev-fix, or a direct Agent Hook instruction; do not invoke from literal syntax in quoted, pasted, or historica |
| `/roborev-lookahead-review` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-lookahead-review |
| `/roborev-lookahead-review-branch` | roborev-dev/roborev | Runs roborev review --branch --wait --type lookahead over every commit on the current branch, not a single commit, hunting temporal leakage. |
| `/roborev-lookahead-review-branch --base <branch>` | roborev-dev/roborev | Validates the ref, then computes the branch's commit range against that base instead of the default base branch. An invalid ref aborts the run. |
| `/roborev-refine` | roborev-dev/roborev | Closes the review-fix loop: review, fix findings, commit, re-review, repeat until all pass or the cap is hit. Unlike /roborev-fix, which is single-pass with no re-review. |
| `/roborev-refine --since <sha> --max-iterations <n>` | roborev-dev/roborev | --since restricts refine to commits after that sha and is required on the default branch; --max-iterations caps the fix-review cycles, default 10. |
| `/roborev-respond` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-respond |
| `/roborev-review` | roborev-dev/roborev | Validates the target commit, launches roborev review --wait as a background task, and presents the findings. Explicit invocation only; "review this commit" in prose must not trigger it. |
| `/roborev-review --type design` | roborev-dev/roborev | Passes --type design through so the review runs the design panel instead of the default general review. /roborev-design-review is the shorthand. |
| `/roborev-review --type lookahead` | roborev-dev/roborev | Runs a time-series look-ahead review checking whether the change uses information not yet available at the point in time it represents. /roborev-lookahead-review is the equivalent. |
| `/roborev-snooze` | roborev-dev/roborev | Use only when the user explicitly invokes /roborev-snooze |

## Deploying

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/launch-checklist` | Aakash Gupta PM OS | Generates a prioritized launch checklist with owners, dependencies, due dates and a flagged critical path, saved to outputs/launches/. Asks which of three launch types applies. |
| `/launch-checklist --template major` | Aakash Gupta PM OS | Skips the launch-type question and uses the major template, adding press and media, investor and board comms, partner enablement and expanded marketing. |
| `/launch-checklist --template regulatory` | Aakash Gupta PM OS | Uses the regulatory template: expanded legal and compliance, audit trail, certification process and regulatory submission items. |
| `/launch-checklist --template small` | Aakash Gupta PM OS | Uses the small-feature template for builds under two weeks: no beta section, simplified compliance, lighter comms plan. |

## Codebase Health

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/ponytail:ponytail-audit` | DietrichGebert/ponytail | Whole-repo audit for over-engineering. Like ponytail-review, but scans the entire codebase instead of a diff: a ranked list of what to delete, simplify, or replace with stdlib/nati |
| `/ponytail:ponytail-review` | DietrichGebert/ponytail | Code review focused exclusively on over-engineering. Finds what to delete: reinvented standard library, unneeded dependencies, speculative abstractions, dead flexibility. |
| `/ui-slop-score` | uizze.com | Review a rendered web or mobile interface and score how generic it looks. Use for UI critique, design review, visual polish, screenshot review, pre-merge checks, and requests to fi |
| `/ponytail:ponytail-debt` | DietrichGebert/ponytail | Harvest every `ponytail:` comment in the codebase into a debt ledger, so the deliberate shortcuts and deferrals ponytail leaves behind get tracked instead of rotting into "later me |

## Documentation

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/book_to_skill` | virgiliojr94/book-to-skill | Turn PDF and docs folder into a reference skill |
| `/graphify` | safishamsi/graphify | Builds a knowledge graph of the current directory: detect files, extract nodes and edges, cluster communities, write graphify-out/ with graph.json, GRAPH_REPORT.md and an HTML viz. If graph.json already exists and the input is a question, it answers from the graph instead. |
| `/graphify --help` | safishamsi/graphify | Prints the SKILL.md Usage block verbatim and stops. Runs no commands and does no file detection. |
| `/graphify <path>` | safishamsi/graphify | Same pipeline but scans the given directory or GitHub URL instead of the cwd. A URL is cloned first, optionally at a branch via --branch. |
| `/graphify <path> --cluster-only` | safishamsi/graphify | Skips detection and extraction and re-runs community detection on the existing graph, regenerating the report, graph.json and graph.html. Self-contained; do not follow with the normal build steps. |
| `/graphify <path> --directed` | safishamsi/graphify | Builds a DiGraph preserving edge direction instead of the default undirected graph. Must be repeated on later --update runs or the rebuild silently reverts to undirected. |
| `/graphify <path> --falkordb` | safishamsi/graphify | Writes graphify-out/cypher.txt as OpenCypher statements for FalkorDB without loading anything. Use --falkordb-push to actually load a graph. |
| `/graphify <path> --falkordb-push` | safishamsi/graphify | Pushes the graph into a running FalkorDB over the given URI (default falkordb://localhost:6379, graph name graphify). Uses MERGE so re-runs do not duplicate nodes. |
| `/graphify <path> --graphml` | safishamsi/graphify | Adds a graph.graphml export for desktop tools like Gephi and yEd, on top of the default outputs. |
| `/graphify <path> --html` | safishamsi/graphify | Explicit no-op, since HTML is generated on every default run. Exists only so the flag does not error. |
| `/graphify <path> --mcp` | safishamsi/graphify | Starts a graphify MCP stdio server after the build so other agents can query the graph as a tool, instead of ending at the report. |
| `/graphify <path> --mode <mode>` | safishamsi/graphify | Only deep is documented: extraction becomes more aggressive about INFERRED edges such as indirect dependencies and sets DEEP_MODE=true on every extraction subagent. |
| `/graphify <path> --neo` | safishamsi/graphify | Spelled --neo4j on disk: exports graphify-out/cypher.txt for manual Neo4j import. Sibling --neo4j-push <uri> loads directly into a live instance (default bolt://localhost:7687) using MERGE. |
| `/graphify <path> --no-viz` | safishamsi/graphify | Suppresses HTML visualization, leaving just the report and graph.json. The one flag that removes a default output. |
| `/graphify <path> --obsidian` | safishamsi/graphify | Additionally exports an Obsidian vault, one markdown file per node. --obsidian-dir <path> redirects it into an existing vault. |
| `/graphify <path> --svg` | safishamsi/graphify | Adds a graph.svg export for embedding in Notion or GitHub, on top of the default HTML. |
| `/graphify <path> --update` | safishamsi/graphify | Incremental rebuild that re-extracts only files new or changed since the last manifest, handles deletions, and rewrites the manifest for the next diff. |
| `/graphify <path> --watch` | safishamsi/graphify | Background watcher with a 3 second debounce. Code changes trigger an immediate AST re-extract and re-cluster with no LLM; doc, paper or image changes only set a needs_update flag. |
| `/graphify <path> --whisper-model <m>` | safishamsi/graphify | Overrides the default base Whisper model via GRAPHIFY_WHISPER_MODEL for video and audio transcription, trading speed for accuracy. Affects only the transcription step. |
| `/graphify <path> --wiki` | safishamsi/graphify | Builds an agent-crawlable wiki with index.md plus one article per detected community. Must run before cleanup while .graphify_labels.json still exists. |
| `/zg-doc-integrity` | zacgoodwin/zg-skills | Reads a set of documents as one and finds where they collide: instructions that conflict, one term used for two things, numbers and versions that disagree. Strictly internal, so reviewers see only the documents passed in, never the repo or the web. Cites every instance, names no winner, and edits nothing until a human picks a resolution. |

## Agent Only Assist

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/figma-generate-diagram` | anthropics/claude-plugins-official | MANDATORY prerequisite — load this skill BEFORE every `generate_diagram` tool call. |
| `/figma-use` | anthropics/claude-plugins-official | you MUST invoke this skill BEFORE every `use_figma` tool call. NEVER call `use_figma` directly without loading this skill first. |
| `/context-engineering:filesystem-context` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when agent work needs file-backed context: durable scratchpads, tool-output offloading, just-in-time discovery, cross-agent handoff files, filesystem memory, or cleanup policie |
| `/context-engineering:latent-briefing` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when the user asks to "share memory between agents", "KV cache compaction for multi-agent", "orchestrator worker context", "latent briefing", "reduce worker tokens", "cross-age |
| `/i-have-adhd` | ayghri/i-have-adhd | Reformats the agent's replies to ten rules that put the answer first: action-oriented, structured, minimal preamble. |

# Scaffolding and Harness

## Harness Development

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/context-engineering:advanced-evaluation` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for advanced LLM evaluation: LLM-as-judge systems, direct scoring, pairwise comparison, rubric calibration, evaluator bias mitigation, confidence scoring, and automated quality |
| `/context-engineering:bdi-mental-states` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when modeling agent mental states with BDI concepts: beliefs, desires, intentions, RDF-to-belief transformations, rational agency traces, cognitive agents, BDI ontologies, and |
| `/context-engineering:evaluation` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when building agent evaluation systems: deterministic checks, regression suites, multi-dimensional rubrics, quality gates, production monitoring, baseline comparison, and outco |
| `/context-engineering:harness-engineering` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when designing autonomous agent harnesses: research loops, evaluation scaffolds, locked and editable surfaces, durable logs, novelty gates, pruning, rollback, PR preparation, a |
| `/context-engineering:hosted-agents` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when designing hosted or background agent infrastructure: sandboxed execution, remote coding environments, warm pools, session persistence, multiplayer collaboration, self-spaw |
| `/context-engineering:self-improvement-loops` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when the harness, scaffold, workflow, or optimizer itself is the optimization target: recursive self-improvement (RSI) loops, meta-harnesses, self-improving harnesses that mine |
| `/context-engineering:tool-design` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for the tool-interface layer of an agent system specifically: writing tool descriptions agents can route on, designing tool schemas and response formats, naming conventions, ac |
| `/claude-md-improver` | anthropics/claude-plugins-official | Audit and improve CLAUDE.md files in repositories. Use when user asks to check, audit, update, improve, or fix CLAUDE.md files. |

## Harness Setup

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/skill-library` | affaan-m/ECC | Router into a parked skill/agent library. Not carried in docs/frameworks/ECC.md; this kit promotes parked agents by copying the file instead. |

## Token Savings

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/ponytail:ponytail-gain` | DietrichGebert/ponytail | Show ponytail's measured impact as a compact scoreboard: less code, less cost, more speed, from the benchmark medians. |
| `/ponytail:ponytail` | DietrichGebert/ponytail | Switches the session into persistent lazy-senior-dev mode at level full: YAGNI, then stdlib, then native, then existing dependency, then one line, before any new code. |
| `/ponytail:ponytail full` | DietrichGebert/ponytail | The default intensity. Enforces the full ladder, stdlib and native first, shortest working diff and shortest explanation. |
| `/ponytail:ponytail lite` | DietrichGebert/ponytail | The gentlest level. Builds exactly what was asked, then names the lazier alternative in one line and lets you choose rather than imposing it. |
| `/ponytail:ponytail ultra` | DietrichGebert/ponytail | YAGNI extremist. Deletion before addition; ships the one-liner and challenges whether the rest of the requirement should exist at all. |

## Context Setting / Memory

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/context-engineering:context-compression` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when long-running agent sessions need context compression, structured summarization, compaction, token-per-task optimization, or durable handoff summaries that preserve decisio |
| `/context-engineering:context-degradation` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for diagnosing and mitigating context degradation: lost-in-middle failures, context poisoning, context clash, context confusion, attention-pattern issues, and agent performance |
| `/context-engineering:context-fundamentals` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use to explain or reason about the foundational concepts of context engineering: what context is, the anatomy of a context window, how attention mechanics work, the U-shaped attent |
| `/context-engineering:context-optimization` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for improving context efficiency: context budgeting, observation masking, prefix or KV-cache strategy, partitioning, token-cost reduction, retrieval scoping, and extending effe |
| `/context-engineering:memory-systems` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use for persistent semantic memory in agent systems: cross-session knowledge retention, entity tracking, temporal validity, graph or vector retrieval, memory consolidation, and mem |
| `/context-engineering:multi-agent-patterns` | muratcankoylan/Agent-Skills-for-Context-Engineering | Use when designing multi-agent systems that need context isolation, supervisor or swarm coordination, explicit handoffs, parallel execution, or a decision on whether multiple agent |

## Knowledge Base

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/everything-claude-code-conventions` | affaan-m/ECC (auto-generated) | Auto-generated conventions skill for the everything-claude-code repo (JavaScript, hybrid module organization, separate test location) with conventional-commit rules distilled from 500 commits. No separate /everything-claude-code command exists on disk. |
| `/find-skills` | vercel-labs/skills | Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending c |

# Built-in Claude Code

| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/code-review [low\|medium\|high\|xhigh\|max]` | Claude Code built-in | Reviews the current diff, a PR number, branch, or path for correctness bugs and reuse/simplification/efficiency cleanups at the given effort level. `--comment` posts inline PR comments, `--fix` applies the findings. |
| `/code-review ultra` | Claude Code built-in | Multi-agent cloud review of the current branch, or a GitHub PR via `/code-review ultra <PR#>`. User-triggered and billed; `/ultrareview` is the deprecated alias. |
| `/simplify` | Claude Code built-in | Reviews changed code for reuse, simplification, efficiency, and altitude cleanups, then applies the fixes. Quality only, no bug hunting. |
| `/security-review` | Claude Code built-in | Security review of the pending changes on the current branch. |
| `/loop` | Claude Code built-in | Run a prompt or slash command on a recurring interval, or let the model self-pace. |
| `/schedule` | Claude Code built-in | Create, update, list, or run scheduled cloud agents (routines) on a cron schedule, including one-time runs. |
| `/design` | Claude Code built-in | Design canvas: multi-artboard visual design published as an Artifact with click-to-select visual editing. |
| `/dataviz` | Claude Code built-in | Chart and dashboard design system loaded before writing any chart code: form heuristics, color formula, mark specs, interaction rules. |
| `/claude-api` | Claude Code built-in | Claude API reference: model ids, pricing, params, streaming, tool use, MCP, caching. Loads before any Anthropic-API work. |
| `/init` | Claude Code built-in | Initialize a CLAUDE.md with codebase documentation. |
| `/run` | Claude Code built-in | Launch and drive the project's app to confirm a change works in the real app, not just tests. |
| `/fewer-permission-prompts` | Claude Code built-in | Scans transcripts for common read-only calls and adds a prioritized allowlist to project settings. |
| `/update-config` | Claude Code built-in | Configures the harness via settings.json: hooks, permissions, env vars. |
