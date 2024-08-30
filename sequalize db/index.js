const { Sequelize } = require('sequelize');

// Create a Sequelize instance and connect to the database
const sequelize = new Sequelize('postgres', 'postgres', '1234', {
  host: 'localhost',
  port:5434,
  dialect: 'postgres',
  logging: false, // Disable logging if not needed
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

// Export the Sequelize instance and models
module.exports = { sequelize };
