# Redirects and deprecations

Use this file whenever a docs route, page label, or public surface name changes.

## General rules

### Prefer stable routes
If a misleading page can be corrected by:
- changing the H1,
- updating the description,
- fixing the nav label,
- rewriting the body,

then keep the route.

### Change routes only when needed
Change a route only if the current route is:
- materially misleading,
- colliding with a different canonical surface,
- impossible to explain cleanly with the current slug.

## When a route changes

1. Add an entry to the ledger below.
2. Update all internal links.
3. Update `docs.json`.
4. Add a redirect or a short deprecation stub if the platform supports it.
5. Mention the route change in the task summary.

## Transitional stub guidance

If a redirect is not yet available, leave a temporary page at the old route with:
- the old title marked as deprecated
- one sentence saying the page moved
- a direct link to the new canonical page

Do not leave a full duplicate page at both routes.

## Naming-only changes

If only the public docs name changes:
- do not create a new route by default
- update H1, description, page body, and nav label first

Example:
- keep `/sdk-reference/multiclient-sdk`
- H1 becomes `IXO MultiClient SDK`

## Redirect ledger

| Status | Old route | New route | Reason | Notes |
|---|---|---|---|---|
| changed | `/sdk-reference/oracle-ai-sdk` | `/sdk-reference/oracle-adk` | ADK slug for Personal Agent ADK (`@ixo/assistant-sdk`) | Redirect configured in `docs.json` |
| accepted (stable route) | `/mcp/model-context-protocol` | keep existing route | H1 and body fixes are sufficient without slug migration | Prefer stable route first |
| changed | `/articles/ixo-protocol` | `/protocols/ixo-protocol` | Protocol concept docs consolidated under canonical `protocols/` directory | Internal links and nav updated |
| changed | `/articles/ixo-blockchain` | `/protocols/ixo-protocol` | Duplicate IXO Protocol concept page removed in favor of one canonical protocol page | Internal links and nav updated |
| deprecated (stub) | `/api-docs/*` | canonical `api-reference/*` routes | Legacy API docs tree replaced with transitional stubs | Stubs point to closest canonical API or guide route by topic |
| changed | `/spatial-web-stack/*` | `/ixo-stack/*` | Canonical stack route namespace normalized to IXO naming | Directory renamed, internal links updated, and explicit redirects added in `docs.json` |
| changed | `/ixo-stack/sdks/oracle-agent-sdk`, `/spatial-web-stack/sdks/oracle-agent-sdk` | `/sdk-reference/oracles-client-sdk` | Old route represented the client-facing oracle interface, now mapped to the canonical Oracles Client SDK page | Redirects updated in `docs.json`; ADK remains canonical at `/sdk-reference/agentic-oracles-adk` for service-side scaffolding/deployment |
| changed | `/ixo-stack/sdks/ixo-matrix-sdk`, `/spatial-web-stack/sdks/ixo-matrix-sdk` | `/sdk-reference/matrix-client-sdk` | Legacy SDK stub replaced with direct redirect to Matrix Client SDK reference | Internal MDX links updated |
| changed | `/ixo-stack/sdks/intro-sdks`, `/spatial-web-stack/sdks/intro-sdks` | `/sdk-reference/index` | Legacy IXO Stack SDK intro stub replaced with direct redirect to SDK reference index | Internal MDX links updated |
| changed | `/ixo-stack/sdks/signx-sdk`, `/spatial-web-stack/sdks/signx-sdk` | `/sdk-reference/signx-sdk` | Legacy stub redirected to SignX SDK reference | Stubs retained as pointers |
| changed | `/ixo-stack/sdks/jambo-wallet-sdk`, `/spatial-web-stack/sdks/jambo-wallet-sdk` | `/sdk-reference/jambo-wallet-sdk` | Legacy stub redirected to JAMBO PWA SDK reference | Stubs retained as pointers |
| changed | `/ixo-stack/sdks/ixo-multiclient-sdk`, `/spatial-web-stack/sdks/ixo-multiclient-sdk` | `/sdk-reference/multiclient-sdk` | Legacy stub redirected to MultiClient SDK reference | Stubs retained as pointers |
| changed | `/guides/dev/spatial-web-sdks` | `/guides/dev/ixo-stack-sdks` | Developer SDK hub slug aligned to IXO Stack naming | Redirect configured in `docs.json`; file renamed to `guides/dev/ixo-stack-sdks.mdx` |
| added | n/a | `/reference/networks-and-endpoints` | Establish canonical home for endpoint and network literals | New reference route |
| added | n/a | `/reference/authentication-matrix` | Establish canonical home for auth headers and surface-level auth ownership | New reference route |
| added | n/a | `/reference/product-and-sdk-map` | Establish canonical home for product-to-SDK naming and route mapping | New reference route |

Update this table whenever a decision is made.
