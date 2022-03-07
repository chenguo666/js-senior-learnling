const obj = {
  name: "why",
  age: 18,
};
let reactiveFns = [];
function watchFn(fn) {
  reactiveFns.push(fn);
}
watchFn(function foo() {
  const newName = obj.name;
  console.log("你好");
  console.log(obj.name);
});
function bar() {
  console.log("不需要响应式！");
}
obj.name = "safd";
reactiveFns.forEach((item) => {
  item();
});
