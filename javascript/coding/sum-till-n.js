// sum(1)(2)....(n)
const sum1 = function (a) {
  return function (b) {
    console.log(b);
    if (!!b) {
      return sum1(a + b);
    }
    return a;
  };
};

const result1 = sum1(1)(5)(3)(1)(10);

console.log(result1());
