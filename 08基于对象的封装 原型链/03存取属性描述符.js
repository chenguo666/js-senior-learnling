var obj = {
    name: 'why',
    age: 18,
    _address: 'yiwu'
};
// 有 enumerable configurable 的时候不能有 writable，和value
// 1.使用场景 隐藏某个私有属性 不希望被外界使用和赋值 
// 2.截获某个属性它访问和设置的过程时 
Object.defineProperty(obj, 'address', {
    enumerable: true,
    configurable: true,
    get: function () {
        return this._address;
    },
    set: function (value) {
        this._address = value;
    }
})
console.log(obj);
console.log(obj.address);
obj.address = 'xxsdf'
console.log(obj.address);