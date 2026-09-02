---
name: "architecture-review"
description: "Judge module boundaries, data flow, and failure modes before the system calcifies. Use when the user asks to architecture review."
when-to-use: "architecture review, is this the right design, system design, module boundaries"
allowed-tools: "Read, Grep, Glob"
user-invocable: true
metadata:
  author: Mine-FNL
  short-description: "Judge module boundaries, data flow, and failure modes before the system calcifies."
  category: "engineering"
---

# Architecture Review

Review the design as it will exist in a year, not the diagram as it looks today.

## Method
1. Draw the runtime: processes, stores, queues, and who can fail independently.
2. Name the core domain objects and which module is allowed to mutate each.
3. Check coupling: a change in A should not require a change in C unless they share a contract.
4. Check data flow: every write has an owner, every read has a freshness story, every delete has a tombstone or cascade rule.
5. Check failure: timeouts, retries, idempotency, poison messages, partial commits.
6. Check operability: how you will debug this at 2am with logs and one metric.

## Verdict
- **Fit** — this shape matches the problem.
- **Fit with conditions** — name the conditions.
- **Wrong shape** — name the smaller shape that would work.

Do not recommend a new framework, a rewrite, or a service split unless the current module cannot enforce its invariant. Prefer a boring module boundary over a clever one.
