const fruit = "lemon";
switch (fruit) {
  case "apple":
    console.log("I like to eat apple");
    break;
  case "water":
  case "lemon":
    console.log("I like to eat lemon");
    break;
  default:
    console.log("I like to orangen");
    break;
}

// ternary operator
const yourAge = 10;
let message = yourAge >= 18 ? "ban du tuoi" : "ban chua du tuoi";
console.log(message);

let masssage2 =
  yourAge >= 15
    ? "ban du tuoi"
    : yourAge <= 10
    ? "ban la con nit"
    : "ban chua du tuoi";
console.log(masssage2);
