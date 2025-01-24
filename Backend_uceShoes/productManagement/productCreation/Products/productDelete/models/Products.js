const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Product = sequelize.define('Product', {
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productName: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  size: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL,
  },
  color: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  accessories: {
    type: DataTypes.STRING,
  },
  productCode: {
    type: DataTypes.STRING,
  },
  launchDate: {
    type: DataTypes.DATE,
  },
  brand: {
    type: DataTypes.STRING,
  },
  productStatus: {
    type: DataTypes.INTEGER,
  },
  categoryId: {
    type: DataTypes.INTEGER,
  },
});

module.exports = { Product };
