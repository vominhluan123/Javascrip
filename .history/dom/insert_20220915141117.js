// 1. insertAdjacentText -> thay doi noi dung 4 goc
const h3 = document.querySelector("h3");
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);
