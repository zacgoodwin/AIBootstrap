# rsc-harness skills

Skills from https://github.com/ericrisco/rsc-harness, sorted into the same sections as README.md.

# Product Process
## Pack Setup
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/skill-scout` | ericrisco/rsc-harness | Use when a specialized skill probably exists but is not loaded, when a task feels harder than it should because generic reasoning is doing a domain skill's job, when the work just  |
| `/suggest` | ericrisco/rsc-harness | Always-on. Use whenever the current user turn would clearly benefit from an rsc skill that is not yet installed — detect the gap during normal agent use, name the skill, and (with  |

## Starting Direction / Human Helper
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/bro` | ericrisco/rsc-harness | Use whenever the user asks to make an answer or draft sound human, natural, plain-spoken or less AI-written — including a terse bro after the last response. Rewrites or drafts in t |
| `/idea-refinement` | ericrisco/rsc-harness | Use when a rough product, service, workflow or feature idea needs divergent options and assumption pressure-testing before it becomes a spec. Produces a decision brief with alterna |
| `/orient` | ericrisco/rsc-harness | Always-on. The brújula: close every turn by situating the person — where they are, what just happened, why it mattered, and the next step as a question, never a dead end. Reads the |
| `/roast-me` | ericrisco/rsc-harness | Use when someone wants an honest, comedic audit of their own prompting — reads their past agent transcripts, scores prompt quality and compute efficiency, names their worst habits, |

## PRD

## Success Measurement
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/ab-testing` | ericrisco/rsc-harness | Use when designing or analyzing a controlled experiment — falsifiable hypothesis, sample size from an MDE, reading significance/CI/power, CUPED, or rescuing tests that won't go sig |
| `/analytics` | ericrisco/rsc-harness | Use when instrumenting product or web analytics — GA4/PostHog SDK wiring, event taxonomy, funnels, double-counted events, consent gating, PII scrubbing. NOT charting that data (tha |
| `/business-intelligence` | ericrisco/rsc-harness | Use when a metric (revenue, MRR, margin) needs defining once in a governed semantic layer so every dashboard, report and agent returns the same number, or when an LLM must answer d |
| `/dashboard` | ericrisco/rsc-harness | Use when building or fixing a KPI dashboard decision-makers must read in one screen: which metrics earn a tile, how each tile is framed to answer a decision, and which chart fits i |
| `/data-cleaning` | ericrisco/rsc-harness | Use when a raw table is too dirty to trust — nulls, sentinels, duplicate rows, category sprawl, mixed types, bad dates — and you need a re-runnable clean() plus a schema gate that  |
| `/forecasting` | ericrisco/rsc-harness | Use when projecting history forward — sales, demand, units, revenue, signups, traffic — into a defensible number with an error band: method by data shape, rolling-origin backtest,  |
| `/kpi-framework` | ericrisco/rsc-harness | Use when a team must decide what to measure before building anything — picking one north-star metric, separating leading input drivers from lagging outputs, adding guardrails so a  |
| `/reporting` | ericrisco/rsc-harness | Use when a recurring report must ship itself on a cadence — weekly digest, monthly exec pack, board pack — via a fetch→narrate→render→deliver pipeline with a schedule and a freshne |

## Research
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/competitor-watch` | ericrisco/rsc-harness | Use when an already-named set of rivals is watched on a cadence — pricing, features, positioning and changelog diffed into a maintained tracker plus an append-only, classified chan |
| `/market-research` | ericrisco/rsc-harness | Use when a MARKET as a whole needs a defensible picture — TAM/SAM/SOM sized top-down AND bottom-up until the two converge, cut into reachable segments with one named beachhead, dem |
| `/research-ops` | ericrisco/rsc-harness | Use when someone hands you an open question whose answer must survive scrutiny — a tech choice, a regulation, a what-is-actually-true-about-X — with every non-obvious claim dated a |

## Marketing
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/ads` | ericrisco/rsc-harness | Use when running or fixing paid acquisition on Google or Meta — campaign structure (Performance Max, Demand Gen, Search, Advantage+), platform-fit creative, budget/scaling rules, b |
| `/article-writing` | ericrisco/rsc-harness | Use when writing one long-form article end to end — answer-first lede, question-shaped headings, plus its on-page surface (title, meta, slug, FAQ, Article/FAQPage JSON-LD) — or fix |
| `/brand-identity` | ericrisco/rsc-harness | Use when a project needs its visual foundation built or consolidated into one system: logo brief, color system in HEX/RGB/CMYK/OKLCH with proven AA contrast, type system, usage rul |
| `/brand-voice` | ericrisco/rsc-harness | Use when defining how a brand SOUNDS as a reusable system: adjectives turned into linguistic rules, four tone dimensions as ratios, a use/avoid word bank, an AI voice-DNA block — s |
| `/case-studies` | ericrisco/rsc-harness | Use when turning one named customer's measured win into a case study, or the attributed testimonial quote that travels with it — consent-cleared, metrics-anchored proof for the nex |
| `/community` | ericrisco/rsc-harness | Use when building or running a persistent two-way community space — Discord, Telegram, Circle: platform choice, structure, onboarding, native→bot→human moderation, rituals, growth  |
| `/content-engine` | ericrisco/rsc-harness | Use when a content operation needs a SYSTEM: a dated editorial calendar built top-down from pillars, plus the stage gates, briefs, WIP limits and 1:10 atomization plan that move ea |
| `/course-builder` | ericrisco/rsc-harness | Use when turning \"I want to teach X\" into a defensible course skeleton — measurable outcomes (Bloom + ABCD), assessment that proves each one, sequenced modules, and an outcome×mo |
| `/course-storytelling` | ericrisco/rsc-harness | Use when lesson or course content is correct but forgettable and a concept has to LAND: profiles the learner, breaks the blocking false belief, then rebuilds it as epiphany story → |
| `/instagram-api` | ericrisco/rsc-harness | Use when wiring an agent into Instagram's Graph API: publishing a Reel through the create/poll/publish container dance, reading per-media insights, checking the 24h publish cap, or |
| `/landing-copy` | ericrisco/rsc-harness | Use when writing the words on a single conversion page — the hero headline and subhead, the offer, the proof and testimonials, and one primary CTA — or diagnosing a page that gets  |
| `/linkedin-api` | ericrisco/rsc-harness | Use when wiring an app to LinkedIn's organic Posts / Community Management API — 3-legged OAuth, publishing text, article or document posts to a member profile or company page, and  |
| `/linkedin-carousels` | ericrisco/rsc-harness | Use when building a LinkedIn carousel / document post — the swipeable multi-page PDF — slide by slide: cover hook, narrative arc, one idea per slide, CTA closer, PDF export spec. N |
| `/linkedin-content` | ericrisco/rsc-harness | Use when writing the actual words of one LinkedIn feed post — turning a raw idea, story or asset into ready-to-paste copy: a text post, a document/carousel cover with slide copy an |
| `/linkedin-outreach` | ericrisco/rsc-harness | Use when running LinkedIn social selling as a repeatable motion — Sales Navigator saved searches and trigger alerts, weekly request budgets, fixing a low acceptance rate, turning p |
| `/linkedin-strategy` | ericrisco/rsc-harness | Use when a LinkedIn presence — personal brand or company page — needs an account-level decision spanning months: positioning and point of view, three to five content pillars, posti |
| `/marketing` | ericrisco/rsc-harness | Use when the words span a marketing surface — value proposition, section copy, microcopy, launch and email sequences, channel adaptation, SEO-aware structure — grounded in the bran |
| `/medium-publishing` | ericrisco/rsc-harness | Use when a finished article has to land on Medium correctly — profile vs publication, cross-posting under a canonical link so your own site keeps the SEO credit, import-tool failur |
| `/medium-strategy` | ericrisco/rsc-harness | Use when planning Medium as a growth and revenue system over months rather than one post — the Partner Program, solo profile versus starting or pitching a publication, engineering  |
| `/medium-writing` | ericrisco/rsc-harness | Use when crafting or rewriting ONE Medium story so it earns reads, claps and Boost curation — the title, subtitle and kicker as a hook system, fixing a story with views but a low r |
| `/newsletter` | ericrisco/rsc-harness | Use when running an email newsletter as a recurring publication — subject + preview pair, issues that turn opens into clicks, the welcome sequence, cadence and engagement tiering,  |
| `/podcast` | ericrisco/rsc-harness | Use when planning, recording, editing or publishing one podcast episode end to end — the run-of-show and guest brief, recording settings, the loudness master, the Podcasting 2.0 si |
| `/press-kit` | ericrisco/rsc-harness | Use when writing a press release or assembling a media kit a journalist can lift from — launches, funding, exec hires, partnerships, milestones, awards, or an online newsroom. Symp |
| `/remotion-video` | ericrisco/rsc-harness | Use when you need to render an actual video file with Remotion — React compositions, the Composition/Sequence/TransitionSeries graph, transitions, burned-in word-by-word captions f |
| `/seo-geo` | ericrisco/rsc-harness | Use when one existing page needs to rank in Google AND get cited by AI answer engines — auditing a URL for on-page SEO, structured-data JSON-LD, GEO citation levers, Core Web Vital |
| `/shortform-editing` | ericrisco/rsc-harness | Use when you have raw 9:16 footage and need it cut into a post-ready vertical short — dead air removed, fast jump cuts, karaoke word-by-word burned-in captions from a transcript, c |
| `/shortform-ideation` | ericrisco/rsc-harness | Use when a Reels/TikTok/Shorts account needs its next video ideas scored into a ranked backlog, grounded in its own performance log plus dated trending sounds, each bet logged so i |
| `/shortform-packaging` | ericrisco/rsc-harness | Use when a vertical short is shot or scripted and you need the upload-form copy and cover that win the feed — the hook line, the first-frame on-screen text, the search-led caption, |
| `/shortform-strategy` | ericrisco/rsc-harness | Use when the unit of work is a TikTok/Reels account, not one clip: positioning, sustainable cadence and format mix, ride-or-skip on a trend or sound, recurring series, diagnosing a |
| `/social-publisher` | ericrisco/rsc-harness | Use when planning a posting schedule, building a multi-platform content calendar, or reshaping one source asset into channel-native posts across X, LinkedIn, Instagram, Threads, Bl |
| `/tiktok-api` | ericrisco/rsc-harness | Use when connecting a real TikTok account to code via the Content Posting, Display and Business Account APIs — OAuth, chunked video publish with status polling, and pulling views,  |
| `/video-shorts` | ericrisco/rsc-harness | Use when scripting or directing the edit of a single vertical short that has to hold attention from the first frame — turning a topic, a clip or a long video into a shot-by-shot sc |
| `/viral-score` | ericrisco/rsc-harness | Use to judge whether a short-form clip is worth publishing — scores a reel, short or podcast excerpt 0-100 on ten weighted criteria with automatic penalties, then ranks a batch and |
| `/webinar` | ericrisco/rsc-harness | Use when planning, promoting or running a webinar meant to convert — deciding the offer before the title, building the registration and reminder funnel, scripting the run-of-show,  |
| `/youtube-api` | ericrisco/rsc-harness | Use when wiring code to a real YouTube channel: user OAuth 2.0, resumable videos.insert uploads, editing metadata after publish, pulling views/watch time/retention/traffic from the |
| `/youtube-ideation` | ericrisco/rsc-harness | Use when deciding which videos a channel should make next and tracking whether each bet beat baseline — generating, scoring and prioritising candidate ideas from the channel's own  |
| `/youtube-packaging` | ericrisco/rsc-harness | Use when writing or fixing the text that ships with a YouTube upload — title, description, tags, hashtags and chapters — when click-through is weak and the words are the suspect, o |
| `/youtube-strategy` | ericrisco/rsc-harness | Use when a YouTube channel needs a system-level decision — positioning and niche, upload cadence, how videos chain into playlists and series, end-screen routing, or a what-is-worki |
| `/youtube-thumbnails` | ericrisco/rsc-harness | Use when designing or fixing a YouTube thumbnail, making variants for an A/B test, or working out which thumbnail style wins on a channel — including the trap where CTR looks fine  |

## Initial Design
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/apple-design` | ericrisco/rsc-harness | Apple's fluid-interface craft on the web: spring damping and response, velocity handoff, momentum projection on a flick, rubber-banding at a boundary, interruptible motion the user |
| `/design` | ericrisco/rsc-harness | Use when designing or refreshing a web UI or landing page — visual concept, type/color/spacing/motion tokens, composition, rescuing a UI that reads AI-generic, or a graded design r |
| `/pick-ui-library` | ericrisco/rsc-harness | Pick the frontend library for a task from a curated list: dialogs and popovers, command palette, toasts, one-time-password input, charts, virtualization, drag and drop, state, cond |

## Business
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/bookkeeping` | ericrisco/rsc-harness | Use when a small business needs audit-ready books — a chart of accounts, posting a transaction to the right account and side, clearing an uncategorized bank feed, cash vs accrual,  |
| `/cold-outreach` | ericrisco/rsc-harness | Use when writing a cold email or LinkedIn DM to a stranger and its cadence: first-touch copy under a word ceiling, 4-7 step bump sequences, per-inbox volume and warm-up limits, the |
| `/compliance` | ericrisco/rsc-harness | Use when scoping which regulatory frameworks bind a business — SOC 2, ISO 27001, HIPAA, PCI DSS, EU AI Act, DORA, NIS2 — building a control register with owners and evidence, or st |
| `/contracts` | ericrisco/rsc-harness | Use when drafting or reviewing business contracts and clauses in plain language — NDAs, MSAs, SOWs, contractor agreements, risk boilerplate (liability caps, indemnity, force majeur |
| `/data-policy` | ericrisco/rsc-harness | Use when building internal data-governance machinery: a retention schedule (period, lawful basis, expiry action, system where deletion runs), an Art. 6 lawful-basis register, an Ar |
| `/finance-ops` | ericrisco/rsc-harness | Use when running the money side of a small company on a cash basis: a 13-week rolling cash-flow forecast and runway, bank-vs-books reconciliation, mapping spend to tax-return expen |
| `/financial-model` | ericrisco/rsc-harness | Use when a founder needs the driver-based 18–36 month projection: revenue, cost and headcount builds resolving to net burn, runway, cash-out date, scenarios and the raise size. NOT |
| `/fundraising` | ericrisco/rsc-harness | Use when planning or running an equity round as a process: sizing the raise to a milestone, choosing post-money SAFE vs priced round, tiering investors by intro path, sequencing ou |
| `/gdpr-privacy` | ericrisco/rsc-harness | Use when producing the GDPR artifacts a product publishes or hands over: a privacy policy true to what it processes, a cookie/consent banner, a lawful basis per purpose, an Art. 28 |
| `/grants` | ericrisco/rsc-harness | Use when pursuing non-dilutive public or foundation funding — money you neither repay nor give equity for: finding a fit call, go/no-go, registration (UEI/PIC/BDNS), or writing the |
| `/hiring` | ericrisco/rsc-harness | Use when a role is open and you must write the job post, screen inbound candidates, structure the interview loop, or score them to a defensible Hire / On-Hold / No-Hire — including |
| `/inventory` | ericrisco/rsc-harness | Use when deciding how much stock to hold and when to reorder it — classifying SKUs, sizing safety stock, setting reorder points and order quantities, and tracking the KPIs that kee |
| `/investor-materials` | ericrisco/rsc-harness | Use when packaging or circulating the documents an investor reads outside the meeting — setting up or cleaning a data room, writing the one-pager or teaser that earns the first mee |
| `/invoicing` | ericrisco/rsc-harness | Use when issuing an invoice, quote, or credit note and moving it draft-to-paid — the legally required VAT fields, gap-free numbering, per-country e-invoicing mandates, dunning over |
| `/ip-trademark` | ericrisco/rsc-harness | Use when a non-lawyer operator needs to protect a brand or creative work — clearing and choosing a name or logo, deciding whether and where to register a trademark, using the trade |
| `/lead-gen` | ericrisco/rsc-harness | Use when building and qualifying a prospect list before anyone reaches out — a falsifiable ICP, named accounts/contacts from Apollo/ZoomInfo/Clay, deduped against the CRM, tiered b |
| `/logistics-ops` | ericrisco/rsc-harness | Use when an order is paid and packed and the box now has to move, go sideways, or come back — picking a carrier and service and cutting a label, reacting to a delivery exception, g |
| `/meeting-notes` | ericrisco/rsc-harness | Use when a meeting just ended and a transcript or rough notes must become a record the absent can act on — decisions with their why, actions with an owner and a real date, open que |
| `/people-ops` | ericrisco/rsc-harness | Use when the offer is signed and you now have to run the person — an onboarding plan from preboarding through the 30/60/90 ramp, drafting or auditing an internal policy or handbook |
| `/pitch-deck` | ericrisco/rsc-harness | Use when building or fixing an investor fundraising deck — the narrative arc, the slide-by-slide story, and the few numbers that actually move an investment decision, for a pre-see |
| `/presentations` | ericrisco/rsc-harness | Use when building, theming, or exporting a presentation deck — pitch, sales, keynote, board/QBR, leave-behind one-pager — from slide structure to a token-based theme to PDF or edit |
| `/pricing` | ericrisco/rsc-harness | Use when setting or resetting what a product or service charges and how it is packaged — list price, margin floor, tiers, the value metric, the pricing model (flat, seat, usage, ou |
| `/procurement` | ericrisco/rsc-harness | Use when a small operator must choose what to buy and from whom: pick a supplier, write an RFI/RFQ/RFP that returns comparable bids, score quotes on total cost of ownership, negoti |
| `/project-ops` | ericrisco/rsc-harness | Use when an operator wants to run a small or mid-sized project from a flat file instead of standing up Jira or Asana — dated milestones each with one named owner and a binary done- |
| `/proposals` | ericrisco/rsc-harness | Use when writing the document a buyer reads to say yes — a commercial proposal or Statement of Work, turning discovery notes into a scoped and priced document, adding tiers so the  |
| `/sales-pipeline` | ericrisco/rsc-harness | Use when an operator runs deals out of a spreadsheet or Notion and wants real stages, win probabilities, deal hygiene, a weekly follow-up sweep, and a defensible roll-up forecast — |
| `/sop-builder` | ericrisco/rsc-harness | Use when a repeated process lives in one person's head, breaks when they are away, gets re-explained to every new hire, or produces inconsistent results — and needs writing down on |
| `/terms-conditions` | ericrisco/rsc-harness | Use when drafting the one-to-many legal documents a product publishes to its users — Terms of Service, an Acceptable Use Policy, a EULA for installed software, and the standing not |
| `/unit-economics` | ericrisco/rsc-harness | Use when computing or improving the per-customer economics of a business — CAC, LTV, CAC payback period and contribution margin — judging whether the ratios are healthy against cur |

# Development Process
## Loop
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/sdd` | ericrisco/rsc-harness | Use when you want a disciplined, spec-driven path from a feature idea to shipped, verified software — the SDD dispatcher and front door, in any language. States the method, reads t |

## Designer Implmentation
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/animate` | ericrisco/rsc-harness | Build a web animation: whether it should animate at all, the purpose, the tool, the properties, the easing curve, the duration, interruption and exit. Writes the CSS or Motion code |
| `/animate-expo` | ericrisco/rsc-harness | Build animation and gestures in React Native and Expo with Reanimated worklets on the UI thread — sheets, drawers, screen transitions, swipe, drag, press feedback, haptics. Use whe |
| `/animation-vocabulary` | ericrisco/rsc-harness | Reverse glossary: turn a vague description of a motion effect into its exact name — a popover growing from its trigger is origin-aware, iOS overscroll is rubber-banding, items appe |
| `/design-eng` | ericrisco/rsc-harness | Umbrella for frontend craft: routes a UI request to the sibling that owns it — build motion, review it, audit it, find where it is missing, name an effect, gesture physics, prototy |
| `/find-animation-opportunities` | ericrisco/rsc-harness | Sweep a UI for what does not animate but should, and reject what should not — each suggestion with an exact curve and duration, plus the rejected candidates. Read-only. Use for 'wh |
| `/improve-animations` | ericrisco/rsc-harness | Audit a whole codebase's animation and motion, then write prioritized findings and self-contained plans another agent can execute. Read-only. Use for 'improve the animations', 'mak |
| `/prototype` | ericrisco/rsc-harness | Build several genuinely different versions — variants, takes, options, directions — of one UI piece behind a visual picker, so you flip through them live and promote the winner. Us |
| `/review-animations` | ericrisco/rsc-harness | Review, critique or grade existing animation and motion code against a strict craft bar — easing, duration, transform-origin, interruptibility, GPU-only properties, reduced motion, |

## Technical Stack Specific
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/ai-media` | ericrisco/rsc-harness | Use when a creative goal must become a finished media file: pick and order generative-media models per modality — AI voiceover, image-to-video clips, score — then glue them with ff |
| `/angular` | ericrisco/rsc-harness | Use when building, refactoring, or debugging Angular (v20/21+): standalone components, signals, zoneless change detection, @if/@for/@defer control flow, inject() DI, resource()/htt |
| `/ask-sonner` | ericrisco/rsc-harness | Sonner, the React toast library: mounting Toaster once, toast() calls, promise and loading toasts, updating, dismissing, styling, theming, dark mode, positioning. Use when toasts d |
| `/astro` | ericrisco/rsc-harness | Use when building a content-driven or marketing site with Astro 6: static-first pages, islands and partial hydration, content collections, server islands, per-route on-demand rende |
| `/bash-scripting` | ericrisco/rsc-harness | Use when writing or hardening a shell script that must survive another machine — a CI step, install script, cron job, git hook, devcontainer entrypoint: strict-mode leaks, quoting/ |
| `/chrome-extension` | ericrisco/rsc-harness | Use when building or shipping a Manifest V3 browser extension and hitting its quirks — service worker dying and losing state, permission warnings, a Chrome Web Store rejection, con |
| `/clickhouse-analytics` | ericrisco/rsc-harness | Use when running a ClickHouse server for high-volume OLAP: choosing a MergeTree engine and ORDER BY/PARTITION BY keys, ingesting billions of event/log/metric rows, pre-aggregating  |
| `/cpp` | ericrisco/rsc-harness | Use when writing, reviewing, modernizing, building, or debugging C++ - RAII and resource lifetime, smart-pointer ownership, move semantics and the Rule of Zero/Five, target-based C |
| `/csharp-dotnet` | ericrisco/rsc-harness | Use when writing, reviewing, testing, or shipping C# / .NET code — ASP.NET Core APIs (minimal APIs vs controllers), EF Core data access, async correctness, solution layout in .cs/. |
| `/deep-learning` | ericrisco/rsc-harness | Use when training or debugging a neural net in PyTorch — the forward/loss/backward/step loop and its silent bugs, mixed precision (AMP), AdamW/LR schedules, DDP/FSDP/ZeRO, checkpoi |
| `/django` | ericrisco/rsc-harness | Use when building, reviewing, securing, testing or shipping a Django app — models, migrations, QuerySets/managers, FBV/CBV views, forms, the admin, settings split, and Django REST  |
| `/drizzle-orm` | ericrisco/rsc-harness | Use when modeling data or querying with Drizzle ORM in TypeScript — `pgTable` schema in `.ts`, type-safe select/insert/relational queries, `drizzle-kit` migrations. NOT Prisma Clie |
| `/duckdb` | ericrisco/rsc-harness | Use when analytical SQL must run in-process with no server: Parquet/CSV/JSON/Arrow queried in place, OLAP embedded in an app or notebook, a slow pandas groupby on multi-GB data, or |
| `/dynamodb` | ericrisco/rsc-harness | Use when modeling or operating a DynamoDB table: deriving partition/sort keys from access patterns, single-table vs table-per-entity, adding a GSI/LSI, on-demand vs provisioned cap |
| `/electron` | ericrisco/rsc-harness | Use when building, hardening, or shipping a cross-platform Electron desktop app — main/renderer/preload process model, typed contextBridge IPC, locking down nodeIntegration/context |
| `/elixir` | ericrisco/rsc-harness | Use when writing or refactoring Elixir/OTP on the BEAM — GenServers, supervision trees and restart strategies, pattern matching, mix projects and releases — or when processes misbe |
| `/fal` | ericrisco/rsc-harness | Use when calling a fal.ai endpoint by id to generate image, audio, or video from JS/Python/curl: subscribe vs submit, queue states, ED25519 webhook signature verification, per-call |
| `/fastapi` | ericrisco/rsc-harness | Use when building, reviewing, testing, securing or shipping a FastAPI / async Python service — routers, Pydantic v2 schemas, dependency injection, async SQLAlchemy 2.0, OAuth2/JWT, |
| `/finetuning` | ericrisco/rsc-harness | Use when adapting an open-weight model to a target form or behavior — tone, output format, reasoning pattern — via LoRA/QLoRA or full fine-tuning with TRL SFTTrainer, then preferen |
| `/firebase` | ericrisco/rsc-harness | Use when building on Firebase — Firestore data modeling, Security Rules, Auth and custom claims, Cloud Functions, Storage, modular Web/Admin SDK imports — including symptoms like a |
| `/game-design` | ericrisco/rsc-harness | Use when designing or repairing what makes a game fun — verbs and mechanics, moment-to-moment/session/meta loops, progression, economy faucets and sinks, difficulty curves, dominan |
| `/game-storytelling` | ericrisco/rsc-harness | Use when a game's story is the work: premise and pillars, branching topology, meaningful choice, dialogue state, quests, environmental storytelling, ludonarrative harmony. Author p |
| `/gamedev-multiplayer` | ericrisco/rsc-harness | Use when adding multiplayer or netcode to a game — client-server vs P2P, server authority and anti-cheat, state replication vs RPCs, prediction and reconciliation, lag compensation |
| `/gamedev-pathing` | ericrisco/rsc-harness | Use when making NPCs, enemies, or units navigate a level — grid vs waypoint vs navmesh, A*/JPS, navmesh baking and agent radius, off-mesh links, steering, RVO crowd avoidance, and  |
| `/gamedev-physics` | ericrisco/rsc-harness | Use when working with a game engine's physics — rigid bodies, colliders, collision layers and masks, character controllers, joints, forces versus impulses, raycasts and shapecasts, |
| `/gamedev-shaders` | ericrisco/rsc-harness | Use when authoring or debugging a shader, material, VFX, or full-screen post-process in a game engine — Godot 4.x `.gdshader`, Unity 6 URP/HDRP, Unreal 5.x Materials, effect recipe |
| `/gamedev-shipping` | ericrisco/rsc-harness | Use when exporting, packaging, signing, or publishing a game — export presets per engine, macOS notarization, cross-origin isolation for threaded web builds, Android AAB/keystore,  |
| `/go` | ericrisco/rsc-harness | Use when writing, reviewing, testing, or shipping Go code and HTTP services: idioms, `%w` error wrapping, goroutine/context/errgroup concurrency, net/http 1.22 routing, log/slog, p |
| `/godot` | ericrisco/rsc-harness | Use when writing, reviewing, or debugging Godot 4.x games in GDScript or C# — scenes, nodes, custom Resources, autoload/EventBus signals, typed GDScript, CharacterBody2D/3D movemen |
| `/htmx` | ericrisco/rsc-harness | Use when adding interactivity to a server-rendered app (FastAPI/Jinja, Django, Rails, Laravel, Go templates, Express) without adopting a JS framework — hx-get/post/put/delete with  |
| `/huggingface` | ericrisco/rsc-harness | Use when running open models or working on the Hugging Face platform — the Inference Providers router or InferenceClient, Hub repos via the hf CLI, a dedicated Inference Endpoint w |
| `/java` | ericrisco/rsc-harness | Use when writing, reviewing or refactoring modern Java (21+, 25 LTS) — records and sealed interfaces as algebraic data types, exhaustive pattern-matching switch over instanceof lad |
| `/laravel` | ericrisco/rsc-harness | Use when building or extending a Laravel 11/12 app — Eloquent models, migrations and relationships, routing with controllers and Form Requests, queues and background jobs, framewor |
| `/level-design` | ericrisco/rsc-harness | Use when designing a game level's space — blockout/greybox layout, pacing that drags or spikes, guiding lost players without waypoints, encounter and arena progression, or secret p |
| `/machine-learning` | ericrisco/rsc-harness | Use when predicting a column from rows of tabular features with classic models — scikit-learn pipelines, RandomForest, XGBoost/LightGBM, leak-free cross-validation, metrics for imb |
| `/modal` | ericrisco/rsc-harness | Use when running Python or GPU workloads serverlessly on Modal — modal.App, inline container Images, gpu= on @app.function, Volumes for weight caching, Cron schedules, ASGI endpoin |
| `/mongodb` | ericrisco/rsc-harness | Use when modeling MongoDB documents (embed versus reference, the 16MB cap, bucket and subset patterns), choosing or fixing indexes (compound order by the ESR rule, partial, TTL, mu |
| `/mysql` | ericrisco/rsc-harness | Use when designing, querying, indexing or operating a MySQL or MariaDB database and engine-specific behaviour matters — schema and type choices, index design, reading EXPLAIN, onli |
| `/neon` | ericrisco/rsc-harness | Use when you have picked Neon (serverless Postgres) and need to connect correctly from a serverless or edge runtime, wire database branching into dev, preview and CI, or stop being |
| `/nestjs` | ericrisco/rsc-harness | Use when building or structuring a NestJS backend — feature modules, providers and DI wiring, provider scopes and request-lifecycle order, where to bind guards/pipes/interceptors/f |
| `/nextjs` | ericrisco/rsc-harness | Use when building, reviewing, testing, securing, or optimizing a Next.js App Router app: Server vs Client boundaries, `use server` actions, route handlers, the v15 vs v16 `use cach |
| `/nlp` | ericrisco/rsc-harness | Use when choosing how to tokenize text or which transformer type fits an NLP task, when a tokenizer over-fragments non-English text or inflates token cost, when picking a language  |
| `/no-code-app` | ericrisco/rsc-harness | Use when building an app on a no-code/low-code platform (Bubble, Softr, Glide over Airtable or Xano) — picking the platform, modeling the data, keeping usage-metered cost predictab |
| `/nodejs` | ericrisco/rsc-harness | Use when building or operating a plain Node.js / Express 5 backend service: project layout, async correctness, central error middleware, fail-fast config, graceful shutdown on SIGT |
| `/ollama` | ericrisco/rsc-harness | Use when running open-weight LLMs locally with Ollama — pulling and tagging models, calling the local API, picking a quantization or GGUF, writing Modelfiles, and sizing VRAM and R |
| `/open-weights` | ericrisco/rsc-harness | Use when choosing an open-weight LLM and clearing it for use — which family and size fit the task, the hardware and the budget, and above all whether the license permits shipping.  |
| `/phoenix` | ericrisco/rsc-harness | Use when building an Elixir web app with Phoenix — contexts, Ecto schemas, changesets and migrations, LiveView, channels and PubSub, the generators, and the boundary between domain |
| `/php` | ericrisco/rsc-harness | Use when writing, reviewing or modernizing PHP (8.3-8.5) outside Laravel — strict types, union and intersection types, readonly classes, backed enums, property hooks and asymmetric |
| `/planetscale` | ericrisco/rsc-harness | Use when operating PlanetScale (Vitess serverless MySQL) — branches and the `pscale` CLI, schema changes through deploy requests (Online DDL cutover, ~30-min revert window), tables |
| `/postgresdb` | ericrisco/rsc-harness | Use when PostgreSQL engine behaviour decides the answer — schema and type design, index choice, reading EXPLAIN on a slow query, zero-downtime DDL and backfills, or ops (roles, RLS |
| `/prisma-orm` | ericrisco/rsc-harness | Use when modeling data or writing type-safe queries with Prisma ORM in TypeScript — `schema.prisma`, `prisma.config.ts`, the generated Prisma Client, and Prisma Migrate, including  |
| `/python` | ericrisco/rsc-harness | Use when the task is Python itself, in any framework or none: PEP 695 generics, mypy --strict typing, dataclass/Protocol/TypedDict/Enum choices, asyncio.TaskGroup, stdlib idioms, s |
| `/rails` | ericrisco/rsc-harness | Use when building or maintaining a Ruby on Rails app — models, controllers, views, routes and migrations; ActiveRecord associations, scopes and query performance; Hotwire (Turbo an |
| `/react` | ericrisco/rsc-harness | Use when building or reviewing a client-side React SPA bundled by Vite (React 19.2): components, where state lives, hooks, server data fetching, client routing, re-render and effec |
| `/redis` | ericrisco/rsc-harness | Use when using Redis or any Redis-protocol store (Valkey, ElastiCache, Upstash, Dragonfly, Memorystore) as a cache, queue, rate limiter or distributed lock and it has to be CORRECT |
| `/replicate` | ericrisco/rsc-harness | Use when running, packaging, deploying or scaling a model on the Replicate platform from code — blocking run versus async predictions, handling FileOutput, deployments with warm pr |
| `/replicate-images` | ericrisco/rsc-harness | Use when generating or editing images through the Replicate API, or when a modern image model keeps ignoring the prompt — choosing aspect ratio, resolution, seed and output format, |
| `/ruby` | ericrisco/rsc-harness | Use when writing or refactoring plain Ruby outside Rails — scripts, CLIs, gems, libraries: Enumerable chains and blocks, module mixins and value objects, Bundler/gemspec packaging, |
| `/runpod` | ericrisco/rsc-harness | Use when running GPU compute on RunPod and deciding between Pods (hourly, always-on) and Serverless (per-second, autoscaling) for training, fine-tuning or inference — serverless en |
| `/rust` | ericrisco/rsc-harness | Use when writing, reviewing, testing, or shipping Rust — ownership and the borrow checker (move/borrow/clone, Arc/RefCell, lifetimes), errors with Result/`?`/thiserror/anyhow, asyn |
| `/shopify` | ericrisco/rsc-harness | Use when building or customizing a Shopify store across its three code surfaces — themes (Liquid, Online Store 2.0 sections, blocks and JSON templates), apps (Remix with the versio |
| `/solid-js` | ericrisco/rsc-harness | Use when building, reviewing or debugging a SolidJS app — signals, stores, effects, memos and resources, and JSX that compiles to real DOM with no virtual DOM. Covers the classic t |
| `/spring-boot` | ericrisco/rsc-harness | Use when building, reviewing, testing, securing or configuring a Spring Boot 4 / Framework 7 backend — controllers, services, Spring Data JPA, application.yml, SecurityFilterChain, |
| `/sql` | ericrisco/rsc-harness | Use when writing or reviewing advanced SQL query logic independent of any one engine — multi-table joins, window functions, CTEs including recursive ones, GROUP BY and GROUPING SET |
| `/sqlite-turso` | ericrisco/rsc-harness | Use when deciding whether plain SQLite is enough, or wiring SQLite, Turso or libSQL for local-first, edge and embedded-replica apps — a local file DB, a remote Turso URL, or a loca |
| `/supabase` | ericrisco/rsc-harness | Use when building on Supabase as a backend over managed Postgres — wiring the supabase-js or SSR client, writing or debugging Row Level Security, cookie-based Auth, Storage buckets |
| `/svelte` | ericrisco/rsc-harness | Use when building, reviewing or fixing Svelte 5 (runes) and SvelteKit code — components with the rune primitives, rune modules versus stores, file routing, universal versus server  |
| `/tauri` | ericrisco/rsc-harness | Use when building a lightweight cross-platform desktop (or v2 mobile) app with Tauri — a Rust core plus the OS-native WebView: Rust commands and IPC, streaming to the frontend, the |
| `/together-fireworks` | ericrisco/rsc-harness | Use when calling open-weight LLMs on Together AI or Fireworks AI's OpenAI-compatible endpoints — `base_url` plus namespaced model id, the cheapest model that clears the bar, per-1M |
| `/training-data` | ericrisco/rsc-harness | Use when assembling or curating the corpus a fine-tune trains on — turning raw examples into the JSONL shape a trainer expects (instruction, conversational, preference-pair or bina |
| `/typescript` | ericrisco/rsc-harness | Use when writing or fixing TypeScript type code (.ts/.tsx/.d.ts), modeling data with generics/unions/branded types, diagnosing narrowing failures, or configuring tsconfig and the b |
| `/unity` | ericrisco/rsc-harness | Use when writing, reviewing or structuring Unity game code in C# for Unity 6 LTS — GameObjects and the Transform hierarchy, the MonoBehaviour lifecycle, prefabs and variants, Scrip |
| `/unreal` | ericrisco/rsc-harness | Use when building, scripting or debugging a game in Unreal Engine 5 with Blueprint or C++ — the gameplay framework (Actor, Pawn, Character, GameMode, PlayerController), Actor lifec |
| `/unsloth` | ericrisco/rsc-harness | Use when fine-tuning an open-weight LLM fast on ONE GPU with low VRAM — Unsloth's fast model loaders with 4-bit QLoRA and the trl trainer, response-only loss masking so the prompt  |
| `/vector-db` | ericrisco/rsc-harness | Use when operating a vector store as a data layer — choosing or migrating between Pinecone, Qdrant, Weaviate and pgvector; designing a collection or index (distance metric, dimensi |
| `/vllm` | ericrisco/rsc-harness | Use when self-hosting an open-weight LLM for high-throughput concurrent serving with vLLM — running an OpenAI-compatible endpoint, splitting a model across GPUs with tensor or pipe |
| `/vue-nuxt` | ericrisco/rsc-harness | Use when building or reviewing a Vue 3 + Nuxt 4 app — `<script setup>` reactivity, SSR/SSG/hybrid `routeRules`, the `app/`+`server/` layout, SSR-safe fetching (`useFetch`/`useAsync |
| `/wordpress` | ericrisco/rsc-harness | Use when building or hardening WordPress sites or WooCommerce stores and treating WordPress as the product rather than just writing PHP — block themes with theme.json, plugins with |
| `/write-swift` | ericrisco/rsc-harness | Modern Swift at the language level: structs and value types versus classes, Swift 6 data-race safety, actors, async/await and task groups, `some` versus `any`, ARC and retain cycle |

# Code Architecture
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/api-design` | ericrisco/rsc-harness | Use when settling the contract of an API you expose, before implementation: resources/URLs, REST vs GraphQL, versioning, one RFC 9457 error envelope, pagination, idempotency — emit |
| `/constitution` | ericrisco/rsc-harness | Use when setting or amending a project's non-negotiables — stack canon, quality bars, conventions, security/a11y floors — as numbered, testable rules later phases obey. First rsc-s |
| `/decision-records` | ericrisco/rsc-harness | Use when a hard-to-reverse choice (database, framework, vendor, auth model) must be frozen as an immutable numbered ADR — the context that forced it, the options weighed, the decis |

# Dev Tooling
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/api-connector-builder` | ericrisco/rsc-harness | Use when writing a client for someone else's REST or GraphQL API: auth flow choice and token refresh, pagination to exhaustion, retry-with-jitter on transient failures only, rate-l |
| `/automation-flows` | ericrisco/rsc-harness | Use when building or fixing a no-code automation on n8n, Make, or Zapier — trigger to multi-app steps with data mapping, dedup, retries and an error path — or picking the platform  |
| `/automation-strategy` | ericrisco/rsc-harness | Use when deciding whether a process is worth automating, sizing ROI and build-vs-buy, choosing an automation platform, or diagnosing why a fleet of automations keeps breaking — the |
| `/calendar-scheduling` | ericrisco/rsc-harness | Use when a product needs a booking surface — a pick-a-slot page, a Cal.com/Calendly embed, or real availability plus the confirmed meeting written to Google/Outlook — or when fixin |
| `/data-scraper` | ericrisco/rsc-harness | Use when data lives on a website with no usable API — listings, prices, public records — and the scrape must stay legal and not get blocked: legal gate, extraction path, durable se |
| `/document-processing` | ericrisco/rsc-harness | Use when the deliverable is a document's bytes or its literal content — text/tables out of PDFs, AcroForm fill and flatten, page merge/split, PDF/DOCX from templates, OCR of image- |
| `/e-signature` | ericrisco/rsc-harness | Use when wiring an e-signature flow with DocuSign or Dropbox Sign — picking the SES/AES/QES legal tier, sending a PDF or template for signature, embedded signing, verifying signing |
| `/email-connector` | ericrisco/rsc-harness | Use when wiring server code to send transactional or bulk email via Resend, SendGrid, or Postmark: a provider-agnostic sendEmail() seam, idempotent retries, 100-cap batches with pa |
| `/google-workspace` | ericrisco/rsc-harness | Use when server-side code reads or writes Gmail, Drive, Calendar, or Sheets with a GCP service account and no human in the OAuth loop: picking the auth mode (app-owned vs domain-wi |
| `/make` | ericrisco/rsc-harness | Use when operating Make.com (formerly Integromat) programmatically — driving its REST API v2 or the Make MCP server from code or an agent to create, read, update, activate, run, cl |
| `/n8n` | ericrisco/rsc-harness | Use when operating a live n8n instance programmatically — its REST API (`{host}/api/v1`, `X-N8N-API-KEY`) or the n8n-mcp server — to create, validate, test, activate, update, delet |
| `/notion-connector` | ericrisco/rsc-harness | Use when wiring server code or a cron job to Notion as an ops backend over its HTTP API: pushing or mirroring database rows, two-way sync without duplicates, page blocks, or an int |
| `/power-automate` | ericrisco/rsc-harness | Use when operating Microsoft Power Automate cloud flows from code — create, enable, update, list or delete via the Dataverse Web API (`workflow` table, category 5) with Entra ID OA |
| `/spreadsheet-ops` | ericrisco/rsc-harness | Use when working a spreadsheet programmatically — writing or repairing a formula, generating an .xlsx with Python including charts and conditional formats, driving Google Sheets fr |
| `/stripe` | ericrisco/rsc-harness | Use when wiring an app to Stripe for payments, subscriptions, Checkout, webhooks or the billing portal — adding a paywall or paid plan, charging recurring fees, and debugging why a |
| `/webhooks` | ericrisco/rsc-harness | Use when building the receiving end of a webhook — a provider-agnostic endpoint that proves pushed events are authentic and never processes one twice: raw-body HMAC, ~5-min replay  |
| `/whatsapp-telegram` | ericrisco/rsc-harness | Use when wiring an app or agent to message customers over the WhatsApp Cloud API or a Telegram bot — order updates, OTP codes, reminders, alerts and broadcasts — or when debugging  |
| `/zapier` | ericrisco/rsc-harness | Use when operating Zapier from an agent through the official hosted Zapier MCP server — connecting with a bearer key, discovering an app's actions, enabling one, and invoking a rea |

## Requirements
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/analyze` | ericrisco/rsc-harness | Use when constitution, spec, plan and tasks all exist and you want them cross-read against each other before any code is written — the rsc-sdd pre-implementation gate. Reports cove |
| `/clarify` | ericrisco/rsc-harness | Use when a spec exists and must be de-risked before planning — hunt its ambiguities, unstated assumptions and edge cases, ask the few build-changing questions, bake the answers bac |
| `/decision-challenge` | ericrisco/rsc-harness | Use when a high-impact plan, migration or architecture claim needs a bounded adversarial challenge before commitment. Isolates claims from persuasion, attacks assumptions, reconcil |
| `/plan` | ericrisco/rsc-harness | Use when an approved, clarified spec must become a technical blueprint before any code — the SDD phase between clarify and tasks: architecture, contracts, data flow, testing strate |
| `/specify` | ericrisco/rsc-harness | Use when a feature, change, or product idea is still fuzzy and must become an approved WHAT/WHY spec before any planning or code — the brainstorming front door of SDD. Turns a one- |
| `/tasks` | ericrisco/rsc-harness | Use when an approved plan needs slicing into an ordered task list before any code — the SDD `tasks` phase. Each row carries a literal done-check, dependencies, a parallel-safe mark |

## Developing
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/git-workflow` | ericrisco/rsc-harness | Use when naming or scoping a branch, writing or fixing a commit message, picking the gitmoji for a commit, untangling history (rebase versus merge versus squash), or cutting a vers |
| `/implement` | ericrisco/rsc-harness | Use when an approved plan and task list exist and it is time to turn them into working, tested code — the SDD phase after `analyze` and before `verify`. Enforces TDD: a failing tes |
| `/parallel` | ericrisco/rsc-harness | Use when two or more pieces of work are genuinely independent — disjoint files, no shared state, no ordering edge — and should fan out across subagents, then be gathered and reconc |
| `/source-grounded-development` | ericrisco/rsc-harness | Use when implementation or review depends on current version-specific framework, SDK, protocol or platform behaviour and memory is unsafe. Detects exact local versions, verifies pr |
| `/worktrees` | ericrisco/rsc-harness | Use when work is about to become commits and needs isolation first — check the tree state, then branch or cut a git worktree off a clean base (native EnterWorktree first, git fallb |

## Testing
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/agent-eval` | ericrisco/rsc-harness | Use when measuring whether an LLM or agent system actually got better and gating merges on it: golden sets, fixing an inflated LLM-as-judge, scoring RAG (faithfulness, contextual r |
| `/e2e-testing` | ericrisco/rsc-harness | Use when writing or stabilizing Playwright tests that drive a real browser through multi-step journeys — durable locators, web-first assertions, storageState auth, trace/retries, a |
| `/testing-go` | ericrisco/rsc-harness | Use when writing or running Go tests — table-driven cases, named subtests, parallel isolation, fakes instead of mock frameworks, coverage profiles, benchmarks, fuzzing, golden file |
| `/testing-py` | ericrisco/rsc-harness | Use when writing or fixing Python tests with pytest — especially when the suite is green but bugs still ship, when you must decide where to patch a mocked dependency, when coverage |
| `/testing-web` | ericrisco/rsc-harness | Use when writing or fixing frontend unit, component or custom-hook tests with Vitest or Jest plus Testing Library — rendering a component in jsdom, testing a hook in isolation, cho |
| `/verify` | ericrisco/rsc-harness | Use when implementation is finished and about to be called done or merged — the rsc-sdd evidence gate: runs the stack's scripts/verify.sh (lint, type, test, audit), walks every tas |

## Code Review
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/code-review` | ericrisco/rsc-harness | Use to judge a concrete diff, branch, or GitHub PR on its own merits with no rsc-SDD spec/plan chain to key off — the spec-less giving pass behind /code-review: only findings you c |
| `/review` | ericrisco/rsc-harness | Use when a green diff needs adversarial judgment in the rsc SDD chain, between verify and ship — give a review keyed to the spec/plan/constitution in 02-DOCS/wiki/sdd/, or receive  |
| `/simplify-code` | ericrisco/rsc-harness | Use when correct working code is unnecessarily hard to read, change or verify and needs behaviour-preserving simplification in a bounded scope. Characterizes the observable contrac |

## Deploying
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/aws-essentials` | ericrisco/rsc-harness | Use when standing up the core AWS surface a small product needs: hardening a fresh account, a private S3 bucket, encrypted RDS Postgres, ECS Fargate vs EC2, CloudFront + OAC, or sc |
| `/backups` | ericrisco/rsc-harness | Use when designing or auditing a backup-and-restore program that must survive a real disaster: setting defensible RPO/RTO targets, laying out 3-2-1-1-0 copies that are offsite and  |
| `/cloudflare` | ericrisco/rsc-harness | Use when working on Cloudflare's edge platform — wrangler.jsonc bindings, choosing between D1/KV/R2/Durable Objects/Queues, deploying a Worker or SPA via Static Assets, or designin |
| `/coolify` | ericrisco/rsc-harness | Use when self-hosting apps and databases with Coolify on a VPS you own — install, first-admin lockdown, Git-to-deploy (Nixpacks/Dockerfile/compose), managed Postgres/Redis, schedul |
| `/db-migrations` | ericrisco/rsc-harness | Use when a schema change must ship without downtime — NOT NULL, rename, type change, or backfilling millions of live rows — for the expand-contract sequence and the lock/batching d |
| `/deployment` | ericrisco/rsc-harness | Use when taking an app from source to live: choosing the deploy target from requirements (Hetzner+Coolify vs Vercel vs a third), then wiring container → CI → registry → host with b |
| `/digitalocean` | ericrisco/rsc-harness | Use when deploying or operating a workload on DigitalOcean — Droplet vs App Platform vs Functions, doctl, app spec YAML, Managed Postgres/MySQL/Valkey on the VPC, S3-compatible Spa |
| `/docker` | ericrisco/rsc-harness | Use when authoring or auditing a Dockerfile, shrinking a bloated image, hardening a container that runs as root, picking a base image, or wiring a Compose dev loop with hot reload. |
| `/domains-dns` | ericrisco/rsc-harness | Use when pointing a domain at a host or fixing broken HTTPS — delegating nameservers, writing A/AAAA/CNAME/ALIAS/MX/TXT/CAA rows, apex vs www, standing up auto-renewing TLS, and cu |
| `/email-deliverability` | ericrisco/rsc-harness | Use when mail already sent lands in spam, is rejected, or fails the Gmail/Yahoo bulk-sender checks and the fix is authentication and reputation, not the sending code: SPF/DKIM/DMAR |
| `/fly-io` | ericrisco/rsc-harness | Use when deploying or operating an app on Fly.io — writing fly.toml, placing Machines in regions near users, attaching Volumes, managing secrets, or picking a scaling lever (autost |
| `/gcp-essentials` | ericrisco/rsc-harness | Use when running a small product on core Google Cloud via the gcloud CLI: a project, Cloud Run deploys, a locked-down Cloud Storage bucket, managed Cloud SQL, and least-privilege I |
| `/github-actions` | ericrisco/rsc-harness | Use when authoring or fixing GitHub Actions CI/CD — workflows under .github/workflows, triggers, job matrix, caching, token permissions, OIDC cloud deploys, environment gates, reus |
| `/hetzner` | ericrisco/rsc-harness | Use when provisioning or hardening a Hetzner Cloud VPS: picking the plan/location (CX/CPX/CAX/CCX), bringing it up reproducibly with hcloud + cloud-init, locking down SSH, and wiri |
| `/netlify` | ericrisco/rsc-harness | Use when deploying or operating a site on Netlify — writing or fixing netlify.toml, authoring Functions or Edge Functions, redirects, rewrites and headers, env vars per deploy cont |
| `/railway` | ericrisco/rsc-harness | Use when deploying an app to Railway — pushing a repo or running railway up, provisioning a managed database, wiring env and reference variables across services, attaching a volume |
| `/render` | ericrisco/rsc-harness | Use when deploying or fixing an app on Render — web services, background workers, cron jobs, private services, managed Postgres and Key-Value, and especially the render.yaml Bluepr |
| `/scaling` | ericrisco/rsc-harness | Use when traffic is growing or about to spike and the system bends under concurrency — deciding what to add and in what order (cache, connection pool, async queue, read replica, mo |
| `/ship` | ericrisco/rsc-harness | Use when a verified, review-approved branch has to land — the close of the rsc SDD chain: safety checks, then three landing options (merge, PR, park/discard), authorship always Eri |
| `/vercel` | ericrisco/rsc-harness | Use when operating an already-chosen Vercel project from the CLI or its config file — preview versus production deploys, debugging builds, pushing and pulling env vars across envir |

## Codebase Health
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/accessibility` | ericrisco/rsc-harness | Use when making a web UI conform to WCAG 2.2 Level AA — axe-core or Lighthouse a11y violations, keyboard operability, focus management, ARIA roles/names/live regions, contrast, tap |
| `/codebase-onboarding` | ericrisco/rsc-harness | Use when you land in an unfamiliar or inherited codebase and must get productive fast: a breadth-first map of entry points, request flow, module ownership, hidden side effects (cro |
| `/debug` | ericrisco/rsc-harness | Use when something is broken — a failing or flaky test, crash, wrong result or regression — and the root cause must be reproduced and proven before any fix. On-demand; callable mid |
| `/deprecation` | ericrisco/rsc-harness | Use when retiring a public API, feature, integration, service or legacy path without abandoning consumers. Inventories usage, classifies advisory vs compulsory migration, ships com |
| `/error-handling` | ericrisco/rsc-harness | Use when designing the reaction to a class of failures — typed error taxonomies, retry/backoff/timeout policy, circuit breakers, React/Next error boundaries, and the user-message v |
| `/observability` | ericrisco/rsc-harness | Use when instrumenting a service from the inside so an incident can be explained from telemetry alone — wiring OpenTelemetry logs, metrics and traces, standing up a Collector, expo |
| `/performance` | ericrisco/rsc-harness | Use when a page or interaction is slow for one user and the fix starts from a measurement — a failing Core Web Vital (LCP, INP, CLS), a heavy JS bundle, wasted re-renders, an over- |

## Mobile App Specific
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/compose-multiplatform` | ericrisco/rsc-harness | Use when building one shared Compose UI in Kotlin across Android, iOS, and desktop — commonMain @Composables, expect/actual, source-set placement, native interop, multiplatform Vie |
| `/expo` | ericrisco/rsc-harness | Use when shipping a React Native app with Expo — EAS Build/Submit/Update, eas.json profiles and channels, config plugins, prebuild/CNG, runtime-version policy, OTA updates that nev |
| `/flutter` | ericrisco/rsc-harness | Use when building, structuring, testing or optimizing a Flutter app — feature-first layering, Riverpod 3 or Bloc, typed go_router, freezed models, a dio data layer, Material 3, jan |
| `/kotlin-android` | ericrisco/rsc-harness | Use when building or fixing a native Android app in Kotlin and Jetpack Compose on the UDF layered architecture — ViewModel/StateFlow, Hilt, Room, Retrofit, coroutines, type-safe Na |
| `/react-native` | ericrisco/rsc-harness | Use when writing the JS/TS inside a React Native or Expo app — screens, Expo Router navigation, lists, Reanimated gestures, platform forks, offline state, native modules — or killi |
| `/swift-ios` | ericrisco/rsc-harness | Use when building native iOS and Apple-platform apps in Swift with SwiftUI and modern Swift concurrency — observable view models, Swift 6 strict data-race diagnostics, async/await  |

## Documentation
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/technical-writing` | ericrisco/rsc-harness | Use when writing or fixing user-facing technical docs — a README, a getting-started tutorial, a how-to guide, or API/CLI/config reference — especially when a page tries to teach, e |
| `/translation-l10n` | ericrisco/rsc-harness | Use when adding a second or Nth language to a web or app product — i18n plumbing (string extraction, ICU messages, locale routing), fixing broken plurals or date formats, and makin |

## Security
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/secure-coding` | ericrisco/rsc-harness | Use when securing application code: threat-modeling a feature, security-reviewing a diff, hardening auth/authz, secrets, CORS/CSP, or fixing OWASP-class bugs (access control, injec |
| `/security-scan` | ericrisco/rsc-harness | Use when automated scanners drive a security sweep of a repo or app — SAST, dependency/lockfile CVEs, secrets in the tree or git history, IaC misconfig — and the raw output has to  |

## Product Health
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/client-onboarding` | ericrisco/rsc-harness | Use when a deal closed or a user signed up and the first 30 days need an activation plan: sales→delivery handoff, one verifiable activation event, kickoff, and a 30/60/90 or day-0→ |
| `/customer-support` | ericrisco/rsc-harness | Use when a live support ticket needs triage (intent, P1–P4 priority, SLA clock), an on-voice reply, not a raw template, de-escalation of an angry or churn-risk customer, or escalat |
| `/monitoring` | ericrisco/rsc-harness | Use when setting up uptime and health monitoring, alerts, or on-call basics for a service already in production, so you learn it is down before customers do — health and readiness  |
| `/retention` | ericrisco/rsc-harness | Use when revenue is leaking out the bottom of the funnel and you need a program to keep, score and win back customers — a customer health score, NPS, catching churn signals before  |
| `/review-management` | ericrisco/rsc-harness | Use when a public review needs an on-voice reply, when you need to earn more reviews legally, or when an aggregate rating is slipping across Google Business Profile, Trustpilot, th |

## Agent Safety
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/agent-safety` | ericrisco/rsc-harness | Use when bounding an LLM agent that already runs — scoping its task domain, gating tools to least privilege, defending against prompt injection in untrusted web/email/RAG text, req |

## Agent Only Assist
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/fable-operator` | ericrisco/rsc-harness | Use when a substantive request needs verified, calibrated reasoning — analysis, diagnosis, review, advice, or a draft the user will act on — even when rigor is not asked for, and m |

# Scaffolding and Harness
## Agents and Personas

## Harness Development
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/author-skill` | ericrisco/rsc-harness | Use when authoring a NEW rsc skill or editing an existing one — scoping it to one job, writing the description that decides whether it ever loads, splitting the body into reference |
| `/building-agents` | ericrisco/rsc-harness | Use when building or restructuring an LLM agent — provider adapter, tool calling, structured output, RAG, agent loop, eval gate, cost routing, tracing, MCP server — model-agnostic  |
| `/chatbot` | ericrisco/rsc-harness | Use when a support or sales bot on a live website must behave: persona/system prompt, grounding so it cannot invent prices or policy, jailbreak and injection defense, the human han |
| `/embeddings-search` | ericrisco/rsc-harness | Use when choosing an embedding model, chunk size, or query form, when semantic search returns irrelevant results, when adding hybrid BM25+vector or a reranker, or when a retrieval  |
| `/llm-pipeline` | ericrisco/rsc-harness | Use when wiring several LLM calls into a production flow: typed contracts between steps, a router/gateway so 429s, timeouts and outages fail over instead of taking you down, and co |
| `/prompt-engineering` | ericrisco/rsc-harness | Use when one prompt must give the same right answer across reruns, models, and pasted-in hostile input: forcing a fixed schema, picking the few-shot set, ordering the prompt blocks |
| `/rag` | ericrisco/rsc-harness | Use when building grounded Q&A over your own corpus — chunk, retrieve hybrid, rerank, ground, cite chunk ids, refuse when the sources fall short — or when the right document is ret |
| `/structured-extraction` | ericrisco/rsc-harness | Use when text must become a typed, schema-conformant object you can trust — pulling fields into a fixed JSON shape, extracting line items as typed records, classifying into enums,  |

## Harness Setup
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/harness` | ericrisco/rsc-harness | Use when governing a workspace's control plane, code or not — the `01-TOOLS/` tooling layer, the `02-DOCS/` chaos→knowledge wiki, the root Knowledge map. Audits it, migrates legacy |
| `/init` | ericrisco/rsc-harness | Use when starting from nothing or pointing rsc at an existing project — the front door. Gauges technical level and the accompaniment dial first (non-technical by default), discover |
| `/sdd-init` | ericrisco/rsc-harness | Use when calibrating an existing repo for the rsc SDD chain: detect stack, package manager, test runners and apply/verify commands, refresh the skill registry, and write the runtim |

## Token Savings
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/context-budget` | ericrisco/rsc-harness | Use when a long-horizon task is filling the context window and you must decide what to keep, offload, drop, or hand off to a fresh window — when to compact, what the summary must p |
| `/cost-tracking` | ericrisco/rsc-harness | Use when metering and capping AI or cloud app spend — tokens read from the response `usage` object, priced off a dated rate table, ledgered per user/tenant/feature, with alerts and |

## Anti Drift / Anti Hallucinations

## Context Setting / Memory

## Knowledge Base
| Execution | Source (origin) | What it does |
| --- | --- | --- |
| `/continuous-learning` | ericrisco/rsc-harness | Use when a mistake, correction, or surprise taught the workspace something that must stick — a retro or postmortem, the same agent error corrected twice, a resolved bug's root caus |
| `/knowledge-ops` | ericrisco/rsc-harness | Use when an already-running 02-DOCS/ wiki needs gardening judgment — what is worth capturing (default: nothing), where a loose note belongs, whether to split a bloated article or m |

