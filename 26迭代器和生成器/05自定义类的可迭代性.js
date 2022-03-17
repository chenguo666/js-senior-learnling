// class Person {

// }
// const p1 = new Person()
// const p2 = new Person()
// const p3 = new Person()

class Classroom{
    constructor(address,name,students){
        this.address = address;
        this.name = name;
        this.students = students;
    }
    entry(newStudent){
        this.students.push(newStudent);
    }
    [Symbol.iterator](){
        let index = 0;
        return {
            next: () => {
                if (index<this.students.length) {
                    return {done: false,value: this.students[index++]}
                } else {
                    return {done: true,value:undefined}
                }
            },
            return:()=>{
                console.log('迭代器提前终止！');
                return {done: true,value:undefined}
            }
        }
    }
}
const classroom = new Classroom('阿斯顿法国红酒看来','阿斯蒂芬',['a','b','c'])
classroom.entry('lilei')

for (const item of classroom) {
    console.log(item);
    if (item === 'c') {
        break
    }
}