/**
 * * Given an array of integers, sort the array
 * Divide the array into sub arrays, each containing only one element (An array with one element is considered sorted)
 * Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array
 * @param {number[]} elements 
 * @returns {void}
 */
const mergeSort = (elements) => {
  const elementsLength = elements.length
  if (elementsLength < 2) return elements
  const middleIndex = Math.floor(elementsLength / 2)
  const left = elements.slice(0, middleIndex)
  const right = elements.slice(middleIndex)

  return merge(mergeSort(left), mergeSort(right))
}

/**
 * 
 * @param {number[]} leftArray 
 * @param {number[]} rightArray
 * @returns {number[]}
 * 
 */
const merge = (leftArray, rightArray) => {
  const sortedArray = []
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift())
    } else {
      sortedArray.push(rightArray.shift())
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray]
}

// const mergeSort = (arr) => {
//   // [97, 0]
//   if (arr.length === 1) {
//     return arr;
//   }

//   const center = Math.floor(arr.length / 2);
//   const left = arr.slice(0, center); // [97]
//   const right = arr.slice(center); // [0]

//   return merge(mergeSort(left), mergeSort(right)); // [97] [0]
// }

// const merge = (left, right) => {
//   const results = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       results.push(left.shift());
//     } else {
//       results.push(right.shift());
//     }
//   }
//   return [...results, ...left, ...right];
// }

console.log(mergeSort([-6, 20, 8, -2, 4])) // [-6, -2, 4, 8, 20]

// Big-O = O(nlogn)

module.exports = {
  mergeSort
}