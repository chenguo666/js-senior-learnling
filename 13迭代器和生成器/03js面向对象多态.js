function calcArea(foo) {
    console.log(foo.getArea);
}
var obj1 = {
    name:'why',
    getArea: function() {

    }
};
class Person {
    getArea() {
        return 100
    }
} 
var p = new Person();
calcArea(obj1)
calcArea(p)
// 也是多态的提现
function sum(m,n){
    return m+n
}
sum(10,20)
sum('sadf','gfdas')