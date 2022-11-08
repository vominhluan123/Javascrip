const dropdown = document.querySelector(".dropdown__selected");
dropdown.addEventListener("click", function (e) {
  const dropdownList = e.target.nextElementSibling;
  if (dropdownList) {
    dropdownList.classList.toggle("show");
  }
});
