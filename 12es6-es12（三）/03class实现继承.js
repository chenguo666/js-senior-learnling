class Person {
    constructor (name,age) {
        this.name = name
        this.age =age
    }
    running() {
        console.log(this.name, 'running');
    }
    eating() {
        console.log(this.name, 'eating');
    }
}
class Student extends Person{
    // js引擎解析子类的时候就有要求 如果要实现集成 
    // 在子类方法中 在使用this之前 掉用super() 
    // 也可以用super()调用父类方法 super.running()
    constructor (name, age,sno) {
        super(name,age)
        this.sno = sno 
    }
}
var stu = new Student('asdf',18,'man');
console.log(stu);
stu.running()
console.log(Object.getOwnPropertyDescriptor(stu.__proto__.__proto__));