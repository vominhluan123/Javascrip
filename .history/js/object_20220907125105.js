// object literal
const objectLiteral = {};
// object constructor
const objectConstructor = new Object();
const students = {
  name: "likha",
  age: "21",
  "last-name": "luan",
  male: true,
  hi: function () {
    console.log("hello");
  },
};
// 2 cach truy xuat gia tri cua object
// 2.1 dot notation .key
console.log(students.name);
// 2.2 Bracket notation ["key"]
console.log(students["age"]);
console.log(students["last-name"]);
// thay doi gia tri cua object
students.age = 20;
students.male = male;
console.log(students);
