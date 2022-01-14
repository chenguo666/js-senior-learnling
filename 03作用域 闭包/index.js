//  函数作为参数使用

// function calc(num1,num2,calcFn){
//     console.log(calcFn(num1,num2));
// }
// function add(num1,num2) {
//     return num1+num2
// }
// function sub(num1,num2) {
//     return num1-num2
// }
// function mul(num1,num2) {
//     return num1*num2
// }
// calc(10,20,mul)

// 函数作为返回值使用 js语法允许在函数内部再定义函数

// function foo() {
//     function bar() {
//         console.log('bar');
//     }
//     return bar
// }
// var fn = foo()
// fn()

// function makeAdder(count) {
//     function  add(num) {
//         return count+num
//     }
//     return add
// }
// var add5=makeAdder(5)
// console.log(add5(6));
// console.log(add5(10));

