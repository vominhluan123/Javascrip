// 1. offsetWith, offsetHeight, offsetLeft, offsetParent, offsetTop
function log(value) {
  console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth); // do rong cua phan tu
log(boxed.offsetHeight); // chieu cao cua phan tu
log(boxed.offsetLeft); // vi tri cua no so voi ben trai
log(boxed.offsetTop); // vi tri cua no so voi phia tren
log(boxed.offsetParent); // vi tri cua no so voi phia tren
