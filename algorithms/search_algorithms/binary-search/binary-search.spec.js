import { expect, test } from 'vitest'
import { binarySearch } from './binary-search'

test('binarySearch function is defined', () => {
  expect(typeof binarySearch).toEqual('function');
});

test('returns the correct index for the target element', () => {
  expect(binarySearch([-5, 2, 4, 6, 10], 10)).toEqual(4);
});

test('returns -1 when the target element does not exist', () => {
  expect(binarySearch([-5, 2, 4, 6, 10], 20)).toEqual(-1);
});