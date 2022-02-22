
const finalizationRegistry = new FinalizationRegistry((value)=>{
    console.log('注册在FinalizationRegistry的对象被销毁',value);
});
let obj = {name: 'why'}
// 弱引用 用可以用 
let info =new WeakRef(obj)

finalizationRegistry.register(obj,'obj')
console.log(info.deref().name);
obj = null