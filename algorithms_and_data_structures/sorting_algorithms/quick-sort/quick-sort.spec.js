import { expect, test } from 'vitest'
import { quickSort } from './quick-sort'

test('quickSort function is defined', () => {
  expect(typeof quickSort).toEqual('function');
});

test('sorts an array of numbers with quick sort', () => {
  expect(quickSort([-6, 20, 8, -2, 4])).toEqual([-6, -2, 4, 8, 20]);
});