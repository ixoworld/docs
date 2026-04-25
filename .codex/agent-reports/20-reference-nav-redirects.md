# Agent 20 report: reference layer, nav pass, redirects

## Scope completed

- Created canonical shared reference pages:
  - `reference/networks-and-endpoints.mdx`
  - `reference/authentication-matrix.mdx`
  - `reference/product-and-sdk-map.mdx`
- Updated authoritative nav/config in `docs.json` (single pass).
- Updated route decision ledger in `.codex/REDIRECTS_AND_DEPRECATIONS.md`.

## Canonical reference ownership added

1. `reference/networks-and-endpoints`
   - Owns endpoint and chain/network literals currently present in docs.
2. `reference/authentication-matrix`
   - Owns auth patterns and header formats by API surface.
3. `reference/product-and-sdk-map`
   - Owns canonical product/SDK naming map, package literals, and route map.

## Navigation/config updates applied

- `docs.json` tab label updates:
  - `Spatial Web` -> `IXO`
  - `APIs` -> `API Reference`
  - `SDKs` -> `SDK Reference`
- Added a `Reference` group under the `IXO` tab with:
  - `reference/networks-and-endpoints`
  - `reference/authentication-matrix`
  - `reference/product-and-sdk-map`

## Route decisions recorded

- `/sdk-reference/oracle-ai-sdk` redirects to `/sdk-reference/oracle-adk` (Personal Agent ADK).
- Accepted stable route: `/mcp/model-context-protocol` remains unchanged.
- Added new canonical reference routes listed above.
- No redirect stubs required in this pass because no existing route moved.

## Open items

- `Agentic Oracles SDK` canonical route remains pending in taxonomy/future IA cleanup.
- Endpoint availability/runtime validation remains operator-dependent and is intentionally not asserted beyond in-repo literals.
