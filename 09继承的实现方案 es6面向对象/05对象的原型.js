var obj = { name : 'why'} // [[prototype]]
var foox = { name : 'why'} // [[prototype]]
// 给对象提供了一个属性 可以查看原型对象 （浏览器提供）
// __proto__ 一般称为对象原型 隐私原型
console.log(obj.__proto__); // {}
console.log(Object.getPrototypeOf(obj)); // {}

// 函数也是对象 所以会多出来一个 显式原型
function foo() {
    // var moni = {};
    // this = {};
    // this.__proto__ = foo.prototype;
}
console.log(foo.__proto__);
console.log(foo.prototype); // 
var f1 = new foo();
var f2 = new foo();
console.log(f1.__proto__ === foo.prototype); 
console.log(f2.__proto__ === foo.prototype); 
