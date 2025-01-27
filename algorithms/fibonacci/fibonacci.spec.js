import { expect, test } from 'vitest'
import { fibonacci } from './fibonacci'

test('fibonacci function is defined', () => {
  expect(typeof fibonacci).toEqual('function');
});

test('calculates correct fibonacci value for 1', () => {
  expect(fibonacci(1)).toEqual([0, 1]);
});

test('calculates correct fibonacci value for 2', () => {
  expect(fibonacci(2)).toEqual([0, 1]);
});

test('calculates correct fibonacci value for 3', () => {
  expect(fibonacci(3)).toEqual([0, 1, 1]);
});

test('calculates correct fibonacci value for 4', () => {
  expect(fibonacci(4)).toEqual([0, 1, 1, 2]);
});

test('calculates correct fibonacci value for 7', () => {
  expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
});
