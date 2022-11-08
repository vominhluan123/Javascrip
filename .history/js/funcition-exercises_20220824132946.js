function compare(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    return console.log("vui long nhap so");
  } else {
    return Math.max(a, b);
  }
}
console.log(compare(10, 50));
