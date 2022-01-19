function foo(...args) { 
    console.log(args); // 会将参数放入到数组里 [10] [10,20] [10,20,30]
}
foo(10);
foo(10,20);
foo(10,20,30);