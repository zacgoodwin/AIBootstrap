## Shell & File Writing
- Never use bash heredocs (`cat <<EOF`) to write files. Use the Write tool instead — heredocs are mangled by hooks and unicode/regex escaping on this Windows setup.
- Prefer PowerShell for text matching on Windows; plain grep/sed line regexes fail on CRLF line endings.
- Always `cd` inside the same command as the file operation (e.g. `cd repo && sed ...`). Shell cwd drifts between turns and edits have landed in the wrong repo.

## Shell Discipline
- Never rely on a persistent `cd`. Every Bash command must be absolute-path scoped or prefixed with the target directory (e.g. `git -C <path> ...`, `npm --prefix <path> ...`).
- Before any destructive or write command, echo `pwd` and confirm it matches the intended repo.