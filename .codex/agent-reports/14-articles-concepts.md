# Agent 14 report: articles and concepts cleanup

## Scope handled

- `articles/intro-articles.mdx`
- `articles/ixo-matrix.mdx`
- `articles/intro-platforms.mdx`
- `introduction.mdx`
- `core-concepts.mdx`
- `spatial-web-stack/core-concepts.mdx`
- `spatial-web-stack/sdks/intro-sdks.mdx`

## What changed

- Removed stale temporal phrasing and roadmap-style copy (for example, references to "upcoming" integrations) in touched concept pages.
- Reframed scoped entry pages as concept/navigation pages rather than shadow implementation references.
- Reduced duplicated technical setup content in concept/article pages and replaced it with links to canonical guides and references.
- Added clearer "go here next" paths to `guides`, `api-docs`, and SDK reference destinations.

## Canonical naming and terminology normalization

- Replaced repeated "Spatial Web" framing in key entry pages with IXO-centered canonical naming.
- Updated SDK naming on touched pages:
  - `IXO Matrix SDK` -> `IXO Matrix Client SDK` where used as docs-facing name.
  - `SignX SDK` -> `IXO SignX SDK` on the SDK overview page.
- Normalized first mention of Model Context Protocol to singular form: `Model Context Protocol (MCP)`.

## De-duplication outcomes

- `articles/ixo-matrix.mdx` no longer owns setup examples or implementation code blocks.
- `core-concepts.mdx` and `spatial-web-stack/core-concepts.mdx` are now conceptual maps with outward links, not mixed concept+reference hybrids.
- `spatial-web-stack/sdks/intro-sdks.mdx` now acts as an SDK routing page rather than a duplicate installation/how-to reference.

## Second-pass expansion (completed)

### Additional files normalized

- `articles/ixo-integrations.mdx`
- `articles/ixo-blocksync.mdx`
- `articles/ixo-blockchain.mdx`
- `articles/orchestration.mdx`
- `articles/domain-config.mdx`
- `articles/assets.mdx`
- `articles/projects.mdx`
- `articles/cdt-systems.mdx`
- `articles/pods.mdx`
- `articles/ixo-oracles.mdx`
- `spatial-web-stack/sdks/modules-sdk.mdx`
- `spatial-web-stack/sdks/ixo-multiclient-sdk.mdx`
- `spatial-web-stack/sdks/ixo-matrix-sdk.mdx`
- `spatial-web-stack/sdks/oracle-agent-sdk.mdx`
- `spatial-web-stack/matrix/matrix-encryption.mdx`

### Second-pass outcomes

- Removed remaining stale temporal phrasing in scoped directories.
- Cleared remaining legacy `Spatial Web` terminology in `articles/**/*` and `spatial-web-stack/**/*`.
- Converted additional article pages from implementation/reference-heavy copy to concept-first pages with canonical pointers.
- Renamed SDK-facing labels in scoped files to canonical docs names:
  - `Oracle Agent SDK` -> `Agentic Oracles SDK`
  - `IXO Matrix SDK` -> `IXO Matrix Client SDK`
- Added or improved explicit "go here next" links to canonical guides and reference surfaces.

## Remaining follow-up opportunities in scope

- Some pages in `spatial-web-stack/sdks/*` still include deep examples that may overlap with dedicated reference pages; they are now terminology-normalized, but could be further split if stricter page-type separation is required.
