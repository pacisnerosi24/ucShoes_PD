const Product = require('./Products');
const Category = require('./Category');

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

module.exports = { Product, Category }; // Exporta los modelos con sus asociaciones
