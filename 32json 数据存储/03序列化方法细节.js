const obj = {
  name: "why",
  age: 18,
  friend: {
    name: "friend",
    age: 18,
  },
  //   只要写了toJSON 方法 JSON.stringify就会显示一下内容
  //   toJSON: function(){
  //       return 666
  //   }
};
//   对象转字符串
const jsonString1 = JSON.stringify(obj);
// stringify 转字符串过滤 传入数组 设定那些是需要转化的
const jsonString2 = JSON.stringify(obj, ["friend"]);
// '{"friend":{}}'

//  stringify 传入回调函数
const jsonString3 = JSON.stringify(obj, (key, value) => {
  if (key === "age") {
    return value + 1;
  } else {
    return value;
  }
});
// '{"name":"why","age":19,"friend":{"name":"friend","age":19}}'

// stringify space 参数 每转化一行前面增加俩个空格 美观
const jsonString4 = JSON.stringify(obj, null, 2);
console.log(jsonString4);
// '{\n  "name": "why",\n  "age": 18,\n  "friend": {\n    "name": "friend",\n    "age": 18\n  }\n}'
