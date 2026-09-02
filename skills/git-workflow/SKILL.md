---
name: "git-workflow"
description: "Branch, commit, and PR with a history someone can actually bisect six months later. Use when the user asks to git."
user-invocable: true
metadata:
  short-description: "Branch, commit, and PR with a history someone can actually bisect six months later."
---

# Git Workflow

History is a tool. Write it so a human can bisect.

## Defaults
- Branch from the default branch. Name: `fix/`, `feat/`, `chore/` + short slug.
- Commits are present-tense, scoped, and about *why* if the diff is not obvious: `fix(auth): deny missing workspace on write`.
- One concern per commit. Do not mix format-only with behavior.
- Prefer rebase-and-fast-forward on a private branch; do not rebase a shared branch.
- Never force-push `main`. Never commit secrets, `node_modules`, or local env files.

## PR shape
Small enough to review in 20 minutes. If not, split by behavior, not by file type.

## Recover
If you botched the last commit and it is not pushed: amend only when the task asked. Otherwise a follow-up commit is safer.
