class Person {
  constructor(callback) {
    let foo = function () {};
    let bar = function () {};
    callback(foo, bar);
  }
}
const p = new Person((foo, bar) => {
  foo();
  bar();
});
// 传入的函数被称为executor
// 会传入俩个回调函数
const promsie = new Promise((resolve, reject) => {
  console.log("promise传入的函数被执行了");
  resolve(); //在成功时回调reslove函数 失败回调reject函数
});
// then 方法执行resolve
// catch 方法执行reject
promsie.then(() => {});
promsie.catch(() => {});
