// 自己理解生成器 是es6中新增的一种函数控制使用方案 它可以让我们更加灵活的控制函数什么时候执行 暂停

// 生成器也是一个函数 区别
// 首先 生成器函数需要在function后面加一个*
// 其次 生成器函数可以通过yield关键字来控制执行流程
// 最后 生成器函数的返回值是一个Generator（生成器）
// 生成器事实上是一个特殊的迭代器
// 遇到return后 生成器就停止
function* foo(){
    const value1 = 1000;
    console.log(value1);
    // return 123
    yield 132
    const value2= 10000;
    console.log(value1);
    yield 465
    const value3 = 10000;
    console.log(value1);
    yield 798
    console.log('end');
}
// 调用生成器函数时 会返回一个生成器对象
const generator = foo();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
// generator.next()
// generator.next()
// generator.next()
// generator.next()