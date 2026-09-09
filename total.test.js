import {test} from 'node:test';
import assert from 'node:assert/strict';
import {total} from './total.js';
test('quantity remains part of line totals',()=>assert.equal(total([{price:10,quantity:3}]),30));

import { spawnSync } from 'node:child_process';
const cli = (...args) => spawnSync(process.execPath, ['total-cli.js', ...args], { encoding: 'utf8' });
test('CLI defaults to one and preserves explicit quantity including zero', () => {
  for (const [args, expected] of [
    [['--price', '10'], '10'],
    [['--price', '10', '--quantity', '3'], '30'],
    [['--price', '10', '--quantity', '0'], '0'],
    [['--price', '0.5', '--quantity', '2'], '1'],
  ]) {
    const result = cli(...args);
    assert.equal(result.status, 0);
    assert.equal(result.stdout.trim(), expected);
    assert.equal(result.stderr, '');
  }
});
test('CLI rejects missing, repeated, unknown and invalid inputs', () => {
  for (const args of [[], ['--price'], ['--quantity', '3'], ['--price', '-1'],
    ['--price', 'NaN'], ['--price', 'Infinity'], ['--price', '10', '--quantity', '-1'],
    ['--price', '10', '--unknown', '2'], ['--price', '10', '--price', '2']]) {
    const result = cli(...args);
    assert.equal(result.status, 2);
    assert.equal(result.stdout, '');
    assert.match(result.stderr, /^Usage:/);
  }
});
test('CLI rejects overflowing operands and totals without printing Infinity', () => {
  for (const args of [
    ['--price', '9'.repeat(309)],
    ['--price', '9'.repeat(308), '--quantity', '2'],
    ['--price', '9'.repeat(300), '--quantity', '9'.repeat(300)],
  ]) {
    const result = cli(...args);
    assert.equal(result.status, 2);
    assert.equal(result.stdout, '');
    assert.match(result.stderr, /^Usage:/);
  }
  const finite = cli('--price', '9'.repeat(308), '--quantity', '0');
  assert.equal(finite.status, 0);
  assert.equal(finite.stdout.trim(), '0');
});
