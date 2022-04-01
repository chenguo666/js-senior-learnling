// cookie 小甜饼 类型为 小心文本文件 某些网站为了辨别用户身份而存储在用户本地终端上的数据 大小限制4kb
// cookie 分为内存cookie和硬盘cookie 存储时间有区别
// 如何区分 没有设置过期时间 就是内存cookie 关闭浏览器会自动删除
// expires 设置时间 Date.toUTCString()
// max-age 设置过期秒钟
// cookie作用域 允许cookie发送给那些url

// Domain 指定哪些主机可以接受cookie
// 如果不指定 默认是 origin 不包括子域名
// 如果指定 则包含子域名 如 Domain = mozilla.org 则 cookie也包含在子域名中 aaa.mozilla.org
// Path 指定主机下那些路劲可以接受cookie
// 例如 Path=/docs 这些地址都会匹配 /docs /docs/web/

// 47：22
