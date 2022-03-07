function foo() {
  const obj = { name: "why" };
  return new Promise((resolve, reject) => {
    resolve(obj);
  });
}
foo().then((res) => {
  console.log("res", res);
});
// 类方法 Promise.resolve
const pr = Promise.resolve({ name: "why2" });
console.log(pr);

// 类方法 Promise.reject
const re = Promise.reject("reject");
console.log(re);

// 类方法 all
// 可以创建多个promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(222);
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(333);
  }, 3000);
});
p1.then((res) => {
  console.log(res);
});
// 拿到所有结果之前 如果有一个状态为reject 那么整个promise就是reject
Promise.all([p1, p2, p3]).then((res) => {
  console.log(res);
});

// 类方法 allSettled 所有promise都有结果时 才会有最终的状态 不会去catch里面
Promise.allSettled([p1, p2, p3]).then((res) => {
  console.log("allSettled", res);
});

// 类方法 race 竞技/竞赛 只要有一个promise 完成了 fulfilled 就结束
Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("race res", res);
  })
  .catch((err) => {
    console.log(err);
  });

// 类方法 any es2021新增  等到一个fulfilled状态才会决定新Promise的状态 如果所有promise 都是reject 新Promise才会是reject
// 要看node支持不
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("any", res);
  })
  .catch((err) => {
    console.log("any", err.errors);
  });
