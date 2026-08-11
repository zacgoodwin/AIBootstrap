#!/usr/bin/env bash
# AIBootstrap host setup (macOS/Linux). Idempotent: re-run any time.
set -u
missing=0
results=()

check_binary() { # name cmd install_url
  if command -v "$2" >/dev/null 2>&1; then
    results+=("OK       $1")
    return 0
  fi
  results+=("MISSING  $1 -> install: $3")
  missing=$((missing + 1))
  return 1
}

check_binary "git" git "https://git-scm.com/downloads" && has_git=1 || has_git=0
check_binary "gh" gh "https://cli.github.com" && has_gh=1 || has_gh=0
check_binary "node >= 20" node "https://nodejs.org" && {
  major=$(node -e 'process.stdout.write(String(process.versions.node.split(".")[0]))')
  [ "$major" -lt 20 ] && results+=("WARN     node is v$major; 20+ recommended")
}
check_binary "claude CLI" claude "https://code.claude.com/docs/en/setup" || true

if [ "$has_gh" = 1 ]; then
  if gh auth status >/dev/null 2>&1; then
    results+=("OK       gh auth")
    # Boards need the full 'project' scope. Scopes print quoted, so a literal
    # 'project' match cannot false-positive on 'read:project'.
    if gh auth status 2>&1 | grep -qF "'project'"; then
      results+=("OK       gh project scope")
    else
      results+=("MISSING  gh project scope -> run: gh auth refresh -s project")
      missing=$((missing + 1))
    fi
  else
    results+=("MISSING  gh auth -> run: gh auth login"); missing=$((missing + 1))
  fi
fi

install_pack() { # name url
  dest="$HOME/.claude/skills/$1"
  if [ ! -d "$dest" ]; then
    if [ "$has_git" != 1 ]; then
      results+=("SKIPPED  $1 (git missing)"); missing=$((missing + 1)); return
    fi
    if ! git clone "$2" "$dest" >/dev/null 2>&1; then
      results+=("MISSING  $1 -> clone failed: $2"); missing=$((missing + 1)); return
    fi
  fi
  # Run the pack's own idempotent setup every time: heals a clone whose setup
  # failed on a previous run instead of reporting a half-install as OK.
  if (cd "$dest" && ./setup >/dev/null 2>&1); then
    results+=("OK       $1 (ready at $dest)")
  else
    results+=("FAILED   $1 setup -> run manually: cd $dest && ./setup")
    missing=$((missing + 1))
  fi
}

install_pack gstack https://github.com/garrytan/gstack.git

results+=("OK       plugins (ponytail, caveman, context-optimizer) install automatically when you trust this repo in Claude Code")

echo
echo "=== AIBootstrap host setup ==="
printf ' %s\n' "${results[@]}"
if [ "$missing" -gt 0 ]; then
  echo
  echo "$missing item(s) need attention. Fix and re-run."
  exit 1
fi
echo
echo "All set. Open Claude Code in this repo; it will start the first-session interview."
exit 0
