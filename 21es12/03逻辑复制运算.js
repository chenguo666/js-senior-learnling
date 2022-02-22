//  ||= 逻辑或赋值运算
let message = undefined;

message ||= 'asdf'// message = message || 'asdf'

console.log(message);
// &&= 逻辑与赋值运算
const obj = {
    name:'why',
    foo:function() {
        console.log('foo')
    }
}
obj.foo && obj.foo()

// ？？= 逻辑空赋值运算
let messagex = ''
messagex ??='adf'
console.log(messagex)