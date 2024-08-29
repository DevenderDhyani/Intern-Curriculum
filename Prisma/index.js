const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
require('dotenv').config()

//reguler middleware
//this will allow us from the request body we can actually go ahead and use the json
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//cookie parser
app.use(cookieParser())

const userRouter = require('./routes/userRoutes')
app.use('/api',userRouter)

app.get("/",(req,res)=>{
    res.json({
        value: "Its working"
    })
})

app.listen(3000,()=>console.log('server running on 3000...'))