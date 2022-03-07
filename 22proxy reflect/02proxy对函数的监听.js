function foo() {}
foo();
foo.apply({}, ["a", "b", "c"]);
new foo();
const fooProxy = new Proxy(foo, {
  apply: function (target, thisArg, argArray) {
    console.log("进行apply");
    target.apply(thisArg, argArray);
  },
  construct: function (target, argArray, newTarget) {
    console.log("进行new");
    return new target(...argArray);
  },
});
fooProxy.apply({}, ["a", "b", "c"]);
new fooProxy();
