function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve(222);
      reject(111);
    }, 2000);
  });
}
// async function foo() {
//   const info = await requestData();
//   //   后面的代码可以看成在then里面执行
//   console.log(info);
// }
// foo();

// async function foo() {
//   // 普通值立即返回
//   //   const res1 = await 123;
//   const res1 = await {
//     then: function (resolve, reject) {
//       resolve("abc");
//     },
//   };
//   console.log(res1);
// }
// foo();

async function foo() {
  // 遇到reject的时候
  const res1 = await requestData();
  console.log(res1);
}
foo().catch((err) => {
  console.log(err);
});
