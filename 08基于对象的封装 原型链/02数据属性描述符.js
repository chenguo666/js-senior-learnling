var obj = {
    name:'xfasd',
    age: 18
};
// 数据属性描述符 configurable
Object.defineProperty(obj,'address',{
    value:'yiwu ', // 默认值 undefined
    configurable: false, // 不可删除 不可重新定义 默认值是false
    enumerable: true, // 是否可以枚举 默认值是false
    writable: false, // 是否可以修改 默认值是false
})
delete obj.name
console.log(obj);
// delete obj.address
// console.log(obj.name);