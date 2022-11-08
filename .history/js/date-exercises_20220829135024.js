// 1. in ra so tuoi

function getAge(year = 2000) {
  const now = new Date();
  const currentYear = now.getFullYear();
  return currentYear - year;
}
const yourAge = getAge(2000);
console.log(`nam nay ban ${yourAge} tuoi`);
