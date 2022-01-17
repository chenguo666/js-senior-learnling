// 1.忽略显示绑定
function foo(){
    console.log(this);
}
foo.apply('abc')
foo.apply('cba')
foo.apply(null) // window
foo.apply(undefined) // window