// function log(date,type,message) {
//     console.log(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}][${type} ${message}]`);
// }
// log(new Date(),'debug','lsp')

// 柯里化优化
var log = date => type => message => {
    console.log(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}][${type} ${message}]`);
}
var newlog = log(new Date())
newlog('xx')('xcxc')
newlog('阿发达')('糊啊第三个')
newlog('噶xx')('挂水电费')
var newDebuge = log(new Date())('debuge')
newDebuge('xxxxxxxxxx')