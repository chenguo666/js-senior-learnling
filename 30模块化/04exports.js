const name = " asdf";
const age = 12;
// module.exports ={
//     name,
//     age
// }
// exports = module.exports

// 这种不会进行导出
// exports = {
//     name,
//     age
// }
exports.name = name;
exports.age = age;
