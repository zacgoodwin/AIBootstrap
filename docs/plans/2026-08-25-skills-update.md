# A method to update skills to their latest version

**Status:** executed 2026-08-25. Built as planned. Two deviations, both from
what the live upstreams turned out to say — see Outcome.

## Problem

Nothing in the repo could answer "is this skill still what upstream ships?"

- 14 vendored skills under `.claude/skills/`; exactly one (`agent-sort`)
  recorded where it came from, and none recorded a version.
- 19 pack catalogs under `docs/frameworks/`; 15 carried a prose pin
  ("Upstream commit X checked Y") in five different shapes, and 4 carried
  nothing at all — indistinguishable, from the outside, from freshly checked.
- No script, no skill, no CI job.

The measurable outcome: `check` names every entry that has moved since it was
last verified, and no entry can be added without a recorded source.

## Design

Split on `docs/rules/PRINCIPLES.md` *Latent vs deterministic*.

**Deterministic — `tools/sources.json` + `tools/skills-update.mjs`.** One
record per tracked item: a skill, a group of skills from one source, or a pack
catalog. Transport is git, not the GitHub API: `git ls-remote` needs no auth
and has no rate limit. `check` compares pins to upstream heads; `diff` scopes
the change to the subpath we actually vendored; `pull` copies the files and
restamps; `stamp` records a completed catalog pass.

Three source types, because not every source is comparable: `git`, `manual`
(no public repo — 11 of the 14 skills come from a product, not a repo), and
`local`. A `manual` entry can never report `current`.

**Latent — `/skills-update`.** Whether an upstream change is *wanted* is
judgment: read the diff, weigh it against this repo's rules, pull or don't,
re-catalog a pack per `WORKFLOW.md`, restamp, changelog.

**Offline guard — the gate.** The network check can't be a gate test (not free,
not deterministic). What the gate does enforce offline: the manifest parses,
every entry's path exists, every skill dir and pack file has exactly one
entry, and each pack header agrees with the manifest pin.

## Deliberate choices

- **`moved` is a question, not a verdict.** `ls-remote` sees the repo head, not
  our subpath; a monorepo moves constantly without touching our copy. `diff`
  settles it and offers a no-op restamp.
- **`pull` refuses to overwrite a locally edited copy.** It compares the working
  tree's blob hashes to the pinned tree before writing.
- **Unpinned is stated, not guessed.** The 4 catalogs with no recorded commit
  get a "not pinned" sentinel rather than a today's-date pin nobody verified.

## Outcome

Both deviations came from checking the real upstreams instead of trusting the
docs:

- **gstack** was going to be compared by version tag. The repo publishes no
  tags — its `1.68.3.0` is a `VERSION` file. Pinned to the commit where that
  file reads `1.68.3.0` (`85fd9db`) and the header now carries it.
- **`wizard` and `writing-for-agents`** were assumed to be at some unknown
  upstream state. Walking upstream history found the exact commits their
  content matches (`cb7db0e`, `4aaccb5`), so both are pinned truthfully rather
  than approximately. Both are behind upstream by one commit — a repo-wide
  em-dash restyle — left un-pulled: a prose-style change to a vendored skill is
  the user's call, which is exactly the call `/skills-update` exists to put to
  them.

First live run: 9 current, 7 moved, 5 unpinned, 1 manual, 1 local.
