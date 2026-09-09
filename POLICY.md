# Synthetic qualification policy

The trusted main branch owns `.lina-check/policy.json` and `.lina-check/acceptance/`. Review output is advisory until the rules gate verifies evidence. No automatic merge, protection modification, or release is enabled.

The executable review policy explicitly allows up to three service retries and two code repair rounds. Service outages do not consume repair rounds.

Current qualification environment: classic branch protection and active Rulesets are absent. `ci-gate` and `lina-check-gate` provide check results, but GitHub does not currently enforce them as merge restrictions. This proposal does not enable protection or automatic merge.
