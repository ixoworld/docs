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
| accepted (stable route) | `/sdk-reference/oracle-ai-sdk` | keep existing route | Slug migration not yet required for canonical naming | Canonical docs name is handled in content and mapping references first |
| accepted (stable route) | `/mcp/model-context-protocol` | keep existing route | H1 and body fixes are sufficient without slug migration | Prefer stable route first |
| added | n/a | `/reference/networks-and-endpoints` | Establish canonical home for endpoint and network literals | New reference route |
| added | n/a | `/reference/authentication-matrix` | Establish canonical home for auth headers and surface-level auth ownership | New reference route |
| added | n/a | `/reference/product-and-sdk-map` | Establish canonical home for product-to-SDK naming and route mapping | New reference route |

Update this table whenever a decision is made.
