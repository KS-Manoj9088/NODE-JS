const EventEmitter = require("events")

const firstEventEmitter = new EventEmitter();

// register a listener by keeping a name for listener.

firstEventEmitter.on( "greet", ()=>{
    console.log("Hello, world!");
})

firstEventEmitter.addListener( "greet", (name)=>{
    console.log(`hello, ${name}`);
})


// Use the registered emitter using listener name.
firstEventEmitter.emit("greet", "I am OpThunder")


class MyCustomEmitter extends EventEmitter{
    constructor(){
        super();
        this.greeting = 'Hello';
    }

    greet1(name){
        this.emit('greeting', `${this.greeting} ${name}`);
    }
}

const customEmitter = new MyCustomEmitter();

customEmitter.on('greeting', (message)=>{
    console.log(message);
});

customEmitter.greet1("Manoj Kumar");