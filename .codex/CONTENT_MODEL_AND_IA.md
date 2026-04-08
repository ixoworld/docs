# Content model and information architecture

This file defines what kind of page each route should be and how the docs should be organized.

## Core rule

Every page gets one primary job.

If a page tries to be:
- an overview
- a quickstart
- a reference
- an architecture article
- a product spec

all at once, split or rewrite it.

## Page types

### 1) Product / service overview

Use for:
- IXO Matrix
- IXO Blocksync
- IXO Assistant
- IXO SignX
- SDK landing pages

Required sections:
- what it is
- when to use it
- related surfaces
- core capabilities
- quickstart or entry point
- related guides / reference

Do not include:
- deep implementation detail that belongs in reference
- internal roadmap copy
- speculative future-state text

### 2) Task guide

Use for pages that help the reader complete a workflow.

Examples:
- create a domain
- authenticate to a service
- create a data room
- issue a credential
- verify a claim

Required sections:
- prerequisites
- steps
- verify the outcome
- common errors or troubleshooting
- next steps

Do not include:
- long conceptual digressions
- generic “benefits” sections
- product marketing

### 3) Reference

Use for:
- API docs
- SDK reference
- schemas
- auth matrices
- environment matrices

Required sections:
- exact scope
- inputs
- outputs
- constraints
- examples
- errors or caveats

Do not include:
- broad ecosystem storytelling
- vague claims about “use cases” without exact behavior

### 4) Concept / architecture article

Use for:
- protocol concepts
- architecture explainers
- system models
- broader context

Required sections:
- concept definition
- why it matters
- how it fits into the system
- links to canonical guides/reference

Do not include:
- primary installation instructions
- unstable technical literals if a reference page already owns them

### 5) Platform / solution page

Use for platform families and vertical implementations.

Required sections:
- exact scope declaration in the first paragraph
- actors / system boundary
- data model or workflow
- related APIs / guides
- implementation notes

Required distinction:
- `Emerging Platform` = reusable platform capability
- `Emerging Household Energy` = a domain-specific implementation

Do not let a single page oscillate between those scopes.

## Canonical ownership by directory

| Directory | Primary purpose |
|---|---|
| `guides/` | Task guides and workflow pages |
| `guides/dev/` | Developer task guides and onboarding |
| `guides/users/` | End-user workflows |
| `sdk-reference/` | SDK overviews and reference entry pages |
| `api-reference/` | API overviews and reference pages |
| `articles/` | Concepts and architecture |
| `platforms/Emerging/` | Platform and solution documentation |
| `mcp/` | MCP server inventory and integration guidance |

## Canonical-page rules

### 1) One source of truth per concept
Choose a canonical home for each concept.

Examples:
- SDK installation belongs in `sdk-reference/`
- API auth details belong in `api-reference/` or a shared reference page
- architecture explanation belongs in `articles/`
- workflow instructions belong in `guides/`

### 2) Overview pages should point, not duplicate
An overview may summarize adjacent pages, but it should not duplicate their full content.

### 3) Articles are not authoritative references
If an article mentions an endpoint, package, or install command, it must link to the reference page that owns that fact.

## Navigation rules

Navigation should help readers choose a path quickly.

### Current problems to fix
- `Guides` and `Developers` overlap.
- `User Guides` is too thin.
- the same topic appears in both concept and guide contexts without clear ownership.
- product, protocol, and solution pages are mixed together.

### Target behavior
- `Get Started` gets a new reader to one successful action.
- `Guides` is task-oriented.
- `SDK Reference` is package-oriented.
- `API Reference` is interface-oriented.
- `Platforms` distinguishes platform family from vertical solution.
- `Articles` holds concepts, not operational truth.

## Route and slug strategy

### Prefer stable slugs
If the existing route can remain while the title becomes canonical, keep the slug.

Examples:
- keep `/sdk-reference/multiclient-sdk`, but change the H1 to `IXO MultiClient SDK`
- keep `/mcp/model-context-protocol`, but change the H1 and description to singular MCP terminology if that is enough

### Change slugs only when the current slug is actively misleading
If you must change a slug:
- update all internal links
- record the mapping in `.codex/REDIRECTS_AND_DEPRECATIONS.md`
- add a redirect or transitional stub according to repo capabilities

## Required future reference pages

The docs need shared source-of-truth pages for unstable technical literals.

Create these early:

1. `reference/networks-and-endpoints`
2. `reference/authentication-matrix`
3. `reference/product-and-sdk-map`

These pages should own current environment values, auth patterns, and canonical surface mappings so they do not need to be repeated everywhere else.

## Dedupe policy

When duplicate pages exist:

1. identify the canonical page
2. merge unique value into the canonical page
3. remove repetitive detail from the duplicate
4. leave a short pointer or redirect if needed

## Pages that require immediate type correction

The following page families currently need type correction first:

- `guides/hands-on.mdx`  
  Should become a runnable quickstart, not a conceptual checklist.

- `sdk-reference/oracle-ai-sdk.mdx`  
  Should become a canonical product/SDK page for the assistant surface, or be split if oracle and assistant content are both needed.

- `mcp/model-context-protocol.mdx`  
  Should be a clear server inventory and integration guide, not a loose overview with ambiguous server names.

- `platforms/Emerging/*.mdx`  
  Many pages need explicit platform-vs-solution scoping.

- `articles/ixo-matrix.mdx` and related articles  
  Must link to the canonical reference surfaces instead of carrying stale technical ownership.
