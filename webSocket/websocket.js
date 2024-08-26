const webSkt = require("ws");

const wss = new webSkt.Server({port:3000})

wss.on('connection',(ws)=>{
    console.log("client conenction")
    ws.send("This is the first msg")
    ws.on('message',(message)=>{
        console.log(message.toString("utf-8"))
        ws.send("server has recieved the data.")
    });
    ws.on('close',()=>{
        console.log("client disconnected!")
    })
    ws.on('error',(err)=>{
        console.log("WebSocket Error: ",err)
    })
})
console.log('WebSocket server is running on port number 3000...')



