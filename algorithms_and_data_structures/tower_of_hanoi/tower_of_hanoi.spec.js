import { expect, test } from 'vitest'
import { towerOfHanoi } from './tower_of_hanoi'

test('towerOfHanoi function is defined', () => {
  expect(typeof towerOfHanoi).toEqual('function');
});