// eval 是一个特殊的函数 它可以将传入的字符串当做js代码来运行
var jsString = 'var message="hello world"'
eval(jsString)
console.log(message);
//  eval 的执行必须经过js解释器 不能被js引擎有优化
// 严格模式对于正常js语义进行一些限制
// 严格模式通过抛出错误来消除一些原有的静默（silent）错误
// 严格模式让js引擎在执行代码时可以进行更多的优化（不需要对一些特殊的语法进行处理）
// 严格模式禁用了在ECMAScript未来版本中可能会定义的一些语法

// 如何开启严格模式 "use strict" 一般不用手动加 可以针对一个文件 也可以针对一个函数 
messages = 'xdfasd'
console.log(messages);
true.foo = 'asdf'
function foo() {
    // "use strict"
    true.fxx='adf'
}
