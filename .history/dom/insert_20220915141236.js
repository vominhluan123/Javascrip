// 1. insertAdjacentText -> thay doi noi dung 4 goc
const h3 = document.querySelector("h3");
h3.insertAdjacentElement("beforebegin", "begin");
h3.insertAdjacentElement("afterbegin", "afterbegin");
h3.insertAdjacentElement("beforeend", "beforeend");
h3.insertAdjacentElement("afterend", "afterend");
// 2. insertAdjacentElement
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);
