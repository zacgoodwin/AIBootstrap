# PR Score framework

##  Goals

The goal of this proposal is to establish a structured and effective Pull Request (PR) review process that enhances team collaboration, ensures code quality, and supports team growth. While it is ideal for all team members to participate in PR reviews, it is crucial to implement a phased approach that upholds our standards of security, maintainability, and best coding practices.

##  Score framework

- Set a score for PRs:
    - High
    - Medium
    - Low
- Based on the following criteria:
    - complexity
        - high
        - medium
        - low
    - Jira ticket priority
        - highest
        - high
        - medium
        - low
    - Roadmap priority
        - Go live critical
        - Post go live
        - Regions roll out
    - repo
        - add-to-list
        - b2b-quotes-graphql
        - b2b-quotes
        - checkout
        - uselectrical-integrations
        - uselectrical-middleware
        - minicart
        - storefront-permissions-ui
        - b2bstore
        - usesi-quickorder
        - usesi-algolia
        - usesi-telemarketing
        - usesi-zendesk
        - usesi-edition
        - usesi-styleguide
        - order-sync-service
        - organization
        - Sentry-client-monitor
        - usesi-shopper
        - Usesi-apps
        - Session listener
    - Skill / knowledge
        - Expert
        - Advanced
        - Intermediate
    - Type of change
        - Hot fix
        - Bug fix
        - New feature
        - Breaking change
        - Technical improvement
        - Non functional
    - Technology
        - React
        - Node
        - VTEX IO app
        - Algolia
    - Size based on files touched
        - Small
        - Medium
        - Large
    - Potential Impact
        - High
        - Medium
        - Low

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  |  | **Score by criteria value** |  |  |  |
| **ID** | **Criteria** | **Low** | **Medium** | **High** | **Weight** |
| 1 | Jira ticket priority | Lowest, Low | Medium | High, Highest | 1 |
| 2 | Roadmap priority |  | Post Go live | Go live critical | 1 |
| 3 | Sprint | Future in backlog | Future in backlog | Current | 1 |
| 4 | Repo | Session-listener Add-to-list Usesi-telemarketing Usesi-zendesk Usesi-styleguide Sentry-client-monitor Usesi-shopper | B2b-quotes-graphql B2b-quotes Minicart Storefront-permissions-ui Usesi-quickorder Usesi-algolia Usesi-edition Organization | checkout Uselectrical-integrations B2bstore Order-sync-service Usesi-apps | 2 |
| 5 | Skill level required (PR reviewer) | Intermediate | Advanced | Expert | 2 |
| 6 | Type of change | Non functional Styles | Bug fix Technical improvement General improvement to existent functionality | hot fix New feature Breaking change Security vulnerability fix | 2 |
| 7 | Technology | Algolia | Node, JS, punchout | React TS VTEX IO app | 3 |
| 8 | Number of files in PR | \< 5 | 5 \<= number of files \<= 10 | \> 10 | 1 |
| 9 | Number of commits in PR | \< 5 | 5 \<= number of files \<= 10 | \> 10 | 1 |
| 10 | Potential impact / risk | Low | Medium | High | 3 |
| 11 | Availability (PR reviewer’s time) (considering Time Zone too) | Low | Medium | High | 1 |
| 12 | Given score by developer (excluding any other criteria, opinion, a feeling) | Low | Medium | High | 3 |
| 13 | Given complexity by developer (excluding any other criteria, opinion, a feeling) | Low | Medium | High | 3 |
| 14 | Has unit tests? |  | Yes | No | 3 |

##  Other considerations

1. Do not close PRs when they have request for changes
2. Always keep the PR up to date with main branch
    1. And resolve conflicts if needed
3. Delete branch once PR is merged
4. Lock PR after it was approved
    - No modification should be made after approving

##  References

1. [VTEX TypeScript Style Guide](https://github.com/vtex/typescript/blob/main/docs/Style%20Guide.md)
