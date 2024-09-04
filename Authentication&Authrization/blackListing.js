// app.js
const express = require('express');
const app = express();

// List of blacklisted IP addresses
const blacklistedIPs = ['::1', '10.0.0.1'];

app.use((req, res, next) => {
  const clientIP = req.ip;

  if (blacklistedIPs.includes(clientIP)) {
    return res.status(403).send('Access denied');
  }

  next();
});

app.get('/', (req, res) => {
    console.log(req.ip)
  res.send('Welcome!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
