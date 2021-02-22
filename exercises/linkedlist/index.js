// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
    // this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while(node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.getAt(0);
    // return this.head;
  }

  getLast() {
    return this.getAt(this.size() - 1);
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;
    // while (node) {
    //   if(!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next
    }
    previous.next = null;
  }

  insertLast(data) {
    const lastNode = this.getLast();
    const newNode = new Node(data);
    if(lastNode) {
      lastNode.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if(!this.head) {
      return;
    }
    if(index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    if(!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    const newNode = (data, head = null) => new Node(data, head);
    if(!this.head) {
      this.head = newNode(data);
      return;
    }
    if(index === 0) {
      this.head = newNode(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const node = newNode(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {

  }
}

module.exports = { Node, LinkedList };
