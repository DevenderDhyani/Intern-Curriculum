const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  // Main thread code
  console.log(`Main thread (PID: ${process.pid}) is running`);

  // Create a new worker thread
  const worker = new Worker(__filename);

  // Send a message to the worker
  worker.postMessage('Hello from main thread');
 console.log('Hello from main thread');

  // Listen for messages from the worker
  worker.on('message', (message) => {
    console.log(`Message from worker: ${message}`);
  });

  // Handle worker errors
  worker.on('error', (error) => {
    console.error(`Worker error: ${error.message}`);
  });

  // Handle worker exit
  worker.on('exit', (code) => {
    if (code !== 0) {
      console.error(`Worker exited with code ${code}`);
    }
  });
} else {
  // Worker thread code
  parentPort.on('message', (message) => {
    console.log(`Received message in worker: ${message}`);

    // Send a message back to the main thread
    parentPort.postMessage('Hello from worker');
  });
}