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
}
