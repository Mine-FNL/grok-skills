---
name: "repo-health-check"
description: "Map a new codebase fast: layout, how to run it, the risky bits, the smallest safe first change. Use when the user asks to new repo."
when-to-use: "new repo, what's in here, health check, onboarding, how do I run this"
allowed-tools: "Read, Grep, Glob, Bash"
user-invocable: true
metadata:
  author: Mine-FNL
  short-description: "Map a new codebase fast: layout, how to run it, the risky bits, the smallest safe first change."
  category: "quality"
---

# Repo Health Check

You just landed in a repo. Become useful in one pass.

## Report these, in order
1. **What it is** — one paragraph, no marketing.
2. **How to run it** — the actual command from the README or package scripts. Run a cheap check if you can (`--help`, typecheck, unit subset).
3. **Layout** — the 8–12 paths that matter, not a tree dump.
4. **Invariants** — auth, data, build, deploy. Quote the file that enforces each.
5. **Risks** — untested money/auth paths, generated files checked in, secrets, flaky scripts.
6. **First safe change** — the smallest useful edit that will not require a rewrite.

## Do not
- Propose a reorg on sight.
- List every TODO.
- Claim tests pass if you did not run them.
