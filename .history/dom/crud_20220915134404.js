// them xoa sua node trong javascrip
// 1. tao ra element trong javacrip
const div = document.createElement("div");
// 2. selector.appendChild
const body = document.body;
body.appendChild(div);
// tao ra html card img bang javascrip
const card = document.createElement("div");
card.classList.add("card");
body.appendChild(card);
cardImage = document.createElement("img");
cardImage.setAttribute("src", "ramdom");
cardImage.setAttribute("alt", "ramdom");
cardImage.setAttribute("class", "card-image");
card.appendChild(cardImage);
