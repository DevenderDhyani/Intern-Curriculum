const process = require('node:process')

// process.on('uncaughtException',(err)=>{
//    if(err){
//        console.log("It is working",typeof err)
//        console.log("err: ",err)
//        process.exit()
//    }
// })
// process.on('unhandledRejection',(err)=>{
//    if(err){
//     console.log("rejection: ",typeof err)
//     console.log("err: ",err)
//     console.log("-------------now exiting------------")
//     process.exit()
//    }
//    console.log("working")
// })


// process.on("exit",(code)=>{
//     console.log("res:",code)
// })

// function testApi_unhendledEx(){
//     try{
//         //in this case the url is wrong so the returned promise will be rejected. But there is no error in the syntax or any exception arises so nothing will be happened here but the thing need to be noticed is that that we registered a process for rejected promise so the error will be rises on the callback function of the unhendledRjection.
//                  const test1 = fetch("https://co19-staons");    
        
//         //in this case the url is correct so the request will be resolved after a while the code will run only for try.
//                 //const test1 = fetch("https://covid-19-statistics.p.rapidapi.com/regions");        

//         // test1.then(res=>{
//         //     console.log("REsolved/...")
//         // }) 
//         // .catch(rej=>{
//         //     console.log("REjected/...")
//         // })
//     }catch(err){
//         console.log("Finally error occured")
//         console.log(err)
//     } 
// }
// testApi_unhendledEx()
// // throw new URIError;


//process.cwd
process.chdir("../")
process.chdir("./DSA")
console.log(process.cwd())

