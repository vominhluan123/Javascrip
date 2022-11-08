const dropdown = document.querySelector(".dropdown__selected");
dropdown.addEventListener("click", function (e) {
  const dropdownList = e.target.nextElementSbling;
  if (dropdownList) {
    dropdownList.classList.toggle("show");
  }
});
