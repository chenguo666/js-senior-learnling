function* foo(){
    const value1 = 1000;
    console.log(value1);
    // return 123
    const n = yield value1
    const value2= 10000*n;
    console.log(value2);
    const n2 = yield value2
    const value3 = 10000*n2;
    console.log(value3);
    yield 798
    console.log('end');
}
const generator = foo();
console.log(generator.next());
// 第二段代码 第二次调用next的时候执行 next可以传递参数
// console.log(generator.next(12));
// console.log(generator.next(23));
// 生成器是可以抛出异常的 终止执行
// 第二段代码 第二次调用return 第二段代码压根没执行 提前终止了
console.log(generator.return(15));
console.log(generator.next());
// 
console.log(generator.throw('asdfas'));
console.log(generator.next());