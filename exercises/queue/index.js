// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// Solution 
// class Queue {
// 	constructor() {
// 		this.queue = [];
// 	}

// 	static initialize() {
// 		if (!this.instance) {
// 			this.instance = new Queue();
// 		}
// 		return this.instance;
// 	}

// 	add(element) {
// 		return this.queue.unshift(element);
// 	}

// 	remove() {
// 		return this.queue.pop();
// 	}
// }

class Queue {
	constructor() {
		this.queue = [];
	}

	add(element) {
		return this.queue.unshift(element);
	}

	remove() {
		return this.queue.pop();
	}
}

module.exports = Queue;
