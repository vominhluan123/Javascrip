// 1. selector.getAttribute("attribute") -> lay ra gia tri cua attribute selecter
// attribute -> thuoc tinh: href, id, class, src, style

const getLink = document.querySelector("a");
console.log(getLink.getAttribute("href"));

const getli = document.querySelectorAll(".item");
getli.forEach((item) => {
  console.log(getli.getAttribute("class"));
});
console.log(getli);
