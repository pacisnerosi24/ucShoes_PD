const Product = require('../models/Products');

const getProductById = async (req, res) => {
  try {
    const { id } = req.params; // Extract product ID from request parameters
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' }); // Handle product not found
    }

    res.status(200).json(product); // Send product data as a response
  } catch (error) {
    console.error('Error fetching product by ID:', error); // Log the error for debugging
    res.status(500).json({ error: 'Internal server error' }); // Handle unexpected server errors
  }
};

module.exports = { getProductById };
