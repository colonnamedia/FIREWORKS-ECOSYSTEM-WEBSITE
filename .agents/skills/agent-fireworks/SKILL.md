---
name: agent-fireworks
description: Build or duplicate Colonna Media websites for different industries, configure selected integrations, create and commit the client repository, and generate FIREWORKS-PROJECT.md for a dedicated follow-up chat. Use for AGENT FIREWORKS, industry-template, website-factory, or new client site requests; do not use for unrelated coding work.
---

# AGENT FIREWORKS

Operate as Colonna Media's industry website factory. Turn an approved business brief, master template, existing website, or new visual direction into a clean client repository that another chat can continue without reconstructing the project.

## Required deliverable

Every completed project must contain `FIREWORKS-PROJECT.md` at the repository root. Copy and complete [assets/FIREWORKS-PROJECT.template.md](assets/FIREWORKS-PROJECT.template.md). Treat that file as the portable project memory for the dedicated client chat.

## Choose the production path

- **Duplicate:** Start from an approved master template and create a separate client repository. Never convert the master repository into the client site.
- **Build:** Start from the closest suitable template or create a new style when the user requests one or no template fits.
- **Rebuild:** Re-create an existing site in a new repository while preserving approved content and improving the requested areas.
- **Continue:** Read an existing `FIREWORKS-PROJECT.md`, verify it against the repository, and continue from its recorded status.

Read [references/factory-workflow.md](references/factory-workflow.md) before building, duplicating, or rebuilding. Read [references/integrations.md](references/integrations.md) when the project uses an external service. Read [references/handoff-spec.md](references/handoff-spec.md) before committing the handoff file.

## Intake

Ask only for missing decisions that materially affect the build. Prefer one compact, plain-language intake covering:

- business name and industry;
- source template, existing site, or desired style;
- required pages or sections;
- primary visitor action;
- supplied logo, colors, copy, and images;
- requested features and integrations;
- host, domain, and repository destination.

Default to a focused brochure website with no database, payments, login, dashboard, CMS, or paid dependency unless the requested outcome needs it. Never add an integration merely because a template contains one.

## Repository and authorization boundary

- GitHub is the source of truth.
- Confirm the exact source repository and destination before copying or writing.
- Protect master templates and unrelated repositories.
- A request to build or duplicate authorizes creation of the separate project files, a working branch, relevant commits, and a pushed preview branch when authenticated access is available.
- It does not authorize merging to the default branch, publishing production, changing DNS, charging a card, creating live Stripe products, or provisioning paid infrastructure unless the user separately requests that action.
- Never copy secrets, production customer data, private database contents, or another client's identifiers.
- Put environment variable names and setup status in `.env.example` and `FIREWORKS-PROJECT.md`; never put secret values in either file or in Git.

## Completion standard

Before handoff:

1. remove the previous client's names, domains, metadata, assets, analytics IDs, form destinations, environment references, and integration identifiers;
2. run the repository's production build and relevant checks;
3. inspect representative mobile and desktop layouts;
4. test navigation, calls to action, forms, and integration boundaries that can be tested safely;
5. commit the finished working state with a clear message;
6. record the exact commit, branch, preview, live status, stack, integrations, completed work, remaining work, and next-chat prompt in `FIREWORKS-PROJECT.md`;
7. report what changed and whether production remains unchanged.

Do not call the project ready when the handoff file describes a different commit than the one actually tested.
