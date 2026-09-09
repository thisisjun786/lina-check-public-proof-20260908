# Agent guidance

## Policy

- Executable policy: `.lina-check/policy.json` (owned on trusted main with `.lina-check/acceptance/`; see POLICY.md).
- Review output is advisory until the rules gate verifies evidence. No automatic merge, protection modification, or release (`automatic: false`).

## CI

- Required workflow: `.github/workflows/ci.yml`.
- Acceptance command: `node --test total.test.js`.
- `ci-gate` always runs and requires `needs.acceptance.result` success via `test "$RESULT" = success`.

## Acceptance

- `total([{price:10,quantity:3}])` returns 30; quantity remains part of every line total.
