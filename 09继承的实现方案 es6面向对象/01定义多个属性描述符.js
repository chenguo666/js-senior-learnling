var obj = {
    _age:18
};
Object.defineProperty(obj,{
    name:{
        enumerable: true,
        writable: true,
        value: 'xfasdf'
    },
    age:{
        configurable:false,
        enumerable:false, 

    }
})