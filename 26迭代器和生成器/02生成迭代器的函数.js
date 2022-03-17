const names = ['a','b','c']
const nums = [10,20,30]
function createArrayIterator(arr){
    let index = 0
    return {
        next: function(){
            if (index<arr.length) {
                return {done: false,value: arr[index++]}
            }else {
                return {done: true,value: undefined}
            }
        }
    }
}
const namesIterator = createArrayIterator(names)
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
// 创建一个无限的迭代器
function createNumberIterator(arr){
    let index = 0
    return {
        next: function(){
            return {done: false,value: index++}
        }
    }
}
const numberInterator = createNumberIterator()
console.log(numberInterator.next());
console.log(numberInterator.next());
console.log(numberInterator.next());
console.log(numberInterator.next());
console.log(numberInterator.next());