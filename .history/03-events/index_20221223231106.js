const EventEmitter = require('events')
class MyEmissor extends EventEmitter {

}
const myEmissor = new MyEmissor()
const nameEvent = 'user:click'
myEmissor.on(nameEvent, function (click) {
  console.log('user click', click)
})

myEmissor.emit(nameEvent, 'na barra')
myEmissor.emit(nameEvent, 'ok')

let count = 0
setInterval(function () {
  myEmissor.emit(nameEvent, 'no ok' + (count++))
}, 1000)

