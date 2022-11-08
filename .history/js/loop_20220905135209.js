// vong lap
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < number.length; index++) {
  console.log(index);
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
  console.log(number[index]);
}

//lap gia tri nguoc lai
for (let index = number.length - 1; index >= 0; index--) {
  console.log(number[index]);
}
