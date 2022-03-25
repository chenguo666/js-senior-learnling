function sum(a, b) {
  // 当传入的参数类型不正确时 应该告知
  if (typeof a !== "number" || typeof b !== "number") {
    throw "parameters is error type";
  }
  return a + b;
}
console.log(sum({ a: 1, b: 2 }, false));
