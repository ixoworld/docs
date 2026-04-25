# Codex governance pack

This directory contains the operating rules for the IXO docs upgrade.

## Read order

Read and apply these files in order before substantial edits:

1. `AGENTS.md`
2. `.codex/README.md`
3. `.codex/CONFIG_AUTHORITY.md`
4. `.codex/NAMING_TAXONOMY.md`
5. `.codex/TERMINOLOGY_MAP.yml`
6. `.codex/STYLE_GUIDE.md`
7. `.codex/CONTENT_MODEL_AND_IA.md`
8. `.codex/UPGRADE_BACKLOG.md`
9. `.codex/QA_CHECKLIST.md`
10. `.codex/REDIRECTS_AND_DEPRECATIONS.md`
11. `.codex/templates/*.mdx`

## What this pack controls

- Canonical naming and terminology
- Page types and information architecture
- Redirect/deprecation decisions
- QA and release-readiness checks
- Config authority for docs tooling and navigation

## Config authority

For this repo, `docs.json` is authoritative for Mintlify site configuration and navigation.

See `.codex/CONFIG_AUTHORITY.md` for required behavior in mixed or legacy states.
