# Taste Skill skills

All [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) skills, sorted by the same sections as README.md. Upstream v2 experimental, commit 72e2995 checked 2026-08-23.

# Product Process

## Initial Design

| Execution | What it does |
|---|---|
| `/brandkit` | Premium brand-kit image generation: brand-guidelines boards, logo systems, identity decks, and visual-world presentations across many brand styles |
| `/imagegen-frontend-mobile` | Elite mobile app image-generation skill for premium, app-native screen concepts and flows (iOS/Android); generates images only, no code |
| `/imagegen-frontend-web` | Elite frontend image-direction skill generating one premium horizontal reference image per landing-page section, with composition variety and a consistent palette |
| `/stitch-skill` | Semantic design-system skill for Google Stitch: generates agent-friendly DESIGN.md files enforcing premium, anti-generic UI standards |

# Development Process

## Designer Implmentation

| Execution | What it does |
|---|---|
| `/taste-skill` | Anti-slop frontend skill (v2 experimental, the default): reads the brief, infers design direction, tunes VARIANCE/MOTION/DENSITY dials, ships non-templated landing pages, portfolios, and redesigns |
| `/taste-skill-v1` | The original v1 taste-skill, preserved for projects depending on its exact behavior |
| `/gpt-taste` | Elite UX/UI and advanced GSAP motion engineering: Python-driven randomization for layout variance, AIDA structure, editorial typography, bento grids, ScrollTrigger patterns |
| `/image-to-code-skill` | Image-first frontend skill: generates design images itself, deeply analyzes them, then implements the website to match them as closely as possible |
| `/redesign-skill` | Upgrades existing websites and apps to premium quality: audits current design, removes generic AI patterns, applies high-end standards without breaking functionality |
| `/soft-skill` | Teaches the AI to design like a high-end agency: exact fonts, spacing, shadows, card structures, and animations; blocks cheap-looking defaults |
| `/minimalist-skill` | Clean editorial-style interfaces: warm monochrome palette, typographic contrast, flat bento grids, muted pastels; no gradients or heavy shadows |
| `/brutalist-skill` | Raw mechanical interfaces fusing Swiss typographic print with military terminal aesthetics: rigid grids, extreme type contrast, analog degradation effects |

# Scaffolding and Harness

## Anti Drift / Anti Hallucinations

| Execution | What it does |
|---|---|
| `/output-skill` | Overrides default LLM truncation behavior: enforces complete code generation, bans placeholder patterns, handles token-limit splits cleanly |

# Other offerings

| Name | What it does |
|---|---|
| `.claude-plugin/` (plugin.json, marketplace.json) | Claude Code plugin + marketplace manifest so the skill set installs as the `taste-skill` plugin |
| `skill.sh` | Bash lookup script mapping skill names to their SKILL.md paths for local installs |
| `skills/llms.txt` | Machine-readable index of all skills with one-line summaries |
