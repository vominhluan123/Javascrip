function compare(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("vui long nhap so");
    return;
  } else {
    return Math.max(a, b);
  }
}
console.log(compare(10, 50));
