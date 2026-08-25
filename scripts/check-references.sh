#!/bin/sh
# Walk every tracked Markdown file, resolve its relative links, bare repo-path
# mentions, and #anchors, and exit 1 on any broken target.
#
#   scripts/check-references.sh
#
# A shim on purpose. This repo already had one reference resolver
# (extractPaths in tools/gate.mjs, used by tools/docs-check.mjs); a second
# implementation in shell could only ever disagree with it. --refs runs that
# same walk and nothing else, so it is fast enough for a pre-commit hook.
#
# The sentinel check below is not paranoia: docs-check.mjs ignores unknown
# flags and falls through to its full report, which exits nonzero only on P1.
# Most dead links are P2, so a silent fallthrough would wave them through.
# Fail loud instead.
set -eu
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)

out=$(node "$ROOT/tools/docs-check.mjs" --refs 2>&1) && status=0 || status=$?
printf '%s\n' "$out"

if ! printf '%s' "$out" | grep -q '^check-references:'; then
  echo "" >&2
  echo "check-references: tools/docs-check.mjs did not run its --refs mode." >&2
  echo "It fell through to the full report, whose exit code ignores P2 dead links." >&2
  echo "Restore refsOnly() in tools/docs-check.mjs before trusting this check." >&2
  exit 2
fi
exit "$status"
