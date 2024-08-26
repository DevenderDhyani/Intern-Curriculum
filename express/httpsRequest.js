
const https = require('https');
const fs = require('node:fs')
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
  ca: fs.readFileSync('keys/certificate.pem'),
  rejectUnauthorized: true
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(data));
    console.log(data)
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.end();