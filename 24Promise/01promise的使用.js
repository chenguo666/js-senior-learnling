/**
 * 这种回调的弊端
 * 1.必须设计好callback的名称 且使用
 * 2.使用别人封装的必须看文档源码才能知道如何去使用
 *  */
function requestData(url, successCallbacl, errorCallback) {
  // 模拟网络请求
  setTimeout(() => {
    // 拿到请求结果
    if (url === "fruitchan") {
      // 成功
      console.log(2);
      let names = ["sa", "asd", "asdf"];
      successCallbacl(names);
    } else {
      // 失败
      console.log(3);
      let errMsg = "error";
      errorCallback(errMsg);
    }
  }, 3000);
}
requestData(
  "fruitchan",
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
console.log(1);
// 更好的方案
