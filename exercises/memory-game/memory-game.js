const cardsArray = [
  {
    name: "fire",
    img: "img/fire.png",
  },
  {
    name: "youtube",
    img: "img/youtube.png",
  },
  {
    name: "flash",
    img: "img/flash.png",
  },
  {
    name: "gift",
    img: "img/gift.png",
  },
  {
    name: "tron",
    img: "img/tron.png",
  },
  {
    name: "ufo",
    img: "img/ufo.png",
  },
  {
    name: "plant",
    img: "img/plant.png",
  },
  {
    name: "burger",
    img: "img/burger.png",
  },
];
let previousCLick;
let count = 0;
let firstGuess;
let secondGuess;
const deplay = 1000;
const gird = document.querySelector(".grid");
function generateCard() {
  // reset html
  gird.innerHTML = "";
  const cardArrayMerge = cardsArray
    .concat(cardsArray)
    .sort(() => 0.5 - Math.random());
  cardArrayMerge.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = item.name;
    // front card
    const front = document.createElement("div");
    front.classList.add("front");
    // back card
    const back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = `url(${item.img})`;
    card.appendChild(front);
    card.appendChild(back);
    gird.appendChild(card);
  });
}
generateCard();
function matchingCard() {
  const selecteds = document.querySelectorAll(".selected");
  [...selecteds].forEach((item) => item.classList.add("matched"));
}
function resetGuess() {
  previousCLick = null;
  count = 0;
  firstGuess = "";
  secondGuess = "";
  const selecteds = document.querySelectorAll(".selected");
  const matchedAll = document.querySelectorAll(".matched");
  const cardLenght = document.querySelectorAll(".card").length;
  [...selecteds].forEach((item) => item.classList.remove("selected"));
  if (matchedAll.length === cardLenght) {
    // done game -> reset game
    matchedAll.forEach((el) => el.classList.remove("matched"));
    setTimeout(generateCard, deplay);
  }
}
gird.addEventListener("click", function (e) {
  const clicked = e.target;
  if (
    clicked.nodeName === "SECTION" ||
    previousCLick === clicked ||
    clicked.parentNode.classList.contains("selected") ||
    clicked.parentNode.classList.contains("matched")
  ) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }
    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(matchingCard, deplay);
      }
      setTimeout(resetGuess, deplay);
    }
    previousCLick = clicked;
  }
});
