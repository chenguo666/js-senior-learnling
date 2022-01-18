var name = 'why'
var foo=()=>{
    console.log(this);
    console.log(name);
}
foo()
foo.call('xx')

// 应用场景
var obj = {
    data:[],
    getData:function(){
        // 箭头函数之前的解决方案
        var _this=this
        setTimeout(function(){
            var result=['asdf','sadf','asdf']
            // window.data = result
            // this.data = result
            _this.data = result
        },2000)
    }
}
obj.getData()