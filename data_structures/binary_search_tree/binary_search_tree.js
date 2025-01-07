/**
 * * Create a Binary Search Tree data structure. A tree is a hierarchical data structure that consist of nodes connected by edges
 * * A binary tree is a tree data structure in which each node has at most two children
 * * A binary search tree the value of each left node must be smaller than the parent node, the value of each right node must be greater that the parent node
 * Ex: File systems, a family tree, DOM, chat bots, abstract syntax tree
 */

class Node {
  constructor(value) {
    this.value = value
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value = null) {
    this.root = value ? new Node(value) : null
  }

  isEmpty() {
    return this.root === null
  }

  insert(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.root = node
    } else {
      this.insertNode(this.root, node)
    }
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (!root.left) {
        root.left = node
      } else {
        this.insertNode(root.left, node)
      }
    } else {
      if (!root.right) {
        root.right = node
      } else {
        this.insertNode(root.right, node)
      }
    }
  }

  contains(value) {
    const { root } = this
    if (value === root.value) return this;
    if (root.value < value && this.right) return this.right.contains(value);
    if (root.value > value && this.left) return this.left.contains(value);
    return null;
  }

  nodeExist(value) {
    const { root } = this
    if (!root) return false
    if (root.value === value) return true
    if (value < root.value) return this.nodeExist(root.left, value)
    return this.nodeExist(root.right, value)
  }
}

module.exports = {
  Node,
  BinarySearchTree
}

// const bst = new BinarySearchTree()
// const isEmpty = bst.isEmpty()
// console.log('Tree is empty?', isEmpty)

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)

// console.log(bst.contains(10))
// console.log(bst.contains(20))

// console.log(bst.nodeExist(10))
// console.log(bst.nodeExist(5))
// console.log(bst.nodeExist(15))
// console.log(bst.nodeExist(20))