import { expect, test } from 'vitest'
import { mergeSort } from './merge-sort'

test('mergeSort function is defined', () => {
  expect(typeof mergeSort).toEqual('function');
});

test('sorts an array of numbers with quick sort', () => {
  expect(mergeSort([-6, 20, 8, -2, 4])).toEqual([-6, -2, 4, 8, 20]);
});