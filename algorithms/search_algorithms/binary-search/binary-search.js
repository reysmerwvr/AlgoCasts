/**
 * * Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array.
 * * Return -1 if the target element is not found
 * @param {number[]} elements 
 * @param {number} target 
 * @returns {number}
 */
const binarySearch = (elements, target) => {
  let leftIndex = 0
  let rightIndex = elements.length - 1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    const middleValue = elements[middleIndex]
    if (target === middleValue) return middleIndex
    if (target < middleValue) {
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
  }
  return -1 
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)) // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1
// Big-O = O(logn)

module.exports = {
  binarySearch
}