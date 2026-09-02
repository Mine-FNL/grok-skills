---
name: "database-schema"
description: "Model the data so the queries you will actually run stay honest as the product grows. Use when the user asks to schema."
when-to-use: "schema, migration, postgres, indexes, normalize, foreign keys"
allowed-tools: "Read, Grep, Glob"
user-invocable: true
metadata:
  author: Mine-FNL
  short-description: "Model the data so the queries you will actually run stay honest as the product grows."
  category: "design"
---

# Database Schema

The schema is the product. Migrations are how you tell the truth about it over time.

## Method
1. List the invariants: uniqueness, ownership, deletion, money, time.
2. Tables named for the noun. Columns that need an index are the ones in WHERE/JOIN you will actually run — prove it with a query, not a guess.
3. Foreign keys on by default. Soft-delete only when you can state the restore story.
4. NOT NULL unless you have a real unknown. Default values that encode business rules belong in code *and* the constraint.
5. Migrations are expand → backfill → contract. Never drop+rename in one step on a live table.

## Red flags
- ENUM columns you will regret
- JSON blobs for data you will query
- Missing unique constraints "because the app checks"
- TIMESTAMP without time zone

Output the DDL, the indexes, the down migration, and the query you expect to be fast.
