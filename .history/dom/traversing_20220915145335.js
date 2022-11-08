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
// 2. nextElementSibling: tim toi phan tu ke tiep vs previousElementSibling : tim toi phan tu dung sau no
const nextSpan = span.nextElementSibling;
console.log(nextSpan);
const previousLink = span.previousElementSibling;
console.log(previousLink);
// 3. childNodes: tra ve het cac node ben trong bao gom textNodes(khoang trang) vs children
// chi tra ve cac Nodes
console.log(span.childNodes);
console.log(span.children);
// 4. firstChild: lay phan tu dau tien vs firstElementChild: chi lay element
console.log(span.firstChild);
console.log(span.firstElementChild);
// 5. lastChild vs lastElementChild
console.log(span.lastChild);
console.log(span.lastElementChild);
// 6. nextSibling vs previousSibling
console.log(span.nextSibling);
console.log(span.previousSibling);
