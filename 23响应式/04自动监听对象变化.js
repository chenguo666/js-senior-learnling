// 封装一个响应式函数
const obj = {
  name: "why",
  age: 18,
};
class Depend {
  constructor() {
    this.reactiveFns = [];
  }
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn);
  }
  notify() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
}
const depend = new Depend();
function watchFn(fn) {
  depend.addDepend(fn);
}
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    console.log("get age");
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    console.log("set");
    Reflect.set(target, key, newValue, receiver);
    depend.notify();
  },
});
// 需要响应式的函数
watchFn(function () {
  const newName = objProxy.name;
  console.log("你好", newName);
  console.log(objProxy.name);
});
// 不需要响应式的函数
function bar() {
  console.log("不需要响应式！", objProxy.name);
}
objProxy.name = "safd";
objProxy.name = "adsfaaa";
objProxy.name = "adsfaaa45";
objProxy.age = 12;
