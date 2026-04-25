# Canonical naming taxonomy

This file defines the public naming system for IXO documentation.

The purpose is to stop the docs from using competing names for the same thing.

## Naming layers

Keep these layers separate:

1. Brand  
   The ecosystem or company identity.

2. Product / service  
   A docs-facing surface users choose or integrate with.

3. Protocol / network  
   The technical stack or a deployment of that stack.

4. SDK docs name  
   The public human-readable name in headings and prose.

5. Package identifier  
   The exact code literal used in installation commands and imports.

6. Solution / vertical  
   A domain-specific implementation built on a platform.

## Canonical product and platform names

| Layer | Canonical name | Use when | Allowed short form | Do not use as a synonym for |
|---|---|---|---|---|
| Brand | IXO | The ecosystem or company brand | — | A single protocol or product |
| Architecture umbrella | IXO Platform | The broader architecture / stack | Platform | Any single SDK or service |
| Protocol | IXO Protocol | Blockchain modules, DID/claim/entity protocol, protocol docs | Protocol | Impact Hub Network |
| Graph substrate | IXO Graph | Linked semantic + verifiable state substrate beneath protocol and Qi | IXO Graph | IXO Protocol alone |
| Network deployment | Impact Hub Network | The deployed public network | Impact Hub | IXO Protocol |
| Registry service | Impact Hub Registry | Registry service and registry API | Registry, only when context is already explicit | Emerging Platform |
| Data + messaging service | IXO Matrix | Data rooms, messaging, Matrix service docs | Matrix | Matrix Client SDK |
| Indexing + query service | IXO Blocksync | Indexed blockchain query service | Blocksync | Registry |
| Oracle / agent service family | Agentic Oracles | This class of AI agent deployments and oracle services | Oracles | Personal Agent, Qi Agents |
| Personal AI product | Personal Agent | The personal AI product built using the Agentic Oracles framework | Personal Agent | Agentic Oracles |
| Multi-agent product | Qi Agents | Productized agent surfaces built using the Agentic Oracles framework | Agents | Agentic Oracles |
| Signing product | IXO SignX | Mobile-to-web signing and auth surface | SignX | SignX SDK |
| Platform family | Emerging Platform | The reusable platform family | Emerging Platform | Emerging Household Energy |
| Vertical solution | Emerging Household Energy | Household energy implementation on Emerging Platform | Household Energy | Emerging Platform |
| Mobile web app product / sub-brand | JAMBO | PWA product | JAMBO | IXO Wallet |
| Intelligent cooperating system | Qi Intelligent Cooperating System | The human–AI cooperation system built on IXO | Qi | Any single flow, skill, runtime kit, or assistant surface |
| Cooperation surface | Qi Flow | The multiplayer workflow surface for human–AI cooperation over shared state | Flow, only when context is already explicit | Qi Flow Engine |
| Flow runtime | Qi Flow Engine | The runtime that executes and coordinates Qi Flows over shared state | Flow Engine | Qi Flow |
| Flow unit | Qi Flow Block | A composable block-level unit within a Qi Flow | Flow Block | Qi Flow or Qi Flow Engine |
| Capability package | Qi Skills | Reusable capability packages that provide scoped actions, tools, and integrations | Skills, only when context is already explicit | SDKs |
| Executable runtime kit | Qi Capsules | The agent executable runtime kit that includes model, skills, tools, and services | Capsules, only when context is already explicit | Qi Skills |
| CLI product | Qi Forge | The CLI product for building Agentic Oracles | Forge | Qi Capsules |

## Canonical SDK docs names

Use these names in H1s, navigation labels, overview pages, and prose.

| Canonical docs name | Current package identifier to show in code | Notes |
|---|---|---|
| IXO MultiClient SDK | `@ixo/impactxclient-sdk` | Public docs name is MultiClient. Do not call this “ImpactX Client” in headings or prose. |
| IXO Matrix Client SDK | `@ixo/matrixclient-sdk` | Use “Matrix Client SDK” after first mention if context is clear. |
| Agentic Oracles ADK | `@ixo/oracle-agent-sdk` | Public docs name is Agentic Oracles ADK (Agent Development Kit). Preserve the current package literal exactly. |
| Personal Agent ADK | `@ixo/assistant-sdk` | Public docs name is Personal Agent ADK. Preserve the current package literal exactly until the package itself changes. |
| IXO SignX SDK | `@ixo/signx-sdk` | Always use the IXO prefix on first mention. |
| JAMBO Wallet SDK | `@ixo/jambo-wallet-sdk` | Keep JAMBO as the docs-facing sub-brand. |
| Qi Forge ADK | — | Umbrella for building Agentic Oracles: **Qi Forge CLI** and the no-code **Agentic Oracle-builder Skill**. Not a single npm package; distinct from **Agentic Oracles ADK** (`@ixo/oracle-agent-sdk`). |
| Qi Forge CLI | — | CLI surface inside **Qi Forge ADK**. Add the package identifier only once it is verified. |

## Canonical names by repo surface

Use this map to remove naming judgment calls during rewrites.

| Repo surface | Canonical public name | Notes |
|---|---|---|
| `sdk-reference/multiclient-sdk.mdx` | IXO MultiClient SDK | Keep package literal exact in code blocks. |
| `sdk-reference/matrix-client-sdk.mdx` | IXO Matrix Client SDK | Do not shorten to "Matrix Client" on first mention. |
| `sdk-reference/agentic-oracles-adk.mdx` | Agentic Oracles ADK | `@ixo/oracle-agent-sdk`; canonical oracle/agent service ADK page. |
| `sdk-reference/oracle-adk.mdx` | Personal Agent ADK | Agent development kit route for `@ixo/assistant-sdk`; `/sdk-reference/oracle-ai-sdk` redirects here. |
| `sdk-reference/signx-sdk.mdx` | IXO SignX SDK | Keep IXO prefix on first mention. |
| `sdk-reference/jambo-wallet-sdk.mdx` | JAMBO Wallet SDK | Keep JAMBO sub-brand. |
| `mcp/model-context-protocol.mdx` | Model Context Protocol (MCP) servers | First expansion must be singular. |
| `platforms/Emerging/*.mdx` (platform capability pages) | Emerging Platform | Use for reusable platform capability. |
| `platforms/Emerging/*.mdx` (solution implementation pages) | Emerging Household Energy | Use for the vertical implementation. |
| `guides/what-you-can-build.mdx` | What you can build | Path 1 workflow hub; not a product brand. |
| `articles/ixo-graph.mdx` | IXO Graph | Market-facing frontmatter title may add a subtitle (for example “shared map of verified reality”); canonical surface name remains **IXO Graph**. |
| `articles/qi-intelligent-cooperating-system.mdx` | Qi Intelligent Cooperating System | Market-facing frontmatter title may lead with the job (“cooperation on verified workflows”); first precise mention in body should still use **Qi Intelligent Cooperating System** where the full product name is required. |

## Market-facing page titles (Mintlify frontmatter)

Hub and article pages may use an **outcome-first `title`** for search and first impression while keeping **canonical product names** in prose, tips, and terminology lint. Do not introduce alternate official brands; subtitles are positioning only.

## Current naming corrections

These are the canonical replacements for terms already present in the docs.

| Replace this | With this | Scope |
|---|---|---|
| Spatial Web Stack | IXO Stack | Headings, prose, nav |
| IXO Spatial Web Stack | IXO Stack | Headings, prose, nav |
| Spatial Web SDKs | IXO Stack SDKs | Headings, prose, nav |
| IXO Spatial Web SDKs | IXO Stack SDKs | Headings, prose, nav |
| Spatial Web (generic, when it meant the IXO platform stack) | IXO or IXO Stack | Prefer **IXO Stack** when referring to the full stack |
| ImpactX Client | IXO MultiClient SDK | Headings, prose, nav |
| IXO Spatial Web Multiclient SDK | IXO MultiClient SDK | Headings, prose, nav |
| Multiclient SDK | IXO MultiClient SDK | Headings and first mention |
| IXO Matrix SDK | IXO Matrix Client SDK | Headings, prose, nav |
| Matrix Client | IXO Matrix Client SDK or Matrix client | Use sentence-level generic only when not naming the SDK |
| IXO Oracles SDK | Agentic Oracles ADK | Headings, prose, nav |
| IXO Agentic Oracles SDK | Agentic Oracles ADK | Headings, prose, nav |
| Agentic Oracles SDK | Agentic Oracles ADK | Headings, prose, nav |
| Oracles SDK | Agentic Oracles ADK | Headings and first mention |
| IXO Assistant SDK | Personal Agent ADK | Headings, prose, nav |
| IXO Personal Agent SDK | Personal Agent ADK | Headings, prose, nav |
| IXO Assistant | Personal Agent | End-user/product naming |
| Oracle AI SDK | Personal Agent ADK | Current page content is assistant-oriented |
| Personal Agent SDK | Personal Agent ADK | Public docs name for `@ixo/assistant-sdk` |
| Personal Agent | Personal Agent | Canonical product naming |
| Qi Personal Agent | Personal Agent | Deprecated product name |
| Qi Agent | Personal Agent | Singular product naming should resolve to the canonical personal product name unless the multi-agent product is explicitly intended |
| Companion AI | Personal Agent | End-user/product naming |
| Agents | Qi Agents | Use the full product name where ambiguity is possible |
| Forge | Qi Forge | Use the full canonical product name when referring to the CLI product |
| Emerging | Emerging Platform or Emerging Household Energy | Choose the exact scope |
| Model Context Protocols (MCPs) | Model Context Protocol (MCP) | First expansion must be singular |
| Blockchain MCP | Blockchain MCP Server | Include “Server” in the name |
| Matrix MCP | Matrix MCP Server | Include “Server” in the name |
| Oracle MCP | Agentic Oracles MCP Server | Include `Server` in the name |
| Assistant MCP | Personal Agent MCP Server | Include `Server` in the name |
| IXO Blockchain | IXO Protocol | Use in developer and protocol docs; “IXO blockchain” can still be a generic phrase in body text |
| Qi | Qi Intelligent Cooperating System | Use `Qi` as the short form only after first mention or where context is already explicit |
| Flow | Qi Flow | Use only when naming the product / cooperation surface |
| Flow Engine | Qi Flow Engine | Use the full canonical name in H1s, nav, and first mention |
| Flow Block | Qi Flow Block | Use the full canonical name when referring to the productized block primitive |
| Skills | Qi Skills | Use the full canonical name when referring to the Qi capability system |
| Capsules | Qi Capsules | Use the full canonical name when referring to the runtime kit |

## First-mention rules (enforceable)

### Products

On first mention, use the full canonical product name exactly:

- `IXO MultiClient SDK` (`@ixo/impactxclient-sdk`)
- `IXO Matrix Client SDK` (`@ixo/matrixclient-sdk`)
- `Agentic Oracles ADK` (`@ixo/oracle-agent-sdk`)
- `Personal Agent ADK` (`@ixo/assistant-sdk`)
- `IXO SignX SDK` (`@ixo/signx-sdk`)
- `JAMBO Wallet SDK` (`@ixo/jambo-wallet-sdk`)
- `Qi Intelligent Cooperating System`
- `Qi Flow`
- `Qi Flow Engine`
- `Qi Flow Block`
- `Qi Skills`
- `Qi Capsules`
- `Personal Agent`
- `Qi Agents`
- `Qi Forge`

After first mention, a short form is allowed if it is unambiguous.

### SDKs

On first mention, use:

- `IXO MultiClient SDK` (`@ixo/impactxclient-sdk`)
- `IXO Matrix Client SDK` (`@ixo/matrixclient-sdk`)
- `Agentic Oracles ADK` (`@ixo/oracle-agent-sdk`)
- `Personal Agent ADK` (`@ixo/assistant-sdk`)
- `IXO SignX SDK` (`@ixo/signx-sdk`)
- `JAMBO Wallet SDK` (`@ixo/jambo-wallet-sdk`)

Do not use package literals as heading text. Keep package identifiers exact and in code font only.

### Packages and code literals

For installation commands, imports, env vars, IDs, protocol literals, and endpoints:

- keep the literal exact;
- wrap in code font;
- do not grammaticalize or pluralize package identifiers.

### Protocols and standards

On first mention, use:

- `Model Context Protocol (MCP)`
- `Decentralized Identifier (DID)`
- `Digital measurement, reporting, and verification (dMRV)` in prose  
  Use `Digital MRV` in headings.

### Platforms and solutions

On first mention, always disambiguate scope:

- `Emerging Platform` for reusable platform capability
- `Emerging Household Energy` for the solution implementation

Do not use `Emerging` alone where either interpretation is possible.

## Banned aliases and required replacement behavior

When you encounter a banned alias, replace it using `.codex/TERMINOLOGY_MAP.yml` and this table:

| Banned alias pattern | Replace with | Rule |
|---|---|---|
| `Model Context Protocols`, `MCPs` on first expansion | `Model Context Protocol (MCP)` | Singular first expansion only. |
| `IXO Matrix SDK` | `IXO Matrix Client SDK` | SDK naming normalization. |
| `ImpactX Client` / `Multiclient SDK` | `IXO MultiClient SDK` | Keep package literal unchanged. |
| `Oracle SDK` / `Oracles SDK` (when referring to `@ixo/oracle-agent-sdk`) | `Agentic Oracles ADK` | Public docs name only. |
| `IXO Assistant` / `Companion AI` | `Personal Agent` | Product naming normalization. |
| `Emerging` (ambiguous) | `Emerging Platform` or `Emerging Household Energy` | Must choose explicit scope. |

## H1 rules

Use the canonical public name as the H1 unless the page is a task guide.

Examples:

- `IXO MultiClient SDK`
- `IXO Matrix Client SDK`
- `Personal Agent ADK`
- `Agentic Oracles ADK`
- `IXO SignX SDK`
- `Emerging Platform`
- `Emerging Household Energy Digital MRV`
- `Model Context Protocol (MCP) servers`
- `Qi Intelligent Cooperating System`
- `Qi Flow`
- `Qi Flow Engine`
- `Qi Flow Block`
- `Qi Skills`
- `Qi Capsules`
- `Personal Agent`
- `Qi Agents`
- `Qi Forge`

Do not use a package identifier, alias, or marketing phrase as the H1.

## Glossary

| Term | Definition | Usage rule |
|---|---|---|
| Digital twin | A digital representation of a real-world entity or domain | Default term in docs |
| Cognitive digital twin | A digital twin with intelligent or agentic integration | Use only when the AI layer matters |
| DID | Decentralized Identifier | Expand on first mention once per page |
| dMRV | Digital measurement, reporting, and verification | In body text only after expansion |
| MCP | Model Context Protocol | Singular on first expansion |
| MCP server | A server that exposes IXO services through MCP | Name each server with the `Server` suffix |
| POD | Programmable Organisational Domain | Keep expansion and acronym stable |
| Agentic Oracles | This class of AI agent deployments and oracle services in the IXO ecosystem | Use when referring to the deployment class or framework rather than a specific product |
| Domain | The operating space for digital twin entities such as organisations, projects, assets, deeds, protocols, etc. that each have a DID, controllers, services, resources, executable rights, claim collections, relationships to other entity domains, accounts, and Matrix space with sub-spaces and rooms | Lowercase in prose unless part of a title |
| Personal Agent | The personal AI product built using the Agentic Oracles framework | Use the canonical product name on first mention |
| Qi Agents | Productized agent surfaces built using the Agentic Oracles framework | Use when referring to the product family rather than the underlying framework |
| Qi Forge | The CLI product for building Agentic Oracles | Use the full canonical product name in H1s and first mention |
| Qi Intelligent Cooperating System | The human–AI cooperation system built on IXO for acting on shared, verifiable state | Use the full canonical name on first mention; `Qi` may be used after that when context is explicit |
| Qi Flow | A multiplayer workflow surface for human and AI actors cooperating over shared state | Use the full canonical name in H1s and first mention |
| Qi Flow Engine | The runtime that executes, coordinates, and observes Qi Flows over shared state | Do not use as a synonym for Qi Flow |
| Qi Flow Block | A composable block-level unit within a Qi Flow document or page | Use the full canonical name when referring to the productized primitive |
| Qi Skills | Reusable capability packages that provide scoped actions, tools, and service integrations for Qi runtimes | Do not use as a synonym for SDKs |
| Qi Capsules | The agent executable runtime kit that packages model, skills, tools, and services into a runnable unit | Do not use as a synonym for Qi Skills or Qi Flow Engine |
| Qi Forge CLI | The CLI docs surface for building Agentic Oracles | Use only when naming the CLI docs surface rather than the product itself |

## Decision rules when evidence conflicts

If human-readable names and package identifiers disagree:

1. Normalize the human-readable name to the canonical docs name.
2. Preserve the verified package literal in code font.
3. Do not silently rename imports or install commands without verification.
4. Record the conflict in the task summary.

## Required file updates when a canonical name changes

When you change a surface name, update all of the following where relevant:

- page H1
- page description
- in-page section labels
- authoritative docs config nav labels (`docs.json` or `mint.json`, depending on repo authority)
- internal links
- CTA labels
- glossary references
- adjacent overview pages
