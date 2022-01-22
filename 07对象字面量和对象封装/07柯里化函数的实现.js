function hyCurrying(fn) {
    function curried(...args) {
        // 判断接收到的参数个数和参数本身需要接受参数是否一致
        if (args.length >= fn.length) {
            return fn.apply(this,args);
        } else {
            // 没有达到个数 需要返回一个新的函数继续接受参数
            function curried2(...args2) {
                return curried.apply(this, [...args, ...args2]);
            }
            return curried2
        }
    }
    return curried
}
function add1(x,y,z) {
   console.log(x+y+z);
}
var curryAdd = hyCurrying(add1)
curryAdd(10,20,30)
curryAdd(10)(20)(30)