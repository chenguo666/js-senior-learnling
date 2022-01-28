function Person(name, age, friends) {
    this.name = name;
    this.age = age;
    this.friends = friends;

}
Person.prototype.running = function () {
    console.log('runing');
}
Person.prototype.eating = function () {
    console.log('eating');
}
function Student(name,age,friends,sno,score) {
    Person.call(this,name,age,friends)    
    this.sno = sno;
    this.score = score;
}
Student.prototype.studying = function () {
    console.log('studying');
}

Student.prototype = Object.create(Person.prototype);
Object.defineProperty(Student.prototype,"constructor",{
    enumerable: false,
    configurable: true,
    writable: true,
    value: Student
})
var stu = new Student('why',18,['kobe'],111,100);
stu.running()
stu.eating()