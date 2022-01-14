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
// 3.显示绑定
// 4.new绑定