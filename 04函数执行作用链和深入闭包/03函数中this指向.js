var obj={
    name: 'why',
    eating:function(){
        console.log(this.name,'eating');
    },
    running:function(){
        console.log(this.name,'running');
    },
    studying:function(){
        console.log(this.name,'studying');
    },
};
obj.eating()
console.log(this);// 大多数情况下this都出现在函数中
// 全局作用域下 
// 浏览器 window
// node环境下 {}

function foo() {
    console.log(this);
}
foo()
var oobj={
    name:"why",
    foo:foo
};
oobj.foo()
foo.apply('abc')
// this指向很么 跟函数所处的位置是没有关系的
// 跟函数被调用的关系有关

// this的绑定规则
// 1.默认绑定 独立函数调用
function a(){
    console.log(this);
}
a()
var b={
    name: "b",
    c:function(){
        console.log(this);
    }
};
var d = b.c 
d() // window

function e(){
    function f(){
        console.log(this);
    }
    return f
}
var g = e()
g()
// 2.隐式绑定
// 通过某个对象进行调用
// xxx.xx()
// object对象会被js引擎绑定到fn函数中的this里面
var obj1={
    name:'obj1',
    foo:function () {
        console.log(this);
    }
}
var obj2 = {
    name:'obj2',
    bar:obj1.foo
}
obj2.bar()
// 3.显示绑定
// 前提 必须在调用的对象内部有一个函数的引用
function foo1() {
    console.log('函数被调用',this);
}
var obg3={
    name:'obj3'
}
// this的绑定不同
foo1()
//  call apply可以指定this绑定对象
foo1.call(obg3,1,1,1) //后面传参数 
foo1.apply(obg3,[1,1,1]) // 后面传数组 
// bind
// 4.new绑定
// 创建一个全新的对象
// 这个新对象会被执行prototype
// 这个新对象会绑定到函数调用的this上
// 如果函数没有返回其他对象 表达式会返回这个新对象
function Person() {
    
}

new Person()