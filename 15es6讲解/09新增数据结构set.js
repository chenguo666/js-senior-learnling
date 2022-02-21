// Set Map WeakSet WeakMap

// Set 类似数组 区别是元素不能重复 去重
const set = new Set();
set.add(10)
set.add(20)
set.add(30)
set.add(40)
set.add({}) // 是俩个对象
set.add({})
console.log(set);
const arr = [1,2,5,2,5,4,5,12,4,5,1,2,9]
const arrSet = new Set(arr);
console.log(arrSet);
// const newArr = Array.from(arrSet);
const newArr = [...arrSet];
console.log(newArr);

// size属性
console.log(arrSet.size);
// 常见方法 add  delete has 有没有包含 clear全部删除
// set遍历
arrSet.forEach(item => console.log(item))
for (const item of arrSet) {
    console.log(item)
}
// 
console.log('--------------------------------------------------------');
// WeakSet 内部元素不能重复  区别 只能放对象 对元素弱引用 可以被GC回收
const weakSet = new WeakSet();
// weakSet.add(10)
let obj = {name: 'why'}
const sset = new Set();
sset.add(obj)
// ***weakSet不能遍历***
// weakSet的使用场景
const personSet = new WeakSet();
class Person {
    constructor() {
        personSet.add(this)
    }
    running() {
        if (!personSet.has(this)) {
            throw new Error('不能通过非构造方法创建出来的对象调用running方法！')
        }
        console.log('running---');
        
    }
}
const p = new Person()
p.running()
p.running.call({names:'why'})
