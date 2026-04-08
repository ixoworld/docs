# Style guide

This style guide defines how IXO docs should read and behave.

## Primary editorial goal

Help a reader complete a task or understand a system with minimal ambiguity.

The docs should feel:
- exact
- useful
- calm
- technical without being dense
- product-aware without being promotional

## Audience priority

Default audience order:

1. Developer integrating IXO services or SDKs with the assistance of coding agents
2. Operator / platform implementer
3. End user performing a real workflow
4. IXO Solutions Engineers as the canonical handbook
5. Reader seeking conceptual context

Write so that the page makes sense to the intended audience first. Do not try to serve every audience equally on every page.

## Tone

Write in plain technical English.

Prefer:
- direct statements
- concrete nouns
- explicit subject-action-object sentences
- short paragraphs
- examples tied to a user task

Avoid:
- hype
- visionary filler
- unexplained metaphors
- claims like “powerful”, “seamless”, “robust”, “advanced”, “comprehensive” unless backed by specific capabilities
- vague claims like “easily”, “simply”, “just”

## Heading style

Use sentence case for headings.

Good:
- `Quickstart`
- `Create a data room`
- `Authentication methods`

Avoid:
- `Quick Start Guide`
- `HOW IT WORKS`
- `Key Capabilities Overview`

## Required page opening

Every page must begin with:

1. a canonical H1
2. a description that says what the page is for
3. a short opening paragraph that answers:
   - what this is
   - when to use it
   - what the reader will be able to do after reading

Do not start with decorative card grids or feature lists before giving the reader context.

## Page endings

End pages with high-value next steps only:
- related task guides
- the next reference page
- troubleshooting
- adjacent concepts

Do not end pages with generic filler like:
- “Start building”
- “View examples”
- “Get developer support”

unless those labels are linked and genuinely useful.

## Canonical terminology

Follow `.codex/NAMING_TAXONOMY.md`.

Rules:
- Use canonical docs names in H1s and prose.
- Use package identifiers only in code font.
- Expand acronyms once per page.
- Keep protocol, network, platform, and solution names distinct.

### First-mention naming rules

Apply these on first mention for every page:

- Products: use the full canonical product name.
- SDKs: use canonical SDK name plus exact package identifier in code font when relevant.
- Protocols/standards: use full expansion on first mention, then acronym.
- Platforms/solutions: explicitly choose `Emerging Platform` or `Emerging Household Energy`.

Example:

- `Model Context Protocol (MCP)` on first expansion (singular).
- Use `MCP` for later mentions on the same page.

### Package naming in prose and code

- Package identifiers must be exact and in code font: `@ixo/impactxclient-sdk`.
- Do not place package identifiers in H1/page titles.
- Do not "prettify" package names in commands or imports.

### Page-title naming rules

- Product/SDK/reference H1s must use canonical docs names from `.codex/NAMING_TAXONOMY.md`.
- Task-guide H1s should use clear action wording and can omit product names when context is obvious.
- Do not use deprecated aliases, package literals, or marketing taglines in H1s.

### Platform vs solution naming

- Use `Emerging Platform` for reusable platform capability pages.
- Use `Emerging Household Energy` for implementation-specific pages.
- Do not use bare `Emerging` in H1s, descriptions, or scope-defining first paragraphs.

## Config authority and references

- Treat `docs.json` as the authoritative Mintlify site config in this repo.
- Do not introduce or update `mint.json` unless an explicit migration task requires temporary dual-config handling.
- If a doc instruction conflicts with repository state, prefer verified repository state and record uncertainty.

## Code examples

### General

Code examples must be:
- minimal
- readable
- task-specific
- consistent with the surrounding page
- syntactically plausible

### Do not do this

- mix multiple SDK generations in one snippet
- use unexplained placeholder methods
- combine setup, authentication, and business logic in one giant example
- show pseudocode as if it were production-ready code

### If code is illustrative rather than verified

Label it clearly:

`Illustrative example`

### Placeholder rules

Use uppercase placeholder names in code:

- `RPC_ENDPOINT`
- `MATRIX_BASE_URL`
- `ACCESS_TOKEN`
- `ENTITY_DID`

Do not split placeholders across lines or words.
Do not use malformed placeholders like `<your_toke n>`.

### Comments

Use comments to explain intent, not to narrate the obvious.

Good:
```ts
// Submit the claim after evidence has been stored
```

Bad:
```ts
// Create client
// Set endpoint
// Run function
```

## Lists

Use lists only when they make the content easier to scan.
Keep list items parallel and concise.
Do not use long bullet walls where a table or subsection would work better.

## Tables

Use tables when comparing:
- products
- SDKs
- auth methods
- environments
- server capabilities

Do not put large narrative blocks inside tables.

## Links

### Internal links

Use canonical docs routes, not raw file paths.

Prefer:
- `/sdk-reference/matrix-client-sdk`
- `/guides/dev/authentication`

Avoid:
- GitHub blob links
- relative file-system links when a route link is clearer

### CTA labels

CTA text must describe the destination precisely.

Prefer:
- `Read the authentication reference`
- `Open the API schema`
- `See the Matrix quickstart`

Avoid:
- `Learn more`
- `Get started`
- `Click here`

## MDX usage

Prefer plain Markdown and simple MDX.
Use Mintlify components only when they clearly improve scanability.

Allowed by default:
- code blocks
- tables
- callouts
- cards for small comparison sets

Avoid:
- nested or decorative component grids
- components that hide key information
- cards as a substitute for the page opening

## Page-specific conventions

### Task guides

Use:
- `Prerequisites`
- `Quickstart` or `Steps`
- `Verify the result`
- `Troubleshooting`
- `Next steps`

### Reference pages

Use:
- `Overview`
- `Authentication`
- `Base URL` or `Endpoint`
- `Parameters`
- `Responses`
- `Errors`
- `Examples`

### Product / SDK overviews

Use:
- `What it is`
- `When to use it`
- `Installation` if relevant
- `Core capabilities`
- `Quickstart`
- `Related guides`

## Formatting errors to eliminate

Never ship pages with:
- empty headings
- broken list numbering
- merged sentences caused by missing line breaks
- CTA text without a real link
- malformed code fences
- title-case drift across adjacent pages
- unexplained jargon
- copy-paste leftovers from other products

## Anti-patterns

Reject or rewrite content that:
- says the same thing twice
- explains architecture where the reader needs a task
- mixes product overview with internal PRD material
- uses current/future tense like “upcoming”, “coming soon”, “new” without a date and owner
- uses an article page as the only source of truth for technical setup
