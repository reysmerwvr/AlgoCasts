/**
 * * Given an array of integers, sort the array
 * Identify the pivot element in the array
 * Pick the first element as pivot
 * Pick the last element as pivot
 * Pick a random element as pivot
 * Pick median as pivot
 * Put everything that is smaller than the pivot into a left array and everything that is greater than the pivot into a right array
 * Repeat the process for the individual left and right arrays till you have an array of length 1 which is sorted by definition
 * Repeatedly concatenate the left array, pivot and right array till one sorted array remains
 * @param {number[]} elements 
 * @returns {number[]}
 */
const quickSort = (elements) => {
  const elementsLength = elements.length
  if (elementsLength < 2) return elements
  let pivot = elements[elementsLength - 1]
  let left = []
  let right = []
  for (let index = 0; index < elementsLength - 1; index++) {
    const current = elements[index]
    if(current < pivot) {
      left.push(current)
    } else {
      right.push(current)
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

// const quickSort = (array) => {
//   if (array.length < 2) {
//     return array;
//   }

//   const pivot = array[0];
//   const lesserArray = [];
//   const greaterArray = [];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > pivot) {
//       greaterArray.push(array[i]);
//     } else {
//       lesserArray.push(array[i]);
//     }
//   }

//   return quickSortBasic(lesserArray).concat(
//     pivot,
//     quickSortBasic(greaterArray)
//   );
// }

console.log(quickSort([-6, 20, 8, -2, 4])) // [-6, -2, 4, 8, 20]
// Big-O = O(nˆ2) Worst case
// Big-O = O(nlogn) Avg case

module.exports = {
  quickSort
}