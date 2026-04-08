# Agent 13 report - API, protocol, and auth coherence

## Scope status

- `api-reference/**/*`: updated selected pages to remove contradictory auth and endpoint ownership.
- `protocols/**/*`: no files found at this path in the current repository snapshot.
- `guides/dev/authentication.mdx`: rewritten as a task guide with matrix-first auth decisions.
- `guides/registry.mdx`: rewritten to service-scope guide with explicit protocol boundary.
- `guides/dev/ixo-claims.mdx`: reduced overlap and retained protocol message literal.
- `guides/dev/domain-settings.mdx`: reduced duplication, kept protocol ownership explicit.
- `guides/dev/domain-privacy.mdx`: clarified protocol metadata vs service storage boundary.

## Terminology normalization applied

- `IXO Protocol`: used for protocol gateway/module context.
- `Impact Hub Network`: retained as network naming context where applicable.
- `Impact Hub Registry`: used for registry service/API context.
- `IXO Blocksync`: used for indexed query service context.
- Auth surfaces are now presented as per-interface responsibility, not one global flow.

## Placeholders and source-of-truth links inserted

- `/reference/networks-and-endpoints`
- `/reference/authentication-matrix`
- `/reference/product-and-sdk-map`

## Unresolved literal conflicts recorded (not guessed)

1. Registry API historical environment literals were previously embedded directly in docs and included availability notes that are not verifiable from in-repo authority.
2. Auth method expectations differ across surfaces (for example, Basic vs Bearer vs API key) and were previously presented as universal in some pages.
3. `protocols/**/*` scope target has no matching directory/files in this repo state, so protocol-doc consolidation was applied to available API and guide boundaries instead.

## Follow-up recommended

- Create canonical pages:
  - `reference/networks-and-endpoints.mdx`
  - `reference/authentication-matrix.mdx`
  - `reference/product-and-sdk-map.mdx`
- Decide whether protocol concept docs should live under a new `protocols/` directory or remain in another canonical location.
