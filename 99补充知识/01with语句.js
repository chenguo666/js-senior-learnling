var message = 'hello'
var obj = {
    name: 'why',
    age: 18
}
function foo() {
    console.log(message);
    with (obj) {
        console.log(obj);
    }
}
foo()
// with 语句可以形成自己的作用域 明确传入 目前已经不推荐了
