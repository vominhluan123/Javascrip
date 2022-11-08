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

//3. viet thoi gian onlien(facebook)
