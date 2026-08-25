## Git Bash Paths
- The Bash tool is Git Bash (POSIX sh): unquoted backslashes escape, so a
  `C:\...` path gets eaten and the command fails. Never pass one, and never
  `cd` to the project root (Bash starts there). Need a directory change?
  POSIX form (`cd /c/Users/...`), a quoted forward-slash path, or the
  PowerShell tool.

## Shell & File Writing
- Never use bash heredocs (`cat <<EOF`) to write files. Use the Write tool instead — heredocs are mangled by hooks and unicode/regex escaping on this Windows setup.
- Prefer PowerShell for text matching on Windows; plain grep/sed line regexes fail on CRLF line endings.

## Shell Discipline
- Never rely on a persistent `cd`; shell cwd drifts between turns and edits have landed in the wrong repo. Scope every Bash command to an absolute path or the tool's own directory flag (`git -C <path> ...`, `npm --prefix <path> ...`). Where neither exists, `cd` inside the same command as the operation (`cd /c/path/to/repo && ...`) — never to the project root, where Bash already starts.
- Before any destructive or write command, echo `pwd` and confirm it matches the intended repo.