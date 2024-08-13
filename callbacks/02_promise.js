//promises are javascript objects. They can be used for asynchronous progarmming.
//there are 3 states of it. pending fullfilled rejected

// Immediate Execution: The code inside the Promise constructor is executed immediately. Therefore, setTimeout starts its timer as soon as p1 is created.

// console.log("Promise return"): This will be printed after the 3-second delay due to the setTimeout.

// Handling the Promise: To see the result of the Promise, you need to handle it with .then() or async/await.


//console.log("---------------------------------------------------------")
let i = 0;
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise return")
        if(i/2==0){
            resolve("success")
        }else{
            reject("rejected")
        }
        i++
    },3000)
});
// setInterval(() => {
//     p1.then()
// }, 1000);
            
//console.log("-----------------------------Promise Chaining----------------------------")

// function func2(data){
//     return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("Promise return ",data)
//         res("success")
//     },3000)
//     })
// }
// func2(123).then((res)=>{
//     console.log(res)
//     return func2(234);
// }).then((res)=>{
//     console.log(res)
//     return func2(345);
// }).then((res)=>{
//     console.log(res)
// })

//console.log("-----------------------------Promise Chaining----------------------------")
//this is the situation without using .then
setTimeout(() => {
    console.log("---------setTime for first Second-----------")
    console.log(p1)
}, 4000);

setTimeout(() => {
    console.log("---------setTime for second second-----------")
 
    p1.catch((rej)=>{
        console.log(p1)
    })
}, 7000);
setTimeout(() => {
    console.log("---------setTime for third second-----------")
    p1.then((res)=>{
        console.log(p1)
    })
    console.log(p1)
}, 10000);
setTimeout(() => {
    console.log("---------setTime for fourth second-----------")
    p1.then((res)=>{
        console.log(p1)
    })
    p1.catch((rej)=>{
        console.log(p1)
    })
}, 13000);


// p1.catch((rej)=>{
//     console.log(rej)
//     console.log(p1)
// })


