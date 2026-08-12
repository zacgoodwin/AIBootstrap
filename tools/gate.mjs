// Template gate test. Deterministic, <2s, no dependencies.
// Run: node tools/gate.mjs        (checks the repo)
//      node tools/gate.mjs --check (self-check of this script's own logic)
// Checks: (1) CLAUDE.md stays under the always-loaded line cap;
// (2) every knowledge file is routed in docs/ai/INDEX.md;
// (3) TICKET-TEMPLATE.md carries the zstack-required headings at exact levels;
// (4) .claude/credentials.md stays gitignored;
// (5) every agent loads and every agent + project skill is in the catalog;
// (6) every $HOME skill pack tools/check-pipeline.sh requires is installed by
//     BOTH bootstrap scripts (bash + ps1), so no platform bootstraps green
//     and then gates red.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Content lines: a trailing newline is a terminator, not an extra line, so an
// exactly-80-line file passes the 80-line cap.
export function countContentLines(text) {
  const lines = text.split(/\r?\n/);
  if (lines.at(-1) === "") lines.pop();
  return lines.length;
}

// Is .claude/credentials.md actually ignored? Ask git itself (catches spelling
// variants and later negation lines a literal string check misses); fall back
// to the literal .gitignore line only when git isn't available (ZIP download).
export function credentialsGitignored(runGitCheckIgnore, gitignoreLines) {
  try {
    runGitCheckIgnore();
    return true;
  } catch (e) {
    if (e && e.status === 1) return false; // git ran and says: not ignored
    return gitignoreLines.includes(".claude/credentials.md");
  }
}

// Headings outside fenced blocks, as [lowercased title, level] pairs
export function parseHeadings(lines) {
  let fence = "";
  const headings = [];
  for (const line of lines) {
    const f = line.match(/^\s*(`{3,}|~{3,})/);
    if (f) { const m = f[1][0]; fence = fence ? (m === fence ? "" : fence) : m; continue; }
    if (fence) continue;
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) headings.push([h[2].trim().toLowerCase().replace(/\s+/g, " "), h[1].length]);
  }
  return headings;
}

// Claude Code loads a .claude/agents/*.md file only when its YAML block has
// name + description; without them the file is inert and nothing says so.
// Returns null for "would not load".
export function parseAgentFrontmatter(text) {
  const m = text.replace(/^\uFEFF/, "").match(/^---\r?\n([\s\S]*?)\r?\n---(\r?\n|$)/);
  if (!m) return null;
  const field = (k) => (m[1].match(new RegExp(`^${k}:[ \\t]*(.+)$`, "m")) || ["", ""])[1].trim();
  const name = field("name");
  return name && field("description") ? { name, description: field("description") } : null;
}

// Catalog entries are bullets ("- skeptic — ..."), so match the name at the
// start of a list item: a bare substring test passes on prose like "the data
// lead" and would call an uncataloged agent covered. The trailing lookahead
// rejects [\w-] rather than using \b, which a hyphen satisfies -- otherwise
// "- engineer-reviewer" would count as an entry for a missing "engineer".
export function catalogListsEntry(catalog, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`^[-*]\\s+\`?${escaped}\`?(?![\\w-])`, "m").test(catalog);
}

// Packs the pipeline gate requires under $HOME. Parsed from
// tools/check-pipeline.sh itself so the list can't drift from the gate that
// enforces it; repo-local .claude/skills checks deliberately don't match.
// (Failure path seen on PR #8: bootstrap.sh gained the pack, bootstrap.ps1
// didn't, so a fresh Windows host bootstrapped green then gated red.)
export function requiredHomePacks(checkPipeline) {
  return [...checkPipeline.matchAll(/\$HOME\/\.claude\/skills\/([\w-]+)\/SKILL\.md/g)].map((m) => m[1]);
}

// Line-anchored so a commented-out install line ("# install_pack x ...")
// cannot satisfy check 6 — same class as the commented-out-pin rule in the
// .roborev.toml check in tools/check-pipeline.sh.
export function installsPack(text, script, pack) {
  const escaped = pack.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re =
    script === "bootstrap.sh"
      ? new RegExp(`^install_pack ${escaped} `, "m")
      : new RegExp(`^\\s*@\\{ Name = '${escaped}';`, "m");
  return re.test(text);
}

// Self-check (tools/README.md contract): node tools/gate.mjs --check
if (process.argv[2] === "--check") {
  const { strict: assert } = await import("node:assert");
  assert.equal(countContentLines("a\nb\n"), 2, "trailing newline is not a line");
  assert.equal(countContentLines("a\nb"), 2);
  assert.equal(countContentLines(""), 0);
  assert.deepEqual(
    parseHeadings(["## Context", "```", "## Fenced Out", "```", "###  Acceptance   Criteria"]),
    [["context", 2], ["acceptance criteria", 3]],
    "fence skipping + whitespace normalization"
  );
  assert.deepEqual(parseHeadings(["~~~", "## Hidden", "~~~", "# Top"]), [["top", 1]]);
  const gitSaysIgnored = () => {};
  const gitSaysNotIgnored = () => { const e = new Error("not ignored"); e.status = 1; throw e; };
  const gitMissing = () => { throw new Error("ENOENT"); };
  assert.ok(credentialsGitignored(gitSaysIgnored, []), "git yes wins over empty gitignore");
  assert.ok(!credentialsGitignored(gitSaysNotIgnored, [".claude/credentials.md"]), "git no wins over literal line");
  assert.ok(credentialsGitignored(gitMissing, [".claude/credentials.md"]), "no git: literal fallback hit");
  assert.ok(!credentialsGitignored(gitMissing, []), "no git: literal fallback miss");
  assert.equal(parseAgentFrontmatter("---\nname: skeptic\ndescription: d\n---\nbody").name, "skeptic");
  assert.equal(parseAgentFrontmatter("---\r\nname: s\r\ndescription: d\r\n---\r\n").name, "s", "CRLF");
  assert.equal(parseAgentFrontmatter("﻿---\nname: s\ndescription: d\n---\n").name, "s", "BOM");
  assert.equal(parseAgentFrontmatter("# Skeptic Sub-Agent\n\nChallenge.\n"), null, "heading-only file is inert");
  assert.equal(parseAgentFrontmatter("---\nname: s\n---\n"), null, "description required");
  assert.equal(parseAgentFrontmatter("---\ndescription: d\n---\n"), null, "name required");
  assert.equal(parseAgentFrontmatter("intro\n---\nname: s\ndescription: d\n---\n"), null, "must open the file");
  assert.ok(catalogListsEntry("- data — metric design\n", "data"));
  assert.ok(catalogListsEntry("* `skeptic` — devil's advocate\n", "skeptic"), "backticked bullet");
  assert.ok(catalogListsEntry("- graphify\n", "graphify"), "bullet with no hook");
  assert.ok(!catalogListsEntry("You are the data lead; data matters.\n", "data"), "prose is not an entry");
  assert.ok(!catalogListsEntry("- engineer-reviewer — feasibility\n", "engineer"), "prefix is not an entry");
  assert.deepEqual(
    requiredHomePacks('[ -f "$HOME/.claude/skills/stack-ship/SKILL.md" ]\n[ -f "$HOME/.claude/skills/z-adversarial-review/SKILL.md" ]'),
    ["stack-ship", "z-adversarial-review"]
  );
  assert.deepEqual(requiredHomePacks('[ -f .claude/skills/x/SKILL.md ]'), [], "repo-local checks are not HOME packs");
  assert.ok(installsPack("install_pack stack-ship https://x.git bash\n", "bootstrap.sh", "stack-ship"));
  assert.ok(!installsPack("# install_pack stack-ship https://x.git bash\n", "bootstrap.sh", "stack-ship"), "commented sh line is not an install");
  assert.ok(!installsPack("install_pack stack-ship-extra https://x.git bash\n", "bootstrap.sh", "stack-ship"), "prefix pack is not an install");
  assert.ok(installsPack("    @{ Name = 'stack-ship'; Url = 'u'; Setup = 'bash' }\n", "bootstrap.ps1", "stack-ship"));
  assert.ok(!installsPack("    # @{ Name = 'stack-ship'; Url = 'u' }\n", "bootstrap.ps1", "stack-ship"), "commented ps1 line is not an install");
  assert.ok(!installsPack("    @{ Name = 'stack-ship-extra'; Url = 'u' }\n", "bootstrap.ps1", "stack-ship"), "ps1 prefix pack is not an install");
  console.log("gate: self-check OK");
  process.exit(0);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fails = [];

// 1. CLAUDE.md line cap (cache-stability rule in rules/TOKEN-ECONOMY.md)
const CAP = 80;
const claudeLines = countContentLines(readFileSync(join(root, "CLAUDE.md"), "utf8"));
if (claudeLines > CAP) fails.push(`CLAUDE.md is ${claudeLines} lines (cap ${CAP}); evict something.`);

// 2. INDEX completeness: every knowledge .md must be mentioned in INDEX.md.
// docs/user-guide/ pages and docs/ai/plans/ archives are content, not
// knowledge routing (see INDEX.md's own scope note).
const index = readFileSync(join(root, "docs/ai/INDEX.md"), "utf8");
const knowledge = [];
for (const dir of ["rules", "architecture"])
  if (existsSync(join(root, dir)))
    for (const f of readdirSync(join(root, dir)))
      if (f.endsWith(".md") && f !== "README.md") knowledge.push(`${dir}/${f}`);
if (existsSync(join(root, "docs/ai")))
  for (const f of readdirSync(join(root, "docs/ai")))
    if (f.endsWith(".md") && f !== "INDEX.md") knowledge.push(`docs/ai/${f}`);
for (const f of ["DESIGN.md", "docs/STRATEGY.md", "AGENTS.md", "services/README.md", "tools/README.md"])
  if (existsSync(join(root, f))) knowledge.push(f);
for (const f of knowledge)
  if (!index.includes(f)) fails.push(`docs/ai/INDEX.md missing entry for ${f}`);

// 3. Ticket template headings: presence + exact level, skipping fenced blocks.
const REQUIRED = [
  ["Context", 2], ["Plan", 2], ["Acceptance Criteria", 3],
  ["Tests + evals", 2], ["Docs pages touched", 2], ["Out of scope", 2],
];
const ticket = readFileSync(join(root, "docs/ai/TICKET-TEMPLATE.md"), "utf8").split(/\r?\n/);
const headings = parseHeadings(ticket);
for (const [title, level] of REQUIRED)
  if (!headings.some(([t, l]) => t === title.toLowerCase() && l === level))
    fails.push(`TICKET-TEMPLATE.md missing h${level} "${title}"`);

// 4. Credentials file must stay gitignored (rules/SAFETY.md; the file holds
// test-account passwords Claude reads but git must never see).
const gitignore = readFileSync(join(root, ".gitignore"), "utf8").split(/\r?\n/).map((l) => l.trim());
const credsIgnored = credentialsGitignored(
  () => execSync("git check-ignore -q .claude/credentials.md", { cwd: root, stdio: "ignore" }),
  gitignore
);
if (!credsIgnored)
  fails.push(".claude/credentials.md is not gitignored (git check-ignore says no)");

// 5. Agents and project skills: loadable, and findable in the catalog
// CLAUDE.md routes through (docs/ai/SKILLS.md). An agent with no frontmatter
// fails silently -- Claude Code just never offers it -- and an uncataloged
// skill is invisible to the routing table, so both are gate failures.
const catalogPath = join(root, "docs/ai/SKILLS.md");
const catalog = existsSync(catalogPath) ? readFileSync(catalogPath, "utf8") : "";
let agentCount = 0;
let skillCount = 0;
const agentsDir = join(root, ".claude/agents");
if (existsSync(agentsDir))
  for (const f of readdirSync(agentsDir)) {
    if (!f.endsWith(".md") || f === "README.md") continue;
    agentCount++;
    const expected = f.slice(0, -3);
    const fm = parseAgentFrontmatter(readFileSync(join(agentsDir, f), "utf8"));
    if (!fm) {
      fails.push(`.claude/agents/${f}: no name+description frontmatter; Claude Code will not load it`);
      continue;
    }
    if (fm.name !== expected)
      fails.push(`.claude/agents/${f}: declares name "${fm.name}"; must equal the filename (dispatch is by name)`);
    if (!catalogListsEntry(catalog, expected))
      fails.push(`docs/ai/SKILLS.md has no catalog entry for agent ${expected}`);
  }
const skillsDir = join(root, ".claude/skills");
if (existsSync(skillsDir))
  for (const e of readdirSync(skillsDir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    skillCount++;
    if (!existsSync(join(skillsDir, e.name, "SKILL.md")))
      fails.push(`.claude/skills/${e.name}/: no SKILL.md; the skill will not load`);
    if (!catalogListsEntry(catalog, e.name))
      fails.push(`docs/ai/SKILLS.md has no catalog entry for skill ${e.name}`);
  }

// 6. Bootstrap parity: a pack the pipeline gate requires in $HOME must be
// installed by both bootstrap scripts, or one platform's fresh host
// bootstraps green and then gates red.
const checkPipelinePath = join(root, "tools/check-pipeline.sh");
if (existsSync(checkPipelinePath)) {
  const packs = requiredHomePacks(readFileSync(checkPipelinePath, "utf8"));
  // A missing bootstrap script is a red gate, not a crash.
  const read = (f) => (existsSync(join(root, f)) ? readFileSync(join(root, f), "utf8") : null);
  for (const script of ["bootstrap.sh", "bootstrap.ps1"]) {
    const text = read(script);
    if (text === null) { fails.push(`${script} is missing (check 6 needs both bootstrap scripts)`); continue; }
    for (const p of packs)
      if (!installsPack(text, script, p))
        fails.push(`${script} does not install pack ${p} (tools/check-pipeline.sh requires it in $HOME)`);
  }
}

if (fails.length) {
  console.error("GATE RED:");
  for (const f of fails) console.error(" - " + f);
  process.exit(1);
}
console.log(
  `gate: OK (CLAUDE.md ${claudeLines}/${CAP} lines, ${knowledge.length} knowledge files indexed, ` +
    `ticket headings valid, ${agentCount} agents + ${skillCount} skills cataloged)`
);
