const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownselected = document.querySelector(".dropdown__selected");
const dropdown = document.querySelector(".dropdown");
dropdownSelect.addEventListener("click", function (e) {
  dropdownList.classList.toggle("show");
});
dropdownItems.forEach((item) =>
  item.addEventListener("click", function (e) {
    const text = e.target.querySelector(".dropdown__text").textContent;
    dropdownselected.textContent = text;
    dropdownList.classList.remove("show");
  })
);
document.body.addEventListener("click", function (e) {});
