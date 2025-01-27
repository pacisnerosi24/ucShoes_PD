const Product = require('../models/Product');

// Controller to fetch all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll(); // Fetch all products from the database
    return res.status(200).json(products); // Send response with products
  } catch (error) {
    console.error('Error fetching products:', error); // Log error for debugging
    return res.status(500).json({ error: 'Failed to fetch products' }); // Send error response
  }
};

module.exports = { getAllProducts };
