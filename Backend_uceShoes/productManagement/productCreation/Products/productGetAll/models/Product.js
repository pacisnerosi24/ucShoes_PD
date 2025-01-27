const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Product model
const Product = sequelize.define(
  'Product',
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Auto-increment for product ID
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false, // Product name is required
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false, // Price is required
    },
    description: {
      type: DataTypes.TEXT, // Optional description for the product
    },
    productStatus: {
      type: DataTypes.INTEGER,
      allowNull: false, // Product status is required
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false, // Foreign key for category
    },
  },
  {
    tableName: 'Products', // Explicitly define table name
    timestamps: false, // Disable timestamps
  }
);

module.exports = Product;
