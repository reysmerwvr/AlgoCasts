import { expect, test } from 'vitest'
import { climbingStaircase } from './climbing_staircase'

test('climbingStaircase function is defined', () => {
  expect(typeof climbingStaircase).toEqual('function');
});

test('calculates the number of possible steps to climb a staircase', () => {
  expect(climbingStaircase(5)).toEqual(8);
});