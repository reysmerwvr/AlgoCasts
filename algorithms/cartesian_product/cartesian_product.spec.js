import { expect, test } from 'vitest'
import { cartesianProduct } from './cartesian_product'

test('cartesianProduct function is defined', () => {
  expect(typeof cartesianProduct).toEqual('function');
});

test('calculates the cartesian product of two finite empty sets', () => {
  expect(cartesianProduct([1, 2], [3, 4, 5])).toEqual([[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]);
});