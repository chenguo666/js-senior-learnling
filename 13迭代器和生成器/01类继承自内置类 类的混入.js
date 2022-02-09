// class Person extends Object{

// }
// class Student extends Person {

// }
class HYArray extends Array{
    firstItem() {
        return this[0]
    }
}
var arr = new HYArray(1,2,3);
console.log(arr.firstItem());

// 类的混入mixin 利用函数的技巧类似混入的效果

class Person{
    constructor() {

    }
}
// class Runner {
//     running() {
//         console.log('running!');
//     }
// }
function mixinRunner(BaseClass) {
    class NewClass extends BaseClass {
        running() {
            console.log('running!');
        }
    }
    return new NewClass
    // return class extends BaseClass {
    //     eatings() {
    //         console.log('eatings');
    //     }
    // }

}
// js中类只能有一个父类  单继承
class Student extends Person {
    constructor() {
        
    }
}
var NewStudent = mixinRunner(Student)
var ns = new NewStudent()
ns.running()
