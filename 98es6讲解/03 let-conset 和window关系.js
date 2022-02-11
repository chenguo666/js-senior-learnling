var foo = 'foo';
// console.log(window.foo);
// ve

// es5中只有俩个会形成作用域
// 1.全局作用域
// 2.函数作用域
// es6 开始有块级作用域
// if for switch 都是块级作用域
function a() {
    let c = 123
    var b= 654
}
console.log(b);
// console.log(c);