// const name = "minh luan";
// const job = "developer";

// const newSti = `Hi my name ${name} I am ${job}`;
// console.log(newSti);

const myStr = "FronEnd Developer D";

console.log(myStr.split(" "));
console.log(myStr.split(""));
console.log(myStr.split("/"));
// in chữ thường
console.log(myStr.toLowerCase(""));
// in chữ hoa
console.log(myStr.toUpperCase(""));
// kiểm tra bắt đầu bằng chữ gì (true, flase)
console.log(myStr.startsWith("FronEnd"));
// kiểm tra kết thúc bằng chữ gì (true, flase)
console.log(myStr.endsWith("Developer"));
// kiểm tra có chứa hay không, không bắt buột chỉ cấn có (true, flase)
console.log(myStr.includes("End"));
console.log(myStr.includes("abc"));
// Kiểm tra Vị trí
console.log(myStr.indexOf("D"));
// Kiểm tra vị trí cuối cùng
console.log(myStr.lastIndexOf("D"));
// Thay thế
console.log(myStr.replace("Developer", "Designer"));
// Lặp lại
console.log(myStr.repeat(5));
// Lấy kí tự (bắt đầu, kết thúc)
console.log(myStr.slice(0, 8));
// Xóa khoảng trống
console.log(myStr.trim());
// Xóa khoảng trống (trái)
console.log(myStr.trimStart());
// Xóa khoảng trống (phải)
console.log(myStr.trimEnd());
// Lấy kí tự
console.log(myStr.charAt(1));
// Lấy ra 1 phần tử của chuỗi
console.log(myStr(1.5));
// Lấy ra các kí tự của chuỗi
