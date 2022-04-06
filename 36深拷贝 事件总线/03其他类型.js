// 1.自定义深拷贝基本功能
// 2.对Symbol的key进行处理
// 3.其他数据类型的值进行处理：数组 函数 Symbol Set Map
// 4.对循环引用的处理
function isObject(value) {
  const valueType = typeof value;
  return value !== null && (valueType === "object" || valueType === "function");
}
function deepClone(originValue) {
  // map类型
  if (originValue instanceof Map) {
    return new Map([...originValue]);
  }
  // set类型
  if (originValue instanceof Set) {
    return new Set([...originValue]);
  }
  // symbol类型
  if (typeof originValue === "symbol") {
    return Symbol(originValue.description);
  }
  // 函数类型直接使用函数
  if (typeof originValue === "function") {
    return originValue;
  }
  // 判断传入的是否时对象
  if (!isObject(originValue)) {
    return originValue;
  }
  // 判断传入的是数组还是对象
  const newObject = Array.isArray(originValue) ? [] : {};
  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key]);
  }
  // 对symbol的key进行特殊处理
  const symbolkey = Object.getOwnPropertySymbols(originValue);
  for (const skey of symbolkey) {
    newObject[skey] = deepClone(originValue[skey]);
  }
  return newObject;
}
const s1 = Symbol("a");
const s2 = Symbol("b");
const obj = {
  name: "why",
  age: 36,
  friend: {
    name: "james",
    address: "上海",
  },
  hobbies: ["a", "b", "c"],
  foo: function () {
    console.log("foo");
  },
  [s1]: "a",
  s2: s2,
  set: new Set(["a", "b", "c"]),
  map: new Map([
    ["a", "b"],
    ["d", "f"],
  ]),
};
const newObj = deepClone(obj);
console.log(newObj === obj);
obj.friend.name = "kobe";
console.log(newObj);
console.log(newObj.s2 === obj.s2);
for (const key in newObj) {
  console.log(key);
}
