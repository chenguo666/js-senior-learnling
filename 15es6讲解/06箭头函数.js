// 箭头函数没有显示原型
function foo() {

}
console.log(foo.prototype);
const f = new foo();
f.__proto__ = foo.prototype;

var bar=()=>{

}
// 不能new 没有arguments this指向
console.log(bar.prototype); // undefined