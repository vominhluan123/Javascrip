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
// 3. in hoa chu cai dau vi du : "my name is likha" -> "My name is likha"
function capitalzeStr(str) {
  if (!str) return null;
  const resut = str
    .split(" ")
    .map((item) => capitalize(item))
    .join(" ");
  console.log(resut);
}
capitalzeStr("my name is likhaf");
function capitalize(word = "") {
  if (word.length === "") {
    return null;
  }
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  let otherWord = word.toLowerCase().slice(1);
  return `${newWord}${otherWord}`;
}