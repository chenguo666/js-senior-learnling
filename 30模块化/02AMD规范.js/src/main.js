require.config({
  baseUrl: "./src",
  paths: {
    foo: "./foo",
    bar: "./bar",
  },
});
require(["foo", "bar"], function (foo) {
  console.log("foo:", foo);
});
