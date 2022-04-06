function debounce(fn, delay) {
  // 定义一个定时器 保存上次的定时器
  let timer = null;
  // 真正的执行函数
  const _debounce = function (...args) {
    //   取消上一次定时器
    if (timer) clearTimeout(timer);
    // 延迟执行
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
  return _debounce;
}
