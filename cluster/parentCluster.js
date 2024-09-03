const { fork } = require('child_process');
const cluster = require("cluster")
const os = require("node:os")

// Fork a new child process running 'child.js'
const child = fork('./childProcess.js');

// Send a message to the child process
setInterval(()=>{
  child.send(`Hello from server ${process.pid}`);
},1000)

// Listen for messages from the child process
child.on('message', (message) => {
  console.log(`Message from child: ${message}`);
});


