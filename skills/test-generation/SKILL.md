---
name: "test-generation"
description: "Cover the behavior that can actually break: edges, errors, and the regression that bit you. Use when the user asks to write tests."
user-invocable: true
metadata:
  short-description: "Cover the behavior that can actually break: edges, errors, and the regression that bit you."
---

# Test Generation

Generate tests that would have caught a real bug. Coverage percentage is not the goal.

## Method
1. Read the unit under test and list the behaviors: happy, empty, invalid, boundary, concurrent if it shares state.
2. Prefer existing test helpers and fixtures. Match the repo's style exactly.
3. Each test: arrange, act, assert one behavior. No giant "kitchen sink" cases.
4. Include the error path with the exact error type/message the code promises.
5. For I/O, freeze time, clock, and network. Do not hit live services.

## Priorities
1. Regression for a stated bug
2. Boundary and invalid input
3. Authz deny cases
4. Idempotency / retry
5. Snapshot UI only when layout is the contract

Delete any generated test that only restates the implementation line-for-line. If you cannot name the bug it would catch, drop it.
