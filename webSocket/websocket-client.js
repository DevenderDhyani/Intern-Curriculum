const cws = require("ws")

const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

const wsc = new cws("ws://localhost:3000");

wsc.on('open', () => {
    console.log("connected with server...")
    wsc.send("Hello i am client")
})

wsc.on('message', (message) => {
    if(message != ''){
        console.log(message.toString('utf-8'))
    }
    rl.prompt();
})

rl.on('line', (data) => {
    wsc.send(`client : ${data}`)
})
wsc.on('error', (error) => {
    console.error('WebSocket error:', error);
});

// Handle connection close
wsc.on('close', () => {
    console.log('Disconnected from WebSocket server');
});



