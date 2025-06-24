const categoriesEle = document.getElementById('categories');

categoriesEle.addEventListener('click', function (e) {
  console.log('Category clicked: ', e.target.id);
  if (e.target.id === 'category-1') {
    alert('Category 1 clicked!');
  } else if (e.target.id === 'category-2') {
    alert('Category 2 clicked!');
  } else if (e.target.id === 'category-3') {
    alert('Category 3 clicked!');
  }
});
