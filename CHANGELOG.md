# Changelog

All notable changes to this project are documented here, in user-facing plain
language (docs/rules/VOICE.md). Format: [Keep a Changelog](https://keepachangelog.com),
versioning per the VERSION file (managed by /ship).

## [Unreleased]

### Added

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

- Five pack catalogs recorded no upstream commit at all (ECC, Matt Pocock,
  rsc-harness, Ruflo, zcaceres). They now say so explicitly instead of
  looking checked. The gstack catalog's version now carries the commit it
  corresponds to.
