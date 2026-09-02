---
name: "refactoring"
description: "Change structure without changing behavior. Keep the diff small and the tests green. Use when the user asks to refactor."
when-to-use: "refactor, clean this up, extract this, reduce duplication, rename across the module"
allowed-tools: "Read, Grep, Glob, Bash"
user-invocable: true
metadata:
  author: Mine-FNL
  short-description: "Change structure without changing behavior. Keep the diff small and the tests green."
  category: "engineering"
---

# Refactoring

Behavior stays. Structure moves. If you need a behavior change, stop and split the work.

## Method
1. Characterize current behavior with tests you can run. If none exist, add characterization tests first.
2. Name the smell: duplication, feature envy, god object, shotgun surgery, leaky abstraction.
3. Pick the smallest mechanical move that pays down that smell (extract, inline, move, rename).
4. Keep the diff in one theme. Do not mix renames with logic changes.
5. Run the tests after every move. A red test means you changed behavior — revert that step.

## Guardrails
- Public APIs keep their signatures unless the task is explicitly a breaking change.
- Do not "improve" control flow you do not have tests for.
- Delete dead code only when you can prove nothing imports it.
- Comments that restate the code go; comments that record a constraint stay.

## Output
What moved, what is now easier, the test command that stayed green, and any follow-up that was tempting but out of scope.
