//1. Selection nodes
//1.1 document.querySelector("selecter") -> tra ve 1 node neu ton tai selecter do, nguoc lai se tra ve null
// selecters: .header , p, body, #header
const singleNode = document.querySelector("h1");
console.log(singleNode);

// 1.3 document.querySelectorAll("selecter") -> tra ve mot nodeList chua danh sach cac node, neu ko co tra ve
// empty
// no co the loop va su dung forEach
const nodeList = document.querySelectorAll(".item");
console.log(nodeList);
// 1.4 document.getElementsByClassName("header") ->  tra ve mot HTMLCollection chua danh sach cac node, neu ko co tra ve
// empty
const classNode = document.getElementsByClassName("item");
console.log(classNode);
// 1.5 document.getElementsByTagName("tagName")
const tagNodes = document.getElementsByTagName("body");
console.log(tagNodes);
// 1.6 document.getElementsById("id") -> tra ve 1 node
const idNode = document.getElementById("title");
console.log(idNode);
