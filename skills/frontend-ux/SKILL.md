---
name: "frontend-ux"
description: "Make the interface usable on a phone and a laptop: hierarchy, empty states, and no dead clicks. Use when the user asks to UX review."
when-to-use: "UX review, this UI is messy, mobile layout, accessibility, polish the page"
allowed-tools: "Read, Grep, Glob"
user-invocable: true
metadata:
  author: Mine-FNL
  short-description: "Make the interface usable on a phone and a laptop: hierarchy, empty states, and no dead clicks."
  category: "design"
---

# Frontend UX

The page has to work at 390px and at 1280px. Clicks have to do something.

## Pass
1. Hierarchy: one primary action per view. Everything else is quieter.
2. Spacing and type on a scale. No one-off 13px.
3. Empty, loading, and error states exist and are honest.
4. Forms: labels, errors next to the field, submit disabled only while in-flight, focus order.
5. Touch targets ≥ 44px. No hover-only actions.
6. Contrast: text vs surface. If you set a background, set the foreground.
7. Motion is short and optional (`prefers-reduced-motion`).

## Do not
- Invent a second visual language.
- Use emoji as icons.
- Hide destructive actions behind unlabeled icons.

Name the top three UX defects, then fix them if the task is to implement, or stop after the list if the task is to review.
