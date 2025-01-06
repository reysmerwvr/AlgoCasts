import { expect, test } from 'vitest'
import { isPowerOfTwo, isPowerOfTwoBitWise } from './power_of_two'

test('factorial function is defined', () => {
  expect(typeof isPowerOfTwo).toEqual('function');
});

test('calculates correct isPowerOfTwo value for 0', () => {
  expect(isPowerOfTwo(0)).toEqual(false);
});

test('calculates correct isPowerOfTwo value for 1', () => {
  expect(isPowerOfTwo(1)).toEqual(true);
});

test('calculates correct isPowerOfTwo value for 2', () => {
  expect(isPowerOfTwoBitWise(2)).toEqual(true);
});

test('calculates correct isPowerOfTwo value for 3', () => {
  expect(isPowerOfTwo(3)).toEqual(false);
});

test('calculates correct isPowerOfTwo value for 4', () => {
  expect(isPowerOfTwoBitWise(4)).toEqual(true);
});

test('calculates correct isPowerOfTwo value for 7', () => {
  expect(isPowerOfTwo(7)).toEqual(false);
});
