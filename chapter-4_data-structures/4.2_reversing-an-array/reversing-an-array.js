function reverseArray(num) {
  let array = [];
  for (let i = num.length - 1; i >= 0; i--) {
    array.push(num[i]);
  }
  return array;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
