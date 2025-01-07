import { expect, test } from 'vitest'
import { Node, BinarySearchTree } from './binary_search_tree';

test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('BinarySearchTree is a constructor', () => {
  expect(typeof BinarySearchTree.prototype.constructor).toEqual('function');
});

test('Node can insert correctly', () => {
  const bst = new BinarySearchTree(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(17);

  const { root } = bst

  expect(root.left.value).toEqual(5);
  expect(root.right.value).toEqual(15);
  expect(root.right.right.value).toEqual(17);
});

test('Contains returns node with the same data', () => {
  const bst = new BinarySearchTree(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(20);
  bst.insert(0);
  bst.insert(-5);
  bst.insert(3);

  const { root } = bst

  const three = root.left.right;
  expect(bst.contains(3)).toEqual(three);
});

test('Contains returns null if value not found', () => {
  const bst = new BinarySearchTree(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(20);
  bst.insert(0);
  bst.insert(-5);
  bst.insert(3);

  expect(bst.contains(9999)).toEqual(null);
});

