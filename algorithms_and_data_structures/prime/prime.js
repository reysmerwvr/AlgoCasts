/**
 * * Given a natural number 'n' determine if the number is prime or not
 * @param {number} n 
 * @returns {boolean} 
 */
const isPrime = (n) => {
  if (n <= 2) return false;
  for (let index = 2; index < n; index++) {
    if (n % index === 0) return false
  }
  return true
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false

// Big-O = O(n)


/**
 * Optimized Primality Test
 * Integers larger than the square root do not need to be checked because,
 * whenever 'n = a * b', one of the two factors 'a'and 'b' is less than or equal
 * to the square root of 'n'
 * * Example 1:
 * n = 24, a = 4 and b = 6
 * The square root of 24 is 4.89
 * 4 is less than 4.89
 * a is less than the square root of n
 *  * Example 2:
 * n = 35, a = 5 and b = 7
 * The square root of 35 is 5.91
 * 5 is less than 5.91
 * a is less than the square root of n
 * @param {number} n 
 */

const optimizedIsPrime = (n) => {
  if (n <= 2) return false;
  for (let index = 2; index < Math.sqrt(n); index++) {
    if (n % index === 0) return false
  }
  return true
}

// Big-O = O(sqrt(n))

module.exports = {
  isPrime,
  optimizedIsPrime
}