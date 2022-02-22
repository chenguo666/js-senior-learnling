// 空值合并
let foo1 = 0
// let bar = foo1 || 'a'
let bar = foo1 ?? 'a'// undefined 和 null 才会使用后面的
console.log(bar);