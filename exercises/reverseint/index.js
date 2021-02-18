// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution
// function reverseInt(n) {
//     if (n === 0) return n;
//     const sign = Math.sign(n);
//     const intPositiveNum = sign * n;
//     const str = intPositiveNum.toString();
//     const reversed = str.split('')
//         .filter((char) => parseInt(char, 10) > 0).reverse().join('');
//     return parseInt(reversed, 10) * sign;
// }

// Option 1 - Javascript
function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
