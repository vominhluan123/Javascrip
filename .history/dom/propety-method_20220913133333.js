// 1. selector.getAttribute("attribute") -> lay ra gia tri cua attribute selecter
// attribute -> thuoc tinh: href, id, class, src, style

const getLink = document.querySelector("a");
console.log(getLink.getAttribute("href"));

const getli = document.querySelectorAll(".item");
getli.forEach((item) => {
  console.log(item.getAttribute("class"));
});
// 2. selector.setAttribute -> set gia tri Attribute nao do cua selecter
getLink.setAttribute("target", "_blank");

const listLink = document.querySelectorAll("a.link");
listLink.forEach((item) => item.setAttribute("target", "_blank"));
