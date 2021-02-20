// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Option 1 - Javascript
// function pyramid(n) {
//   const columns = 2 * n - 1;
//   const midpoint = Math.floor(columns / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let column = 0; column < columns; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

// Option 2 - Javascript (Recursive)
function pyramid(n, row = 0, level = '') {
  if(row === n) {
    return;
  }

  const columns = 2 * n - 1;

  if (level.length === columns) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor(columns / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
