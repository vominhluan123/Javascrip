function sum(a = 0, b = 0) {
  return a + b;
}
// fn : function
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}
average(200, 300, sum);
