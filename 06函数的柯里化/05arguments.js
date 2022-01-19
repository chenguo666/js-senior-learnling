// arguments 是一个对应于 传递给函数的参数 的 类数组（array-like）对象
function foo(num1,num2,num3) {
    // 传递的参数放到类数组对象中 arguments 
    // 常见有三个操作 1获取长度 2根据索引获取参数 3arguments.callee 获取当前参数所在函数arguments.callee() 递归
    
    console.log(arguments);
    console.log(num1,num2,num3);
}
foo(1,2,3);