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
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT, // Ruta o URL de la imagen
    },
    size: {
      type: DataTypes.STRING(20), // Talla del producto (ejemplo: M, 42)
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Precio con dos decimales
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(50),
    },
    description: {
      type: DataTypes.TEXT, // Descripción detallada del producto
    },
    accessories: {
      type: DataTypes.TEXT, // Información sobre accesorios (si aplica)
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
      defaultValue: DataTypes.NOW, // Fecha de creación por defecto
    },
    brand: {
      type: DataTypes.STRING(50),
    },
    productStatus: {
      type: DataTypes.INTEGER, // Estado del producto (referencia a tabla de estados)
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER, // Llave foránea a Categorías
      allowNull: false,
    },
  },
  {
    tableName: 'Products', // Nombre de la tabla en la base de datos
    timestamps: false, // Desactiva createdAt y updatedAt
  }
);

module.exports = Product;
