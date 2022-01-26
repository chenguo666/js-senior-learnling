var obj = {
    name: 'why',
    age: 18
};
// 默认可枚举是false 浏览器方便调试会显示 但实际是灰色的
Object.defineProperty(obj, 'address', {
    value: ' 西安 ',
})
console.log(obj);