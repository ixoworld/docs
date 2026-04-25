# AGENTS.md

This repository is being upgraded from a mixed-quality public docs hub into a world-class documentation system for IXO.

Read and follow these files in order before making changes:

1. `AGENTS.md`
2. `.codex/README.md`
3. `.codex/CONFIG_AUTHORITY.md`
4. `.codex/NAMING_TAXONOMY.md`
5. `.codex/TERMINOLOGY_MAP.yml`
6. `.codex/STYLE_GUIDE.md`
7. `.codex/CONTENT_MODEL_AND_IA.md`
8. `.codex/UPGRADE_BACKLOG.md`
9. `.codex/QA_CHECKLIST.md`
10. `.codex/REDIRECTS_AND_DEPRECATIONS.md`
11. `.codex/templates/*.mdx`

## Repository reality

- The writable docs source of truth is the current Mintlify/MDX repository, not the archived legacy GitBook repo.
- Site configuration authority is `docs.json` (Mintlify config schema).
- `mint.json` is deprecated in this repo and must not be introduced or edited unless a migration task explicitly requires a temporary compatibility step.
- Most public content lives under:
  - `guides/`
  - `guides/dev/`
  - `guides/users/`
  - `sdk-reference/`
  - `api-reference/`
  - `articles/`
  - `platforms/Emerging/`
  - `mcp/`
- Public docs quality is currently limited by inconsistent naming, overlapping information architecture, thin user guidance, stale or conflicting SDK terminology, and broken or misleading links.

## Mission

Make the docs correct, canonical, task-oriented, and maintainable.

The near-term goals are:

1. Establish one naming system across products, APIs, SDKs, and packages.
2. Remove duplicate or competing sources of truth.
3. Fix broken or misleading links and dead-end CTAs.
4. Convert conceptual pages into usable quickstarts, guides, and references.
5. Clarify platform vs solution scope, especially for Emerging.
6. Improve grammar, formatting, and page purpose without adding fluff.

## Non-negotiable rules

### 1) One concept, one canonical page
If two pages compete to explain the same thing, choose one as canonical and reduce the other to a stub, a redirect target, or remove it once links are updated.

### 2) Human-readable docs names are not package names
Use the canonical public docs name in headings and prose.
Use package identifiers exactly, in code font, only when referring to code or installation.

### 3) Do not invent technical facts
Never invent:
- package names
- imports
- SDK methods
- endpoints
- chain IDs
- auth headers
- supported environments
- server availability

If the docs and code disagree and you cannot verify the correct literal from the repo or an explicit source of truth, keep the existing verified literal and flag the issue in the change summary.

### 4) Keep platform and solution scopes distinct
Do not use:
- `Emerging`
- `Emerging Platform`
- `Emerging Household Energy`

as interchangeable terms. The page must declare its scope in the title, description, and opening paragraph.

### 5) Prefer H1 and body cleanup before slug changes
If a naming problem can be solved by changing the H1, description, nav label, and internal links, do that first.
Only change file names or slugs when there is clear value.
If you change a route, follow `.codex/REDIRECTS_AND_DEPRECATIONS.md`.

### 6) Remove misleading CTAs
If a page says “View on NPM”, “View the source code”, or similar and the link is missing, private, or wrong, either:
- fix the link,
- relabel it accurately, or
- remove the CTA.

### 7) Do not preserve bad prose for continuity
Rewrite for clarity. Do not keep bloated, promotional, or ambiguous text just because it already exists.

### 8) Every page must have a type
Each page must fit one primary content type from `.codex/CONTENT_MODEL_AND_IA.md`:
- product overview
- task guide
- reference
- concept/article
- platform/solution page

## Default workflow for every edit

1. Identify the page type.
2. Check the canonical naming rules.
3. Check whether the page is canonical or duplicate.
4. Rewrite using the appropriate template.
5. Verify every CTA and internal link touched by the change.
6. Update `docs.json` if nav labels or page placement change.
7. If a route changes, update the redirect ledger.
8. Run available checks. If the check does not exist yet, note it in the change summary and add it only if scoped in the task.
9. Summarize:
   - what changed
   - what was normalized
   - what remains unresolved

## Priority order

When several improvements are possible, work in this order:

1. Naming and taxonomy
2. Broken links / false CTAs
3. Quickstarts and task guides
4. Auth / network / environment source-of-truth pages
5. Duplicate and overlapping pages
6. Grammar, style, formatting polish
7. Navigation refinement

## Allowed edits

You may edit:
- `.mdx` content files
- `docs.json`
- repo-local governance files under `.codex/`
- docs templates
- docs QA and lint setup when explicitly in scope

Do not change:
- branding assets
- analytics settings
- unrelated application code
- product claims that require business approval

unless the task explicitly calls for it.

## Change summary format

At the end of each task, provide:

- `Files changed`
- `Canonical names normalized`
- `Routes or nav updated`
- `Links verified or removed`
- `Open questions / blocked items`

## First work to do

Before broader rewrites, complete the items in `.codex/UPGRADE_BACKLOG.md` under:
- Phase 0 — Governance foundation
- Phase 1 — Canonical naming rollout
