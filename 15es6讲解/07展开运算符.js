const names = ['a','b','c','d','e','f']
const name = 'why'

// 1.函数调用的时候
function foo(x,y,z) {
    console.log(x,y,z);
}
foo.apply(null,names);
foo(...names);
// 2.构造数组时
const newNames = [...names, ...name]
console.log(newNames);
// 3.es9 构建对象字面量使用

// 展开运算符其实是进行一个浅拷贝

