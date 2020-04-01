function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;
  var keysA = Object.keys(a);
  var keysB = Object.keys(b);
  if (keysA == keysB) return true;
}
console.log(deepEqual(2, "2"));
