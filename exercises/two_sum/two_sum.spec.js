import { expect, test } from 'vitest'
import { twoSum } from './two_sum';

test('twoSum function is defined', () => {
  expect(typeof twoSum).toEqual('function');
});

test('twoSum with [3, 2, 4] and target 6', () => {
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});


