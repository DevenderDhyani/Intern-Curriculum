// setimmediate :  The event loop in Node.js has several phases, each handling different types of operations. These phases include: 
// Timers Phase: Handles callbacks scheduled by setTimeout and setInterval.
// I/O Callbacks Phase: Handles callbacks for system operations, such as file reads.
// Idle, Prepare Phase: Internal Node.js phase.
// Poll Phase: Handles I/O events, including waiting for new I/O events.
// Check Phase: Executes setImmediate callbacks.
// Close Callbacks Phase: Handles close event callbacks, such as socket.on('close').
// Once the current phase is complete, the event loop moves to the "Check" phase. This is when setImmediate callbacks are executed.

console.log("time out 1 completed...")
console.log("time out 1 completed...")
console.log("time out 1 completed...")
console.log("time out 1 completed...")
console.log("time out 1 completed...")
console.log("time out 1 completed...")
console.log("time out 1 completed...")
console.log("time out 1 completed...")
console.log("time out 1 completed...")
console.log("time out 1 completed...")
console.log("time out 1 completed...")
console.log("time out 1 completed...")
console.log("time out 1 completed...")
console.log("time out 1 completed...")

setTimeout(()=>{
    console.log("time out 1 completed...")
},4000)
setTimeout(()=>{
    console.log("time out 2 completed...")
},6000)

//it will run after running all console statements including the statements present before
setImmediate(()=>{
    console.log("immediate...")
 })
 console.log("234234")
 console.log("234234")
 console.log("234234")
 console.log("234234")
 console.log("234234")
 console.log("234234")
 console.log("234234")


 for(let i=0;i<=500000000;i++){
     if(i==500000000){
        console.log("500000")
     }
}
const old = new Date();
while(new Date() - old < 500){
    if((new Date() - old) == 500){
        console.log("completed adha seconds...")
    }
}


 