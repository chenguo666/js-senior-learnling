class Person {

}
// var Animal = class {

// }
console.log(Person.prototype);
console.log(Person.prototype.__proto__);
console.log(Person.prototype.constructor);
var p = new Person()
console.log(p.__proto__===Person.prototype)// true