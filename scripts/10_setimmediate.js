// setimmediate :  The event loop in Node.js has several phases, each handling different types of operations. These phases include: 
// Timers Phase: Handles callbacks scheduled by setTimeout and setInterval.
// I/O Callbacks Phase: Handles callbacks for system operations, such as file reads.
// Idle, Prepare Phase: Internal Node.js phase.
// Poll Phase: Handles I/O events, including waiting for new I/O events.
// Check Phase: Executes setImmediate callbacks.
// Close Callbacks Phase: Handles close event callbacks, such as socket.on('close').
// Once the current phase is complete, the event loop moves to the "Check" phase. This is when setImmediate callbacks are executed.