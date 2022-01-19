Function.prototype.hyapply=function(thisArg,argArray){
    // 获取到执行的函数
    var fn = this
    // thisArg = thisArg ? Object(thisArg):window
    thisArg = (thisArg!==null && thisArg!==undefined ) ? Object(thisArg):window
    thisArg.fn = fn
    let result
    // if (!argArray) {
    //     result =thisArg.fn()
    // } else {
    //     result =thisArg.fn(...argArray)
    // }

    argArray = argArray||[]
    result =thisArg.fn(...argArray)
    
    delete thisArg.fn
    return result
}
function sum(num1,num2){
    console.log('sum被调用',this,num1,num2);
    return num1 + num2;
}
// var result = sum.apply('abc',[1,2])
var result = sum.hyapply('abc',[1,2])
var result = sum.hyapply('abc')
console.log(result);
// sum.hyapply()