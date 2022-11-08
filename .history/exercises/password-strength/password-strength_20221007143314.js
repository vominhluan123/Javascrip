window.addEventListener("load", function () {
  const inputPW = document.querySelector(".input");
  inputPW.addEventListener("input", function (e) {
    const value = e.target.value;
    const checkLengthClass = e.target.parentNode.querySelector(".check-length");
    const checkUpperClass = e.target.parentNode.querySelector(".check-upper");
    const checkNumberClass = e.target.parentNode.querySelector(".check-number");
    const checkSpecialClass =
      e.target.parentNode.querySelector(".check-special");
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
    if (!/[A-Z]/.test(value)) {
      checkUpperClass.classList.add("unactive");
      checkUpperClass.classList.remove("active");
    } else {
      checkUpperClass.classList.add("active");
      checkUpperClass.classList.remove("unactive");
    }
    if (!/[0-9]/.test(value)) {
      checkNumberClass.classList.add("unactive");
      checkNumberClass.classList.remove("active");
    } else {
      checkNumberClass.classList.add("active");
      checkNumberClass.classList.remove("unactive");
    }
    if (!/[$@%^*()}{[\]!]}/.test(value)) {
      checkSpecialClass.classList.add("unactive");
      checkSpecialClass.classList.remove("active");
    } else {
      checkSpecialClass.classList.add("active");
      checkSpecialClass.classList.remove("unactive");
    }
  });
});
