// vong lap
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < number.length; index++) {
  //console.log(index);
}
// lay gia tri value trong mang
for (let index = 0; index < number.length; index++) {
  //   console.log(`${number[index]}`);
}
//neu gia tri la 8 thi dung vong lap
for (let index = 0; index < number.length; index++) {
  //   console.log(number[index]);
  if (number[index] === 8) {
    break;
  }
}
// neu gia tri la 8 thi van chay
for (let index = 0; index < number.length; index++) {
  if (number[index] === 8) {
    continue;
  }
  //   console.log(number[index]);
}

//lap gia tri nguoc lai
for (let index = number.length - 1; index >= 0; index--) {
  //console.log(number[index]);
}
// vong lap chua them vong` lap
for (let index = number.length - 1; index >= 0; index--) {
  //console.log(number[index]);
  for (j = number.length - 1; j >= 0; j--) {
    //  console.log(j);
  }
}
// infinitie loop
/*
for(let i = 0; 2> 1; i--)
*/

// 1. sao chep mang bang vong lap for
let coppyArr = [];
for (let index = 0; index < number.length; index++) {
  coppyArr.push(number[index]);
}
//console.log(coppyArr);
// 2. dao nguoc tu "i love" -> "evol i"
let str = "i love";
let result = "";
for (let index = str.length - 1; index >= 0; index--) {
  //console.log(str[index]);
  result = result + str[index];
}
//console.log(result);

// while va do while
// white: kiem tra truoc roi` moi chay
let number2 = 1;
while (number2 < 10) {
  //   console.log("number is " + number2);
  number2 = number2 + 1;
  // number2 +=1
  // number2++
}
//  do while: chay truoc roi moi kiem tra

let number3 = 1;
do {
  number3++;
  //console.log("number is " + number3);
} while (number3 < 10);
// for of: lay value
for (const value of number) {
  console.log(value);
}
