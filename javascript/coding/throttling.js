const throttle = (func, delay) => {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

const filterQuestions = throttle(function () {
  const searchItem = document.querySelector('#searchInput').value;
  console.log(`Filtering questions for: ${searchItem}`);
}, 1000);
