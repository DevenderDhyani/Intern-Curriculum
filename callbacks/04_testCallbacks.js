let i = 1
function fun1(x){
    console.log("func ::",i)
    if(x){
        x()
    }
    i++
}

fun1(()=>{
    fun1(()=>{
    })
})

//prmises
// function promiseReturn(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("returned...")
//             resolve("Successful")
//         },3000)
//     })
// }
// promiseReturn()
//     .then((res)=>console.log(res))
// promiseReturn()
//     .then((res)=>console.log(res))