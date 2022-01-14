function createFnArray(params) {
    var arr = new Array(1024*1024).fill(1)
    return function() {
        console.log(arr.length);
    }

}
var arrayFns = []
for (var i = 0; i <100;i++){
    arrayFns.push(createFnArray())
}
setTimeout(()=>{
    arrayFns = null
},2000)
