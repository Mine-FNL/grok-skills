---
name: "incident-response"
description: "Stabilize first. Then find the blast radius, the trigger, and the fix that will not make it worse. Use when the user asks to incident."
when-to-use: "incident, outage, SEV, production is down, rollback or fix forward"
allowed-tools: "Read, Grep, Glob, Bash"
user-invocable: true
metadata:
  author: Mine-FNL
  short-description: "Stabilize first. Then find the blast radius, the trigger, and the fix that will not make it worse."
  category: "delivery"
---

# Incident Response

Priority is user impact, then stop the bleeding, then understand, then fix, then write it down.

## Stabilize
1. Is it still happening? Who is affected? Since when?
2. Roll back or disable the last change if that is the faster restore. Fix-forward only when rollback is impossible or worse.
3. Do not deploy unrelated changes during the incident.

## Diagnose
- Symptom, first bad version, first bad config, first bad query.
- Blast radius: which tenants, regions, tables.
- One timeline with timestamps. Guessing is labeled as a guess.

## Close
- User-facing status if that is your job.
- Fix + regression test or guard.
- Follow-ups with owners. "We should monitor this" is not a follow-up.

Do not write a witty postmortem. Write a dull, true one.
