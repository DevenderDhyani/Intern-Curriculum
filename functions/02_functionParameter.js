//function parameter
console.log("\n---------------Normal-Function with parameter----------------")
function name(name){
    console.log("hello :",name)
}
name('devender')
console.log(name)

console.log("\n---------------Arrow-Function with parameter----------------")
//arrow function

//it is simpal and consise
// if body contains only one line then no need to add parentheses and return even if function returning some value
const square = x => x * x;
console.log(square(20))
//it inherit this property from parent coz it doesn't have it own this scope {which can be usefull for callbacks}
//it does not have super binding with parent so it would be difficult to create a method in a class which require super access by using arrow function.
//arrowfunction must have ...args parameter to get all values entered while calling this function.

console.log("\n---------------Arrrow-Function-default Argument----------------")
arrowArgumentValues = () => {
    console.log(this.ksdj)
}
arrowArgumentValues(2,4,2,5,6,7,5,4,34,5)


console.log("\n---------------Normal-Function-default Argument----------------")
//normal function no argument parameter needs to pass
function argumentValues(){
    console.log(this)
}
argumentValues(1,4,3,2,5);

//IIFE it is important to note that there must be a semicolon before this immediately invoked function otherwise it will throw error
(()=> {
    console.log('This function runs immediately!')
})();

console.log("\n---------------Immediately invoked function----------------");
(function working(){
    console.log('This function runs immediately!')
})();



console.log("\n---------------Lexical Scope ----------------");
function outer() {
    const outerVar = 'I am outer';
    
    function inner() {
        console.log(outerVar); // Accessible here
    }
    
    inner();
}

outer(); // Logs: I am outer


console.log("\n---------------Clouser Scope ----------------");
function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}
//createCounter will return a function itself instead of variable count
const counter = createCounter();
//now count is accessible outside of creatCounter {it is called the clouser}
console.log(counter()); // Logs: 1
console.log(counter()); // Logs: 2



console.log("\n---------------Built in function ----------------");
// a built-in function is a function that is provided by the JavaScript language itself and is available for use without needing to define it yourself.

// Built-in functions can be categorized into several types:

// Global Functions: Functions that are available globally, such as parseInt(), parseFloat(), isNaN(), and isFinite().

// Methods of Built-in Objects:

// Object Methods: Methods like Object.keys(), Object.values(), and Object.entries() that are available on the Object type.
// Array Methods: Methods such as Array.prototype.push(), Array.prototype.pop(), Array.prototype.map(), and Array.prototype.filter().
// String Methods: Methods like String.prototype.toUpperCase(), String.prototype.trim(), and String.prototype.split().
// Number Methods: Methods such as Number.isFinite(), Number.isNaN(), and Number.toFixed().
// Math Object Functions: Functions for mathematical operations like Math.max(), Math.min(), Math.round(), and Math.sqrt().

// Date Methods: Functions for working with dates, such as Date.now(), Date.parse(), and Date.prototype.getFullYear().

// These built-in functions are designed to help with common tasks, improve code efficiency, and ensure consistent behavior across different JavaScript environments.

