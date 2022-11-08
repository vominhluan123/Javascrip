// 1. parentNode, parenElement, removeChild
// parentNode vs parenElement -> lay ra phan tu truoc do , 2 phuong thuc nay deu nhu nau
const span = document.querySelector("span");
console.log(span.parentNode);
console.log(span.parentNode.parentNode); // lay ra pha tu truoc do nua
console.log(span.parentElement.parentNode);
