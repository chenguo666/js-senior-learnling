var obj = {
    _age:18,
    _eating: function() { }
};
Object.defineProperties(obj,{
    name:{
        configurable: true,
        enumerable: true,
        writable: true,
        value: 'xfasdf'
    },
    age:{
        configurable:true,
        enumerable:true, 
        get: function(){
            return this._age;
        },
        set: function(value){
            this._age = value;
        }
    }
})
console.log(obj);
obj.age = 20
console.log(obj.age);
// 获取有一个特殊属性的描述符
console.log(Object.getOwnPropertyDescriptor(obj, 'age'));
// 获取所有对象属性描述符
console.log(Object.getOwnPropertyDescriptors(obj));