const Category = require('../models/Category');

// Delete category by ID
const deleteCategory = async (req, res) => {
  const categoryId = parseInt(req.params.id, 10);
  const { id } = req.params; // Get ID from URL parameters

  if (isNaN(categoryId)) {
    return res.status(400).json({ error: 'Invalid category ID' }); // Validate ID
  }

  try {
    console.log(`🗑 Deleting category with ID: ${categoryId}`);
    const category = await Category.findByPk(id); // Find category by ID

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    await category.destroy(); // Delete category

    return res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = deleteCategory;
