---
title: "Agent 21 link and CTA remediation"
description: "Mechanical fixes for broken internal links, dead-end CTAs, and private resource labeling."
---

## Scope handled

- Whole-repo link/CTA reliability pass focused on mechanical route and CTA fixes.
- Updated `.codex/LINK_AND_CTA_AUDIT.md` with remediation status.
- No route renames were introduced, so `.codex/REDIRECTS_AND_DEPRECATIONS.md` required no new entries.

## Files changed

- `.codex/LINK_AND_CTA_AUDIT.md`
- `platforms/Emerging/emerging-api.mdx`
- `platforms/Emerging/data-integrity.mdx`
- `guides/dev/overview.mdx`
- `mcp/model-context-protocol.mdx`
- `guides/dev/introduction.mdx`
- `guides/users/ai-companion.mdx`
- `sdk-reference/matrix-client-sdk.mdx`
- `sdk-reference/multiclient-sdk.mdx`
- `sdk-reference/oracle-adk.mdx`

## Mechanical fixes applied

1. Repointed broken internal links to existing routes:
   - Replaced missing Emerging internal targets (for example `/platforms/Emerging/authentication`, `/platforms/Emerging/service-endpoints`) with existing reference or guide routes such as `/guides/dev/authentication` and `/reference/networks-and-endpoints`.
   - Replaced stale legacy tree links (`/ixo-stack/...`, `/api-docs/...`) with canonical existing routes in `sdk-reference`, `api-reference`, and `reference`.
   - Replaced missing MCP guide/API links with existing canonical references and SDK docs pages.

2. Fixed dead-end CTAs:
   - Removed `href="#"` CTAs in `guides/users/ai-companion.mdx` by linking to existing onboarding or support endpoints.

3. Labeled private/non-public resources truthfully:
   - Updated SDK GitHub CTA labels and body text where repository access is private to avoid presenting a public “view source” action.

4. Updated stale package CTA link:
   - Corrected MultiClient NPM card target to `@ixo/impactxclient-sdk`.

## Verification

- Checked touched files for removed stale/missing-target patterns.
- Confirmed no remaining instances of the replaced broken routes in touched files.
- Ran lints on all touched files: no lint errors.

## Open items

- The full repo still contains additional broken links and CTA issues listed in `.codex/LINK_AND_CTA_AUDIT.md` (remaining waves).
- No speculative links were added during this pass.

## Finalization pass

The remaining plan items were completed in a follow-through pass:

- Fixed additional Wave 1 and Wave 2 targets:
  - `platforms/Emerging/intro-emerging.mdx`
  - `platforms/Emerging/domain-registration.mdx`
  - `platforms/Emerging/energy-systems.mdx`
  - `platforms/Emerging/emerging-dmrv.mdx`
  - `guides/dev/ixo-domains.mdx`
  - `articles/ixo-blocksync.mdx`
  - `articles/ixo-integrations.mdx`
- Completed SDK CTA truthfulness updates:
  - `sdk-reference/jambo-wallet-sdk.mdx`
  - `sdk-reference/index.mdx`
- Applied deprecate-and-point strategy across legacy trees:
  - `api-docs/**`
  - `ixo-stack/**`
- Updated deprecation ledger:
  - `.codex/REDIRECTS_AND_DEPRECATIONS.md`

Verification is now based on the repo QA commands (`qa:docs`, `lint:links`) rather than static manual counts.

## QA and gate status

- `npm run qa:docs` -> pass
- `npm run lint:links` -> pass (no broken links found)
- `npm run qa:docs:strict` -> fail on spelling-only baseline debt (`cspell`)

### Strict-gate promotion criteria

Promote `qa:docs:strict` to blocking after:

1. `cspell` allowlist is updated for accepted domain terms (for example protocol acronyms, package literals, and proper nouns), and
2. remaining true spelling errors are fixed in scoped batches,
3. one full run of `npm run qa:docs:strict` passes on the branch.
