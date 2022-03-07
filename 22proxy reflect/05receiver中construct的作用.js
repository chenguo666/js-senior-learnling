function Student(name, age) {
  this.name = name;
  this.age = age;
}
function Teacher() {}
const stu = new Student("wg", 26);
console.log(stu);
console.log(stu.__proto__ === Student.prototype);
// 执行Student 但是创建出来的对象是Teacher对象
const te = Reflect.construct(Student, ["fsa", 20], Teacher);
console.log(te);
console.log(te.__proto__ === Teacher.prototype);
