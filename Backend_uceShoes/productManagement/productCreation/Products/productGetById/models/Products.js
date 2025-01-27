const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define(
  'Product',
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, 
      },
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true, 
        min: 0, 
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: 'Products',
    timestamps: false,
  }
);

module.exports = Product;
