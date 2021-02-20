// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];
  for (let index = 0; index < n; index++) {
    results.push([]);
  }
  let counter = 1;
  let startColumn = starRow = 0;
  let endColumn = endRow = n - 1;
  while (startColumn <= endColumn && starRow <= endRow) {
    // Top row
    for (let index = startColumn; index <= endColumn; index++) {
      results[starRow][index] = counter;
      counter++;
    }
    starRow++;

    // Right column
    for (let index = starRow; index <= endRow; index++) {
      results[index][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom column
    for (let index = endColumn; index >= startColumn; index--) {
      results[endRow][index] = counter;
      counter++;
    }
    endRow--;

    // Start column
    for (let index = endRow; index >= starRow; index--) {
      results[index][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}

module.exports = matrix;
