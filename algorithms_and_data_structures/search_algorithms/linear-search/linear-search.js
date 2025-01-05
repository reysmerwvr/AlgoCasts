/**
 * * Given an array of 'n' elements and a target element 't', find the index of 't' in the array.
 * * Return -1 if the target element is not found
 * @param {number[]} elements 
 * @param {number} target 
 * @returns {number}
 */
const linearSearch = (elements, target) => {
  return elements.indexOf(target)
}

// const linearSearch = (elements, target) => {
//   for (let index = 0; index < elements.length; index++) {
//     if (elements[index] === target) return index
//   }
//   return -1
// }

console.log(linearSearch([-5, 2, 10, 4, 6], 10)) // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 20)) // -1
// Big-O = O(n)

module.exports = {
  linearSearch
}