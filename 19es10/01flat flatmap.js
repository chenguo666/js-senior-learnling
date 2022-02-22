// flat() 会按照一个可指定的深度递归遍历数组 并将所有元素与遍历到的子数组中的元素合并为一个新数组返回

const nums =[10,10,20,40,[2,3,1],[[12,54,12],12,[2,48,5]],'124']

const newnumns = nums.flat(2)
console.log(newnumns);

// flatMap() 首先使用映射函数映射每个元素 然后将结果压缩成一个新数组 
// 1.是先进行map操作再进行flat操作
// 2.flat 深度为1
const nums2 = [10,20,30,[10,20,30] ]
const newnums3 = nums2.flatMap(item=>{
    return item *3
})
console.log(newnums3);
// 应用场景
const messages = ['hello world','ha h ah','fruit chan']
const newmsg = messages.flatMap(item=>{
    return item.split(' ')
})
console.log(newmsg);
