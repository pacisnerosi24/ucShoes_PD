const { Product } = require('../models/Products');

const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.destroy({
      where: { productId: productId },
    });

    if (product === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { deleteProduct };
