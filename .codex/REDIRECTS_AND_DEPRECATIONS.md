# Redirects and deprecations

Use this file whenever a docs route, page label, or public surface name changes.

## General rules

### Canonical links first
Always update docs content to link directly to the canonical destination route.
Treat redirects and stubs as compatibility layers for legacy/external traffic, not as an internal linking strategy.

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
2. Update all internal links to the new canonical route.
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
| changed | `/sdk-reference/oracle-ai-sdk` | `/sdk-reference/oracle-adk` | ADK slug for Personal Agent ADK (`@ixo/assistant-sdk`) | Internal links use canonical route; compatibility redirect retained in `docs.json` |
| accepted (stable route) | `/mcp/model-context-protocol` | keep existing route | H1 and body fixes are sufficient without slug migration | Prefer stable route first |
| changed | `/articles/ixo-protocol` | `/protocols/ixo-protocol` | Protocol concept docs consolidated under canonical `protocols/` directory | Internal links and nav updated |
| changed | `/articles/ixo-blockchain` | `/protocols/ixo-protocol` | Duplicate IXO Protocol concept page removed in favor of one canonical protocol page | Internal links and nav updated |
| deprecated (stub) | `/api-docs/*` | canonical `api-reference/*` routes | Legacy API docs tree replaced with transitional stubs | Stubs point to closest canonical API or guide route by topic |
| changed | `/spatial-web-stack/*` | `/ixo-stack/*` | Canonical stack route namespace normalized to IXO naming | Directory renamed, internal links updated to canonical routes, compatibility redirects retained in `docs.json` |
| changed | `/ixo-stack/sdks/oracle-agent-sdk`, `/spatial-web-stack/sdks/oracle-agent-sdk` | `/sdk-reference/oracles-client-sdk` | Old route represented the client-facing oracle interface, now mapped to the canonical Oracles Client SDK page | Internal links use canonical route; ADK remains canonical at `/sdk-reference/agentic-oracles-adk` for service-side scaffolding/deployment |
| changed | `/ixo-stack/sdks/ixo-matrix-sdk`, `/spatial-web-stack/sdks/ixo-matrix-sdk` | `/sdk-reference/matrix-client-sdk` | Legacy SDK stub replaced with direct redirect to Matrix Client SDK reference | Internal MDX links updated |
| changed | `/ixo-stack/sdks/intro-sdks`, `/spatial-web-stack/sdks/intro-sdks` | `/sdk-reference/index` | Legacy IXO Stack SDK intro stub replaced with direct redirect to SDK reference index | Internal MDX links updated |
| changed | `/ixo-stack/sdks/signx-sdk`, `/spatial-web-stack/sdks/signx-sdk` | `/sdk-reference/signx-sdk` | Legacy stub redirected to SignX SDK reference | Stubs retained as pointers |
| changed | `/ixo-stack/sdks/jambo-wallet-sdk`, `/spatial-web-stack/sdks/jambo-wallet-sdk` | `/sdk-reference/jambo-wallet-sdk` | Legacy stub redirected to JAMBO PWA SDK reference | Stubs retained as pointers |
| changed | `/ixo-stack/sdks/ixo-multiclient-sdk`, `/spatial-web-stack/sdks/ixo-multiclient-sdk` | `/sdk-reference/multiclient-sdk` | Legacy stub redirected to MultiClient SDK reference | Stubs retained as pointers |
| changed | `/guides/dev/spatial-web-sdks` | `/guides/dev/ixo-stack-sdks` | Developer SDK hub slug aligned to IXO Stack naming | Internal links use canonical route; compatibility redirect retained in `docs.json` |
| added | n/a | `/reference/networks-and-endpoints` | Establish canonical home for endpoint and network literals | New reference route |
| added | n/a | `/reference/authentication-matrix` | Establish canonical home for auth headers and surface-level auth ownership | New reference route |
| added | n/a | `/reference/product-and-sdk-map` | Establish canonical home for product-to-SDK naming and route mapping | New reference route |
| changed | `/build-an-oracle/how-it-works/architecture` | `/build-an-oracle/understand/architecture` | Audience-split IA: concept pages moved under `understand/` to signal optional reading | Builder tracks live under `build/` |
| changed | `/build-an-oracle/how-it-works/request-lifecycle` | `/build-an-oracle/understand/request-lifecycle` | Audience-split IA | Same as above |
| changed | `/build-an-oracle/how-it-works/plugins-vs-skills` | `/build-an-oracle/understand/plugins-vs-skills` | Audience-split IA | Same as above |
| changed | `/build-an-oracle/how-it-works/contexts` | `/build-an-oracle/understand/contexts` | Audience-split IA | Same as above |
| changed | `/build-an-oracle/how-it-works/meta-tools-and-loading` | `/build-an-oracle/understand/meta-tools-and-loading` | Audience-split IA | Same as above |
| changed | `/build-an-oracle/plugins/overview` | `/build-an-oracle/build/overview` | Build-track index — entry point for developers | Replaces the conceptual plugins overview |
| changed | `/build-an-oracle/plugins/anatomy` | `/build-an-oracle/understand/plugin-anatomy` | Plugin internals are concept material | Renamed to make subject explicit |
| changed | `/build-an-oracle/plugins/manifest` | `/build-an-oracle/understand/manifest` | Manifest is a concept; schema reference lives at `/reference/manifest-schema` | Concept vs reference split |
| changed | `/build-an-oracle/plugins/visibility` | `/build-an-oracle/build/plugin-recipes/set-visibility` | Recipe is the developer destination | Concept half lives at `/understand/visibility-tiers` |
| changed | `/build-an-oracle/plugins/tools` | `/build-an-oracle/build/plugin-recipes/add-a-tool` | Recipe-style task page | Code-first, code↔docs links |
| changed | `/build-an-oracle/plugins/sub-agents` | `/build-an-oracle/build/plugin-recipes/add-a-sub-agent` | Recipe-style task page | Same |
| changed | `/build-an-oracle/plugins/middlewares` | `/build-an-oracle/build/plugin-recipes/add-a-middleware` | Recipe-style task page | Same |
| changed | `/build-an-oracle/plugins/http-endpoints` | `/build-an-oracle/build/plugin-recipes/add-http-endpoints` | Recipe-style task page | Same |
| changed | `/build-an-oracle/plugins/shared-state` | `/build-an-oracle/build/plugin-recipes/share-state` | Recipe-style task page | Concept half lives at `/understand/shared-state` |
| changed | `/build-an-oracle/plugins/config-and-env` | `/build-an-oracle/build/plugin-recipes/add-config-and-env` | Recipe-style task page | Same |
| changed | `/build-an-oracle/plugins/dependencies` | `/build-an-oracle/build/plugin-recipes/declare-dependencies` | Recipe-style task page | Same |
| changed | `/build-an-oracle/plugins/write-your-first` | `/build-an-oracle/build/write-a-plugin` | Centerpiece end-to-end recipe | Renamed for clarity |
| changed | `/build-an-oracle/plugins/testing` | `/build-an-oracle/build/test-your-oracle` | Recipe-style task page | Scoped to whole-oracle testing, not plugin-only |
| changed | `/build-an-oracle/plugins/catalog` | `/build-an-oracle/reference/bundled-plugins/overview` | Catalog accordion split into one reference page per plugin | Each bundled plugin is now individually addressable |
| changed | `/build-an-oracle/building/create-oracle-app` | `/build-an-oracle/build/create-oracle-app` | Build-track consolidation under `build/` | Same content, shorter path |
| changed | `/build-an-oracle/building/using-bundled-plugins` | `/build-an-oracle/build/enable-bundled-plugins` | Build-track consolidation; verb-led title | Developer-POV naming |
| changed | `/build-an-oracle/building/identity-and-auth` | `/build-an-oracle/build/identity-and-auth` | Build-track consolidation | Same |
| changed | `/build-an-oracle/building/observability` | `/build-an-oracle/build/observability` | Build-track consolidation | Same |
| changed | `/build-an-oracle/building/deployment` | `/build-an-oracle/build/deploy` | Build-track consolidation; verb-led title | Same |
| added | n/a | `/build-an-oracle/for-ai-agents` | Dense single-page entry for AI tools scaffolding oracles | Mirrors AGENTS.md / llms.txt convention |
| added | n/a | `/build-an-oracle/build/overview` | Build-track index | Replaces conceptual plugin overview as developer entry |
| added | n/a | `/build-an-oracle/understand/what-is-qiforge` | Extracted mental-model summary | Lets the landing stay lean |
| added | n/a | `/build-an-oracle/reference/bundled-plugins/<plugin>` | One reference page per bundled plugin | 14 leaf pages + overview |

Update this table whenever a decision is made.
