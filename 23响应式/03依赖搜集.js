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
    reactiveFns.push(reactiveFn);
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

// 需要响应式的函数
watchFn(function foo() {
  const newName = obj.name;
  console.log("你好");
  console.log(obj.name);
});
// 不需要响应式的函数
function bar() {
  console.log("不需要响应式！");
}
obj.name = "safd";
depend.notify();
