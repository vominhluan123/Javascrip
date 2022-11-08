// vong lap
const number = [1, 2, 3, 4, 5, 6, 7, 8];
for (let index = 0; index < number.length; index++) {
  console.log(index);
}
// lay gia tri value trong mang
for (let index = 0; index < number.length; index++) {
  console.log(`${number[index]}`);
}
// neu gia tri la 8 thi dung vong lap
for (let index = 0; index < number.length; index++) {
  console.log(number[index]);
  if (number[index] === 8) {
    break;
  }
}
