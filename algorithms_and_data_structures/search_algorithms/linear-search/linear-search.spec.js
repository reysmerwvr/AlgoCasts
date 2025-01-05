import { expect, test } from 'vitest'
import { linearSearch } from './linear-search'

test('linearSearch function is defined', () => {
  expect(typeof linearSearch).toEqual('function');
});

test('returns the correct index for the target element', () => {
  expect(linearSearch([-5, 2, 10, 4, 6], 10)).toEqual(2);
});

test('returns -1 when the target element does not exist', () => {
  expect(linearSearch([-5, 2, 10, 4, 6], 20)).toEqual(-1);
});