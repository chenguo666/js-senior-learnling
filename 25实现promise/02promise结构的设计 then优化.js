const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

// 工具函数
function execFuncWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value);
    resolve(result);
  } catch (error) {
    reject(error);
  }
}
class HYPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledFns = [];
    this.onRejectedFns = [];
    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 把一个函数加入到微任务离
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;
          // 执行then传进来的回调函数
          this.onFulfilledFns.forEach((fn) => {
            fn(this.value);
          });
        });
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_REJECTED;
          this.reason = reason;
          this.onRejectedFns.forEach((fn) => {
            fn(this.reason);
          });
        });
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFulfilled, onRejected) {
    return new HYPromise((resolve, reject) => {
      // then调用状态已确定
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        // try {
        //   const value = onFulfilled(this.value);
        //   resolve(value);
        // } catch (error) {
        //   reject(error);
        // }
        execFuncWithCatchError(onFulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        // try {
        //   const reason = onRejected(this.reason);
        //   resolve(reason);
        // } catch (error) {
        //   reject(error);
        // }
        execFuncWithCatchError(onRejected, this.reason, resolve, reject);
      }
      // 成功回调放入数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onFulfilledFns.push(() => {
          // try {
          //   const value = onFulfilled(this.value);
          //   resolve(value);
          // } catch (error) {
          //   reject(error);
          // }
          execFuncWithCatchError(onFulfilled, this.value, resolve, reject);
        });
        this.onRejectedFns.push(() => {
          // try {
          //   const reason = onRejected(this.reason);
          //   resolve(reason);
          // } catch (error) {
          //   reject(error);
          // }
          execFuncWithCatchError(onRejected, this.reason, resolve, reject);
        });
      }
    });
  }
}
const promsie = new HYPromise((resolve, reject) => {
  console.log("传入被调用");
  reject(222);
  resolve(111);
  throw new Error("aaa");
});

promsie
  .then(
    (res) => {
      console.log("res", res);
      return "aaa";
    },
    (err) => {
      console.log("err", err);
      return "bbb";
    }
  )
  .then(
    (res) => {
      console.log("return promise res", res);
    },
    (err) => {
      console.log("return promise err", err);
    }
  );
// // then 方法多次调用
// promsie.then(
//   (res) => {
//     console.log("res", res);
//   },
//   (err) => {
//     console.log("err", err);
//   }
// );
// promsie.then(
//   (res) => {
//     console.log("res2", res);
//   },
//   (err) => {
//     console.log("err2", err);
//   }
// );
// // 确定promise状态后再次调用then
// setTimeout(() => {
//   promsie.then(
//     (res) => {
//       console.log("res3", res);
//     },
//     (err) => {
//       console.log("err3", err);
//     }
//   );
// }, 1000);
