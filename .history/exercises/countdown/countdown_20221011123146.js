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
    let timeRemaining = parseInt((endDate - startDate) / 1000);
    if (timeRemaining > 0) {
    }
    // 1 ngay = 24 * 60 * 60 = 86400
    days = parseInt(timeRemaining / 86400);
    timeRemaining = timeRemaining % 86400;
    hours = parseInt(timeRemaining / 3600);
    timeRemaining = timeRemaining % 3600;
    minutes = parseInt(timeRemaining / 60);
    timeRemaining = timeRemaining % 60;
    seconds = parseInt(timeRemaining);
    // 1 gio = 60 * 60 = 3600
    daysText.textContent = days;
    hoursText.textContent = hours;
    minutesText.textContent = minutes;
    secondsText.textContent = seconds;
  }
  coutdown(" Tue Oct 20 2022 12:11:49 GMT+0700 (Giờ Đông Dương)");
});
