// 1. textContent -> lay noi dung o giua
const snipener = document.querySelector("#snipener");
// thay doi noi dung
// snipener.textContent = "likha";
console.log(snipener.textContent);
// 2.  innerText -> loai bo khoang trang va xuong hang
console.log(snipener.innerText);
// 3. innerHTML -> lay ra noi dung cua selector bao gom ca html
console.log(snipener.innerHTML);
snipener.innerHTML = `<div class="demo">hello word<div>`;
