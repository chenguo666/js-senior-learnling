class Person {
    // 这是一个函数 类的构造方法 一个类只能有一个构造函数
    constructor(name, age) {
        this.name = name
        this.age = age
        this._address = '广州市'
    }
    // 通过创建出来的对象去访问 
    eating() {
        console.log(this.name+ ' eating-');
    }
    running() {
        console.log(this.name+ ' running-');
    }
    // 类的访问器
    get address() {
        return this._address
    }
    // 类的静态方法 通过类去访问 Person.createPerson()
    static randomPerson() {
        var random =Math.floor(Math.random() * 10)
        return new Person(random,random)
    }

}
var p1 = new Person('fasd', 18)
p1.eating()
p1.running()
p1.address = 'asdf'
console.log(p1.address);
// console.log(Object.getOwnPropertyDescriptors(Person.prototype));
var p2 = Person.randomPerson()
console.log(p2);