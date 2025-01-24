const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../controllers/getAllProductsController');

// Route to fetch all products
router.get('/', getAllProducts);

module.exports = router;
