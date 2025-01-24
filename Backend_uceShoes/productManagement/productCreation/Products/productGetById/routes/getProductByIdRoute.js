const express = require('express');
const { getProductById } = require('../controllers/getProductByIdController');

const router = express.Router();

// Route to fetch a product by ID
router.get('/:id', getProductById);

module.exports = router;
