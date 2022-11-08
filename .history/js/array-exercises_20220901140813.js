//1. dao nguoc 1 chuoi vi du : My name is likha

function reverseString(str) {
  if (!str) return null;
  return str.split(" ").reverse().join(" ");
}
console.log(reverseString("My name is likha"));
//2. dao nguoc 1 chuoi gom cac ki tu :"i love" -> "lvoe i"
function reverseWord(str) {
  if (!str) return null;
  const arrStr = str
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .reverse()
    .join(" ");
  console.log(arrStr);
}
reverseWord("i love");
