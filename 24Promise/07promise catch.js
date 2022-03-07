const promise = new Promise((resolve, reject) => {
  reject(222); // 等同于
  //   throw new Error("222");
});
// executor 抛出异常也会调用reject
promise
  .catch((err) => {
    console.log(err);

    return "catch return";
  })
  .then((err) => {
    console.log(err);
  });
