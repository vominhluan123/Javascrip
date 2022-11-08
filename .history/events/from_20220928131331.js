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
