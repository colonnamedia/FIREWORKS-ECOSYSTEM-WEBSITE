# Integration rules

Use only the sections for services actually selected or detected in the project. Verify implementation details against current official documentation before writing integration code.

## Shared rules

- Record each provider, purpose, status, dashboard/project reference, environment variable names, webhook paths, and remaining setup in `FIREWORKS-PROJECT.md`.
- Record secret names, never secret values.
- Keep development, preview, and production configuration distinct when the provider supports it.
- Remove identifiers inherited from a template unless they belong to this client.
- Do not provision a paid resource, create a live financial object, or change production settings without specific authorization.
- When setup requires the user's dashboard action, stop at a clean boundary and list the exact remaining action.

## Stripe

Record the payment purpose, integration pattern, test/live status, products or price references, success/cancel routes, webhook route, and required variable names. Keep secret keys and webhook secrets server-side. Use test mode until the user approves live configuration. Never copy another client's product IDs, price IDs, connected account IDs, customer data, or webhook secrets.

## Neon

Record the database purpose, project/branch reference, schema and migration location, connection-variable names, and whether the application uses pooled or direct connections. Do not place a database password or full connection string in Git or the handoff file. Confirm how migrations are applied before deployment.

## Supabase

Record the project reference, authentication/database/storage features used, migration location, bucket names, required variable names, and row-level security status. Keep service-role credentials server-only. Do not assume that an anonymous or publishable key removes the need for correct RLS policies.

## Render

Record the service type and name, repository and branch, region when relevant, build/start commands, health-check path, auto-deploy behavior, environment variable names, preview/live URLs, and any `render.yaml` ownership. Keep an existing Render deployment on Render unless the user requests a move.

## Vercel

Record the project reference, framework/build settings, linked repository and production branch, preview/live URLs, environment scopes, and serverless functions used. Do not copy another project's IDs or production environment values.

## Cloudflare

Record whether Cloudflare is used for DNS, media delivery, R2, or another service; the non-secret account/resource references; domains; cache behavior; and required variable names. Treat DNS changes as a separate production action.

## Other services

Apply the shared rules to providers such as Resend, Calendly, Google Analytics, Meta Pixel, or a CMS. Document why the service exists and how the next chat can verify it without exposing credentials.
