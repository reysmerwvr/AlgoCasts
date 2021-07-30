// Example 1 O(n)

const foo = (arr = []) => {
  sum = 0;
  product = 1;

  for (let value of arr) {
    sum += value;
  }

  for (let value of arr) {
    product *= value;
  }

  console.log(`${sum}, ${product}`);
};

foo([1, 2, 3, 4]);

// Example 2 O(n^2)

const printPairs = (arr = []) => {
  for (let i of arr) {
    for (let j of arr) {
      console.log(i + "," + j);
    }
  }
};

printPairs([1, 2, 3, 4]);

// Example 3 O(n^2 / 2) O(n^2)

const printUnorderedPairs = (arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + "," + arr[j]);
    }
  }
};

printUnorderedPairs([1, 2, 3, 4]);

// Example 4 O(ab)

const printUnorderedPairsTwo = (arrA = [], arrB = []) => {
  for (let i = 0; i < arrA.length; i++) {
    // O(a)
    for (let j = 0; j < arrB.length; j++) {
      // O(b)
      if (arrA[i] < arrB[j]) {
        // O(1)
        console.log(arrA[i] + "," + arrB[j]);
      }
    }
  }
};

printUnorderedPairsTwo([1, 2, 3, 4], [1, 2]);

// Example 5 O(ab)

const printUnorderedPairsThree = (arrA = [], arrB = []) => {
  for (let i = 0; i < arrA.length; i++) {
    // O(a)
    for (let j = 0; j < arrB.length; j++) {
      // O(b)
      for (let k = 0; k < 100000; k++) {
        // O(100000)
        console.log(arrA[i] + "," + arrB[j]);
      }
    }
  }
};

printUnorderedPairsThree([1, 2, 3, 4], [1, 2]);

// Example 6 O(n)

const reverse = (arr = []) => {
  for (let i = 0; i < arr.length / 2; i++) {
    let other = arr.length - i - 1;
    let temp = arr[i];
    arr[i] = arr[other];
    arr[other] = temp;
  }
  return arr;
};

console.log(reverse([1, 2, 3, 4]));

// Example 7
// Which of the following are equivalent to O(N)? Why?
/*
 * O(n + p), where P < N/2
 * O(2n)
 * O(n + log n)
 * O(n + m)
 */

// Example 8 O(a * s(log a + log s))

const sortAll = (arr = []) => {
  const sortedStrings = [];
  // O(a * s log s)
  for (let value of arr) {
    const sortedString = value
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join(""); // O(s log s)
    sortedStrings.push(sortedString);
  }
  return sortedStrings.sort(); // O(a * s log a)
};

console.log(sortAll(["zabcd", "bcvdpia"]));

// Example 9 O(n)

const sum = (node) => {
  if (node === null) {
    return 0;
  }
  return sum(node.left) + node.value + sum(node.right);
};

// Example 10 O(sqrt(n))

const isPrime = (n) => {
  for (let x = 2; x * x <= n; x++) {
    if (n % x === 0) {
      return false;
    }
    return true;
  }
};

console.log(isPrime(33));

// Example 11 Factorial O(n)
// This is a just a straight recursion from n to n-1 to n-2 down to 1.

const factorial = (n) => {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1); /// 5 fact(4)[4 * fact(3)[3 * fact(2)[2 * fact(1)[1 * fact(0)]]]]
  }
};

console.log(factorial(5));

// Example 12 Permutation - O(n!) - Worst case O(n * n * n!) => O((n + 2)!)
const permutation = (str, prefix = "") => {
  if (str.length === 0) {
    console.log(prefix);
  } else {
    for (let i = 0; i < str.length; i++) {
      permutation(str.slice(0, i) + str.slice(i + 1), prefix + str[i]);
    }
  }
}

permutation("abcd");

// Example 13 Fibonacci - O(2^n)
const fib = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(5));

// Example 14 All Fibonacci - O(2^n)
const allFib = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i + ": " + fib(i));
  }
}

allFib(5);

// Example 15 All Fibonacci Memoize - O(n)
const memoize = (f) => {
  const memo = {};
  return (x) => {
    if (memo[x] === undefined) {
      memo[x] = f(x);
    }
    return memo[x];
  };
}

const memoFib = memoize(allFib);

memoFib(5);

// Example 16 Powers of 2 - O(log n)
const powersOf2 = (n) => {
  const nInteger = parseInt(n);
  if (nInteger < 1) {
    return 0;
  } else if (nInteger === 1) {
    console.log(1);
    return 1;
  } else {
    const curr = powersOf2(nInteger / 2) * 2;
    console.log(curr);
    return curr;
  }
}

powersOf2(50);