function sum(m, n) {
    return m + n
}
console.log(sum(50,20));

function makeAdder(count) {
    return function(num){
        return count + num
    }
}
// var result = makeAdder(10)(20)
// console.log(result);
var adder5 = makeAdder(5)
adder5(10)
adder5(14)