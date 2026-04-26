# Documentation upgrade backlog

This backlog is the operating work plan for Codex.

Use checkboxes to track completion. Keep task summaries short and file-specific.

## Qi ICS narrative follow-ups

- [ ] Add a verified, runnable **Qi agent quickstart** (time-bounded walkthrough) once the canonical flow and packages are confirmed.
- [ ] Add any verified `@qi/*` (or successor) package identifiers to `reference/product-and-sdk-map.mdx` after engineering signs off—do not publish package literals from drafts alone.

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

- [ ] Normalize `guides/dev/ixo-stack-sdks.mdx` (renamed from `spatial-web-sdks`).
  - Done (naming rollout):
    - IXO Stack / IXO Stack SDKs naming and canonical slug `/guides/dev/ixo-stack-sdks`
  - Fix:
    - separate assistant vs oracles naming
    - stop calling `@ixo/assistant-sdk` an “Oracles SDK”
    - normalize MultiClient and Matrix naming
    - tighten installation and setup examples
  - Done when:
    - all SDK labels match the canonical taxonomy
    - package identifiers are shown in code font
    - no mixed-generation naming remains

- [x] Normalize `guides/dev/overview.mdx`.
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

- [ ] Rewrite `sdk-reference/oracle-adk.mdx`.
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

- [x] Rewrite `mcp/model-context-protocol.mdx`.
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

- [x] Audit and fix internal links in:
  - `platforms/Emerging/emerging-api.mdx`
  - `platforms/Emerging/data-integrity.mdx`
  - `api-reference/blocksync-graphql-api.mdx`
  - `guides/dev/overview.mdx`
  - `sdk-reference/*.mdx`
  - Done when:
    - no touched page contains a broken internal link or dead CTA

- [x] Remove or fix dead-end CTAs in:
  - `sdk-reference/signx-sdk.mdx`
  - `sdk-reference/jambo-wallet-sdk.mdx`
  - `sdk-reference/oracle-adk.mdx`
  - any adjacent SDK pages with unlabeled or private source references
  - Done when:
    - every CTA is clickable, accurate, and useful

- [x] Update stale future-tense wording in:
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
    - `guides/dev/ixo-stack-sdks.mdx`
    - `guides/dev/overview.mdx`
    - `articles/ixo-matrix.mdx`
  - Done when:
    - each page has one primary job

## Phase 4 — Shared source-of-truth pages

- [x] Create `reference/networks-and-endpoints.mdx`.
  - Own:
    - environment names
    - chain IDs
    - base URLs
    - stability / deprecation notes
  - Done when:
    - other pages can link here instead of repeating network literals

- [x] Create `reference/authentication-matrix.mdx`.
  - Own:
    - auth method by product/API
    - token/header format
    - where to get credentials
    - error patterns
  - Done when:
    - auth guidance is no longer scattered across guides and APIs

- [x] Create `reference/product-and-sdk-map.mdx`.
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

## Developer guides audit — Apr 2026

Source: `~/.cursor/plans/developer_guides_audit_b84f6fcb.plan.md`

This audit reviewed every page under `guides/dev/` for duplication, broken or invented APIs, missing task scaffolding, and IA orphans. The bulk has been implemented. Items below are residual.

### Decisions (recorded for future contributors)

- `guides/dev/evaluation-engine.mdx` — DELETED (was empty); redirect to `/guides/dev/agent-evaluations` lives in `docs.json`.
- `guides/dev/claims.mdx` — DELETED (invented message names and superseded by `ixo-claims.mdx`); redirect in place.
- `guides/dev/introduction.mdx` — DELETED (duplicated `overview.mdx` with non-functional cards); redirect in place.
- `guides/dev/identity-and-credentials.mdx` — MOVED to `articles/identity-and-credentials.mdx` per `CONTENT_MODEL_AND_IA.md` (concept article belongs in `articles/`); redirect in place; all internal links updated.
- `guides/dev/ixo-domains.mdx` — KEPT as a routing page accessible by URL but **intentionally absent from nav**; many concept pages link to it (glossary, core-concepts, articles/cdt-systems, articles/assets, articles/domain-config). Adding it to nav would duplicate `overview.mdx`.
- `guides/dev/ixo-stack-sdks.mdx` — REDUCED to a short pointer page; kept in nav for redirect compatibility (`/guides/dev/spatial-web-sdks` → here).
- All canonical chain message shapes (entities, tokens, bonds, liquid-staking, smart accounts, claims, authz) — VERIFIED against `ixofoundation/ixo-blockchain` proto files. `MsgSendWithAuthenticator` and `MsgSubmitProposalUpdateLiquidStakeParams` confirmed as not existing — replaced with the `AuthenticatorTxExtension` pattern and the standard Cosmos `MsgSubmitProposal` wrapping.
- `@ixo/oracle-agent-sdk` snippets — flagged as illustrative; npm package is not publicly published. Canonical home is `sdk-reference/oracle-adk.mdx`.

### Residual / follow-up

- [ ] Confirm the canonical npm slug for the Oracle ADK once the package is published; replace the illustrative snippets in `guides/dev/workflows.mdx` and `guides/dev/examples.mdx` with verified API calls.
- [ ] Decide whether `guides/dev/ixo-stack-sdks.mdx` should be folded into `guides/dev/overview.mdx` and replaced with a redirect (currently kept as a thin pointer for backward compatibility).
- [ ] When Mintlify nested-group nav is reviewed, validate the new sub-groups under Developer Guides (Identity and access, Domains and entities, Claims and verification, Tokens and bonds, Channels and integrations, Operate) — adjust labels if site analytics show consistent mismatch.
- [ ] Cross-check the verified message shapes after every IXO blockchain release; update `tokens.mdx`, `bonds.mdx`, `liquid-staking.mdx`, `smart-accounts.mdx`, `entities.mdx` if proto signatures change.
- [ ] Consider creating `reference/oracle-adk-status.mdx` with the public availability matrix so guides can defer instead of re-explaining.

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
