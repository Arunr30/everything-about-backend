const EventEmitter = require("node:events")

class MyEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = "hello"
    }

    greet(name) {
        this.emit('greeting',`${this.greeting}, ${name}`)
    }
}

const customEmitter = new MyEmitter();

customEmitter.on('greeting', (input) => {
    console.log('greet event', input)
})

customEmitter.greet('arun')