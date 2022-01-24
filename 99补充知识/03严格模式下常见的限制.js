
// 1. 意外创建全局变量
message = 'hello world!';
console.log(message);

function foo() {
    age = 20
}

foo();
console.log(age);
// 2.不允许函数有相同的参数名称
function foo1(x,y,x) {
    console.log(x,y,x);
}
foo1()
// 3. 静默错误
true.foo = 'asf'
NaN = 123
var obj = {}
Object.defineProperty(obj, 'foo', {
    writable: false,// 不可写
    configurable: false,// 可配置
    value: 'xaf'
})
console.log(obj.foo);
obj.foo = 'xafas' // 报错
delete obj.foo // 不可删除
// 4.不允许使用原先的八进制模式 0123 0开头
var num = 0o123 //八进制
var num2 = 0x13 // 十六进制
// var num3 = 0b123 // 二进制
// 5. with语句不允许使用

// 6.eval函数不会向上引用变量
var jsstring = 'var msstring="gasdfasdf"; console.log(msstring)'
eval(jsstring)
console.log(msstring) // 严格模式后不会打开
