// this的其他补充
setTimeout(function() {
    console.log(this);// windows
},2000)

// 优先级 

// *****默认绑定优先级最低
// *****显示绑定高于隐式绑定
var obj = {
    name:'obj',
    fpp:function () {
        console.log(this);
    }
}
// obj.foo()
obj.foo.call('abc')

var bar = ojb.foo.bind('cba')
bar()
//  ******new绑定优先级高于隐式绑定 高于显示绑定 new不能和apply call bind 一起使用

var obj2 = {
    name:'obj2',
    foo:function(){
        console.log(this);
    }
}
var f = new obj2.foo()
// new bind
function fxx(){
    console.log(this);
}
var xxx= fxx.bind('aaa')
var xx=new xxx()
