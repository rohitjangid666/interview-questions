function greet(hometown, age, punctuation = '.') {
  return `Welcome! This is ${this.name} from ${hometown}. He's ${age} years old${punctuation}`;
}

console.log(greet.call({ name: 'Rohit' }, 'India', 23));

console.log(greet.apply({ name: 'Rohit' }, ['India', 23]));

const greetWith = greet.bind({ name: 'Rohit' }, 'India', 23);

console.log(greetWith('!'));
