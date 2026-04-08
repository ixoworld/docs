# Content inventory evidence map

## Scope and method

- Inventory source: filesystem scan of all `*.mdx` files.
- Config authority used for nav comparison: `docs.json`.
- Exclusions: `.codex/templates/*`, `images/*` (non-routable docs assets/templates).
- Route normalization: `.../index.mdx` treated as route parent (`/api-reference`, `/sdk-reference`).

## Inventory summary

- Total MDX routes in filesystem: **139**
- Routes present in `docs.json` navigation: **54**
- Hidden/orphan routes (in filesystem, not in nav): **85**
- Nav routes missing backing files: **0**
- Verified broken internal links: **74** across **32** files
- Verified dead-end or missing-target CTAs: **79** across **33** files

## Full filesystem route inventory

```text
/JAMBO/intro-jambo
/JAMBO/jambo-tools
/api-docs/ai-companion-api/companion-api
/api-docs/blockchain-api/intro-rpc-api
/api-docs/blockchain-api/reference-rpc-api
/api-docs/blockchain
/api-docs/blocksync-api/blocksync-graphql
/api-docs/blocksync-api/schema-graphql
/api-docs/blocksync-graphql
/api-docs/claims
/api-docs/emerging-api/emerging-api
/api-docs/introduction
/api-docs/matrix-api/matrix-statebot-api
/api-reference/authentication
/api-reference/blocksync-graphql-api
/api-reference/errors
/api-reference/grpc-gateway-api
/api-reference/index
/api-reference/intro-apis
/api-reference/matrix-state-bot-api
/api-reference/pagination
/api-reference/registry-api
/api-reference/rpc-api
/articles/assets
/articles/cdt-systems
/articles/daos
/articles/deeds
/articles/domain-config
/articles/intro-articles
/articles/intro-platforms
/articles/investments
/articles/ixo-blockchain
/articles/ixo-blocksync
/articles/ixo-integrations
/articles/ixo-matrix
/articles/ixo-oracles
/articles/ixo-protocol
/articles/ixo-signx
/articles/orchestration
/articles/pods
/articles/projects
/changelog/overview
/core-concepts
/guides/causal-analysis
/guides/dev/authentication
/guides/dev/authz-custom
/guides/dev/authz
/guides/dev/bonds
/guides/dev/claims
/guides/dev/domain-privacy
/guides/dev/domain-settings
/guides/dev/entities
/guides/dev/evaluation-engine
/guides/dev/examples
/guides/dev/image-handling
/guides/dev/introduction
/guides/dev/ixo-claims
/guides/dev/ixo-domains
/guides/dev/liquid-staking
/guides/dev/overview
/guides/dev/session-keys
/guides/dev/smart-accounts
/guides/dev/spatial-web-sdks
/guides/dev/tokens
/guides/digital-certification
/guides/digital-mrv
/guides/digital-twins
/guides/dmrv
/guides/domain-registration
/guides/hands-on
/guides/intro-guides
/guides/ixo-oracles-architecture
/guides/overview
/guides/registry
/guides/users/ai-companion
/guides/users/intro-users
/introduction
/mcp/model-context-protocol
/models/intro-models
/platforms/Emerging/concepts
/platforms/Emerging/credential-issuance
/platforms/Emerging/data-integrity
/platforms/Emerging/digital-certification
/platforms/Emerging/digital-identifiers
/platforms/Emerging/digital-vouchers
/platforms/Emerging/distributor-onboarding
/platforms/Emerging/dmrv
/platforms/Emerging/domain-registration
/platforms/Emerging/emerging-api
/platforms/Emerging/emerging-dmrv
/platforms/Emerging/energy-systems
/platforms/Emerging/household-monitoring
/platforms/Emerging/household-reporting
/platforms/Emerging/intro-emerging
/platforms/Emerging/itmo-credentials
/platforms/Emerging/itmo-schema
/platforms/Emerging/kpt
/platforms/Emerging/qualitative-surveys
/platforms/Emerging/registry
/platforms/Emerging/sample-size
/platforms/Emerging/sdg-monitoring
/platforms/Emerging/stove-use-monitoring
/protocols/intro-protocols
/schemas/data-asset
/schemas/intro-schemas
/sdk-reference/index
/sdk-reference/jambo-wallet-sdk
/sdk-reference/matrix-client-sdk
/sdk-reference/multiclient-sdk
/sdk-reference/oracle-ai-sdk
/sdk-reference/signx-sdk
/spatial-web-stack/apps/intro-apps
/spatial-web-stack/apps/jambo/hello-jambo
/spatial-web-stack/apps/mission/hello-mission
/spatial-web-stack/apps/mobile/hello-mobile
/spatial-web-stack/apps/portal/hello-portal
/spatial-web-stack/apps/studio/hello-studio
/spatial-web-stack/blockchain/ixo-blockchain
/spatial-web-stack/core-concepts
/spatial-web-stack/intro-stack
/spatial-web-stack/matrix/ixo-matrix
/spatial-web-stack/matrix/matrix-encryption
/spatial-web-stack/networks/energy-chains
/spatial-web-stack/networks/grpc-gateway
/spatial-web-stack/networks/ibc-relayers
/spatial-web-stack/networks/impact-hub
/spatial-web-stack/networks/interchain-bridges
/spatial-web-stack/networks/intro-networks
/spatial-web-stack/networks/unl-chain
/spatial-web-stack/sdks/intro-sdks
/spatial-web-stack/sdks/ixo-matrix-sdk
/spatial-web-stack/sdks/ixo-multiclient-sdk
/spatial-web-stack/sdks/jambo-wallet-sdk
/spatial-web-stack/sdks/modules-sdk
/spatial-web-stack/sdks/oracle-agent-sdk
/spatial-web-stack/sdks/signx-sdk
/tutorials/intro-tutorials
/use-cases/intro-usecases
/wip
```

## `docs.json` navigation routes (authoritative visible nav)

```text
/introduction
/core-concepts
/articles/ixo-protocol
/guides/hands-on
/guides/dev/spatial-web-sdks
/guides/dev/domain-settings
/guides/digital-twins
/guides/domain-registration
/guides/dev/domain-privacy
/guides/dev/authentication
/guides/dev/ixo-claims
/guides/registry
/guides/digital-mrv
/guides/ixo-oracles-architecture
/mcp/model-context-protocol
/guides/users/intro-users
/articles/intro-platforms
/articles/intro-articles
/articles/cdt-systems
/articles/ixo-blockchain
/articles/ixo-matrix
/articles/ixo-blocksync
/articles/ixo-oracles
/articles/pods
/articles/projects
/platforms/Emerging/intro-emerging
/platforms/Emerging/concepts
/platforms/Emerging/digital-identifiers
/platforms/Emerging/credential-issuance
/platforms/Emerging/dmrv
/platforms/Emerging/household-monitoring
/platforms/Emerging/stove-use-monitoring
/platforms/Emerging/qualitative-surveys
/platforms/Emerging/sdg-monitoring
/platforms/Emerging/domain-registration
/platforms/Emerging/digital-certification
/platforms/Emerging/registry
/platforms/Emerging/digital-vouchers
/platforms/Emerging/kpt
/platforms/Emerging/data-integrity
/platforms/Emerging/itmo-schema
/platforms/Emerging/emerging-api
/api-reference
/api-reference/rpc-api
/api-reference/grpc-gateway-api
/api-reference/blocksync-graphql-api
/api-reference/matrix-state-bot-api
/api-reference/registry-api
/sdk-reference
/sdk-reference/multiclient-sdk
/sdk-reference/signx-sdk
/sdk-reference/matrix-client-sdk
/sdk-reference/oracle-ai-sdk
/sdk-reference/jambo-wallet-sdk
```

## Hidden route clusters (high signal)

- Legacy/parallel API docs tree: `/api-docs/**` (11 routes, hidden)
- Legacy/parallel stack tree: `/spatial-web-stack/**` (25 routes, hidden)
- Additional developer guides not in nav: `/guides/dev/**` hidden subset
- Thin but high-value hidden user page: `/guides/users/ai-companion`
- Hidden platform pages: `/platforms/Emerging/emerging-dmrv`, `/platforms/Emerging/energy-systems`, `/platforms/Emerging/household-reporting`, `/platforms/Emerging/itmo-credentials`, `/platforms/Emerging/sample-size`, `/platforms/Emerging/distributor-onboarding`
