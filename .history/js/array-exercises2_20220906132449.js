//1. loai bo gia tri falsy giu lai gia trui truthy

const array = [
  1,
  1000,
  false,
  "likha",
  "",
  undefined,
  "javascrip",
  [1, 2, 3],
  NaN,
];

const filterFalsy = array.filter(Boolean);
//console.log(filterFalsy);
//2. loai bo mang con
const complexArray = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["javascrip"]],
  [888, 666, [90]],
];
const result = complexArray.flat(2);
//console.log(result);
// 3. dao nguoc so nguyen vi du: 1234 => 4321, -567 => -765
function reverseNumber(number) {
  const value =
    parseInt(number.toString().split("").reverse().join("")) *
    Math.sign(number);
  //console.log(value);
}
//reverseNumber(-1234);
// 4. viet chuong trinh chay tu so 1,
// neu chia het cho 2 thi` in ra chu "Fizz",
// chia het cho 3 thi` in ra chu "Buzz", neu chia het cho ca 2 va 3 thi in ra chu "FizzBuzz"
// % : chia lay so du VD: 6 % 2 = 3 du 0, 6 % 4 = 1 du 2

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if ((i % 2 === 0) & (i % 3 === 0)) {
      console.log("FizzBuzz");
    } else if (i % 2 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) console.log("Buzz");
  }
}
//fizzBuzz(15);
// 5. chi 1 bat ky, dem so luong ky tu co trong chuoi Vowels
function Vowels(string) {
  let count = 0;
  const characters = "ueooai";
  for (let c of string.toLowerCase()) {
    if (characters.includes(c)) count += 1;
  }
  return count;
}
console.log(Vowels("llilkha"));
