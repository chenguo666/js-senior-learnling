var name = 'why'
var age = 18
var obj2 = {
    // 属性简写
    name,
    age,
    // 方法简写
    foo:function() {

    },
    bar(){

    },
    // 计算属性名
    [name+132]:'sdf'
}
console.log(obj2);