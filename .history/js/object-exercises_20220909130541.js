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
function isObject(object) {}
