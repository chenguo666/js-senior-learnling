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
}
const promsie = new HYPromise((resolve, reject) => {
  console.log("传入被调用");
  resolve(111);
  reject(222);
  throw new Error("aaa");
});

promsie
  .then((res) => {
    console.log("res", res);
    return "aaa";
  })
  .catch((err) => {
    console.log("err catch", err);
  })
  .finally(() => {
    console.log("finally");
  });
