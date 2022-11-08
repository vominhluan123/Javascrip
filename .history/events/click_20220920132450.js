// addEventListener
const button = document.querySelector(".button");
function handlerClick() {
  console.log("click me");
}
button.addEventListener("click", handlerClick);
//  Bubbling: nổi bọt
// sự kiện click chạy từ trong ra ngoài
