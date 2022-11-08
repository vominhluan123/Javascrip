// Regular expression: Biểu thức chính quy
// 1. 2 cách khai báo với Regex
const re1 = /hello/;
const re2 = new RegExp("hello");
// hello world
// regex.test(value) -> true or false
console.log(re1.test("hello world hello"));
