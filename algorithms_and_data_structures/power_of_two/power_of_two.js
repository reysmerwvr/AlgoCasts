/**
 * * Given a positive integer 'n' determine if the number is a power of 2 or not
 * n = 8
 * 8 / 2 = 4 (remainder 0)
 * 4 / 2 = 2 (remainder 0)
 * 2 / 2 = 1 (remainder 0)
 * if remainder is not 0 in any step, 'n' is not a power of two
 * if remainder is 0 and 'n' comes down to 1 eventually, n is a power of two
 * @param {number} n 
 * @returns {boolean} 
 */
const isPowerOfTwo = (n) => {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false
    n = n / 2
  }
  return true
}

console.log(isPowerOfTwo(1)) // true (2ˆ0)
console.log(isPowerOfTwo(2)) // true (2ˆ1)
console.log(isPowerOfTwo(5)) // false

// Big-O = O(logn)


const isPowerOfTwoBitWise = (n) => {
  if (n < 1) return false;
  return (n & (n - 1)) === 0
}

console.log(isPowerOfTwoBitWise(1)) // true (2ˆ0)
console.log(isPowerOfTwoBitWise(2)) // true (2ˆ1)
console.log(isPowerOfTwoBitWise(5)) // false

// Big-O = O(1)


module.exports = {
  isPowerOfTwo,
  isPowerOfTwoBitWise
}