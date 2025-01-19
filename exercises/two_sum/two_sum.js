/**
 * * Given an array of integers and an integer target
 * * Return the indices of the two numbers such that they add up to target
 * E.g. numbers = [3, 2, 4], target = 6, output [1, 2] 
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]} 
 */

// Brute Force Solution
// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (numbers[i] + numbers[j] === target) return [i, j]
//     }
//   }
// }

function twoSum(numbers, target) {
  const numbersMap = {}

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (numbersMap[target - element] >= 0) {
      return [numbersMap[target - element], i]
    } else {
      numbersMap[element] = i
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 26))

module.exports = {
  twoSum
}