const { DataTypes } = require('sequelize');
const { sequelize } = require('./index'); // Import the Sequelize instance

// Define a User model
const User = sequelize.define('User', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = User;
