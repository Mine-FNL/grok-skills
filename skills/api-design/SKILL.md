---
name: "api-design"
description: "Shape HTTP and RPC so clients can evolve. Idempotency, errors, pagination, compatibility. Use when the user asks to API design."
user-invocable: true
metadata:
  short-description: "Shape HTTP and RPC so clients can evolve. Idempotency, errors, pagination, compatibility."
---

# API Design

Design the API as a contract that will outlive this week's UI.

## Checklist
- Resources and actions are obvious from the path and method. Do not hide deletes behind POST without a reason.
- Errors: stable machine `code`, HTTP status that matches, no stack traces to clients.
- Pagination: cursor over offset for anything that can grow. Document the cursor as opaque.
- Idempotency: POST that creates money or messages takes an idempotency key.
- Authz is object-level, not "the user is logged in".
- Breaking changes are additive first (new fields, new endpoints). Do not reuse a field for a new meaning.
- Time is UTC ISO-8601. Money is integer minor units + currency.

## Output
Resource list, example requests, error table, compatibility note, and what you refused to add.
