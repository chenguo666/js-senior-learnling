/**
 * reslove 参数
 * 1.普通的值或对象
 * 2.传入一个promise ************* 当前的promise状态会由传入的promise决定
 * 3.传入一个对象，并且这个对象有实现then方法（实现了thenable），那么也会执行该then方法，并且由该then方法决定后续状态
 */
new Promise((resolve, reject) => {
  //   resolve(1111);
  const obj = {
    then: function (resolve, reject) {
      resolve();
    },
  };
  //   对象里的then方法会自动执行
  resolve(obj);
}).then(
  (res) => {
    console.log(res, "res");
  },
  (err) => console.log(err, "err")
);
