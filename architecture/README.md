# Architecture

One file per subsystem as the codebase grows (vercel/ai pattern). Every claim
cites file:line (`db/schema.rb L197-206` style) so agents can jump straight to
code instead of scanning. Keep files dense: numbered sections plus an
"extension checklist" for the common change.

Empty until the first service lands. CLAUDE.md `## Landmines` holds the
gotchas; this folder holds the maps.
