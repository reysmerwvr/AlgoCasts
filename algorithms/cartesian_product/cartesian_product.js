/**
 * * Given two finite non-empty sets, find their cartesian product
 * @param {number[]} setA
 * @param {number[]} setB
 * @returns {number[][]}
 */
const cartesianProduct = (setA, setB) => {
  const result = []
  for (let i = 0; i < setA.length; i++) {
    for (let j = 0; j < setB.length; j++) {
      result.push([setA[i], setB[j]])
    }
  }
  return result
}

const setA = [1, 2]
const setB = [3, 4]
console.log(cartesianProduct(setA, setB)) // [[1, 3], [1, 4], [2, 3], [2, 4]]
// Big-O = O(nˆ2) Only if set length is equal
// Big-O = O(mn)

module.exports = {
  cartesianProduct
}