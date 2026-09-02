---
name: "debugging"
description: "Reproduce first, then isolate. Turn a failing run into a root cause and a minimal fix. Use when the user asks to debug this."
user-invocable: true
metadata:
  short-description: "Reproduce first, then isolate. Turn a failing run into a root cause and a minimal fix."
---

# Debugging

Reproduce before you theorize. A stack trace is a clue, not a diagnosis.

## Method
1. Restate the failing behavior in one sentence: observed vs expected, and how you know.
2. Find the smallest command or test that fails. Run it. Paste the actual output.
3. Bisect the path: input → boundary → state → output. Name the last place the value was still right.
4. Form one hypothesis. Predict what you will see if it is true. Check that, not three theories at once.
5. Fix the cause, not the symptom. Add a regression test that would have failed before the fix.
6. Re-run the original reproduction. If you cannot, say so.

## Output
- Reproduction
- Root cause (one paragraph)
- Fix
- Regression test
- What you did not change, and why

## Do not
- Sprinkle logs "just in case" and call it done.
- Catch-and-swallow to make the test green.
- Blame the framework until you have read the call site.
