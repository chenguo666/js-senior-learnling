var obj = {
    _age:18,
    _eating: function() { },
    set age(value) { 
        this._age = value;
    },
    get age() { 
        return this._age;
    }
};
Object.defineProperties(obj,{
    name:{
        configurable: true,
        enumerable: true,
        writable: true,
        value: 'xfasdf'
    },
    // age:{
    //     configurable:false,
    //     enumerable:false, 
    //     get: function(){
    //         return this._age;
    //     },
    //     set: function(value){
    //         this._age = value;
    //     }
    // }
})
console.log(obj);
obj.age = 20
console.log(obj.age);
// 2020260499