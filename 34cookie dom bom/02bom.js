// js有一个非常重要的运行环境就是浏览器 而且浏览器本身又作为一个应用程序需要对其本身进行操作 所以通常浏览器会有对应的对象模型 bom
// bom可以看成连接js脚本和浏览器窗口的桥梁
// bom主要包括以下对象模型
// 1.window 包括全局属性方法 控制浏览器窗口相关的属性方法
// 2.location 浏览器连接到的对象的位置 url
// 3.history  操作浏览器的历史
// 4.document 当前窗口操作文档的对象
var message = "fruitchan";
var age = 18;
window.setTimeout(() => {
  console.log("settimeout");
}, 2000);
console.log(window.Date());
console.log(window.screenX);
console.log(window.screenY);
