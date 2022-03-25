function foo(type) {
  console.log("foo start");
  if (type === 0) {
    // throw "type can't 0";
    // throw {
    //   errCode: -1001,
    //   errMsg: "type  not as 0",
    // };
    throw new Error("cant not as 0");
  }
  console.log("foo end");
}
foo(0);
console.log(999);
