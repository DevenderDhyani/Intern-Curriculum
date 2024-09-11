const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();

passport.use(new LocalStrategy(
  async (username, password, done) => {
    // Replace with your user lookup and verification logic
    const user = await findUserByUsername(username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return done(null, false, { message: 'Incorrect credentials.' });
    }
    return done(null, user);
  }
));

app.post('/login', passport.authenticate('local'), (req, res) => {
  const token = jwt.sign({ id: req.user.id }, 'your_jwt_secret', { expiresIn: '1h' });
  res.cookie("token", token)
  res.json({ token });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
