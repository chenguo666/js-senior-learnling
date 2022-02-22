const message = 'hello world!';
const newmes = message.padStart(15,'a').padEnd(20,'*')
console.log(newmes);
const carNumber = '330782199909092222'
const carNumberlast = carNumber.slice(-4)
const newcarNumber = carNumberlast.padStart(carNumber.length,'*')
console.log(newcarNumber);