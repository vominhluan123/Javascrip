// 1. viet 1 function kiem tra value co phai la object hay ko ?
// {}, [], null : 3 gia tri nay deu la object nhung chi muon {} la object
function isObject(value) {
  if (
    typeof value === "object" &&
    !Array.isArray(value) &&
    typeof value !== null
  ) {
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
  //return Object.entries(object);
  // Cach 2
  //   const value = Object.keys(object).map((keys) => [keys, object[keys]]);
  //   return value;
  // Cach 3
  let result = [];
  for (let key in object) {
    // hasOwnProperty(key): neu chua object thi tra ve true ko thi nguoc lai tra ve flase
    if (object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
}
console.log(isObjectToArray({ a: 1, b: 2 }));

// without
// 3. ({a:1,b:2},'b')
