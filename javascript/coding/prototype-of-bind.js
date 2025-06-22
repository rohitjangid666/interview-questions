Function.prototype.myBindUsingCall = function (thisArg, ...args1) {
  const fn = this;

  return function (...args2) {
    return fn.call(thisArg, ...args1, ...args2);
  };
};

Function.prototype.myBindUsingApply = function (thisArg, ...args1) {
  const fn = this;

  return function (...args2) {
    return fn.apply(thisArg, [...args1, ...args2]);
  };
};

function greet(profession, country) {
  return `Hello, ${this.name}! You are a ${profession} from ${country}.`;
}

const person = { name: 'Rohit' };

const boundCountryByCall = greet.myBindUsingCall(person, 'Software Engineer');
const boundCountryByApply = greet.myBindUsingApply(person, 'Software Engineer');

console.log(boundCountryByCall('India'));
console.log(boundCountryByApply('India'));
