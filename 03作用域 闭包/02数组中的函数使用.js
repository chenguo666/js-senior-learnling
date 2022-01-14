var nums = [10,5,11,100,55]
var newnums =[]
// for (let i = 0; i < nums.length; i++) {
//     var num = nums[i]
//     if (num%2===0) {
//         newnums.push(num)
//     }
    
// }
// 过滤
// let a= nums.filter(item=>{
//     return item%2===0
// })
// console.log(a);

// 映射
// var numNews2=nums.map((item)=>{
//     return item*10
// })
// console.log(numNews2);

// reduce 累加
var total =0
for (let i = 0; i < nums.length; i++) {
    total +=nums[i]
}
console.log(total);
var ttotal = nums.reduce((preValue,item)=>{
    return (preValue+item)
},0)
console.log(ttotal);