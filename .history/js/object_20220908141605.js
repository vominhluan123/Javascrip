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
  // console.log(key);
  //console.log(students[key]);
}
// object.key(object) -> tra ve 1 mang chua tat ca cac keys cua object
const keys = Object.keys(students);
//console.log(keys);
//console.log(keys.length);
// object.value(object) -> tra ve 1 mang chua tat ca cac gia tri cua object
const values = Object.values(students);
//console.log(values);

//Object.entries(object) -> tra ve 1 mang nested [[1,2,3],[4,5,6]] gom co key va value

const entries = Object.entries(students);
//console.log(entries);
// Object.assign(): gop oject lai voi nhau
// Cach 1
const a = {
  firstName: "likha",
};
const b = {
  lastName: "luan",
};
const c = Object.assign(a, b);
//console.log(c);
// Cach 2
const d = { ...a, ...b };
//console.log(d);
// Object.freeze(object) -> ngan chan chinh sua key va value cua object
const car = {
  brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";
//console.log(newCar);
// Object.seal(object) -> cho phep chinh sua key value nhung ko them duoc key va value moi
const user = {
  userName: "luan",
};
const newUser = Object.seal(user);
newUser.userName = "likha";
newUser.lastName = "llilkha";
//console.log(newUser);
// Sao chep 1 Object
const newUser2 = { ...user };
newUser2.userName = "likha2";
console.log(newUser2);
console.log(user);
// sao chep 1 Object phuc tap
const user2 = {
  userName: "luan",
  school: {
    name: "designer",
    room: {
      name: "IT",
    },
  },
};
const newUser3 = JSON.parse(JSON.stringify(user2));
newUser3.school.room.name = "AAA";
console.log(newUser3);
console.log(user2);
// this keyword
// this no se de cap toi object gan nhat
const students2 = {
  name: "likha",
  age: "21",
  "last-name": "luan",
  male: true,
  hi: function () {
    console.log(`my name is ${this.name} and i am ${this.age} years old`);
  },
};
students2.hi();
//  Optional chaining
