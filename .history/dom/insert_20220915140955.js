// 1. insertAdjacentText -> thay doi noi dung 4 goc
const h3 = document.querySelector("h3");
h3.insertAdjacentElement("afterbegin", "");
h3.insertAdjacentElement("beforeend", "");
h3.insertAdjacentElement("afterend", "");
// 2. insertAdjacentElement
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforebegin", strong);