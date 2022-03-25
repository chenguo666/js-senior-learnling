Promise.resolve()
  .then(() => {
    console.log(0);
    // return 4
    // return thenable
    // 不是普通的值 多加一次微任务
    // 一共多加俩次微任务
    return Promise.resolve(40);
  })
  .then((res) => {
    console.log(res);
  });
Promise.resolve()
  .then(() => {
    console.log(10);
  })
  .then(() => {
    console.log(20);
  })
  .then(() => {
    console.log(30);
  })
  .then(() => {
    console.log(50);
  })
  .then(() => {
    console.log(60);
  });

//   0 1 2 3 4 5 6
