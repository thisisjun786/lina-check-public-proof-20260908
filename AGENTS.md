# Agent guidance

## Verified commands
- `node --test total.test.js` — README and Fixture CI acceptance (`.github/workflows/ci.yml`).

## Paths
- `total.test.js` — exercised by Fixture CI and README.
- `.lina-check/acceptance/1.json` — quantity-aware line totals: `total([{price:10,quantity:3}])` returns 30; quantity remains part of every line total.
- `.lina-check/policy.json` — trusted executable policy (`automatic`: false; requiredChecks pin `ci-gate` to `.github/workflows/ci.yml`).
- `POLICY.md` — trusted main owns `.lina-check/policy.json` and `.lina-check/acceptance/`; review is advisory until the rules gate verifies evidence; no automatic merge, protection modification, or release.
- `.github/workflows/lina-check.yml` — `publish` input defaults to false (observe only).

## Intentional gates
- `ci-gate` in `.github/workflows/ci.yml` passes only when acceptance job `RESULT` is `success`.
