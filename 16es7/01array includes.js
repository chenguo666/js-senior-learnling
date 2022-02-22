const names = ['a','b','c','d','e','f', NaN]
if (names.indexOf('a')!==-1) {
    console.log('have');
}
// 不能判断NaN
if (names.indexOf(NaN)!==-1) {
    console.log('have NaN');
}
if (names.includes('a')) {
    console.log('includes have');
}
if (names.includes(NaN)) {
    console.log('includes have NaN');
}