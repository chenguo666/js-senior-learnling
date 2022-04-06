// 如何进行事件监听
// 1. 在script中直接监听
// 2. 通过元素on来监听事件 重复添加会覆盖
// 3. 通过EventTarget中的addEventListener来监听 可以重复添加

// 事件从里到外 是 事件冒泡
// 事件从外到里 是 事件捕获
// 同时都有时 优先事件捕获
const span = document.createElement('span');
span.addEventListener('click',(event){
    console.log('元素被点击',event);
    console.log('事件类型',event.type);
    console.log('事件元素',event.target,event.currentTarget);
    console.log('事件发生的位置',event.offsetX,event.offsetY);
})