const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length; // Number of CPU cores
console.log(numCPUs)
if (cluster.isMaster) {
  // Master process
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Worker processes
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
