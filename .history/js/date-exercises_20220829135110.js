// 1. in ra so tuoi

function getAge(year = 2000) {
  if (typeof year !== "number") return 0;
  const now = new Date();
  const currentYear = now.getFullYear();
  return currentYear - year;
}
const yourAge = getAge();
console.log(`nam nay ban ${yourAge} tuoi`);
