var personObj = {
    running:function() {
        console.log('running');
    }
}
function createStudnet(name) {
    var stu = Object.create(personObj);
    stu.name = name;
    stu.studying = function() {
        console.log('studying');
    }
    return stu;
}
var stuObj = Object.create(personObj);
var stuObj1 = createStudnet('why')
var stuObj2 = createStudnet('why2')