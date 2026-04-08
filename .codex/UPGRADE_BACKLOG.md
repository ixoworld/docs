# Documentation upgrade backlog

This backlog is the operating work plan for Codex.

Use checkboxes to track completion. Keep task summaries short and file-specific.

## Phase 0 — Governance foundation

- [ ] Add `AGENTS.md` and the `.codex/` governance pack to the repo root.
  - Done when: the files are committed and referenced by contributors.

- [ ] Add a docs-facing source-of-truth note in the repo README or contributor instructions stating that the current writable docs source is this Mintlify repo, not the archived legacy GitBook repo.
  - Done when: contributors are not pointed at the archived repo by mistake.

- [ ] Add or plan site QA commands for:
  - MDX lint
  - link check
  - terminology/style lint
  - Done when: the desired command set is documented, even if implementation is a separate task.

## Phase 1 — Canonical naming rollout

### SDK naming

- [ ] Normalize `guides/dev/spatial-web-sdks.mdx`.
  - Fix:
    - separate assistant vs oracles naming
    - stop calling `@ixo/assistant-sdk` an “Oracles SDK”
    - normalize MultiClient and Matrix naming
    - tighten installation and setup examples
  - Done when:
    - all SDK labels match the canonical taxonomy
    - package identifiers are shown in code font
    - no mixed-generation naming remains

- [ ] Normalize `guides/dev/overview.mdx`.
  - Fix:
    - `IXO Matrix SDK` -> `IXO Matrix Client SDK`
    - `Oracle Agent SDK` -> `IXO Oracles SDK`
    - MultiClient naming consistency
  - Done when:
    - the overview matches the canonical taxonomy and points to the right SDK pages

- [ ] Rewrite `sdk-reference/multiclient-sdk.mdx`.
  - Fix:
    - H1 becomes `IXO MultiClient SDK`
    - remove “Spatial Web Multiclient SDK” drift
    - clarify relationship to protocol/network
  - Done when:
    - H1, description, and prose are canonical

- [ ] Rewrite `sdk-reference/matrix-client-sdk.mdx`.
  - Fix:
    - ensure consistent use of `IXO Matrix Client SDK`
    - remove `IXO Matrix SDK` drift
  - Done when:
    - page title, description, and adjacent references are canonical

- [ ] Rewrite `sdk-reference/oracle-ai-sdk.mdx`.
  - Fix:
    - convert this page to `IXO Assistant SDK`
    - remove Oracle naming from assistant/chat UI content
    - replace dead/private CTA language with accurate wording
  - Done when:
    - the page no longer presents assistant functionality as an oracle SDK

- [ ] Decide the public docs home for the oracle package.
  - Candidate outcomes:
    - create `sdk-reference/oracles-sdk.mdx`
    - or rename/create `sdk-reference/oracle-agent-sdk.mdx` with public H1 `IXO Oracles SDK`
  - Done when:
    - assistant and oracle surfaces each have one canonical page

- [ ] Update `sdk-reference/index.mdx` and `mint.json` to match the new SDK taxonomy.
  - Done when:
    - nav labels and landing page labels match the canonical names

### MCP naming

- [ ] Rewrite `mcp/model-context-protocol.mdx`.
  - Fix:
    - `Model Context Protocols (MCPs)` -> `Model Context Protocol (MCP)`
    - add `Server` suffix to server names
    - clarify what servers actually exist vs are planned
    - remove or replace broken `/api-reference/mcp` reference if that route does not exist
  - Done when:
    - page title, description, and server inventory are canonical and non-ambiguous

### Platform and solution naming

- [ ] Normalize `platforms/Emerging/intro-emerging.mdx`.
  - Fix:
    - declare whether the page is about the platform family or the household-energy solution
  - Done when:
    - scope is explicit in title, description, and first paragraph

- [ ] Normalize scope language across:
  - `platforms/Emerging/dmrv.mdx`
  - `platforms/Emerging/emerging-dmrv.mdx`
  - `platforms/Emerging/energy-systems.mdx`
  - `platforms/Emerging/household-monitoring.mdx`
  - `platforms/Emerging/household-reporting.mdx`
  - `platforms/Emerging/sdg-monitoring.mdx`
  - `platforms/Emerging/digital-identifiers.mdx`
  - `platforms/Emerging/registry.mdx`
  - Done when:
    - each page clearly states whether it documents platform capability or the household-energy implementation

## Phase 2 — Broken links, false CTAs, and stale references

- [ ] Audit and fix internal links in:
  - `platforms/Emerging/emerging-api.mdx`
  - `platforms/Emerging/data-integrity.mdx`
  - `api-reference/blocksync-graphql-api.mdx`
  - `guides/dev/overview.mdx`
  - `sdk-reference/*.mdx`
  - Done when:
    - no touched page contains a broken internal link or dead CTA

- [ ] Remove or fix dead-end CTAs in:
  - `sdk-reference/signx-sdk.mdx`
  - `sdk-reference/jambo-wallet-sdk.mdx`
  - `sdk-reference/oracle-ai-sdk.mdx`
  - any adjacent SDK pages with unlabeled or private source references
  - Done when:
    - every CTA is clickable, accurate, and useful

- [ ] Update stale future-tense wording in:
  - `articles/ixo-matrix.mdx`
  - any page using “upcoming”, “coming soon”, or “new” without a date and owner
  - Done when:
    - time-sensitive wording is either removed, dated, or linked to an owned roadmap

## Phase 3 — Quickstarts, user journeys, and page-purpose fixes

- [ ] Rewrite `guides/hands-on.mdx` into a real quickstart.
  - Include:
    - prerequisites
    - a concrete success path
    - exact verification step
    - next steps
  - Done when:
    - a new reader can complete one real outcome end to end

- [ ] Expand `guides/users/`.
  - Start with:
    - improve `guides/users/intro-users.mdx`
    - decide whether `guides/users/ai-companion.mdx` is canonical and visible in nav
    - add missing task pages for the most important user workflows
  - Done when:
    - the User Guides section is more than a placeholder

- [ ] Split “overview” pages that currently try to be both conceptual and procedural.
  - Start with:
    - `guides/dev/spatial-web-sdks.mdx`
    - `guides/dev/overview.mdx`
    - `articles/ixo-matrix.mdx`
  - Done when:
    - each page has one primary job

## Phase 4 — Shared source-of-truth pages

- [ ] Create `reference/networks-and-endpoints.mdx`.
  - Own:
    - environment names
    - chain IDs
    - base URLs
    - stability / deprecation notes
  - Done when:
    - other pages can link here instead of repeating network literals

- [ ] Create `reference/authentication-matrix.mdx`.
  - Own:
    - auth method by product/API
    - token/header format
    - where to get credentials
    - error patterns
  - Done when:
    - auth guidance is no longer scattered across guides and APIs

- [ ] Create `reference/product-and-sdk-map.mdx`.
  - Own:
    - products
    - SDK docs names
    - exact package identifiers
    - canonical routes
  - Done when:
    - surface mapping has one shared reference home

## Phase 5 — Information architecture cleanup

- [ ] Refactor `mint.json` navigation to reduce overlap between:
  - `Guides`
  - `Developers`
  - `SDKs`
  - `Articles`
  - Done when:
    - each group has a clear purpose and there is less duplicate routing to similar concepts

- [ ] Review duplicate concept placement across:
  - `guides/`
  - `guides/dev/`
  - `articles/`
  - `platforms/Emerging/`
  - Done when:
    - each major concept has one canonical home

## Phase 6 — Editorial polish and QA

- [ ] Run a repo-wide grammar and formatting cleanup after structural fixes.
  - Done when:
    - spacing, punctuation, malformed placeholders, and merged sentences are cleaned up

- [ ] Add terminology/style linting driven by `.codex/TERMINOLOGY_MAP.yml`.
  - Done when:
    - banned aliases can be caught automatically

- [ ] Add broken-link checking to CI.
  - Done when:
    - new link rot is blocked before merge
