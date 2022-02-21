function foo(m=1, n=2) {
    // es5 以及之前
    // m = m || 1
    // n = n || 2
    console.log(m, n);
}
foo()

// 对象参数和默认值结构
function printInfo({name,age}={name:'sadf',age:18}){
    console.log(name,age);
}
printInfo()
// 另一种写法
function printInfo2({name='asdf',age=20}={}){
    console.log(name,age);
}
printInfo2()
// 有默认值的参数最好放到最后
