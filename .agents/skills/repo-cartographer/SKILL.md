---
name: repo-cartographer
description: Map repository structure, ownership boundaries, and architectural hotspots to accelerate onboarding and change planning. Use when users ask for codebase overviews, where-to-change guidance, dependency surfaces, or impact analysis before edits.
---

# Repo cartographer

## Purpose

Use this skill to quickly produce a practical map of an unfamiliar repository before implementation work starts.

## What to produce

Deliver a concise map with:

1. Top-level areas and their purpose.
2. Entry points and runtime flow.
3. Core modules and cross-module dependencies.
4. Ownership boundaries and high-churn hotspots.
5. Recommended edit locations for the requested task.
6. Risks and unknowns that require validation.

## Workflow

1. **Scan layout**
   - Identify primary directories, build config, and app entry points.
   - Classify each area: app, platform, infra, tooling, docs, tests.

2. **Trace execution paths**
   - Follow request or event flow from entry point to side effects.
   - Note boundaries such as API layer, service layer, persistence, and external integrations.

3. **Map dependencies**
   - Capture critical imports or package relationships that constrain changes.
   - Highlight coupling risks and shared utilities that affect multiple surfaces.

4. **Locate change surface**
   - Recommend the smallest safe set of files to edit for the user request.
   - Call out adjacent files that should be reviewed to avoid regressions.

5. **Summarize for action**
   - Provide a short, implementation-ready map with clear next edits.
   - Separate verified facts from assumptions.

## Output template

Use this structure in your response:

```markdown
## Repository map
- Scope: <what was mapped>
- Primary areas:
  - `<path>`: <purpose>
  - `<path>`: <purpose>

## Execution flow
- Entry point: `<file/symbol>`
- Flow: `<step 1>` -> `<step 2>` -> `<step 3>`
- External boundaries: <APIs, queues, storage, third-party services>

## Change guidance
- Recommended edit files:
  - `<path>`: <why>
  - `<path>`: <why>
- Files to review:
  - `<path>`: <risk check>

## Risks and unknowns
- Risk: <description>
- Unknown: <what to verify>
```

## Guardrails

- Prefer concrete paths and symbols over generic advice.
- Avoid inventing architecture details; mark uncertain points explicitly.
- Keep maps compact and actionable for immediate implementation.
