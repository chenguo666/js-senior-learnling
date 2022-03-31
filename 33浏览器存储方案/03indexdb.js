// 1.打开数据库 有就打开没有就自动创建
const dbrequest = indexedDB.open("chan", 1);
dbrequest.onerror = function (err) {
  console.log(err);
};
let db = null;
dbrequest.onsuccess = function (event) {
  console.log(event);
  db = event.target.result;
};
// 第一次打开或者版本发生变化
dbrequest.onupgradeneeded = function (event) {
  const db = event.target.result;
  // 创建一些存储对象
  db.createObjectStore("users", {
    keyPath: "id", // 主键
  });
};
class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
const users = [
  new User(100, "asdf", 20),
  new User(101, "asdfga", 22),
  new User(102, "asdfgasd", 30),
  new User(102, "asdfasdf", 10),
];
const btns = document.querySelectorAll("button");
console.log(btns);
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    console.log(111, i);
    const transaction = db.transaction("users", "readwrite");
    const store = transaction.objectStore("users");
    switch (i) {
      case 0:
        console.log("点击了新增");
        for (const user of users) {
          const request = store.add(user);
          request.onsuccess = function () {
            console.log(`${user.name}插入成功！`);
          };
        }
        transaction.oncomplete = function () {
          console.log("添加操作全部完成");
        };
        break;
      case 1:
        console.log("点击了查询");
        // 1. 知道主键的时候 单个查询的时候
        // const request = store.get(102)
        // request.onsuccess = function (event) {
        //     console.log(event.target.result);
        // }
        // 2.
        const request = store.openCursor();
        request.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            if (cursor.key === 102) {
              console.log(cursor.value);
            } else {
              cursor.continue();
            }
          } else {
            console.log("查询结束");
          }
        };
        break;
      case 2:
        const request3 = store.openCursor();
        request3.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            if (cursor.key === 102) {
              console.log(cursor.value);
              cursor.delete();
            } else {
              cursor.continue();
            }
          } else {
            console.log("查询结束");
          }
        };
        console.log("点击了删除");
        break;
      case 3:
        console.log("点击了修改");
        const request2 = store.openCursor();
        request2.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            if (cursor.key === 102) {
              console.log(cursor.value);
              const value = cursor.value;
              value.name = "fruitchan";
              cursor.update(value);
            } else {
              cursor.continue();
            }
          } else {
            console.log("查询结束");
          }
        };
        break;
    }
  };
}
