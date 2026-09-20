# FIREWORKS Project Handoff — {{PROJECT_NAME}}

> Use this file as the source of truth for continuing this website in a dedicated chat. Verify it against the repository before changing anything. Never place secrets in this file.

## Project snapshot

| Field | Current value |
|---|---|
| Client / business | {{CLIENT_NAME}} |
| Industry | {{INDUSTRY}} |
| Repository | {{REPOSITORY_URL}} |
| Default branch | {{DEFAULT_BRANCH}} |
| Working branch | {{WORKING_BRANCH}} |
| Tested implementation commit | {{TESTED_COMMIT}} |
| Handoff commit | {{HANDOFF_COMMIT}} |
| Hosting provider | {{HOSTING_PROVIDER}} |
| Preview URL | {{PREVIEW_URL}} |
| Live URL | {{LIVE_URL}} |
| Live-site status | {{LIVE_STATUS}} |
| Last verified | {{VERIFIED_DATE}} |

## Goal and approved scope

{{PROJECT_GOAL_AND_SCOPE}}

## Source and design direction

- Source template or prior site: {{SOURCE}}
- Reason selected: {{SOURCE_REASON}}
- Approved visual direction: {{VISUAL_DIRECTION}}
- Brand assets and locations: {{BRAND_ASSETS}}
- Important design constraints: {{DESIGN_CONSTRAINTS}}

## Stack and commands

| Item | Value |
|---|---|
| Framework / runtime | {{STACK}} |
| Package manager | {{PACKAGE_MANAGER}} |
| Install | `{{INSTALL_COMMAND}}` |
| Local development | `{{DEV_COMMAND}}` |
| Production build | `{{BUILD_COMMAND}}` |
| Test / lint | `{{TEST_COMMAND}}` |
| Output directory | {{OUTPUT_DIRECTORY}} |

## Pages, routes, and primary actions

{{ROUTES_AND_ACTIONS}}

## Forms and conversion paths

{{FORMS_AND_CONVERSIONS}}

## Integrations

| Provider | Purpose | Status | Project/resource reference | Environment variable names | Webhook or route | Remaining setup |
|---|---|---|---|---|---|---|
| {{PROVIDER}} | {{PURPOSE}} | {{STATUS}} | {{REFERENCE}} | {{VARIABLE_NAMES_ONLY}} | {{ROUTE}} | {{REMAINING_SETUP}} |

If there are no integrations, state `None selected` and confirm inherited integrations were removed.

## Deployment

{{DEPLOYMENT_CONFIGURATION}}

## Completed and verified

{{COMPLETED_AND_VERIFIED}}

## Remaining work

{{REMAINING_WORK}}

## Decisions that must be preserved

{{PRESERVED_DECISIONS}}

## Known issues or blockers

{{KNOWN_ISSUES}}

## Start the dedicated project chat with this prompt

```text
Use the attached FIREWORKS-PROJECT.md as the source of truth for this website. Inspect the repository and verify whether anything changed after the recorded commits before editing. Preserve the documented design, hosting, and integration decisions. Work on a separate branch and provide a current preview. Do not merge or publish until Anthony approves it.
```
