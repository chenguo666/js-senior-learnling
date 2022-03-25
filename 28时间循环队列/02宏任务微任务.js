// 规范 在执行任何的宏任务之前 *** 都需要先保证微任务队列已经被清空
// 常见宏任务 ajax settimeout setinterval dom监听 uirendering
// 常见微任务 promise的then回调 mutation observer api queueMicritask等
// 宏任务
setTimeout(() => {
  console.log("settimeout");
}, 1000);
// 微任务
queueMicrotask(() => {
  console.log("queueMicrotask");
});
// 微任务
Promise.resolve().then(() => {
  console.log("promise then");
});
function bar() {
  console.log("bar");
}
bar();
console.log("其他代码");
