function sum(a = 0, b = 0) {
  return a + b;
}
// fn : function
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}
console.log(average(200, 300, sum));

// không cần đặt tên funciton
const logName = function () {
  console.log("You Name");
};
logName();

// gọi funciton ngay lập tức
(function () {
  console.log("Name");
})();

// Scope : phạm vi của biến

let myName = "likha"; // golbal scope : có thể gọi bất kỳ đâu
console.log(myName);

function MyAge() {
  let Age = 25; // funciton scope: chỉ có thể gọi dc trong funciton này
  console.log(Age);
}
MyAge();

// block scope
let message = " Helle word";

if (2 > 1) {
  let message = "Hello"; // block scope : chỉ dc dùng trong funciton này
  alert(message);
}
