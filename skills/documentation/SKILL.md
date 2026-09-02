---
name: "documentation"
description: "Write the doc the next person will search for: how to run it, how it fails, and where the source of truth lives. Use when the user asks to write the README."
when-to-use: "write the README, document this, API docs, runbook, explain how to use it"
allowed-tools: "Read, Grep, Glob"
user-invocable: true
metadata:
  author: Mine-FNL
  short-description: "Write the doc the next person will search for: how to run it, how it fails, and where the source of truth lives."
  category: "design"
---

# Documentation

Write the document you wish existed when you cloned the repo at 11pm.

## What to include
- What this is, in one paragraph, with the audience named.
- A command that actually works. Copy it from the repo; run it if you can.
- Configuration: env vars, defaults, which are secrets.
- How it fails: common errors and the file that owns the behavior.
- Where the source of truth is (this doc vs code vs a spec). If they disagree, believe the code and fix the doc.

## What to exclude
- History of the project
- "Simply" and "just"
- Architecture diagrams that are already stale
- Duplicating type signatures the compiler owns — link to them

Keep READMEs short. Deep runbooks live next to the operator path. Delete docs that cannot name their reader.
