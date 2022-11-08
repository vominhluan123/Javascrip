const dropdown = document.querySelector(".dropdown__selected");
dropdown.addEventListener("click", function (e) {
  const dropdownList = dropdown.target.nextElementSbling();
  if (dropdownList) {
    dropdownList.classList.add(".show");
  }
});
