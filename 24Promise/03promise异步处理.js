function requestData(url) {
  // 模拟网络请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 拿到请求结果
      if (url === "fruitchan") {
        // 成功
        console.log(2);
        let names = ["sa", "asd", "asdf"];
        resolve(names);
      } else {
        // 失败
        console.log(3);
        let errMsg = "error";
        reject(errMsg);
      }
    }, 3000);
  });
}
const promise = requestData("fruitchan23");
promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
