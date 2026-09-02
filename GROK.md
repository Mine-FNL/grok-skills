---
name: grok-skills
description: Catalog of production-ready SKILL.md packs for Grok Build.
---

# Grok Skills

This repository is a catalog, not an application. Each skill lives at `skills/<slug>/SKILL.md` and follows the Agent Skills format (YAML frontmatter + method body).

## When editing

- Keep the body imperative. Name the method, the output, and what not to do.
- Do not add emoji. Do not write marketing.
- Frontmatter `description` must include when-to-use language so Grok can route.
- Quote YAML values (colons appear in descriptions).
- After changing a skill, regenerate nothing else — `README.md` cards are hand-maintained from the same catalog. If you add a skill, add a card in the intro table, an icon in `docs/icons/`, and a row under Catalog.

## Layout

- `skills/<slug>/SKILL.md` — the pack
- `docs/icons/<slug>.svg` — 64px tile used by the README grid
- `.claude-plugin/marketplace.json` — Claude-compatible marketplace
- `GROK.md` — this file
