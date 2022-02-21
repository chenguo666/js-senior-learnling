var names = ['asdg','gad','bdsaf']
// var item1 = names[0]
// var item2 = names[1]
// var item3 = names[2]
var [item1,item2,item3] = names
console.log(item1,item2,item3);
// 解构后面的元素
var [,itema,itemb] = names
console.log(itema,itemb);
// 结构出一个元素 后面的元素放到新数组里
var [itamss,...newNames] = names
console.log(itamss,newNames);