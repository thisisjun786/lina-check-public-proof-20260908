# LINA Check synthetic proof

The total includes item quantity. Run `node --test total.test.js`. This repository contains synthetic review fixtures only.

## Command-line totals

From this repository, run:

```sh
node total-cli.js --price 10
node total-cli.js --price 10 --quantity 3
node total-cli.js --price 10 --quantity 0
```

These commands print `10`, `30`, and `0`, respectively. Omitting `--quantity`
uses one; explicitly passing zero preserves zero.

Use nonnegative decimal numbers for `--price` and `--quantity`. The price is
required. Missing values, repeated or unknown flags, negative numbers, and
nonnumeric values print a `Usage:` line to stderr and exit with code `2`.
Inputs or calculated totals that exceed JavaScript's finite number range also
exit with code `2`; they do not print `Infinity` as a successful total.
Successful commands print the total to stdout and exit with code `0`.
