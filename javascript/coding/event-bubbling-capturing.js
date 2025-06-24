// event bubbling
document.getElementById('grandparent').addEventListener('click', function (e) {
  e.stopPropagation(); // Prevent the event from bubbling up to the document
  console.log('Grandparent Clicked!!!');
});

document.getElementById('parent').addEventListener('click', function (e) {
  e.stopPropagation(); // Prevent the event from bubbling up to the document
  console.log('Parent Clicked!!!');
});

document.getElementById('child').addEventListener('click', function (e) {
  e.stopPropagation(); // Prevent the event from bubbling up to the document
  console.log('Child Clicked!!!');
});

// // event capturing or trickling
// document.getElementById('grandparent').addEventListener(
//   'click',
//   function (e) {
//     e.stopPropagation(); // Prevent the event from bubbling up to the children
//     console.log('Grandparent Clicked!!!');
//   },
//   true
// );

// document.getElementById('parent').addEventListener(
//   'click',
//   function (e) {
//     console.log('Parent Clicked!!!');
//   },
//   true
// );

// document.getElementById('child').addEventListener(
//   'click',
//   function (e) {
//     console.log('Child Clicked!!!');
//   },
//   true
// );
