const Product = require('../models/Product');

// Controller to update a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // Get product ID from params
    const { name, price, stock } = req.body; // Get updated data from request body

    // Find the product by ID
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Update product fields only if new values are provided
    product.name = name || product.name;
    product.price = price || product.price;
    product.stock = stock || product.stock;

    // Save updated product
    await product.save();

    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating product' });
  }
};

module.exports = { updateProduct };
