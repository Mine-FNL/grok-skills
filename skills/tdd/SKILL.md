---
name: "tdd"
description: "Red, green, refactor. Write the failing test that pins the contract, then the smallest pass. Use when the user asks to TDD."
when-to-use: "TDD, test-driven, write the test first, red green refactor"
allowed-tools: "Read, Grep, Glob, Bash"
user-invocable: true
metadata:
  author: Mine-FNL
  short-description: "Red, green, refactor. Write the failing test that pins the contract, then the smallest pass."
  category: "quality"
---

# TDD

No production code until a test is red for the right reason.

## Cycle
1. Write one test that names the behavior. Run it. It must fail — and the failure must be the assertion, not an import error you paper over.
2. Write the smallest code that makes that test green. No extra branches.
3. Refactor only while green. If you need a new behavior, start a new cycle.

## Rules
- One behavioral increment per cycle.
- Test the contract, not the private helper, unless the helper is the contract.
- Names say who/when/then: `refunds_partial_capture_after_timeout`.
- If the test needs a novel, the API is wrong — shrink the surface.

## Output
The failing test, the passing implementation, the command, and the next increment you did not take.
