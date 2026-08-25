#!/bin/sh
# Verify a claims JSON file against the filesystem. Exit 1 if any claim fails.
#
#   scripts/verify-claims.sh <claims.json> [--json]
#
# A shim on purpose. The logic lives in tools/verify-claims.mjs next to the
# gate and the docs checker it shares code with, in the language the rest of
# this repo's tooling is written in. Keeping it out of shell also keeps it
# correct on Windows, where CRLF checkouts break naive line matching.
set -eu
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
exec node "$ROOT/tools/verify-claims.mjs" "$@"
