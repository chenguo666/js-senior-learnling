// 传统面向对象的多态三个前提 

// 1必须有继承 2必须有重写 3必须有父类引用指向子类对象 

class Shape {
    getArea(){
        console.log('9*9');
        
    }
}
class Rectangle extends Shape {
    getArea(){
        console.log('9*9 1');
        
    }
}
class Circle extends Shape {
    getArea(){
        console.log('9*9 2');
        
    }
}
var r = new Rectangle();
var c = new Circle();
function calcArea(shape: Shape){
    console.log(shape.getArea());
    
}
calcArea(r)
calcArea(c)
export {}