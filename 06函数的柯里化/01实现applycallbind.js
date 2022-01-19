// // 给所有函数添加一个hycall方法
// Function.prototype.hycall = function(thisArgs){
//     // 可以执行调用的函数
//     // 可以获取到那个函数执行了hycall
//     console.log('hycall被调用');
//     var fn = this
//     thisArgs.fn = fn
//     thisArgs.fn()
//     delete thisArgs.fn
// }
// function foo(){
//     console.log('foo函数执行',this);
// }
// // 系统的call方法
// foo.call({})
// // 自己写的hycall方法
// // 默认进行隐式绑定
// foo.hycall({})

// 边界情况处理 额外参数

Function.prototype.chanCall=function(args, ...restParameters){
    var func = this
    // 防止传入的是数字 把args转成对象
    // args = args ? Object(args):window
    // args = args ? Object(args):window
    args = (args!==null && args!==undefined ) ? Object(args):window
    args.func=func
    var result = args.func(...restParameters)
    delete args.func
    return result
}
function fxx(...args){
    console.log('fxx',this,args);

}
fxx.chanCall({})
fxx.chanCall(123,20,30,40,50)
fxx.chanCall(null)