const obj = {
    name:'why',
    age: 18,
    height: 1.88
};
const entries = Object.entries(obj)
console.log(entries);
// 转回obj
const newobj= Object.fromEntries(entries)
console.log(newobj);

// 使用场景
const queryString = 'name=why&height=1.88'
const queryParams = new URLSearchParams(queryString)
console.log(queryParams);
for (const iterator of queryParams) {
    console.log(iterator);
}
const newobj2= Object.fromEntries(queryParams)
console.log(newobj2);