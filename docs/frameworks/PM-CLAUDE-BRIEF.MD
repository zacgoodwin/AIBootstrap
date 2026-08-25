# PM Claude Brief skills

All [MariaVimer/pm-claude-brief](https://github.com/MariaVimer/pm-claude-brief) offerings, sorted by the same sections as Z-TOP-SKILLS.md. Upstream 3321dad (2026-05-03) checked 2026-08-24.

A brief-writing discipline pack for product managers: 1 skill (`/pm-brief`) and 12 CLAUDE.md brief templates, one per common PM problem type. You copy the template for your problem into your project as CLAUDE.md, fill it in, and Claude challenges weak hypotheses, authority-based rationale, and missing success criteria before doing any work. No agents, no hooks, no code.

# Product Process

## Pack Setup

| Execution | What it does |
| --- | --- |
| `/pm-brief` | Loads context before any work starts. Two modes: start a session (populate a CLAUDE.md from the template for your problem type) or review a brief (audit an existing CLAUDE.md and challenge whether the work is worth doing at all before it begins) |

# Other offerings

CLAUDE.md brief templates, grouped by README section. Each is copied into a working folder as `CLAUDE.md`; Claude Code loads it automatically at session start and pushes back if the filled-in answers are thin.

**Before you build**

| Name | What it does |
| --- | --- |
| `templates/problem-clarity.md` | Problem Clarity Audit — run before a discovery brief, PRD, or prioritization; tells you whether you understand the problem well enough to act or are building on untested assumptions |
| `templates/discovery.md` | Discovery brief — user research, problem framing, opportunity sizing; Claude challenges weak hypotheses and thin reasoning before proceeding |
| `templates/feature-validation.md` | Feature Validation brief — tests whether a feature idea is worth building; Claude identifies the riskiest assumption and the cheapest way to test it before you commit |
| `templates/competitive-response.md` | Competitive Response brief — whether a competitor move is a real threat, to which customers, and what the right response is; most moves do not require one |

**Deciding what to build**

| Name | What it does |
| --- | --- |
| `templates/prioritization.md` | Prioritization brief — ranking features, backlog tradeoffs, roadmap decisions; Claude challenges authority-based rationale and missing success criteria |
| `templates/build-vs-buy.md` | Build vs. Buy brief — vendor evaluation and make-or-buy decisions; Claude evaluates whether the capability is worth acquiring at all before comparing options |
| `templates/roadmap.md` | Roadmap brief — roadmap narrative and planning cycles; Claude flags roadmaps that are lists of requests rather than defensible strategic choices, and items without validated hypotheses |
| `templates/stakeholder-alignment.md` | Stakeholder Alignment brief — getting multiple stakeholders to a decision; Claude maps where the disagreement actually lives before suggesting any approach |

**Building it**

| Name | What it does |
| --- | --- |
| `templates/prd.md` | PRD brief — writing a product requirements document; Claude will not begin writing until the problem statement and success metric are locked |
| `templates/gtm.md` | Go-to-Market brief — launch planning, positioning, pricing, enablement; Claude challenges thin positioning, missing success criteria, and launches that cannot be defended on merit |

**After you ship**

| Name | What it does |
| --- | --- |
| `templates/post-launch-review.md` | Post-Launch Review brief — reviews whether the original hypothesis was right and what you learned; connects back to the brief written before building |
| `templates/churn-diagnosis.md` | Churn Diagnosis brief — figuring out why customers are leaving; Claude works from your specific data, not a generic list of churn causes |
