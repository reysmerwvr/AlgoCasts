import { expect, test } from 'vitest'
import { factorial } from './factorial'

test('factorial function is defined', () => {
  expect(typeof factorial).toEqual('function');
});

test('calculates correct factorial value for 0', () => {
  expect(factorial(0)).toEqual(1);
});

test('calculates correct factorial value for 1', () => {
  expect(factorial(1)).toEqual(1);
});

test('calculates correct factorial value for 2', () => {
  expect(factorial(2)).toEqual(2);
});

test('calculates correct factorial value for 3', () => {
  expect(factorial(3)).toEqual(6);
});

test('calculates correct factorial value for 4', () => {
  expect(factorial(4)).toEqual(24);
});

test('calculates correct factorial value for 7', () => {
  expect(factorial(7)).toEqual(5040);
});
