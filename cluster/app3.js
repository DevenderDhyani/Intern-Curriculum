const cluster  = require("cluster")
const os = require("node:os")
const express = require("express")
//isPrimary and isMaster are same 
if(cluster.isPrimary){
    for(i=0;i<os.cpus().length;i++){
        cluster.fork();

    }
}else{
    const app = express()
    app.get("/",(req,res)=>{
        return setTimeout(() => {
            res.json({
                message: `hello from Express Server ${process.pid}`
            })
        }, 1000);
    })
    app.listen(3000,()=>{
        console.log(`Server is running...${process.pid}`)
    })
}