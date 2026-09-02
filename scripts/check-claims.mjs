#!/usr/bin/env node
/**
 * Walk every published *.md under a tree (default: cwd) and fail on
 * live-model / unsourced-path claims. Used in CI on Mine-FNL/grok-skills.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(process.argv[2] || ".");

export const CLAIM_BANS = [
  /Grok actually reads/i,
  /Grok picks up/i,
  /so an agent can route/i,
  /Claude-compatible marketplace/i,
  /Same files work in Claude Code and Codex/i,
  /this workspace already uses/i,
  /~\/\.grok\/skills/,
  /when-to-use:/,
  /allowed-tools:/,
  /\.grok\/skills\/design-ui/,
];

export function walkMarkdown(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name === ".git" || name === "node_modules") continue;
    const path = join(dir, name);
    const st = statSync(path);
    if (st.isDirectory()) out.push(...walkMarkdown(path));
    else if (name.endsWith(".md")) out.push(path);
  }
  return out;
}

const files = walkMarkdown(ROOT);
const hits = [];
for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const ban of CLAIM_BANS) {
    if (ban.test(text)) hits.push(`${file} matched ${ban}`);
  }
}

if (hits.length) {
  console.error(hits.join("\n"));
  process.exit(1);
}

console.log(`ok ${files.length} markdown files under ${ROOT}`);
