function countChar(string, character) {
  let count = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] == character) {
      count += 1;
    }
  }
  return count;
}
console.log(countChar("BILABILABILA", "B"));

function countBs(string) {
  return countChar(string, "I");
}
console.log(countBs("INTERNATIONAL"));
