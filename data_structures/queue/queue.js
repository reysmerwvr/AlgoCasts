/**
 * * Create a queue data structure. The queue should be a class with methods 'enqueue', 'dequeue' 'peek', 'isEmpty', 'size' and 'print'. Adding to the queue should store an element until it is removed
 * Queue are FIFO
 * Ex: Printers, CPU task scheduling, Callback queue in Javascript runtime
 */

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     return this.items.push(element); // this.items.unshift(element);
//   }

//   dequeue() {
//     return this.items.shift(); // this.items.pop(); 
//   }

//   isEmpty() {
//     return this.items.length === 0
//   }

//   peek() {
//     return (!this.isEmpty()) ? this.items[0] : null
//   }

//   size() {
//     return this.items.length
//   }

//   print() {
//     console.log(this.items.toString())
//   }
// }

class Queue {
  constructor() {
    this.items = {}
    this.rear = 0
    this.front = 0
  }

  enqueue(element) {
    this.items[this.rear] = element
    this.rear++
  }

  dequeue() {
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
  }

  isEmpty() {
    return this.rear - this.front === 0
  }

  peek() {
    return this.items[this.front]
  }

  size() {
    return this.rear - this.front
  }

  print() {
    console.log(this.items)
  }
}

module.exports = {
  Queue
}

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(queue.size())
queue.print()

console.log(queue.dequeue())
console.log(queue.peek())