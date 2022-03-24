function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   if (url === "cg") {
      //     let names = ["a", "b", "c"];
      //     resolve(names);
      //   } else {
      //     let errMessage = "请求失败 url错误";
      //     reject(errMessage);
      //   }
      resolve(url);
    }, 2000);
  });
}
// 需求 why -》 why 拿到结果后 url:res 拼接 whyaaa 再请求 res+'bbb' whyaaabbb
// 1.回调地狱
// requestData("why").then((res) => {
//   requestData(res + "aaa").then((res) => {
//     requestData(res + "bbb").then((res) => {
//       console.log(res);
//     });
//   });
// });
// 2.promise
// requestData("why")
//   .then((res) => {
//     return requestData(res + "aaa");
//   })
//   .then((res) => {
//     return requestData(res + "bbb");
//   })
//   .then((res) => {
//     console.log(res);
//   });
// 3. promise +generate
function* getData() {
  const res1 = yield requestData("cg");
  const res2 = yield requestData(res1 + "aaa");
  const res3 = yield requestData(res2 + "bbb");
  const res4 = yield requestData(res3 + "ccc");
  console.log(res4);
}
// const generator = getData();
// generator.next().value.then((res) => {
//   generator.next(res).value.then((res) => {
//     generator.next(res).value.then((res) => {
//       console.log(res);
//     });
//   });
// });
function execGenerator(genFn) {
  const generator = genFn();
  function exec(res) {
    const result = generator.next(res);
    if (result.done) return result.value;
    result.value.then((res) => {
      exec(res);
    });
  }
  exec();
}
// execGenerator(getData);

// 4.npm 也有类似的包 co TJ写的包
// const co = require("co");
// co(getData);

//  async await
async function getData() {
  const res1 = await requestData("cg");
  const res2 = await requestData(res1 + "aaa");
  const res3 = await requestData(res2 + "bbb");
  const res4 = await requestData(res3 + "ccc");
  console.log(res4);
}
getData();
// requestData("cg")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
