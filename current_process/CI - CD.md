# CI / CD

|  |  |
| --- | --- |
| **Driver** | USESI |
| **Contributors** | USESI, Trika |
| **Objective** | To implement CI / CD with automation for build status, tests and deployment. |
| **Key outcomes** | 1. Unit tests     1. Included in code.     2. Ran as part of CI / CD flow. 2. Deployments     1. Are performed as soon as a item is ready for deployment (Jira)     2. Don’t run in weekly batches 3. Number of “blocked deployments” are decreased. |
| **Status** | IN PROGRESS |

##  Problem statement

- Currently:
    - We have weekly deployments
        - Which don't fall necessarily in a particular day of the week
    - Sometimes we have more than one deployment per week
    - Sometimes we have "blocked deployments"
        - Due to dependencies of functionality not passing tests after being merged to main branch
- We think implementing CI / CD will help
    - To do automated deployments to QA productive WS
    - To help with QA and Production deployments
    - To reduce "blocked deployments"
    - To increase implementation speed
    - To reduce human intervention from the SDC:
        - Build status check
        - Unit testing check

##  Scope

| **Must have:** | - Interaction with     - Current SDLC, including         - Feature flags         - Easy rollback mechanisms     - Beta conditional releases (no customer facing interfaces) - Unit testing development - Scheduled tests - Automated flows for:     - Build     - Unit testing - AI involvement - Cross team functionality |
| --- | --- |
| **Nice to have:** | - Fully automation with VTEX cli - Automated flows for:     - Smoke tests - Environment differences audits |
| **Not in scope:** | - Security gates - Fully E2E automated tests |

##  Context

- We have been more stable in terms of development
    - We have reduced bugs and their reintroduction
        - SonarQube started on this date: 
        - GitHub copilot started on this date: 
        - 

Jira tickets
    - We use AI both in assisting development and assisting PR reviews
        - With Cursor AI
        - With GitHub Copilot
        - 

PRs reviewed by GitHub Copilot
        - With ChatGPT Enterprise
    - We use SonarQube to have better quality of code
- We have been more stable in terms of coordination
    - With more members added to the team with more specific roles
        - Shelly doing QA and production validation
        - Steve doing project management
    - By having our weekly backlog refinements meetings
    - By following agile scrum more closely with sprint cycles
    - By having our early meetings
- We're not in a bad shape on items blocking deployments
    - But there's a proposal to be reviewed based on conditional beta releases
- We've improved our ability as a team to review PRs and merge them to main
- We need to have more maturity with test automation
- All this allow us to have a better path to CD/CI

##  Proposal

- Define guidelines and standards
    - For AI
    - For other tools
    - For development
- Customize and standardize the ESLint rules
    - For react
    - For nodeJs
- Customize quality gate for SonarQube
    - So it's not the bare minimum
    - Integration in all teams with the IDE
- To have a plan to have automation for:
    - Unit testing
        - Required for all new functionality
            - With TDD preferred
        - Assisted by AI is accepted
        - Have in mind gradual implementations for all code
        - Unit testing as part of the branch being submitted for PR review
    - E2E UAT
        - Smoke tests (fast)
        - With playwright
    - Event driven within GitHub (with actions)
        - On PR creation and / or
        - On feature / bug branch commit
- Scheduled tests
    - by weekly or biweekly basis
    - Full regression
- Environment differences monthly audits
    - For configurations
        - For individual apps
        - For franchises
        - For shipping policies
        - For order hooks
        - For branches in MD
    - For customers
    - For catalog
    - For content
        - Whenever is applicable to avoid doing unneeded work
- Deployment
    - Feature flags as or first line of defense
    - Easy roll back
        - Through installing previous version
        - Through PR reverting
    - Beta releases as secondary option
    - Deploy as soon as Jira item is “Ready for deployment”

##  Flow

The summary of modifications to the current flow are:

1. PR created as draft instead of “ready for review” status
2. Copilot always required as reviewer
3. For PR automation
    1. Build status
    2. Unit test status
    3. Human in the loop framework
4. Conditional beta releases

Detailed flow below (Updates in red):

Alternative Flow with conditional Beta releases

###  Beta releases

- For functionality that could potentially block deployments
- Criteria
    - By repository
        - checkout
        - integration
        - b2bstore
        - order sync
    - By functionality
        - Critical
        - Greater or equal than minor releases (major.minor.patch)
    - By human factor

##  Unit testing

- Required for all new functionality (80%)
- Have a plan to implement gradually for previous functionality
- Initiatives to reach 80% all code
    - 80% new code
        - In every new change, following a progressive approach
    - 20% all code
        - One day per week / biweekly / monthly
        - Involvement by all members of all teams
- TDD preferred
    - AI assistance accepted

##  GitHub actions

- Tests to validate status of PR before anything
    - Current and past Unit tests
- VTEX Build if possible here too
- Fix and remove any unneeded steps here
    - Currently some have inherited behaviors from upstream repositories that don't apply to us
- Notifications using communication channels:
    - Email
    - Slack
        - There's a channel currently based on ticket status

##  Cross teams PR review

- Encouraging PR reviews by all members of all teams by current score framework
- Taking advantage of TZ differences

##  AI involvement

- At development phase
    - Auto completion
    - Unit testing
    - Non critical tasks
        - Documentation
        - Formatting
        - Support
    - Asking review before creating PR
- At verification phase
    - In PRs
        - With GitHub copilot
            - Requesting re review after new changes / fixes
- Human in the loop

##  Communication channels

- Slack, with potential events:
    - Every time a PR is created
    - Every time a ticket status is changed to Code review
    - Releases and publish events

##  Future work

- Full E2E automated tests with playwright
- Security gates, for
    - Dependencies
    - Vulnerabilities
- Accessibility

##  Current obstacles

- Automation with VTEX
    - Interaction with VTEX only through command line / browser interface
- No way to get version collection from VTEX
    - But this can be gotten from GitHub as a workaround

##  Areas of opportunities to improve

- Better turnaround for testing tickets both with:
    - QA validation
    - Production validation
- Better communication in PRs
    - Resolve feedback from Copilot if needed
        - and adding a comment so anyone seeing the PR has the whole picture
    - Explain why feedback was not done and marked as resolved
    - Consider feedback both from Copilot and SonarQube before handing the PR to a reviewer
    - When changes are requested by a reviewer
- Review Build status and Unit testing before handing PR to a reviewer

##  Next steps

- Set repos to be able to use test coverage
- Add running tests in Github actions
- Fix all GitHub actions
- Set unit test coverage to 25% starting on March
- Set unit test coverage to 80% starting on June
- Set new code has 0 issues in June
- Gradual implementation
    - Starting with most important repos
    - Propagating to others
- Meetings
    - AI overview
    - Unit testing
    - Beta releases

##  Related links

1. [SemVer](https://semver.org/)
2. [Keep a CHANGELOG](https://keepachangelog.com/en/1.1.0/) 
3. [SonarQube Clean as you code](https://docs.sonarsource.com/sonarqube-server/9.9/user-guide/clean-as-you-code)
4. [Test Driven Development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development)
5. [PR Score Framework](https://usesi1.atlassian.net/wiki/spaces/USSP/pages/4835508258/PR+Score+framework)
6. [Order Sync Service repo](https://github.com/USESI/order-sync-service)
7. [TBD and CI](https://trunkbaseddevelopment.com/continuous-integration/)
8. [TBD short-lived feature branches](https://trunkbaseddevelopment.com/short-lived-feature-branches/)

##  Recording

[USESI](https://usesi-my.sharepoint.com/:v:/r/personal/cvarela_usesi_com/Documents/Recordings/CI%20%20CD-20260309_160209-Meeting%20Recording.mp4?csf=1&web=1&e=EoXfsF&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)
