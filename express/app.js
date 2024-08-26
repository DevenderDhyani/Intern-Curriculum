//express is a light weight framework  to create servers which can handle multiple http request such as get, post, delete, append

//express creates routes for a perticular request

const express = require('express')
const app = express()

const port = 3100

// index
app.get("/",(req,res)=>{
    console.log("its working")
    const obj = {
        name:"devender dhyani",
        subjects: "java,node,db",
        experties: "javascript"
    }
            //optional...
            //const objText = JSON.stringify(obj)       
    res.send(obj)
})

//services
app.get("/services",(req,res)=>{
    console.log("its working")
    
    res.send("This is a service page")
})

app.get("/achievments",(req,res)=>{
    res.send("Its an achievement..")
    console.log("Its an achievement..")
})

app.get("/network",(req,res)=>{
    console.log("You are in the network")
})

app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`server started on port ${port}`)
})
