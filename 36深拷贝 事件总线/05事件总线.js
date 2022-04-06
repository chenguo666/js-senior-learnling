// 自定义事件总线 属于一种观察者模式 包括三个角色
// 发布者 发出事件
// 订阅者 订阅事件 并且会进行响应
// 事件总线 无论时发布者还是订阅者都是通过事件总线作为中台

// vue2 默认待事件总线 vue3 推荐库mitt

class EventBus {
  constructor() {
    this.eventBus = {};
  }

  on(eventName, eventCallback, thisArg) {
    let handlers = this.eventBus[eventName];
    if (!handlers) {
      handlers = [];
      this.eventBus[eventName] = handlers;
    }
    // 有参数就push对象
    handlers.push({ eventCallback, thisArg });
  }

  off(eventName, eventCallback) {
    const handlers = this.eventBus[eventName];
    if (!handlers) return;
    const newhandlers = [...handlers];
    for (let i = 0; i < newhandlers.length; i++) {
      const handler = newhandlers[i];
      if (handler.eventCallback === eventCallback) {
        const index = handlers.indexOf(handler);
        handlers.splice(index, 1);
      }
    }
  }

  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName];
    if (!handlers) return;
    handlers.forEach((handler) => {
      handler.eventCallback.apply(handler.thisArg, payload);
    });
  }
}
const eventBus = new EventBus();
// main.js
const handlerCallback = function (payload) {
  console.log("监听a", payload);
};
eventBus.on("a", handlerCallback, { name: "why" });
// util.js
eventBus.emit("a", 13);

eventBus.off("a", handlerCallback);
eventBus.emit("a", 13);
