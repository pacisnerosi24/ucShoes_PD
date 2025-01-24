const { Sequelize } = require('sequelize');

// Database configuration
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres', // Hardcoded to 'postgres' as required
    port: process.env.DB_PORT || 5432, // Default PostgreSQL port
    logging: false, // Disables logging for a cleaner console
  }
);

module.exports = sequelize;
