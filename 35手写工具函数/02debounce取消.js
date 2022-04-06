// 先发一次 后续再延迟
function debounce(fn, delay, immediate = false) {
  // 定义一个定时器 保存上次的定时器
  let timer = null;
  let isInvoke = false;
  // 真正的执行函数
  const _debounce = function (...args) {
    //   取消上一次定时器
    if (timer) clearTimeout(timer);
    // 判断是否要立即执行
    if (immediate && !isInvoke) {
      fn.apply(this, args);
      isInvoke = true;
    } else {
      // 延迟执行
      timer = setTimeout(() => {
        fn.apply(this, args);
        isInvoke = false;
      }, delay);
    }
  };
  // 封装取消
  _debounce.cancel = function () {
    console.log(2);
    if (timer) clearTimeout(timer);
    timer = null;
    isInvoke = false;
  };
  return _debounce;
}
