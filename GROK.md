---
name: grok-skills
description: Catalog of SKILL.md instruction packs for Grok Build.
---

# Grok Skills

This repository is a catalog, not an application. Each skill lives at `skills/<slug>/SKILL.md`.

Frontmatter matches Grok Build's bundled skills under `.grok/skills/`: `name`, `description`, `user-invocable`, `metadata.short-description`. Trigger language belongs in `description`. This file does not claim a host routed these packs.

## When editing

- Keep the body imperative. Name the method, the output, and what not to do.
- Do not add emoji. Do not write marketing.
- Quote YAML values (colons appear in descriptions).
- If you add a skill, add `skills/<slug>/SKILL.md`, `docs/icons/<slug>.svg`, a card in the intro table, and a Catalog row.

## Layout

- `skills/<slug>/SKILL.md` — the pack
- `docs/icons/<slug>.svg` — 64px tile used by the README grid
- `.claude-plugin/` — Claude Code plugin manifest files (format only)
- `GROK.md` — this file
