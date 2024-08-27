import express from "express";
const app = express();
const port = 3000
app.use(express.json());
const test = {
    name:'Devender Dhyani',
    subject : "Node Js",
    rollbo : 19,
    Univ : "YMCA University"
}
app.get("/",(req,res)=>{
    console.log("Request recieved for GET...")
    res.send(test)
})
app.post("/",(req,res)=>{
    console.log("Request recieved for POST...")
    res.send(test)
})
app.delete("/",(req,res)=>{

})
app.put("/",(req,res)=>{

})

app.listen(port,()=>{
    console.log("Server is running...")
})

