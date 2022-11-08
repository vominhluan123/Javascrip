window.addEventListener("load", function () {
  const days = document.querySelector(".days");
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");
  // Tue Oct 30 2022 12:10:49 GMT+0700 (Giờ Đông Dương)
  function coutdown(date) {
    const now = new Date();
    // convert to timestamp
    const startDate = now.getTime();
    const endDate = new Date(date).getTime();
    // time remaining
    const timeRemaining = endDate - startDate / 1000;
  }
});
