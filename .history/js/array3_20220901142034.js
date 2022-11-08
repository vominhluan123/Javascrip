// By value vs By referrences
// By value -> gia tri thuc su duoc luu trong vung bo nho
const number = 1;
const number2 = 1;
console.log(number === number2); //true
//  By referrences -> noi' toi' vung bo nho
const arr = [1, 2];
const arr2 = [1, 2];
console.log(arr === arr2);
