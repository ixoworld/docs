#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const mapPath = path.join(repoRoot, ".codex", "TERMINOLOGY_MAP.yml");

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

function escapeRegExp(input) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function aliasScanPattern(alias) {
  const escaped = escapeRegExp(alias);
  // Do not match the correct `… MCP Server` form when the banned fragment is `… MCP`.
  if (/\bMCP$/i.test(alias)) {
    return new RegExp(`\\b${escaped}\\b(?!\\s+Server)`, "gi");
  }
  // Allowed short form is `Matrix Client SDK`; do not flag that phrase.
  // Case-sensitive: prose may use lowercase `Matrix client` for the generic (see NAMING_TAXONOMY).
  if (alias === "Matrix Client") {
    return new RegExp(`\\b${escaped}\\b(?!\\s+SDK)`, "g");
  }
  // `Multiclient` (spelling) must stay case-sensitive so canonical `MultiClient` is not flagged.
  if (alias === "Multiclient SDK") {
    return new RegExp(`(?<!\\b[Ww]eb\\s)\\b${escaped}\\b`, "g");
  }
  // Do not flag the suffix of `Agentic Oracles SDK`.
  if (alias === "Oracles SDK") {
    return new RegExp(`(?<!\\b[Aa]gentic\\s)\\b${escaped}\\b`, "g");
  }
  // Do not flag `Forge` inside `Qi Forge` / `Qi Forge CLI`.
  if (alias === "Forge") {
    return new RegExp(`(?<!\\bqi\\s)\\b${escaped}\\b`, "gi");
  }
  // Standalone `ADK` is deprecated (Qi Forge); `Personal Agent ADK` is canonical for `@ixo/assistant-sdk`.
  // Case-sensitive: slugs like `oracle-adk` must not match.
  if (alias === "ADK") {
    return new RegExp(`(?<!\\b[Pp]ersonal\\s+[Aa]gent\\s)\\b${escaped}\\b`, "g");
  }
  return new RegExp(`\\b${escaped}\\b`, "g");
}

function stripYamlScalar(value) {
  return value.trim().replace(/^["']|["']$/g, "");
}

/**
 * Collect deprecated_aliases from each `terms:` entry so CI enforces the map
 * without duplicating every alias under `banned_aliases:`.
 * Explicit `banned_aliases:` entries override the same alias string.
 */
function parseDeprecatedAliasesFromTerms(yamlText) {
  const results = [];
  const lines = yamlText.split("\n");
  let inTerms = false;
  let currentCanonical = null;
  let inDeprecatedList = false;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "terms:") {
      inTerms = true;
      continue;
    }
    if (trimmed === "banned_aliases:") {
      break;
    }
    if (!inTerms) {
      continue;
    }

    const canonicalMatch = line.match(/^  - canonical:\s*(.+)$/);
    if (canonicalMatch) {
      currentCanonical = stripYamlScalar(canonicalMatch[1]);
      inDeprecatedList = false;
      continue;
    }

    if (/^    deprecated_aliases:\s*\[\]\s*$/.test(line)) {
      inDeprecatedList = false;
      continue;
    }
    if (/^    deprecated_aliases:\s*$/.test(line)) {
      inDeprecatedList = true;
      continue;
    }

    if (inDeprecatedList) {
      const depMatch = line.match(/^      - \s*(.+)$/);
      if (depMatch) {
        const alias = stripYamlScalar(depMatch[1]);
        if (alias && currentCanonical) {
          results.push({ alias, replaceWith: currentCanonical });
        }
        continue;
      }
      if (/^    [A-Za-z_][A-Za-z0-9_]*:/.test(line)) {
        inDeprecatedList = false;
        i -= 1;
        continue;
      }
      if (trimmed === "") {
        continue;
      }
      inDeprecatedList = false;
    }
  }

  return results;
}

function parseBannedAliases(yamlText) {
  const aliases = [];
  const lines = yamlText.split("\n");
  let inSection = false;
  let currentAlias = null;
  let currentReplacement = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!inSection) {
      if (line === "banned_aliases:") {
        inSection = true;
      }
      continue;
    }

    if (line.startsWith("glossary:")) {
      break;
    }

    if (line.startsWith("- alias:")) {
      if (currentAlias) {
        aliases.push({ alias: currentAlias, replaceWith: currentReplacement || "" });
      }
      currentAlias = line.replace(/^- alias:\s*/, "").replace(/^"|"$/g, "");
      currentReplacement = null;
      continue;
    }

    if (line.startsWith("replace_with:")) {
      currentReplacement = line.replace(/^replace_with:\s*/, "").replace(/^"|"$/g, "");
    }
  }

  if (currentAlias) {
    aliases.push({ alias: currentAlias, replaceWith: currentReplacement || "" });
  }

  return aliases.filter((item) => item.alias);
}

/**
 * If the same surface string is listed as a deprecated alias for more than one
 * canonical (for example standalone `Emerging`), do not auto-enforce it — the
 * correct replacement is context-dependent.
 */
function uniqueDeprecatedAliasTargets(entries) {
  const targetsByAlias = new Map();
  for (const { alias, replaceWith } of entries) {
    if (!targetsByAlias.has(alias)) {
      targetsByAlias.set(alias, new Set());
    }
    targetsByAlias.get(alias).add(replaceWith);
  }
  const results = [];
  for (const [alias, targets] of targetsByAlias) {
    if (targets.size !== 1) {
      continue;
    }
    results.push({ alias, replaceWith: [...targets][0] });
  }
  return results;
}

function mergeBannedAliasRules(fromTerms, explicit) {
  const byAlias = new Map();
  for (const item of fromTerms) {
    byAlias.set(item.alias, item.replaceWith);
  }
  for (const item of explicit) {
    byAlias.set(item.alias, item.replaceWith);
  }
  return [...byAlias.entries()].map(([alias, replaceWith]) => ({ alias, replaceWith }));
}

function collectMdxFiles(dirPath) {
  const results = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name.startsWith(".git")) {
      continue;
    }
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectMdxFiles(fullPath));
    } else if (entry.isFile() && fullPath.endsWith(".mdx")) {
      results.push(fullPath);
    }
  }
  return results;
}

const yamlText = readFileSafe(mapPath);
if (!yamlText) {
  console.error("terminology-lint: missing .codex/TERMINOLOGY_MAP.yml");
  process.exit(1);
}

const fromTerms = uniqueDeprecatedAliasTargets(parseDeprecatedAliasesFromTerms(yamlText));
const explicitBanned = parseBannedAliases(yamlText);
const bannedAliases = mergeBannedAliasRules(fromTerms, explicitBanned);
if (bannedAliases.length === 0) {
  console.log("terminology-lint: no deprecated aliases or banned_aliases; nothing to check");
  process.exit(0);
}

const mdxFiles = collectMdxFiles(repoRoot);
const failures = [];

for (const filePath of mdxFiles) {
  const text = readFileSafe(filePath);
  if (!text) continue;

  for (const term of bannedAliases) {
    const pattern = aliasScanPattern(term.alias);
    if (pattern.test(text)) {
      const rel = path.relative(repoRoot, filePath);
      failures.push({
        file: rel,
        alias: term.alias,
        replaceWith: term.replaceWith,
      });
    }
  }
}

if (failures.length > 0) {
  console.error("terminology-lint: found banned aliases");
  for (const failure of failures) {
    const replacement = failure.replaceWith ? ` -> use "${failure.replaceWith}"` : "";
    console.error(`- ${failure.file}: "${failure.alias}"${replacement}`);
  }
  process.exit(1);
}

console.log("terminology-lint: no banned aliases found");
