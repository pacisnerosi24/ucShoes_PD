const Category = require('../models/Category');

// Delete category by ID
const deleteCategory = async (req, res) => {
  const { id } = req.params; // Get ID from URL parameters

  try {
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
