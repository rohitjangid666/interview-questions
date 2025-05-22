function printRideSidePattern(numOfRows) {
  for (let i = 0; i < numOfRows; i++) {
    let pattern = '';

    // way 1
    for (let j = 0; j <= i; j++) {
      pattern += '*';
    }

    // way 2
    // for (let j = 0; j < i + 1; j++) {
    //   pattern += '*';
    // }

    console.log(pattern);
  }
}

function printRightSideInvertedPattern(numOfRows) {
  for (let i = numOfRows; i > 0; i--) {
    let pattern = '';

    for (let j = 0; j < i; j++) {
      pattern += '*';
    }

    console.log(pattern);
  }
}

function printPyramidPattern(numOfRows) {
  for (let i = 1; i <= numOfRows; i++) {
    let pattern = '';

    for (let space = 0; space < numOfRows - i; space++) {
      pattern += ' ';
    }

    for (let j = 0; j < 2 * i - 1; j++) {
      pattern += '*';
    }

    console.log(pattern);
  }
}

function printInvertedPyramidPattern(numOfRows) {
  for (let i = numOfRows; i > 0; i--) {
    let pattern = '';

    for (let space = 0; space < numOfRows - i; space++) {
      pattern += ' ';
    }

    for (let j = 0; j < 2 * i - 1; j++) {
      pattern += '*';
    }

    console.log(pattern);
  }
}

printRideSidePattern(5);
console.log('------------------');
printRightSideInvertedPattern(5);
console.log('------------------');
printPyramidPattern(5);
console.log('------------------');
printInvertedPyramidPattern(5);
console.log('------------------');
