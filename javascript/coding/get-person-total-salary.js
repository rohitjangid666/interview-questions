// Example usage:
// const arr = [
//   { name: 'Sam', salary: 1000 },
//   { name: '', salary: 2000 },
//   { name: 'Jane', salary: 3000 },
//   { name: 'Sam', salary: 4000 },
//   { name: '', salary: 2000 },
// ];
// Output: { Sam: 5000, Unknown: 2000, Jane: 3000 }

/**
 * This function takes an array of objects and returns an object with the total salary for each person.
 * If a person's name is empty, it uses a default name.
 * @param {Array} arr - Array of objects with name and salary properties
 * @param {string} defaultName - Default name to use for empty names
 * @returns {Object} - Object with total salary for each person
 */
function getPersonTotalSalary(arr, defaultName = 'Unknown') {
  const result = {};

  arr.forEach(ele => {
    if (!!result[ele.name]) {
      result[ele.name] += ele.salary || 0;
    } else {
      result[ele.name || defaultName] = ele.salary || 0;
    }
  });

  return result;
}
