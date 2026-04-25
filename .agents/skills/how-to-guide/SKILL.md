---
name: how-to-guide
description: Write short, practical user-facing how-to guides in MDX. Use when
  the user asks for a task guide, quick how-to, procedural walkthrough, or
  “how do I …” documentation that should stay under ~900 words and focus on
  one outcome.
license: MIT
compatibility: IXO Mintlify docs repo (MDX + docs.json). Read AGENTS.md and
  .codex governance when editing this documentation set.
metadata:
  author: ixo-docs
  version: "1.0"
  template: .codex/templates/short-how-to-guide-template.mdx
---

# Short how-to guide writing skill

## When to use this skill

Use this skill when you need a **short, practical task guide**: one job-to-be-done, minimum context, copy-paste-friendly steps, explicit verification, and only realistic troubleshooting.

Do **not** use it for product overviews, deep reference pages, or architecture articles. For longer task guides, you may still start from the same principles; compare `.codex/templates/guide-page-template.mdx` if the flow needs more narrative.

## Source of truth for structure

**Before drafting**, open and follow:

`.codex/templates/short-how-to-guide-template.mdx`

That file defines section order, frontmatter shape, authoring constraints, and word-count targets. This skill adds repo-specific rules and fixes common template rendering issues (see “MDX structure” below).

## Governance you must respect

Read or recall from `AGENTS.md` and `.codex/`:

- **One guide = one outcome.** Do not merge unrelated tasks.
- **Do not invent technical facts** (package names, commands, endpoints, chain IDs, methods). Use verified literals from the repo, linked references, or existing docs; if unsure, link to the canonical reference instead of guessing.
- **Human-readable names in prose**; package identifiers in code font only when referring to install/import.
- **New pages** need a home in `docs.json` navigation or they will not appear in the site.
- **Environment-specific values** (RPC URLs, chain IDs, regions): prefer linking to the canonical networks/endpoints (or equivalent) page rather than duplicating matrices in the guide.
- **Terminology**: align with `.codex/NAMING_TAXONOMY.md` and `.codex/TERMINOLOGY_MAP.yml` when you touch product or protocol names.

## Workflow

1. **Clarify the single outcome** in one sentence (what the reader will have or be able to do when done).
2. **Search the repo** for an existing guide that already covers the task. Extend or link instead of duplicating (AGENTS.md: one concept, one canonical page).
3. **Read 1–2 similar guides** under `guides/` or `guides/users/` for voice, heading style, and link patterns.
4. **Draft from the template**, filling every section. Remove sections only if they truly do not apply (e.g. no CLI → omit bash blocks, not the whole verification idea).
5. **Verify every link and CTA** you add or touch; remove or relabel broken “view on npm/source” style links.
6. **Update `docs.json`** if you add a route or change where the page lives.

## Required page structure (from the template)

Map content to these sections in order:

| Section | Purpose |
| -------- | -------- |
| Frontmatter | `title`, `description`, optional `sidebarTitle` — outcome-focused, How to "…” style title |
| Opening | H1 matching the task; one sentence stating the outcome; optional short example line |
| Before you start | Required vs optional prerequisites (access, accounts, tools, starting state) |
| What you will do | Numbered list of 3–5 **outcomes** (not micro-clicks) |
| Steps | One section per major step; each with action, minimal example, **expected result** |
| Verify it worked | Concrete checks (commands and/or UI); what “good” looks like |
| Troubleshooting | Only high-likelihood issues; symptom → cause → fix |
| Related references | Bullets linking to canonical reference / next guide — no paste-in of reference tables |

**Length:** aim for **400–900 words**. If you exceed that, split the job into another guide or move depth to a reference page and link out.

**Tone:** second person (“you”), present tense for the current task, active voice, no vision/history unless it prevents a mistake.

## MDX structure (fix-ups the template implies)

- Use proper **heading hierarchy**: one H1 (`#`), then **H2** (`##`) for every major section including each step (e.g. `## Step 1 — …`, `## Step 2 — …`).
- Use **standard Markdown list bullets** (`-`), not special Unicode bullets.
- **Placeholders** in prose and examples: angle brackets, e.g. `<your-project-id>`, `<your-api-key>`.
- **Code and commands** must be copy-pasteable where possible; mark illustrative-only snippets clearly in prose.
- Prefer **root-relative internal links** without file extensions (e.g. `/reference/networks-and-endpoints`), consistent with the rest of the site.

## Mintlify components (use sparingly)

This repo’s Cursor rules recommend:

- **`<Steps>` / `<Step title="…">`** when the procedure is clearly sequential and benefits from scannable steps.
- **`<Warning>`** for destructive, security-sensitive, or irreversible actions.
- **`<Tip>`** for optional shortcuts that do not belong in the main path.
- **`<Note>`** for brief clarifications that would clutter the step.

Do not wrap the whole guide in components; keep the page easy to skim as plain MDX.

## Content quality checklist

Before you finish:

- [ ] Single, explicit outcome; title starts with “How to …” (or equivalent clear task title per nav needs).
- [ ] Prerequisites appear before procedural steps.
- [ ] Every step advances the user; no filler or generic “benefits.”
- [ ] Expected results are stated after substantive steps.
- [ ] Verification is concrete (signals the reader can observe).
- [ ] Troubleshooting is short and plausible; no encyclopedic error lists.
- [ ] Related links point at canonical pages; deep detail is delegated to reference.
- [ ] No invented literals; environment variance is linked, not guessed.
- [ ] `docs.json` updated if the page is new or moved.

## Anti-patterns

- Long conceptual introductions or marketing language.
- Duplicating SDK/API reference material inline — **link** instead.
- Screenshots unless the UI is hard to describe and stable (template guidance).
- Multiple unrelated tasks in one guide.
- Steps without an expected result or verification.

## Change summary (for the user)

When you complete a guide task, report:

- **Files changed**
- **Canonical names** normalized (if any)
- **Routes or nav** updated (`docs.json`)
- **Links** verified or removed
- **Open questions / blocked items** (missing verified literals, unclear ownership)
