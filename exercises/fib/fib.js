// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution 
// function fib(n) {
//   if (n in [0, 1]) {
//     return n;
//   }
//   return fib(n -1) + fib(n - 2);
// }

// Option 1 - Javascript - Linear Runtime
// function fib(n) {
//   const result = [0, 1];
//   for (let index = 2; index < n; index++) {
//     const a = result[result.length - 1]; // result[index - 1];
//     const b = result[result.length - 2]; // result[index - 2];
//     result.push(a + b);
//   }
//   return result[n];
// }

// Option 2 - Javascript - Exponential Runtime
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = { fib };
