function Person (name, age, height, address) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.address = address;
}
Person.prototype.eating = function () {
    console.log(this.name+' eating');
}
Person.prototype.running = function () {
    log('Running '+this.name)
}
var p1 = new Person("why", 18, 1.78, '义乌')
var p2 = new Person("kobe", 28, 1.78, '洛杉矶')
p1.eating()
p2.eating()