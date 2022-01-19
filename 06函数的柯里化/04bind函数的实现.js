Function.prototype.hybind = function (thisArg,...argArray) {
    var fn = this
    thisArg = (thisArg!==null&&thisArg!==undefined)?Object(thisArg):window
    function proxyFn(...args) {
        thisArg.fn=fn
        var finalArgs = [...argArray,...args]
        var result = thisArg.fn(...finalArgs)
        delete thisArg.fn
        return result
    }
    return proxyFn
}
function foo() {
    console.log('foo被执行',this);
    // return arg
}
function sum(num1,num2,num3,num4) {
    console.log(num1,num2,num3,num4);
    // return num1 + num2 + num3 + num4
}
// var bar = foo.hybind('aaa')
// var result = bar()
// console.log(result);

var newSum = sum.hybind('aaa',11,20)
var result = newSum(30,40,50)
console.log(result);

// var bar = foo.bind("abc")
// bar()
// var newSum = sum.bind('aaa',10,20,30,40);
// newSum()
// var newSum = sum.bind('aaa');
// newSum(10,20,30,40)
// var newSum = sum.bind('aaa',100,20);
// newSum(30,40)