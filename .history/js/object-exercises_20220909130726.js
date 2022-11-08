// 1. viet 1 function kiem tra value co phai la object hay ko ?
// {}, [], null : 3 gia tri nay deu la object nhung chi muon {} la object
function isObject(value) {
  if (typeof value == "object" && !Array.isArray && typeof value !== null) {
    return true;
  }
  return false;
}
//console.log(isObject(null));

// 2. {a: 1, b: 2} -> [["a",1],["b",2]]
function isObjectToArray(object) {
  // check neu ko phai object thi dung
  if (!isObject(object)) return;
  // neu la object thi xu ly
  // Cach 1
  return object.entries(object);
}
console.log(isObjectToArray(a: 1,b:2));