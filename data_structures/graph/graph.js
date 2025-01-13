// // Adjacency matrix
// const matrix = [
//   [0, 1, 0],
//   [1, 0, 1],
//   [0, 1, 0]
// ]

// console.log(matrix[0][0])

// // Adjacency list
// const adjacencyList = {
//   'A': ['B'],
//   'B': ['A', 'C'],
//   'C': ['B'],
// }

// console.log(adjacencyList['A'])

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set()
    }
  }

  addEdge(vertexFrom, vertexTo) {
    if (!this.adjacencyList[vertexFrom]) {
      this.addVertex(vertexFrom)
    }
    if (!this.adjacencyList[vertexTo]) {
      this.addVertex(vertexTo)
    }
    this.adjacencyList[vertexFrom].add(vertexTo)
    this.adjacencyList[vertexTo].add(vertexFrom)
  }

  display() {
    for (const vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
    }
  }

  hasEdge(vertexFrom, vertexTo) {
    return (
      this.adjacencyList[vertexFrom].has(vertexTo) &&
      this.adjacencyList[vertexTo].has(vertexFrom)
    )
  }

  removeEdge(vertexFrom, vertexTo) {
    this.adjacencyList[vertexFrom].delete(vertexTo)
    this.adjacencyList[vertexTo].delete(vertexFrom)
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return
    for (const adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')

graph.display()
console.log(graph.hasEdge('A', 'C'))
graph.removeEdge('A', 'B')
graph.removeVertex('B')
graph.display()
