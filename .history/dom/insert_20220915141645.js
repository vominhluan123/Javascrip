// 1. insertAdjacentText -> thay doi noi dung 4 goc
const h3 = document.querySelector("h3");
h3.insertAdjacentText("beforebegin", "begin");
h3.insertAdjacentText("afterbegin", "afterbegin");
h3.insertAdjacentText("beforeend", "beforeend");
h3.insertAdjacentText("afterend", "afterend");
// 2. insertAdjacentElement
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);
// 3.  insertAdjacentHTML
const template = `<ul></ul>`;
