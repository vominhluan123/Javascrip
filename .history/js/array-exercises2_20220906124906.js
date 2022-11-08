const array = [
  1,
  1000,
  false,
  "likha",
  "",
  undefined,
  "javascrip",
  [1, 2, 3],
  NaN,
];

const filterFalsy = array.filter(Boolean);
console.log(filterFalsy);

const complexArray = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["javascrip"]],
  [888, 666, [90]],
];
const result = complexArray.flat(2);
