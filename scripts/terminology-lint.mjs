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

const bannedAliases = parseBannedAliases(yamlText);
if (bannedAliases.length === 0) {
  console.log("terminology-lint: no banned_aliases found; nothing to check");
  process.exit(0);
}

const mdxFiles = collectMdxFiles(repoRoot);
const failures = [];

for (const filePath of mdxFiles) {
  const text = readFileSafe(filePath);
  if (!text) continue;

  for (const term of bannedAliases) {
    const pattern = new RegExp(`\\b${escapeRegExp(term.alias)}\\b`, "g");
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
