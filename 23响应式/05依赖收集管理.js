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
// 封装一个获取depend的函数
const targetMap = new WeakMap();

function getDepend(target, key) {
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
}
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    console.log("get", key);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    console.log("set", key);
    Reflect.set(target, key, newValue, receiver);
    const depend = getDepend(target, key);
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

const info = {
  address: "wfs",
};
watchFn(function () {
  console.log(info.address, "监听address");
});
info.address = "asdaaa";
