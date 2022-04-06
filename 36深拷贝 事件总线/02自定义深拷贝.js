// 1.自定义深拷贝基本功能
// 2.对Symbol的key进行处理
// 3.其他数据类型的值进行处理：数组 函数 Symbol Set Map
// 4.对循环引用的处理
function isObject(value) {
  const valueType = typeof value;
  return value !== null && (valueType === "object" || valueType === "function");
}
function deepClone(originValue) {
  // 判断传入的是否时对象
  if (!isObject(originValue)) {
    return originValue;
  }
  const newObject = {};
  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key]);
  }
  return newObject;
}
const obj = {
  name: "why",
  age: 36,
  friend: {
    name: "james",
    address: "上海",
  },
};
const newObj = deepClone(obj);
console.log(newObj === obj);
obj.friend.name = "kobe";
console.log(newObj);
