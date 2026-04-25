# QA checklist

Use this checklist before considering a docs task complete.

## Per-page checklist

### Purpose and scope
- [ ] The page has one primary job.
- [ ] The title matches the page type.
- [ ] The description says what the page is for.
- [ ] The first paragraph explains what this is and when to use it.

### Naming
- [ ] H1 uses the canonical docs name or a clear task name.
- [ ] First mention uses the canonical form for products, SDKs, protocols, platforms, and solutions.
- [ ] Package names, chain IDs, endpoints, and env vars are in code font.
- [ ] Deprecated aliases have been removed from headings, nav labels, and prose.
- [ ] Platform vs solution scope is explicit where relevant.
- [ ] `Model Context Protocol (MCP)` is expanded in singular form on first mention.

### Structure
- [ ] The page follows the correct template for its type.
- [ ] There are no empty headings.
- [ ] There are no repetitive sections.
- [ ] Long conceptual digressions have been moved out of task guides.

### Links and CTAs
- [ ] Every touched internal link resolves.
- [ ] Every touched CTA has a real destination.
- [ ] Private resources are clearly labeled or not linked as public CTAs.
- [ ] If a page was moved, all internal links were updated.

### Code and examples
- [ ] Code blocks are minimal and readable.
- [ ] Examples do not mix unrelated concepts.
- [ ] Package imports and install commands are internally consistent.
- [ ] Illustrative examples are labeled if not verified.

### Language and polish
- [ ] Sentences are grammatical.
- [ ] Headings use sentence case.
- [ ] Acronyms are expanded on first mention.
- [ ] Marketing filler has been removed.
- [ ] Placeholder values are well-formed.

## Site-level checklist

- [ ] `docs.json` is treated as the only authoritative site config unless an explicit migration task says otherwise.
- [ ] `mint.json` is not introduced for routine docs edits.
- [ ] No canonical surface appears under competing names.
- [ ] The same concept is not explained in full on multiple pages without a clear owner.
- [ ] User Guides contains real workflows.
- [ ] `docs.json` labels match the canonical taxonomy.
- [ ] `.codex/TERMINOLOGY_MAP.yml` and `.codex/NAMING_TAXONOMY.md` are aligned (no ADK/SDK drift, no duplicate canonical entries with conflicting meaning).
- [ ] Articles point to canonical guides/reference for unstable technical facts.
- [ ] Broken links and dead CTAs are not introduced.

## When a slug or route changes

- [ ] The change is recorded in `.codex/REDIRECTS_AND_DEPRECATIONS.md`.
- [ ] Internal links have been updated.
- [ ] A redirect or transitional stub exists if needed.
- [ ] Nav labels and landing pages were updated.

## Desired automated checks

These may not all exist yet. Add them when they are in scope.

- [ ] MDX lint
- [ ] link checker
- [ ] terminology/style lint
- [ ] terminology lint flags banned aliases from `.codex/TERMINOLOGY_MAP.yml`
- [ ] optional spell check
- [ ] nav consistency check against canonical routes

## Baseline debt tracking

- [ ] Gating checks (`qa:docs`) pass in CI.
- [ ] Strict checks (`qa:docs:strict`) are reviewed in CI logs.
- [ ] Strict-check failures are tracked and burned down without blocking unrelated docs fixes.

## Definition of done

A task is done only when:
1. the page is more correct than before,
2. naming is more canonical than before,
3. links are more trustworthy than before,
4. no new ambiguity was introduced,
5. the change summary calls out any remaining unresolved items.
