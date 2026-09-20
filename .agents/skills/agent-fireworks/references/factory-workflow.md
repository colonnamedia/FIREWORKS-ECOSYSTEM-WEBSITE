# Website factory workflow

## 1. Resolve the project source

Identify whether the project starts from:

- an approved Colonna Media master template;
- a client website being rebuilt;
- an existing client repository;
- a newly approved visual direction.

Inspect the source before choosing a stack or duplicating it. Record why the source fits the industry and requested outcome. Do not select a template solely because its colors appear suitable.

## 2. Protect the source

For duplication, create a separate destination repository before client-specific edits. Never rename, repurpose, or publish over a master template repository.

When the destination repository already exists, inspect its status and preserve user changes. Stop for clarification if the destination contains unrelated work or appears to be another client's project.

## 3. Sanitize the duplicate

Search the complete destination for source-client residue, including:

- names, logos, domains, email addresses, phone numbers, locations, prices, legal language, and testimonials;
- image filenames, alt text, social previews, structured data, favicons, and downloadable files;
- form endpoints, booking links, analytics tags, pixels, tracking IDs, map embeds, and webhook URLs;
- environment variable files, project IDs, database URLs, price IDs, bucket names, and deployment configuration;
- README text, package metadata, comments, hidden routes, abandoned dashboards, and unused assets.

Replace approved information and use clearly labeled placeholders for missing information. Never invent client facts.

## 4. Configure the approved site

Keep the build proportional to the requested business outcome. Establish a clear primary call to action, accessible navigation, responsive layout, purposeful imagery, working forms, accurate metadata, and clean mobile behavior.

Use only necessary images. Optimize image size and delivery for the actual display. Preserve the existing host when continuing a project; do not move between Render, Vercel, or another provider without approval.

## 5. Add only selected integrations

Inspect the template for inherited integrations. Remove or disable integrations the client did not select. For every selected integration, follow [integrations.md](integrations.md), current official provider documentation, and available provider-specific skills.

Create `.env.example` when environment variables are required. Include variable names with safe explanations or blank values. Never commit `.env`, tokens, secret keys, database passwords, service-role keys, or webhook signing secrets.

## 6. Verify

Run the production build and the repository's existing tests or linters. Inspect mobile and desktop views. Test affected routes, buttons, forms, validation, success/error states, booking paths, and safe integration test flows.

Confirm that the build contains no stale client identity or unnecessary source-template assets. Confirm the latest preview corresponds to the exact tested commit.

## 7. Commit and hand off

Create or update `FIREWORKS-PROJECT.md` from the bundled template. Commit the website and handoff together so the file describes the committed project state. Push the working branch when authenticated access is available.

Do not merge or publish production without explicit approval. Provide the repository, branch, commit, newest preview, live-site status, and the handoff file location.

## New dedicated chat

The dedicated client chat begins from `FIREWORKS-PROJECT.md`, not from memory of the factory conversation. In the new chat, verify the file against current repository state before making changes.
