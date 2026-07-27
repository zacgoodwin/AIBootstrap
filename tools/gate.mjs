// Template gate test. Deterministic, <2s, no dependencies. Run: node tools/gate.mjs
// Checks: (1) CLAUDE.md stays under the always-loaded line cap;
// (2) every knowledge file is routed in docs/ai/INDEX.md;
// (3) TICKET-TEMPLATE.md carries the zstack-required headings at exact levels.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fails = [];

// 1. CLAUDE.md line cap (cache-stability rule in rules/TOKEN-ECONOMY.md)
const CAP = 80;
const claudeLines = readFileSync(join(root, "CLAUDE.md"), "utf8").split(/\r?\n/).length;
if (claudeLines > CAP) fails.push(`CLAUDE.md is ${claudeLines} lines (cap ${CAP}); evict something.`);

// 2. INDEX completeness: every knowledge .md must be mentioned in INDEX.md.
// user-guide pages and plan archives are content, not knowledge routing.
const index = readFileSync(join(root, "docs/ai/INDEX.md"), "utf8");
const knowledge = [];
for (const dir of ["rules", "architecture"])
  if (existsSync(join(root, dir)))
    for (const f of readdirSync(join(root, dir)))
      if (f.endsWith(".md") && f !== "README.md") knowledge.push(`${dir}/${f}`);
if (existsSync(join(root, "docs/ai")))
  for (const f of readdirSync(join(root, "docs/ai")))
    if (f.endsWith(".md") && f !== "INDEX.md") knowledge.push(`docs/ai/${f}`);
for (const f of ["DESIGN.md", "docs/STRATEGY.md"]) if (existsSync(join(root, f))) knowledge.push(f);
for (const f of knowledge)
  if (!index.includes(f)) fails.push(`docs/ai/INDEX.md missing entry for ${f}`);

// 3. Ticket template headings: presence + exact level, skipping fenced blocks
// (mirrors zstack lib/ticket-schema.ts REQUIRED_SECTIONS).
const REQUIRED = [
  ["Context", 2], ["Plan", 2], ["Acceptance Criteria", 3],
  ["Tests + evals", 2], ["Docs pages touched", 2], ["Out of scope", 2],
];
const ticket = readFileSync(join(root, "docs/ai/TICKET-TEMPLATE.md"), "utf8").split(/\r?\n/);
let fence = "";
const headings = [];
for (const line of ticket) {
  const f = line.match(/^\s*(`{3,}|~{3,})/);
  if (f) { const m = f[1][0]; fence = fence ? (m === fence ? "" : fence) : m; continue; }
  if (fence) continue;
  const h = line.match(/^(#{1,6})\s+(.*)$/);
  if (h) headings.push([h[2].trim().toLowerCase().replace(/\s+/g, " "), h[1].length]);
}
for (const [title, level] of REQUIRED)
  if (!headings.some(([t, l]) => t === title.toLowerCase() && l === level))
    fails.push(`TICKET-TEMPLATE.md missing h${level} "${title}"`);

// 4. Credentials file must stay gitignored (rules/SAFETY.md; the file holds
// test-account passwords Claude reads but git must never see).
const gitignore = readFileSync(join(root, ".gitignore"), "utf8").split(/\r?\n/).map((l) => l.trim());
if (!gitignore.includes(".claude/credentials.md"))
  fails.push(".gitignore missing the '.claude/credentials.md' line");

if (fails.length) {
  console.error("GATE RED:");
  for (const f of fails) console.error(" - " + f);
  process.exit(1);
}
console.log(`gate: OK (CLAUDE.md ${claudeLines}/${CAP} lines, ${knowledge.length} knowledge files indexed, ticket headings valid)`);
