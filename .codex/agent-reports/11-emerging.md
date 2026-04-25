# Agent 11 — Emerging scope separation report

## Scope classification by page

| Page | Classification |
| --- | --- |
| `platforms/Emerging/intro-emerging.mdx` | Emerging Platform |
| `platforms/Emerging/concepts.mdx` | Emerging Platform |
| `platforms/Emerging/emerging-api.mdx` | Emerging Platform |
| `platforms/Emerging/registry.mdx` | cross-product IXO dependency |
| `platforms/Emerging/data-integrity.mdx` | Emerging Platform |
| `platforms/Emerging/domain-registration.mdx` | Emerging Platform |
| `platforms/Emerging/dmrv.mdx` | Emerging Platform |
| `platforms/Emerging/digital-identifiers.mdx` | Emerging Platform |
| `platforms/Emerging/credential-issuance.mdx` | Emerging Platform |
| `platforms/Emerging/emerging-dmrv.mdx` | Emerging Household Energy |
| `platforms/Emerging/energy-systems.mdx` | Emerging Household Energy |
| `platforms/Emerging/household-monitoring.mdx` | Emerging Household Energy |
| `platforms/Emerging/household-reporting.mdx` | Emerging Household Energy |
| `platforms/Emerging/stove-use-monitoring.mdx` | Emerging Household Energy |
| `platforms/Emerging/qualitative-surveys.mdx` | Emerging Household Energy |
| `platforms/Emerging/sample-size.mdx` | Emerging Household Energy |
| `platforms/Emerging/kpt.mdx` | Emerging Household Energy |
| `platforms/Emerging/sdg-monitoring.mdx` | Emerging Household Energy |
| `platforms/Emerging/digital-vouchers.mdx` | Emerging Household Energy |
| `platforms/Emerging/distributor-onboarding.mdx` | Emerging Household Energy |
| `platforms/Emerging/itmo-credentials.mdx` | Emerging Household Energy |
| `platforms/Emerging/itmo-schema.mdx` | cross-product IXO dependency |
| `platforms/Emerging/digital-certification.mdx` | cross-product IXO dependency |

## What changed in this pass

- Rewrote titles, descriptions, and opening paragraphs in edited files to explicitly declare scope.
- Removed PRD-style/internal-spec narrative and replaced it with public-facing docs structure in:
  - `platforms/Emerging/digital-identifiers.mdx`
  - `platforms/Emerging/credential-issuance.mdx`
  - `platforms/Emerging/household-reporting.mdx`
  - `platforms/Emerging/distributor-onboarding.mdx`
- Clarified platform-vs-solution ownership for dMRV and ITMO pages.
- Added or preserved cross-links to canonical IXO dependencies where relevant.
- Kept routes stable and made no global nav edits.

## Split and dedupe recommendations

1. `platforms/Emerging/dmrv.mdx` vs `platforms/Emerging/emerging-dmrv.mdx`
   - Keep both, but enforce ownership:
     - `dmrv` = platform capability reference
     - `emerging-dmrv` = household-energy implementation guide

2. `platforms/Emerging/digital-certification.mdx`, `platforms/Emerging/itmo-schema.mdx`, `platforms/Emerging/itmo-credentials.mdx`
   - Keep as:
     - `digital-certification` = orientation page
     - `itmo-schema` = canonical reference
     - `itmo-credentials` = solution task guide

## Proposed move/redirect follow-ups (not executed)

- Consider moving long-term platform-scoped pages out of mixed solution paths if IA cleanup is approved:
  - `platforms/Emerging/emerging-api`
  - `platforms/Emerging/registry`
- If routes change later, add entries in `.codex/REDIRECTS_AND_DEPRECATIONS.md` and maintain transitional stubs.

## Open questions / risks

- Some remaining pages still include unverified API literals and may need a dedicated fact-check pass against canonical API/reference sources.
