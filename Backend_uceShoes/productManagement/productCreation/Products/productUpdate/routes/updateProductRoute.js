const express = require('express');
const { updateProduct } = require('../controllers/updateProduct');

const router = express.Router();

/**
 * PUT route for updating a product by ID.
 */
router.put('/api/products/:id', updateProduct);

module.exports = router;
