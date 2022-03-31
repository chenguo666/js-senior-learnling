const obj = {
  name: "why",
  age: 18,
  friend: {
    name: "friend",
    age: 18,
  },
};
// 将对象数据存到localstorage里
localstorage.setItem("obj", obj);
localstorage.getItem("obj");
const objstr = JSON.stringify(obj);
localstorage.setItem("objstr", objstr);
const objstr2 = localstorage.getItem("objstr");
console.log(JSON.parse(objstr2));
