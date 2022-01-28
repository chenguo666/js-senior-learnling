var obj = {
    name: 'why',
    age: 18
};
var info = Object.create(obj,{
    address:{
        value:'adf f',
        enumerable: true,

    }
})
console.log(info);
console.log(info.__proto__);
// hasOwnProperty 是否有自己的某个属性
console.log(info.hasOwnProperty('address'));
console.log(info.hasOwnProperty('name'));
// in操作符
console.log('address' in info);
// instanceof 用于检测构造函数的prototype 是否出现在某个实例对象的原型链上
function createObject(o) {
    function Fn() {}
    Fn.prototype = o
    return new Fn()
}
function inheritPrototype(SubType, SuperType) {
    SubType.prototype = createObject(SuperType.prototype)
    Object.defineProperty(SubType.prototype,'constructor',{
        enumerable: false,
        configurable: true,
        writable:true,
        value:SubType
    })
}
function Person() {

}
function Student() {

}
inheritPrototype(Student,Person)
var stu = new Student()
console.log(stu instanceof Student);
console.log(stu instanceof Person);
console.log(stu instanceof Object);
// 
console.log('--------------------------------isPototypeOf--------------------------------');
// isPototypeOf 用于检测某个对象 是否出现在某个实例对象的原型链上

function Person() {

}
var p = new Person()
console.log(p instanceof Person);
console.log(Person.prototype.isPrototypeOf(p));
var objx = {
    name:' why',
    age: 18
}
var infos = Object.create(objx)
console.log(objx.isPrototypeOf(infos));