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
// Thứ tự ưu tiên keydown->keypress->keyup
