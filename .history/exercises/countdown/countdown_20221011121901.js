window.addEventListener("load", function () {
  const daysText = document.querySelector(".days");
  const hoursText = document.querySelector(".hours");
  const minutesText = document.querySelector(".minutes");
  const secondsText = document.querySelector(".seconds");
  // Tue Oct 30 2022 12:10:49 GMT+0700 (Giờ Đông Dương)
  function coutdown(date) {
    let days, hours, minutes, seconds;
    const now = new Date();
    // convert to timestamp
    const startDate = now.getTime();
    const endDate = new Date(date).getTime();
    // time remaining calculate to seconds
    const timeRemaining = parseInt((endDate - startDate) / 1000);
    // 1 ngay = 24 * 60 * 60
  }
  coutdown(" Tue Oct 30 2022 12:10:49 GMT+0700 (Giờ Đông Dương)");
});
