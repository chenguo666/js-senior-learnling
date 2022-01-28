var obj = {
    name:'why',
    age: 18
};
// 原型式继承函数
function createObject(o) {
    var newObj = {}
    Object.setPrototypeOf(newObj, o);
    return newObj
}
// 道格拉斯实现
function createObject2(o) {
    function Fn() {}
    Fn.prototype = o
    var newObj = new Fn();
    return newObj
}
var info = createObject2(obj)
console.log(info);
console.log(info.__proto__);

// 用原来的对象作为新创建出来对象的原型
var iifo = Object.create(obj)
console.log(iifo);
console.log(iifo.__proto__);