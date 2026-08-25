# SDC tools

##  Date



##  Goals


- Discuss integration of tools to improve and accelerate the SDC
    - GitHub Copilot
    - Cursor AI
    - SonarQube

##  Areas of interest

- AI tools
- SDC flow

##  GitHub Copilot

- This was enabled in our GitHub organization integration
    - for PR review assistance
- It can be integrated in the IDEs
    - VSCode
    - PHPStorm
    - Cursor
        - But this is not the most optimized way to work with cursor
- Use cases locally
    - Unit test generation

### In the terminal

- Prerequisites
    - [GitHub client](https://github.com/cli/cli#installation)
- authenticate in the cli

```bash
gh auth login
```

- Install copilot in the cli

```bash
gh extension install github/gh-copilot
```

- Test

```bash
gh copilot suggest "how to get the diff between 2 versions"
```

### In GitHub PR review

- We should add GitHub Copilot as a reviewer every time we create a PR
- GitHub Copilot will evaluate the files
    - it will suggest if there are things to be improved or fixed
    - suggestions are added in the PR in the conversation tab

### In the IDE

- GH Copilot can be integrated in the IDE through the plugin / extension
- It provides help while coding
- It also provides a chat
- Activate with Command + Shift + I
- Modes:
    - ask: Ask questions about your codebase or technology concepts.
    - Edit: Make edits across multiple files in your codebase
    - Agent: Start an agentic coding workflow.
- Use cases
    - Unit tests generation
    - End to end tests generation
    - Types fixes
    - Logic fixes
    - Lint
    - General errors
    - Security errors
    - Documentation
    - Explanation
    - refactoring
    - auto completion
    - General questions
- it used to be more copy / paste
    - but not anymore, now they have the Edit tab in PHPStorm and it's able to edit code now too

## Cursor AI

- Use cases
    - PR review (manually)
    - Code generation with agent
- Added documentation for configuration
- Ask about code inline
- Fix multiple files
- no copy paste, but direct interaction with the code
- Modes
    - Chat
    - composer
- The tab approach is more versatile
    - it does multi edits at once
- It searches the web when it's added as context

## SonarQube

- Portal: <https://sonarcloud.io/projects> 
- It does analysis at 2 levels:
    - Branch
        - This can be done filtering "new code"
    - PR
        - for PR, the new code is the one being submitted
- It gives score using this criteria:
    - Security
    - Reliability
    - Maintainability
    - Hotspots reviewed
    - Duplications
- It filters the issues based on the score for the different criteria
    - from A through E
- It works with quality gates
    - which are configurable
    - It has a default quality gate
        - [https://sonarcloud.io/organizations/usesi-digital/quality\_gates/show/AWBzEoq-FTEFvoJcI01C](https://sonarcloud.io/organizations/usesi-digital/quality_gates/show/AWBzEoq-FTEFvoJcI01C) 
- It has direct integration with the IDE too
    - in PHPStorm
    - In VSCode
    - in cursor
- Issues can be assigned to people
- Uses "Clean as you code" strategy, which matches the goal of progressive fixing that I had proposed with the SDC
    - the goal is to improve whatever is touched or "around" what's being touched

##  Reference material

- [SonarQube cloud portal](https://sonarcloud.io/projects)
