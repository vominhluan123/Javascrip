function compare(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("vui long nhap so");
  }

  return Math.max(a, b);
}
compare();
console.log(compare(10, 4));
