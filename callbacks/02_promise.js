//they 

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise return")
        resolve("REjected")
    },3000)
});


setTimeout(() => {
    console.log("---------setTime for first Second-----------")
    console.log(p1)
}, 1000);

setTimeout(() => {
    console.log("---------setTime for second second-----------")
 
    p1.catch((rej)=>{
        console.log(p1)
    })
}, 2000);
setTimeout(() => {
    console.log("---------setTime for third second-----------")
    p1.then((res)=>{
        console.log(p1)
    })
    console.log(p1)
}, 3000);
setTimeout(() => {
    console.log("---------setTime for fourth second-----------")
    p1.then((res)=>{
        console.log(p1)
    })
    p1.catch((rej)=>{
        console.log(p1)
    })
}, 4000);

p1.then((res)=>{
    console.log(p1)
})

// p1.catch((rej)=>{
//     console.log(rej)
//     console.log(p1)
// })


