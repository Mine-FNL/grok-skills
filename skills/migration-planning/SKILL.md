---
name: "migration-planning"
description: "Move data or systems without a night-of surprise. Dual-write, backfill, cutover, rollback. Use when the user asks to migration plan."
when-to-use: "migration plan, cutover, dual-write, backfill, move off this system"
allowed-tools: "Read, Grep, Glob"
user-invocable: true
metadata:
  author: Mine-FNL
  short-description: "Move data or systems without a night-of surprise. Dual-write, backfill, cutover, rollback."
  category: "planning"
---

# Migration Planning

A migration is a sequence of reversible steps, not a weekend.

## Plan shape
1. **Why** — the invariant the old system cannot keep.
2. **Inventory** — data, callers, jobs, SLAs, rollback windows.
3. **Strategy** — expand/contract, dual-write, shadow-read, or one-time copy. Pick one and say why the others lost.
4. **Steps** — each step is deployable, observable, and reversible on its own.
5. **Backfill** — batch size, idempotency, how you know it finished.
6. **Cutover** — the flag, the watch, the abort.
7. **Cleanup** — when the old path dies, and who turns it off.
8. **Risks** — the two ways this pages the on-call.

Do not schedule "migrate everything" as step 1. Do not skip the abort criterion.
