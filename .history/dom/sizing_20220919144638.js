// 1. offsetWith, offsetHeight, offsetLeft, offsetParent, offsetTop
function log(value) {
  console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth); // do rong cua phan tu
log(boxed.offsetHeight); // chieu cao cua phan tu
log(boxed.offsetLeft); // vi tri cua no so voi ben trai
log(boxed.offsetTop); // vi tri cua no so voi phia tren
log(boxed.offsetParent); // lay ra phan tu cha de lay gia tri cua phan tu cha
// 2. clienWith, clienHight, clientLetf, clientTop
log(boxed.clientWidth); // do rong cua phan tu tru di boder
log(boxed.clientHeight); // chieu cao cua phan tu tru di boder
log(boxed.clientLeft); // vi tri cua no so voi ben trai
log(boxed.clientTop); //  vi tri cua no so voi phia tren boder
// 3. window...
log(window.innerHeight);
log(window.outerHeight);
