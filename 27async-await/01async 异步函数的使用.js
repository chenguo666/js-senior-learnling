// async 异步
// sync 同步
async function foo() {
  console.log("foo start ");
  console.log(1);
  console.log(2);
  console.log(3);
  console.log("foo end ");
}
foo();
// 异步函数的返回值一定是一个promise
async function foox() {
  console.log("foox start");
  //   return {
  //     then: function (resolve, reject) {
  //       resolve("hah");
  //     },
  //   };
  //   异步函数中的异常会被作为异步函数返回的promise中的reject的值
  //   throw new Error("error Message");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("heheh");
    }, 2000);
  });
}
const promise = foox();
promise.then((res) => {
  console.log("promise success then", res);
  //   console.log(res);
});
