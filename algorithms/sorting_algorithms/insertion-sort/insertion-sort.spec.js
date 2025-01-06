import { expect, test } from 'vitest'
import { insertionSort } from './insertion-sort'

test('insertionSort function is defined', () => {
  expect(typeof insertionSort).toEqual('function');
});

test('sorts an array of numbers with insertion sort', () => {
  const elements = [-6, 20, 8, -2, 4]

  insertionSort(elements)

  expect(elements).toEqual([-6, -2, 4, 8, 20]);
});