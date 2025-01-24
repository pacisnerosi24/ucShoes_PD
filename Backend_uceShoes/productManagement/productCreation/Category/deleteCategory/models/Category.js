const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Category model with necessary fields
const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Automatically increment the ID
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, // Name is required
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true, // Description is optional
  },
}, {
  timestamps: false, // Disable timestamps if not needed
});

module.exports = Category;
