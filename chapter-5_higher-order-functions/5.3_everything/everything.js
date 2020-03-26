const array = [1, 2, 3, 4, 5, 6];

function everyMethod(array) {
  return array >= 1;
}
function someMethod(array) {
  return array >= 5;
}
console.log(array.every(everyMethod));
console.log(array.some(someMethod));
