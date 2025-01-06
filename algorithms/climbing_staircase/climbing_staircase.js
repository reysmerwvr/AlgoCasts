/**
 * * Given a staircase of 'n' steps, count the number of distinct ways to climb to the top.
 * * You can either climb 1 step or 2 steps at a time
 * @param {number} n
 * @returns {number}
 */
const climbingStaircase = (n) => {
  const numberOfWays = [1, 2]
  for (let index = 2; index <= n; index++) {
    numberOfWays[index] = numberOfWays[index - 1] + numberOfWays[index - 2]
  }
  return numberOfWays[n - 1]
}


console.log(climbingStaircase(1)) // 1
console.log(climbingStaircase(2)) // 2
console.log(climbingStaircase(3)) // 3
console.log(climbingStaircase(4)) // 5
console.log(climbingStaircase(5)) // 8
// Big-O = O(n)

module.exports = {
  climbingStaircase
}