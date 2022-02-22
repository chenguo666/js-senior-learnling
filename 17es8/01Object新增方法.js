const obj = {
    name:'why',
    age: 18
};
console.log(Object.values(obj));
console.log(Object.keys(obj));
// 用的少
console.log(Object.values(['a','b','c']));
console.log(Object.values('abc'));


// Object.entires 可以获取到一个数组 数组中会存放可枚举的键值对数据
console.log('----------------------------------------------------------------');

const obj1 = {
    name:'why',
    age: 18
}
console.log(Object.entries(obj1));
const objectEntires =  Object.entries(obj1)
objectEntires.forEach(item => console.log(item))
// 传入数组时 索引值转化为key
console.log(Object.entries(['a','b','c']));
console.log(Object.entries(['afsdag']));