const obj = {
  name: "why",
  age: 18,
  friend: {
    name: "friend",
    age: 18,
  },
};
// 将obj对象内容放到info中
// 1. 引用赋值
const info = obj;
// 2.浅拷贝 {...obj} Object.assign({},obj) 对象里面的对象还是指向同一个
const info2 = { ...obj };
obj.age = 1000;
console.log(info2.age);
obj.friend.name = "james";
console.log(info2.friend.name);
// 3.stringify和parse实现 JSON内不存在函数 默认不转化
const jsonString = JSON.stringify(obj);
const info3 = JSON.parse(jsonString);
obj.friend.name = "sag";
console.log(info3.friend.name);
