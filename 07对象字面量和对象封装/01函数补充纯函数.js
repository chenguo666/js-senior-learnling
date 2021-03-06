// js 纯函数
// 定义：
/**
 * 维基百科
 * 此函数在相同的输入值时 需产生相同的输出
 * 函数的输入和输出值以外的其他隐藏信息或状态无关 也和i/o设备产生的外部输出无关
 * 该函数不能有语义上可观察的函数副作用 诸如 触发事件 使输出设备输出 或更改输出值以外物件的内容等
 * 总结： 确定的输入，一定会产生确定的输出
 *       函数在执行过程中，不能产生副作用  
 */
/**
 * 副作用的理解：
 * 表示在执行一个函数时，除了返回函数值之外，还对调用函数产生了附加的影响，
 * 比如修改了全局变量，修改参数或改变外部的存储
 */

// slice 就是纯函数
var names = ['abc','bcd','cde','efg']
var newNames = names.slice(0,3)
console.log(newNames);
console.log(names);

// splice 就不是纯函数 会修改原来的数组
var newNames2 = names.splice(2)
console.log(newNames2);
console.log(names);
