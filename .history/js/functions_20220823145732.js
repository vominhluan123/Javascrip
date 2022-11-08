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

let message = "Helle word"; // golbal scope : có thể gọi bất kì đâu
// var message , Không nên dùng var vì var sẽ bị hoisted
if (2 > 1) {
  let message = "Hello"; // block scope : chỉ dc dùng trong funciton này
  //   alert(message);
}
console.log(message);

// Lexical scope

let aNewName = "likha";
function name2() {
  let message = "Helo";
  console.log(`${message} ${aNewName}`);
}
name2();

// Closure
// funciton con có thể truy xuất scope của funciton cha
function sayHello() {
  let message = "hi";
  function sayHi() {
    console.log(message);
  }
  return sayHi;
}
let Heloo = sayHello();
Heloo();

function sayHello2(message) {
  return function hiYouName(name) {
    console.log(` ${message} ${name}`);
  };
}
let Hello = sayHello2("Hello");
Hello("llilkha");
