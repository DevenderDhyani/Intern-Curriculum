// Executing Synchronous Code:

// JavaScript executes synchronous code line by line. Functions are pushed onto the call stack, executed, and then popped off.
// Handling Asynchronous Operations:

// When JavaScript encounters an asynchronous operation (e.g., setTimeout), the operation is offloaded to the Web APIs, and JavaScript continues executing the remaining synchronous code.
// Callback in Task Queue:

// Once the asynchronous operation completes, its callback function is added to the task queue.
// Event Loop Execution:

// The event loop checks if the call stack is empty. If it is, it takes the first callback from the task queue and pushes it onto the call stack to be executed.
// Microtasks Handling:

// Before moving to the next task in the task queue, the event loop checks and processes all microtasks in the microtask queue.