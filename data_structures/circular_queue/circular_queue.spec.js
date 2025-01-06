import { expect, test } from 'vitest'
import { CircularQueue } from './circular_queue';

test('Queue is a class', () => {
  expect(typeof CircularQueue.prototype.constructor).toEqual('function');
});

test('can enqueue elements to a queue', () => {
  const q = new CircularQueue(1);
  expect(() => {
    q.enqueue(1);
  }).not.toThrow();
});

test('can dequeue elements from a queue', () => {
  const q = new CircularQueue(1);
  expect(() => {
    q.enqueue(1);
    q.dequeue();
  }).not.toThrow();
});

test('Order of elements is maintained', () => {
  const q = new CircularQueue(3);
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  expect(q.dequeue()).toEqual(1);
  expect(q.dequeue()).toEqual(2);
  expect(q.dequeue()).toEqual(3);
});
