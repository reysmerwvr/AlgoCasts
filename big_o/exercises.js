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