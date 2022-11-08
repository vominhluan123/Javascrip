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
log(window.innerWidth);
log(window.outerWidth);
// 4. selector.getBoundingClientRect() -> lay ra toa do, kich thuoc cua phan tu
log(boxed.getBoundingClientRect());
// left, x: vi tri cua khoi so vs ben trai
// top: vi tri cua khoi so vs phia tren
// bottom: chieu cao cua khoi + top
// right: do rong cua khoi + left
// with: do rong
// height: chieu cao
// su khac nhau giua Node List vs HTML collection
