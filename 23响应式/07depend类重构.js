// 封装一个响应式函数
let activeReactiveFn = null;
const obj = {
  name: "why",
  age: 18,
};
class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }
  notify() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn);
    }
  }
}

function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
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
    const depend = getDepend(target, key);
    depend.depend();
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    const depend = getDepend(target, key);
    depend.notify();
  },
});
watchFn(() => {
  console.log(objProxy.name, "--------------");
  console.log(objProxy.name, "++++++++++++++");
});
objProxy.name = "kobe";
