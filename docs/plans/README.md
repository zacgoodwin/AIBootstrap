# Plans archive

Completed and in-flight plans live here, one file per plan, named
`YYYY-MM-DD-short-slug.md`.

A plan is an archived record of intent. Once executed, note the outcome in
its header rather than editing the body to match what shipped — the value
of the archive is showing what was intended versus what happened. Delete a
plan only when it was abandoned without being executed.

`tools/gate.mjs` does not walk this directory: plans reference paths as they
were at the time of writing, and those paths are allowed to go stale.

This file also keeps the directory present in a fresh clone. Git does not
track empty directories, and CLAUDE.md references `docs/plans/`.
