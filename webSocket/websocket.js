// websockets are used for a full duplex communication which is not available in http or https(half duplex). 

//  on is an event listner just like http and https. this method will take first parameter as a string and second as callback which runs when any event is occured like any msg recieved, error occured,  connection get closed from the client.
        
//we have to install and import the module. create a server using that module. 
const webSkt = require("ws");
const readline = require('readline')

const rl = readline.createInterface(process.stdin, process.stdout)

const wss = new webSkt.Server({ port: 3000 })

//if server recieves a request to connect then it will be connected and callback will execute.
wss.on('connection', (ws) => {
    console.log("client conencted...")
    //send is a method of object recieved form callback of connection
    //send can be used to deliver the data to the client/server in websocket
    //in http/https we use 'end' but in an express application the method is 'send'
    ws.send("This is the first msg")

    ws.on('message', (message) => {
        if (message != '') {
            console.log(message.toString('utf-8'))
        }
        //the prompt will allow program to enter value
        // rl.setPrompt("Enter MSG")
        rl.prompt("Enter your msg: ");
    });

    //after pressing enter the msg will send in the callback of line which is again an event listener
    rl.on('line', (age) => {
        if(age == "exit"){
            ws.send(`server has been closed`)
        }
        ws.send(`server : ${age}`)
    })

    //now if client get disconnected due to any reason the connection callback function will stop executing
    ws.on('close', () => {
        console.log("client disconnected!")
        ws.send("Sorry for interuption...")
    })

    //if any error occured in the system then also it will no run
    ws.on('error', (err) => {
        console.log("WebSocket Error: ", err)
    })
})
console.log('WebSocket server is running on port number 3000...')



