const cws = require("ws")
const wsc = new cws("ws://localhost:3000");

wsc.on('open',()=>{
    console.log("connected with server...")
    wsc.send("Hello i am client")
})
wsc.on('message',(message)=>{
    console.log("RFS: ",message.toString('utf-8'))
})  

wsc.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
  
// Handle connection close
wsc.on('close', () => {
console.log('Disconnected from WebSocket server');
});



