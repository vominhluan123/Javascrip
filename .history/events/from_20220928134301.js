// 1.Keydown: Hoạt động khi nhấn bàn phím xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log(e.keyCode);
  // e.key: key nhập vào
});
// 2.Keyup: Sự kiện này sẽ xảy ra khi nhấn phím rồi nhả ra
input.addEventListener("keyup", function (e) {
  console.log(e.key);
});
// 3.Keypress: sự kiện này xảy ra khi các bạn nhấn phím
// Keypress sẽ ignore các phím như delete, mũi tên, page up, page down, home...,

input.addEventListener("keypress", function (e) {});
// Thứ tự ưu tiên keydown -> keypress -> keyup
// 4. change: xảy ra khi gõ xong, nhấn enter hoặc nhấn chuột ra ngoài
input.addEventListener("change", function (e) {});
// 5.  focus và blur
input.addEventListener("focus", function (e) {});
input.addEventListener("blur", function (e) {});
// 6. submit trong form
