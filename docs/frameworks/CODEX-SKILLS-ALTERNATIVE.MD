# Codex Skills Alternative skills

All [DKeken/codex-skills-alternative](https://github.com/DKeken/codex-skills-alternative) skills, sorted by the same sections as README.md. Upstream 68c441a (2026-06-02) checked 2026-08-24.

An open, vendor-neutral reimplementation of the Codex-only Creative Production and Product Design plugins as 19 Agent Skills: 17 task skills plus 2 orchestrators (`creative-production`, `product-design`) that route to them. Every skill is tool-agnostic, referencing generic image-generation, browser-automation, and web-fetch capabilities so it runs on Claude Code, opencode, Cursor, Gemini CLI, or Copilot. No agents or hooks; extras are an install script and Codex plugin manifests.

# Product Process

## Starting Direction / Human Helper

| Execution | What it does |
| --- | --- |
| `/design-get-context` | Clarify the brief BEFORE any design work to avoid building the wrong thing. Interrogates goal, user, constraints, success criteria, and scope, then writes a short context doc the other design skills consume |

## Research

| Execution | What it does |
| --- | --- |
| `/design-research` | Find UX pains and opportunities fast through competitor scans, pattern research, and web search. Surfaces how others solve the same flow, common failure modes, and conventions users already expect |

## Marketing

| Execution | What it does |
| --- | --- |
| `/creative-production` | Orchestrator for the Creative Production skill set — turn a brief into reviewable visual assets. Routes to the right sub-skill (explore, moodboard, positioning, offer, ads-explorer, scene, shot, polish) |
| `/creative-positioning` | Connect business positioning to a concrete visual language. Maps strategic positioning (category, differentiator, who-it's-for, who-it's-against) onto palette, type, imagery, and tone |
| `/creative-offer` | Build visuals that sell a specific offer and value proposition. Translates an offer (price, bundle, guarantee, bonus, deadline) into hero visuals that make the value legible at a glance |
| `/creative-ads-explorer` | Rapidly generate up to 25 distinct ad creative hypotheses for testing. Produces a matrix of angles (pain, benefit, social proof, urgency, curiosity, comparison) x formats with headline, visual prompt, and rationale |
| `/creative-scene` | Generate realistic product-in-use lifestyle scenes. Places the product in believable contexts of use (who, where, when, doing what) with natural lighting and real texture, for lifestyle/editorial/ecommerce |
| `/creative-shot` | Generate multiple angles and shot types of a single product for ecommerce-ready image sets (hero 3/4, front, side, back, detail macro, scale, packaging, in-hand), keeping product identity consistent |
| `/creative-polish` | Take a chosen visual to finished, production-ready state. Runs cleanup + refinement passes (fix artifacts, balance composition, color-grade, sharpen text, conform to spec/aspect). Final stage of the set |

## Initial Design

| Execution | What it does |
| --- | --- |
| `/product-design` | Orchestrator for the Product Design skill set — turn early ideas into reviewable prototypes. Routes to the right sub-skill (get-context, research, audit, ideate, image-to-code, url-to-code, prototype, qa, share) |
| `/creative-explore` | Pick a visual direction before generating any creative. Produces 3-6 named, distinct visual directions with rationale + sample prompts, then generates one reference image per direction so the user can choose |
| `/creative-moodboard` | Build visual territories (mood boards) for team alignment before production. Groups references into 2-4 named territories, each with palette, texture, typography feel, and 4-6 generated sample tiles |
| `/design-ideate` | Generate several distinct UI directions for a screen or flow before committing to one. Produces 2-4 named interface directions with layout logic, component choices, and tradeoffs, optionally with mockup images |

# Development Process

## Designer Implmentation

| Execution | What it does |
| --- | --- |
| `/design-image-to-code` | Turn a reference image or mockup into a working local frontend that matches it closely. Extracts the design system (layout, type, spacing, color, components), implements it, then screenshot-compares and iterates |
| `/design-url-to-code` | Turn a live website into a working local frontend you can edit. Fetches the page, extracts its design system and structure, rebuilds it locally in your stack, then screenshot-compares to the original |
| `/design-prototype` | Assemble a clickable, runnable prototype from screens/components — wiring navigation, state, and interactions so a team can actually click through it. Verifies interactions with a browser tool |
| `/design-qa` | Check a prototype against its original design direction and requirements before shipping. Flags drift in layout, spacing, type, color, states, and behavior, and reports a pass/fix list |

# Dev Tooling

## Deploying

| Execution | What it does |
| --- | --- |
| `/design-share` | Publish a runnable prototype and return a shareable link. Prepares the prototype to run, starts/serves it (or deploys), and hands back a URL plus run instructions for review. Final stage of the set |

## Product Health

| Execution | What it does |
| --- | --- |
| `/design-audit` | Audit an existing UI for usability, hierarchy, accessibility, and conversion problems. Reviews a live URL, screenshot, or codebase against heuristics and reports prioritized issues with fixes |

# Other offerings

| Name | What it does |
| --- | --- |
| `install.sh` | Auto-detects installed agents (Claude Code, opencode, Cursor, Gemini CLI, Copilot) and copies each `skills/<name>/` folder into the right directory; supports per-tool, project-scope, and dry-run options |
| `uninstall.sh` | Removes the installed skill folders from detected agents |
| `.codex-plugin/plugin.json` | Codex plugin manifest so the repo installs as a real Codex plugin (fallback when the official plugins aren't rolled out) |
| `.agents/plugins/marketplace.json` | Local Codex plugin marketplace definition for `codex plugin marketplace add` |
| `AGENTS.md` | Agent-facing repo instructions |
| `CONTRIBUTING.md` | Contribution guidelines |
