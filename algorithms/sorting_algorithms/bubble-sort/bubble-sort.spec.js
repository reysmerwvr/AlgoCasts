import { expect, test } from 'vitest'
import { bubbleSort } from './bubble-sort'

test('bubbleSort function is defined', () => {
  expect(typeof bubbleSort).toEqual('function');
});

test('sorts an array of numbers with bubble sort', () => {
  const elements = [-6, 20, 8, -2, 4]

  bubbleSort(elements)

  expect(elements).toEqual([-6, -2, 4, 8, 20]);
});