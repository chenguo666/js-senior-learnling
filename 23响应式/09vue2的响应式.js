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

function reactive(obj) {
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    Object.defineProperty(obj, key, {
      get: function () {
        const depend = getDepend(obj, key);
        depend.depend();
        return value;
      },
      set: function (newValue) {
        value = newValue;
        const depend = getDepend(obj, key);
        depend.notify();
      },
    });
  });
  return obj;
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
const objProxy = reactive(obj);
watchFn(() => {
  console.log(objProxy.name, "--------------");
  console.log(objProxy.name, "++++++++++++++");
});
objProxy.name = "kobe";

const info = {
  address: "义乌",
  height: 1.88,
};
const infoProxy = reactive(info);
watchFn(() => {
  console.log(infoProxy.address, "***");
});
infoProxy.address = "金华";
