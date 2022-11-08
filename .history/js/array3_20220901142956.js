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
