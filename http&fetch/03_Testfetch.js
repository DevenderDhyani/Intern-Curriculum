// function taking_time(){
//     setTimeout(()=>{
//         console.log("Resolving Promise..") 
//      },3000)
// }

// function func1(){
//     return new Promise((resolve,reject)=>{
//         console.log("Promise Received...")
//         taking_time()
//         resolve("successfully resolved")
//         console.log("Resolved...")
//     })
// }

// async function testFunc1(){
//     const test1 = await func1()
//     console.log(test1)
// }
// testFunc1()


// let i = 0;
// function testsync1(milliseconds) {
//     console.log("testing...")
//     const start = Date.now();
//     while (Date.now() - start < milliseconds) {
//         i++
//     }
    
// }
// function testsync2(milliseconds) {
//     console.log("testing...")
//     const start = Date.now();
//     console.log("tested.", i)
//     i++

    
// }
// testsync1(3000)//untill this function does not executing completely it is difficult to go 
// testsync2(1000)

function holdProcess(milliseconds) {
    const start = Date.now();
    while(Date.now()-start<milliseconds){}   
    // while (Date.now() - start < milliseconds) {
    //     // Busy-waiting: do nothing until the specified time has passed
    // }
}

console.log("Start");
holdProcess(3000); // Hold the process for 3 seconds
console.log("mid")
holdProcess(3000)
console.log("end");


