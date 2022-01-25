var p1 = {
    name: '张三',
    age: 18,
    height:1.88,
    address:'asdf',
    eating:function(){

    },
    running:function(){

    }
}
// 工厂模式
function createPerson(name, age, height, address){
    var p = {}
    p.name = name
    p.age = age
    p.height = height
    p.address = address
    p.eating = function(){
        console.log(this.name + '在吃东西');
    }
    p.running = function(){
        console.log(this.name + '在跑步');
    }
    return p;
}
var p2 = createPerson('saf',18,1.88,'gasdf')
console.log(p2);
// 工厂模式缺点 获取不到对象最真实的类型


// 当我们通过new去调用一个函数时，和通过调用到底有啥区别

// 如果一个函数被使用new操作符调用了 那么他会执行如下操作
// 1.在内存中创建一个新的对象（空对象）
// 2.这个对象内部的【prototype】属性会被赋值为该构造函数的prototype属性
// 3.构造函数内部this 会指向创建出来的新对象
// 4.执行函数的内部代码
// 5.如果构造函数没有返回非空对象，则返回创建出来的新对象
function foo(name,age,height,address) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.address = address;
    this.eating = function() {

    }
    this.running = function() {

    }
    console.log('foo 函数执行');
}
var f1 = new foo('张三',12,1.88,'义乌')
console.log(f1);
console.log(f1.__proto__.constructor);