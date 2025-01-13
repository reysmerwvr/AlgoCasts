class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(priority, value) {
    this.elements.push({ priority, value });
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

module.exports = { PriorityQueue }