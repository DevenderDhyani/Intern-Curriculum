// Listen for messages from the parent process
process.on('message', (message) => {
    console.log(`Message from parent: ${message}`);
    
    // Send a message back to the parent process
    setInterval(()=>{
      process.send(`Hello from child ${process.pid}`);
    },1000)
    
    process.send(process.pid)
    
  });
  