function foo(num1,num2) {
    // arguments转数组
    // 1. 自己遍历
    // 2. Array.prototype.slice.call 返回一个新数组
    var newArr = Array.prototype.slice.call(arguments)
    var newArr2 =[].slice.call(arguments)
    console.log(newArr,newArr2);
    // es6
    var newArr3 = Array.from(arguments)
    // var newArr4 = Array.of(arguments)
    var newArr5 = [...arguments]
    console.log(newArr3,newArr5);
}
foo(1,2,3,4,5,6,7,8,9,10,20);