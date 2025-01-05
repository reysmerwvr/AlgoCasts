/**
 * * Given an array of integers, sort the array
 * @param {number[]} elements 
 * @returns {void}
 */
const bubbleSort = (elements) => {
  let swapped
  do {
    swapped = false
    for (let index = 0; index < elements.length - 1; index++) {
      const current = elements[index];
      const next = elements[index + 1];
      if (current > next) {
        elements[index] = next
        elements[index + 1] = current
        swapped = true
      }
    }
  } while (swapped);
}

// export const bubbleSort = (elements) {
//   for (let i = 0; i < elements.length; i++) {
//     for (let j = 0; j < elements.length - i - 1; j++) {
//       if (elements[j] > elements[j + 1]) {
//         const lesser = elements[j + 1];
//         elements[j + 1] = elements[j];
//         elements[j] = lesser;
//       }
//     }
//   }
//   return arr;
// }

const elements = [-6, 20, 8, -2, 4]
bubbleSort(elements)
console.log(elements) // [-6, -2, 4, 8, 20]
// Big-O = O(nˆ2)

module.exports = {
  bubbleSort
}