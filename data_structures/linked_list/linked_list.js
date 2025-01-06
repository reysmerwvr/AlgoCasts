class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.getSize() - 1);
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

  // Big O - O(1)
  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  // Big O - O(n)
  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      let prev = this.head
      while (prev.next) {
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }

  insert(value, index) {
    if (index < 0 || index > this.size) return
    if (index === 0) {
      this.prepend(value)
    } else {
      const node = new Node(value)
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  // Big O - O(n)
  removeFrom(index) {
    if (index < 0 || index >= this.size) return null
    let removedNode
    if (index === 0) {
      removedNode = this.head
      this.head = this.head.next;
    } else {
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      removedNode = prev.next
      prev.next = removedNode.next
    }
    this.size--
    return removedNode.value
  }

  // Big O - O(n)
  removeValue(value) {
    if (this.isEmpty()) return null
    if (this.head.value === value) {
      this.head = this.head.next
      this.size--
      return value
    } else {
      let prev = this.head
      while (prev.next && prev.next.value !== value) {
        prev = prev.next
      }
      if(prev.next) {
        const removedNode = prev.next
        prev.next = removedNode.next
        this.size--
        return value
      }
      return null
    }
  }

  search(value) {
    if (this.isEmpty()) return -1
    let i = 0
    let current = this.head
    while (current) {
      if(current.value === value) {
        return i
      }
      current = current.next
      i++
    }
    return -1
  }

  reverse() {
    let prev = null
    let current = this.head
    while (current) {
      let next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head = prev
  }

  print() {
    if (this.isEmpty()) {
      console.log('List is empty')
    } else {
      let current = this.head
      let listValues = ''
      while (current) {
        listValues += `${current.value} `
        current = current.next
      }
      console.log(listValues)
    }
  }
}


module.exports = {
  Node,
  LinkedList
}

const list = new LinkedList()
console.log('List is empty?', list.isEmpty())
console.log('List size', list.getSize())
list.print()
list.insert(10, 0)
list.insert(20, 1)
list.insert(30, 2)
list.insert(40, 3)
list.print()
list.reverse()
list.print()
console.log(list.getSize())


// console.log(list.search(40))

// console.log(list.removeValue(40))
// list.print()

// console.log(list.removeValue(20))
// list.print()

// console.log(list.removeValue(60))
// list.print()
// console.log(list.getSize())

// list.removeFrom(10)
// console.log(list.removeFrom(10))
// console.log(list.removeFrom(0))
// list.print()

// console.log(list.removeFrom(1))
// list.print()
// console.log(list.getSize())

// list.append(10)
// list.print()
// list.append(20)
// list.append(30)
// list.print()