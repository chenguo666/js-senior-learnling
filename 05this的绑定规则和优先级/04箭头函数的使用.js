// 
()=>{

}
var nums = [10,20,45,78]
nums.forEach(()=>{

})
// 简写1 如果参数就一个 （）可以省略
// 简写2 如果函数执行体只有一行代码 {}可以省略 
// 强调 并且会默认将这行代码的执行结果作为返回值
// 简写3 如果一个箭头函数只有一行代码 并且返回一个对象
var bar =()=>{
    return {name:'xx',age:18}
}
// 简写成
var bar =()=>({name:'xx',age:18})