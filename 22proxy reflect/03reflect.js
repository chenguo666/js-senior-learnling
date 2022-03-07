// proxy经常配合reflect使用 reflect是一个对象不是类 字母意思 反射 有13个常见方法

// 主要提供很多操作js对象的方法 有点像Object中操作对象的方法
// 比如 Reflect.getPrototypeOf(target) 类似于 Object.getPrototypeOf()
// 为什么需要reflect

// 早起ECMA规范没有考虑对 对象本身的操作如何设计会更加规范 所以将api放到了Object中
// Object作为一个构造函数 这些操作放到他身上并不合适
// 另外还包含类似于in delete操作符 让js看起来奇怪
// 所以es6新增了 reflect
const obj = {
  name: "why",
  age: 18,
};
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    // return target[key];
    return Reflect.get(target, key);
  },
  set: function (target, key, newValue, receiver) {
    // target[key] = newValue;
    const result = Reflect.set(target, key, newValue);
    if (result) {
      console.log("设置成功");
    }
  },
});
objProxy.age = 20;
console.log(objProxy.age);
