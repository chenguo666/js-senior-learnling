// 用于存储映射关系
const obj1 = {name : 'why'}
const obj2 = {name : 'kobe'}
const info = {
    [obj1]:'aaa',
    [obj2]:'bbb',
}
console.log(info); // key转成了字符串[object Object] 是一样的 后面覆盖前面的
// Map 允许对象作为key
const map = new Map()
map.set(obj1,'aaa')
map.set(obj2,'bbb')
console.log(map);
// 格式有要求
// const map2 = new Map([[key,value],[key,value],[key,value],[key,value]])
const map2 = new Map([[obj1,'aaa'],[obj2,'ccc'],[2,'ddd'],[5,'fa']])
console.log(map2);
// 常见属性和方法
// size
// set
map2.set('why','asdf')
// get
console.log(map2.get('why'));
// delete(key) return true/false
// clear
map2.forEach((item,key)=>{
    console.log(item,key);
})
for (const [item,kwy] of map2) {
    console.log(item,kwy);
}

//  WeakMap key 只能是对象不接受其他key 弱引用 不能遍历
const obj11 = {name : 'why'}
const obj22 = {name : 'why'}
const maps = new Map()
maps.set(obj11, 'aaa')
const weakmap = new WeakMap()
weakmap.set(obj11,'aaa')
// weakmap.set(1,'cc')
// 没有size属性
// 使用场景 vue3 相应式原理
const obj111 = {name : 'why',age:18}
function obj1NameFn1() {
    console.log('obj1NameFn1 start');
}
const obj222 = {name : 'kobe',address : 'yiwu',height:188}

function obj2NameFn2() {
    console.log('obj2NameFn2 start');
}
// 对obj111的收集结构
const weakMap = new WeakMap()
const obj1Map = new Map()
obj1Map.set('name',[obj1NameFn1,obj2NameFn2])
obj1Map.set('age',[obj1NameFn1,obj2NameFn2])
weakmap.set(obj111,obj1Map)
// 如果数据发送改变
// Proxy/defineProperty
obj111.name = 'james'
const targetMap = weakMap.get(obj111)
const fns = targetMap.get('name')
fns.forEach(item=>item())