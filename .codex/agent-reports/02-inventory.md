# Agent 02 report: inventory and evidence map

## Objective delivered

This report provides a verified evidence map for:

1. Filesystem MDX route inventory
2. Filesystem vs `docs.json` navigation comparison
3. Orphan pages, competing pages, broken links, and dead-end CTAs
4. Severity-prioritized recommendations for downstream content agents

Supporting artifacts:

- `.codex/CONTENT_INVENTORY.md`
- `.codex/LINK_AND_CTA_AUDIT.md`

## Key facts

- Filesystem MDX routes: **139**
- `docs.json` nav routes: **54**
- Orphan/hidden routes: **85**
- Nav routes with missing files: **0**
- Verified broken internal links: **74**
- Verified CTA issues (missing internal targets or `#` dead-ends): **79**

## Canonical ownership decision (confirmed)

- `/api-reference/` is the canonical API documentation surface.
  - Authoritative home for API overview, authentication, errors, pagination, and endpoint/interface references.
  - `/api-docs/**` is legacy/duplicate and should be merged into `/api-reference/**`, then converted to redirects/stubs per redirect policy.

- `/sdk-reference/` is the canonical SDK documentation surface.
  - Authoritative home for SDK overviews, install guidance, and SDK usage/reference content.
  - `/ixo-stack/sdks/**` is legacy/duplicate and should be merged into `/sdk-reference/**`, then converted to redirects/stubs per redirect policy.

## Priority findings (by severity)

### P0 - navigation-visible pages with heavy link failure

- `mcp/model-context-protocol.mdx`
- `platforms/Emerging/emerging-api.mdx`
- `platforms/Emerging/intro-emerging.mdx`
- `platforms/Emerging/data-integrity.mdx`
- `platforms/Emerging/domain-registration.mdx`

Why P0:

- High broken-link concentration on pages currently in visible nav.
- These pages currently route users into missing pages, reducing trust and task completion.

### P1 - nav-visible developer pages with reference/guide gaps

- `guides/dev/domain-settings.mdx`
- `guides/dev/domain-privacy.mdx`
- `guides/dev/authentication.mdx`
- `guides/users/intro-users.mdx`
- `api-reference/blocksync-graphql-api.mdx`

Why P1:

- These pages are in user paths and contain links to non-existent references/guides.

### P2 - hidden-but-important pages with quality debt

- `guides/users/ai-companion.mdx` (contains dead-end CTA anchors)
- `platforms/Emerging/energy-systems.mdx`
- `platforms/Emerging/emerging-dmrv.mdx`
- `platforms/Emerging/household-reporting.mdx`
- `platforms/Emerging/itmo-credentials.mdx`

Why P2:

- Hidden pages represent likely future surfaced documentation but have unresolved linkage and/or overlap.

## Duplicate and competing page sets

## Canonical merge candidates (same concept in multiple homes)

- SDK duplicates:
  - `sdk-reference/signx-sdk.mdx` vs `ixo-stack/sdks/signx-sdk.mdx`
  - `sdk-reference/jambo-wallet-sdk.mdx` vs `ixo-stack/sdks/jambo-wallet-sdk.mdx`
  - `sdk-reference/matrix-client-sdk.mdx` vs `ixo-stack/sdks/ixo-matrix-sdk.mdx` (naming drift)
  - `sdk-reference/multiclient-sdk.mdx` vs `ixo-stack/sdks/ixo-multiclient-sdk.mdx` (naming drift)

- API duplicates:
  - `api-reference/blocksync-graphql-api.mdx` vs `api-docs/blocksync-api/blocksync-graphql.mdx`
  - `api-reference/rpc-api.mdx` vs `api-docs/blockchain-api/reference-rpc-api.mdx`
  - `api-reference/matrix-state-bot-api.mdx` vs `api-docs/matrix-api/matrix-statebot-api.mdx`

- Domain/topic overlap:
  - `guides/domain-registration.mdx` vs `platforms/Emerging/domain-registration.mdx`
  - `guides/dmrv.mdx` / `guides/digital-mrv.mdx` vs `platforms/Emerging/dmrv.mdx` / `platforms/Emerging/emerging-dmrv.mdx`
  - `guides/digital-certification.mdx` vs `platforms/Emerging/digital-certification.mdx`

## Hidden pages that should likely be surfaced

High-signal hidden routes that match current nav intent:

- `guides/users/ai-companion`
- `api-reference/authentication`
- `api-reference/errors`
- `api-reference/pagination`
- `guides/dev/overview`
- `guides/dev/introduction`
- `guides/dev/evaluation-engine`
- `guides/dev/image-handling`

Rationale:

- These routes align directly with existing sections (`User Guides`, `APIs`, `Developers`) and can reduce dead-end links when surfaced with ownership.

## Sections with thin coverage

- `mcp/` has only one page (`mcp/model-context-protocol.mdx`) but links to multiple non-existent MCP guides.
- `guides/users/` has 2 pages total, with only 1 visible in nav and one containing dead-end CTAs.
- `models/`, `protocols/`, `tutorials/`, `use-cases/`, and `changelog/` each have a single page and are fully hidden.

## File-level recommendations for content agents

### Agent ownership split (proposed)

- **Agent A - MCP + API references**
  - Own: `mcp/model-context-protocol.mdx`, `api-reference/*`, and mapped `api-docs/*` duplicates
  - Goal: establish canonical API/MCP homes, then remove cross-links to non-existent routes

- **Agent B - Emerging platform/solution cluster**
  - Own: `platforms/Emerging/*` (all visible + hidden Emerging routes)
  - Goal: fix internal routing graph and enforce platform-vs-solution scope separation

- **Agent C - Developer guides cluster**
  - Own: `guides/dev/*` plus crosslinks from `guides/*`
  - Goal: resolve broken dev guide links, create/identify canonical guide landing references

- **Agent D - SDK canonicalization**
  - Own: `sdk-reference/*` and `ixo-stack/sdks/*`
  - Goal: one concept, one canonical SDK page; convert duplicates to redirects/stubs once links migrate

- **Agent E - User guides + orphan surfacing decisions**
  - Own: `guides/users/*` and nav surfacing proposals for hidden high-value routes
  - Goal: eliminate dead-end user CTAs and define minimal complete user journey

## Pages to merge (explicit)

- Merge all `ixo-stack/sdks/*` conceptual SDK duplicates into `sdk-reference/*` canonical pages.
- Merge `api-docs/*` endpoint duplicates into `api-reference/*` canonical pages (or keep as transitional stubs only).
- Merge overlapping dMRV/domain-registration concepts by assigning canonical ownership (general guides vs Emerging implementation).

## Links to verify next (priority queue)

1. All links from `mcp/model-context-protocol.mdx`
2. All links from `platforms/Emerging/emerging-api.mdx`
3. All links from `platforms/Emerging/intro-emerging.mdx`
4. All links from `guides/dev/domain-settings.mdx`
5. All links from `guides/dev/domain-privacy.mdx`
6. Dead-end anchors in `guides/users/ai-companion.mdx`

## Notes and constraints honored

- No content pages were rewritten.
- No nav config was edited.
- Broken-link and dead-end CTA claims are route-verified against filesystem routes.
