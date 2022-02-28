let m = 100;
// m值变了可以自动重新执行
function foo() {
  console.log(m);
  console.log(m * 2);
  console.log(m ** 2);
}
m = 200;
foo();
