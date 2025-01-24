const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Product model
const Product = sequelize.define('Product', {
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Automatically increment the product ID
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, // Product name is required
  },
  price: {
    type: DataTypes.DECIMAL(10, 2), // Price with 2 decimal places
    allowNull: false, // Price is required
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false, // Stock quantity is required
  },
}, {
  tableName: 'products', // Explicitly define table name
  timestamps: false, // Disable timestamps since it's not needed
});

module.exports = Product;
