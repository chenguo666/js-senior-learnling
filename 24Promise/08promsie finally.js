// 无论promise 状态如何最终都会执行的代码
// finally 不接收参数
const promise = new Promise((resolve, reject) => {
  resolve("gasdf");
});
promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("tototo");
  });
