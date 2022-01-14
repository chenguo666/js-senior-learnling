function createFnArray(params) {
    var arr = new Array(1024*1024).fill(1)
    return function() {
        console.log(arr.length);
    }

}
var arrayFns = []
for (var i = 0; i <100;i++){
    setTimeout(()=>{
        arrayFns.push(createFnArray())
    },100*i)
}
setTimeout(()=>{
console.log('定时器执行');
for (let i = 0; i < 50; i++) {
    setTimeout(()=>{
        arrayFns.pop()
    },100*i)
}
},100*100)