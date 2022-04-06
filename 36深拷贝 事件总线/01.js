// 对象关系;
// 引入赋值 指向同一个对象 相互之间会影响
// 对象浅拷贝 只是浅层拷贝 内部引入对象时 依然会互相影响
// 对象的深拷贝 俩个对象不再有任何关系 不会互相影响
const s1 = Symbol();
const s2 = Symbol();
const obj = {
  name: "why",
  friend: {
    name: "friend",
  },
  foo1: function () {
    console.log("foo");
  },
  [s1]: "asdf",
  s2: s2,
};

const info = Object.assign({}, obj); //属于浅拷贝
const info2 = JSON.parse(JSON.stringify(obj)); // 深拷贝 弊端 不能对函数进行操作 对symbol不处理 不支持循环引用
console.log(info2);
