const name = 'why'
const age = 18
const height = 1.88
const message = `my name is ${name} my age is ${age}`
console.log(message);

// 标签模板字符串
function foo(m, n) {
    console.log(m, n);
}
foo(18,15)
foo``
foo`hello wrold`
// 第一个参数依然是模块字符串 只是被切成多块 放到一个数组中
// 第二个参数是模块字符串中第一个${}
foo`hello${name}wrold${age}jj`