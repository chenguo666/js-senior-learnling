
// var foo = ()=>{
//     console.log(arguments);
// }
// foo()
function bar() {
    var bbr = ()=>{
        console.log(arguments);
    }
    return bbr
}
var fn = bar(123)
fn();
// es6 箭头函数没有arguments 推荐剩余参数
var foo = (...args)=>{
    console.log(args);
}
foo(1,2,3,1,1)