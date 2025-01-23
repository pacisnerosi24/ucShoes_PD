const Category = require('../models/Category');

// Crear una nueva categoría
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    // Crear la nueva categoría
    const newCategory = await Category.create({ name });

    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating category' });
  }
};

module.exports = createCategory;
