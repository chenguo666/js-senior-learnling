/**
 * 柯里化
 * 计算机科学中 柯里化 有译为卡瑞化或加里化
 * 是把多个参数的函数变成接受一个单一参数（最初函数的第一个参数）的函数 并且返回接受余下的参数 而且返回结果的新函数的技术
 * 柯里化声称 如果你固定某些参数 你将得到接受余下参数的一个函数
 * 总结
 * 只传递给函数一部分参数来调用它，让他返回一个函数去处理剩余的参数 这个过程就称之为柯里化
 */

/**
 * 为什么需要柯里化
 * 在函数式编程中，我们其实往往希望一个函数处理的问题尽可能的单一，而不是将一大堆的处理过程交给一个函数来处理
 * 
 * 那么我们是否就可以将每次传入的参数在单一的函数中进行处理，处理完后在下一个函数中再使用处理后的结果
 * 
 */
// 未柯里化
function add(x,y,z) {
    return x+y+z;
}
var result =add(10,20,30)
console.log(result);
// 柯里化
function sum(x) {
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}
var sumResult = sum(10)(20)(30);
console.log(sumResult);
// 简化
var sum2= x=>y=>z=>{
    return x+y+z;
}
var sum2Result = sum(10)(20)(30)
console.log(sum2Result);
