/**
 * * Given an array of integers, sort the array
 * Virtually split the array into a sorted and unsorted part
 * Assume that the first element is already sorted and remaining elements are unsorted
 * Select an unsorted element and compare with all elements in the sorted part
 * If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part
 * Else, shift larger elements in the sorted part towards the right
 * Insert the selected element at the right index
 * Repeat till all the unsorted elements are placed in the right order
 * @param {number[]} elements 
 * @returns {void}
 */
const insertionSort = (elements) => {
  for (let index = 1; index < elements.length; index++) {
    let numberToInsert = elements[index]
    let sortedElementIndex = index - 1
    while (sortedElementIndex >= 0 && elements[sortedElementIndex] > numberToInsert) {
      elements[sortedElementIndex + 1] = elements[sortedElementIndex]
      sortedElementIndex = sortedElementIndex - 1
    }
    elements[sortedElementIndex + 1] = numberToInsert
  }
}

const elements = [-6, 20, 8, -2, 4]
insertionSort(elements)
console.log(elements) // [-6, -2, 4, 8, 20]
// Big-O = O(nˆ2)

module.exports = {
  insertionSort
}