const debounce = function (func, wait = 300) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

const filterQuestions = debounce(function () {
  const searchItem = document.querySelector('#searchInput').value;
  console.log(`Filtering questions for: ${searchItem}`);
}, 1000);
