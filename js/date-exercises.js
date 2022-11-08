// 1. in ra so tuoi

function getAge(year = 2000) {
  if (typeof year !== "number") return 0;
  const now = new Date();
  const currentYear = now.getFullYear();
  return currentYear - year;
}
const yourAge = getAge("2aaaa");
console.log(`nam nay ban ${yourAge} tuoi`);

// 2. dem nguoc thoi gian theo tung giay
function countDown(minutes = 1) {
  const seconds = minutes * 60;
  let count = 0;
  const timer = setInterval(function () {
    count = count + 1;
    console.log(count);
    if (count === seconds) {
      clearInterval(timer);
      console.log("Your time is end !");
    }
  });
}
countDown(1);

//3. viet thoi gian onlien cua nguoi chat (facebook)
function timeSince(date) {
  const now = new Date();
  const yourDate = new Date(date);
  const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000); // in ra so giay, lam tron so
  let timer = seconds / 31536000;
  console.log(timer);
  if (seconds < 0) {
    alert("Your Time is invalid");
  }
  if (timer > 1) {
    console.log(`${Math.floor(timer)} nam truoc`);
    return;
  }
  timer = seconds / 2678400;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} thang truoc`);
    return;
  }
  timer = seconds / 604800;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} tuan truoc`);
    return;
  }
  timer = seconds / 86400;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} ngay truoc`);
    return;
  }
  timer = seconds / 3600;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} gio truoc`);
    return;
  }
  timer = seconds / 60;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} phut truoc`);
    return;
  }
  timer = seconds;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} giay truoc`);
    return;
  }
}
// 1 nam = 365 * 24 * 60 * 60 = 31536000
// 1 thang = 31 * 24 * 60 * 60 = 2678400
// 1 tuan = 7 * 24 * 60 * 60 = 604800
// 1 ngay = 1 * 24 * 60 * 60 = 86400
// 1 gio = 1 * 60 * 60 = 3600
// 1 phut = 1 * 60 = 60
timeSince("Mon Aug 29 2022 14:00:00 GMT+0700 (Giờ Đông Dương)");
