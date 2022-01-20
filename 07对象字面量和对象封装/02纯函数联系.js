// function foo(num1,num2){
//     return num1*2 + num2*num2
// }

// test 是一个纯函数
function test(info) {
    return {
        ...info,
        age:100
    }
}