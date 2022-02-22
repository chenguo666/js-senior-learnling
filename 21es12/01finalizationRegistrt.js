// FinalizationRegistry
const finalizationRegistry = new FinalizationRegistry((value)=>{
    console.log('注册在FinalizationRegistry的对象被销毁',value);
});
let obj = {name: 'why'}
let info = {name: 'info'}
// 对象销毁 的回调
finalizationRegistry.register(obj,'obj')
finalizationRegistry.register(info,'info')
obj = null