const { mergeSort, merge, calculateElasticCost } = require('./index.js');

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

test('mergeSort function exists', () => {
  expect(typeof mergeSort).toEqual('function');
});

test('merge function exists', () => {
  expect(typeof merge).toEqual('function');
});

test('calculateElasticCost function exists', () => {
  expect(typeof calculateElasticCost).toEqual('function');
});

describe('Merge sort', () => {
  test('merge function can join together two sorted arrays', () => {
    const left = [1, 10];
    const right = [2, 8, 12];

    expect(merge(left, right)).toEqual([1, 2, 8, 10, 12]);
  });

  test('sorts an array', () => {
    expect(mergeSort(getArray())).toEqual(getSortedArray());
  });

  test('sorts an array', () => {
    expect(mergeSort(['3 5', '1 2', '2 4', '6 7', '1 3'])).toEqual(['1 2', '1 3', '2 4', '3 5', '6 7']);
  });
});

describe('Calculate elastic cost', () => {
  test('gets elastic cost', () => {
    expect(calculateElasticCost(4, ['3 5', '1 2', '2 4', '6 7', '1 3'])).toEqual(
      Math.ceil(Math.sqrt(5)) + Math.ceil(Math.sqrt(2)) + (1 + 1)
    );
    expect(calculateElasticCost(4, ['1 2', '1 3', '2 4', '3 5', '6 7'])).toEqual(
      Math.ceil(Math.sqrt(5)) + Math.ceil(Math.sqrt(2)) + (1 + 1)
    );
    expect(calculateElasticCost(4, ['1 2', '1 3'])).toEqual(
      Math.ceil(Math.sqrt(3)) + (1 + 1 + 1)
    );
    expect(calculateElasticCost(50, [])).toEqual(
      50
    );
    expect(calculateElasticCost(50, ['1 2'])).toEqual(
      Math.ceil(Math.sqrt(2)) + 49
    );
    expect(calculateElasticCost(2, ['1 2', '1 3', '2 4', '3 5', '4 6', '5 7', '6 8', '7 9', '100 101'])).toEqual(
      Math.ceil(Math.sqrt(9)) + Math.ceil(Math.sqrt(2))
    );
  });
});