var obj = {
    name: 'why',
    age: 18
}
// 禁止对象继续添加属性
Object.preventExtensions(obj)
obj.height = 1.88
obj.address = 'fasdf'
console.log(obj);
// 禁止对象配置删除里面的属性
Object.seal(obj)
delete obj.age
console.log(obj);
// 禁止修改对象里面的属性
Object.freeze(obj)
obj.age = 154
console.log(obj);