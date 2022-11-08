// lay 1 so lon nhat
function compare(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("vui long nhap so");
    return;
  } else {
    return Math.max(a, b);
  }
}
console.log(compare(10, "aa"));
// in hoa chu cai dau vi du : nam = Nam , NAM = Nam
function capitalize(word = "") {
  if (word.length === "") {
    return null;
  }
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  let otherWord = word.toLowerCase().slice(1);
  return `${newWord}${otherWord}`;
}
console.log(capitalize("LUAN"));

function useCallback(a, b, callback) {
  let max = compare(a, b);
  callback(max);
  return;
}
function max(number) {
  console.log("Max Number is " + number);
  return;
}
console.log(useCallback(10, 1000, max));
