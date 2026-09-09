# Agent guidance

This repository is a synthetic LINA Check proof fixture.

Cart `total` is quantity-aware: each line contributes `price * quantity`. Example acceptance: `total([{price:10,quantity:3}])` returns `30`.

Run tests with `node --test total.test.js` (same command as README and Fixture CI).

Trusted main owns `.lina-check/policy.json` and `.lina-check/acceptance/`. Review output is advisory until the rules gate verifies evidence. No automatic merge, protection modification, or release (`automatic` is false). Required ci-gate workflow: `.github/workflows/ci.yml`.
