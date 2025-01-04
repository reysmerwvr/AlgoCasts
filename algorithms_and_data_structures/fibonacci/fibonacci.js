/**
 * * Given a number 'n' find the first 'n' elements of the Fibonacci sequence
 * @param {number} n
 * @returns {number[]} 
 */

const fibonacci = (n) => {
  const fib = [0, 1]
  for (let index = 2; index < n; index++) {
    fib[index] = fib[index - 1] + fib[index - 2]
  }
  return fib
}

console.log(fibonacci(2)) // [0, 1]
console.log(fibonacci(3)) // [0, 1, 1]
console.log(fibonacci(7)) // [0, 1, 1, 2, 3, 5, 8]

// Big-O = O(n)

module.exports = {
  fibonacci
};
