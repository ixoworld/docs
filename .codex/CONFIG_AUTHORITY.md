# Config authority for docs upgrade

This file defines which repository configuration files are authoritative during the docs upgrade.

## Current authority decision

- Authoritative docs site config: `docs.json`
- Non-authoritative/deprecated in this repo: `mint.json` (file is currently absent)
- Mintlify icon library selection (for example `icons.library`) is part of `docs.json` authority. This repo documents **Font Awesome** as the active library for string `icon` values unless maintainers change that setting in a deliberate migration.

## Why this decision is current truth

- The repo contains `docs.json` with active Mintlify schema and full navigation/site settings.
- The repo does not contain `mint.json`.
- Existing governance and skill instructions already reference `docs.json` as the Mintlify source of truth.

## Agent behavior contract

Until a future migration task explicitly changes this decision, all agents must:

1. Treat `docs.json` as the only writable source of truth for docs site configuration.
2. Never create or edit `mint.json` as part of normal docs tasks.
3. If instructions, comments, or legacy notes mention `mint.json`, treat that as stale guidance and update governance docs to point to `docs.json`.
4. If both files ever appear in the same branch later:
   - Prefer `docs.json` for functional changes.
   - Do not attempt auto-sync between files.
   - Open an explicit migration follow-up and document ambiguity in task output.

## Known uncertainty

- This decision is based on repository state and governance intent, not external platform runtime logs.
- If deployment behavior ever appears inconsistent with `docs.json`, pause and verify with maintainers before changing authority.
