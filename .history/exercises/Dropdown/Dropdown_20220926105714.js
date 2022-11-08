const dropdownSelect = document.querySelector(".dropdown__select");
dropdownSelect.addEventListener("click", function (e) {
  const dropdownList = e.target.nextElementSibling;
  if (dropdownList) {
    dropdownList.classList.toggle("show");
  }
});
