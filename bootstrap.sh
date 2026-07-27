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
  if gh auth status >/dev/null 2>&1; then results+=("OK       gh auth")
  else results+=("MISSING  gh auth -> run: gh auth login"); missing=$((missing + 1)); fi
fi

install_pack() { # name url
  dest="$HOME/.claude/skills/$1"
  if [ -d "$dest" ]; then
    results+=("OK       $1 (already at $dest)")
  elif [ "$has_git" = 1 ]; then
    if git clone "$2" "$dest" >/dev/null 2>&1; then
      (cd "$dest" && ./setup >/dev/null 2>&1) || true
      results+=("OK       $1 (installed)")
    else
      results+=("MISSING  $1 -> clone failed: $2"); missing=$((missing + 1))
    fi
  else
    results+=("SKIPPED  $1 (git missing)"); missing=$((missing + 1))
  fi
}

install_pack gstack https://github.com/garrytan/gstack.git
install_pack zstack https://github.com/zacgoodwin/zstack.git

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
