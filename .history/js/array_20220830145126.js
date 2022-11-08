// mang
const sutdents = ["likha", "luan", "b", "c", "d"];
// index: vi tri cua phan tu bat dau bang so 0
// length: do dai cua mang bat dau tu so 1
// truy xuat trong mang
console.log(sutdents[0]);
// lay phan tu cuoi cung
console.log(sutdents[sutdents.length - 1]);
// phuong thuc hay dung cua mang

// reverse : dao nguoc gia tri trong mang
console.log(sutdents.reverse());
// join : noi cac phan tu trong mang thanh chuoi
console.log(sutdents.join("-"));
// indexOf: tra ve vi tri cua phan tu tim thay dau tien
console.log(sutdents.indexOf("d"));
// lastIndexOf: tra ve vi tri cua phan tu tim thay cuoi cung
console.log(sutdents.lastIndexOf("likha"));
// push: them phan tu vao cuoi cung
console.log(sutdents.push("javascrip"));
console.log(sutdents);
// unshift: them phan tu vao dau mang
console.log(sutdents.unshift("fontend"));
console.log(sutdents);
// includes: kiem tra phan tu co trong mang hay khong(true, flase)
console.log(sutdents.includes("d"));
// pop: xoa phan tu cuoi cung trong mang
console.log(sutdents);
sutdents.pop();
console.log(sutdents);
// shift: xoa phan tu dau trong mang
sutdents.shift();
