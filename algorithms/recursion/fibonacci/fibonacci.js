/**
 * * Given a number 'n' find the nth element of the Fibonacci sequence
 * @param {number} n
 * @returns {number} 
 */

const fibonacci = (n) => {
  if (n < 2) return n;
  return fibonacci(n -1) + fibonacci(n - 2);
}

console.log(fibonacci(0)) // 1
console.log(fibonacci(1)) // 1
console.log(fibonacci(6)) // 8

// Big-O = O(2ˆn)

module.exports = {
  fibonacci
};
