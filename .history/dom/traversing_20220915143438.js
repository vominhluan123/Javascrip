// 1. parentNode, parenElement, removeChild
// parentNode vs parenElement -> lay ra phan tu truoc do , 2 phuong thuc nay deu nhu nhau
const span = document.querySelector("span");
console.log(span.parentNode);
console.log(span.parentNode.parentNode); // lay ra pha tu truoc do nua
console.log(span.parentElement.parentNode);
// removeChild -> xoa
// span.parentNode.removeChild(span);
// cach 2 : nhung ko ho tro trinh duyet cu
// span.remove();
// 2.
const nextSpan = span.nextElementSibling;
