console.log(110);
var message = 'hello global'
function foo() {
    console.log(message);
}
function bar() {
    var message = 'hello world'
    foo();
}
bar();
// 面试题
console.log('----------------------------start---------------------------');

// var n=100
// function boo() {
//     n=200
// }
// boo()
// console.log(n); // 200

// function fbb() {
//     console.log(n);// 自己作用域找到了undefined
//     var n=200;
//     console.log(n);
// }
// var n =100;
// fbb();

// var  n = 100;
// function foo1() {
//     console.log('foo1',n);// 100
// }
// function foo2() {
//     var n=200;
//     console.log('foo2',n);//200
//     foo1();
// }
// foo2();
// console.log('global',n);//100

// var a=100;
// function foos() {
//     console.log(a);// undefined
//     return
//     var a=100;
// }
// foos()

// function foos(){
//     var a = b = 100
// }
// foos()
// console.log(a);// referenceError
// console.log(b);// 100