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
students.male = "male";
students.isDeveloper = true;
students["is-developer"] = true;
students.hello = function () {
  console.log("HH");
};
console.log(students);
// cach xoa gia tri trong object
delete students["last-name"];
for (let key in students) {
  console.log(key);
  console.log(students[key]);
}
// object.key() -> tra ve 1 mang chua tat ca cac keys cua object
const keys = Object.keys(students);
console.log(keys);
console.log(keys.length);
