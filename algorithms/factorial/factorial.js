/**
 * * Given an integer 'n', find the factorial of that integer
 * @param {number} n 
 * @returns {number}
 */
const factorial = (n) => {
  let result = 1
  for (let index = 2; index <= n; index++) {
    result = result * index
  }
  return result
}

console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(4)) // 4*3*2*1 = 24
console.log(factorial(5)) // 120

// Big-O = O(n)

module.exports = {
  factorial
}