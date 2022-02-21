// es6之前 对象的属性名 key
var obj = {
    name:'why',
    friend:{
        name:'kobe'
    }
};

// es6 对象属性名可以使用字符串 也可以使用symbol值
const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol('aaa')
const s4 = Symbol('aaaa')
console.log(s3.description);

console.log(s1===s2);
// 1.定义对象字面量使用
const objs = {
    [s1]:'asdf',
    [s2]:'gasdf'
}
// 2.新增属性
objs[s3] = 'nba'
// 3
Object.defineProperty(objs,s4,{
    enumerable:true,
    configurable:true,
    writable:true,
    value:'cba'
})

// 获取 注意不能通过 . 来获取
console.log(objs[s4]);

// 4 使用symbol作为属性名 遍历 Object.keys 获取不到的symbol值
console.log(Object.keys(objs));

// 得使用
console.log(Object.getOwnPropertySymbols(objs));

// 5 
const sa = Symbol.for('aaa')
const sb = Symbol.for('aaa')
console.log(sa===sb);
// 根据symbol返回key
const key = Symbol.keyFor(sa)
console.log(key);
const sc = Symbol.for(key)
console.log(sa ===sc);
