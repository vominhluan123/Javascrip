const number = "5.5";
const number2 = "6";

// chuyển chuỗi số thành số nguyên
console.log(parseInt(number2));

// chuyển chuỗi số thập phân thành số nguyên
console.log(parseFloat(number));

// số âm thành số dương
const number3 = -10;
console.log(Math.abs(number3));

// làm tròn xuống
console.log(Math.floor(4.3));

// làm tròn lến
console.log(Math.ceil(4.3));

// làm tròn gần nhất 4.5 -> 5 , dưới 4.5 -> 4
console.log(Math.round(4.5));

// làm tròn số lẻ
console.log((1 / 3).toFixed(2));

// kết hợp chuyển thành số nguyên
console.log(parseFloat((1 / 3).toFixed(2)));

// trả ra số random từ 0-1 (mặc định)
console.log(Math.random());

// trả ra số random từ mình muốn
console.log(Math.random(0 * 10));

// trả ra số random từ mình muốn và làm tròn
console.log(Math.ceil(Math.random(0 * 10)));
