// console.log(Promise.prototype);
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype));
const promise = new Promise((resolve, reject) => {
  resolve("hah");
});
// 同一个promise 可以调用多次then方法
// 当我们的resolve被回调时，所有的then方法都会被调用 then方法传入的回调函数可以有返回值 本身的返回值是promise
// 返回的普通值 那么普通的值会被作为一个新的promise的reslove的值
promise
  .then((res) => {
    console.log("res", res);
    return "xxx";
  })
  .then((res) => {
    console.log("res2", res);
  });
// 如果返回的是一个promise
promise
  .then((res) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(111);
      }, 3000);
    });
  })
  .then((res) => {
    console.log("res2", res);
  });
