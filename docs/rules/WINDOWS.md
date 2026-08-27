## Git Bash Paths
- The Bash tool is Git Bash (POSIX sh): unquoted backslashes escape, so a
  `C:\...` path gets eaten and the command fails. Never pass one, and never
  `cd` to the project root (Bash starts there). Need a directory change?
  POSIX form (`cd /c/Users/...`), a quoted forward-slash path, or the
  PowerShell tool.

## Shell & File Writing
- Never use bash heredocs (`cat <<EOF`) to write files. Use the Write tool instead — heredocs are mangled by hooks and unicode/regex escaping on this Windows setup.
- Prefer PowerShell for text matching on Windows; plain grep/sed line regexes fail on CRLF line endings.

## Hooks
- Hook commands run through Git Bash on Windows, not PowerShell, and the payload arrives on stdin (there is no `$env:CLAUDE_TOOL_INPUT`). A hook body written in PowerShell syntax has its `$vars` eaten by bash before PowerShell parses the line: the heredoc guard shipped that way, errored on every Bash call, and matched nothing.
- Put hook logic in a script file and register `node <path to it>`, never a shell one-liner inside settings.json. A one-liner cannot be unit-tested, and its quoting has to survive both JSON and bash: that is how the guard shipped broken twice.
- Self-check a hook after editing it. For the heredoc guard: `node .claude/hooks/heredoc-guard-check.mjs --check <your settings.json>`.
- The PreToolUse heredoc guard is DENY BY DEFAULT and does not try to recognise what a heredoc looks like. Six versions did, and all six shipped a live bypass under a green suite. It reads `tool_input.command`, resolves backslash escapes (bash does that before tokenizing, so `\<` is a literal `<` and `\`+newline is a continuation), removes here-strings, and denies anything still containing `<<`.
- That is sound because a heredoc operator IS two adjacent `<`: a `<` inside quotes is literal and never an operator, and bash does not re-parse expansions into operators. So no heredoc can reach bash without adjacent `<<` once escapes are resolved.
- Only here-strings (`<<<`) are exempt, and they are removed rather than pattern-matched around. Do NOT add another exception: every exception this guard has carried became a bypass. Bit shifts (`echo $((1 << 3))`), left-shift assignment (`x <<= 2`) and quoted literals (`grep "a<<b"`) are denied on purpose; rewrite them or move the arithmetic into a script.
- `node .claude/hooks/heredoc-guard-sweep.mjs` proves the invariant against real bash on two axes: what may follow the operator, and what may precede it (plain and backslash-escaped). Using only the first axis is how `tee o f\<<EOF` shipped green. It runs hostile characters in argument position, so it runs under `set -f` in a throwaway cwd; without both it globbed and truncated tracked files.
- It is a backstop, not permission: the Shell & File Writing rule above still applies.
- A commit message that mentions `<<` is blocked by the guard, and that is correct: it reads `tool_input.command` and cannot tell a message *about* heredocs from a heredoc. Use `git commit -F <file>`. Do not exempt commit messages from the match, that carve-out is the same reasoning that produced three of the guard's bypasses.
- Never bundle `git add` into the same command as the commit. When the guard blocks the commit the staging silently does not run either, so the retry reports "no changes added to commit" and reads as an unrelated second failure.

## Shell Discipline
- Never rely on a persistent `cd`; shell cwd drifts between turns and edits have landed in the wrong repo. Scope every Bash command to an absolute path or the tool's own directory flag (`git -C <path> ...`, `npm --prefix <path> ...`). Where neither exists, `cd` inside the same command as the operation (`cd /c/path/to/repo && ...`) — never to the project root, where Bash already starts.
- Before any destructive or write command, echo `pwd` and confirm it matches the intended repo.
