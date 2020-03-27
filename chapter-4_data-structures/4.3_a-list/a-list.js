function arrayToList(array1) {
    let list = {};
    for (let i = array1.length - 1; i >= 0; i--) {
      list = { value: array1[i], rest: list };
    }
    return list;
  }
  console.log(arrayToList([1, 2, 3, 4, 5]));
  