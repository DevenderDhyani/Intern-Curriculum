// When you create a variable, JavaScript allocates memory to store the value of that variable. For primitive values, this is usually done directly in the stack. For reference types, memory is allocated on the heap.


//clouser
function test(){
    let test1 = 2332
    return function test2(){
        let test3 =2342
        console.log(test1)
        return test3
    }
}
let x = test()
console.log(x())


// In JavaScript, understanding memory management and the lifecycle of objects is crucial for optimizing performance and avoiding memory leaks. JavaScript uses automatic garbage collection to manage memory, but developers still need to be aware of how memory is allocated, used, and released. Here’s a detailed overview of memory lifecycle in JavaScript:

// 1. Memory Allocation
// Memory allocation is the process of reserving a portion of memory for storing data. In JavaScript, memory is allocated for various data types and objects, including:

// When we create a variable, JavaScript allocates memory to store the value of that variable. For primitive values, this is usually done directly in the stack. For reference types, memory is allocated on the heap.
let num = 42; // Primitive type (number)
let arr = [1, 2, 3]; // Reference type (array)

// 2. Scope and Lifetime
// Scope refers to the context in which variables and objects are accessible. Lifetime describes how long the variables and objects exist in memory.

// Local Scope: Variables declared inside a function or block are accessible only within that function or block.
// Global Scope: Variables declared outside any function or block are accessible throughout the program.
// Lifetime of an object is tied to its scope:

// Local Variables: Exist as long as the function or block is executing. Once execution is complete, the local variables are no longer accessible.
// Global Variables: Exist as long as the program is running.

function createArray() {
    let localArray = [1, 2, 3]; // localArray exists only within this function
    return localArray;
}

let globalArray = createArray(); // globalArray exists globally



console.log("---------Garbage Collection------------")
//The actual process of garbage collection is handled by the JavaScript engine and occurs at intervals determined by the engine’s memory management strategy. Setting a variable to null does not immediately trigger garbage collection but makes the object eligible for it.


// Garbage Collection is the process by which JavaScript automatically frees up memory by removing objects that are no longer needed.

// Mark-and-Sweep Algorithm: JavaScript typically uses this algorithm to manage memory. It works in two phases:
// Mark Phase: The garbage collector identifies all objects that are reachable (i.e., still referenced) from the root (global scope and currently executing functions).
// Sweep Phase: The garbage collector then removes objects that are not marked (i.e., unreachable).

let obj = { name: 'John' }; // `obj` is reachable and thus not eligible for garbage collection
obj = null; // The object previously referenced by `obj` is now eligible for garbage collection

// 4. Memory Leaks
// Memory Leaks occur when the JavaScript engine is unable to reclaim memory due to lingering references to unused objects. Common causes of memory leaks include:

// Global Variables: Accidentally declaring variables globally instead of locally.
// Closures: Functions that retain references to variables from their containing scope, even after the function has finished executing.
// Detached DOM Nodes: DOM elements that are removed from the document but still referenced by JavaScript.
// Example of a Closure Memory Leak:


function createLeak() {
    let largeArray = new Array(1000000).fill('data');
    return function() {
        console.log('Closure retains reference to largeArray');
    };
}

 const leak = createLeak(); // largeArray is still in memory because of the closure

