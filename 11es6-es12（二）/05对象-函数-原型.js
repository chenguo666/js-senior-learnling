var obj = {
    name: 'why'
}
console.log(obj.__proto__);
function foo() {

}
// 对象里面是有一个__proto__对象 ：隐式原型对象

// foo是一个函数 那么它会有一个显示原型对象：foo.prototype
// foo.prototype 来自哪里呢？
// 答案： 创建了一个函数 foo.prototype = {constructor: foo}

// foo是一个对象 那么它会有一个隐式原型对象 foo.__proto__
// foo.__proto__来自哪里呢？
// 答案：new Function() foo.__proto__ = function.prototype
// Function.prototype = {constructor:Function}
console.log(foo.prototype === foo.__proto__);
// 特殊
console.log(Function.prototype === Function.__proto__);
console.log(foo.prototype.constructor);
console.log(foo.__proto__.constructor);