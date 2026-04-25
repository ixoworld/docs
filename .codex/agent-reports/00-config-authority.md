# Agent 00 report: config authority baseline

## Goal

Settle repository config authority and establish a safe tooling baseline for the docs upgrade.

## Evidence collected

- `docs.json` exists and contains active Mintlify schema plus site navigation and settings.
- `mint.json` does not exist in the repository.
- `AGENTS.md` previously referenced `mint.json` as nav authority, which conflicted with actual repo state.
- Current MDX lint script requires local dependencies and does not pass repo-wide today due to existing content errors outside this task scope.

## Decisions

1. Authoritative config path is `docs.json`.
2. `mint.json` is treated as deprecated/non-authoritative for this repo.
3. No dual-config runtime is required right now because only `docs.json` exists.
4. If dual-config appears later, agents must prefer `docs.json` and avoid auto-sync behavior.

## Changes made

- Updated `AGENTS.md` to:
  - reference `docs.json` as site config authority
  - remove routine `mint.json` editing guidance
  - include `.codex/CONFIG_AUTHORITY.md` in required read order
- Added `.codex/CONFIG_AUTHORITY.md` with explicit authority contract and mixed-state handling.
- Added `.codex/README.md` and linked config authority into governance read flow.
- Updated `.codex/QA_CHECKLIST.md` to enforce config authority checks.
- Updated `.codex/STYLE_GUIDE.md` with config authority and conflict-resolution guidance.
- Expanded `package.json` scripts with:
  - `preview` (`npx mint dev`)
  - `lint:mdx` (existing behavior retained)
  - `lint:links` placeholder
  - `lint:terminology` placeholder
  - `qa:docs` aggregate command

## CI decision

No `.github/workflows` scaffolding was added in this task.

Reason:
- The current `lint:mdx` command fails on existing repository content.
- Adding blocking CI now would fail clean merges unrelated to this baseline task.

## Known uncertainty

- `preview` assumes Mintlify CLI availability through `npx`; this is the safest non-invasive default without pinning additional tool dependencies in this task.
- Link and terminology checks remain placeholders until a scoped implementation task chooses concrete tools and pass criteria.
