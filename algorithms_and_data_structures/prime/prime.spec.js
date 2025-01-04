import { expect, test } from 'vitest'
import { isPrime, optimizedIsPrime } from './prime'

test('factorial function is defined', () => {
  expect(typeof isPrime).toEqual('function');
});

test('calculates correct isPrime value for 0', () => {
  expect(isPrime(0)).toEqual(false);
});

test('calculates correct isPrime value for 1', () => {
  expect(isPrime(1)).toEqual(false);
});

test('calculates correct isPrime value for 2', () => {
  expect(isPrime(2)).toEqual(false);
});

test('calculates correct isPrime value for 3', () => {
  expect(isPrime(3)).toEqual(true);
});

test('calculates correct isPrime value for 4', () => {
  expect(isPrime(4)).toEqual(false);
});

test('calculates correct isPrime value for 7', () => {
  expect(isPrime(7)).toEqual(true);
});

test('calculates correct isPrime value for 35', () => {
  expect(optimizedIsPrime(35)).toEqual(false);
});
