const obj = {
  _name: "why",
  get name() {
    return this._name;
  },
  set name(val) {
    this._name = val;
  },
};
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    console.log("get", receiver);
    console.log(receiver === objProxy);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    console.log("set");
    Reflect.set(target, key, newValue, receiver);
  },
});
// obj.name = "node";
objProxy.name = "deno";
// console.log(obj._name);
console.log(objProxy.name);
