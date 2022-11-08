// By value vs By referrences
// By value -> gia tri thuc su duoc luu trong vung bo nho
const number = 1;
const number2 = 1;
console.log(number === number2); //true
//  By referrences -> noi' toi' vung bo nho
const arr = [1, 2];
const arr2 = [1, 2];
console.log(arr === arr2); // flase
// JSON
// JSON.stringify
// JSON.parse
console.log(JSON.parse("[1,2,3,4]"));
const arrStr = JSON.stringify(arr);
const arrStr2 = JSON.stringify(arr2);
console.log(arrStr === arrStr2);
// clone: 2 cach sao chep mang
const students = ["a", "b", "c", "d"];
//1. su dung phuong thuc slice
const sliceStudents = students.slice();
console.log(sliceStudents);
//2. spread opeator
const spreadStuden = [...students];
console.log(spreadStuden);
// [1,2] [3,4] [5,6] => [1,2,3,4,5,6,7] : 2 cach gop mang
// concat
const array = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];

const merArray = arr.concat(array2, array3);
console.log(merArray);
// 2.  spread opeator
const merArray2 = [...array, ...array2, ...array3];
console.log(merArray2);

// destructuring array
const toys = ["ball", "sword", "arrow", "magic", "water", "fire"];
const [a, b, c] = toys;
console.log(a, b, c);
// rest parameter
const [d, e, f, ...rest] = toys;
console.log(rest);
function demo(a, ...rest) {
  console.log(a, rest);
}
