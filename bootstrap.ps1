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

if ($hasNode) {
    $major = [int](node -e "process.stdout.write(String(process.versions.node.split('.')[0]))")
    if ($major -lt 20) { $results += "WARN     node is v$major; 20+ recommended" }
}
if ($hasGh) {
    gh auth status 2>$null | Out-Null
    if ($LASTEXITCODE -ne 0) { $results += "MISSING  gh auth -> run: gh auth login"; $missing++ }
    else { $results += "OK       gh auth" }
}

# Skill packs: clone + run their own idempotent setup if absent.
$packs = @(
    @{ Name = 'gstack'; Url = 'https://github.com/garrytan/gstack.git' },
    @{ Name = 'zstack'; Url = 'https://github.com/zacgoodwin/zstack.git' }
)
foreach ($p in $packs) {
    $dest = Join-Path $HOME ".claude\skills\$($p.Name)"
    if (Test-Path $dest) {
        $results += "OK       $($p.Name) (already at $dest)"
    } elseif ($hasGit) {
        git clone $p.Url $dest 2>&1 | Out-Null
        if ($LASTEXITCODE -eq 0) {
            Push-Location $dest
            & bash ./setup 2>&1 | Out-Null
            Pop-Location
            $results += "OK       $($p.Name) (installed)"
        } else {
            $results += "MISSING  $($p.Name) -> clone failed: $($p.Url)"
            $missing++
        }
    } else {
        $results += "SKIPPED  $($p.Name) (git missing)"
        $missing++
    }
}

$results += "OK       plugins (ponytail, caveman, context-optimizer) install automatically when you trust this repo in Claude Code"

Write-Host "`n=== AIBootstrap host setup ==="
$results | ForEach-Object { Write-Host " $_" }
if ($missing -gt 0) { Write-Host "`n$missing item(s) need attention. Fix and re-run."; exit 1 }
Write-Host "`nAll set. Open Claude Code in this repo; it will start the first-session interview."
exit 0
