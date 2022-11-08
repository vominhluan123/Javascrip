//1. Selection nodes
//1.1 document.querySelector("selecter") -> tra ve 1 node neu ton tai selecter do, nguoc lai se tra ve null
// selecters: .header , p, body, #header
const singleNode = document.querySelector("h1");
console.log(singleNode);

// 1.3 document.querySelectorAll("selecter") -> tra ve mot nodeList chua danh sach cac node, neu ko co tra ve
// empty
// no co the loop
const nodeList = document.querySelectorAll(".item");
console.log(nodeList);
