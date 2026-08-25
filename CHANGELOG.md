# Changelog

All notable changes to this project are documented here, in user-facing plain
language (docs/rules/VOICE.md). Format: [Keep a Changelog](https://keepachangelog.com),
versioning per the VERSION file (managed by /ship).

## [Unreleased]

### Added

- A documentation watchdog. `node tools/docs-check.mjs` checks the half of
  doc rot that is a fact rather than an opinion: dead links and anchors,
  count claims measured against the directory they name, roster headers
  against the tables under them, one fact stated two ways in two files, and
  pack names misspelled beside their own upstream URL. Every number it
  reports is measured, never recalled. `--fix` repairs only what a machine
  can repair without deciding anything; everything else is recorded in
  docs/ai/baseline-contradictions.json for a person. A GitHub Actions
  workflow runs it on main and on every pull request, comments the diff, and
  fails the build only on a new P1 SEMANTIC finding.

- A way to tell which skills and catalogs have fallen behind upstream, and to
  update them. `tools/sources.json` records where every vendored skill and
  every pack catalog came from and at what commit;
  `node tools/skills-update.mjs check` compares that against the live
  upstreams; `/skills-update` reads the diff, decides what is worth taking,
  and restamps. Sources with no public repo are reported as needing a human
  rather than quietly passing.
- The gate now checks provenance offline: a vendored skill with no recorded
  source, or a pack header that disagrees with the manifest, fails it.

### Fixed

- Two pack names were misspelled in the cross-pack pick list, each next to
  the upstream URL that contradicted it: `rcs-harness` (rsc-harness) and
  `zcarceres` (zcaceres).

- Five pack catalogs recorded no upstream commit at all (ECC, Matt Pocock,
  rsc-harness, Ruflo, zcaceres). They now say so explicitly instead of
  looking checked. The gstack catalog's version now carries the commit it
  corresponds to.
