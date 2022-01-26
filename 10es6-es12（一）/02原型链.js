var obj = {
    name: 'why',
    age: 18
};
console.log(obj.name);
// [[get]] 操作
// 1 在当前的对象中查找属性
// 2 如果没有找到，这个时候回去原型（__proto__）对象上去找

obj.__proto__ = {

}
obj.__proto__.__proto__ = {
    address:'大师傅'
}
console.log(obj.address);

// 原型理解
var objt = {
    name: 'whhy'
}
console.log(objt.address);
// 到底找打那一层对象后停止查找
// 对象字面量objt {} 顶层原型
console.log(objt.__proto__);
console.log(objt.__proto__.__proto__);
