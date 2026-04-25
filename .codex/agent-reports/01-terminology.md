# Agent 01 terminology enforcement report

## Goal completed

Make the naming system enforceable before public content rewrites.

## Files changed

- `.codex/NAMING_TAXONOMY.md`
- `.codex/TERMINOLOGY_MAP.yml`
- `.codex/STYLE_GUIDE.md`
- `.codex/QA_CHECKLIST.md`
- `package.json`
- `scripts/terminology-lint.mjs`

## Canonical names normalized

- Normalized `Agentic Oracles ADK` -> `Agentic Oracles SDK` (historical note; public docs name is again **Agentic Oracles ADK** for `@ixo/oracle-agent-sdk`).
- **Qi Forge ADK** is the umbrella canonical name (Qi Forge CLI + no-code Agentic Oracle-builder Skill); **Qi Forge CLI** names the CLI surface only.
- Normalized `JAMBO PWA` SDK entry -> `JAMBO Wallet SDK` with exact package literal.
- Corrected MCP server naming entry: `Assistant MCP` now maps to canonical `Personal Agent MCP Server`.
- Added explicit "canonical names by repo surface" mapping for SDK, MCP, and Emerging platform/solution surfaces.

## Enforceability added

- Added first-mention enforcement rules by class:
  - products
  - SDKs
  - packages/code literals
  - protocols/standards
  - platforms/solutions
- Added banned alias replacement table in taxonomy.
- Added `banned_aliases` block to terminology map for machine checking.
- Wired `lint:terminology` to a runnable script:
  - `node ./scripts/terminology-lint.mjs`

## Open questions / blocked items

- `Qi Forge CLI` package identifier is still unknown and intentionally omitted.
- Lint script currently scans `.mdx` files only; governance markdown linting can be expanded later if needed.
