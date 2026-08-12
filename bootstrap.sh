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
check_binary "bun" bun "https://bun.sh" && has_bun=1 || has_bun=0
check_binary "jq" jq "https://jqlang.org/download" || true
check_binary "stax (st)" st "cargo install stax (needs Rust: https://rustup.rs)" || true

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

# gh-stack extension: GitHub native stacked PRs, used by stax submits.
if [ "$has_gh" = 1 ]; then
  if gh extension list 2>/dev/null | grep -q gh-stack; then
    results+=("OK       gh-stack extension")
  elif gh extension install github/gh-stack >/dev/null 2>&1; then
    results+=("OK       gh-stack extension (installed)")
  else
    results+=("MISSING  gh-stack extension -> run: gh extension install github/gh-stack")
    missing=$((missing + 1))
  fi
fi

# roborev: background AI review of every commit. Official installer is
# pipe-to-shell from roborev.io; inspect/pin the script if that exposure
# matters on this host.
if ! command -v roborev >/dev/null 2>&1; then
  curl -fsSL https://roborev.io/install.sh | bash >/dev/null 2>&1
  export PATH="$PATH:$HOME/.roborev/bin"
fi
if command -v roborev >/dev/null 2>&1; then
  results+=("OK       roborev")
  # --git-path resolves through linked worktrees, same as check-pipeline.sh.
  hook="$(git rev-parse --git-path hooks)/post-commit"
  if [ -f "$hook" ] && grep -q roborev "$hook"; then
    results+=("OK       roborev hook")
  elif roborev init >/dev/null 2>&1 && grep -q roborev "$hook" 2>/dev/null; then
    results+=("OK       roborev hook (installed)")
  else
    results+=("MISSING  roborev hook -> run: roborev init"); missing=$((missing + 1))
  fi
  if [ ! -f .roborev.toml ]; then
    printf 'agent = "claude-code"\nreview_model = "haiku"\n' > .roborev.toml
    results+=("OK       .roborev.toml (created)")
  fi
else
  results+=("MISSING  roborev -> curl -fsSL https://roborev.io/install.sh | bash")
  missing=$((missing + 1))
fi

install_pack() { # name source setup_kind(bash|bun)
  # source is either a git URL (whole repo = the skill, cloned to $dest), or
  # skills:<owner/repo>:<skill-name> for a multi-skill repo installed via the
  # skills CLI (npx skills add), which resolves <skill-name> to $dest itself.
  dest="$HOME/.claude/skills/$1"
  if [ ! -d "$dest" ]; then
    case "$2" in
      skills:*)
        if ! command -v npx >/dev/null 2>&1; then
          results+=("SKIPPED  $1 (npx missing)"); missing=$((missing + 1)); return
        fi
        repo="${2#skills:}"; repo="${repo%:*}"
        skill="${2##*:}"
        if ! npx --yes skills add "$repo" --skill "$skill" -g -a claude-code -y --copy >/dev/null 2>&1; then
          results+=("MISSING  $1 -> npx skills add $repo --skill $skill failed"); missing=$((missing + 1)); return
        fi
        ;;
      *)
        if [ "$has_git" != 1 ]; then
          results+=("SKIPPED  $1 (git missing)"); missing=$((missing + 1)); return
        fi
        if ! git clone "$2" "$dest" >/dev/null 2>&1; then
          results+=("MISSING  $1 -> clone failed: $2"); missing=$((missing + 1)); return
        fi
        ;;
    esac
  fi
  # Run the pack's own idempotent setup every time: heals a clone whose setup
  # failed on a previous run instead of reporting a half-install as OK.
  if [ "${3:-bash}" = bun ]; then
    if [ "$has_bun" != 1 ]; then
      results+=("MISSING  $1 setup needs bun (https://bun.sh)"); missing=$((missing + 1)); return
    fi
    setup_cmd="bun install"
  else
    setup_cmd="./setup"
  fi
  if (cd "$dest" && $setup_cmd >/dev/null 2>&1); then
    results+=("OK       $1 (ready at $dest)")
  else
    results+=("FAILED   $1 setup -> run manually: cd $dest && $setup_cmd")
    missing=$((missing + 1))
  fi
}

install_pack gstack https://github.com/garrytan/gstack.git bash
install_pack z-adversarial-review skills:zacgoodwin/zg-skills:z-adversarial-review bun
install_pack stack-ship skills:zacgoodwin/zg-skills:stack-ship bash

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
