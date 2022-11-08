// slice: tao ra 1 mang copy cua mang ban dau
const animals = ["tiger", "lion", "horse", "elephant"];

const animals2 = animals.slice();
console.log(animals2);
// slice(start): copy vi tri index trong mang ma ban muon
const animals3 = animals.slice(1);
console.log(animals3);
// slice(start, end): start la vi tri ban dau, end la vi tri ket thuc
// no se lay tu vi tri start toi vi tri end - 1
const animals4 = animals.slice(1, 3);
console.log(animals4);
const animals5 = animals.slice(-1);
console.log(animals5);
// splice: xoa phan tu trong mang hoac thay the phan tu trong mang
const pets = ["dog", "cat", "bird", "dragon"];
const pets2 = pets.splice(2);
console.log(pets2);
// splice(start, deleteCount) : deleteCount la so luong phan tu muon xoa hoac thay the
const pets3 = pets.splice(0, 1);
console.log(pets);
// splice(start, deleteCount, item1, item2, itemN) : deleteCount la so luong phan tu muon xoa hoac thay the
const pets4 = pets.splice(0, 1, "dinasour", "pit");
console.log(pets);
// sort: sap xep cac phan tu trong mang theo chuan unicode-16
const ranDom = [1, 1000, 9999, 10, 22, 5, 09];
console.log(ranDom.sort());
// sort(function(a,b))
const ranDom2 = ranDom.sort(function (a, b) {
  if (a > b) return 1; // sap xep theo tang dan
  if (a < b) return -1; // sap xep theo giam dan
});
// sort rut gon
const ranDom3 = ranDom.sort((a, b) => (a > b ? 1 : -1));
console.log(ranDom3);

// find : no se tra ve phan tu tim thay dau tien trong mang thoa dieu kien nao do
const numBers = [1, 1000, 9999, 10, 22, 5, 09];
// tim phan tu dau tien trong mang lon hon 10
const findYourNumber = numBers.find((Element) => Element > 10);
console.log(findYourNumber);
// Neu ko tim thay gia tri thi` no se la underfine

// findIndex:  no se tra ve Index tim thay dau tien trong mang thoa dieu kien nao do
const findYourIndex = numBers.findIndex((Element) => Element > 10);
console.log(findYourIndex);
// Neu ko tim thay gia tri thi` no se la -1

// map: duyet qua tung phan tu trong mang va tra 1 mang moi ma` ko thay doi ban dau`
const numberList = [1, 2, 3, 4, 5];
// tra ra 1 mang moi ma` cac' so' (gia tri) trong mang cu nhan hai
const listNumberDouble = numberList.map(function (value) {
  return value * 2;
});
console.log(listNumberDouble);
// forEach: tuong tu nhu map nhung ko co return, khong co sao chep mang va` khong co the dung dc
// filter: dung de sang` loc cac phan` tu trong mang? thoa mot dieu kien nao do
const greaterThenThree = numberList.filter((item) => item > 3);
console.log(greaterThenThree);
// some: tra ve true thi thoa 1 dieu kien va nguoc lai tra ve flase thi ko thoa dieu kien nao ca
const sumNumber = numberList.some((value) => value > 3);
console.log(sumNumber);

// every: tra ve true khi tat ca deu kien dieu dung, chi can sai 1 cai la` no se return flase
const sumNumber2 = numberList.every((value) => value > 3);
console.log(sumNumber2);
// reduce: gop cac phan tu trong mang thanh 1
const totalNumber = numberList.reduce(function (a, b) {
  return a + b;
}, 0);
console.log(totalNumber);
