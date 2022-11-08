// addEventListener
const button = document.querySelector(".button");
function handlerClick() {
  console.log("click me");
}
button.addEventListener("click", handlerClick, { capture: true });
//  Bubbling: nổi bọt
// sự kiện click chạy từ trong ra ngoài
const span = document.querySelector(".button span");
span.addEventListener("click", function (e) {
  // event : e
  // stopImmediatePropagation: ngăn chặn hết Bubling
  e.stopImmediatePropagation();
  console.log("click span");
});
span.addEventListener("click", function (e) {
  // event : e
  // stopPropagation: ngăn chặn Bubling
  console.log("click span 2");
});
// target và currentTarget
// target: nó sẽ chọn chính xác element mà mình click tới
// currentTarget: nó sẽ chọn phần tử mà mình click

// preventDefault() : ngăn chặn hành vi mặc định nào đó
const link = document.querySelector(".link2");
link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click me");
});
