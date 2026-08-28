# Software Development Cycle

##  Objectives

1. To automate deployments
2. To reduce manual intervention
3. To be less prone to errors
4. To avoid bugs reintroduction
5. To be open and easy to use

##  Scope

| **Must have:** | 1. Ability to isolate configuration changes from code changes 2. Ability to deploy by code version in any environment 3. QA should match production at all times configuration wise     1. With the exception that QA resources should aim to Staging / Sandbox systems 4. Data should be isolated in an environment context     1. Meaning, changes in one environment shouldn't affect another environment 5. Ability to propagate hotfixes     1. To all environments     2. Without disruption 6. The general flow should be:     1. Developers work with changes in their local dev environments         1. By using workspaces         2. "branched off" most recent stable branch / commit         3. In a private setting         4. Tests can be performed here without affecting other environments code and data wise     2. Changes are committed following a work flow if tests and build passed in previous step     3. Changes are deployed to staging if tests and build passed in previous steps         1. Tests are performed here     4. Changes are deployed to QA if tests and build passed in previous steps |
| --- | --- |
| **Nice to have:** | 1. Ability to deploy using a CI/CD tool if possible     1. Including build validation     2. Including automated test validation         1. Unit tests         2. Integration tests         3. UAT     3. Including "live" rollback capabilities     4. Including rollback on demand |
| **Not in scope:** | 1. Automation tools for tests 2. CI / CD tool configuration / setup |

##  Considerations

1. Environments
    1. Production
    2. QA
        1. Resembling production
            1. With the exception of the moment there's a test being performed here before promoting to production
            2. in terms of:
                1. resources
                2. infrastructure
                3. accessibility
                4. configurations
                    - With the exception of QA aiming to staging / sandbox systems
                5. functionality
                6. capabilities
    3. Local environments for devs
2. Workspaces types
    1. Master
    2. Production
    3. Productive
    4. Non production
3. Versions
4. Options for work flows
    1. Gitflow
    2. Trunk based development

##  Current status

1. The current flow is not fully followed 100% of the time.

##  Current limitations

1. Feature flags are not being implemented 100% of the time

##  Current issues

1. Three different flows to consider:
    1. Jira
    2. Git
    3. VTEX

##  Next steps

1. Clear all unneeded branches in GitHub
2. Clear all unneeded PRs in GitHub
3. To use a CI/CD tool
4. Test automation
    1. Unit
    2. UAT
5. Visible version in frontend / backend
6. Deployment flow: Local -\> Productive WS -\> QA -\> Production
7. Flow:


##  Reference materials

1. [Git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
2. [Trunk based development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development)
3. [VTEX local development](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace)
