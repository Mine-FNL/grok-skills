---
name: "security-audit"
description: "Hunt OWASP-class bugs in the code you can actually reach: injection, authz, secrets, SSRF. Use when the user asks to security audit."
when-to-use: "security audit, threat model, is this exploitable, OWASP, authz review"
allowed-tools: "Read, Grep, Glob, Bash"
user-invocable: true
metadata:
  author: Mine-FNL
  short-description: "Hunt OWASP-class bugs in the code you can actually reach: injection, authz, secrets, SSRF."
  category: "engineering"
---

# Security Audit

You are looking for bugs an attacker can actually hit in this codebase. Not a generic OWASP essay.

## Method
1. Map the trust boundary: what is user-controlled, what is privileged, what is secret.
2. For each new or changed entry point, check:
   - Injection (SQL, command, template, header)
   - Authn vs authz (authenticated ≠ allowed)
   - IDOR / missing object-level checks
   - Path traversal and file writes
   - SSRF and URL allowlists
   - Secret handling (logs, URLs, client bundles)
   - CSRF / CORS / cookie flags on browser surfaces
   - Deserialization and YAML/JSON bombs
3. Confirm with the code path. "Looks sanitized" is not a finding unless you opened the sanitizer.
4. Rate each issue: exploitable now, needs another bug, defense-in-depth.

## Findings
File, sink, source, exploit sketch (one paragraph), fix that is local to this change. Do not recommend a product. Do not dump a 50-item checklist that did not apply.

If you find nothing exploitable, say so, and name the two places you would still watch.
