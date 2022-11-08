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
let count = 0;
let previousCLick;
let firstGuess;
let secondGuess;
const gird = document.querySelector(".grid");
const cardArrayMerge = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());
cardArrayMerge.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;
  card.style.backgroundImage = `url(${item.img})`;
  gird.appendChild(card);
});
function matchingCard() {
  const selecteds = document.querySelectorAll(".selected");
  [...selecteds].forEach((item) => item.classList.add("matched"));
}
gird.addEventListener("click", function (e) {
  const clicked = e.target;
  if (clicked.nodeName === "SECTION" || previousCLick === clicked) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.dataset.name;
      clicked.classList.add("selected");
    } else {
      secondGuess = clicked.dataset.name;
      clicked.classList.add("selected");
    }
    if (firstGuess !== "" && secondGuess !== "") {
      if (firstGuess === secondGuess) {
        matchingCard();
      }
    }
  }
  previousCLick = clicked;
});
