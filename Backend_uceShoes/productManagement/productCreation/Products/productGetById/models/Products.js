const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Product model
const Product = sequelize.define(
  'Product',
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
    },
    size: {
      type: DataTypes.STRING(20),
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(50),
    },
    description: {
      type: DataTypes.TEXT,
    },
    accessories: {
      type: DataTypes.TEXT,
    },
    productCode: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    launchDate: {
      type: DataTypes.DATE,
    },
    productRegisterDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    brand: {
      type: DataTypes.STRING(50),
    },
    productStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'Products',
    timestamps: false,
  }
);

module.exports = Product;
