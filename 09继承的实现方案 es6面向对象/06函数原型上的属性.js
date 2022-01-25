function foo() {

}
console.log(foo.prototype);
console.log(Object.getOwnPropertyDescriptors(foo.prototype));
console.log(foo.prototype.constructor);// 指向构造函数本身
console.log(foo.prototype.constructor.name);

// 也可以添加自己的属性
foo.prototype.name ='fsadf '
foo.prototype.age = 18
var f1 = new foo()
console.log(f1.name,f1.age);

// 直接修改整个prototype 对象
foo.prototype = {

}