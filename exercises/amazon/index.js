// Exercise 1
/* 
  (1)     (6)     (8)     (9)
  / \      |
 (2) (3)  (7) 
 /      \
(4)     (5) 
*/
// const numberOfNodes = 4;
// const nestedTrees = ['1 2', '1 3', '2 4', '3 5', '6 7'];
// elasticCost = ceil(5 ^ 1/2) + ceil(2 ^ 1/2) + ceil(1 ^ 1/2) + ceil(1 ^ 1/2)

// Merge Sort Implentation (Recursion)
function mergeSort(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

// Merge the two arrays: left and right
function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat to the resultArray because there will be one element left over after the while loop
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

function calculateElasticCost(nON, nT) {
  const tree = {};
  const sNT = mergeSort(nT);
  sNT.forEach((node) => {
    let [parent, son] = node.split(' ');
    parent = +parent;
    son = +son;
    if (Object.keys(tree).length <= 0) {
      tree[parent] = {}
      tree[parent]['children'] = [son]
    } else if (tree[parent]) {
      tree[parent]['children'].push(son);
    } else {
      for (let key in tree) {
        if (tree[key]['children'].includes(parent)) {
          tree[key]['children'].push(son);
          return;
        }
      }
      tree[parent] = {}
      tree[parent]['children'] = [son];
    }
  });
  const totalOfNestedNodesArray = Object.keys(tree);
  const nestedNodesPrice = totalOfNestedNodesArray.map((parentKey) => {
    return Math.ceil(Math.sqrt(tree[parentKey].children.length + 1));
  }).reduce((acc, ele) => acc + ele, 0);
  const singleNodesPrice = nON - totalOfNestedNodesArray.length;
  return nestedNodesPrice + singleNodesPrice;
}

// console.log(calculateElasticCost(numberOfNodes, nestedTrees));

// Exercise 2 - https://leetcode.com/discuss/interview-question/1021429/Amazon-OA-or-storage-optimization

const maxStorageVolume = (separator, separatorToRemove) => {
  let space = [...Array(separator + 2).keys()];
  for (let sep of separatorToRemove) {
    space.splice(space.indexOf(sep), 1);
  }
  const spaceArr = space.map((element, index) => {
    if (index < space.length) {
      const next = space[index + 1]
      return next ? next - element : 0;
    }
  })
  return spaceArr.sort((a, b) => b - a).shift();
}

function storage(n, m, h, v) {
  return maxStorageVolume(n, h) * maxStorageVolume(m, v);
}

// console.log(storage(3, 2, [1, 2, 3], [1, 2]));

module.exports = {
  mergeSort,
  merge,
  calculateElasticCost,
  maxStorageVolume,
  storage
}