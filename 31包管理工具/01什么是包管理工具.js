// node package manager 也就是node包管理工具

// npm start 和 npm run start 的取别
// 他们是等价的
// 对于常用的start test stop restart 可以省略run直接npm start等方式运行

// dependencies属性
// 是指无论在开发环境还是生产环境都需要依赖的包
// devDependencies
// 一些包在生产环境是不需要的 比如webpack babel 这时可以通过 npm install webpack --save-dev
// peerDependencies
// 对等依赖 你依赖一个包他必须是另外一个宿主包为前提 比如element-plus 是依赖于vue3

// semver X.Y.Z 规范
// X主版本号
// Y次版本号
// Z修订号

// ^和~的取别
// ^x.y.z 表示x保持不变 yz永远安装最新的版本
// ~x.y.z 表示x y保持不变 z永远安装最新的版本

// npm install 原理

// 常用命令 卸载某个依赖包
// npm uninstall package
// npm uninstall package --save-dev
// npm uninstall package -D

// 重新构建
// npm rebuild

// 清楚缓存
// npm cache clean

// npx
// 会自动去当前目录下 的node_module中去找 调用项目中的某个模块命令

// 发布自己的包
// 1. npm login
// 2. npm publish
// 删除发布的包
// npm unpublish
// 让发布的包过期
// npm deprecate
