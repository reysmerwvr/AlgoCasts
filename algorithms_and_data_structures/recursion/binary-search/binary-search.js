/**
 * * Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array.
 * * Return -1 if the target element is not found
 * if the array is empty, return -1 as the element cannot be found
 * if the array has elements, find the middle element in the array. If target is equal to the middle element, return the middle element index
 * if target is less than the middle element, binary search left half of the array
 * if target is greater than the middle element, binary search right half of the array  
 * @param {number[]} elements 
 * @param {number} target 
 * @returns {number}
 */
const binarySearch = (elements, target) => {
  return search(elements, target, 0, elements.length - 1)
}

const search = (elements, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) return -1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  const middleValue = elements[middleIndex]
  if (target === middleValue) return middleIndex
  return (target < middleValue) ? search(elements, target, leftIndex, middleIndex - 1) : search(elements, target, middleIndex + 1, rightIndex)
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)) // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1
// Big-O = O(logn)

module.exports = {
  binarySearch
}