const myConsole = new Map();

myConsole.set("log",(message) => {
    console.log(message);
});



myConsole.get("log")("Hello, Nena!!")

myConsole.set(1, "Number one");
myConsole.set("1", "Number One");

console.log(myConsole.get(1));
console.log(myConsole.get("1"));