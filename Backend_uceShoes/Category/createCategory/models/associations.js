const Category = require('./Category');
const Product = require('../Products/models/Products');

// Definir la relación: Una categoría tiene muchos productos
Category.hasMany(Product, {
  foreignKey: 'categoryId',
  as: 'products', // Alias para la relación
});

// Un producto pertenece a una categoría
Product.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'category', // Alias para la relación inversa
});

module.exports = { Category, Product };
