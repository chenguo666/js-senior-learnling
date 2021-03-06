// 防抖节流;
// js是事件驱动 大量操作会触发事件 加入到事件队列中处理
// 而对于某些频繁的事件处理会造成性能的损耗 我们就可以通过防抖和节流来限制事件频繁的发生
// 自己认为的区分 发射子弹一直按10秒 10s后发射的是防抖 10s内按一定的频率发射的是节流

// 防抖 debounce函数
// 当事件触发时 相应的函数并不会立即触发 而是会等待一定的时间
// 当事件密集触发时 函数的触发也会被频繁的推迟
// 只有等待了一段时间也没有事件触发 才会真正的执行响应函数

// 节流 throttle函数
// 当事件触发时 会执行这个事件的响应函数
// 如果这个事件会被频繁触发 那么节流函数会按照一定的频率来执行函数
// 不管在这个中间有多少次触发 执行函数的频繁总是固定的

// 第三方库的实现
// lodash 是underscore的升级版
// underscore
