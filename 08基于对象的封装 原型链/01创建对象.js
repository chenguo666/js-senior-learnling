// 面向对象是现实的抽象方式
// 通过 new object 方式
var obj = new Object();
obj.name = "why"
obj.age = 18
obj.height = 1.88
// 通过字面量对象
var obj2 = {
    name:'xdf',
    age: 18,
    height: 1.88
}
// 对象属性的操作
console.log(obj2.name);
delete obj2.name;
console.log('--------------------------------------------------------');
for (const key in obj2) {
    console.log(key);
}
console.log(obj2);
// Object.defineProperty(对象,要定义或修改的属性,属性描述)
Object.defineProperty(obj2,'age',{
    value:20
})
console.log(obj2);
// 属性描述 
// // 数据属性描述符
// configurable true false 表示属性是否可以被delete删除  是否可以修改 
// enumerable false 表示是否可以通过for-in 或者Object.keys（）返回该属性