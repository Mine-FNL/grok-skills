---
name: "spec-writing"
description: "Turn a vague ask into a spec an agent can build against: scope, invariants, and done-when. Use when the user asks to write a spec."
user-invocable: true
metadata:
  short-description: "Turn a vague ask into a spec an agent can build against: scope, invariants, and done-when."
---

# Spec Writing

A spec an agent can implement without guessing.

## Required sections
1. **Problem** — who hurts, and how we will know it stopped.
2. **Scope** — in, and explicitly out.
3. **Invariants** — things that must remain true. Authz, data ownership, compatibility.
4. **Behavior** — numbered acceptance cases. Each has input, result, and a failure.
5. **Surfaces** — screens, endpoints, jobs. Not mockups unless the layout is the contract.
6. **Done when** — commands, tests, or manual checks. If it is not checkable, it is not done.
7. **Risks** — what we will fake in v1 and what we will not.

## Voice
Imperative. "The server refuses X." Not "we should consider perhaps."

If the ask is still a vibe, ask the one question that would change the design — then write the spec with a stated assumption rather than blocking forever.
