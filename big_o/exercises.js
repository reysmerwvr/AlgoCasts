// Exercise 1 product of the Big-O series O(n)
const product = (a, b) => {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum;
}

console.log(product(5, 10));

// Exercise 2 power a^b O(n)
const power = (a, b) => {
  if (b < 0) {
    return 0; // error
  } else if (b === 0) {
    return 1;
  } else {
    return a * power(a, b - 1); // 2 * power(2, 1) = 4
  }
}

console.log(power(2, 2));


// Exercise 3 mod, a % b O(1)
const mod = (a, b) => {
  if (b <= 0) {
    return -1;
  }
  const div = parseInt(a / b, 10);
  return a - (b * div);
}

console.log(mod(4, 2));

// Exercise 4 div, a / b O(a / b)
const div = (a, b) => {
  let count = 0;
  let sum = b;
  while (sum <= a) {
    sum += b;
    count++;
  }
  return count;
}

console.log(div(10, 3));

// Exercise 5 sqrt, O(log n) binary search
const sqrt = (n) => {
  return sqrtHelper(n, 1, n);
}

const sqrtHelper = (n, min, max) => {
  if (max < min) return -1; // no square root

  const guess = parseInt((min + max) / 2, 10);

  if (guess * guess === n) { // found it!
    return guess;
  } else if (guess * guess < n) { // guess is too low
    return sqrtHelper(n, guess + 1, max); // try higher
  } else { // too high
    return sqrtHelper(n, min, guess - 1); // try lower
  }
}

console.log(sqrt(25));

// Exercise 6 the integer square root of a number. If the number is not a perfect square, return -1. It does this by trying
// increasingly large numbers until it finds the right value (or is too high). What is the runtime complexity?
// O(sqrt(n))
const intSqrt = (n) => {
  for (let guess = 1; guess * guess <= n; guess++) {
    if (guess * guess == n) {
      return guess;
    }
  }
  return -1;
}


console.log(intSqrt(16));

// Exercise 7 if a binary search tree is not balanced, how long might it take (worst case) to  find an element in it?
// O(n) where n is the number of nodes in the tree. The max time to find and element is the depth tree. The tree could be a straight list downward and have depth n.

// You are looking for specific value in a tree, but the tree is not a binary search tree.
// What is the runtime complexity?
// O(n). Without any ordering property on the nodes, we might have to search through all the nodes.