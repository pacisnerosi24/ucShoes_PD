require('dotenv').config(); // Load environment variables from the .env file

const { Sequelize } = require('sequelize');

// Use environment variables for database connection
const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  {
    dialect: 'postgres',
    logging: false, // Disables SQL query logging
  }
);

module.exports = sequelize;
