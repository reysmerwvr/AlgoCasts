const { PriorityQueue } = require('../../data_structures/priority_queue/priority_queue')

function dijkstra(graph, startNode) {
  const distances = {};
  const previousNodes = {};
  const queue = new PriorityQueue();

  for (let node in graph) {
    distances[node] = Infinity;
    previousNodes[node] = null;
  }
  distances[startNode] = 0;
  queue.enqueue(0, startNode);

  while (!queue.isEmpty()) {
    const { value: currentNode } = queue.dequeue();
    
    for (const neighbor in graph[currentNode]) {
      const distance = graph[currentNode][neighbor];
      const newDistance = distances[currentNode] + distance;

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previousNodes[neighbor] = currentNode;
        queue.enqueue(newDistance, neighbor);
      }
    }
  }

  return { distances, previousNodes }
}
// Big O - O(v+e logV)
// Space Complexity O(V + E)

const graph = {
  A: { B: 4, C: 1 },
  B: { A: 4, C: 2, D: 5 },
  C: { A: 1, B: 2, D: 8 },
  D: { B: 5, C: 8 }
};

const { distances, previousNodes } = dijkstra(graph, "A");
console.log("Shortest Distances:", distances);
console.log("Previous Nodes:", previousNodes);