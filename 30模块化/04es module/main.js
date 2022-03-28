// 导入方式1
import { name, age } from "./foo.js";
// 导入方式2 起别名
// import { name as Fname, age as Fage } from "./foo.js";
// 导入方式3 将导出的所有内容都放到一个标识符中
// import * as foo from "./foo.js";
console.log(name, age);
