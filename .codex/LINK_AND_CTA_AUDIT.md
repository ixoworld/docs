# Link and CTA audit (verified)

## Verification basis

- Checked only links present in current MDX files.
- Internal links counted as broken only when the target route is absent from filesystem routes (with `/index` normalization).
- CTA issues include:
  - internal CTA target route missing
  - explicit dead-end anchor CTAs (`href="#"`)
- No speculative external URL failures are claimed here.

## Severity-ranked findings

### Critical

- `mcp/model-context-protocol.mdx` has 5 broken internal links and 5 missing-target CTAs (`/api-reference/mcp`, `/guides/mcp/*`).
- `platforms/Emerging/emerging-api.mdx` has 6 broken internal links and 6 missing-target CTAs.
- `platforms/Emerging/intro-emerging.mdx` has 5 broken internal links and 5 missing-target CTAs.
- `platforms/Emerging/data-integrity.mdx` has 4 broken internal links and 5 missing-target CTAs.
- `platforms/Emerging/domain-registration.mdx` has 4 broken internal links and 4 missing-target CTAs.
- `platforms/Emerging/energy-systems.mdx` has 3 broken internal links and 5 missing-target CTAs.

### High

- `guides/dev/domain-privacy.mdx` has 4 broken internal links and 4 missing-target CTAs.
- `guides/dev/domain-settings.mdx` has 4 broken internal links and 4 missing-target CTAs.
- `guides/dev/ixo-domains.mdx` has 3 broken internal links and 3 missing-target CTAs.
- `platforms/Emerging/credential-issuance.mdx` has 3 broken internal links and 3 missing-target CTAs.
- `platforms/Emerging/digital-vouchers.mdx` has 3 broken internal links and 3 missing-target CTAs.
- `platforms/Emerging/emerging-dmrv.mdx` has 3 broken internal links and 3 missing-target CTAs.
- `platforms/Emerging/itmo-schema.mdx` has 3 broken internal links and 3 missing-target CTAs.

### Medium

- `articles/ixo-blocksync.mdx` has 2 broken internal links and 2 missing-target CTAs.
- `articles/ixo-integrations.mdx` has 2 broken internal links and 2 missing-target CTAs.
- `api-docs/introduction.mdx` has 2 broken internal links and 2 missing-target CTAs.
- `platforms/Emerging/sdg-monitoring.mdx` has 2 broken internal links and 2 missing-target CTAs.
- `spatial-web-stack/networks/grpc-gateway.mdx` has 2 broken internal links and 2 missing-target CTAs.

### Dead-end CTA anchors

- `guides/users/ai-companion.mdx` has explicit dead-end CTAs:
  - `Feature Requests` -> `#`
  - `Video Tutorials` -> `#`

## Representative verified broken-link targets

- Missing MCP targets: `/api-reference/mcp`, `/guides/mcp/blockchain-mcp`, `/guides/mcp/client-mcp`, `/guides/mcp/matrix-mcp`, `/guides/mcp/oracle-mcp`
- Missing Emerging targets: `/platforms/Emerging/authentication`, `/platforms/Emerging/verification`, `/platforms/Emerging/service-endpoints`, `/platforms/Emerging/monitoring`, `/platforms/Emerging/registry-server`
- Missing API/reference targets: `/api-reference/blocksync-graphql-schema`, `/api-reference/introduction`, `/api-reference/entity`, `/api-reference/vouchers`, `/api-reference/credentials`
- Missing guide targets: `/guides/dev/payments`, `/guides/dev/privacy`, `/guides/dev/resources`, `/guides/dev/error-handling`, `/guides/users/faqs`

## Ownership recommendations for fix waves

- **Wave 1 (stabilize nav-visible pages first):**
  - `mcp/model-context-protocol.mdx`
  - `platforms/Emerging/emerging-api.mdx`
  - `platforms/Emerging/intro-emerging.mdx`
  - `platforms/Emerging/data-integrity.mdx`
  - `platforms/Emerging/domain-registration.mdx`
  - `guides/dev/domain-settings.mdx`
  - `guides/dev/domain-privacy.mdx`

- **Wave 2 (high-impact hidden or mixed-ownership pages):**
  - `platforms/Emerging/energy-systems.mdx`
  - `platforms/Emerging/emerging-dmrv.mdx`
  - `platforms/Emerging/itmo-schema.mdx`
  - `guides/dev/ixo-domains.mdx`
  - `articles/ixo-blocksync.mdx`
  - `articles/ixo-integrations.mdx`

- **Wave 3 (legacy parallel trees):**
  - `/api-docs/**` and `/spatial-web-stack/**` pages should be canonicalized or retired after link migration plan is agreed.

## Audit totals

- Broken internal links: **74**
- Internal CTA issues (missing target or dead-end): **79**
- Files with broken internal links: **32**
- Files with CTA issues: **33**
