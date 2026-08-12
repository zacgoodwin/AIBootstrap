#!/usr/bin/env bash
# Gate test: quality-pipeline wiring (stax + roborev + z-adversarial-review).
# Deterministic, <2s. Only network-ish call is roborev status against the
# local daemon. Run from repo root: bash tools/check-pipeline.sh
set -u
fail=0
ok()   { printf 'OK    %s\n' "$1"; }
bad()  { printf 'FAIL  %s\n' "$1"; fail=1; }

for c in st roborev bun jq gh git; do
  command -v "$c" >/dev/null 2>&1 && ok "$c on PATH" || bad "$c missing from PATH"
done

gh extension list 2>/dev/null | grep -q gh-stack \
  && ok "gh-stack extension" || bad "gh-stack extension -> gh extension install github/gh-stack"

# --git-path resolves through linked worktrees (.git is a file there) to the
# shared hooks dir; a hardcoded .git/hooks breaks in every st worktree lane.
hook="$(git rev-parse --git-path hooks)/post-commit"
[ -f "$hook" ] && grep -q roborev "$hook" \
  && ok "roborev post-commit hook" || bad "roborev hook -> roborev init"

# Anchored AND exactly-one: a commented-out pin, or a duplicate active key
# that a last-wins parser would prefer, must not pass.
[ -f .roborev.toml ] \
  && [ "$(grep -c '^agent *=' .roborev.toml)" = 1 ] \
  && [ "$(grep -c '^review_model *=' .roborev.toml)" = 1 ] \
  && grep -q '^agent *= *"claude-code"' .roborev.toml \
  && grep -q '^review_model *= *"haiku"' .roborev.toml \
  && ok ".roborev.toml pins agent/model" || bad ".roborev.toml missing, unpinned, or shadowed by a duplicate key"

if command -v roborev >/dev/null 2>&1; then
  # No separate daemon-status check: any roborev CLI call auto-starts a
  # stopped daemon (v0.64 behavior), so "daemon down" self-heals right here;
  # if the daemon is genuinely unstartable, `roborev list` fails and the
  # jq -e below turns empty stdin into a red gate (exit 4). One round-trip
  # keeps the gate inside its <2s budget.
  # The /stack-ship gate keys on this schema; drift must fail here, not there.
  # -e is load-bearing: it exits 4 on empty input and 1 on null/false, so a
  # dead daemon or null payload fails closed. Do not drop it.
  # Only done jobs carry a P/F verdict; queued/running/canceled ones sit in
  # --open with verdict:null (normal for ~1min after every commit), so the
  # schema assertion applies to completed jobs only.
  # roborev emits null (not []) when the branch has no jobs; a dead daemon
  # yields empty stdin which jq -e exits 4 on, so null-as-empty stays closed.
  # Status values are whitelisted too: a renamed status (e.g. "completed")
  # would otherwise slip an F verdict past the done-only filter.
  roborev list --json --open 2>/dev/null \
    | jq -e '(. // []) | type=="array"
        and all(.[]; .status=="queued" or .status=="running" or .status=="done"
                     or .status=="failed" or .status=="canceled")
        and all(.[] | select(.status=="done"); .verdict=="P" or .verdict=="F")
        and all(.[] | select(.status!="done"); .verdict==null)' >/dev/null \
    && ok "roborev list schema (status + done-verdict P/F)" || bad "roborev list failed (daemon down? -> roborev daemon start) or schema changed"
fi

[ -f "$HOME/.claude/skills/stack-ship/SKILL.md" ] \
  && ok "/stack-ship skill" || bad "/stack-ship skill -> bash bootstrap.sh (Windows: bootstrap.ps1)"

[ -f "$HOME/.claude/skills/z-adversarial-review/SKILL.md" ] \
  && ok "z-adversarial-review skill" || bad "z-adversarial-review skill -> bash bootstrap.sh (Windows: bootstrap.ps1)"

# st validate is metadata-only (local, fast); full `st doctor` does network
# checks and belongs in troubleshooting, not the pre-commit gate.
if command -v st >/dev/null 2>&1; then
  st validate >/dev/null 2>&1 && ok "st stack metadata" || bad "st metadata -> st fix (or st doctor)"
fi

exit $fail
