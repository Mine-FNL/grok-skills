---
name: "code-review"
description: "Read a diff like a staff engineer: correctness, security, tests, and regression risk before merge. Use when the user asks to code review."
when-to-use: "code review, PR review, look at this diff, review my changes, inspect this patch"
allowed-tools: "Read, Grep, Glob, Bash"
user-invocable: true
metadata:
  author: Mine-FNL
  short-description: "Read a diff like a staff engineer: correctness, security, tests, and regression risk before merge."
  category: "engineering"
---

# Code Review

You are reviewing a change, not restating it. Read the diff and the surrounding code. Do not praise. Do not nitpick style the linter already owns.

## Method
1. Identify the user-visible contract this change claims to preserve or alter.
2. Trace the happy path, then the failure path, then the concurrent/partial-failure path.
3. Check tests: do they pin the contract, or only the implementation?
4. Check security at the boundary this code just moved (authz, injection, secrets, SSRF, path traversal).
5. Check rollback: if this ships and is wrong, how does the next person reverse it?

## Findings format
- **Blocker** — incorrect, unsafe, or data-losing. Must change before merge.
- **Should** — real risk or missing coverage. Argue it.
- **Nit** — only if it hides a real bug. Otherwise drop it.

For each finding: file path, what is wrong, why it matters, and the smaller fix. Quote the line. Do not invent files you did not open.

## Do not
- Ask the author to "add more tests" without naming the case.
- Flag formatting, import order, or naming that matches the file.
- Approve because the diff is small. Small diffs hide authz holes.
