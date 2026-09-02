#!/usr/bin/env node
/**
 * Phrase tripwire over published files.
 *
 * A green run means none of CLAIM_BANS matched. It is not a claim-class
 * check: a reworded live-model claim will pass. Do not read CI success as
 * "no unproven claims here."
 *
 * Used in CI on Mine-FNL/grok-skills (markdown). The catalog preview in
 * the builder workspace runs the same list over src/.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

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

export function walkFiles(dir, { ext = [".md"] } = {}) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name === ".git" || name === "node_modules") continue;
    const path = join(dir, name);
    const st = statSync(path);
    if (st.isDirectory()) out.push(...walkFiles(path, { ext }));
    else if (ext.some((e) => name.endsWith(e))) out.push(path);
  }
  return out;
}

export function findHits(root, opts) {
  const files = walkFiles(root, opts);
  const hits = [];
  for (const file of files) {
    const text = readFileSync(file, "utf8");
    for (const ban of CLAIM_BANS) {
      if (ban.test(text)) hits.push(`${file} matched ${ban}`);
    }
  }
  return { files, hits };
}

const invoked = process.argv[1] ? resolve(process.argv[1]) : "";
if (invoked === fileURLToPath(import.meta.url)) {
  const root = resolve(process.argv[2] || ".");
  const { files, hits } = findHits(root);
  if (hits.length) {
    console.error(hits.join("\n"));
    process.exit(1);
  }
  console.log(
    `ok ${files.length} markdown files under ${root} (phrase tripwire; not a claim-class check)`,
  );
}
