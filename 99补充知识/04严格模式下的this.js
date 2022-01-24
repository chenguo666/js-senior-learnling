// 严格模式下 自执行函数(默认绑定)会指向undefined
function foo() {
    console.log(this);
}
var obj = {
    name:'why',
    foo: foo
}
foo()
obj.foo()
setTimeout(function(){
    console.log(this);
},1000)