const process = require('node:process')

process.on('uncaughtException',(err)=>{
    if(err)
    console.log("It is working",typeof err)
    console.log("err: ",err)
    process.exit()
})
process.on('unhandledRejection',(err)=>{
    if(err)
    console.log("rejection: ",typeof err)
    console.log("err: ",err)
    process.exit()
})
process.on("exit",(code)=>{
    console.log("res:",code)
})

    throw new URIError;

