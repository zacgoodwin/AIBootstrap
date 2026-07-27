# Business rules

Non-obvious rules Claude cannot infer from code and will otherwise invent:
pricing and tiers, permission models and role hierarchies, compliance and
data-handling constraints, billing and refund mechanics.

Format: one line per rule, with a file reference once the logic exists in
code (`rule — services/billing/src/tiers.ts:12`).

Reactive, like CLAUDE.md Landmines: add a rule the FIRST time Claude invents
a wrong one. Seeded at bootstrap only if the product already has rules to
record.

## Pricing and tiers

None yet.

## Permissions and roles

None yet.

## Compliance and data handling

None yet.

## Billing mechanics

None yet.
