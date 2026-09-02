---
name: "performance"
description: "Measure before you change. Find the real hot path, then cut latency or allocations there. Use when the user asks to this is slow."
user-invocable: true
metadata:
  short-description: "Measure before you change. Find the real hot path, then cut latency or allocations there."
---

# Performance

Measure. Then change the hot path. Then measure again.

## Method
1. Define the budget: p99, payload size, allocations, or query count — pick one.
2. Reproduce the slow case with a command or test. Record the baseline number.
3. Find the hot path with evidence (query log, profiler, N+1 count, flame). Do not guess.
4. Fix in this order: algorithmic (N² → N), then round-trips, then allocation, then micro.
5. Re-measure the same case. If the number did not move, the fix is not the fix.

## Typical bugs to look for
- N+1 queries and missing composite indexes
- Loading a whole table to filter in memory
- Unbounded JSON / log / HTML in a hot handler
- Chatty chatty chatty sequential HTTP in a loop
- Recomputing a stable value per request

Do not "add a cache" as the first move. Caches hide the bug and expire wrong.
