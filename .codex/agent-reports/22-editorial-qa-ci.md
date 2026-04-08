# Agent 22 report: Editorial QA and CI hardening

## Scope completed

- Ran a repo-wide QA pass with lint tooling.
- Finalized baseline docs lint scripts in `package.json`.
- Added CI workflow for docs checks.
- Fixed parser blockers and terminology regressions encountered while wiring checks.
- Added checklist refinement for baseline debt tracking.

## Files changed

- `package.json`
- `.eslintrc.json`
- `.markdownlint-cli2.jsonc` (new)
- `.cspell.json` (new)
- `.github/workflows/docs-quality.yml` (new)
- `.codex/QA_CHECKLIST.md`
- `.codex/templates/guide-page-template.mdx`
- `guides/dev/overview.mdx`
- `guides/dev/spatial-web-sdks.mdx`
- `api-docs/ai-companion-api/companion-api.mdx`
- `api-docs/matrix-api/matrix-statebot-api.mdx`

## What was finalized

### 1) Editorial/quality tooling

- Added markdown/style lint tooling with scoped config:
  - `markdownlint-cli2` via `lint:style`
- Added optional spell check:
  - `cspell` via `lint:spelling`
- Kept MDX lint:
  - `eslint` + `eslint-plugin-mdx` via `lint:mdx`
- Kept terminology/style lint:
  - `.codex/TERMINOLOGY_MAP.yml` enforced via `lint:terminology`

### 2) CI wiring

- Added `.github/workflows/docs-quality.yml`.
- CI now runs:
  - blocking: `npm run qa:docs` (`lint:mdx` + `lint:terminology`)
  - non-blocking baseline visibility: `npm run qa:docs:strict` (style + links + spelling)

### 3) Regression fixes done during setup

- Fixed malformed placeholders in `.codex/templates/guide-page-template.mdx` that broke MDX parsing.
- Normalized banned aliases that blocked terminology lint:
  - `IXO Matrix SDK` -> `IXO Matrix Client SDK`
  - `ImpactX Client` -> `IXO MultiClient SDK`

## Check execution summary

- `npm run qa:docs` -> **pass**
- `npm run lint:links` -> **fail** (existing broken-link debt in legacy and mixed-scope docs)
- `npm run qa:docs:strict` -> **fail** (expected baseline debt: markdown formatting + link debt + spelling debt)

## Remaining risks / unresolved items

### High

- `mint broken-links` reports **53 broken links across 23 files**.
- Broken links include legacy directories (`ixo-stack`, `use-cases`, `api-docs`) and some current docs surfaces.

### Medium

- `lint:style` currently reports broad historical formatting debt (trailing spaces, fence spacing/language, extra blank lines) across many files.
- `lint:spelling` not yet clean repo-wide; currently non-blocking by design.

### Low

- OpenAPI extraction warning appears during `mint broken-links`; it does not block `qa:docs` but should be investigated when doing API doc cleanup.

## Recommendation for next pass

1. Triage and fix broken links in current canonical surfaces first (`guides/dev`, `sdk-reference`, `platforms/Emerging`, `mcp`, `reference`).
2. Run a whitespace/code-fence cleanup sweep in scoped batches to reduce strict-style debt.
3. Promote `qa:docs:strict` to blocking only after the strict baseline reaches acceptable failure levels.
