function findSecondLargest1(arr) {
  if (arr.length < 2) {
    return 'The array has fewer than 2 values.';
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  return secondMax === -Infinity ? null : secondMax;
}

function findSecondLargest2(arr) {
  if (arr.length < 2) {
    return 'The array has fewer than 2 values.';
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num < max && num > secondMax) {
      secondMax = num;
    }
  }

  return secondMax;
}

console.log('------------------');
console.log('Result: ', findSecondLargest1([3, 5, 7, 2, 8, 6]));
console.log('------------------');
console.log('Result: ', findSecondLargest2([3, 5, 7, 2, 8, 6]));
console.log('------------------');
