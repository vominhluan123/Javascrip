window.addEventListener("load", function () {
  const inputPW = document.querySelector(".input");
  inputPW.addEventListener("input", function (e) {
    const value = e.target.value;
    const checkLengthClass = e.target.parentNode.querySelector(".check-length");
    const checkItem = e.target.parentNode.querySelectorAll(".check-item");
    if (!value) {
      [...checkItem].forEach((item) => {
        item.classList.remove("active");
        item.classList.remove("unactive");
      });
      return;
    }
    if (value.length < 8) {
      checkLengthClass.classList.add("unactive");
      checkLengthClass.classList.remove("active");
    } else {
      checkLengthClass.classList.add("active");
      checkLengthClass.classList.remove("unactive");
    }
  });
});
