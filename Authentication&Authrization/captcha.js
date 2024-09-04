const express = require('express');
const bodyParser = require('body-parser');
const svgCaptcha = require('svg-captcha');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

let captchaText = '';

// Route to serve the CAPTCHA image
app.get('/captcha', (req, res) => {
  const captcha = svgCaptcha.create({
    size: 6, // Length of the CAPTCHA text
    noise: 2, // Number of noise lines
    color: true, // Random text color
    background: '#f2f2f2', // Background color
    width: 200, // Width of the image
    height: 60, // Height of the image
  });

  captchaText = captcha.text; // Save the text for verification
  res.type('svg'); // Send the response as an SVG image
  res.send(captcha.data); // Send the CAPTCHA image to the client
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const userCaptcha = req.body.captcha;

  if (userCaptcha === captchaText) {
    res.send('CAPTCHA verified successfully!');
  } else {
    res.send('CAPTCHA verification failed.');
  }
});

// Route to serve the HTML form
app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <label for="captcha">Enter CAPTCHA:</label><br>
      <img src="/captcha" alt="CAPTCHA Image"><br>
      <input type="text" name="captcha" id="captcha" required><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});