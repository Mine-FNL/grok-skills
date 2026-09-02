---
name: "pr-description"
description: "Write the PR a reviewer wants: intent, risk, test plan, and what you deliberately did not do. Use when the user asks to write the PR."
when-to-use: "write the PR, pull request description, summarize this diff for review"
allowed-tools: "Read, Grep, Bash"
user-invocable: true
metadata:
  author: Mine-FNL
  short-description: "Write the PR a reviewer wants: intent, risk, test plan, and what you deliberately did not do."
  category: "delivery"
---

# PR Description

Write the description the reviewer will actually use. The diff is not the description.

## Template
**Intent** — one or two sentences. What problem, for whom.

**What changed** — bullets of behavior, not files.

**Risk** — data, auth, migrations, user-visible breakage. "Low" is not an explanation.

**Test plan**
1. Command you ran
2. What you observed
3. What you could not run (and why)

**Out of scope** — temptations you skipped so the reviewer does not ask.

**Rollback** — revert the PR / run the down migration / flip the flag.

## Rules
- Link the issue if there is one.
- Screenshots only for UI. Alt-text the important bit in the caption.
- Do not say "minor refactor" if you touched auth.
