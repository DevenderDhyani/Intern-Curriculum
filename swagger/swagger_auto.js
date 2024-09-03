// generate-swagger.js
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json'; // Path where the Swagger file will be saved
const endpointsFiles = ['./app.js']; // Paths to your API endpoint files

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  require("./app.js") // Your Express app
});