// 可迭代对象
const iterableObj = {
    names: ['a', 'b', 'c'],
    [Symbol.iterator]:function() {
        let index = 0
        return {
            next:()=>{
                if (index<this.names.length) {
                    return {done: false,value: this.names[index++]}
                }else {
                    return {done: true,value: undefined}
                }
            }
        }
    }
}
console.log(iterableObj[Symbol.iterator]);
console.log(iterableObj[Symbol.iterator]());
console.log(iterableObj[Symbol.iterator]().next());
console.log(iterableObj[Symbol.iterator]().next());
console.log(iterableObj[Symbol.iterator]().next());
// for of 可以遍历一个可迭代对象
const obj = {
    name:'why',
    age: 18
}
// for (const item of obj) {
//     console.log(item);
// }
for (const item of iterableObj) {
    console.log(item);
}