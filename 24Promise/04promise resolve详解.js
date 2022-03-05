const promise = new Promise((resolve, reject) => {
  console.log("直接执行");
  //   pending
  resolve();
});
promise.then(
  (res) => {
    // fulfilled
    console.log("res", res);
  },
  (err) => {
    // rejected
    console.log("err", err);
  }
);
// promise 划分状态 pending  悬而未决初始状态 fulfilled 敲定的操作成功 rejected 已拒绝操作失败
// 状态一旦确定就不可更改
