"use strict";
function working12(name) {
    console.log("Working");
}
;
function greet(person, age) {
    return person + age;
}
;
console.log(greet("Bob", 30));
console.log("-------------overloading-------------");
function add(v1, v2) {
    if (typeof v1 == 'number' && typeof v2 == 'number') {
        return v1 + v2;
    }
    return v1 + ' ' + v2;
}
console.log("------hybrid typing-----");
const greeter = (message) => {
    console.log(`${greeter.greeting}, ${message}`);
};
greeter.greeting = "Hello";
greeter("World");
class Base {
    constructor(name) {
        this.name = name;
    }
}
class HybridClassImpl extends Base {
    constructor(name, additionalProperty) {
        super(name);
        this.additionalProperty = additionalProperty;
    }
    logName() {
        console.log(this.name);
    }
}
const hybridInstance = new HybridClassImpl("Hybrid", "Extra");
hybridInstance.logName();
console.log(hybridInstance.additionalProperty);
const testing = {
    name: "devender",
    additionalProperty: "dhyani",
    logName() {
        console.log(`${this.name} ${this.additionalProperty} is a good boy`);
    },
};
testing.logName();
//# sourceMappingURL=02_functions.js.map