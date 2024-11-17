const EventEmitter = require('node:events');
const myFirstEmitter = new EventEmitter();

myFirstEmitter.on("greet", (name) => {
    console.log(`Hello ${name}`)
})

myFirstEmitter.emit("greet", "arunvasu")


// event emitter --> on is used for callbacks,
// emit --> emit is used for trigger