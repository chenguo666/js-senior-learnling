define(function () {
  require(["foo"], function (foo) {
    console.log("bar foo", foo);
  });
});
