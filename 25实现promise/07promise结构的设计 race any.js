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
    onRejected =
      onRejected ||
      ((err) => {
        throw err;
      });
    onFulfilled =
      onFulfilled ||
      ((err) => {
        throw err;
      });
    return new HYPromise((resolve, reject) => {
      // then调用状态已确定
      if (this.status === PROMISE_STATUS_FULFILLED) {
        execFuncWithCatchError(onFulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_REJECTED) {
        execFuncWithCatchError(onRejected, this.reason, resolve, reject);
      }
      // 成功回调放入数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        if (onFulfilled) {
          this.onFulfilledFns.push(() => {
            execFuncWithCatchError(onFulfilled, this.value, resolve, reject);
          });
        }
        if (onRejected) {
          this.onRejectedFns.push(() => {
            execFuncWithCatchError(onRejected, this.reason, resolve, reject);
          });
        }
      }
    });
  }
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
  finally(onFinally) {
    this.then(
      () => {
        onFinally();
      },
      () => {
        onFinally();
      }
    );
  }
  static resolve(value) {
    return new HYPromise((resolve) => resolve(value));
  }
  static reject(reason) {
    return new HYPromise((reject) => reject(reason));
  }
  static all(promises) {
    // 问题关键什么时候执行resolve 什么时候执行reject
    return new HYPromise((resolve, reject) => {
      const values = [];
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            values.push(res);
            if (values.length === promises.length) {
              resolve(values);
            }
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }
  static allSettled(promises) {
    return new HYPromise((resolve) => {
      const results = [];
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            results.push({ status: PROMISE_STATUS_FULFILLED, value: res });
            if (results.length === promises.length) {
              resolve(results);
            }
          },
          (err) => {
            results.push({ status: PROMISE_STATUS_REJECTED, value: err });
            if (results.length === promises.length) {
              reject(results);
            }
          }
        );
      });
    });
  }
  static race(promises) {}
  static any(promises) {}
}
const p1 = new HYPromise((resolve) => {
  setTimeout(() => {
    resolve(111);
  }, 1000);
});
const p2 = new HYPromise((resolve, reject) => {
  setTimeout(() => {
    reject(222);
  }, 2000);
});
const p3 = new HYPromise((resolve) => {
  setTimeout(() => {
    resolve(333);
  }, 3000);
});
// HYPromise.all([p1, p2, p3])
//   .then((res) => {
//     console.log("all", res);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });
HYPromise.allSettled([p1, p2, p3]).then((res) => {
  console.log("allSettled", res);
});
