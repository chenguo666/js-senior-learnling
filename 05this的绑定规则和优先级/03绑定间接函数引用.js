var obj={
    name:'obj1',
    foo:function(){
        console.log(this);
    }
}
var obj2 ={
    name:'obj2'
}
// obj2.bar = obj.foo
// obj2.bar()
(obj2.bar = obj.foo)()// 独立函数调用