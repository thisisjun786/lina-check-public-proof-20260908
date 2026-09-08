import {test} from 'node:test';
import assert from 'node:assert/strict';
import {total} from './total.js';
test('quantity remains part of line totals',()=>assert.equal(total([{price:10,quantity:3}]),30));
