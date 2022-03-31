const JSONString =
  '{"name":"why","age":19,"friend":{"name":"friend","age":19}}';
const info = JSON.parse(JSONString);
// 解析拦截
const info2 = JSON.parse(JSONString, (key, val) => {
  if (key === "age") {
    return value - 1;
  }
  return value;
});
