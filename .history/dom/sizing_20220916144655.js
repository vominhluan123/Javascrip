// 1. offsetWith, offsetHeight, offsetLeft, offsetParent, offsetTop
function log(value) {
  console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth); // do rong cua phan tu
log(boxed.offsetHeight); // chieu cao cua phan tu
log(boxed.offsetLeft); // chieu cao cua phan tu
log(boxed.offsetTop); // chieu cao cua phan tu
