// 1. localStorage.setItem
localStorage.setItem("name", "likha");
// 2. localStorage.getItem
localStorage.getItem("name");
// 3.localStorage.removeItem
localStorage.removeItem;
// 4.localStorage.clear
localStorage.clear();
let arr = [1, 2, 3, 4, 5];
localStorage.setItem("list", JSON.stringify(arr));
const newArr = localStorage.getItem("list");
