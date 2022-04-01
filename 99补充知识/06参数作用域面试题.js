// 当函数的参数有默认值的时候 会形成一个新的作用域 这个作用域用于保存参数的值
var x = 0;
function foo(
  x,
  y = function () {
    x = 3;
    console.log(x);
  }
) {
  console.log(x);
  var x = 2;
  y();
  console.log(x);
}
foo();
console.log(x);

// undefined
// 3
// 2
// 0
