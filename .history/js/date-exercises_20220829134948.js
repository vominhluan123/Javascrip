// 1. in ra so tuoi

function getAge(year) {
  const now = new Date();
  const currentYear = now.getFullYear();
  return currentYear - year;
}
console.log(getAge(2000));
