// them xoa sua node trong javascrip
// 1. tao ra element trong javacrip
const div = document.createElement("div");
// 2. selector.appendChild
const body = document.body;
body.appendChild(div);
// Bai tap: tao ra html card img bang javascrip
const card = document.createElement("div");
card.classList.add("card");
body.appendChild(card);
cardImage = document.createElement("img");
cardImage.setAttribute("src", "ramdom");
cardImage.setAttribute("alt", "");
cardImage.setAttribute("class", "card-image");
card.appendChild(cardImage);
// 3. document.createTextNode -> tap ra text
const text = document.createTextNode("Hello");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);
// 4. cloneNode -> tao ra 1 ban sao element nao` do'
const h1Clone = h1.cloneNode(true); // sao chep toan bo noi dung neu de true
// const h1Clone = h1.cloneNode(); chi sao chep element chu ko chep noi dung ben trong
body.appendChild(h1Clone);
// 5. hasChildNodes -> kiem tra co phan` tu con hay ko co' tra true ko thi` tra flase
console.log(h1.hasChildNodes());
