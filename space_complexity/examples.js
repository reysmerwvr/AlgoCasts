// Example 1 O(n)

const sum = (n = 0) => {
  if (n <= 0) {
    return 0
  }
  return n + sum(n-1) // 5 + sum(4) [4 + sum(3) [3 + sum(2) [2 + sum(1) [1 + sum(0)]]]] -> 5 + 4 + 3 + 2 + 1
}

/* sum(4)
 *  -> sum(3)
 *    -> sum(2)
 *      -> sum(1)
 *        -> sum(0)
*/
console.log("🚀 ~ file: examples.js ~ line 9 ~ sum ~ sum", sum(5))


// Example 2 O(1)
// There will be roughly O(n) calls to pairSum. However, those calls do not exist simultaneously on the call stack, so you only need O(1) space.

const pairSumSequence = (n = 0) => {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += pairSum(i, i + 1)
  }
  return sum
}

const pairSum = (a, b) => {
  return a + b
}

console.log("🚀 ~ file: examples.js ~ line 34 ~ pairSumSequence(5)", pairSumSequence(5))

// Example 3 Space Complexity O(n), Runtime Complexity O(2^n) - Recursive Runtimes

const recursiveRuntime = (n) => {
  if (n <= 1) {
    return 1
  }
  return recursiveRuntime(n - 1) + recursiveRuntime(n - 1) // f(4) + f(4) [f(3) + f(3) [f(2) + f(2) [f(1) + f(1)]]] 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2
}

console.log("🚀 ~ file: examples.js ~ line 100 ~ recursiveRuntime ~ recursiveRuntime", recursiveRuntime(5))