# AIBootstrap host setup (Windows). Idempotent: re-run any time, installed
# items no-op. Run: powershell -ExecutionPolicy Bypass -File bootstrap.ps1
$ErrorActionPreference = 'Continue'
$results = @()
$missing = 0

function Check-Binary($name, $cmd, $installUrl) {
    if (Get-Command $cmd -ErrorAction SilentlyContinue) {
        $script:results += "OK       $name"
        return $true
    }
    $script:results += "MISSING  $name -> install: $installUrl"
    $script:missing++
    return $false
}

$hasGit  = Check-Binary 'git'         'git'    'https://git-scm.com/download/win'
$hasGh   = Check-Binary 'gh'          'gh'     'https://cli.github.com'
$hasNode = Check-Binary 'node >= 20'  'node'   'https://nodejs.org'
$null    = Check-Binary 'claude CLI'  'claude' 'https://code.claude.com/docs/en/setup'
$hasBun  = Check-Binary 'bun'         'bun'    'https://bun.sh'
$null    = Check-Binary 'jq'          'jq'     'https://jqlang.org/download'
$null    = Check-Binary 'stax (st)'   'st'     'cargo install stax (needs Rust: https://rustup.rs)'
# Pack setups are bash scripts; Git for Windows ships Git Bash. Resolve it
# explicitly: a bare `bash` on PATH is often the WSL stub
# (WindowsApps\bash.exe), which fails when no WSL distro is installed.
function Find-GitBash {
    $git = Get-Command git -ErrorAction SilentlyContinue
    if ($git) {
        $gitRoot = Split-Path (Split-Path $git.Source)  # ...\Git from ...\Git\cmd\git.exe
        foreach ($rel in 'bin\bash.exe', 'usr\bin\bash.exe') {
            $p = Join-Path $gitRoot $rel
            if (Test-Path $p) { return $p }
        }
    }
    $p = Join-Path $env:ProgramFiles 'Git\bin\bash.exe'
    if (Test-Path $p) { return $p }
    $b = Get-Command bash -ErrorAction SilentlyContinue
    if ($b -and $b.Source -notmatch 'WindowsApps') { return $b.Source }
    return $null
}
$gitBash = Find-GitBash

if ($hasNode) {
    $major = [int](node -e "process.stdout.write(String(process.versions.node.split('.')[0]))")
    if ($major -lt 20) { $results += "WARN     node is v$major; 20+ recommended" }
}
if ($hasGh) {
    gh auth status 2>$null | Out-Null
    if ($LASTEXITCODE -ne 0) { $results += "MISSING  gh auth -> run: gh auth login"; $missing++ }
    else {
        $results += "OK       gh auth"
        # Boards need the full 'project' scope. Scopes print quoted, so a
        # literal 'project' match cannot false-positive on 'read:project'.
        $authOut = (gh auth status 2>&1 | Out-String)
        if ($authOut.Contains("'project'")) { $results += "OK       gh project scope" }
        else { $results += "MISSING  gh project scope -> run: gh auth refresh -s project"; $missing++ }
    }
}

# gh-stack extension: GitHub native stacked PRs, used by stax submits.
if ($hasGh) {
    $extList = gh extension list 2>$null | Out-String
    if ($extList -match 'gh-stack') { $results += "OK       gh-stack extension" }
    else {
        gh extension install github/gh-stack 2>&1 | Out-Null
        if ($LASTEXITCODE -eq 0) { $results += "OK       gh-stack extension (installed)" }
        else { $results += "MISSING  gh-stack extension -> run: gh extension install github/gh-stack"; $missing++ }
    }
}

# roborev: background AI review of every commit. Official installer is
# pipe-to-shell from roborev.io; inspect/pin the script if that exposure
# matters on this host.
if (-not (Get-Command roborev -ErrorAction SilentlyContinue)) {
    powershell -ExecutionPolicy ByPass -c "irm https://roborev.io/install.ps1 | iex" 2>&1 | Out-Null
    $env:Path += ";$HOME\.roborev\bin"
}
if (Get-Command roborev -ErrorAction SilentlyContinue) {
    $results += "OK       roborev"
    # --git-path resolves through linked worktrees, same as check-pipeline.sh.
    $hook = "$(git rev-parse --git-path hooks)\post-commit"
    if ((Test-Path $hook) -and (Select-String -Path $hook -Pattern 'roborev' -Quiet)) {
        $results += "OK       roborev hook"
    } else {
        roborev init 2>&1 | Out-Null
        if ((Test-Path $hook) -and (Select-String -Path $hook -Pattern 'roborev' -Quiet)) { $results += "OK       roborev hook (installed)" }
        else { $results += "MISSING  roborev hook -> run: roborev init"; $missing++ }
    }
    if (-not (Test-Path '.roborev.toml')) {
        "agent = `"claude-code`"`nreview_model = `"haiku`"" | Set-Content '.roborev.toml'
        $results += "OK       .roborev.toml (created)"
    }
} else {
    $results += "MISSING  roborev -> powershell -ExecutionPolicy ByPass -c `"irm https://roborev.io/install.ps1 | iex`""
    $missing++
}

# Skill packs: clone if absent, then run their own idempotent setup every time,
# so a clone whose setup failed on a previous run is healed, not reported OK.
$packs = @(
    @{ Name = 'gstack'; Url = 'https://github.com/garrytan/gstack.git'; Setup = 'bash' }
    @{ Name = 'z-adversarial-review'; Url = 'https://github.com/zacgoodwin/z-adversarial-review.git'; Setup = 'bun' }
)
foreach ($p in $packs) {
    $dest = Join-Path $HOME ".claude\skills\$($p.Name)"
    if (-not (Test-Path $dest)) {
        if (-not $hasGit) { $results += "SKIPPED  $($p.Name) (git missing)"; $missing++; continue }
        git clone $p.Url $dest 2>&1 | Out-Null
        if ($LASTEXITCODE -ne 0) {
            $results += "MISSING  $($p.Name) -> clone failed: $($p.Url)"
            $missing++
            continue
        }
    }
    if ($p.Setup -eq 'bash' -and -not $gitBash) {
        $results += "MISSING  $($p.Name) setup needs Git Bash (comes with Git for Windows; not found)"
        $missing++
        continue
    }
    if ($p.Setup -eq 'bun' -and -not $hasBun) {
        $results += "MISSING  $($p.Name) setup needs bun (https://bun.sh)"
        $missing++
        continue
    }
    Push-Location $dest
    if ($p.Setup -eq 'bun') { bun install 2>&1 | Out-Null }
    else { & $gitBash ./setup 2>&1 | Out-Null }
    $setupOk = ($LASTEXITCODE -eq 0)
    Pop-Location
    if ($setupOk) { $results += "OK       $($p.Name) (ready at $dest)" }
    else { $results += "FAILED   $($p.Name) setup -> run manually in $dest"; $missing++ }
}

$results += "OK       plugins (ponytail, caveman, context-optimizer) install automatically when you trust this repo in Claude Code"

Write-Host "`n=== AIBootstrap host setup ==="
$results | ForEach-Object { Write-Host " $_" }
if ($missing -gt 0) { Write-Host "`n$missing item(s) need attention. Fix and re-run."; exit 1 }
Write-Host "`nAll set. Open Claude Code in this repo; it will start the first-session interview."
exit 0
