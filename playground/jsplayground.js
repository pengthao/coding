
const createHelloWorld = function() {
    return function(...args) {
        console.log("hello World");
    }
}

const f = createHelloWorld();

f();