
//synchronous programming...

function holdProcess(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds) {
        // Busy-waiting: do nothing until the specified time has passed
    }
}



console.log("Start");
holdProcess(3000); // it will Hold the upcomming process for 3 seconds untill it itself would'nt comleted.
console.log("mid") //it will execute after
holdProcess(3000)
console.log("end");