function findNthLargest1(arr, nth) {
  if (nth > arr.length) {
    return 'Please provide a valid nth value';
  }

  const uniqueArr = [...new Set(arr)];
  const sortedArr = uniqueArr.sort((a, b) => b - a);

  return sortedArr[nth - 1];
}

function findNthLargest2(arr, nth) {
  if (nth > arr.length) {
    return 'Please provide a valid nth value';
  }

  let nthMax = -Infinity;
  let used = [];

  for (let i = 0; i < nth; i++) {
    let currentMax = -Infinity;

    for (let num of arr) {
      if (!used.includes(num) && num > currentMax) {
        currentMax = num;
      }
    }

    if (currentMax === -Infinity) return null; // Not enough distinct elements
    used.push(currentMax);
    nthMax = currentMax;
  }

  return nthMax;
}

console.log('------------------');
console.log('Result: ', findNthLargest1([3, 5, 7, 7, 2, 8, 6], 3));
console.log('------------------');
console.log('Result: ', findNthLargest2([3, 5, 7, 7, 2, 8, 6], 3));
console.log('------------------');
