const iterator = {
    next: function() {
        return {done:true,value:123};
    }
}
const names = ['a','b','c']
// 创建一个迭代器对象来访问数组
let index = 0
const namesIterator = {
    next: function() {
        // return {done:false,value:'a'}
        // return {done:false,value:'b'}
        // return {done:false,value:'c'}
        // return {done:true,value:undefined}
        if (index<names.length) {
            return {done:false,value:names[index++]}
        }else {
            return {done:true,value:undefined}
        }
    }
}
// console.log(names[Symbol.iterator]().next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());