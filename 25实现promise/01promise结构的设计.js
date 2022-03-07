const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";
class HYPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 把一个函数加入到微任务离
        this.status = PROMISE_STATUS_FULFILLED;
        queueMicrotask(() => {
          this.value = value;
          // 执行then传进来的回调函数
          console.log("resolve");
          this.onFulfilled(value)

        })
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED;
        queueMicrotask(() =>{
          this.reason = reason;
          console.log("reject");
          this.onRejected(reason)
        })
      }
    };
    executor(resolve, reject);
  }
  then(onFulfilled,onRejected){
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected;
  }
}
const promsie = new HYPromise((resolve, reject) => {
  console.log("传入被调用");
  reject(222);
  resolve(111);
});
promsie.then(
  (res) => {
    console.log("res", res);
  },
  (err) => {
    console.log("err", err);
  }
);
