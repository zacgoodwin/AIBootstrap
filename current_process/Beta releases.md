# Beta releases

|  |  |
| --- | --- |
| **Driver** | USESI Team |
| **Approver** | @Zac Goodwin |
| **Contributors** | @Christian Varela |
| **Informed** | @Steve Parker |
| **Objective** | To be able to install and test new feature and / or bugs implementations in VTEX productive WS without blocking deployments or flow with Git |
| **Key outcomes** | - Reduced blocked deployments |
| **Status** | IN PROGRESS |

##  Goal

This is a foundation block to start implementing CI / CD. The intention is to have the tools that help to implement CI / CD in a way that allows to deploy as soon as the item is ready for deployment instead of waiting for weekly releases.  
Beta releases in particular will help to gain momentum with deployments and to unblock deployments for common functionality.

##  Problem statement

- Currently when testing some functionality or bugs implementations, sometimes deployments to production are blocked due to:
    - The fact that we have weekly batch deployments
    - Some functionality doesn't pass the expectations the first time
    - Multiple and simultaneous functionality for the same repo
- We think that if we implement beta releases in VTEX publishing flow, we will be able to reduce the incidents related to blocked deployments

##  Scope

| **Must have:** | - Conditional criteria to use beta releas |
| --- | --- |
| **Nice to have:** | - Automated determination, decision and actions taken |
| **Not in scope:** | - Beta customer facing interfaces - A/B testing mechanism |

##  Context

###  What’s beta releases?

- It's a resource / tool to be used in the SDLC flow as a foundation block to implement CI / CD and move away from weekly deployments.
- It's a mechanism / technique that takes advantage of the fact that Application release cycles are decoupled between Git and VTEX
    - Git
        - We use GitHub to store our Git repos
        - We follow Semantic Versioning 2.0.0 (SemVer) for versioning
        - We follow Keep a CHANGELOG for additional reference
        - We use Trunk Based Development
    - VTEX
        - We use VTEX App ecosystem
- It allows
    - To be able to do a deployment cycle with a beta release in VTEX
        - without merging to main branch in Git
    - To have dependencies separated before merging to main
    - To install in productive and master WS in QA

###  What is not?

- Beta releases in this context don't have the intention to be exposed to any customer facing interfaces.
- This is not related to A/B testing or anything targeting customer segments for experimentation.

##  How it works?

- This is a way to take advantage of the fact that Git and VTEX releasing and publishing mechanisms are decoupled.
- The current flow is not compromised and it gives us the ability to publish a release (a beta release) in VTEX
    - but without merging to main branch in Git
- Right before merging a PR:
    - The Gatekeeper (PR reviewer) modifies the manifest.json file for the repo (which is not allowed in the regular flow during the PR life) to have a beta version
- The version has to be in the form: `major.minor.patch-beta.sequence`, where:
    - `major.minor.patch` is the most updated version in main branch
        - "patch" needs to be the "plus one" of the current one (due to VTEX limitations)
    - `beta` is a constant part of the version
        - it could be anything, but we should use "beta"
    - `sequence` starts with "1" and continues to grow as we might require changes after starting our beta release / publishing
- Example, if current version is 1.2.2, then our beta version would be:
    - current `major.minor.patch+1` =\> `1.2.3-beta.1`
- Consider the following diagram

Beta releases integrated in Trunk Based Development

Take a look at the following detailed flow for the different actors and systems.

- This flow is an **optional flow**, it doesn’t have to be implemented to every single PR
- The conditions to apply this are:
    - For functionality that could potentially block deployments
    - Criteria to have in mind for candidate efforts to be treated as beta releases
        - By repository
            - checkout
            - integration
            - b2bstore
            - order sync
        - By functionality
            - Critical
                - Anything related to:
                    - Order placement
                    - Authentication
            - Greater or equal than minor releases
        - By human factor
            - The Gatekeeper determines if despite what the previous criteria says, the decision should be opposite to those factors

##  Considerations

- We **should never **install or deploy beta releases in a production account in any productive or master WS
- Beta releases is a plugin functionality and it doesn't need to be followed all the time
- Tests by QA and USESI teams should be perform as soon as possible
- Due to VTEX publishing version limitations:
    - Every time a beta version is created, it has to consider last published version in VTEX patch plus 1
    - Every time a regular version is created, it has to consider last published version in VTEX too (including beta releases)
- Instructions have been updated in all repos in the CONTRIBUTING.md file

##  Related links

- [Semantic versioning](https://semver.org/)
- [Keep a CHANGELOG](https://keepachangelog.com/en/1.1.0/)
- [Trunk Based Development](https://trunkbaseddevelopment.com/)
- [Deploying a new app version in VTEX](https://developers.vtex.com/docs/guides/vtex-io-documentation-making-your-new-app-version-publicly-available)
