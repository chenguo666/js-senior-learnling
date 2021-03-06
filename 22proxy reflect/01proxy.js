// 监听对象的操作方式一
const obj = {
  name: "why",
  age: 18,
};
// Object.defineProperty(obj, "name", {
//   get: function () {
//     console.log("监听被访问");
//     // return this.name;
//   },
//   set: function (value) {
//     console.log("监听被设置");
//     this.name = value;
//   },
// });
console.log(obj.name);
obj.name = "asdf";
// console.log(obj.name);

// 监听使用Object.defineProperty的缺陷
// 1.设计初衷不是为了监听截止一个对象中的所有属性 初衷是定义普通的属性
// 2.如果想监听更加丰富的操作 新增属性 删除属性 是无能为力的
const objs = {
  name: "why",
  age: 18,
};
// 有13个捕获器
const objProxy = new Proxy(objs, {
  get: function (target, key, receiver) {
    console.log(target, key);
    return target[key];
  },
  set: function (target, key, newValue, receiver) {
    target[key] = newValue + 10;
  },
  // 监听in 捕获器 没有 receiver
  has: function (target, key) {
    return key in target;
  },
});
console.log(objProxy.age);
objProxy.age = 180;
console.log(objProxy.age);
// in 操作
console.log("name" in objProxy);
