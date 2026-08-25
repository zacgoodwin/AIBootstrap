---
name: skills-update
description: Update vendored skills and pack catalogs to their latest upstream version. Use when asked whether skills are current, to refresh a skill or a docs/frameworks/ catalog against upstream, or when a pack file's pin looks stale.
---

# Skills update

Two things in this repo track an upstream that moves without us: the skills
vendored under `.claude/skills/`, and the pack catalogs under
`docs/frameworks/`. `tools/sources.json` records where each came from and at
what commit. This skill decides what to do about the ones that moved.

`tools/skills-update.mjs` does the deterministic half — comparing shas,
listing upstream commits, copying files, restamping the manifest. It never
decides whether a change is wanted, and it never commits. That is your half.

## 1. See what moved

```
node tools/skills-update.mjs check
```

Every entry comes back in one state:

| State | What it means | What you do |
|---|---|---|
| `current` | pin == upstream head | nothing |
| `moved` | the upstream **repo** head moved | run `diff` — our files may be untouched |
| `unpinned` | no pin was ever recorded | full catalog pass, then `stamp` |
| `manual` | no public repo to compare (e.g. the PM OS skills) | tell the user to check the source by hand; never report it as current |
| `unreachable` | network or remote error | report it; do not guess |
| `local` | written here | nothing |

`moved` is a question, not a verdict: `ls-remote` sees the repo head, not our
subpath. Never tell the user a skill is out of date on `check` alone.

## 2. A vendored skill that moved

```
node tools/skills-update.mjs diff <id>          # --full for the whole diff
```

If the subpath is unchanged, the script says so and gives you the `stamp`
command that clears the flag. Otherwise read the diff and judge it:

- **Take it** when upstream fixed or sharpened the skill's behavior.
- **Ask first** when upstream restyled prose that this repo has an opinion
  about (`docs/rules/VOICE.md`), dropped a section we rely on, or changed the
  frontmatter `name`/`description` — that changes when the skill fires.
- **Say so and stop** when the skill was adapted locally. `pull` refuses to
  overwrite a working copy that no longer matches its pin; `--force` discards
  those edits, so it is the user's call, never yours.

```
node tools/skills-update.mjs pull <id>
```

`pull` writes the files and restamps the manifest. Read the result — a skill
is instructions, not data. Check it still fits this repo: paths it references
must exist here, and its rules must not contradict `CLAUDE.md`. Note anything
that does rather than quietly editing the vendored copy: a local edit costs
you the next clean update.

## 3. A pack catalog that moved

A catalog is not copied, it is rewritten. Follow `docs/rules/WORKFLOW.md`
*Catalog and doc generation*: enumerate the upstream programmatically first,
state the expected count, write the full catalog, then verify the row count
matches. `diff <id>` gives you the upstream commit list to scope the pass; the
clone it caches is the thing to enumerate.

Then, in this order:

1. Rewrite the pack file's tables.
2. Move rows between the pack file and `docs/frameworks/NON-PACK-SKILLS.md`
   if the pass changed which skills the pack carries — every skill in the
   catalog belongs to exactly one file, and the gate does not check that
   for you.
3. `node tools/skills-update.mjs stamp <id> --commit HEAD` — updates the
   manifest and the file's header sentence together. Stamping without doing
   the pass is a lie the gate cannot catch.

An `unpinned` pack takes the same path; its header carries the "not pinned"
sentinel until the first pass replaces it.

## 4. Finish

- `node tools/gate.mjs` — the manifest must still agree with what is on disk.
- Add a `CHANGELOG.md` entry under `[Unreleased]` naming what changed
  upstream, in user-facing language (`docs/rules/VOICE.md`).
- Report per entry: taken, skipped and why, or needs-a-human. A `manual` entry
  the user has to check themselves belongs in that report every time.
- End with the status line `CLAUDE.md` requires.

## Adding a new skill or pack

Vendoring a skill or writing a new pack file without a `tools/sources.json`
entry fails the gate — by design, since an unrecorded source silently reads as
up to date forever. Add the entry in the same commit: `id`, `kind`, the path
or doc, `upstream` (`git` with a `repo` and, for a skill, the `subpath`;
`manual` for anything with no public repo; `local` for what we wrote), and the
`pinned` commit you vendored from. If you do not know the exact commit, find
the upstream commit whose content matches the copy you have rather than
guessing — a wrong pin makes every future diff wrong.
