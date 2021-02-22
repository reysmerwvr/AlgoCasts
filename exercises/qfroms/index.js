// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// Solution
// class Queue {
//   constructor() {
//     this.stackOne = new Stack();
//     this.stackTwo = new Stack();
//   }

//   add(record) {
//     if (!this.stackOne.peek()) {
//       this.stackOne.push(record);
//     } else if (!this.stackTwo.peek()) {
//       this.stackTwo.push(this.stackOne.pop());
//       this.stackOne.push(record);
//     } else {
//       const tempElement = this.stackTwo.pop();
//       this.stackTwo.push(this.stackOne.pop());
//       this.stackTwo.push(tempElement);
//       this.stackOne.push(record);
//     }
//   }

//   remove() {
//     return (this.stackTwo.peek()) ? this.stackTwo.pop() : this.stackOne.pop();
//   }

//   peek() {
//     return (this.stackTwo.peek()) ? this.stackTwo.peek() : this.stackOne.peek();
//   }
// }

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record =  this.second.pop();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record =  this.second.peek();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}

module.exports = Queue;
