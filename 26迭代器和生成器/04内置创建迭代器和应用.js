const names = ['a','b','c']
const iterator = names[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// 可迭代对象的应用
// forof

// 展开语法

const newNames = [...names]

// 结构语法

// 创建一些其他对象时
const set1 = new Set(newNames)
// const set2 = new Set(123)
// const set3 = Array.from(newNames)

// promise.all
// Promise.all(可迭代对象)