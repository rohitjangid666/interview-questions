const validate = (condition = '') => {
  return condition.startsWith('p');
};

const p1 = new Promise((resolve, reject) => {
  if (!validate('p1')) {
    reject('Promise 1 rejected!!!');
  }

  setTimeout(() => {
    resolve('Promise 1 fulfilled!!!');
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  if (!validate('1p2')) {
    reject('Promise 2 rejected!!!');
  }

  setTimeout(() => {
    resolve('Promise 2 fulfilled!!!');
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  if (!validate('p3')) {
    reject('Promise 3 rejected!!!');
  }

  setTimeout(() => {
    resolve('Promise 3 fulfilled!!!');
  }, 3000);
});

Promise.all([p1, p2, p3])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log('error', err);
  });

Promise.race([p1, p2, p3])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log('error', err);
  });

console.log('Hello World!!!');
