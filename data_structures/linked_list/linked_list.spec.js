import { expect, test, describe } from 'vitest'
import { LinkedList, Node } from './linked_list'


test('List is a class', () => {
  expect(typeof LinkedList.prototype.constructor).toEqual('function');
});

test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

describe('A Node', () => {
  test('has properties "value" and "next"', () => {
    const node = new Node('a', 'b');
    expect(node.value).toEqual('a');
    expect(node.next).toEqual('b');
  });
});

describe('Insert First', () => {
  test('prepend a node to the start of the list', () => {
    const list = new LinkedList();
    list.prepend(1);
    expect(list.head.value).toEqual(1);
    list.prepend(2);
    expect(list.head.value).toEqual(2);
  });
});

describe('Insert End', () => {
  test('append a node to the end of the list', () => {
    const list = new LinkedList();
    list.prepend('a');

    list.append('b');

    expect(list.getSize()).toEqual(2);
    expect(list.getLast().value).toEqual('b');
  });
});

describe('InsertAt', () => {
  test('inserts a new node with data at the 0 index when the list is empty', () => {
    const list = new LinkedList();
    list.insert('hi', 0);
    expect(list.getFirst().value).toEqual('hi');
  });

  test('inserts a new node with data at the 0 index when the list has elements', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.insert('hi', 0);
    expect(list.getAt(0).value).toEqual('hi');
    expect(list.getAt(1).value).toEqual('a');
    expect(list.getAt(2).value).toEqual('b');
    expect(list.getAt(3).value).toEqual('c');
  });

  test('inserts a new node with data at a middle index', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    list.insert('hi', 2);
    expect(list.getAt(0).value).toEqual('a');
    expect(list.getAt(1).value).toEqual('b');
    expect(list.getAt(2).value).toEqual('hi');
    expect(list.getAt(3).value).toEqual('c');
    expect(list.getAt(4).value).toEqual('d');
  });

  test('inserts a new node with data at a last index', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.insert('hi', 2);
    expect(list.getAt(0).value).toEqual('a');
    expect(list.getAt(1).value).toEqual('b');
    expect(list.getAt(2).value).toEqual('hi');
  });
});

describe('RemoveFrom', () => {
  test('removeFrom does not crash on an empty list', () => {
    const list = new LinkedList();
    expect(() => {
      list.removeFrom(0);
      list.removeFrom(1);
      list.removeFrom(2);
    }).not.toThrow();
  });

  test('removeFrom does not crash on an index out of bounds', () => {
    const l = new LinkedList();
    expect(() => {
      const list = new LinkedList();
      list.prepend('a');
      list.removeFrom(1);
    }).not.toThrow();
  });

  test('removeFrom deletes the first node', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.getAt(0).value).toEqual(1);
    list.removeFrom(0);
    expect(list.getAt(0).value).toEqual(2);
  });

  test('removeFrom deletes the node at the given index', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.getAt(1).value).toEqual(2);
    list.removeFrom(1);
    expect(list.getAt(1).value).toEqual(3);
  });

  test('removeFrom works on the last node', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.getAt(3).value).toEqual(4);
    list.removeFrom(3);
    expect(list.getAt(3)).toEqual(null);
  });
});

describe('Size', () => {
  test('returns the number of items in the linked list', () => {
    const list = new LinkedList();
    expect(list.getSize()).toEqual(0);
    list.append(1);
    list.append(1);
    list.append(1);
    list.append(1);
    expect(list.getSize()).toEqual(4);
  });
});